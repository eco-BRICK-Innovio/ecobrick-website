export function Header({ content, toggleLang, currentLang }) {
  const btnText = currentLang === 'en' ? '🇮🇱 HE' : '🇺🇸 EN';

  return `
    <header class="header">
      <div class="container header-content">
        <a href="#" class="logo-link">
          <img src="${import.meta.env.BASE_URL}logo.jpg" alt="Eco BRICK Innovio" class="logo-img" />
        </a>
        
        <button class="mobile-menu-btn" aria-label="Toggle Navigation">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>

        <nav class="nav">
          <ul class="nav-list">
            <li><a href="#technology" class="nav-link">${content.technology}</a></li>
            <li><a href="#applications" class="nav-link">${content.applications}</a></li>
            <li><a href="#impact" class="nav-link">${content.impact}</a></li>
            <li><button id="lang-toggle" class="btn btn-outline lang-btn">${btnText}</button></li>
            <li><a href="#contact" class="btn btn-primary contact-btn">${content.partner}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}
