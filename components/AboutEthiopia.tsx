
// Standard React import to resolve JSX namespace resolution issues
import React from 'react';

/**
 * AUTHENTIC ETHIOPIAN PHOTOGRAPHY:
 * High-fidelity curated links provided by the user.
 */
const USER_LALIBELA_URL = "https://i.postimg.cc/Vv9CMmYL/lalibela.jpg";
const USER_SIMIEN_URL = "https://i.postimg.cc/zXRQsQx8/Simien_Mountains.jpg";
const USER_DANAKIL_URL = "https://i.postimg.cc/jdmD5D67/Danakil_Depression.jpg";
const USER_HARAR_URL = "https://i.postimg.cc/sgz4XH4P/harar.png";
const USER_LAKE_TANA_URL = "https://i.postimg.cc/BQXdpbW9/Lake_Tana.jpg";
const USER_OMO_VALLEY_URL = "https://i.postimg.cc/nL0yTDh2/Omo_Valley.jpg";

const AboutEthiopia: React.FC = () => {
  const destinations = [
    {
      name: "Lalibela",
      type: "The New Jerusalem",
      desc: "Bete Giyorgis (Church of St. George), the most famous of the eleven medieval monolithic churches, carved from a single block of volcanic tuff.",
      img: USER_LALIBELA_URL
    },
    {
      name: "Simien Mountains",
      type: "Nature's Cathedral",
      desc: "A UNESCO site featuring jagged peaks and deep valleys. Home to the endemic Gelada baboon and Walia ibex.",
      img: USER_SIMIEN_URL
    },
    {
      name: "Danakil Depression",
      type: "Dallol Sulfur Springs",
      desc: "The lowest and hottest point on Earth. A kaleidoscopic landscape of acid ponds and sulfur springs in the Afar region.",
      img: USER_DANAKIL_URL
    },
    {
      name: "Harar",
      type: "The Fourth Holy City",
      desc: "An ancient walled city of narrow colorful alleys and 82 mosques. Known for its distinct culture and 'Hyena Men'.",
      img: USER_HARAR_URL
    },
    {
      name: "Lake Tana",
      type: "Source of the Blue Nile",
      desc: "Ethiopia's largest lake, famous for its hidden island monasteries and ancient papyrus tankwa boats.",
      img: USER_LAKE_TANA_URL
    },
    {
      name: "The Omo Valley",
      type: "Cultural Heritage",
      desc: "Home to dozens of distinct ethnic groups like the Mursi and Hamer, each with ancient traditions and body art.",
      img: USER_OMO_VALLEY_URL
    }
  ];

  const historyEras = [
    {
      period: "3.2 Million Years Ago",
      title: "The Dawn of Man",
      content: "The discovery of 'Lucy' (Dinknesh) in the Afar region cemented Ethiopia as the birthplace of our species."
    },
    {
      period: "1st - 7th Century AD",
      title: "The Aksumite Empire",
      content: "A powerful trading empire and the home of the Ark of the Covenant, according to Ethiopian tradition."
    },
    {
      period: "12th - 13th Century",
      title: "The Zagwe Dynasty",
      content: "The era of King Lalibela, who commissioned the rock-hewn churches to create a pilgrimage site in the mountains."
    },
    {
      period: "1896",
      title: "Victory at Adwa",
      content: "Ethiopia's historic defeat of the Italian army, ensuring its status as Africa's only uncolonized nation."
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero - Featuring user-provided Bete Giyorgis shot */}
      <section className="relative h-[85vh] flex items-end justify-center overflow-hidden pb-20">
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/50 z-10"></div>
        <img 
          src={USER_LALIBELA_URL} 
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 animate-pulse-slow" 
          alt="Bete Giyorgis, Lalibela - The House of Saint George"
          style={{ animationDuration: '45s' }}
        />
        <div className="relative z-20 text-center px-4 max-w-5xl">
          <div className="flex items-center justify-center space-x-4 mb-8 fade-up">
            <div className="h-[1px] w-20 bg-[#F9D616]"></div>
            <span className="text-[#F9D616] font-bold uppercase tracking-[0.8em] text-[10px]">Land of Origins</span>
            <div className="h-[1px] w-20 bg-[#F9D616]"></div>
          </div>
          <h2 className="text-8xl md:text-[11rem] font-serif font-bold text-white mb-8 drop-shadow-2xl fade-up leading-[0.85]" style={{ animationDelay: '0.2s' }}>
            ETHIOPIA <br/><span className="italic font-light tracking-tight opacity-90 text-[0.8em]">Odyssey</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light max-w-3xl mx-auto mb-12 drop-shadow-lg fade-up" style={{ animationDelay: '0.4s' }}>
            Explore the monolithic spirit of Lalibela and the kaleidoscope of the Omo. Experience a culture that has remained unbroken for millennia.
          </p>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-[#006233] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block tracking-widest">Chronicles</span>
          <h3 className="text-5xl font-serif font-bold text-stone-900 mb-6 tracking-tight">The Cradle of Civilization</h3>
          <div className="w-32 h-1 bg-[#006233] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {historyEras.map((era, idx) => (
            <div key={idx} className="relative group p-10 bg-white rounded-[2.5rem] border border-stone-100 shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-3">
              <div className="absolute -top-6 left-10 bg-[#006233] text-white px-5 py-2.5 rounded-xl text-xs font-bold tracking-widest shadow-xl">
                {era.period}
              </div>
              <h4 className="text-2xl font-bold mt-6 mb-6 text-stone-900 tracking-tight">{era.title}</h4>
              <p className="text-stone-500 text-sm leading-relaxed font-medium">{era.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visiting Places Grid */}
      <section className="bg-stone-950 py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div className="max-w-2xl">
              <span className="text-[#F9D616] font-bold uppercase tracking-[0.4em] text-[10px] block mb-4">The Circuit</span>
              <h3 className="text-6xl font-serif font-bold text-white mb-8 leading-tight italic">Essential <br/>Odysseys</h3>
              <p className="text-stone-400 text-xl leading-relaxed font-light">
                From the subterranean wonders of the Lasta Mountains to the vibrant gates of Harar Jugol.
              </p>
            </div>
            <div className="mt-12 md:mt-0 flex space-x-1 mb-2">
              <div className="w-20 h-1 bg-[#EF3340]"></div>
              <div className="w-20 h-1 bg-[#F9D616]"></div>
              <div className="w-20 h-1 bg-[#006233]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {destinations.map((dest, idx) => (
              <div key={idx} className="group relative rounded-[3rem] overflow-hidden aspect-[3/4] shadow-2xl">
                <img 
                  src={dest.img} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2500ms] group-hover:scale-110" 
                  alt={dest.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 w-full translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                  <span className="text-[#F9D616] text-xs font-bold uppercase tracking-[0.4em] mb-3 block opacity-90">{dest.type}</span>
                  <h4 className="text-4xl font-serif font-bold text-white mb-6 leading-none">{dest.name}</h4>
                  <p className="text-white/70 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    {dest.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Focus */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-6 border border-stone-200 rounded-[5rem] -z-10 translate-x-6 translate-y-6 transition-transform duration-1000 group-hover:translate-x-4 group-hover:translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1544333323-58739b8a82de?q=80&w=1200&auto=format&fit=crop" 
                className="rounded-[4.5rem] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-[1500ms]"
                alt="Ethiopian Coffee Ceremony Preparation"
              />
              <div className="absolute top-10 -right-10 bg-white p-6 rounded-3xl shadow-xl border border-stone-100 hidden md:block animate-bounce-slow">
                <span className="text-4xl block mb-2">☕</span>
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Habesha Spirit</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-10">
            <h3 className="text-6xl font-serif font-bold text-stone-900 leading-[1.1]">The Soul of <br/><span className="text-[#006233] italic tracking-tight">Buna</span></h3>
            <p className="text-stone-600 text-xl leading-relaxed font-light">
              Ethiopia is the birthplace of the coffee bean. In every village, the ceremony is a sacred social contract, a ritual of patience and profound connection.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
              <div className="border-l-4 border-[#F9D616] pl-6 py-2">
                <h5 className="font-bold text-xl text-stone-900 mb-3 tracking-tight">Gourmet Heritage</h5>
                <p className="text-stone-500 text-sm leading-relaxed italic">Injera and spicy Wot—a communal feast that defines the Habesha table.</p>
              </div>
              <div className="border-l-4 border-[#EF3340] pl-6 py-2">
                <h5 className="font-bold text-xl text-stone-900 mb-3 tracking-tight">Living Script</h5>
                <p className="text-stone-500 text-sm leading-relaxed italic">Ge'ez: The visual heartbeat of Ethiopian liturgy and historic archives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back CTA */}
      <section className="py-40 bg-stone-50 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-[30rem] font-serif pointer-events-none select-none">
          Cradle
        </div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h3 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-12 tracking-tight">Your odyssey to the source of humanity.</h3>
          <button 
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
            className="inline-block bg-stone-950 text-white px-16 py-6 rounded-full font-bold text-lg shadow-2xl shadow-stone-900/40 hover:-translate-y-2 hover:shadow-stone-900/60 transition-all duration-500"
          >
            Start Your Planner
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutEthiopia;
