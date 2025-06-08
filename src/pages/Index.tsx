
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, TrendingUp, Palette, Play, Pause, Volume2, VolumeX, Zap, Target, Brain, Rocket, Code, Users, Star, ArrowRight, ChevronDown, Menu, X, Package, Crown, Sparkles } from 'lucide-react';

const Index = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoStates, setVideoStates] = useState<{ [key: number]: { muted: boolean; playing: boolean } }>({});

  useEffect(() => {
    const handleScroll = () => {
      setStickyVisible(window.scrollY > 100);
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

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navigationItems = [
    { name: 'Work', id: 'showreel' },
    { name: 'Services', id: 'services' },
    { name: 'Packages', id: 'packages' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'book-call' }
  ];

  return (
    <div className="min-h-screen bg-sparq-black text-white overflow-x-hidden relative">
      {/* Futuristic Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-sparq-blue rounded-full animate-ping"></div>
        <div className="absolute top-1/4 right-20 w-1 h-1 bg-sparq-neon rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-sparq-blue/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-20 bg-gradient-to-b from-sparq-blue/20 to-transparent"></div>
        <div className="absolute bottom-20 right-10 w-20 h-1 bg-gradient-to-r from-sparq-neon/20 to-transparent"></div>
      </div>

      {/* Sticky Navigation Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${stickyVisible ? 'backdrop-blur-xl bg-sparq-black/20 border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Placeholder */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-sparq-blue to-sparq-neon rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold">Sparq</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                onClick={() => scrollToSection('book-call')}
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-medium px-6 py-2 rounded-full transition-all duration-300"
              >
                BOOK A CALL
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-sparq-black/90 backdrop-blur-xl border-b border-white/10">
              <div className="px-4 py-6 space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </button>
                ))}
                <Button 
                  onClick={() => scrollToSection('book-call')}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-medium py-2 rounded-full transition-all duration-300"
                >
                  BOOK A CALL
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-sparq-blue/10 via-transparent to-sparq-neon/10"></div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-8 h-8 border border-sparq-blue/30 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-12 h-12 border-2 border-sparq-neon/20 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-white/5 backdrop-blur-sm border border-white/10 transform rotate-45 animate-bounce"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Logo Placeholder */}
          <div className="mb-8 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl inline-block">
            <div className="w-16 h-16 bg-gradient-to-r from-sparq-blue to-sparq-neon rounded-xl flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold text-xl">LOGO</span>
            </div>
            <p className="text-xs text-gray-400">Replace with your logo</p>
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
              onClick={() => scrollToSection('book-call')}
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-bold px-8 py-4 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
            >
              BOOK A CALL
            </Button>
            <Button 
              onClick={() => scrollToSection('showreel')}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg rounded-full transition-all duration-300"
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

      {/* Showreel Section */}
      <section id="showreel" className="py-20 px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-sparq-blue/30 to-transparent"></div>
          </div>
          <div className="relative bg-sparq-black px-8">
            <Badge className="bg-white/10 backdrop-blur-sm text-sparq-blue border-white/20 mb-4">
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
              <div className="aspect-[9/16] bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-full h-full flex items-center justify-center text-gray-400 relative">
                  <div className="text-center z-10">
                    <Play size={32} className="mx-auto mb-2 text-sparq-blue" />
                    <span className="text-sm">Video {index}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-sparq-blue/5 to-sparq-neon/5"></div>
                </div>
                
                {/* Video Controls Overlay */}
                <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${activeVideo === index ? 'opacity-100' : 'opacity-0'}`}>
                  <button
                    onClick={() => toggleVideoSound(index)}
                    className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all duration-200 border border-white/20"
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
      <section id="services" className="py-20 px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-sparq-neon/30 to-transparent"></div>
          </div>
          <div className="relative bg-sparq-black px-8">
            <Badge className="bg-white/10 backdrop-blur-sm text-sparq-neon border-white/20 mb-4">
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
              description: "Scroll-stopping edits"
            },
            {
              icon: Brain,
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
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sparq-blue/5 to-sparq-neon/5 opacity-50"></div>
              <div className="relative z-10">
                <service.icon className="w-12 h-12 text-sparq-blue mb-6 group-hover:text-sparq-neon transition-colors duration-300" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-sparq-blue/30 to-transparent"></div>
          </div>
          <div className="relative bg-sparq-black px-8">
            <Badge className="bg-white/10 backdrop-blur-sm text-sparq-blue border-white/20 mb-4">
              <Package className="w-4 h-4 mr-2" />
              PACKAGES
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-sparq-neon bg-clip-text text-transparent">
              Choose your content level
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Flexible packages designed to scale with your content needs
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Starter",
              icon: Zap,
              price: "$497",
              period: "/month",
              description: "Perfect for getting started",
              features: [
                "4 short-form videos",
                "Basic editing",
                "Standard turnaround",
                "Email support"
              ],
              popular: false
            },
            {
              name: "Pro",
              icon: Crown,
              price: "$997",
              period: "/month",
              description: "Our most popular package",
              features: [
                "8 short-form videos",
                "Advanced editing",
                "Priority turnaround",
                "Strategy consultation",
                "Performance insights"
              ],
              popular: true
            },
            {
              name: "Scale",
              icon: Sparkles,
              price: "$1,997",
              period: "/month",
              description: "For serious content creators",
              features: [
                "16 short-form videos",
                "Premium editing",
                "24h turnaround",
                "Dedicated manager",
                "Custom branding",
                "Growth optimization"
              ],
              popular: false
            }
          ].map((pkg, index) => (
            <Card key={index} className={`relative p-8 transition-all duration-300 hover:scale-105 ${pkg.popular 
              ? 'bg-white/10 backdrop-blur-sm border-sparq-blue/50 ring-2 ring-sparq-blue/30' 
              : 'bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20'
            }`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-sparq-blue text-white border-sparq-blue">
                    Most Popular
                  </Badge>
                </div>
              )}
              <div className="text-center mb-8">
                <pkg.icon className="w-12 h-12 text-sparq-blue mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-400 mb-4">{pkg.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-gray-400">{pkg.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-sparq-blue rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                onClick={() => scrollToSection('book-call')}
                className={`w-full ${pkg.popular 
                  ? 'bg-sparq-blue hover:bg-sparq-blue/80 text-white' 
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white'
                } font-medium py-3 rounded-full transition-all duration-300`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sparq-blue/5 via-transparent to-sparq-neon/5"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <Badge className="bg-white/10 backdrop-blur-sm text-sparq-blue border-white/20 mb-8">
            <Users className="w-4 h-4 mr-2" />
            TRUSTED BY
          </Badge>
          <h3 className="text-2xl font-bold mb-12 text-gray-400">Brands we've worked with</h3>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            {['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5'].map((brand, index) => (
              <div key={index} className="text-gray-500 font-bold text-lg hover:text-sparq-blue transition-colors duration-300 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-lg">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-sparq-blue/30 to-transparent"></div>
          </div>
          <div className="relative bg-sparq-black px-8">
            <Badge className="bg-white/10 backdrop-blur-sm text-sparq-blue border-white/20 mb-4">
              <Star className="w-4 h-4 mr-2" />
              TESTIMONIALS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-sparq-neon bg-clip-text text-transparent">
              What our clients say
            </h2>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sparq-blue/5 to-sparq-neon/5"></div>
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
      <section id="about" className="py-20 px-4 relative overflow-hidden">
        {/* Futuristic geometric background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 transform rotate-12"></div>
          <div className="absolute bottom-1/3 right-1/3 w-20 h-1 bg-gradient-to-r from-sparq-blue/20 to-transparent"></div>
          <div className="absolute top-1/4 right-1/4 w-1 h-32 bg-gradient-to-b from-sparq-neon/20 to-transparent"></div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16 relative z-10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-sparq-neon/30 to-transparent"></div>
          </div>
          <div className="relative bg-sparq-black px-8">
            <Badge className="bg-white/10 backdrop-blur-sm text-sparq-neon border-white/20 mb-4">
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
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"></div>
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"></div>
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"></div>
                </div>
                <span className="text-sparq-blue font-semibold">Built by creators, for creators.</span>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-64 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sparq-blue/10 to-sparq-neon/10"></div>
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
                <div className="absolute top-4 right-4 w-3 h-3 bg-sparq-neon rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-sparq-blue rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section id="book-call" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sparq-blue/5 via-transparent to-sparq-neon/5"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sparq-blue/5 to-sparq-neon/5"></div>
            <div className="relative z-10">
              <Zap className="w-12 h-12 text-sparq-blue mx-auto mb-6 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-sparq-neon bg-clip-text text-transparent">
                Let's make content that pops.
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Hit the button below to start a call — no pressure, just possibilities.
              </p>
              <Button 
                className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white font-bold px-12 py-4 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
              >
                BOOK A CALL
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-sparq-black text-center border-t border-white/10">
        <p className="text-gray-500">© 2024 Sparq. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
