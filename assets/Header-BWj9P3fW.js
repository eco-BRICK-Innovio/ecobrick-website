function i({content:a,toggleLang:s,currentLang:l}){const n=l==="en"?"🇮🇱 HE":"🇺🇸 EN";return`
    <header class="header">
      <div class="container header-content">
        <a href="#" class="logo-link">
          <img src="./assets/logo-v2.jpg" alt="eco BRICK Innovio" class="logo-img" />
        </a>
        
        <button class="mobile-menu-btn" aria-label="Toggle Navigation" aria-expanded="false" aria-controls="main-nav">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>

        <nav class="nav" id="main-nav">
          <ul class="nav-list">
            <li><a href="#technology" class="nav-link">${a.technology}</a></li>
            <li><a href="#applications" class="nav-link">${a.applications}</a></li>
            <li><a href="#impact" class="nav-link">${a.impact}</a></li>

            <li><a href="technical-library.html" class="nav-link">${a.technicalLibrary||"Technical Library"}</a></li>
            <li><button id="lang-toggle" class="btn btn-outline lang-btn">${n}</button></li>
            <li><a href="${a.partnerLink||"#contact"}" class="btn contact-btn" style="background-color: #ffffff; color: #1565C0; border: 1px solid #000000;">${a.partner}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `}export{i as H};
