
import React from 'react';

interface MapPlaceholderProps {
  region: string;
}

const MapPlaceholder: React.FC<MapPlaceholderProps> = ({ region }) => {
  // We use the Google Maps search embed format which is highly reliable for regions and places.
  // We encode the query to target the specific region in Ethiopia.
  const encodedRegion = encodeURIComponent(`${region}, Ethiopia`);
  const embedUrl = `https://maps.google.com/maps?q=${encodedRegion}&t=&z=7&ie=UTF8&iwloc=&output=embed`;
  
  return (
    <div className="w-full bg-stone-100 rounded-2xl overflow-hidden border border-stone-200 shadow-inner group relative" style={{ height: '400px' }}>
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={embedUrl}
        title={`Map of ${region}`}
      ></iframe>
      
      {/* High-end decorative overlay */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm border border-stone-200 flex items-center space-x-2">
          <div className="w-2 h-2 bg-[#006233] rounded-full animate-pulse"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-700">Live Satellite Context</span>
        </div>
      </div>
      
      {/* Attribution/Helpful UI */}
      <div className="absolute bottom-4 right-4 z-10 no-print">
        <div className="bg-stone-900/80 backdrop-blur-sm text-white text-[9px] px-3 py-1 rounded-full uppercase tracking-tighter">
          Interactive Terrain View
        </div>
      </div>
    </div>
  );
};

export default MapPlaceholder;
