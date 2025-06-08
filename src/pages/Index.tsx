
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, TrendingUp, Palette, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const Index = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [videoStates, setVideoStates] = useState<{ [key: number]: { muted: boolean; playing: boolean } }>({});

  useEffect(() => {
    const handleScroll = () => {
      setStickyVisible(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleVideoSound = (index: number) => {
    setVideoStates(prev => ({
      ...prev,
      [index]: {
        ...prev[index],
        muted: !prev[index]?.muted
      }
    }));
  };

  const scrollToBookCall = () => {
    document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden">
      {/* Sticky CTA */}
      <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${stickyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <Button 
          onClick={scrollToBookCall}
          className="bg-[#0027FF] hover:bg-[#0027FF]/80 text-white font-bold px-6 py-3 rounded-full shadow-xl hover:shadow-[#0027FF]/20 transition-all duration-300"
        >
          BOOK A CALL
        </Button>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0027FF]/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Sparq
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Short-form content that ignites your brand
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            We create scroll-stopping edits that drive attention, engagement, and action.
          </p>
          <Button 
            onClick={scrollToBookCall}
            className="bg-[#0027FF] hover:bg-[#0027FF]/80 text-white font-bold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-[#0027FF]/20 transition-all duration-300 hover:scale-105"
          >
            BOOK A CALL
          </Button>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#0027FF] rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-6 h-6 bg-[#00FFF7] rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
      </section>

      {/* Showreel Section */}
      <section className="py-20 px-4 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Work that speaks for itself</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our edits are built for attention. Looping, high-impact, and ready to scale your content.
            </p>
          </div>
          
          {/* Video Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div 
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveVideo(index)}
                onMouseLeave={() => setActiveVideo(null)}
              >
                <div className="aspect-[9/16] bg-gradient-to-br from-[#0027FF]/20 to-[#00FFF7]/20 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <Play size={32} className="mx-auto mb-2" />
                      <span className="text-sm">Video {index}</span>
                    </div>
                  </div>
                  
                  {/* Video Controls Overlay */}
                  <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${activeVideo === index ? 'opacity-100' : 'opacity-0'}`}>
                    <button
                      onClick={() => toggleVideoSound(index)}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-200"
                    >
                      {videoStates[index]?.muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Content built for the algorithm</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Scissors,
                title: "Reels & TikToks",
                description: "Scroll-stopping edits"
              },
              {
                icon: TrendingUp,
                title: "Strategy",
                description: "Ideas that win attention"
              },
              {
                icon: Palette,
                title: "On-brand visuals",
                description: "Styled for you"
              },
              {
                icon: TrendingUp,
                title: "Growth feedback",
                description: "What works, why it works"
              }
            ].map((service, index) => (
              <Card key={index} className="bg-[#1A1A1A] border-gray-800 p-8 hover:bg-[#1A1A1A]/80 transition-all duration-300 hover:scale-105 group">
                <service.icon className="w-12 h-12 text-[#0027FF] mb-6 group-hover:text-[#00FFF7] transition-colors duration-300" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 px-4 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-12 text-gray-400">Brands we've worked with</h3>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            {['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5'].map((brand, index) => (
              <div key={index} className="text-gray-500 font-bold text-lg hover:text-white transition-colors duration-300">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-[#1A1A1A] border-gray-800 p-12">
            <blockquote className="text-2xl md:text-3xl font-light mb-8 text-gray-300 italic">
              "Sparq transformed our content game. We finally stand out."
            </blockquote>
            <cite className="text-[#0027FF] font-semibold">— Client Name</cite>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Sparq</h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            We're not just editors — we're storytellers, strategists, and creators.
            <br />
            <span className="text-[#0027FF] font-semibold">Built by creators, for creators.</span>
          </p>
        </div>
      </section>

      {/* Book a Call Section */}
      <section id="book-call" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-[#0027FF]/20 to-[#00FFF7]/20 border-[#0027FF]/30 p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's make content that pops.</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Hit the button below to start a call — no pressure, just possibilities.
            </p>
            <Button 
              className="bg-[#0027FF] hover:bg-[#0027FF]/80 text-white font-bold px-12 py-4 text-lg rounded-full shadow-xl hover:shadow-[#0027FF]/20 transition-all duration-300 hover:scale-105"
            >
              BOOK A CALL
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#0D0D0D] text-center">
        <p className="text-gray-500">© 2024 Sparq. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
