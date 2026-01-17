export function Header({ content, toggleLang, currentLang }) {
  const btnText = currentLang === 'en' ? '🇮🇱 HE' : '🇺🇸 EN';

  return `
    <header class="header">
      <div class="container header-content">
        <a href="#" class="logo-link">
          <img src="${import.meta.env.BASE_URL}logo.png" alt="Eco BRICK Innovio" class="logo-img" />
        </a>
        <nav class="nav">
          <ul class="nav-list">
            <li><a href="#technology">${content.technology}</a></li>
            <li><a href="#applications">${content.applications}</a></li>
            <li><a href="#impact">${content.impact}</a></li>
            <li><button id="lang-toggle" class="btn btn-outline" style="padding: 0.5rem 0.75rem; min-width: 60px;">${btnText}</button></li>
            <li><a href="#contact" class="btn btn-outline" style="padding: 0.5rem 1rem; font-size: 0.9rem;">${content.partner}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}
