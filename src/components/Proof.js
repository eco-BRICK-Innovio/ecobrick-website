export function Proof({ content }) {
  return `
    <section class="section proof-section" id="proof">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${content.title}</h2>
          <div class="section-line"></div>
        </div>
        
        <div class="proof-content fade-in slide-in-up">
            <p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-text-muted); max-width: 900px; margin: 0 auto; text-align: center;">
                ${content.body}
            </p>
        </div>
      </div>
    </section>
  `;
}
