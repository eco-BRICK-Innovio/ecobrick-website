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
        
        <ul class="impact-grid" style="list-style: none; padding: 0; margin: 0;">
          ${content.items.map(item => `
            <li class="impact-card glass-card">
              <div class="impact-value">${item.value}</div>
              <div class="impact-label">${item.label}</div>
            </li>
          `).join('')}
        </ul>
      </div>
    </section>
  `;
}
