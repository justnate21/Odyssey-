
// Standard React import to resolve JSX namespace resolution issues
import React from 'react';
import Header from './components/Header';
import { REGIONS, TIER_INFO } from './constants';
import { PricingTier, Itinerary } from './types';
import { generateItinerary } from './services/geminiService';
import ItineraryDisplay from './components/ItineraryDisplay';
import AboutEthiopia from './components/AboutEthiopia';

const CURATOR_PHOTO_URL = "https://i.postimg.cc/K8byWD7n/photo-2025-12-03-10-39-16.jpg";
const CURATOR_EMAIL = "natnael@ethiopianodyssey.com";

const ContactSection: React.FC = () => {
  return (
    <section id="contact-section" className="py-24 bg-white rounded-[3rem] border border-stone-100 shadow-sm mt-32 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Creator Photo */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 border border-stone-100 rounded-full -z-10 animate-pulse"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-stone-100 border-8 border-white shadow-2xl overflow-hidden flex items-center justify-center relative">
                <img 
                  src={CURATOR_PHOTO_URL} 
                  alt="Natnael Fanna - Lead Curator" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Visual Label */}
                <div className="absolute bottom-6 bg-black/60 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white">
                  Lead Curator
                </div>
              </div>
            </div>
          </div>

          {/* Creator Info */}
          <div className="w-full md:w-3/5 text-center md:text-left space-y-6">
            <div>
              <span className="text-[#006233] font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Direct Concierge</span>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-3 leading-tight">
                Curated by <br/>
                <span className="text-[#006233] italic underline decoration-stone-100 underline-offset-8">Natnael Fanna</span>
              </h3>
              <p className="text-stone-500 text-lg leading-relaxed max-w-lg pt-2">
                Crafting the perfect expedition requires a human touch. Reach out to Natnael to refine your bespoke itinerary and ensure every detail of your journey is curated to perfection.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 border border-stone-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-stone-400 tracking-wider">Email Correspondence</p>
                  <a href={`mailto:${CURATOR_EMAIL}`} className="text-stone-900 font-bold hover:text-[#006233] transition-colors border-b border-stone-200">{CURATOR_EMAIL}</a>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 border border-stone-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-stone-400 tracking-wider">Follow our Expeditions</p>
                  <a href="#" className="text-stone-900 font-bold hover:text-[#006233] transition-colors">@EthiopianOdyssey</a>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <a 
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CURATOR_EMAIL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-stone-900 transition-all shadow-xl hover:shadow-black/20 active:scale-95 text-center min-w-[240px]"
              >
                Email Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const [view, setView] = React.useState<'home' | 'about'>('home');
  const [selectedRegion, setSelectedRegion] = React.useState(REGIONS[0]);
  const [selectedTier, setSelectedTier] = React.useState<PricingTier>(PricingTier.STANDARD);
  const [duration, setDuration] = React.useState(7);
  const [loading, setLoading] = React.useState(false);
  const [itinerary, setItinerary] = React.useState<Itinerary | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  // Scroll to top when view changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await generateItinerary(selectedRegion.name, selectedTier, duration);
      setItinerary(result);
      setTimeout(() => {
        const section = document.getElementById('itinerary-section');
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    } catch (err: any) {
      console.error("Generation Failed:", err);
      if (err.message?.includes('429') || err.message?.includes('quota')) {
        setError("The travel planner service is currently experiencing high demand. Please wait a few seconds and try again.");
      } else {
        setError(err.message || "An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    setTimeout(() => {
      window.print();
    }, 500);
  };

  const startPlanning = () => {
    const dest = document.getElementById('destination');
    if (dest) dest.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <Header setView={setView} currentView={view} />
      
      {view === 'home' ? (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          
          {/* Hero Section */}
          <section className="mb-16 no-print text-center md:text-left pt-10">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-6 leading-tight">
              Discover the <span className="text-[#006233]">Cradle of Humanity</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl leading-relaxed mb-8">
              Experience the rock-hewn majesty of Lalibela and the tribal rhythms of the Omo Valley. 
              Design a journey that matches your pace and passion.
            </p>
            <button 
              onClick={startPlanning}
              className="bg-[#006233] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl shadow-[#006233]/20"
            >
              Start Planning Your Journey
            </button>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Configuration Side */}
            <aside className="lg:col-span-5 space-y-8 no-print">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-stone-200">
                <h3 id="destination" className="text-2xl font-bold mb-8 flex items-center scroll-mt-24">
                  <span className="w-8 h-8 rounded-full bg-[#006233] text-white flex items-center justify-center text-xs mr-3 font-bold">1</span>
                  Your Destination
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {REGIONS.map((region) => (
                    <button
                      key={region.id}
                      onClick={() => setSelectedRegion(region)}
                      className={`relative p-5 rounded-2xl text-left transition-all duration-300 group border-2 ${
                        selectedRegion.id === region.id 
                          ? 'border-[#006233] bg-[#006233]/5 ring-4 ring-[#006233]/5' 
                          : 'border-transparent bg-stone-50 hover:bg-stone-100'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-lg text-stone-900 group-hover:text-[#006233] transition-colors">{region.name}</h4>
                          <p className="text-sm text-stone-500 line-clamp-2 mt-1 font-medium">{region.description}</p>
                        </div>
                        {selectedRegion.id === region.id && (
                          <div className="bg-[#006233] text-white rounded-full p-1.5 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                <h3 id="style" className="text-2xl font-bold mt-16 mb-8 flex items-center scroll-mt-24">
                  <span className="w-8 h-8 rounded-full bg-[#006233] text-white flex items-center justify-center text-xs mr-3 font-bold">2</span>
                  Travel Style & Duration
                </h3>
                
                <div className="space-y-8">
                  <div>
                    <label className="block text-[11px] font-bold text-stone-400 uppercase tracking-widest mb-5 ml-1">Pricing Tier</label>
                    <div className="grid grid-cols-3 gap-3">
                      {(Object.keys(PricingTier) as Array<keyof typeof PricingTier>).map((key) => {
                        const tier = PricingTier[key];
                        const info = TIER_INFO[tier];
                        return (
                          <button
                            key={tier}
                            onClick={() => setSelectedTier(tier)}
                            className={`p-5 rounded-2xl text-center border-2 transition-all ${
                              selectedTier === tier 
                                ? 'border-[#006233] bg-[#006233]/5 ring-4 ring-[#006233]/5' 
                                : 'border-stone-50 bg-stone-50 hover:bg-stone-100'
                            }`}
                          >
                            <div className="text-3xl mb-2">{info.icon}</div>
                            <div className="font-bold text-stone-900 text-sm tracking-tight">{tier}</div>
                            <div className="text-[10px] text-stone-500 font-bold mt-1">{info.range}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-5 ml-1">
                      <label className="block text-[11px] font-bold text-stone-400 uppercase tracking-widest">Duration</label>
                      <span className="text-[#006233] font-bold text-lg">{duration} days</span>
                    </div>
                    <div className="px-1">
                      <input 
                        type="range" 
                        min="3" 
                        max="14" 
                        step="1" 
                        value={duration}
                        onChange={(e) => setDuration(parseInt(e.target.value))}
                        className="w-full h-2 bg-stone-100 rounded-lg appearance-none cursor-pointer accent-[#006233]"
                      />
                    </div>
                    <div className="flex justify-between text-[9px] text-stone-400 font-bold uppercase mt-3 tracking-widest px-1">
                      <span>3 Days</span>
                      <span>14 Days</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleGenerate}
                  disabled={loading}
                  className={`w-full mt-12 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl ${
                    loading 
                      ? 'bg-stone-200 text-stone-400 cursor-not-allowed' 
                      : 'bg-stone-900 text-white hover:bg-black shadow-stone-900/20 active:scale-95'
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-stone-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Crafting...
                    </span>
                  ) : "Generate Itinerary"}
                </button>

                {error && (
                  <div className="mt-6 p-5 bg-red-50 border border-red-100 rounded-2xl flex items-start space-x-3 text-red-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0 mt-0.5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-bold text-sm mb-1">Status Notification</p>
                      <p className="text-xs opacity-90 leading-relaxed font-medium">{error}</p>
                    </div>
                  </div>
                )}
              </div>
            </aside>

            {/* Dynamic Content Side */}
            <div id="itinerary-section" className="lg:col-span-7 scroll-mt-24">
              {itinerary ? (
                <ItineraryDisplay itinerary={itinerary} onPrint={handlePrint} />
              ) : (
                <div className="h-full min-h-[600px] flex flex-col items-center justify-center text-center p-12 bg-white rounded-[3rem] border border-dashed border-stone-200">
                  <div className="w-24 h-24 bg-stone-50 rounded-full flex items-center justify-center mb-8 shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-stone-800 mb-3">Your Odyssey Awaits</h4>
                  <p className="text-stone-400 max-w-sm leading-relaxed font-medium">Configure your destination and travel style to see a personalized day-by-day plan with maps and curated experiences.</p>
                </div>
              )}
            </div>
          </div>

          <ContactSection />
        </main>
      ) : (
        <AboutEthiopia />
      )}

      <footer className="mt-32 bg-stone-950 text-white py-24 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-bold mb-4 tracking-tighter">ETHIOPIAN <span className="text-[#006233]">ODYSSEY</span></h2>
              <p className="text-stone-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">Curating the most authentic and high-end experiences across the Horn of Africa for discerning travelers.</p>
            </div>
            <div className="flex flex-col space-y-4 items-center md:items-end">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F9D616]">Navigation</h4>
              <nav className="flex flex-col space-y-3 text-sm font-medium text-stone-400 items-center md:items-end">
                <button onClick={() => setView('home')} className="hover:text-white transition-colors">Planner</button>
                <button onClick={() => setView('about')} className="hover:text-white transition-colors">About Ethiopia</button>
                <button onClick={(e: any) => { setView('home'); setTimeout(() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-white transition-colors">Inquire</button>
              </nav>
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-white/5 text-center text-stone-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            © 2024 Ethiopian Odyssey. All rights reserved. Preserving the heritage of Ethiopia.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
