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
              <input type="email" name="email" placeholder="${content.placeholder}" aria-label="${content.placeholder}" required class="form-input">
            </div>
            <button type="submit" class="btn btn-primary">${content.button}</button>
          </form>
        </div>
      </div>
    </section>
    
    <footer class="footer">
      <div class="container footer-content" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <p style="margin: 0;">${content.footer}</p>
        <div class="footer-links" style="display: flex; gap: 2rem; align-items: center;">
          <a href="/privacy.html" style="color: white; text-decoration: none;">${content.privacy}</a>
          <a href="/terms.html" style="color: white; text-decoration: none;">${content.terms}</a>
          <a href="/accessibility.html" style="color: white; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">
            <img src="/assets/accessibility-icon-new.jpg" alt="" style="height: 24px; width: 24px; border-radius: 50%;" />
            ${content.accessibility}
          </a>
          <a href="https://www.linkedin.com/company/ecobrick-innovio" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: none;">LinkedIn</a>
        </div>
      </div>
    </footer>
  `;
}
