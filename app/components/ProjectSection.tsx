'use client';

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useLocale } from "@/app/utils/hooks/useLocale.js";
import { useTheme } from "@/app/utils/hooks/useTheme.js";

export default function ProjectSection() {
    const { locale } = useLocale();
    const { theme } = useTheme();
    const backgroundClass = theme === 'light' ? 'bg-gray-200' : 'bg-gray-800';
    const textClass = theme === 'light' ? 'text-black' : 'text-white';
    const projectBoxClass = theme === 'light' ? 'bg-white shadow-lg' : 'bg-gray-700 shadow-lg';

    const projectsContent = {
        en: [
            { title: 'Snake Game', description: 'Classic snake game implemented in JavaScript', image: '/images/snake-demo.gif', link: 'https://github.com/NOMO-Gabriel/Snake-Game-In-Javascript/tree/main' },
            { title: 'Blog Website', description: 'A site for a company to present its services and provide a blog to answer client questions', image: '/images/blog-image.png', link: 'https://github.com/NOMO-Gabriel/Blog' },
            { title: 'React CRUD', description: 'A simple CRUD application to consolidate React learning', image: '/images/react-crud.png', link: 'https://github.com/NOMO-Gabriel/react-crud-with-php-api' },
            { title: 'API_NOMO', description: 'A simple API to provide product data for a store', image: '/images/api-nomo.png', link: 'https://github.com/NOMO-Gabriel/api_NOMO' },
            { title: 'My Portfolio', description: 'A simple web portfolio to present my skills', image: '/images/my-portfolio.gif', link: 'https://github.com/NOMO-Gabriel/my-porfolio' },
            { title: 'PHP Basics', description: 'A tutorial to learn PHP basics, inspired by some YouTube tutorials', image: '/images/php-coding.jpg', link: 'https://github.com/NOMO-Gabriel/apprendre_les_bases_php' }
        ],
        fr: [
            { title: 'Jeu du Serpent', description: 'Jeu classique du serpent implémenté en JavaScript', image: '/images/snake-demo.gif', link: 'https://github.com/NOMO-Gabriel/Snake-Game-In-Javascript/tree/main' },
            { title: 'Blog', description: 'Un site permettant à une entreprise de présenter ses services et de répondre aux questions des clients via un blog', image: '/images/blog-image.png', link: 'https://github.com/NOMO-Gabriel/Blog' },
            { title: 'React CRUD', description: 'Une application CRUD simple pour consolider l\'apprentissage de React', image: '/images/react-crud.png', link: 'https://github.com/NOMO-Gabriel/react-crud-with-php-api' },
            { title: 'API_NOMO', description: 'Une API simple pour fournir des données sur les produits d\'une boutique', image: '/images/api-nomo.png', link: 'https://github.com/NOMO-Gabriel/api_NOMO' },
            { title: 'Mon Portfolio', description: 'Un simple site web pour présenter mes compétences', image: '/images/my-portfolio.gif', link: 'https://github.com/NOMO-Gabriel/my-porfolio' },
            { title: 'PHP Basics', description: 'Petit tutoriel pour apprendre les bases du PHP', image: '/images/php-coding.jpg', link: 'https://github.com/NOMO-Gabriel/apprendre_les_bases_php' }
        ]
    };

    return (
        <section className={`project-section py-10 ${backgroundClass} ${textClass}`} id="projects">
            <h2 className="heading mb-16 text-4xl font-bold text-center">
                {locale === 'en' ? 'My Latest Projects' : 'Mes Derniers Projets'}
            </h2>
            <div className="project-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
                {projectsContent[locale].map((project, index) => (
                    <div key={index} className={`project-box p-6 rounded-lg ${projectBoxClass} transition transform hover:scale-105`}>
                        <Image
                            src={project.image}
                            alt={`project-${index + 1}`}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h4 className="text-2xl font-semibold mb-2">{project.title}</h4>
                        <p className="text-base mb-4">{project.description}</p>
                        <Link href={project.link} className="small-btn">
                                <FontAwesomeIcon icon={faExternalLink} className="mr-2" /> {locale === 'en' ? 'View Project' : 'Voir le Projet'}
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
