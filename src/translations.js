export const translations = {
    en: {
        header: {
            technology: 'Technology',
            applications: 'Applications',
            impact: 'Impact',
            partner: 'Partner',
        },
        hero: {
            title: 'Circular solution for <span style="color: var(--color-primary);">over 40 waste streams</span>',
            subtitle: 'Innovative resource with added value for construction and asphalt materials. Diverting ~99% of waste from landfills.',
            ourTechnology: 'Our Technology',
            partnerWithUs: 'Partner With Us',
            slides: [
                { alt: 'Eco BRICK concrete blocks on a pallet', caption: 'eco BRICK blocks' },
                { alt: 'Eco BRICK flooring tiles display', caption: 'eco BRICK tiles' },
                { alt: 'Eco BRICK lightweight aggregate stones close up', caption: 'eco BRICK lightweight aggregates' },
                { alt: 'Eco BRICK cold mix asphalt bag on pallet', caption: 'Cold Mix Asphalt' }
            ]
        },
        technology: {
            title: 'The Tech',
            subtitle: 'Turning waste into worth using our proprietary binding technology.',
            cards: [
                { title: 'Waste Materials', text: 'We accept over 40 types of waste including oil sludge, plastics, glass, and textiles, preventing them from reaching landfills.', image: import.meta.env.BASE_URL + 'assets/tech-waste.png' },
                { title: 'Proprietary Binding', text: 'Our unique process uses 20+ specialized binder types to fuse diverse waste streams into valuable construction materials.', image: import.meta.env.BASE_URL + 'assets/tech-binding.png' },
                { title: 'Certified Aggregate', text: 'Our lightweight aggregate is <strong>ASTM C331 compliant</strong>. It offers superior thermal and acoustic insulation while reducing structural dead load.', image: import.meta.env.BASE_URL + 'assets/tech-aggregate.png' }
            ],
            videoId: 'meGjrfgYuCk'
        },
        applications: {
            title: 'Applications',
            subtitle: 'Built for the demands of modern infrastructure.',
            cards: [
                { title: 'Municipalities', text: 'Paving, public parks, and non-structural urban infrastructure.' },
                { title: 'Commercial', text: 'Green certified office buildings and sustainable landscaping.' },
                { title: 'Industrial', text: 'Sound barriers, retaining walls, and warehouse flooring.' }
            ]
        },
        team: {
            title: 'Our Leadership',
            subtitle: 'Experts committed to a sustainable industrial future.',
            members: [
                { name: 'Shlomi Perry', role: 'Founder & CEO', bio: 'B.Sc. Software Engineering. Eco Brick Innovio founder. Entrepreneur in the fields of high-tech and education. Founder of the companies: Innovio Development Ltd., Easylinks Ltd., Matar Robotix Ltd' },
                { name: 'Jacob Biofcic', role: 'CTO', bio: 'BSc. & MSc. In Plastics Engineering. 14 years of experience in leading and managing projects in the field of plastics, lecturer in Shenkar College' },
                { name: 'Israel Bettelhaim', role: 'COO', bio: 'Mechanical Engineer. 25 years of experience as director of operations in a quarry and the construction industry.' },
                { name: 'Eli Stav', role: 'Consultant', bio: 'PhD, Chemistry, Building Materials, Polymers. Over 40 years of experience, and out of that 20 years as Director of Technology Development at National Gypsum Company, USA' },
                { name: 'Nechemia Masori', role: 'Consultant', bio: 'BSc. & MSc. In construction and building materials. More than 40 years of experience, Member of the Israeli Building Code for building materials. Member of standards committees at the Israeli Standards Institution. Professional Committee on Building Materials.' },
                { name: 'Bezalel Blum', role: 'Consultant', bio: 'B.Sc in Chemical Engineering, Technion, Haifa (1982-1985). M.Sc in Oil and Gas Engineering, Technion, Haifa (2015-2017). Chief Process Manager at Bazan Group with 39 years of service. Expertise in oil refining and catalyst characterization. Proficient in process models and simulations for the petrochemical industry.' }
            ]
        },
        pilots: {
            title: 'Trusted by Leaders',
            subtitle: 'Our technology is validated by industry giants and municipal leaders.',
            logos: [
                { name: 'Jerusalem City', img: import.meta.env.BASE_URL + 'assets/logo-jerusalem.png' },
                { name: 'Ashdod City', img: import.meta.env.BASE_URL + 'assets/logo-ashdod.png' },
                { name: 'Herzliya City', img: import.meta.env.BASE_URL + 'assets/logo-herzliya.png' },
                { name: 'Hiriya', img: import.meta.env.BASE_URL + 'assets/logo-hiriya.png' },
                { name: 'Shapir', img: import.meta.env.BASE_URL + 'assets/logo-shapir.png' },
                { name: 'Readymix', img: import.meta.env.BASE_URL + 'assets/logo-redimix.png' },
                { name: 'Ben-Ari', img: import.meta.env.BASE_URL + 'assets/logo-benari.png' },
                { name: 'Oron Group', img: import.meta.env.BASE_URL + 'assets/logo-oron.png' },
                { name: 'Mtzoda', img: import.meta.env.BASE_URL + 'assets/logo-mtzoda.png' },
                { name: 'Mister Fix', img: import.meta.env.BASE_URL + 'assets/logo-misterfix.png' },
                { name: 'Thermodan', img: import.meta.env.BASE_URL + 'assets/logo-thermodan.png' },
                { name: 'Maffat', img: import.meta.env.BASE_URL + 'assets/logo-maffat.png' },
                { name: 'iHLS', img: import.meta.env.BASE_URL + 'assets/logo-ihls.png' },
                { name: 'IDF', img: import.meta.env.BASE_URL + 'assets/logo-idf.png' }
            ],
            images: [
                { src: import.meta.env.BASE_URL + 'assets/pilot-road.png', caption: 'Paving Pilot' },
                { src: import.meta.env.BASE_URL + 'assets/product_concrete_blocks_ai.png', caption: 'Construction Pilot' },
                { src: import.meta.env.BASE_URL + 'assets/pilot-recycling.png', caption: 'Recycling Pilot' },
                { src: import.meta.env.BASE_URL + 'assets/construction-site-eco-brick.jpg', caption: 'Flooring Application' }
            ]
        },
        impact: {
            title: 'Our Impact',
            subtitle: 'Halt the growth of massive waste landfills and combat global warming by transforming traditionally unrecyclable waste into valuable resources.',
            items: [
                { value: '40+', label: 'Waste Streams Processed' },
                { value: '99%', label: 'Landfill Diversion' },
                { value: 'High', label: 'Insulation Properties' }
            ]
        },
        contact: {
            title: 'Ready to Build?',
            text: 'Partner with eco BRICK Innovio to revolutionize your infrastructure projects.',
            placeholder: 'Enter your email',
            button: 'Request Partnership',
            footer: '&copy; 2026 Eco BRICK Innovio. All rights reserved.',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
            accessibility: 'Accessibility'
        }
    },
    he: {
        header: {
            technology: 'טכנולוגיה',
            applications: 'יישומים',
            impact: 'השפעה',
            partner: 'שותפות',
        },
        hero: {
            title: 'פתרון מעגלי עבור <br> <span style="color: var(--color-primary);">למעלה מ-40 סוגי פסולת</span>',
            subtitle: 'משאב חדשני עם ערך מוסף לחומרי בנייה ואספלט. מונע הטמנה של כ-99% מהפסולת.',
            ourTechnology: 'הטכנולוגיה שלנו',
            partnerWithUs: 'הצטרפו אלינו',
            slides: [
                { alt: 'בלוקי אקו בריק', caption: 'בלוקי אקו בריק' },
                { alt: 'אריחי אקו בריק', caption: 'אריחי אקו בריק' },
                { alt: 'אגרגטים קלים אקו בריק', caption: 'אגרגטים קלים אקו בריק' },
                { alt: 'אספלט קר', caption: 'אספלט קר' }
            ]
        },
        technology: {
            title: 'הטכנולוגיה',
            subtitle: 'הופכים פסולת לערך באמצעות טכנולוגיית הקישור הייחודית שלנו.',
            cards: [
                { title: 'איסוף פסולת', text: 'אנו מקבלים מעל 40 סוגי פסולת כולל בוצת שמן, פלסטיק, זכוכית וטקסטיל, ומונעים את הגעתם למטמנות.', image: import.meta.env.BASE_URL + 'assets/tech-waste.png' },
                { title: 'קישור ייחודי (Proprietary Binding)', text: 'התהליך הייחודי שלנו משתמש ב-20+ סוגי מחברים מתמחים למיזוג זרמי פסולת מגוונים לחומרי בנייה בעלי ערך.', image: import.meta.env.BASE_URL + 'assets/tech-binding.png' },
                { title: 'אגרגט מאושר', text: 'האגרגט הקל שלנו הינו <strong>תואם תקן ASTM C331</strong>. הוא מציע בידוד תרמי ואקוסטי מעולה תוך הפחתת עומס מבני.', image: import.meta.env.BASE_URL + 'assets/tech-aggregate.png' }
            ],
            videoId: 'meGjrfgYuCk'
        },
        applications: {
            title: 'יישומים',
            subtitle: 'נבנה לדרישות התשתית המודרנית.',
            cards: [
                { title: 'רשויות מקומיות', text: 'ריצוף, פארקים ציבוריים ותשתיות עירוניות לא מבניות.' },
                { title: 'מסחרי', text: 'בנייני משרדים ירוקים וגינון בר-קיימא.' },
                { title: 'תעשייתי', text: 'מחסומי רעש, קירות תמך וריצוף מחסנים.' }
            ]
        },
        team: {
            title: 'המנהיגות שלנו',
            subtitle: 'מומחים המחויבים לעתיד תעשייתי בר-קיימא.',
            members: [
                { name: 'Shlomi Perry', role: 'Founder & CEO', bio: 'B.Sc. Software Engineering. Eco Brick Innovio founder. Entrepreneur in the fields of high-tech and education. Founder of the companies: Innovio Development Ltd., Easylinks Ltd., Matar Robotix Ltd' },
                { name: 'Jacob Biofcic', role: 'CTO', bio: 'BSc. & MSc. In Plastics Engineering. 14 years of experience in leading and managing projects in the field of plastics, lecturer in Shenkar College' },
                { name: 'Israel Bettelhaim', role: 'COO', bio: 'Mechanical Engineer. 25 years of experience as director of operations in a quarry and the construction industry.' },
                { name: 'Eli Stav', role: 'Consultant', bio: 'PhD, Chemistry, Building Materials, Polymers. Over 40 years of experience, and out of that 20 years as Director of Technology Development at National Gypsum Company, USA' },
                { name: 'Nechemia Masori', role: 'Consultant', bio: 'BSc. & MSc. In construction and building materials. More than 40 years of experience, Member of the Israeli Building Code for building materials. Member of standards committees at the Israeli Standards Institution. Professional Committee on Building Materials.' },
                { name: 'Bezalel Blum', role: 'Consultant', bio: 'B.Sc in Chemical Engineering, Technion, Haifa (1982-1985). M.Sc in Oil and Gas Engineering, Technion, Haifa (2015-2017). Chief Process Manager at Bazan Group with 39 years of service. Expertise in oil refining and catalyst characterization. Proficient in process models and simulations for the petrochemical industry.' }
            ]
        },
        pilots: {
            title: 'בשימוש על ידי המובילים במשק',
            subtitle: 'הטכנולוגיה שלנו מאומתת על ידי ענקיות התעשייה ורשויות מובילות.',
            logos: [
                { name: 'עיריית ירושלים', img: import.meta.env.BASE_URL + 'assets/logo-jerusalem.png' },
                { name: 'עיריית אשדוד', img: import.meta.env.BASE_URL + 'assets/logo-ashdod.png' },
                { name: 'עיריית הרצליה', img: import.meta.env.BASE_URL + 'assets/logo-herzliya.png' },
                { name: 'חירייה', img: import.meta.env.BASE_URL + 'assets/logo-hiriya.png' },
                { name: 'שפיר', img: import.meta.env.BASE_URL + 'assets/logo-shapir.png' },
                { name: 'רדימיקס', img: import.meta.env.BASE_URL + 'assets/logo-redimix.png' },
                { name: 'בן-ארי', img: import.meta.env.BASE_URL + 'assets/logo-benari.png' },
                { name: 'קבוצת אורון', img: import.meta.env.BASE_URL + 'assets/logo-oron.png' },
                { name: 'מצודה', img: import.meta.env.BASE_URL + 'assets/logo-mtzoda.png' },
                { name: 'מיסטר פיקס', img: import.meta.env.BASE_URL + 'assets/logo-misterfix.png' },
                { name: 'תרמודן', img: import.meta.env.BASE_URL + 'assets/logo-thermodan.png' },
                { name: 'מפא"ת', img: import.meta.env.BASE_URL + 'assets/logo-maffat.png' },
                { name: 'iHLS', img: import.meta.env.BASE_URL + 'assets/logo-ihls.png' },
                { name: 'צה"ל', img: import.meta.env.BASE_URL + 'assets/logo-idf.png' }
            ],
            images: [
                { src: import.meta.env.BASE_URL + 'assets/pilot-road.png', caption: 'פיילוט סלילה' },
                { src: import.meta.env.BASE_URL + 'assets/pilot-construction.png', caption: 'פיילוט בנייה' },
                { src: import.meta.env.BASE_URL + 'assets/pilot-recycling.png', caption: 'פיילוט מחזור' },
                { src: import.meta.env.BASE_URL + 'assets/construction-site-eco-brick.jpg', caption: 'יישום ריצוף' }
            ]
        },
        impact: {
            title: 'ההשפעה שלנו',
            subtitle: 'עצירת הגידול במטמנות פסולת עצומות ומאבק בהתחממות הגלובלית על ידי הפיכת פסולת מסורתית למשאבים יקרי ערך.',
            items: [
                { value: '40+', label: 'זרמי פסולת מעובדים' },
                { value: '99%', label: 'מניעת הטמנה' },
                { value: 'גבוהה', label: 'יכולת בידוד' }
            ]
        },
        contact: {
            title: 'מוכנים לבנות?',
            text: 'שתפו פעולה עם Eco BRICK Innovio למהפכה בפרויקטי התשתית שלכם.',
            placeholder: 'הכנס את האימייל שלך',
            button: 'בקשת שותפות',
            footer: '&copy; 2026 Eco BRICK Innovio. כל הזכויות שמורות.',
            privacy: 'מדיניות פרטיות',
            terms: 'תנאי שימוש',
            accessibility: 'הצהרת נגישות'
        }
    }
};
