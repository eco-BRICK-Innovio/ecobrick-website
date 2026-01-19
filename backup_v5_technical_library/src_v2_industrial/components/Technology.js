export function Technology({ content }) {
  return `
    <section id="technology" class="section tech-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${content.title}</h2>
          <p class="section-subtitle">${content.subtitle}</p>
        </div>
        
        <div class="tech-grid process-flow">
          ${content.cards.map((card, index) => `
            <div class="tech-card process-step">
              <div class="process-number">0${index + 1}</div>
              <h3>${card.title}</h3>
              <p>${card.text}</p>
            </div>
            ${index < content.cards.length - 1 ? '<div class="process-arrow">→</div>' : ''}
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
