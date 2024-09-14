'use client'

import Header from "@/app/components/Header";
import {useTheme} from "@/app/utils/hooks/useTheme.js";

export default function Home() {
    const { theme } = useTheme();

    const backgroundClass = theme === 'light' ? 'bg-gray-100' : 'bg-gray-800';
    const textClass = theme === 'light' ? 'text-black' : 'text-white';
  return (
      <div className={`space-y-10 ${backgroundClass} ${textClass}`}>
        <Header/>
      </div>
  );
}
