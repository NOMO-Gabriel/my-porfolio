import Header from "@/app/components/Header";
import HomeSection from "@/app/components/HomeSection";
import AboutSection from "@/app/components/AboutSection";
import ServiceSection from "@/app/components/ServicesSection";
import SkillsSection from "@/app/components/SkillsSection";
import CertificationSection from "@/app/components/CertificationSection";
import ContactSection from "@/app/components/ContactSection";
import FooterSection from "@/app/components/FooterSection";
import ProjectSection from "@/app/components/ProjectSection";

export default function page(){

    return(
        <div>
            <Header/>
            <HomeSection/>
            <AboutSection/>
            <ServiceSection/>
            <SkillsSection/>
            <CertificationSection/>
            <ProjectSection/>
            <ContactSection/>
            <FooterSection/>
        </div>
    );
}