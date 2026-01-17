export function Applications({ content }) {
  const borders = [
    'border-left: 4px solid var(--color-primary);',
    'border-left: 4px solid var(--color-accent);',
    'border-left: 4px solid var(--color-text-muted);'
  ];

  return `
    <section id="applications" class="section apps-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${content.title}</h2>
          <p class="section-subtitle">${content.subtitle}</p>
        </div>
        
        <div class="apps-grid">
          ${content.cards.map((card, index) => `
            <div class="app-card" style="${borders[index]}">
              <h3>${card.title}</h3>
              <p>${card.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
