export function Carousel(slides, interval = 3000) {
  // Generate unique ID for this instance
  const id = `carousel-${Math.random().toString(36).substr(2, 9)}`;

  // HTML structure
  let slidesHtml = slides.map((slide, index) => `
    <div class="carousel-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
      <img src="${slide.image}" alt="${slide.alt}" class="carousel-img" style="${slide.imgStyle || ''}">
      ${slide.caption ? `<div class="carousel-caption"><h3>${slide.caption}</h3></div>` : ''}
    </div>
  `).join('');

  // Script to auto-rotate
  setTimeout(() => {
    const container = document.getElementById(id);
    if (!container) return; // Guard clause

    let currentIndex = 0;
    const allSlides = container.querySelectorAll('.carousel-slide');

    // Auto-rotate
    setInterval(() => {
      allSlides[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % allSlides.length;
      allSlides[currentIndex].classList.add('active');
    }, interval);
  }, 0);

  return `
    <div id="${id}" class="carousel-container">
      ${slidesHtml}
    </div>
  `;
}
