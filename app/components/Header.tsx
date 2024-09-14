'use client'

import HeaderBottom from "@/app/components/HeaderBottom";
import HeaderTop from "@/app/components/HeaderTop";

const Header = () => {
    return (
        <nav className="">
            <div className="flex flex-col">
                <HeaderTop />
                <HeaderBottom/>
            </div>
        </nav>
    );
};

export default Header;
