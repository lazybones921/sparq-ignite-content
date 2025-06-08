
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, TrendingUp, Palette, Play, Pause, Volume2, VolumeX, Zap, Target, Brain, Rocket, Code, Users, Star, ArrowRight, ChevronDown } from 'lucide-react';

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

  const scrollToShowreel = () => {
    document.getElementById('showreel')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden relative">
      {/* Futuristic Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-sparq-blue rounded-full animate-ping"></div>
        <div className="absolute top-1/4 right-20 w-1 h-1 bg-sparq-neon rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-sparq-blue/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-20 bg-gradient-to-b from-sparq-blue/20 to-transparent"></div>
        <div className="absolute bottom-20 right-10 w-20 h-1 bg-gradient-to-r from-sparq-neon/20 to-transparent"></div>
      </div>

      {/* Sticky CTA */}
      <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${stickyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <Button 
          onClick={scrollToBookCall}
          className="bg-gradient-to-r from-sparq-blue to-sparq-neon hover:from-sparq-blue/80 hover:to-sparq-neon/80 text-white font-bold px-6 py-3 rounded-full shadow-xl hover:shadow-sparq-blue/30 transition-all duration-300 sparq-glow"
        >
          BOOK A CALL
        </Button>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        {/* Futuristic Grid Background */}
        <div className="absolute inset-0 futuristic-grid opacity-20"></div>
        <div className="absolute inset-0 sparq-gradient opacity-10"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-8 h-8 border border-sparq-blue/30 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-12 h-12 border-2 border-sparq-neon/20 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-gradient-to-br from-sparq-blue/20 to-sparq-neon/20 transform rotate-45 animate-bounce"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-8">
            <Zap className="w-16 h-16 text-sparq-blue mx-auto mb-4 animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-sparq-neon to-sparq-blue bg-clip-text text-transparent animate-fade-in">
            Sparq
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light animate-fade-in">
            Short-form content that ignites your brand
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            We create scroll-stopping edits that drive attention, engagement, and action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              onClick={scrollToBookCall}
              className="bg-gradient-to-r from-sparq-blue to-sparq-neon hover:from-sparq-blue/80 hover:to-sparq-neon/80 text-white font-bold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-sparq-blue/30 transition-all duration-300 hover:scale-105 sparq-glow"
            >
              BOOK A CALL
            </Button>
            <Button 
              onClick={scrollToShowreel}
              variant="outline"
              className="border-sparq-blue/50 text-sparq-blue hover:bg-sparq-blue/10 px-8 py-4 text-lg rounded-full transition-all duration-300"
            >
              VIEW WORK <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-sparq-blue" />
        </div>
      </section>

      {/* Section Header Component */}
      <div className="relative">
        {/* Showreel Section */}
        <section id="showreel" className="py-20 px-4 bg-gradient-to-b from-sparq-gray/50 to-sparq-black relative">
          {/* Section Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-sparq-blue/30 to-transparent"></div>
            </div>
            <div className="relative bg-sparq-black px-8">
              <Badge className="bg-sparq-blue/20 text-sparq-blue border-sparq-blue/30 mb-4">
                <Play className="w-4 h-4 mr-2" />
                PORTFOLIO
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-sparq-neon bg-clip-text text-transparent">
                Work that speaks for itself
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our edits are built for attention. Looping, high-impact, and ready to scale your content.
              </p>
            </div>
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
                <div className="aspect-[9/16] bg-gradient-to-br from-sparq-blue/20 via-sparq-gray/40 to-sparq-neon/20 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-sparq-blue/20">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 relative">
                    <div className="text-center z-10">
                      <Play size={32} className="mx-auto mb-2 text-sparq-blue" />
                      <span className="text-sm">Video {index}</span>
                    </div>
                    {/* Futuristic overlay pattern */}
                    <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3C/g%3E%3C/svg%3E\")" }}></div>
                  </div>
                  
                  {/* Video Controls Overlay */}
                  <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${activeVideo === index ? 'opacity-100' : 'opacity-0'}`}>
                    <button
                      onClick={() => toggleVideoSound(index)}
                      className="bg-sparq-blue/20 backdrop-blur-sm rounded-full p-3 hover:bg-sparq-blue/30 transition-all duration-200 border border-sparq-blue/30"
                    >
                      {videoStates[index]?.muted ? <VolumeX size={20} className="text-sparq-neon" /> : <Volume2 size={20} className="text-sparq-neon" />}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 px-4 relative">
          {/* Futuristic background elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-sparq-blue/5 via-transparent to-sparq-neon/5"></div>
          
          {/* Section Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-sparq-neon/30 to-transparent"></div>
            </div>
            <div className="relative bg-sparq-black px-8">
              <Badge className="bg-sparq-neon/20 text-sparq-neon border-sparq-neon/30 mb-4">
                <Target className="w-4 h-4 mr-2" />
                SERVICES
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-sparq-blue bg-clip-text text-transparent">
                Content built for the algorithm
              </h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Scissors,
                title: "Reels & TikToks",
                description: "Scroll-stopping edits",
                gradient: "from-sparq-blue/20 to-sparq-neon/10"
              },
              {
                icon: Brain,
                title: "Strategy",
                description: "Ideas that win attention",
                gradient: "from-sparq-neon/20 to-sparq-blue/10"
              },
              {
                icon: Palette,
                title: "On-brand visuals",
                description: "Styled for you",
                gradient: "from-sparq-blue/15 to-sparq-gray/20"
              },
              {
                icon: TrendingUp,
                title: "Growth feedback",
                description: "What works, why it works",
                gradient: "from-sparq-neon/15 to-sparq-blue/20"
              }
            ].map((service, index) => (
              <Card key={index} className={`bg-gradient-to-br ${service.gradient} border-sparq-blue/20 p-8 hover:border-sparq-blue/40 transition-all duration-300 hover:scale-105 group relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M20 20l20-20v40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
                <div className="relative z-10">
                  <service.icon className="w-12 h-12 text-sparq-blue mb-6 group-hover:text-sparq-neon transition-colors duration-300" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-sparq-gray/30 via-sparq-black to-sparq-gray/30 relative">
          <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.01'%3E%3Cpath d='M50 50l50-50v100z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <Badge className="bg-sparq-blue/10 text-sparq-blue border-sparq-blue/20 mb-8">
              <Users className="w-4 h-4 mr-2" />
              TRUSTED BY
            </Badge>
            <h3 className="text-2xl font-bold mb-12 text-gray-400">Brands we've worked with</h3>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              {['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5'].map((brand, index) => (
                <div key={index} className="text-gray-500 font-bold text-lg hover:text-sparq-blue transition-colors duration-300 border border-sparq-blue/10 px-4 py-2 rounded-lg">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sparq-blue/5 to-transparent"></div>
          
          {/* Section Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-sparq-blue/30 to-transparent"></div>
            </div>
            <div className="relative bg-sparq-black px-8">
              <Badge className="bg-sparq-blue/20 text-sparq-blue border-sparq-blue/30 mb-4">
                <Star className="w-4 h-4 mr-2" />
                TESTIMONIALS
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-sparq-neon bg-clip-text text-transparent">
                What our clients say
              </h2>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-br from-sparq-gray/40 to-sparq-blue/10 border-sparq-blue/20 p-12 relative overflow-hidden">
              <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
              <div className="relative z-10">
                <blockquote className="text-2xl md:text-3xl font-light mb-8 text-gray-300 italic">
                  "Sparq transformed our content game. We finally stand out."
                </blockquote>
                <cite className="text-sparq-blue font-semibold">— Client Name</cite>
              </div>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-sparq-gray/20 via-sparq-black to-sparq-blue/10 relative overflow-hidden">
          {/* Futuristic geometric background */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 border border-sparq-blue/10 rotate-45"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-sparq-neon/10 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-sparq-blue/5 to-sparq-neon/5 transform rotate-12"></div>
            <div className="absolute bottom-1/3 right-1/3 w-20 h-1 bg-gradient-to-r from-sparq-blue/20 to-transparent"></div>
            <div className="absolute top-1/4 right-1/4 w-1 h-32 bg-gradient-to-b from-sparq-neon/20 to-transparent"></div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-16 relative z-10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-sparq-neon/30 to-transparent"></div>
            </div>
            <div className="relative bg-sparq-black px-8">
              <Badge className="bg-sparq-neon/20 text-sparq-neon border-sparq-neon/30 mb-4">
                <Rocket className="w-4 h-4 mr-2" />
                ABOUT
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-sparq-blue bg-clip-text text-transparent">
                About Sparq
              </h2>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  We're not just editors — we're storytellers, strategists, and creators.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  Our team combines creative vision with data-driven strategy to produce content that doesn't just look good — it performs.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-sparq-blue to-sparq-neon rounded-full border-2 border-sparq-black"></div>
                    <div className="w-10 h-10 bg-gradient-to-br from-sparq-neon to-sparq-blue rounded-full border-2 border-sparq-black"></div>
                    <div className="w-10 h-10 bg-gradient-to-br from-sparq-blue/80 to-sparq-neon/80 rounded-full border-2 border-sparq-black"></div>
                  </div>
                  <span className="text-sparq-blue font-semibold">Built by creators, for creators.</span>
                </div>
              </div>
              <div className="relative">
                {/* Abstract creative visualization */}
                <div className="relative w-full h-64 bg-gradient-to-br from-sparq-blue/20 to-sparq-neon/20 rounded-2xl overflow-hidden border border-sparq-blue/20">
                  <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20l20-20v40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Code className="w-16 h-16 text-sparq-blue mx-auto mb-4 animate-pulse" />
                      <div className="space-y-2">
                        <div className="w-24 h-2 bg-sparq-blue/40 rounded mx-auto"></div>
                        <div className="w-16 h-2 bg-sparq-neon/40 rounded mx-auto"></div>
                        <div className="w-20 h-2 bg-sparq-blue/30 rounded mx-auto"></div>
                      </div>
                    </div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-sparq-neon rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-sparq-blue rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book a Call Section */}
        <section id="book-call" className="py-20 px-4 relative">
          <div className="absolute inset-0 sparq-gradient opacity-20"></div>
          <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M50 50l50-50v100z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Card className="bg-gradient-to-br from-sparq-blue/20 via-sparq-gray/40 to-sparq-neon/20 border-sparq-blue/30 p-12 relative overflow-hidden sparq-glow">
              <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
              <div className="relative z-10">
                <Zap className="w-12 h-12 text-sparq-blue mx-auto mb-6 animate-pulse" />
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-sparq-neon bg-clip-text text-transparent">
                  Let's make content that pops.
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                  Hit the button below to start a call — no pressure, just possibilities.
                </p>
                <Button 
                  className="bg-gradient-to-r from-sparq-blue to-sparq-neon hover:from-sparq-blue/80 hover:to-sparq-neon/80 text-white font-bold px-12 py-4 text-lg rounded-full shadow-xl hover:shadow-sparq-blue/30 transition-all duration-300 hover:scale-105 sparq-glow"
                >
                  BOOK A CALL
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 bg-sparq-black text-center border-t border-sparq-blue/10">
          <p className="text-gray-500">© 2024 Sparq. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
