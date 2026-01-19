
export function AccessibilityWidget() {
  return `
    <div class="accessibility-widget">
      <button id="a11y-toggle-btn" class="a11y-toggle-btn" aria-label="Open Accessibility Menu" aria-expanded="false">
        <img src="/assets/accessibility-widget-icon.jpg" alt="" role="presentation" />
      </button>
      
      <div id="a11y-menu" class="a11y-menu" aria-hidden="true">
        <div class="a11y-header">
          <h3>Accessibility</h3>
          <button id="a11y-close-btn" class="a11y-close-btn" aria-label="Close Accessibility Menu">&times;</button>
        </div>
        
        <div class="a11y-options">
          <button class="a11y-option-btn" data-action="resize-text">
            <span class="a11y-icon">A+</span>
            <span class="a11y-label">Bigger Text</span>
            <span class="a11y-status">Off</span>
          </button>
          
          <button class="a11y-option-btn" data-action="high-contrast">
            <span class="a11y-icon">◑</span>
            <span class="a11y-label">High Contrast</span>
            <span class="a11y-status">Off</span>
          </button>
          
          <button class="a11y-option-btn" data-action="highlight-links">
            <span class="a11y-icon">🔗</span>
            <span class="a11y-label">Highlight Links</span>
            <span class="a11y-status">Off</span>
          </button>
          
          <button class="a11y-option-btn" data-action="stop-animations">
            <span class="a11y-icon">⏸</span>
            <span class="a11y-label">Pause Animations</span>
            <span class="a11y-status">Off</span>
          </button>
          
          <button class="a11y-reset-btn" id="a11y-reset-btn">Reset All</button>
        </div>
      </div>
    </div>
  `;
}

export function initAccessibilityWidget() {
  const toggleBtn = document.getElementById('a11y-toggle-btn');
  const closeBtn = document.getElementById('a11y-close-btn');
  const menu = document.getElementById('a11y-menu');
  const resetBtn = document.getElementById('a11y-reset-btn');
  const optionBtns = document.querySelectorAll('.a11y-option-btn');
  const body = document.body;

  if (!toggleBtn || !menu) return;

  // Toggle Menu
  function toggleMenu() {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    menu.setAttribute('aria-hidden', isExpanded);
    menu.classList.toggle('active');

    if (!isExpanded) {
      // Trap focus if needed, or just focus first item
      const firstBtn = menu.querySelector('button');
      if (firstBtn) firstBtn.focus();
    } else {
      toggleBtn.focus();
    }
  }

  toggleBtn.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', toggleMenu);

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (menu.classList.contains('active') &&
      !menu.contains(e.target) &&
      !toggleBtn.contains(e.target)) {
      toggleMenu();
    }
  });

  // Handle Options
  optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      const statusSpan = btn.querySelector('.a11y-status');

      let isActive = false;

      switch (action) {
        case 'resize-text':
          body.classList.toggle('a11y-large-text');
          isActive = body.classList.contains('a11y-large-text');
          break;
        case 'high-contrast':
          body.classList.toggle('a11y-high-contrast');
          isActive = body.classList.contains('a11y-high-contrast');
          break;
        case 'highlight-links':
          body.classList.toggle('a11y-highlight-links');
          isActive = body.classList.contains('a11y-highlight-links');
          break;
        case 'stop-animations':
          body.classList.toggle('a11y-stop-animations');
          isActive = body.classList.contains('a11y-stop-animations');
          break;
      }

      btn.classList.toggle('active', isActive);
      if (statusSpan) {
        statusSpan.textContent = isActive ? 'On' : 'Off';
      }

      // Save preference (optional, implementing simple session storage)
      try {
        localStorage.setItem(`a11y-${action}`, isActive);
      } catch (e) { }
    });

    // Load initial state
    const action = btn.dataset.action;
    let savedState = false;
    try {
      savedState = localStorage.getItem(`a11y-${action}`) === 'true';
    } catch (e) {
      console.warn('LocalStorage access denied', e);
    }

    if (savedState) {
      // Apply class
      switch (action) {
        case 'resize-text': body.classList.add('a11y-large-text'); break;
        case 'high-contrast': body.classList.add('a11y-high-contrast'); break;
        case 'highlight-links': body.classList.add('a11y-highlight-links'); break;
        case 'stop-animations': body.classList.add('a11y-stop-animations'); break;
      }
      // Update button UI
      btn.classList.add('active');
      const statusSpan = btn.querySelector('.a11y-status');
      if (statusSpan) statusSpan.textContent = 'On';
    }
  });

  // Reset
  resetBtn.addEventListener('click', () => {
    body.classList.remove('a11y-large-text', 'a11y-high-contrast', 'a11y-highlight-links', 'a11y-stop-animations');
    optionBtns.forEach(btn => {
      btn.classList.remove('active');
      const statusSpan = btn.querySelector('.a11y-status');
      if (statusSpan) statusSpan.textContent = 'Off';
      try {
        localStorage.removeItem(`a11y-${btn.dataset.action}`);
      } catch (e) { }
    });
  });
}
