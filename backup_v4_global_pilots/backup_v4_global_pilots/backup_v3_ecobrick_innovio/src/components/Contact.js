export function Contact({ content }) {
  return `
    <section id="contact" class="section contact-section">
      <div class="container contact-container">
        <div class="contact-content glass-panel" style="padding: 3rem; border-radius: var(--border-radius-lg);">
          <h2 class="contact-title">${content.title}</h2>
          <p class="contact-text">
            ${content.text}
          </p>
          <form class="contact-form" onsubmit="event.preventDefault(); const email = this.querySelector('input[type=email]').value; window.location.href = 'mailto:office@ecobrick.tech?subject=New Partnership Request&body=I am interested in a partnership. Please contact me at: ' + email;">
            <div class="form-group">
              <input type="email" name="email" placeholder="${content.placeholder}" required class="form-input">
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
          <a href="https://www.linkedin.com/company/ecobrick-innovio" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  `;
}
