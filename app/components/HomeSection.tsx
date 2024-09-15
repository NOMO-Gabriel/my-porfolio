'use client';

import { useTheme } from "@/app/utils/hooks/useTheme.js";
import { useLocale } from "@/app/utils/hooks/useLocale.js";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const HomeSection = () => {
    const { theme } = useTheme();
    const { locale } = useLocale();

    const backgroundClass = theme === 'light' ? 'bg-gray-100' : 'bg-gray-800';
    const textClass = theme === 'light' ? 'text-black' : 'text-white';
    const content = (locale === 'en') ? {
        greetings: "Hello, It's Me",
        name: 'Gabriel Nomo',
        firstPresentation: 'And I\'m a',
        presentation: 'Software Engineering Student',
        body: "Holder of a bachelor's degree in mathematics, I am continuing my studies at the National Advanced School of Engineering of Yaoundé, where I am currently in my 4th year of Computer Engineering.",
        download:'Download CV'
    } : {
        greetings: "Salut, c'est moi",
        name: 'Gabriel Nomo',
        firstPresentation: 'Je suis un',
        presentation: 'Élève ingénieur en informatique',
        body: "Titulaire d'une licence en mathématiques, Je poursuis mes études à l'École Nationale Supérieure Polytechnique de Yaoundé, où je suis actuellement en 4e année de Génie Informatique." ,
        download: 'Télécharger mon CV'
    };

    return (
        <section id="home"
                 className={`flex justify-center items-center flex-col lg:flex-row  ${backgroundClass} ${textClass}`}>
            <div className="home-content">
                <h3 className={'text-3xl font-thin'}>{content.greetings}</h3>
                <h1 className={'text-5xl font-bold'}>{content.name}</h1>
                <h3 className={'mb-7'}>{content.firstPresentation} <span>{content.presentation}</span></h3>
                <p>{content.body}</p>
                <div className="social-media">
                    <Link href="https://www.linkedin.com/in/nomo-bodianga-gabriel-nasaire-junior-255b27293"><FontAwesomeIcon icon={faLinkedin}/></Link>
                    <Link href="https://github.com/NOMO-Gabriel"><FontAwesomeIcon icon={faGithub}/></Link>
                    <Link href="mailto:gabriel.nomo@facsciences-uy1.cm"><FontAwesomeIcon icon={faEnvelope}/></Link>
                </div>
                <Link href="/CvNomoGabriel.pdf" className="btn">{content.download}</Link>
            </div>
            <div className="relative w-80 h-80 mt-8 md:w-1/2  md:border md:border-blue-500 home-img">
                <Image
                    src="/images/gabriel.jpg"
                    alt="picture-logo"
                    layout="fill"
                    className="rounded-full object-cover"
                />
            </div>
        </section>
    );
};

export default HomeSection;
