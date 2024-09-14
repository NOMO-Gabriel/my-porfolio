'use client';

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {useLocale} from "@/app/utils/hooks/useLocale.js";
import {useTheme} from "@/app/utils/hooks/useTheme.js";


export default function ProjectSection() {
    const { locale } = useLocale();
    const { theme } = useTheme();
    const backgroundClass = theme === 'light' ? 'bg-gray-200' : 'bg-gray-600';
    const textClass = theme === 'light' ? 'text-dark' : 'text-white';


    const projectsContent = {
        en: [
            { title: 'Project One', description: 'Description for project one.', image: '/images/img1.jpeg', link: '#' },
            { title: 'Project Two', description: 'Description for project two.', image: '/images/img2.jpeg', link: '#' },
            { title: 'Project Three', description: 'Description for project three.', image: '/images/img3.jpeg', link: '#' },
            { title: 'Project Four', description: 'Description for project four.', image: '/images/img4.jpeg', link: '#' },
            { title: 'Project Five', description: 'Description for project five.', image: '/images/img5.jpeg', link: '#' },
            { title: 'Project Six', description: 'Description for project six.', image: '/images/img6.jpeg', link: '#' }
        ],
        fr: [
            { title: 'Projet Un', description: 'Description pour le projet un.', image: '/images/img1.jpeg', link: '#' },
            { title: 'Projet Deux', description: 'Description pour le projet deux.', image: '/images/img2.jpeg', link: '#' },
            { title: 'Projet Trois', description: 'Description pour le projet trois.', image: '/images/img3.jpeg', link: '#' },
            { title: 'Projet Quatre', description: 'Description pour le projet quatre.', image: '/images/img4.jpeg', link: '#' },
            { title: 'Projet Cinq', description: 'Description pour le projet cinq.', image: '/images/img5.jpeg', link: '#' },
            { title: 'Projet Six', description: 'Description pour le projet six.', image: '/images/img6.jpeg', link: '#' }
        ]
    };

    return (
        <section className={`project flex flex-col justify-center items-center ${backgroundClass} ${textClass}`} id="projects">
            <h2 className="heading mb-16 text-3xl font-bold ">My Latest<span>Projects</span></h2>
            <div className="project-container">
                {projectsContent[locale].map((project, index) => (
                    <div key={index} className="project-box">
                        <Image
                            src={project.image}
                            alt={`project-${index + 1}`}
                            width={250}
                            height={250}
                        />
                        <div className="project-layer">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <Link href={project.link}>
                                <FontAwesomeIcon icon={faExternalLink} id="external-link-icon" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
