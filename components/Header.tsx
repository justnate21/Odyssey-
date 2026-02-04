
// Standard React import to resolve JSX namespace resolution issues
import React from 'react';

interface HeaderProps {
  setView: (view: 'home' | 'about') => void;
  currentView: 'home' | 'about';
}

const Header: React.FC<HeaderProps> = ({ setView, currentView }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (currentView !== 'home') {
      setView('home');
      // Wait for view to switch before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-50 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <div className="flex space-x-1">
              <div className="w-2 h-8 bg-[#006233]"></div>
              <div className="w-2 h-8 bg-[#F9D616]"></div>
              <div className="w-2 h-8 bg-[#EF3340]"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-stone-900 uppercase">
                ETHIOPIAN <span className="text-[#006233]">ODYSSEY</span>
              </h1>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500 font-medium">Bespoke Travel Planning</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
            <button 
              onClick={() => setView('home')}
              className={`hover:text-[#006233] transition-colors pb-1 border-b-2 ${currentView === 'home' ? 'border-[#006233] text-stone-900' : 'border-transparent'}`}
            >
              Travel Planner
            </button>
            <button 
              onClick={() => setView('about')}
              className={`hover:text-[#006233] transition-colors pb-1 border-b-2 ${currentView === 'about' ? 'border-[#006233] text-stone-900' : 'border-transparent'}`}
            >
              About Ethiopia
            </button>
            <div className="h-4 w-[1px] bg-stone-200"></div>
            <a 
              href="#destination" 
              onClick={(e) => scrollToSection(e, 'destination')}
              className="hover:text-[#006233] transition-colors"
            >
              Explore Regions
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
