export function Contact({ content }) {
  return `
    <section id="contact" class="section contact-section">
      <div class="container contact-container">
        <div class="contact-content">
          <h2 class="contact-title">${content.title}</h2>
          <p class="contact-text">
            ${content.text}
          </p>
          <form class="contact-form" onsubmit="event.preventDefault(); alert('Thank you for your interest! We will be in touch soon.');">
            <div class="form-group">
              <input type="email" placeholder="${content.placeholder}" required class="form-input">
            </div>
            <button type="submit" class="btn btn-primary">${content.button}</button>
          </form>
        </div>
      </div>
    </section>
    
    <footer class="footer">
      <div class="container footer-content">
        <p>${content.footer}</p>
        <div class="social-links">
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  `;
}
