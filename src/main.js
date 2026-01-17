import './style.css'
import { translations } from './translations.js'
import { Header } from './components/Header.js'
import { Hero } from './components/Hero.js'
import { Carousel, cleanupCarousels } from './components/Carousel.js'
import { Technology } from './components/Technology.js'
import { Applications } from './components/Applications.js'
import { Pilots } from './components/Pilots.js'
import { Team } from './components/Team.js'
import { Impact } from './components/Impact.js'
import { Contact } from './components/Contact.js'

let currentLang = 'en';

function renderApp() {
    // Cleanup any existing carousel intervals from previous render
    cleanupCarousels();

    const content = translations[currentLang];

    // Update document direction and language
    document.body.dir = currentLang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;

    function observeSections() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('section, .hero, .footer').forEach(section => {
            section.classList.add('fade-in-section');
            observer.observe(section);
        });

        // Observe new slide animations
        document.querySelectorAll('.slide-in-left, .slide-in-right').forEach(el => {
            observer.observe(el);
        });

        // Also observe individual cards for a staggered effect if possible, or just the grid
        document.querySelectorAll('.app-card, .pilot-card, .team-card').forEach((el, index) => {
            el.classList.add('fade-in-section');
            // Add a slight delay based on index if we wanted, but CSS variables are cleaner. 
            // For now, simple observe.
            observer.observe(el);
        });
    }

    const app = document.querySelector('#app');
    if (app) {
        app.innerHTML = `
      ${Header({ content: content.header, currentLang })}
      <main>
        ${Hero({ content: content.hero })}
        ${Technology({ content: content.technology })}
        ${Applications({ content: content.applications })}
        ${Pilots({ content: content.pilots })}
        ${Team({ content: content.team })}
        ${Impact({ content: content.impact })}
        ${Contact({ content: content.contact })}
      </main>
    `;

        // Initialize Scroll Observer
        observeSections();

        // Initial re-attachment of event listeners
        attachEventListeners();
    } else {
        console.error('Fatal Error: #app element not found');
    }
}

function attachEventListeners() {
    // Language Toggle
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
        toggleBtn.removeEventListener('click', toggleLang);
        toggleBtn.addEventListener('click', toggleLang);
    }

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    const links = document.querySelectorAll('.nav-link, .contact-btn');

    if (mobileBtn && nav) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileBtn.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

function toggleLang() {
    currentLang = currentLang === 'en' ? 'he' : 'en';
    renderApp();
}

// Initial render
renderApp();
