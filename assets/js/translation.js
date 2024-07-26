// Translations for both English and Spanish
const translations = {
    en: {
        "about": {
            "About": "ABOUT ME",
            "maintext1": "I am Felipe Bravo Huerta, a Computer Systems Technician from George Brown College, with a background in Physics Education from the Metropolitan University of Educational Sciences. My goal is to merge my teaching knowledge with my technical skills to create innovative, user-focused solutions, and manage databases efficiently.",
            "maintext2": "In my IT training, I focused on database management and web development, with a growing interest in full-stack development. I have worked on projects designing SQL databases, emphasizing data integrity and efficient access, always aiming to make these systems user-friendly and clear.",
            "maintext3": "I am passionate about music and music production. I combine my database management skills with my love for music to analyze trends and develop tools for DJs. I use APIs to integrate and manage data, creating practical applications that seamlessly merge technology with music.",
            "education": "EDUCATION",
            "gbctech": "COMPUTER SYSTEM TECHNICIAN",
            "umcephy": "PHYSICS TEACHER",
            "universidad": "METROPOLITAN UNIVERSITY OF EDUCATIONAL SCIENCES",
            "cursos": "COURSES",
            "cisco": "CISCO CERTIFICATIONS",
            "ciscolist1": "Enterprise Networking, Security, and Automation v7.02 (ENSA) (2024)",
            "ciscolist2": "CCNAv7: Switching, Routing, and Wireless Essentials (2023)",
            "ciscolist3": "CCNAv7: Introduction to Networks (2023)"
        },
        "header": {
            "description": "COMPUTER SYSTEM TECHNICIAN, WEB DEVELOPER AND DATABASE MANAGER",
            "About": "About",
            "Skills": "Skills",
            "Projects": "Projects",
            "Contact": "Contact"
        },
        "skills": {
            "skills": "SKILLS",
            "program": "PROGRAMMING",
            "webdev": "WEB DEVELOPMENT",
            "datab": "DATABASES"
        },
        "projects": {
            "projects": "PROJECTS",
            "flammingo": "FlamingoApp is a music database that keeps track of song trends from well-known platforms such as Spotify and Billboard. It simplifies the process for DJs to sort and organize songs by popularity or genre, making playlist creation a breeze. This feature is particularly helpful in ensuring DJs can tailor their music selections to fit the vibe of any event or audience. Additionally, FlamingoApp is an invaluable resource for music analysts and enthusiasts who want to stay updated on the latest shifts in the music industry. It allows users to explore which genres and tracks are gaining traction, facilitating a deeper understanding of current musical preferences.",
            "playlist": "Playlist_Creator is a user-friendly app designed for music lovers. It allows you to view, search, and manage extensive song data. Users can create and organize playlists easily, adding tracks from a detailed database. The app integrates with Spotify and YouTube, enabling you to listen to tracks and manage playlists directly on these platforms. This makes it a practical tool for anyone looking to streamline their music listening and playlist creation process."
        },
        "contact": {
            "contacto": "CONTACT"
        }
    },
    es: {
        "about": {
            "About": "ACERCA DE MÍ",
            "maintext1": "Soy Felipe Bravo Huerta, Técnico en Sistemas Informáticos de George Brown College, con formación en Educación en Física por la Universidad Metropolitana de Ciencias de la Educación. Mi objetivo es fusionar mis conocimientos pedagógicos con mis habilidades técnicas para crear soluciones innovadoras enfocadas en el usuario y gestionar bases de datos de manera eficiente.",
            "maintext2": "En mi formación en TI, me enfoqué en la gestión de bases de datos y el desarrollo web, con un creciente interés en el desarrollo full-stack. He trabajado en proyectos de diseño de bases de datos SQL, enfatizando la integridad de los datos y el acceso eficiente, siempre con el objetivo de hacer estos sistemas amigables y claros para el usuario.",
            "maintext3": "Me apasiona la música y la producción musical. Combino mis habilidades en gestión de bases de datos con mi amor por la música para analizar tendencias y desarrollar herramientas para DJs. Utilizo APIs para integrar y gestionar datos, creando aplicaciones prácticas que fusionan la tecnología con la música de manera transparente.",
            "education": "EDUCACIÓN",
            "gbctech": "TÉCNICO EN SISTEMAS INFORMÁTICOS",
            "umcephy": "PROFESOR DE FÍSICA",
            "universidad": "UNIVERSIDAD METROPOLITANA DE CIENCIAS DE LA EDUCACIÓN",
            "cursos": "CURSOS",
            "cisco": "CERTIFICACIONES CISCO",
            "ciscolist1": "Redes empresariales, seguridad y automatización v7.02 (ENSA) (2024)",
            "ciscolist2": "CCNAv7: Fundamentos de switching, routing y wireless (2023)",
            "ciscolist3": "CCNAv7: Introducción a las redes (2023)"
        },
        "header": {
            "description": "TÉCNICO EN SISTEMAS INFORMÁTICOS, DESARROLLADOR WEB Y GESTOR DE BASES DE DATOS",
            "About": "Acerca de",
            "Skills": "Habilidades",
            "Projects": "Proyectos",
            "Contact": "Contacto"
        },
        "skills": {
            "skills": "HABILIDADES",
            "program": "PROGRAMACIÓN",
            "webdev": "DESARROLLO WEB",
            "datab": "BASES DE DATOS"
        },
        "projects": {
            "projects": "PROYECTOS",
            "flammingo": "FlamingoApp es una base de datos musical que sigue las tendencias de canciones de plataformas conocidas como Spotify y Billboard. Simplifica el proceso para que los DJs ordenen y organicen canciones por popularidad o género, facilitando la creación de listas de reproducción. Esta característica es particularmente útil para asegurar que los DJs puedan adaptar sus selecciones musicales al ambiente de cualquier evento o audiencia. Además, FlamingoApp es un recurso invaluable para analistas y entusiastas de la música que desean mantenerse actualizados sobre los últimos cambios en la industria musical. Permite a los usuarios explorar qué géneros y pistas están ganando tracción, facilitando una comprensión más profunda de las preferencias musicales actuales.",
            "playlist": "Playlist_Creator es una aplicación amigable diseñada para los amantes de la música. Permite ver, buscar y gestionar datos extensos de canciones. Los usuarios pueden crear y organizar listas de reproducción fácilmente, añadiendo pistas desde una base de datos detallada. La aplicación se integra con Spotify y YouTube, permitiendo escuchar pistas y gestionar listas de reproducción directamente en estas plataformas. Esto la convierte en una herramienta práctica para cualquiera que busque optimizar su proceso de escucha musical y creación de listas de reproducción."
        },
        "contact": {
            "contacto": "CONTACTO"
        }
    }
};

// Function to apply translations based on the current language
function applyTranslations() {
    const language = currentLanguage; // This could be dynamically set
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        if (keys.length && translations[language][keys[0]] && translations[language][keys[0]][keys[1]]) {
            element.textContent = translations[language][keys[0]][keys[1]];
        }
    });

    // Update the language toggle button text
    document.getElementById('lang-toggle').textContent = currentLanguage === 'en' ? 'Español' : 'English';
}

// Function to toggle between English and Spanish
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en'; // Toggle language
    applyTranslations(); // Reapply translations with the new language
}

let currentLanguage = 'en'; // Default language
document.addEventListener('DOMContentLoaded', applyTranslations);
