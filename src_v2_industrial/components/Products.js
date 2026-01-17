export function Products({ content }) {
    return `
    <section id="products" class="section products-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${content.title}</h2>
          <p class="section-subtitle">${content.subtitle}</p>
        </div>
        
        <div class="product-showcase">
          <div class="product-image-wrapper">
             <img src="/assets/product-ebi-x.png" alt="EBI-X Cold Asphalt" class="product-hero-img" />
          </div>
          
          <div class="product-features">
            ${content.cards.map((card, index) => `
              <div class="feature-card">
                <h3>${card.title}</h3>
                <p>${card.text}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}
