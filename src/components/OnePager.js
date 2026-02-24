export function OnePager({ content }) {
    return `
    <section class="section one-pager-section">
      <div class="container">
        <div class="section-header fade-in">
          <h1 class="section-title">${content.title}</h1>
          <p class="section-subtitle">${content.subtitle}</p>
        </div>
        
        <div class="one-pager-grid">
          ${content.cards.map((card, index) => `
            <div class="one-pager-card glass-card fade-in" style="transition-delay: ${index * 100}ms">
              <div class="card-query">
                <span class="query-icon">?</span>
                <h3>${card.query}</h3>
              </div>
              <div class="card-answer">
                <p>${card.answer}</p>
              </div>
              <div class="card-footer">
                <span class="learn-more">Learn more →</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <style>
      .one-pager-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
      }

      .one-pager-card {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 250px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }

      .card-query {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 1.5rem;
      }

      .query-icon {
        background: var(--color-primary);
        color: white;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        flex-shrink: 0;
        font-size: 0.8rem;
      }

      .card-query h3 {
        font-size: 1.25rem;
        color: var(--color-primary);
        line-height: 1.3;
        margin: 0;
      }

      .card-answer p {
        color: var(--color-text-muted);
        font-size: 1rem;
        line-height: 1.6;
      }

      .card-footer {
        margin-top: 2rem;
        border-top: 1px solid rgba(0,0,0,0.05);
        padding-top: 1rem;
      }

      .learn-more {
        font-size: 0.9rem;
        color: var(--color-accent);
        font-weight: 600;
        opacity: 0.8;
        transition: opacity 0.2s;
      }

      .one-pager-card:hover .learn-more {
        opacity: 1;
      }

      @media (max-width: 768px) {
        .one-pager-grid {
          grid-template-columns: 1fr;
        }
        
        .one-pager-card {
          min-height: auto;
        }
      }
    </style>
  `;
}
