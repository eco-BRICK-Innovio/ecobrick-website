export function Pilots({ content }) {
    return `
    <section id="pilots" class="section pilots-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${content.title}</h2>
          <p class="section-subtitle">${content.subtitle}</p>
        </div>
        
        <div class="partners-grid">
          ${content.logos.map(logo => `
            <div class="partner-logo" title="${logo.name}">
              <img src="${logo.img}" alt="${logo.name}" />
              <span class="partner-name">${logo.name}</span>
            </div>
          `).join('')}
        </div>

        <div class="pilots-gallery">
           ${content.images.map(img => `
            <div class="pilot-card">
              <img src="${img.src}" alt="${img.caption}" />
              <div class="pilot-caption">${img.caption}</div>
            </div>
           `).join('')}
        </div>
      </div>
    </section>
  `;
}
