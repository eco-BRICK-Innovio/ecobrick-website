(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const p={en:{header:{technology:"Technology",applications:"Applications",impact:"Impact",partner:"Partner"},hero:{title:'Circular solution for <span style="color: var(--color-primary);">over 40 waste streams</span>',subtitle:"Innovative resource with added value for construction and asphalt materials. Diverting ~99% of waste from landfills.",ourTechnology:"Our Technology",partnerWithUs:"Partner With Us",slides:[{alt:"Eco BRICK Blocks",caption:"eco BRICK blocks"},{alt:"Eco BRICK Tiles",caption:"eco BRICK tiles"},{alt:"Eco BRICK Lightweight Aggregates",caption:"eco BRICK lightweight aggregates"},{alt:"Cold Mix Asphalt",caption:"Cold Mix Asphalt"}]},technology:{title:"The Tech",subtitle:"Turning waste into worth using our proprietary binding technology.",cards:[{title:"Waste Materials",text:"We accept over 40 types of waste including oil sludge, plastics, glass, and textiles, preventing them from reaching landfills.",image:"/ecobrick-website/assets/tech-waste.png"},{title:"Proprietary Binding",text:"Our unique process uses 20+ specialized binder types to fuse diverse waste streams into valuable construction materials.",image:"/ecobrick-website/assets/tech-binding.png"},{title:"Certified Aggregate",text:"Our lightweight aggregate is <strong>ASTM C331 compliant</strong>. It offers superior thermal and acoustic insulation while reducing structural dead load.",image:"/ecobrick-website/assets/tech-aggregate.png"}],videoId:"meGjrfgYuCk"},applications:{title:"Applications",subtitle:"Built for the demands of modern infrastructure.",cards:[{title:"Municipalities",text:"Paving, public parks, and non-structural urban infrastructure."},{title:"Commercial",text:"Green certified office buildings and sustainable landscaping."},{title:"Industrial",text:"Sound barriers, retaining walls, and warehouse flooring."}]},team:{title:"Our Leadership",subtitle:"Experts committed to a sustainable industrial future.",members:[{name:"Shlomi Perry",role:"Founder & CEO",bio:"B.Sc. Software Engineering. Eco Brick Innovio founder. Entrepreneur in the fields of high-tech and education. Founder of the companies: Innovio Development Ltd., Easylinks Ltd., Matar Robotix Ltd"},{name:"Jacob Biofcic",role:"CTO",bio:"BSc. & MSc. In Plastics Engineering. 14 years of experience in leading and managing projects in the field of plastics, lecturer in Shenkar College"},{name:"Israel Bettelhaim",role:"COO",bio:"Mechanical Engineer. 25 years of experience as director of operations in a quarry and the construction industry."},{name:"Eli Stav",role:"Consultant",bio:"PhD, Chemistry, Building Materials, Polymers. Over 40 years of experience, and out of that 20 years as Director of Technology Development at National Gypsum Company, USA"},{name:"Nechemia Masori",role:"Consultant",bio:"BSc. & MSc. In construction and building materials. More than 40 years of experience, Member of the Israeli Building Code for building materials. Member of standards committees at the Israeli Standards Institution. Professional Committee on Building Materials."},{name:"Bezalel Blum",role:"Consultant",bio:"B.Sc in Chemical Engineering, Technion, Haifa (1982-1985). M.Sc in Oil and Gas Engineering, Technion, Haifa (2015-2017). Chief Process Manager at Bazan Group with 39 years of service. Expertise in oil refining and catalyst characterization. Proficient in process models and simulations for the petrochemical industry."}]},pilots:{title:"Trusted by Leaders",subtitle:"Our technology is validated by industry giants and municipal leaders.",logos:[{name:"Jerusalem City",img:"/ecobrick-website/assets/logo-jerusalem.png"},{name:"Ashdod City",img:"/ecobrick-website/assets/logo-ashdod.png"},{name:"Herzliya City",img:"/ecobrick-website/assets/logo-herzliya.png"},{name:"Hiriya",img:"/ecobrick-website/assets/logo-hiriya.png"},{name:"Shapir",img:"/ecobrick-website/assets/logo-shapir.png"},{name:"Redimix",img:"/ecobrick-website/assets/logo-redimix.png"},{name:"Ben-Ari",img:"/ecobrick-website/assets/logo-benari.png"},{name:"Oron Group",img:"/ecobrick-website/assets/logo-oron.png"},{name:"Mtzoda",img:"/ecobrick-website/assets/logo-mtzoda.png"},{name:"Mister Fix",img:"/ecobrick-website/assets/logo-misterfix.png"},{name:"Thermodan",img:"/ecobrick-website/assets/logo-thermodan.png"},{name:"Maffat",img:"/ecobrick-website/assets/logo-maffat.png"},{name:"iHLS",img:"/ecobrick-website/assets/logo-ihls.png"},{name:"IDF",img:"/ecobrick-website/assets/logo-idf.png"}],images:[{src:"/ecobrick-website/assets/pilot-road.png",caption:"Paving Pilot"},{src:"/ecobrick-website/assets/product_concrete_blocks_ai.png",caption:"Construction Pilot"},{src:"/ecobrick-website/assets/pilot-recycling.png",caption:"Recycling Pilot"},{src:"/ecobrick-website/assets/construction-site-eco-brick.jpg",caption:"Flooring Application"}]},impact:{title:"Our Impact",subtitle:"Halt the growth of massive waste landfills and combat global warming by transforming traditionally unrecyclable waste into valuable resources.",items:[{value:"40+",label:"Waste Streams Processed"},{value:"99%",label:"Landfill Diversion"},{value:"High",label:"Insulation Properties"}]},contact:{title:"Ready to Build?",text:"Partner with eco BRICK Innovio to revolutionize your infrastructure projects.",placeholder:"Enter your email",button:"Request Partnership",footer:"&copy; 2026 Eco BRICK Innovio. All rights reserved."}},he:{header:{technology:"טכנולוגיה",applications:"יישומים",impact:"השפעה",partner:"שותפות"},hero:{title:'פתרון מעגלי עבור <br> <span style="color: var(--color-primary);">למעלה מ-40 סוגי פסולת</span>',subtitle:"משאב חדשני עם ערך מוסף לחומרי בנייה ואספלט. מונע הטמנה של כ-99% מהפסולת.",ourTechnology:"הטכנולוגיה שלנו",partnerWithUs:"הצטרפו אלינו",slides:[{alt:"בלוקי אקו בריק",caption:"בלוקי אקו בריק"},{alt:"אריחי אקו בריק",caption:"אריחי אקו בריק"},{alt:"אגרגטים קלים אקו בריק",caption:"אגרגטים קלים אקו בריק"},{alt:"אספלט קר",caption:"אספלט קר"}]},technology:{title:"הטכנולוגיה",subtitle:"הופכים פסולת לערך באמצעות טכנולוגיית הקישור הייחודית שלנו.",cards:[{title:"איסוף פסולת",text:"אנו מקבלים מעל 40 סוגי פסולת כולל בוצת שמן, פלסטיק, זכוכית וטקסטיל, ומונעים את הגעתם למטמנות.",image:"/ecobrick-website/assets/tech-waste.png"},{title:"קישור ייחודי (Proprietary Binding)",text:"התהליך הייחודי שלנו משתמש ב-20+ סוגי מחברים מתמחים למיזוג זרמי פסולת מגוונים לחומרי בנייה בעלי ערך.",image:"/ecobrick-website/assets/tech-binding.png"},{title:"אגרגט מאושר",text:"האגרגט הקל שלנו הינו <strong>תואם תקן ASTM C331</strong>. הוא מציע בידוד תרמי ואקוסטי מעולה תוך הפחתת עומס מבני.",image:"/ecobrick-website/assets/tech-aggregate.png"}],videoId:"meGjrfgYuCk"},applications:{title:"יישומים",subtitle:"נבנה לדרישות התשתית המודרנית.",cards:[{title:"רשויות מקומיות",text:"ריצוף, פארקים ציבוריים ותשתיות עירוניות לא מבניות."},{title:"מסחרי",text:"בנייני משרדים ירוקים וגינון בר-קיימא."},{title:"תעשייתי",text:"מחסומי רעש, קירות תמך וריצוף מחסנים."}]},team:{title:"המנהיגות שלנו",subtitle:"מומחים המחויבים לעתיד תעשייתי בר-קיימא.",members:[{name:"Shlomi Perry",role:"Founder & CEO",bio:"B.Sc. Software Engineering. Eco Brick Innovio founder. Entrepreneur in the fields of high-tech and education. Founder of the companies: Innovio Development Ltd., Easylinks Ltd., Matar Robotix Ltd"},{name:"Jacob Biofcic",role:"CTO",bio:"BSc. & MSc. In Plastics Engineering. 14 years of experience in leading and managing projects in the field of plastics, lecturer in Shenkar College"},{name:"Israel Bettelhaim",role:"COO",bio:"Mechanical Engineer. 25 years of experience as director of operations in a quarry and the construction industry."},{name:"Eli Stav",role:"Consultant",bio:"PhD, Chemistry, Building Materials, Polymers. Over 40 years of experience, and out of that 20 years as Director of Technology Development at National Gypsum Company, USA"},{name:"Nechemia Masori",role:"Consultant",bio:"BSc. & MSc. In construction and building materials. More than 40 years of experience, Member of the Israeli Building Code for building materials. Member of standards committees at the Israeli Standards Institution. Professional Committee on Building Materials."},{name:"Bezalel Blum",role:"Consultant",bio:"B.Sc in Chemical Engineering, Technion, Haifa (1982-1985). M.Sc in Oil and Gas Engineering, Technion, Haifa (2015-2017). Chief Process Manager at Bazan Group with 39 years of service. Expertise in oil refining and catalyst characterization. Proficient in process models and simulations for the petrochemical industry."}]},pilots:{title:"בשימוש על ידי המובילים במשק",subtitle:"הטכנולוגיה שלנו מאומתת על ידי ענקיות התעשייה ורשויות מובילות.",logos:[{name:"עיריית ירושלים",img:"/ecobrick-website/assets/logo-jerusalem.png"},{name:"עיריית אשדוד",img:"/ecobrick-website/assets/logo-ashdod.png"},{name:"עיריית הרצליה",img:"/ecobrick-website/assets/logo-herzliya.png"},{name:"חירייה",img:"/ecobrick-website/assets/logo-hiriya.png"},{name:"שפיר",img:"/ecobrick-website/assets/logo-shapir.png"},{name:"רדימיקס",img:"/ecobrick-website/assets/logo-redimix.png"},{name:"בן-ארי",img:"/ecobrick-website/assets/logo-benari.png"},{name:"קבוצת אורון",img:"/ecobrick-website/assets/logo-oron.png"},{name:"מצודה",img:"/ecobrick-website/assets/logo-mtzoda.png"},{name:"מיסטר פיקס",img:"/ecobrick-website/assets/logo-misterfix.png"},{name:"תרמודן",img:"/ecobrick-website/assets/logo-thermodan.png"},{name:'מפא"ת',img:"/ecobrick-website/assets/logo-maffat.png"},{name:"iHLS",img:"/ecobrick-website/assets/logo-ihls.png"},{name:'צה"ל',img:"/ecobrick-website/assets/logo-idf.png"}],images:[{src:"/ecobrick-website/assets/pilot-road.png",caption:"פיילוט סלילה"},{src:"/ecobrick-website/assets/pilot-construction.png",caption:"פיילוט בנייה"},{src:"/ecobrick-website/assets/pilot-recycling.png",caption:"פיילוט מחזור"},{src:"/ecobrick-website/assets/construction-site-eco-brick.jpg",caption:"יישום ריצוף"}]},impact:{title:"ההשפעה שלנו",subtitle:"עצירת הגידול במטמנות פסולת עצומות ומאבק בהתחממות הגלובלית על ידי הפיכת פסולת מסורתית למשאבים יקרי ערך.",items:[{value:"40+",label:"זרמי פסולת מעובדים"},{value:"99%",label:"מניעת הטמנה"},{value:"גבוהה",label:"יכולת בידוד"}]},contact:{title:"מוכנים לבנות?",text:"שתפו פעולה עם Eco BRICK Innovio למהפכה בפרויקטי התשתית שלכם.",placeholder:"הכנס את האימייל שלך",button:"בקשת שותפות",footer:"&copy; 2026 Eco BRICK Innovio. כל הזכויות שמורות."}}};function m({content:e,toggleLang:i,currentLang:o}){const a=o==="en"?"🇮🇱 HE":"🇺🇸 EN";return`
    <header class="header">
      <div class="container header-content">
        <a href="#" class="logo-link">
          <img src="/ecobrick-website/logo.jpg" alt="Eco BRICK Innovio" class="logo-img" />
        </a>
        <nav class="nav">
          <ul class="nav-list">
            <li><a href="#technology">${e.technology}</a></li>
            <li><a href="#applications">${e.applications}</a></li>
            <li><a href="#impact">${e.impact}</a></li>
            <li><button id="lang-toggle" class="btn btn-outline" style="padding: 0.5rem 0.75rem; min-width: 60px;">${a}</button></li>
            <li><a href="#contact" class="btn btn-outline" style="padding: 0.5rem 1rem; font-size: 0.9rem;">${e.partner}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `}const l=[];function u(){l.forEach(clearInterval),l.length=0}function b(e,i=3e3){const o=`carousel-${Math.random().toString(36).substr(2,9)}`;let a=e.map((t,s)=>`
    <div class="carousel-slide ${s===0?"active":""}" data-index="${s}">
      <img src="${t.image}" alt="${t.alt}" class="carousel-img" style="${t.imgStyle||""}">
      ${t.caption?`<div class="carousel-caption"><h3>${t.caption}</h3></div>`:""}
    </div>
  `).join("");return setTimeout(()=>{const t=document.getElementById(o);if(!t)return;let s=0;const n=t.querySelectorAll(".carousel-slide"),r=setInterval(()=>{if(!document.body.contains(t)){clearInterval(r);return}n[s].classList.remove("active"),s=(s+1)%n.length,n[s].classList.add("active")},i);l.push(r)},0),`
    <div id="${o}" class="carousel-container">
      ${a}
    </div>
  `}function h({content:e}){const o=[{image:"/ecobrick-website/assets/product_concrete_blocks_ai.png"},{image:"/ecobrick-website/assets/product-tiles.png"},{image:"/ecobrick-website/assets/product-lightweight-bag.jpg",imgStyle:"transform: scale(1.05);"},{image:"/ecobrick-website/assets/product-cold-mix-asphalt-bag.png"}].map((a,t)=>({...a,...e.slides[t]||{}}));return`
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
         ${b(o,4e3)}
      </div>
    </section>
  `}function f({content:e}){return`
    <section id="technology" class="section zigzag-section">
      <div class="container">
        <div class="section-header fade-in-section">
          <h2 class="section-title">${e.title}</h2>
          <p class="section-subtitle">${e.subtitle}</p>
        </div>
        
        <div class="zigzag-grid">
          ${e.cards.map((i,o)=>{const a=o%2===0;return`
            <div class="zigzag-row">
              <div class="zigzag-content ${a?"slide-in-left":"slide-in-right"}">
                <div class="zigzag-number">0${o+1}</div>
                <h3>${i.title}</h3>
                <p>${i.text}</p>
              </div>
              <div class="zigzag-image-wrapper ${a?"slide-in-right":"slide-in-left"}">
                <img src="${i.image}" alt="${i.title}" class="zigzag-image" />
              </div>
            </div>
            `}).join("")}
        </div>
        
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
  `}function v({content:e}){return`
    <section id="applications" class="section apps-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${e.title}</h2>
          <p class="section-subtitle">${e.subtitle}</p>
        </div>
        
        <div class="apps-grid">
          ${e.cards.map((i,o)=>`
            <div class="glass-card app-card ${o%2===0?"slide-in-left":"slide-in-right"}">
              <h3>${i.title}</h3>
              <p>${i.text}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function y({content:e}){return`
    <section id="pilots" class="section pilots-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${e.title}</h2>
          <p class="section-subtitle">${e.subtitle}</p>
        </div>
        
        <div class="partners-grid">
          ${e.logos.map(i=>`
            <div class="partner-logo" title="${i.name}">
              <img src="${i.img}" alt="${i.name}" />
              <span class="partner-name">${i.name}</span>
            </div>
          `).join("")}
        </div>

        <div class="pilots-gallery">
           ${e.images.map(i=>`
            <div class="pilot-card">
              <img src="${i.src}" alt="${i.caption}" />
              <div class="pilot-caption">${i.caption}</div>
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
        <div class="team-grid">
          ${e.members.map(i=>`
            <div class="team-card">
              <div class="team-info">
                <h3 class="team-name">${i.name}</h3>
                <p class="team-role">${i.role}</p>
                <p class="team-bio">${i.bio}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function $({content:e}){return`
    <section id="impact" class="section impact-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${e.title}</h2>
          <p class="section-subtitle">
            ${e.subtitle}
          </p>
        </div>
        
        <div class="impact-grid">
          ${e.items.map(i=>`
            <div class="impact-card glass-card">
              <div class="impact-value">${i.value}</div>
              <div class="impact-label">${i.label}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function k({content:e}){return`
    <section id="contact" class="section contact-section">
      <div class="container contact-container">
        <div class="contact-content glass-panel" style="padding: 3rem; border-radius: var(--border-radius-lg);">
          <h2 class="contact-title">${e.title}</h2>
          <p class="contact-text">
            ${e.text}
          </p>
          <form class="contact-form" onsubmit="event.preventDefault(); const email = this.querySelector('input[type=email]').value; window.location.href = 'mailto:office@ecobrick.tech?subject=New Partnership Request&body=I am interested in a partnership. Please contact me at: ' + email;">
            <div class="form-group">
              <input type="email" name="email" placeholder="${e.placeholder}" required class="form-input">
            </div>
            <button type="submit" class="btn btn-primary">${e.button}</button>
          </form>
        </div>
      </div>
    </section>
    
    <footer class="footer">
      <div class="container footer-content">
        <p>${e.footer}</p>
        <div class="social-links">
          <a href="https://www.linkedin.com/company/ecobrick-innovio" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  `}let c="en";function g(){u();const e=p[c];document.body.dir=c==="he"?"rtl":"ltr",document.documentElement.lang=c;function i(){const a={root:null,rootMargin:"0px",threshold:.1},t=new IntersectionObserver((s,n)=>{s.forEach(r=>{r.isIntersecting&&(r.target.classList.add("is-visible"),n.unobserve(r.target))})},a);document.querySelectorAll("section, .hero, .footer").forEach(s=>{s.classList.add("fade-in-section"),t.observe(s)}),document.querySelectorAll(".slide-in-left, .slide-in-right").forEach(s=>{t.observe(s)}),document.querySelectorAll(".app-card, .pilot-card, .team-card").forEach((s,n)=>{s.classList.add("fade-in-section"),t.observe(s)})}const o=document.querySelector("#app");if(o){o.innerHTML=`
      ${m({content:e.header,currentLang:c})}
      <main>
        ${h({content:e.hero})}
        ${f({content:e.technology})}
        ${v({content:e.applications})}
        ${y({content:e.pilots})}
        ${w({content:e.team})}
        ${$({content:e.impact})}
        ${k({content:e.contact})}
      </main>
    `,i();const a=document.getElementById("lang-toggle");a&&(a.removeEventListener("click",d),a.addEventListener("click",d))}else console.error("Fatal Error: #app element not found")}function d(){c=c==="en"?"he":"en",g()}g();
