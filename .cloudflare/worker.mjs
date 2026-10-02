const encoder = new TextEncoder();
let certificateCache;
function decode(value) {
  if (!/^[A-Za-z0-9_-]+$/.test(value)) throw new Error('Invalid token');
  return Uint8Array.from(atob(value.replace(/-/g,'+').replace(/_/g,'/')), c=>c.charCodeAt(0));
}
function object(value) {return JSON.parse(new TextDecoder().decode(decode(value)));}
async function certificates(issuer, upstreamFetch, refresh=false) {
  if (!refresh && certificateCache?.issuer===issuer && certificateCache.expires>Date.now()) return certificateCache.keys;
  const response=await upstreamFetch(issuer+'/cdn-cgi/access/certs',{signal:AbortSignal.timeout(5000)});
  if (!response.ok) throw new Error('Certificate service unavailable');
  const {keys}=await response.json();
  if (!Array.isArray(keys)) throw new Error('Invalid certificates');
  certificateCache={issuer,keys,expires:Date.now()+300000};
  return keys;
}
export async function verifyAccess(token, issuer, audience, upstreamFetch=fetch) {
  try {
    if (!token || token.length>16384 || !issuer || !audience) return false;
    const parts=token.split('.');
    if(parts.length!==3) return false;
    const header=object(parts[0]);
    const claims=object(parts[1]);
    const now=Math.floor(Date.now()/1000);
    if(header.alg!=='RS256'||typeof header.kid!=='string') return false;
    if(claims.iss!==issuer||!Array.isArray(claims.aud)||!claims.aud.includes(audience)) return false;
    if(!Number.isFinite(claims.exp)||claims.exp<=now) return false;
    if(!Number.isFinite(claims.iat)||claims.iat>now+60) return false;
    if(claims.nbf!==undefined&&(!Number.isFinite(claims.nbf)||claims.nbf>now)) return false;
    if(typeof claims.email!=='string'||!claims.email.includes('@')) return false;
    let keys=await certificates(issuer,upstreamFetch);
    let jwk=keys.find(key=>key.kid===header.kid&&key.kty==='RSA');
    if(!jwk) { keys=await certificates(issuer,upstreamFetch,true); jwk=keys.find(key=>key.kid===header.kid&&key.kty==='RSA'); }
    if(!jwk) return false;
    const key=await crypto.subtle.importKey('jwk',jwk,{name:'RSASSA-PKCS1-v1_5',hash:'SHA-256'},false,['verify']);
    return await crypto.subtle.verify('RSASSA-PKCS1-v1_5',key,decode(parts[2]),encoder.encode(parts[0]+'.'+parts[1]));
  } catch {return false;}
}
export function confidentialPath(pathname) {
  let decoded;
  try { decoded=decodeURIComponent(pathname); } catch {return true;}
  return /^\/Business-Plan(?:\/|$)/i.test(decoded)
    || /^\/Data-Room(?:\/|$)/i.test(decoded)
    || /^\/assets\/(?:data-CC4OF5fc\.json|Budget-Dosl5nFW\.js|Budget-Bjo_k_gY\.css)$/i.test(decoded);
}
function locked(status=403) {
  return new Response('Access requires the owner\'s approval.',{status,headers:{'Content-Type':'text/plain; charset=utf-8','Cache-Control':'private, no-store','X-Robots-Tag':'noindex, nofollow, noarchive','X-Content-Type-Options':'nosniff'}});
}
const videoPath='/Data-Room/docs/eco-BRICK-Technology-Overview-Video.mp4';
const videoSize=197629293;
const videoChunkSize=20*1024*1024;
async function protectedVideo(request,env) {
  let start=0,end=videoSize-1,status=200;
  const range=request.headers.get('Range');
  const headers={'Content-Type':'video/mp4','Accept-Ranges':'bytes','Cache-Control':'private, no-store','X-Robots-Tag':'noindex, nofollow, noarchive','X-Content-Type-Options':'nosniff'};
  if(range) {
    const match=/^bytes=(\d*)-(\d*)$/.exec(range);
    if(!match||(!match[1]&&!match[2])) return new Response(null,{status:416,headers:{...headers,'Content-Range':`bytes */${videoSize}`}});
    if(!match[1]) {const length=Number(match[2]);start=Math.max(0,videoSize-length);}
    else {start=Number(match[1]);if(match[2]) end=Math.min(Number(match[2]),end);}
    if(!Number.isSafeInteger(start)||!Number.isSafeInteger(end)||start>end||start>=videoSize) return new Response(null,{status:416,headers:{...headers,'Content-Range':`bytes */${videoSize}`}});
    status=206;headers['Content-Range']=`bytes ${start}-${end}/${videoSize}`;
  }
  headers['Content-Length']=String(end-start+1);
  if(request.method==='HEAD') return new Response(null,{status,headers});
  let cursor=start;
  const body=new ReadableStream({
    async pull(controller) {
      try {
        if(cursor>end) {controller.close();return;}
        const index=Math.floor(cursor/videoChunkSize);
        const assetUrl=new URL(request.url);assetUrl.pathname=`/Data-Room/video-parts/${String(index).padStart(3,'0')}.bin`;assetUrl.search='';
        const asset=await env.ASSETS.fetch(new Request(assetUrl));
        if(!asset.ok) throw new Error('Video segment unavailable');
        const bytes=new Uint8Array(await asset.arrayBuffer());
        const offset=cursor-index*videoChunkSize;
        const amount=Math.min(bytes.length-offset,end-cursor+1);
        if(amount<=0) throw new Error('Invalid video segment');
        controller.enqueue(bytes.subarray(offset,offset+amount));cursor+=amount;
      } catch(error) {controller.error(error);}
    }
  });
  return new Response(body,{status,headers});
}
export function createWorker(upstreamFetch=fetch) {
 return {
  async fetch(request,env) {
    const url=new URL(request.url);
    if(url.hostname==='www.ecobrick.tech') {
      url.hostname='ecobrick.tech';
      return Response.redirect(url.toString(),308);
    }
    const confidential=confidentialPath(url.pathname);
    // Only the configured hostname is exposed. No alternate preview/origin is a fallback.
    if(url.hostname!=='ecobrick.tech') return locked();
    if(confidential) {
      const budget=/^\/Business-Plan(?:\/|$)/.test(url.pathname);
      const room=/^\/Data-Room(?:\/|$)/.test(url.pathname);
      if(!budget&&!room) return locked(404);
      const token=request.headers.get('Cf-Access-Jwt-Assertion');
      const audience=budget?env.BUDGET_AUDIENCE:env.DATAROOM_AUDIENCE;
      if(!audience||!await verifyAccess(token,env.ACCESS_ISSUER,audience,upstreamFetch)) return locked();
    }
    if(!['GET','HEAD'].includes(request.method)) return new Response('Method not allowed',{status:405,headers:{Allow:'GET, HEAD'}});
    if(url.pathname===videoPath) return protectedVideo(request,env);
    const response=await env.ASSETS.fetch(request);
    if(!confidential) return response;
    const result=new Response(response.body,response);
    result.headers.set('Cache-Control','private, no-store');
    result.headers.set('X-Robots-Tag','noindex, nofollow, noarchive');
    result.headers.set('X-Content-Type-Options','nosniff');
    return result;
  }
 };
}
export default createWorker();
