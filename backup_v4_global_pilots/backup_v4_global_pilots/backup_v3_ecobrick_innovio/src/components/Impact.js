export function Impact({ content }) {
  return `
    <section id="impact" class="section impact-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${content.title}</h2>
          <p class="section-subtitle">
            ${content.subtitle}
          </p>
        </div>
        
        <div class="impact-grid">
          ${content.items.map(item => `
            <div class="impact-card glass-card">
              <div class="impact-value">${item.value}</div>
              <div class="impact-label">${item.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
