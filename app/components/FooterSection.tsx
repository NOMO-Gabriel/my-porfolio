'use client';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useLocale } from "@/app/utils/hooks/useLocale.js";

export default function FooterSection() {
    const { locale } = useLocale();

    return (
        <footer className="bg-gray-800 text-white py-4 flex justify-between items-center px-6 fixed bottom-0 w-full">
            <p className="text-sm">
                Copyright &copy; 2024 {locale === 'en' ? 'by' : 'par'} Nomo Gabriel | {locale === 'en' ? 'All Rights Reserved' : 'Tous droits réservés'}.
            </p>
            <Link href={"#home"}>
                <FontAwesomeIcon icon={faArrowUp} className="text-xl small-btn" />
            </Link>
        </footer>
    );
}
