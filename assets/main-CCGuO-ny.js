(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();const m={en:{header:{technology:"Technology",applications:"Applications",impact:"Impact",partner:"Partner"},hero:{title:'Circular solution for <span style="color: var(--color-primary);">over 40 waste streams</span>',subtitle:"Innovative resource with added value for construction and asphalt materials. Diverting ~99% of waste from landfills.",ourTechnology:"Our Technology",partnerWithUs:"Partner With Us",slides:[{alt:"Eco BRICK concrete blocks on a pallet",caption:"eco BRICK blocks"},{alt:"Eco BRICK flooring tiles display",caption:"eco BRICK tiles"},{alt:"Eco BRICK lightweight aggregate stones close up",caption:"eco BRICK lightweight aggregates"},{alt:"Eco BRICK cold mix asphalt bag on pallet",caption:"Cold Mix Asphalt"}]},technology:{title:"The Tech",subtitle:"Turning waste into worth using our proprietary binding technology.",cards:[{title:"Waste Materials",text:"We accept over 40 types of waste including oil sludge, plastics, glass, and textiles, preventing them from reaching landfills.",image:"/assets/tech-waste.png"},{title:"Proprietary Binding",text:"Our unique process uses 20+ specialized binder types to fuse diverse waste streams into valuable construction materials.",image:"/assets/tech-binding.png"},{title:"Certified Aggregate",text:"Our lightweight aggregate is <strong>ASTM C331 compliant</strong>. It offers superior thermal and acoustic insulation while reducing structural dead load.",image:"/assets/tech-aggregate.png"}],videoId:"meGjrfgYuCk"},applications:{title:"Applications",subtitle:"Built for the demands of modern infrastructure.",cards:[{title:"Municipalities",text:"Paving, public parks, and non-structural urban infrastructure."},{title:"Commercial",text:"Green certified office buildings and sustainable landscaping."},{title:"Industrial",text:"Sound barriers, retaining walls, and warehouse flooring."}]},globalPilots:{title:"Global Pilot Projects",subtitle:"See our technology in action around the world",videos:[{title:"Hiriya Pilot: Recycling with Readymix & Shtang",videoId:"HdTkN8Ya1SI"},{title:"Manufacturing Pilot: Sustainable Blocks with Termodan",videoId:"RT5jCu6OIts"},{title:"Demolition Test: High Energy Absorption (Outperforming Concrete)",videoId:"3XEwgcN2U_U"},{title:"Jerusalem City Pilot: Restoring Asphalt Roads with Metzoda",videoId:"pegS7a68k20"},{title:"Thermal Test: Demonstrating Heat Absorption & Insulation",videoId:"soCjMZyFecI"},{title:"Durability Pilot: Stain Resistance Demonstration",videoId:"DEC670fXd08"}]},team:{title:"Our Leadership",subtitle:"Experts committed to a sustainable industrial future.",members:[{name:"Shlomi Perry",role:"Founder & CEO",bio:"B.Sc. Software Engineering. Eco Brick Innovio founder. Entrepreneur in the fields of high-tech and education. Founder of the companies: Innovio Development Ltd., Easylinks Ltd., Matar Robotix Ltd"},{name:"Jacob Biofcic",role:"CTO",bio:"BSc. & MSc. In Plastics Engineering. 14 years of experience in leading and managing projects in the field of plastics, lecturer in Shenkar College"},{name:"Israel Bettelhaim",role:"COO",bio:"Mechanical Engineer. 25 years of experience as director of operations in a quarry and the construction industry."},{name:"Eli Stav",role:"Consultant",bio:"PhD, Chemistry, Building Materials, Polymers. Over 40 years of experience, and out of that 20 years as Director of Technology Development at National Gypsum Company, USA"},{name:"Nechemia Masori",role:"Consultant",bio:"BSc. & MSc. In construction and building materials. More than 40 years of experience, Member of the Israeli Building Code for building materials. Member of standards committees at the Israeli Standards Institution. Professional Committee on Building Materials."},{name:"Bezalel Blum",role:"Consultant",bio:"B.Sc in Chemical Engineering, Technion, Haifa (1982-1985). M.Sc in Oil and Gas Engineering, Technion, Haifa (2015-2017). Chief Process Manager at Bazan Group with 39 years of service. Expertise in oil refining and catalyst characterization. Proficient in process models and simulations for the petrochemical industry."}]},pilots:{title:"Trusted by Leaders",subtitle:"Our technology is validated by industry giants and municipal leaders.",logos:[{name:"Jerusalem City",img:"/assets/logo-jerusalem.png"},{name:"Ashdod City",img:"/assets/logo-ashdod.png"},{name:"Herzliya City",img:"/assets/logo-herzliya.png"},{name:"Hiriya",img:"/assets/logo-hiriya.png"},{name:"Shapir",img:"/assets/logo-shapir.png"},{name:"Readymix",img:"/assets/logo-redimix.png"},{name:"Ben-Ari",img:"/assets/logo-benari.png"},{name:"Oron Group",img:"/assets/logo-oron.png"},{name:"Mtzoda",img:"/assets/logo-mtzoda.png"},{name:"Mister Fix",img:"/assets/logo-misterfix.png"},{name:"Thermodan",img:"/assets/logo-thermodan.png"},{name:"Maffat",img:"/assets/logo-maffat.png"},{name:"iHLS",img:"/assets/logo-ihls.png"},{name:"IDF",img:"/assets/logo-idf.png"}],images:[{src:"/assets/pilot-road.png",caption:"Paving Pilot"},{src:"/assets/product_concrete_blocks_ai.png",caption:"Construction Pilot"},{src:"/assets/pilot-recycling.png",caption:"Recycling Pilot"},{src:"/assets/construction-site-eco-brick.jpg",caption:"Flooring Application"}]},impact:{title:"Our Impact",subtitle:"Halt the growth of massive waste landfills and combat global warming by transforming traditionally unrecyclable waste into valuable resources.",items:[{value:"40+",label:"Waste Streams Processed"},{value:"99%",label:"Landfill Diversion"},{value:"High",label:"Insulation Properties"}]},contact:{title:"Ready to Build?",text:"Partner with eco BRICK Innovio to revolutionize your infrastructure projects.",placeholder:"Enter your email",button:"Request Partnership",footer:"&copy; 2026 Eco BRICK Innovio. All rights reserved.",privacy:"Privacy Policy",terms:"Terms of Service",accessibility:"Accessibility"}},he:{header:{technology:"טכנולוגיה",applications:"יישומים",impact:"השפעה",partner:"שותפות"},hero:{title:'פתרון מעגלי עבור <br> <span style="color: var(--color-primary);">למעלה מ-40 סוגי פסולת</span>',subtitle:"משאב חדשני עם ערך מוסף לחומרי בנייה ואספלט. מונע הטמנה של כ-99% מהפסולת.",ourTechnology:"הטכנולוגיה שלנו",partnerWithUs:"הצטרפו אלינו",slides:[{alt:"בלוקי אקו בריק",caption:"בלוקי אקו בריק"},{alt:"אריחי אקו בריק",caption:"אריחי אקו בריק"},{alt:"אגרגטים קלים אקו בריק",caption:"אגרגטים קלים אקו בריק"},{alt:"אספלט קר",caption:"אספלט קר"}]},technology:{title:"הטכנולוגיה",subtitle:"הופכים פסולת לערך באמצעות טכנולוגיית הקישור הייחודית שלנו.",cards:[{title:"איסוף פסולת",text:"אנו מקבלים מעל 40 סוגי פסולת כולל בוצת שמן, פלסטיק, זכוכית וטקסטיל, ומונעים את הגעתם למטמנות.",image:"/assets/tech-waste.png"},{title:"קישור ייחודי (Proprietary Binding)",text:"התהליך הייחודי שלנו משתמש ב-20+ סוגי מחברים מתמחים למיזוג זרמי פסולת מגוונים לחומרי בנייה בעלי ערך.",image:"/assets/tech-binding.png"},{title:"אגרגט מאושר",text:"האגרגט הקל שלנו הינו <strong>תואם תקן ASTM C331</strong>. הוא מציע בידוד תרמי ואקוסטי מעולה תוך הפחתת עומס מבני.",image:"/assets/tech-aggregate.png"}],videoId:"meGjrfgYuCk"},applications:{title:"יישומים",subtitle:"נבנה לדרישות התשתית המודרנית.",cards:[{title:"רשויות מקומיות",text:"ריצוף, פארקים ציבוריים ותשתיות עירוניות לא מבניות."},{title:"מסחרי",text:"בנייני משרדים ירוקים וגינון בר-קיימא."},{title:"תעשייתי",text:"מחסומי רעש, קירות תמך וריצוף מחסנים."}]},globalPilots:{title:"פרויקטי פיילוט גלובליים",subtitle:"הטכנולוגיה שלנו בפעולה ברחבי העולם",videos:[{title:"פיילוט חירייה: מחזור עם רדימיקס ושטנג",videoId:"HdTkN8Ya1SI"},{title:"פיילוט ייצור: בלוקים קיימים עם תרמודן",videoId:"RT5jCu6OIts"},{title:"מבחן הריסה: ספיגת אנרגיה גבוהה (ביצועים עדיפים על בטון)",videoId:"3XEwgcN2U_U"},{title:"פיילוט עיריית ירושלים: שיקום כבישים עם מצודה",videoId:"pegS7a68k20"},{title:"מבחן תרמי: הדגמת ספיגת חום ובידוד",videoId:"soCjMZyFecI"},{title:"פיילוט עמידות: הדגמת עמידות לכתמים",videoId:"DEC670fXd08"}]},team:{title:"המנהיגות שלנו",subtitle:"מומחים המחויבים לעתיד תעשייתי בר-קיימא.",members:[{name:"Shlomi Perry",role:"Founder & CEO",bio:"B.Sc. Software Engineering. Eco Brick Innovio founder. Entrepreneur in the fields of high-tech and education. Founder of the companies: Innovio Development Ltd., Easylinks Ltd., Matar Robotix Ltd"},{name:"Jacob Biofcic",role:"CTO",bio:"BSc. & MSc. In Plastics Engineering. 14 years of experience in leading and managing projects in the field of plastics, lecturer in Shenkar College"},{name:"Israel Bettelhaim",role:"COO",bio:"Mechanical Engineer. 25 years of experience as director of operations in a quarry and the construction industry."},{name:"Eli Stav",role:"Consultant",bio:"PhD, Chemistry, Building Materials, Polymers. Over 40 years of experience, and out of that 20 years as Director of Technology Development at National Gypsum Company, USA"},{name:"Nechemia Masori",role:"Consultant",bio:"BSc. & MSc. In construction and building materials. More than 40 years of experience, Member of the Israeli Building Code for building materials. Member of standards committees at the Israeli Standards Institution. Professional Committee on Building Materials."},{name:"Bezalel Blum",role:"Consultant",bio:"B.Sc in Chemical Engineering, Technion, Haifa (1982-1985). M.Sc in Oil and Gas Engineering, Technion, Haifa (2015-2017). Chief Process Manager at Bazan Group with 39 years of service. Expertise in oil refining and catalyst characterization. Proficient in process models and simulations for the petrochemical industry."}]},pilots:{title:"בשימוש על ידי המובילים במשק",subtitle:"הטכנולוגיה שלנו מאומתת על ידי ענקיות התעשייה ורשויות מובילות.",logos:[{name:"עיריית ירושלים",img:"/assets/logo-jerusalem.png"},{name:"עיריית אשדוד",img:"/assets/logo-ashdod.png"},{name:"עיריית הרצליה",img:"/assets/logo-herzliya.png"},{name:"חירייה",img:"/assets/logo-hiriya.png"},{name:"שפיר",img:"/assets/logo-shapir.png"},{name:"רדימיקס",img:"/assets/logo-redimix.png"},{name:"בן-ארי",img:"/assets/logo-benari.png"},{name:"קבוצת אורון",img:"/assets/logo-oron.png"},{name:"מצודה",img:"/assets/logo-mtzoda.png"},{name:"מיסטר פיקס",img:"/assets/logo-misterfix.png"},{name:"תרמודן",img:"/assets/logo-thermodan.png"},{name:'מפא"ת',img:"/assets/logo-maffat.png"},{name:"iHLS",img:"/assets/logo-ihls.png"},{name:'צה"ל',img:"/assets/logo-idf.png"}],images:[{src:"/assets/pilot-road.png",caption:"פיילוט סלילה"},{src:"/assets/pilot-construction.png",caption:"פיילוט בנייה"},{src:"/assets/pilot-recycling.png",caption:"פיילוט מחזור"},{src:"/assets/construction-site-eco-brick.jpg",caption:"יישום ריצוף"}]},impact:{title:"ההשפעה שלנו",subtitle:"עצירת הגידול במטמנות פסולת עצומות ומאבק בהתחממות הגלובלית על ידי הפיכת פסולת מסורתית למשאבים יקרי ערך.",items:[{value:"40+",label:"זרמי פסולת מעובדים"},{value:"99%",label:"מניעת הטמנה"},{value:"גבוהה",label:"יכולת בידוד"}]},contact:{title:"מוכנים לבנות?",text:"שתפו פעולה עם Eco BRICK Innovio למהפכה בפרויקטי התשתית שלכם.",placeholder:"הכנס את האימייל שלך",button:"בקשת שותפות",footer:"&copy; 2026 Eco BRICK Innovio. כל הזכויות שמורות.",privacy:"מדיניות פרטיות",terms:"תנאי שימוש",accessibility:"הצהרת נגישות"}}};function u({content:e,toggleLang:t,currentLang:a}){const o=a==="en"?"🇮🇱 HE":"🇺🇸 EN";return`
    <header class="header">
      <div class="container header-content">
        <a href="#" class="logo-link">
          <img src="/assets/logo-v2.jpg" alt="Eco BRICK Innovio" class="logo-img" />
        </a>
        
        <button class="mobile-menu-btn" aria-label="Toggle Navigation" aria-expanded="false" aria-controls="main-nav">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>

        <nav class="nav" id="main-nav">
          <ul class="nav-list">
            <li><a href="#technology" class="nav-link">${e.technology}</a></li>
            <li><a href="#applications" class="nav-link">${e.applications}</a></li>
            <li><a href="#impact" class="nav-link">${e.impact}</a></li>
            <li><button id="lang-toggle" class="btn btn-outline lang-btn">${o}</button></li>
            <li><a href="#contact" class="btn contact-btn" style="background-color: #ffffff; color: #1565C0; border: 1px solid #000000;">${e.partner}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `}const d=[];function h(){d.forEach(clearInterval),d.length=0}function v(e,t=3e3){const a=`carousel-${Math.random().toString(36).substr(2,9)}`;let o=e.map((i,s)=>`
    <div class="carousel-slide ${s===0?"active":""}" data-index="${s}">
      <img src="${i.image}" alt="${i.alt}" class="carousel-img" style="${i.imgStyle||""}">
      ${i.caption?`<div class="carousel-caption"><h3>${i.caption}</h3></div>`:""}
    </div>
  `).join("");return setTimeout(()=>{const i=document.getElementById(a);if(!i)return;let s=0;const n=i.querySelectorAll(".carousel-slide"),r=setInterval(()=>{if(!document.body.contains(i)){clearInterval(r);return}n[s].classList.remove("active"),s=(s+1)%n.length,n[s].classList.add("active")},t);d.push(r)},0),`
    <div id="${a}" class="carousel-container">
      ${o}
    </div>
  `}function f({content:e}){const a=[{image:"/assets/product_concrete_blocks_ai.png"},{image:"/assets/product-tiles.png"},{image:"/assets/product-lightweight-bag.jpg",imgStyle:"transform: scale(1.05);"},{image:"/assets/product-cold-mix-asphalt-bag.png"}].map((o,i)=>({...o,...e.slides[i]||{}}));return`
    <section class="section hero">
      <div class="hero-bg"></div>
      <div class="container hero-content">
        <h1 class="hero-title">
          ${e.title}
        </h1>
        <p class="hero-subtitle">
          ${e.subtitle}
        </p>
        <div class="hero-actions">
          <a href="#technology" class="btn btn-primary">${e.ourTechnology}</a>
          <a href="#contact" class="btn btn-outline">${e.partnerWithUs}</a>
        </div>
      </div>
      <div class="hero-image-container">
         ${v(a,4e3)}
      </div>
    </section>
  `}function b({content:e}){return`
    <section id="technology" class="section zigzag-section">
      <div class="container">
        <div class="section-header fade-in-section">
          <h2 class="section-title">${e.title}</h2>
          <p class="section-subtitle">${e.subtitle}</p>
        </div>
        
        <ul class="zigzag-grid" style="list-style: none; padding: 0; margin: 0;">
          ${e.cards.map((t,a)=>{const o=a%2===0;return`
            <li class="zigzag-row">
              <div class="zigzag-content ${o?"slide-in-left":"slide-in-right"}">
                <div class="zigzag-number">0${a+1}</div>
                <h3>${t.title}</h3>
                <p>${t.text}</p>
              </div>
              <div class="zigzag-image-wrapper ${o?"slide-in-right":"slide-in-left"}">
                <img src="${t.image}" alt="${t.title}" class="zigzag-image" />
              </div>
            </li>
            `}).join("")}
        </ul>
        
        ${e.videoId?`
        <div class="video-container" style="margin-top: 4rem; position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: var(--border-radius-lg); box-shadow: var(--shadow-md);">
          <iframe 
            src="https://www.youtube.com/embed/${e.videoId}" 
            title="Eco Brick Technology"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
        `:""}
      </div>
    </section>
  `}function y({content:e}){return`
    <section id="applications" class="section apps-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${e.title}</h2>
          <p class="section-subtitle">${e.subtitle}</p>
        </div>
        
        <ul class="apps-grid" style="list-style: none; padding: 0; margin: 0;">
          ${e.cards.map((t,a)=>`
            <li class="glass-card app-card ${a%2===0?"slide-in-left":"slide-in-right"}">
              <h3>${t.title}</h3>
              <p>${t.text}</p>
            </li>
          `).join("")}
        </ul>
      </div>
    </section>
  `}function $({content:e}){return`
    <section id="pilots" class="section pilots-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${e.title}</h2>
          <p class="section-subtitle">${e.subtitle}</p>
        </div>
        
        <ul class="partners-grid" style="list-style: none; padding: 0; margin: 0 0 4rem 0;">
          ${e.logos.map(t=>`
            <li class="partner-logo" title="${t.name}">
              <img src="${t.img}" alt="${t.name} logo" />
              <span class="partner-name">${t.name}</span>
            </li>
          `).join("")}
        </ul>

        <ul class="pilots-gallery" style="list-style: none; padding: 0; margin: 0;">
           ${e.images.map(t=>`
            <li class="pilot-card">
              <img src="${t.src}" alt="${t.caption}" />
              <div class="pilot-caption">${t.caption}</div>
            </li>
           `).join("")}
        </ul>
      </div>
    </section>
  `}function I({content:e}){return`
    <section class="section global-pilots-section" id="global-pilots">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${e.title}</h2>
          <p class="section-subtitle">${e.subtitle}</p>
        </div>
        <div class="pilots-grid">
          ${e.videos.map((t,a)=>`
            <div class="video-card">
              <div class="video-placeholder" 
                   style="background-image: url('https://img.youtube.com/vi/${t.videoId}/hqdefault.jpg'); background-size: cover; background-position: center;"
                   onclick="this.innerHTML = '<iframe width='100%' height='100%' src='https://www.youtube.com/embed/${t.videoId}?autoplay=1' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>'">
                <div class="play-button">
                  <div class="play-icon"></div>
                </div>
                <span class="video-label">${t.title}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function w({content:e}){return`
    <section class="section team-section" id="team">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${e.title}</h2>
          <p class="section-subtitle">${e.subtitle}</p>
        </div>
        <ul class="team-grid" style="list-style: none; padding: 0; margin: 0;">
          ${e.members.map(t=>`
            <li class="team-card">
              <div class="team-info">
                <h3 class="team-name">${t.name}</h3>
                <p class="team-role">${t.role}</p>
                <p class="team-bio">${t.bio}</p>
              </div>
            </li>
          `).join("")}
        </ul>
      </div>
    </section>
  `}function C({content:e}){return`
    <section id="impact" class="section impact-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${e.title}</h2>
          <p class="section-subtitle">
            ${e.subtitle}
          </p>
        </div>
        
        <ul class="impact-grid" style="list-style: none; padding: 0; margin: 0;">
          ${e.items.map(t=>`
            <li class="impact-card glass-card">
              <div class="impact-value">${t.value}</div>
              <div class="impact-label">${t.label}</div>
            </li>
          `).join("")}
        </ul>
      </div>
    </section>
  `}function x({content:e}){return`
    <section id="contact" class="section contact-section">
      <div class="container contact-container">
        <div class="contact-content glass-panel" style="padding: 3rem; border-radius: var(--border-radius-lg);">
          <h2 class="contact-title">${e.title}</h2>
          <p class="contact-text">
            ${e.text}
          </p>
          <form class="contact-form" onsubmit="event.preventDefault(); const email = this.querySelector('input[type=email]').value; window.location.href = 'mailto:office@ecobrick.tech?subject=New Partnership Request&body=I am interested in a partnership. Please contact me at: ' + email;">
            <div class="form-group">
              <input type="email" name="email" placeholder="${e.placeholder}" aria-label="${e.placeholder}" required class="form-input">
            </div>
            <button type="submit" class="btn btn-primary">${e.button}</button>
          </form>
        </div>
      </div>
    </section>
    
    <footer class="footer">
      <div class="container footer-content" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <p style="margin: 0;">${e.footer}</p>
        <div class="footer-links" style="display: flex; gap: 2rem; align-items: center;">
          <a href="/privacy.html" style="color: white; text-decoration: none;">${e.privacy}</a>
          <a href="/terms.html" style="color: white; text-decoration: none;">${e.terms}</a>
          <a href="/accessibility.html" style="color: white; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">
            <img src="/assets/accessibility-icon-new.jpg" alt="" style="height: 24px; width: 24px; border-radius: 50%;" />
            ${e.accessibility}
          </a>
          <a href="https://www.linkedin.com/company/ecobrick-innovio" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: none;">LinkedIn</a>
        </div>
      </div>
    </footer>
  `}let l="en";function p(){try{let a=function(){const i={root:null,rootMargin:"0px",threshold:.1},s=new IntersectionObserver((n,r)=>{n.forEach(c=>{c.isIntersecting&&(c.target.classList.add("is-visible"),r.unobserve(c.target))})},i);document.querySelectorAll("section, .hero, .footer").forEach(n=>{n.classList.add("fade-in-section"),s.observe(n)}),document.querySelectorAll(".slide-in-left, .slide-in-right").forEach(n=>{s.observe(n)})};var e=a;h();const t=m[l];document.body.dir=l==="he"?"rtl":"ltr",document.documentElement.lang=l;const o=document.querySelector("#app");o?(o.innerHTML=`
          ${u({content:t.header,currentLang:l})}
          <main id="main-content">
            ${f({content:t.hero})}
            ${b({content:t.technology})}
            ${y({content:t.applications})}
            ${$({content:t.pilots})}
            ${I({content:t.globalPilots})}
            ${w({content:t.team})}
            ${C({content:t.impact})}
            ${x({content:t.contact})}
          </main>
          <!-- \${AccessibilityWidget()} -->
        `,setTimeout(a,100),E()):console.error("Fatal Error: #app element not found")}catch(t){console.error("Critical Error in renderApp:",t)}}function E(){const e=document.getElementById("lang-toggle");e&&(e.removeEventListener("click",g),e.addEventListener("click",g));const t=document.querySelector(".mobile-menu-btn"),a=document.querySelector(".nav"),o=document.querySelectorAll(".nav-link, .contact-btn");t&&a&&(t.addEventListener("click",()=>{const i=t.classList.contains("active");t.setAttribute("aria-expanded",!i),t.classList.toggle("active"),a.classList.toggle("active"),document.body.style.overflow=a.classList.contains("active")?"hidden":""}),o.forEach(i=>{i.addEventListener("click",()=>{t.classList.remove("active"),a.classList.remove("active"),document.body.style.overflow=""})}))}function g(){l=l==="en"?"he":"en",p()}p();
