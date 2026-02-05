
// Standard React import to resolve JSX namespace resolution issues
import React from 'react';

interface HeaderProps {
  setView: (view: 'home' | 'about') => void;
  currentView: 'home' | 'about';
}

const Header: React.FC<HeaderProps> = ({ setView, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (currentView !== 'home') {
      setView('home');
      // Wait for view to switch before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { label: 'Travel Planner', action: () => setView('home'), active: currentView === 'home' },
    { label: 'About Ethiopia', action: () => setView('about'), active: currentView === 'about' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-stone-200 sticky top-0 z-[100] no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}
          >
            <div className="flex space-x-1">
              <div className="w-1.5 h-7 bg-[#006233]"></div>
              <div className="w-1.5 h-7 bg-[#F9D616]"></div>
              <div className="w-1.5 h-7 bg-[#EF3340]"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-stone-900 uppercase">
                ETHIOPIAN <span className="text-[#006233]">ODYSSEY</span>
              </h1>
              <p className="text-[9px] uppercase tracking-[0.3em] text-stone-500 font-bold">Bespoke Travel</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-bold text-stone-600">
            {navItems.map((item) => (
              <button 
                key={item.label}
                onClick={() => { item.action(); setIsMenuOpen(false); }}
                className={`hover:text-[#006233] transition-colors pb-1 border-b-2 tracking-wide uppercase text-[11px] ${
                  item.active ? 'border-[#006233] text-stone-900' : 'border-transparent'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="h-4 w-[1px] bg-stone-200"></div>
            <button 
              onClick={(e) => scrollToSection(e, 'contact-section')}
              className="bg-stone-900 text-white px-5 py-2.5 rounded-full hover:bg-black transition-all text-[11px] uppercase tracking-widest"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-900 p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-stone-200 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <button 
                key={item.label}
                onClick={() => { item.action(); setIsMenuOpen(false); }}
                className={`text-left text-lg font-bold py-2 ${item.active ? 'text-[#006233]' : 'text-stone-700'}`}
              >
                {item.label}
              </button>
            ))}
            <hr className="border-stone-100" />
            <button 
              onClick={(e) => scrollToSection(e, 'contact-section')}
              className="bg-[#006233] text-white w-full py-4 rounded-xl font-bold text-center"
            >
              Contact Our Curators
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
