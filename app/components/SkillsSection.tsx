'use client';
import { useState } from "react";
import { useLocale } from "@/app/utils/hooks/useLocale.js";
import { useTheme } from "@/app/utils/hooks/useTheme.js";

export default function SkillsSection() {
    const { locale } = useLocale();
    const { theme } = useTheme();
    const backgroundService = theme === 'light' ? 'bg-gray-200' : 'bg-gray-600';
    const textClass = theme === 'light' ? 'text-black' : 'text-black';

    // Contenu des compétences selon la langue
    const skillsContent = {
        en: [
            { title: 'Problem Solving', description: 'Demonstrated ability to tackle complex issues and provide effective solutions, utilizing advanced analytical and critical thinking skills.' },
            { title: 'Team Leadership', description: 'Proven experience in leading teams, managing projects, and fostering collaboration to achieve goals and drive success.' },
            { title: 'Communication', description: 'Strong verbal and written communication skills, capable of conveying ideas clearly and engagingly to diverse audiences.' },
            { title: 'Web Development', description: 'Skilled in creating and maintaining websites using modern technologies and frameworks like React, Next.js, and Tailwind CSS.' },
            { title: 'Graphic Design', description: 'Expert in designing visually appealing graphics and layouts using tools such as Adobe Photoshop and Illustrator.' },
            { title: 'Mobile Development', description: 'Experienced in developing mobile applications for iOS and Android platforms using Flutter and React Native.' },
            { title: 'Artificial Intelligence', description: 'Knowledgeable in AI concepts, including machine learning algorithms, data analysis, and predictive modeling.' },
            { title: 'Desktop Applications', description: 'Experienced in building cross-platform desktop applications with technologies like Electron and Java.' }
        ],
        fr: [
            { title: 'Résolution de Problèmes', description: 'Capacité démontrée à résoudre des problèmes complexes en utilisant des compétences analytiques et de pensée critique avancées.' },
            { title: 'Leadership d\'Équipe', description: 'Expérience avérée dans la direction d\'équipes, la gestion de projets et la promotion de la collaboration pour atteindre des objectifs et réussir.' },
            { title: 'Communication', description: 'Excellentes compétences en communication verbale et écrite, capable de transmettre des idées de manière claire et engageante à des publics divers.' },
            { title: 'Création de Sites Web', description: 'Compétent dans la création et la gestion de sites web utilisant des technologies modernes et des frameworks comme React, Next.js, et Tailwind CSS.' },
            { title: 'Design Graphique', description: 'Expert dans la conception de graphiques et de mises en page visuellement attrayants avec des outils tels qu\'Adobe Photoshop et Illustrator.' },
            { title: 'Développement Mobile', description: 'Expérience dans le développement d\'applications mobiles pour les plateformes iOS et Android avec Flutter et React Native.' },
            { title: 'Intelligence Artificielle', description: 'Connaissance des concepts d\'IA, y compris les algorithmes d\'apprentissage automatique, l\'analyse de données et la modélisation prédictive.' },
            { title: 'Applications Desktop', description: 'Expérience dans la création d\'applications desktop multiplateformes avec des technologies comme Electron et Java.' }
        ]
    };

    const [activeSkill, setActiveSkill] = useState(null);

    const handleViewMore = (index) => {
        setActiveSkill(index === activeSkill ? null : index);
    };

    return (
        <section className={`skills ${backgroundService} ${textClass} py-10 flex flex-col items-center justify-center`} id="skills">
            <span className="heading mb-10 font-bold text-5xl text-center">
                {locale === 'en' ? 'My Skills' : 'Mes Compétences'}
            </span>
            <div className="skills-container flex flex-col items-center gap-4">
                {skillsContent[locale].map((skill, index) => (
                    <div key={index} className="skill-item bg-white p-4 rounded shadow-md w-full max-w-md">
                        <h3 className="text-xl font-semibold">{skill.title}</h3>
                        <button
                            onClick={() => handleViewMore(index)}
                            className="small-btn"
                        >
                            {activeSkill === index ? 'View Less' : 'View More'}
                        </button>
                        {activeSkill === index && (
                            <p className="mt-2">{skill.description}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
