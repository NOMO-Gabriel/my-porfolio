'use client';
import { useState, ChangeEvent, FormEvent } from "react";
import { useTheme } from "@/app/utils/hooks/useTheme.js";
import { useLocale } from "@/app/utils/hooks/useLocale.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy} from "@fortawesome/free-solid-svg-icons";

export default function ContactSection() {
    const { theme } = useTheme();
    const { locale } = useLocale();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobileNumber: "",
        subject: "",
        message: "",
    });

    const [copySuccess, setCopySuccess] = useState(false);
    const [showEmail, setShowEmail] = useState(false);

    // Reset form data
    const deleteData = () => {
        setFormData({
            fullName: "",
            email: "",
            mobileNumber: "",
            subject: "",
            message: "",
        });
    };

    // Handle changes to input fields
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const subject = encodeURIComponent(formData.subject);
        const body = encodeURIComponent(`
            Hello. I am ${formData.fullName}. My contact is ${formData.email}. My message is:
            ${formData.message}
        `);

        const mailtoLink = `mailto:gabriel.nomo@facsciences-uy1.cm?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;

        deleteData();
    };

    // Handle copy email to clipboard
    const handleCopyEmail = () => {
        navigator.clipboard.writeText('gabriel.nomo@facsciences-uy1.cm').then(() => {
            setCopySuccess(true);
            setShowEmail(true);
            setTimeout(() => {
                setShowEmail(false);
                setCopySuccess(false);
            }, 3000);
        });
    };

    // Define background colors and text colors based on the theme
    const background = theme === 'light' ? 'bg-gray-200' : 'bg-gray-800';
    const formBackground = theme === 'light' ? 'bg-white' : 'bg-gray-700';
    const textColor = theme === 'light' ? 'text-black' : 'text-white';

    // Define labels based on the locale
    const labels = {
        fullName: locale === 'fr' ? "Nom Complet" : "Full Name",
        email: locale === 'fr' ? "Adresse Email" : "Email Address",
        mobileNumber: locale === 'fr' ? "Numéro de Téléphone" : "Mobile Number",
        subject: locale === 'fr' ? "Objet de l'Email" : "Email Subject",
        message: locale === 'fr' ? "Votre Message" : "Your Message",
        sendMessage: locale === 'fr' ? "Envoyer le Message" : "Send Message",
        contactMe: locale === 'fr' ? "Contactez" : "Contact",
        copy: locale==='fr' ? 'Copier' : 'Copy',
        emailCopied: locale === 'fr' ? "Email Copié!" : "Email Copied!"
    };

    return (
        <section className={`py-8 px-4 ${background} ${textColor} flex flex-col items-center justify-center`} id="contact">
            <h2 className={`text-2xl font-semibold text-center mb-6 `}>
                {labels.contactMe} <span >Me!</span>
            </h2>
            <form onSubmit={handleSubmit} className={`max-w-lg mx-auto ${formBackground} p-6 rounded-lg shadow-md`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <input
                        type="text"
                        name="fullName"
                        placeholder={labels.fullName}
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${textColor}`}
                        style={{ backgroundColor: theme === 'dark' ? '#4A5568' : '' }}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder={labels.email}
                        value={formData.email}
                        onChange={handleChange}
                        className={`border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${textColor}`}
                        style={{ backgroundColor: theme === 'dark' ? '#4A5568' : '' }}
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <input
                        type="number"
                        name="mobileNumber"
                        placeholder={labels.mobileNumber}
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        className={`border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${textColor}`}
                        style={{ backgroundColor: theme === 'dark' ? '#4A5568' : '' }}
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder={labels.subject}
                        value={formData.subject}
                        onChange={handleChange}
                        className={`border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${textColor}`}
                        style={{ backgroundColor: theme === 'dark' ? '#4A5568' : '' }}
                    />
                </div>
                <textarea
                    name="message"
                    cols={30}
                    rows={10}
                    placeholder={labels.message}
                    value={formData.message}
                    onChange={handleChange}
                    className={`border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 ${textColor}`}
                    style={{ backgroundColor: theme === 'dark' ? '#4A5568' : '' }}
                ></textarea>
                <button type="submit" className="small-btn w-full">
                    {labels.sendMessage}
                </button>
            </form>
            <div className={`text-center mt-4 ${textColor} flex flex-row space-x-4 mt-8 mb-8 justify-center items-center`}>
                <p>{locale === 'fr' ? "Si vous avez un problème, prenez mon adresse email:" : "If you have a problem, take my email address:"}</p>
                <button
                    onClick={handleCopyEmail}
                    className="flex items-center justify-center mt-2 text-blue-500 hover:text-blue-700 transition duration-300"
                >
                    <FontAwesomeIcon icon={faCopy}/>
                    {labels.copy}
                </button>
                {showEmail && <p className="mt-2 text-green-500">{labels.emailCopied}</p>}
            </div>
        </section>
    );
}
