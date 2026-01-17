import { Carousel } from './Carousel.js';

export function Hero({ content }) {
  // Use slides from content, fallback to empty array if missing
  const slides = content.slides || [];

  return `
    <section class="section hero">
      <div class="hero-bg"></div>
      <div class="container hero-content">
        <h1 class="hero-title">
          ${content.title}
        </h1>
        <p class="hero-subtitle">
          ${content.subtitle}
        </p>
        <div class="hero-actions">
          <a href="#technology" class="btn btn-primary">${content.ourTechnology}</a>
          <a href="#contact" class="btn btn-outline">${content.partnerWithUs}</a>
        </div>
      </div>
      <div class="hero-image-container">
         ${Carousel(slides, 0)} 
      </div>
    </section>
  `;
}
