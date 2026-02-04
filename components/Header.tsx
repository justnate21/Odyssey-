
import React from 'react';

const Header: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-50 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex space-x-1">
              <div className="w-2 h-8 bg-[#006233]"></div>
              <div className="w-2 h-8 bg-[#F9D616]"></div>
              <div className="w-2 h-8 bg-[#EF3340]"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-stone-900">
                ETHIOPIAN <span className="text-[#006233]">ODYSSEY</span>
              </h1>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500 font-medium">Bespoke Travel Planning</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-stone-600">
            <a 
              href="#destination" 
              onClick={(e) => scrollToSection(e, 'destination')}
              className="hover:text-[#006233] transition-colors"
            >
              Explore Regions
            </a>
            <a 
              href="#style" 
              onClick={(e) => scrollToSection(e, 'style')}
              className="hover:text-[#006233] transition-colors"
            >
              Pricing
            </a>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className="hover:text-[#006233] transition-colors"
            >
              About Ethiopia
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;