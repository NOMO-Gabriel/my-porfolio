'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faPaintBrush,
    faMobileAlt,
    faRobot,
    faDesktop,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Link from "next/link";
import { useLocale } from "@/app/utils/hooks/useLocale.js";
import { useTheme } from "@/app/utils/hooks/useTheme.js";

interface Service {
    icon: IconDefinition;
    title: string;
    description: string;
}

export default function ServiceSection() {
    const { locale } = useLocale();
    const { theme } = useTheme();

    const secondBackgroundService = theme === 'light' ? 'bg-gray-200' : 'bg-gray-600';
    const backgroundService = theme === 'light' ? 'bg-gray-100' : 'bg-gray-800';
    const textClass = theme === 'light' ? 'text-dark' : 'text-white';

    const servicesContent: Record<string, Service[]> = {
        en: [
            { icon: faCode, title: 'Web Development', description: 'Creation and development of responsive and dynamic websites tailored to your needs.' },
            { icon: faPaintBrush, title: 'Graphic Design', description: 'Professional design services for branding, logos, and visual identity.' },
            { icon: faMobileAlt, title: 'Mobile Development', description: 'Development of mobile applications for iOS and Android platforms.' },
            { icon: faRobot, title: 'Artificial Intelligence', description: 'AI solutions to enhance your business with machine learning and automation.' },
            { icon: faDesktop, title: 'Desktop Applications', description: 'Creation of desktop applications with user-friendly interfaces and powerful functionality.' },
        ],
        fr: [
            { icon: faCode, title: 'Création de Sites Web', description: 'Conception, création et développement de sites web responsives et dynamiques adaptés à vos besoins.' },
            { icon: faPaintBrush, title: 'Design Graphique', description: 'Services de conception professionnels pour l\'image de marque, les logos et l\'identité visuelle.' },
            { icon: faMobileAlt, title: 'Développement Mobile', description: 'Développement d\'applications mobiles pour les plateformes iOS et Android.' },
            { icon: faRobot, title: 'Intelligence Artificielle', description: 'Solutions d\'IA pour améliorer votre entreprise avec l\'apprentissage automatique et l\'automatisation.' },
            { icon: faDesktop, title: 'Applications Desktop', description: 'Création d\'applications desktop avec des interfaces conviviales et des fonctionnalités puissantes.' },
        ]
    };

    return (
        <section className={`services flex items-center justify-center flex-col ${backgroundService} ${textClass}`} id="services">
            <h2 className="heading mb-20 font-bold text-5xl">
                {locale === 'en' ? 'My' : 'Mes'} <span>Services</span>
            </h2>
            <div className="services-container flex flex-row justify-center items-center gap-8 flex-wrap">
                {servicesContent[locale].map((service, index) => (
                    <div key={index} className={`services-box p-6 rounded-lg ${secondBackgroundService} shadow-lg`}>
                        <FontAwesomeIcon icon={service.icon} id="service-icon" className="text-3xl mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-base mb-4">{service.description}</p>
                        <Link href="#projects" className="btn">{locale === 'en' ? 'View My Projects' : 'Voir Mes Projets'}</Link>
                    </div>
                ))}
            </div>
            <div className="contact-info mt-8 text-center text-xl">
                <p>For any additional services, please <Link href="#contact" className="text-blue-500 underline">contact me <FontAwesomeIcon icon={faEnvelope} className="ml-1" /></Link> to discuss further.</p>
            </div>
        </section>
    );
}
