'use client';

import { useTheme } from "@/app/utils/hooks/useTheme.js";
import { useLocale } from "@/app/utils/hooks/useLocale.js";
import Link from "next/link";
import Image from "next/image";


const AboutSection = () => {
    const { theme } = useTheme();
    const { locale } = useLocale();

    const backgroundClass = theme === 'light' ? 'bg-gray-200' : 'bg-gray-600';
    const textClass = theme === 'light' ? 'text-black' : 'text-white';

    const content = (locale === 'en') ? {
        title: "About Me",
        body: "I am passionate about AI, cybersecurity, and software engineering. My dream is to excel in these fields to solve real-world problems. During my free time, I enjoy practicing sports, playing chess, and watching movies.",
        download: 'Download CV'
    } : {
        title: "À propos de moi",
        body: "Je suis passionné par l'IA, la cybersécurité et le génie logiciel. Mon rêve est d'exceller dans ces domaines pour résoudre des problèmes concrets de la société. Pendant mon temps libre, j'aime pratiquer du sport, jouer aux échecs et regarder des films.",
        download: 'Télécharger mon CV'
    };

    return (
        <section id="about"
                 className={`flex justify-center items-center space-y-8 flex-col lg:flex-row lg:space-x-12 ${backgroundClass} ${textClass}`}>
            <div className="relative w-80 h-80 mt-8 md:w-1/2  md:border md:border-blue-500 about-img">
                <Image
                    src="/images/gabriel.jpg"
                    alt="picture-logo"
                    layout="fill"
                    className="rounded-full object-cover"
                />
            </div>
            <div className="about-content text-center lg:text-left p-6 lg:p-12">
                <span className={'text-4xl font-bold mb-4'}>{content.title}</span>
                <p className={'mb-6 text-lg'}>{content.body}</p>
                <Link href="/CvNomoGabriel.pdf" className="btn">{content.download}</Link>
            </div>
        </section>
    );
};

export default AboutSection;
