(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();function s({content:r,toggleLang:t,currentLang:n}){const l=n==="en"?"🇮🇱 HE":"🇺🇸 EN";return`
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
            <li><a href="#technology" class="nav-link">${r.technology}</a></li>
            <li><a href="#applications" class="nav-link">${r.applications}</a></li>
            <li><a href="#impact" class="nav-link">${r.impact}</a></li>
            <li><a href="technical-library.html" class="nav-link">${r.technicalLibrary||"Technical Library"}</a></li>
            <li><button id="lang-toggle" class="btn btn-outline lang-btn">${l}</button></li>
            <li><a href="${r.partnerLink||"#contact"}" class="btn contact-btn" style="background-color: #ffffff; color: #1565C0; border: 1px solid #000000;">${r.partner}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `}export{s as H};
