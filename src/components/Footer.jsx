import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Music, ArrowUp } from 'lucide-react';

const Footer = ({ language, content }) => {
  const t = content[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="gradient-premium text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-white">IS</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">
                {t.logo}
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              {t.footer.tagline}
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-400"></div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-2xl font-bold mb-6 font-serif">{t.footer.contact}</h4>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                  <MapPin size={20} className="text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">{t.footer.address}</span>
              </a>
              <a href={`tel:${t.footer.phone}`} className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                  <Phone size={20} className="text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">{t.footer.phone}</span>
              </a>
              <a href={`mailto:${t.footer.email}`} className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                  <Mail size={20} className="text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">{t.footer.email}</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-2xl font-bold mb-6 font-serif">{t.footer.social}</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-amber-600 hover:to-amber-500 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
                <Facebook size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-amber-600 hover:to-amber-500 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
                <Instagram size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-amber-600 hover:to-amber-500 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
                <Youtube size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-amber-600 hover:to-amber-500 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
                <Music size={24} />
              </a>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="mt-4 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-gradient-to-br hover:from-amber-600 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 group"
            >
              <ArrowUp size={20} className="group-hover:animate-bounce" />
              <span className="font-semibold">{language === 'en' ? 'Back to Top' : 'العودة للأعلى'}</span>
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="text-center space-y-3">
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto">
              {t.footer.disclaimer}
            </p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Immigration Solution & Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
