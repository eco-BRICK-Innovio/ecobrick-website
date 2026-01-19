export function Technology({ content }) {
  return `
    <section id="technology" class="section zigzag-section">
      <div class="container">
        <div class="section-header fade-in-section">
          <h2 class="section-title">${content.title}</h2>
          <p class="section-subtitle">${content.subtitle}</p>
        </div>
        
        <ul class="zigzag-grid" style="list-style: none; padding: 0; margin: 0;">
          ${content.cards.map((card, index) => {
    const isEven = index % 2 === 0;

    return `
            <li class="zigzag-row">
              <div class="zigzag-content ${isEven ? 'slide-in-left' : 'slide-in-right'}">
                <div class="zigzag-number">0${index + 1}</div>
                <h3>${card.title}</h3>
                <p>${card.text}</p>
              </div>
              <div class="zigzag-image-wrapper ${isEven ? 'slide-in-right' : 'slide-in-left'}">
                <img src="${card.image}" alt="${card.title}" class="zigzag-image" />
              </div>
            </li>
            `;
  }).join('')}
        </ul>
        
        ${content.videoId ? `
        <div class="video-container" style="margin-top: 4rem; position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: var(--border-radius-lg); box-shadow: var(--shadow-md);">
          <iframe 
            src="https://www.youtube.com/embed/${content.videoId}" 
            title="Eco Brick Technology"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
        ` : ''}
      </div>
    </section>
  `;
}
