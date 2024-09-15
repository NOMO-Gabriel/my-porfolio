'use client';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload, faLink } from "@fortawesome/free-solid-svg-icons";
import { useLocale } from "@/app/utils/hooks/useLocale.js";
import { useTheme } from "@/app/utils/hooks/useTheme.js";

type Certification = {
    title: string;
    issuer: string;
    downloadLink: string;
    referenceLink: string;
    image: string;
};

type CertificationsContent = {
    en: Certification[];
    fr: Certification[];
};

export default function CertificationSection() {
    const { locale } = useLocale();
    const { theme } = useTheme();
    const backgroundCertification = theme === 'light' ? 'bg-gray-100' : 'bg-gray-900';
    const secondBackgroundCertification = theme === 'light' ? 'bg-white' : 'bg-gray-600';
    const textClass = theme === 'light' ? 'text-black' : 'text-white';

    const certificationsContent: CertificationsContent = {
        en: [
            {
                title: 'C Programming Certification',
                issuer: 'Dartmouth College',
                downloadLink: '/c-programming-certification.pdf',
                referenceLink: 'https://www.coursera.org/account/accomplishments/verify/83JHP7MM86LS',
                image: '/images/c-programming-certification.png'
            },
            {
                title: 'Java Programming Certification',
                issuer: 'École Polytechnique Fédérale de Lausanne',
                downloadLink: '/java-programming-certification.pdf',
                referenceLink: 'https://www.coursera.org/account/accomplishments/verify/V552L4DBZZP9',
                image: '/images/java-programming-certification.png'
            },
            {
                title: 'Introduction to Web Development',
                issuer: 'University of California, Davis',
                downloadLink: '/html-css-certification.pdf',
                referenceLink: 'https://www.coursera.org/account/accomplishments/verify/6Z8SXCFPJFJ6',
                image: '/images/html-css-certification.png'
            }
        ],
        fr: [
            {
                title: 'Certification en Programmation C',
                issuer: 'Dartmouth College',
                downloadLink: '/c-programming-certification.pdf',
                referenceLink: 'https://www.coursera.org/account/accomplishments/verify/83JHP7MM86LS',
                image: '/images/c-programming-certification.png'
            },
            {
                title: 'Certification en Programmation Java',
                issuer: 'École Polytechnique Fédérale de Lausanne',
                downloadLink: '/java-programming-certification.pdf',
                referenceLink: 'https://www.coursera.org/account/accomplishments/verify/V552L4DBZZP9',
                image: '/images/java-programming-certification.png'
            },
            {
                title: 'Introduction au Développement Web',
                issuer: 'Université de Californie, Davis',
                downloadLink: '/html-css-certification.pdf',
                referenceLink: 'https://www.coursera.org/account/accomplishments/verify/6Z8SXCFPJFJ6',
                image: '/images/html-css-certification.png'
            }
        ]
    };


    const validLocale = locale === 'en' || locale === 'fr' ? locale : 'en';

    return (
        <section className={`certifications ${backgroundCertification} ${textClass} py-10 flex flex-col items-center justify-center`} id="certifications">
            <span className="heading mb-10 font-bold text-3xl text-center md:text-5xl">
                {validLocale === 'en' ? 'Certifications' : 'Certifications'}
            </span>
            <div className="certifications-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificationsContent[validLocale].map((certification, index) => (
                    <div key={index} className={`certification-box p-4 rounded shadow-md ${secondBackgroundCertification}`}>
                        <Image
                            src={certification.image}
                            alt={certification.title}
                            width={400}
                            height={200}
                            className="w-full h-32 object-cover rounded mb-4"
                        />
                        <h3 className="text-xl font-semibold">{certification.title}</h3>
                        <p className="mt-1 text-sm text-orange-500">{certification.issuer}</p>
                        <div className="mt-4 flex gap-2">
                            <a href={certification.downloadLink} className="small-btn" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFileDownload}/> {validLocale === 'en' ? 'Download' : 'Télécharger'}
                            </a>
                            <a href={certification.referenceLink} className="small-btn" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLink}/> {validLocale === 'en' ? 'View Reference' : 'Voir Référence'}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
