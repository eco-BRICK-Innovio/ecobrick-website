export function Pilots({ content }) {
  return `
    <section id="pilots" class="section pilots-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${content.title}</h2>
          <p class="section-subtitle">${content.subtitle}</p>
        </div>
        
        <ul class="partners-grid" style="list-style: none; padding: 0; margin: 0 0 4rem 0;">
          ${content.logos.map(logo => `
            <li class="partner-logo" title="${logo.name}">
              <img src="${logo.img}" alt="${logo.name} logo" />
              <span class="partner-name">${logo.name}</span>
            </li>
          `).join('')}
        </ul>

        <ul class="pilots-gallery" style="list-style: none; padding: 0; margin: 0;">
           ${content.images.map(img => `
            <li class="pilot-card">
              <img src="${img.src}" alt="${img.caption}" />
              <div class="pilot-caption">${img.caption}</div>
            </li>
           `).join('')}
        </ul>
      </div>
    </section>
  `;
}
