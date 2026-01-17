import { Carousel } from './Carousel.js';

export function Hero({ content }) {
  const slideImages = [
    {
      image: import.meta.env.BASE_URL + 'assets/product_concrete_blocks_ai.png'
    },
    {
      image: import.meta.env.BASE_URL + 'assets/product-tiles.png'
    },
    {
      image: import.meta.env.BASE_URL + 'assets/product-lightweight-bag.jpg',
      imgStyle: 'transform: scale(1.05);'
    },
    {
      image: import.meta.env.BASE_URL + 'assets/product-cold-mix-asphalt-bag.png'
    }
  ];

  const slides = slideImages.map((img, index) => ({
    ...img,
    ...(content.slides[index] || {})
  }));

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
         ${Carousel(slides, 4000)}
      </div>
    </section>
  `;
}
