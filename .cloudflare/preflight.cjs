const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');
const manifest=JSON.parse(fs.readFileSync(path.join(__dirname,'documents-manifest.json'),'utf8'));
for(const record of manifest){const file=path.join(root,'Data-Room','docs',record.filename);if(!fs.existsSync(file))throw Error('Missing protected document: '+record.filename);const hash=crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');if(hash!==record.sha256)throw Error('Document changed: '+record.filename);}
const config=JSON.parse(fs.readFileSync(path.join(__dirname,'wrangler.jsonc'),'utf8').replace(/^\uFEFF/,''));
if(config.workers_dev!==false||config.preview_urls!==false||config.assets.run_worker_first!==true||!config.vars.DATAROOM_AUDIENCE||!config.vars.BUDGET_AUDIENCE)throw Error('Protected deployment settings are invalid');
console.log('Verified '+manifest.length+' protected documents and required Access settings.');
