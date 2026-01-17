import './style.css'
import { translations } from './translations.js'
import { Header } from './components/Header.js'
import { Hero } from './components/Hero.js'
import { Technology } from './components/Technology.js'
import { Products } from './components/Products.js'
import { Team } from './components/Team.js'
import { Impact } from './components/Impact.js'
import { Contact } from './components/Contact.js'

let currentLang = 'en';

function toggleLang() {
  currentLang = currentLang === 'en' ? 'he' : 'en';
  renderApp();
}

function renderApp() {
  const content = translations[currentLang];
  document.body.dir = currentLang === 'he' ? 'rtl' : 'ltr';

  if (currentLang === 'he') {
    document.documentElement.lang = 'he';
  } else {
    document.documentElement.lang = 'en';
  }

  document.querySelector('#app').innerHTML = `
    ${Header({ content: content.header, currentLang })}
    <main>
      ${Hero({ content: content.hero })}
      ${Technology({ content: content.technology })}
      ${Products({ content: content.applications })}
      ${Team({ content: content.team })}
      ${Impact({ content: content.impact })}
      ${Contact({ content: content.contact })}
    </main>
  `;

  // Attach event listener to the toggle button
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.removeEventListener('click', toggleLang); // Safety
    toggleBtn.addEventListener('click', toggleLang);
  }
}

// Initial render
renderApp();
