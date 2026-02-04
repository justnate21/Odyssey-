
import React from 'react';
import { Itinerary } from '../types';
import MapPlaceholder from './MapPlaceholder';

interface ItineraryDisplayProps {
  itinerary: Itinerary;
  onPrint: () => void;
}

const ItineraryDisplay: React.FC<ItineraryDisplayProps> = ({ itinerary, onPrint }) => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Info */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
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
              onClick={onPrint}
              className="mt-4 no-print flex items-center space-x-2 px-4 py-2 rounded-lg border border-stone-300 hover:bg-stone-50 transition-colors text-stone-600 font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span>Export to PDF</span>
            </button>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest">Interactive Region Map</h3>
            <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold uppercase">Live Integration</span>
          </div>
          <MapPlaceholder region={itinerary.region} />
        </div>
      </div>

      {/* Day by Day */}
      <div className="space-y-6">
        <h3 className="text-2xl font-serif font-bold px-4 text-stone-800">Journey Timeline</h3>
        <div className="grid gap-6">
          {itinerary.days.map((day) => (
            <div key={day.day} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 flex flex-col md:flex-row gap-6">
              <div className="md:w-32 flex-shrink-0">
                <div className="bg-stone-900 text-white rounded-xl p-4 text-center">
                  <div className="text-xs uppercase opacity-70 mb-1 font-bold">Day</div>
                  <div className="text-3xl font-bold">{day.day}</div>
                </div>
              </div>
              <div className="flex-grow space-y-4">
                <h4 className="text-xl font-serif font-bold text-stone-900">{day.activity}</h4>
                
                <div>
                  <h5 className="text-xs font-bold uppercase text-[#006233] tracking-widest mb-2">Must-See Experiences</h5>
                  <div className="flex flex-wrap gap-2">
                    {day.mustSee.map((spot, idx) => (
                      <span key={idx} className="bg-stone-50 text-stone-700 px-3 py-1 rounded-full text-sm border border-stone-200">
                        {spot}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-xl">
                      🏠
                    </div>
                    <div>
                      <div className="text-[10px] text-stone-400 uppercase font-bold tracking-tight">Accommodation</div>
                      <div className="font-semibold text-stone-800 text-sm">{day.accommodation.name}</div>
                    </div>
                  </div>
                  <div className="text-[10px] bg-stone-100 px-2 py-1 rounded text-stone-500 font-bold uppercase tracking-tighter">
                    {day.accommodation.type}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="print-only hidden pt-12 border-t border-stone-200 mt-12 text-center text-stone-400 text-sm">
        Generated by Ethiopian Odyssey Bespoke Travel Planner • Contact: hello@ethiopianodyssey.travel
      </footer>
    </div>
  );
};

export default ItineraryDisplay;
