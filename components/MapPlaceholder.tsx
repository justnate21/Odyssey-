
// Standard React import to resolve JSX namespace resolution issues
import React from 'react';

interface MapPlaceholderProps {
  query: string;
  zoom?: number;
}

const MapPlaceholder: React.FC<MapPlaceholderProps> = ({ query, zoom = 7 }) => {
  const [loading, setLoading] = React.useState(true);

  // Use the free Google Maps search embed
  const encodedQuery = encodeURIComponent(`${query}, Ethiopia`);
  const embedUrl = `https://maps.google.com/maps?q=${encodedQuery}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

  React.useEffect(() => {
    setLoading(true);
  }, [query, zoom]);

  return (
    <div className="w-full bg-stone-100 rounded-2xl overflow-hidden border border-stone-200 shadow-inner group relative" style={{ height: '450px' }}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-stone-50 z-20">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border-4 border-stone-200 border-t-[#006233] rounded-full animate-spin mb-4"></div>
            <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Recalibrating View...</p>
          </div>
        </div>
      )}
      
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        onLoad={() => setLoading(false)}
        referrerPolicy="no-referrer-when-downgrade"
        src={embedUrl}
        title={`Map of ${query}`}
      ></iframe>
      
      {/* High-end decorative overlay */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none no-print">
        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm border border-stone-200 flex items-center space-x-2">
          <div className="w-2 h-2 bg-[#006233] rounded-full animate-pulse"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-700">Focus: {query}</span>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-4 z-10 no-print">
        <div className="bg-stone-900/80 backdrop-blur-sm text-white text-[9px] px-3 py-1 rounded-full uppercase tracking-tighter flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#F9D616]" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span>Live Coordinate Integration</span>
        </div>
      </div>
    </div>
  );
};

export default MapPlaceholder;
