'use client';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload, faLink } from "@fortawesome/free-solid-svg-icons";
import { useLocale } from "@/app/utils/hooks/useLocale.js";
import { useTheme } from "@/app/utils/hooks/useTheme.js";

export default function CertificationSection() {
    const { locale } = useLocale();
    const { theme } = useTheme();
    const backgroundCertification = theme === 'light' ? 'bg-gray-100' : 'bg-gray-900';
    const secondBackgroundCertification = theme === 'light' ? 'bg-white' : 'bg-gray-600';

    const textClass = theme === 'light' ? 'text-black' : 'text-white';

    const certificationsContent = {
        en: [
            {
                title: 'C Programming Certification',
                issuer: 'Example Institute',
                downloadLink: '#',
                referenceLink: '#',
                image: '/images/c-programming-certification.png' // Add image URL
            },
            {
                title: 'Java Programming Certification',
                issuer: 'Tech Academy',
                downloadLink: '#',
                referenceLink: '#',
                image: '/images/java-programming-certification.png' // Add image URL
            },
            {
                title: 'HTML & CSS Certification',
                issuer: 'Web School',
                downloadLink: '#',
                referenceLink: '#',
                image: '/images/html-css-certification.png' // Add image URL
            }
        ],
        fr: [
            {
                title: 'Certification en Programmation C',
                issuer: 'Institut Exemple',
                downloadLink: '#',
                referenceLink: '#',
                image: '/images/c-programming-certification.png' // Add image URL
            },
            {
                title: 'Certification en Programmation Java',
                issuer: 'Académie Tech',
                downloadLink: '#',
                referenceLink: '#',
                image: '/images/java-programming-certification.png' // Add image URL
            },
            {
                title: 'Certification en HTML & CSS',
                issuer: 'École Web',
                downloadLink: '#',
                referenceLink: '#',
                image: '/images/html-css-certification.png' // Add image URL
            }
        ]
    };

    return (
        <section className={`certifications ${backgroundCertification} ${textClass} py-10 flex flex-col items-center justify-center`} id="certifications">
            <span className="heading mb-10 font-bold text-3xl text-center md:text-5xl">
                {locale === 'en' ? 'Certifications' : 'Certifications'}
            </span>
            <div className="certifications-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificationsContent[locale].map((certification, index) => (
                    <div key={index} className={`certification-box p-4 rounded shadow-md ${secondBackgroundCertification}`}>
                        <Image
                            src={certification.image}
                            alt={certification.title}
                            width={400}
                            height={200}
                            className="w-full h-32 object-cover rounded mb-4"
                        />
                        <h3 className="text-xl font-semibold">{certification.title}</h3>
                        <p className="mt-1 text-sm text-gray-500">{certification.issuer}</p>
                        <div className="mt-4 flex gap-2">
                            <a href={certification.downloadLink} className="small-btn" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFileDownload}/> Download
                            </a>
                            <a href={certification.referenceLink} className="small-btn" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLink}/> View Reference
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
