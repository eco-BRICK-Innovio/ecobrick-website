export function Applications({ content }) {
  // Borders removed for glassmorphism

  return `
    <section id="applications" class="section apps-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${content.title}</h2>
          <p class="section-subtitle">${content.subtitle}</p>
        </div>
        
        <div class="apps-grid">
          ${content.cards.map((card, index) => `
            <div class="glass-card app-card ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}">
              <h3>${card.title}</h3>
              <p>${card.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
