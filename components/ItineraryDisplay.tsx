
// Standard React import to resolve JSX namespace resolution issues
import React from 'react';
import { Itinerary } from '../types';
import MapPlaceholder from './MapPlaceholder';

interface ItineraryDisplayProps {
  itinerary: Itinerary;
  onPrint: () => void;
}

const ItineraryDisplay: React.FC<ItineraryDisplayProps> = ({ itinerary, onPrint }) => {
  const [mapFocus, setMapFocus] = React.useState({ query: itinerary.region, zoom: 7 });
  const mapRef = React.useRef<HTMLDivElement>(null);

  const handleFocusLocation = (query: string, zoom: number = 14) => {
    setMapFocus({ query, zoom });
    // Smooth scroll back to map if it's far
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const resetMap = () => {
    setMapFocus({ query: itinerary.region, zoom: 7 });
  };

  const handlePrintClick = () => {
    console.log("Triggering PDF Export/Print...");
    onPrint();
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Info */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200 overflow-hidden relative">
        {/* Print-only brand bar */}
        <div className="hidden print-only flex items-center justify-between mb-8 border-b border-stone-100 pb-4">
          <div className="font-bold text-xl text-stone-900 tracking-tighter">ETHIOPIAN <span className="text-[#006233]">ODYSSEY</span></div>
          <div className="text-[10px] text-stone-400 uppercase tracking-widest font-medium">Personalized Travel Plan</div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 relative z-10">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#006233]/10 text-[#006233] text-xs font-bold uppercase tracking-wider mb-2">
              Bespoke Plan
            </span>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-2">{itinerary.region} Expedition</h2>
            <p className="text-stone-500 text-lg italic">A {itinerary.duration}-day {itinerary.tier.toLowerCase()} experience through Ethiopia's wonders.</p>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-stone-400 text-sm uppercase tracking-widest mb-1 font-bold">Estimated Total</div>
            <div className="text-3xl font-bold text-stone-900">${itinerary.estimatedTotal.toLocaleString()}</div>
            <button 
              onClick={handlePrintClick}
              className="mt-4 no-print flex items-center space-x-2 px-6 py-3 rounded-xl bg-stone-900 hover:bg-black text-white transition-all shadow-lg active:scale-95 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/50 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span className="font-bold">Export to PDF</span>
            </button>
          </div>
        </div>

        <div className="mt-8 space-y-4" ref={mapRef}>
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest">Interactive Region Map</h3>
            {mapFocus.query !== itinerary.region && (
              <button 
                onClick={resetMap}
                className="text-[10px] text-[#006233] font-bold uppercase flex items-center space-x-1 hover:underline transition-all no-print"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
                <span>Reset View</span>
              </button>
            )}
          </div>
          <MapPlaceholder query={mapFocus.query} zoom={mapFocus.zoom} />
          <p className="text-[10px] text-stone-400 italic text-center no-print">Click on landmarks below to focus the view</p>
        </div>
      </div>

      {/* Day by Day */}
      <div className="space-y-6">
        <h3 className="text-2xl font-serif font-bold px-4 text-stone-800">Journey Timeline</h3>
        <div className="grid gap-6">
          {itinerary.days.map((day) => (
            <div key={day.day} className={`bg-white rounded-2xl p-6 shadow-sm border transition-all ${mapFocus.query === day.activity.split(' ')[0] ? 'border-[#006233] ring-1 ring-[#006233]' : 'border-stone-200'} flex flex-col md:flex-row gap-6`}>
              <div className="md:w-32 flex-shrink-0">
                <div 
                  className="bg-stone-900 text-white rounded-xl p-4 text-center cursor-pointer hover:bg-black transition-colors shadow-md" 
                  onClick={() => handleFocusLocation(day.activity.split(' ')[0], 12)}
                >
                  <div className="text-xs uppercase opacity-70 mb-1 font-bold">Day</div>
                  <div className="text-3xl font-bold">{day.day}</div>
                  <div className="text-[9px] uppercase mt-2 font-bold opacity-50 no-print">Zoom Map</div>
                </div>
              </div>
              <div className="flex-grow space-y-4">
                <h4 className="text-xl font-serif font-bold text-stone-900">{day.activity}</h4>
                
                <div>
                  <h5 className="text-xs font-bold uppercase text-[#006233] tracking-widest mb-2">Must-See Experiences</h5>
                  <div className="flex flex-wrap gap-2">
                    {day.mustSee.map((spot, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => handleFocusLocation(spot, 15)}
                        className="group bg-stone-50 text-stone-700 px-4 py-2 rounded-xl text-sm border border-stone-200 hover:border-[#006233] hover:bg-[#006233]/5 transition-all flex items-center space-x-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#006233] opacity-40 group-hover:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">{spot}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => handleFocusLocation(day.accommodation.name, 16)}>
                    <div className="w-10 h-10 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-xl group-hover:bg-stone-100 transition-colors">
                      🏨
                    </div>
                    <div>
                      <div className="text-[10px] text-stone-400 uppercase font-bold tracking-tight">Accommodation</div>
                      <div className="font-semibold text-stone-800 text-sm group-hover:text-[#006233] transition-colors">{day.accommodation.name}</div>
                    </div>
                  </div>
                  <div className="text-[10px] bg-stone-100 px-3 py-1 rounded-full text-stone-500 font-bold uppercase tracking-tighter">
                    {day.accommodation.type}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="hidden print-only pt-12 border-t border-stone-200 mt-12 text-center text-stone-400 text-sm italic">
        This document is a draft itinerary curated by Ethiopian Odyssey. Actual services depend on seasonal availability.
        Visit us at ethiopianodyssey.travel for bookings and support.
      </footer>
    </div>
  );
};

export default ItineraryDisplay;
