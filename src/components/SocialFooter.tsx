import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Zap } from 'lucide-react';
const SocialFooter = () => {
  return <footer className="py-20 px-4 bg-gradient-to-t from-sparq-gray/30 to-sparq-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-sparq-blue/5 to-sparq-neon/5"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Contact Section */}
        <div className="text-center mb-16">
          <Badge className="bg-white/10 backdrop-blur-sm text-sparq-neon border-white/20 mb-4">
            <Mail className="w-4 h-4 mr-2" />
            GET IN TOUCH
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-sparq-blue bg-clip-text text-transparent">
            Ready to ignite your content?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Let's create scroll-stopping content that drives real results for your brand.
          </p>
          <Button className="bg-gradient-to-r from-sparq-blue to-sparq-neon hover:from-sparq-blue/80 hover:to-sparq-neon/80 text-white font-bold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-sparq-blue/50 transition-all duration-300">
            <Phone className="w-5 h-5 mr-2" />
            Start Your Project
          </Button>
        </div>

        {/* Contact Info & Social Media */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 text-center">
            <Mail className="w-8 h-8 text-sparq-blue mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2 text-slate-50">Email Us</h3>
            <p className="text-gray-400">hello@sparqcontent.com</p>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 text-center">
            <Phone className="w-8 h-8 text-sparq-neon mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2 text-slate-50">Call Us</h3>
            <p className="text-gray-400">+1 (555) 123-SPARQ</p>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 text-center">
            <MapPin className="w-8 h-8 text-sparq-blue mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2 text-slate-50">Location</h3>
            <p className="text-gray-400">Los Angeles, CA</p>
          </Card>
        </div>

        {/* Social Media Links */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-300">Follow Our Work</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://instagram.com/sparqcontent" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center hover:bg-sparq-blue/20 hover:border-sparq-blue/30 transition-all duration-300 group">
              <span className="text-gray-400 group-hover:text-sparq-blue text-lg font-bold">IG</span>
            </a>
            <a href="https://twitter.com/sparqcontent" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center hover:bg-sparq-neon/20 hover:border-sparq-neon/30 transition-all duration-300 group">
              <span className="text-gray-400 group-hover:text-sparq-neon text-lg font-bold">TW</span>
            </a>
            <a href="https://linkedin.com/company/sparqcontent" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center hover:bg-sparq-blue/20 hover:border-sparq-blue/30 transition-all duration-300 group">
              <span className="text-gray-400 group-hover:text-sparq-blue text-lg font-bold">LI</span>
            </a>
            <a href="https://youtube.com/@sparqcontent" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center hover:bg-sparq-neon/20 hover:border-sparq-neon/30 transition-all duration-300 group">
              <span className="text-gray-400 group-hover:text-sparq-neon text-lg font-bold">YT</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-sparq-blue to-sparq-neon rounded-lg flex items-center justify-center mr-3">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Sparq</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 Sparq Content. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default SocialFooter;