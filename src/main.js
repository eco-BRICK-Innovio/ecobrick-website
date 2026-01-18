import './style.css'
import './accessibility.css'
import { translations } from './translations.js'
import { Header } from './components/Header.js'
import { Hero } from './components/Hero.js'
import { Carousel, cleanupCarousels } from './components/Carousel.js'
import { Technology } from './components/Technology.js'
import { Applications } from './components/Applications.js'
import { Pilots } from './components/Pilots.js'
import { GlobalPilots } from './components/GlobalPilots.js'
import { Team } from './components/Team.js'
import { Impact } from './components/Impact.js'
import { Contact } from './components/Contact.js'

let currentLang = 'en';

function renderApp() {
    try {
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
        }

        const app = document.querySelector('#app');
        if (app) {
            app.innerHTML = `
          ${Header({ content: content.header, currentLang })}
          <main id="main-content">
            ${Hero({ content: content.hero })}
            ${Technology({ content: content.technology })}
            ${Applications({ content: content.applications })}
            ${Pilots({ content: content.pilots })}
            ${GlobalPilots({ content: content.globalPilots })}
            ${Team({ content: content.team })}
            ${Impact({ content: content.impact })}
            ${Contact({ content: content.contact })}
          </main>
          <!-- \${AccessibilityWidget()} -->
        `;

            // Initialize Scroll Observer
            setTimeout(observeSections, 100);

            // Initial re-attachment of event listeners
            attachEventListeners();

            // Initialize Accessibility Widget
            // try {
            //     initAccessibilityWidget();
            // } catch (err) {
            //     console.error('Failed to initialize accessibility widget:', err);
            // }
        } else {
            console.error('Fatal Error: #app element not found');
        }
    } catch (error) {
        console.error('Critical Error in renderApp:', error);
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
            const isExpanded = mobileBtn.classList.contains('active');
            mobileBtn.setAttribute('aria-expanded', !isExpanded);
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
