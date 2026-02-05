
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
const USER_COFFEE_URL = "https://i.postimg.cc/C1FSXHjb/ethiopia-coffee.jpg";

const AboutEthiopia: React.FC = () => {
  const destinations = [
    {
      name: "Lalibela",
      type: "The New Jerusalem",
      desc: "Home to eleven medieval monolithic churches carved from volcanic tuff, including the world-renowned Bete Giyorgis.",
      img: USER_LALIBELA_URL
    },
    {
      name: "Simien Mountains",
      type: "Nature's Cathedral",
      desc: "A breathtaking UNESCO site with jagged peaks and deep valleys, home to the endemic Gelada baboon and Walia ibex.",
      img: USER_SIMIEN_URL
    },
    {
      name: "Danakil Depression",
      type: "Dallol Sulfur Springs",
      desc: "One of the lowest and hottest places on Earth, featuring a kaleidoscopic landscape of sulfur springs and acid ponds.",
      img: USER_DANAKIL_URL
    },
    {
      name: "Harar",
      type: "The Fourth Holy City",
      desc: "An ancient walled city of 82 mosques and narrow alleys, famous for its distinct Islamic heritage and 'Hyena Men'.",
      img: USER_HARAR_URL
    },
    {
      name: "Lake Tana",
      type: "Source of the Blue Nile",
      desc: "Ethiopia's largest lake, dotted with ancient island monasteries housing centuries-old Christian treasures.",
      img: USER_LAKE_TANA_URL
    },
    {
      name: "The Omo Valley",
      type: "Cultural Heritage",
      desc: "A living museum of diverse ethnic groups, each maintaining ancient traditions, body art, and vibrant social structures.",
      img: USER_OMO_VALLEY_URL
    }
  ];

  const historyEras = [
    {
      period: "3.2 Million Years ago",
      title: "The Birthplace",
      content: "The discovery of 'Lucy' (Dinknesh) in the Afar region cemented Ethiopia's status as the cradle of the human species."
    },
    {
      period: "1st - 7th Century AD",
      title: "Aksumite Empire",
      content: "A global trade power that rivaled Rome and Persia, and the legendary resting place of the Ark of the Covenant."
    },
    {
      period: "12th - 13th Century",
      title: "The Zagwe Era",
      content: "The golden age of King Lalibela, who realized a vision of a 'New Jerusalem' through monolithic mountain architecture."
    },
    {
      period: "1896",
      title: "Victory at Adwa",
      content: "Ethiopia's historic defeat of the Italian army, preserving its sovereignty as Africa's only uncolonized nation."
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen text-stone-800">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 z-10"></div>
        <img 
          src={USER_LALIBELA_URL} 
          className="absolute inset-0 w-full h-full object-cover object-center animate-pulse-slow" 
          alt="Bete Giyorgis, Lalibela"
          style={{ animationDuration: '30s' }}
        />
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <div className="flex items-center justify-center space-x-3 mb-8 fade-up">
            <div className="h-px w-12 bg-[#F9D616]/60"></div>
            <span className="text-[#F9D616] font-bold uppercase tracking-[0.6em] text-[11px]">Land of Origins</span>
            <div className="h-px w-12 bg-[#F9D616]/60"></div>
          </div>
          <h2 className="text-7xl md:text-[8.5rem] font-serif font-bold text-white mb-6 tracking-tighter fade-up leading-[0.85]" style={{ animationDelay: '0.1s' }}>
            ETHIOPIA <br/><span className="italic font-light opacity-90 text-[0.8em]">Odyssey</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light max-w-2xl mx-auto drop-shadow-lg fade-up" style={{ animationDelay: '0.3s' }}>
            A journey through three millennia of civilization. From the subterranean monolithic spirit of Lalibela to the vibrant kaleidoscope of the Omo.
          </p>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-[#006233] font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block">Timeline</span>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">The Cradle of Civilization</h3>
          <div className="w-20 h-1 bg-[#006233] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {historyEras.map((era, idx) => (
            <div key={idx} className="relative group p-8 bg-white rounded-[2rem] border border-stone-200/60 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-[#006233] font-bold text-xs tracking-widest uppercase mb-4 opacity-70">
                {era.period}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-stone-900">{era.title}</h4>
              <p className="text-stone-600 text-sm leading-relaxed">{era.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Essential Destinations Grid */}
      <section className="bg-stone-950 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 border-b border-white/10 pb-12">
            <div className="max-w-2xl">
              <span className="text-[#F9D616] font-bold uppercase tracking-[0.3em] text-[10px] block mb-4">The Circuit</span>
              <h3 className="text-5xl font-serif font-bold text-white mb-6">Essential Odysseys</h3>
              <p className="text-stone-400 text-lg leading-relaxed font-light">
                Discover the subterranean wonders of the Lasta Mountains and the vibrant medieval gates of Harar.
              </p>
            </div>
            <div className="mt-8 md:mt-0 flex space-x-1">
              <div className="w-12 h-0.5 bg-[#EF3340]"></div>
              <div className="w-12 h-0.5 bg-[#F9D616]"></div>
              <div className="w-12 h-0.5 bg-[#006233]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {destinations.map((dest, idx) => (
              <div key={idx} className="group relative rounded-[2.5rem] overflow-hidden aspect-[3/4] shadow-2xl">
                <img 
                  src={dest.img} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
                  alt={dest.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-[#F9D616] text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block">{dest.type}</span>
                  <h4 className="text-3xl font-serif font-bold text-white mb-4 leading-tight">{dest.name}</h4>
                  <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {dest.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Focus Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 border border-stone-200 rounded-[3.5rem] -z-10 translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <img 
                src={USER_COFFEE_URL} 
                className="rounded-[3rem] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000 w-full h-auto object-cover aspect-square md:aspect-[4/3]"
                alt="Ethiopian Coffee Ceremony"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-5xl font-serif font-bold text-stone-900 leading-tight mb-8">
              The Soul of <span className="text-[#006233] italic">Buna</span>
            </h3>
            <p className="text-stone-700 text-lg leading-relaxed font-light mb-10 max-w-xl">
              As the birthplace of the coffee bean, the Ethiopian coffee ceremony is more than a beverage—it's a sacred ritual of hospitality and community that has remained unchanged for generations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="border-l-2 border-[#F9D616] pl-6">
                <h5 className="font-bold text-stone-900 mb-2">Culinary Heritage</h5>
                <p className="text-stone-600 text-sm leading-relaxed">The communal art of Injera and Wot defines the Habesha table.</p>
              </div>
              <div className="border-l-2 border-[#EF3340] pl-6">
                <h5 className="font-bold text-stone-900 mb-2">Living Ge'ez</h5>
                <p className="text-stone-600 text-sm leading-relaxed">One of the world's oldest scripts, still breathing through sacred liturgy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-stone-50 border-t border-stone-200 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-10">Start your odyssey today.</h3>
          <button 
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
            className="inline-block bg-stone-950 text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:bg-black hover:-translate-y-1 transition-all duration-300"
          >
            Design Your Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutEthiopia;
