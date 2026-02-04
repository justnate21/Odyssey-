
import React, { useState } from 'react';
import Header from './components/Header';
import { REGIONS, TIER_INFO } from './constants';
import { PricingTier, Itinerary } from './types';
import { generateItinerary } from './services/geminiService';
import ItineraryDisplay from './components/ItineraryDisplay';

const App: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState(REGIONS[0]);
  const [selectedTier, setSelectedTier] = useState<PricingTier>(PricingTier.STANDARD);
  const [duration, setDuration] = useState(7);
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [error, setError] = useState<string | null>(null);

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
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    window.focus();
    window.print();
  };

  const startPlanning = () => {
    const dest = document.getElementById('destination');
    if (dest) dest.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Hero Section */}
        <section className="mb-16 no-print text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6 leading-tight">
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
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200">
              <h3 id="destination" className="text-2xl font-bold mb-6 flex items-center scroll-mt-24">
                <span className="w-8 h-8 rounded-full bg-[#006233] text-white flex items-center justify-center text-sm mr-3">1</span>
                Your Destination
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {REGIONS.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region)}
                    className={`relative p-4 rounded-2xl text-left transition-all duration-300 group border-2 ${
                      selectedRegion.id === region.id 
                        ? 'border-[#006233] bg-[#006233]/5' 
                        : 'border-transparent bg-stone-50 hover:bg-stone-100'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-lg text-stone-900 group-hover:text-[#006233] transition-colors">{region.name}</h4>
                        <p className="text-sm text-stone-500 line-clamp-2 mt-1">{region.description}</p>
                      </div>
                      {selectedRegion.id === region.id && (
                        <div className="bg-[#006233] text-white rounded-full p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <h3 id="style" className="text-2xl font-bold mt-12 mb-6 flex items-center scroll-mt-24">
                <span className="w-8 h-8 rounded-full bg-[#006233] text-white flex items-center justify-center text-sm mr-3">2</span>
                Travel Style & Duration
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-stone-700 uppercase tracking-wider mb-4">Pricing Tier</label>
                  <div className="grid grid-cols-3 gap-3">
                    {(Object.keys(PricingTier) as Array<keyof typeof PricingTier>).map((key) => {
                      const tier = PricingTier[key];
                      const info = TIER_INFO[tier];
                      return (
                        <button
                          key={tier}
                          onClick={() => setSelectedTier(tier)}
                          className={`p-4 rounded-xl text-center border-2 transition-all ${
                            selectedTier === tier 
                              ? 'border-[#006233] bg-[#006233]/5 ring-1 ring-[#006233]' 
                              : 'border-stone-100 bg-stone-50 hover:bg-stone-100'
                          }`}
                        >
                          <div className="text-2xl mb-1">{info.icon}</div>
                          <div className="font-bold text-stone-900 text-sm">{tier}</div>
                          <div className="text-[10px] text-stone-500 font-medium">{info.range}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="block text-sm font-bold text-stone-700 uppercase tracking-wider">Duration (Days)</label>
                    <span className="text-[#006233] font-bold text-lg">{duration} days</span>
                  </div>
                  <input 
                    type="range" 
                    min="3" 
                    max="14" 
                    step="1" 
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#006233]"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 font-bold uppercase mt-2">
                    <span>3 Days</span>
                    <span>14 Days</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={loading}
                className={`w-full mt-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-lg ${
                  loading 
                    ? 'bg-stone-200 text-stone-400 cursor-not-allowed' 
                    : 'bg-stone-900 text-white hover:bg-black shadow-stone-900/20'
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-stone-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Crafting Plan...
                  </span>
                ) : "Generate Bespoke Itinerary"}
              </button>

              {error && (
                <div className="mt-4 p-5 bg-red-50 border border-red-200 rounded-2xl flex items-start space-x-3 text-red-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <div className="flex-1">
                    <p className="font-bold text-base mb-1">Configuration Needed</p>
                    <p className="text-sm opacity-90 leading-relaxed mb-3">{error}</p>
                    <div className="bg-white/60 p-3 rounded-lg border border-red-200 text-xs">
                      <p className="font-bold uppercase tracking-widest text-[10px] mb-1">Vercel Setup Guide:</p>
                      <ol className="list-decimal list-inside space-y-1 opacity-80">
                        <li>Go to <strong>Settings</strong> &gt; <strong>Environment Variables</strong> in Vercel.</li>
                        <li>Add Key: <code>API_KEY</code></li>
                        <li>Add Value: (Your Google Gemini Key)</li>
                        <li>Go to <strong>Deployments</strong> tab, find your latest build, click <strong>...</strong> and select <strong>Redeploy</strong>.</li>
                      </ol>
                    </div>
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
              <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center p-12 bg-white rounded-3xl border border-dashed border-stone-200">
                <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-stone-400 mb-2">Itinerary Preview</h4>
                <p className="text-stone-400 max-w-xs">Your personalized journey will be visualized here once you choose your preferences.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="mt-32 bg-stone-900 text-white py-20 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-white">ETHIOPIAN ODYSSEY</h2>
              <p className="text-stone-400 text-sm">Luxury Travel Curators</p>
            </div>
            <div className="flex space-x-6 text-sm font-medium text-stone-400">
              <a href="#" className="hover:text-white transition-colors">Guide</a>
              <a href="#" className="hover:text-white transition-colors">Safety</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
            </div>
            <div className="text-stone-500 text-xs">
              © 2024 Ethiopian Odyssey. Preserving the heritage of the Horn of Africa.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
