import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer = ({ language, content }) => {
  const t = content[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="gradient-premium text-white py-12 sm:py-14 md:py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-4 sm:mb-6">
              {t.logo}
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3 sm:mb-4">
              {t.footer.description}
            </p>
            <p className="text-xs sm:text-sm text-amber-400 font-semibold">
              {t.footer.hours}
            </p>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 font-serif">{language === 'en' ? 'Our Services' : 'خدماتنا'}</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/family-immigration/" className="text-sm sm:text-base text-gray-300 hover:text-amber-400 transition-colors">
                  {language === 'en' ? 'Family Immigration' : 'هجرة الأسرة'}
                </Link>
              </li>
              <li>
                <Link to="/citizenship-naturalization/" className="text-sm sm:text-base text-gray-300 hover:text-amber-400 transition-colors">
                  {language === 'en' ? 'Citizenship & Naturalization' : 'الجنسية والتجنس'}
                </Link>
              </li>
              <li>
                <Link to="/green-card-services/" className="text-sm sm:text-base text-gray-300 hover:text-amber-400 transition-colors">
                  {language === 'en' ? 'Green Card Services' : 'خدمات البطاقة الخضراء'}
                </Link>
              </li>
              <li>
                <Link to="/daca-services/" className="text-sm sm:text-base text-gray-300 hover:text-amber-400 transition-colors">
                  {language === 'en' ? 'DACA Services' : 'خدمات داكا'}
                </Link>
              </li>
              <li>
                <Link to="/asylum-services/" className="text-sm sm:text-base text-gray-300 hover:text-amber-400 transition-colors">
                  {language === 'en' ? 'Asylum Services' : 'خدمات اللجوء'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas We Serve */}
          <div>
            <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 font-serif">{language === 'en' ? 'Areas We Serve' : 'المناطق التي نخدمها'}</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/irvine/" className="text-sm sm:text-base text-gray-300 hover:text-amber-400 transition-colors">
                  Irvine, CA
                </Link>
              </li>
              <li>
                <Link to="/anaheim/" className="text-sm sm:text-base text-gray-300 hover:text-amber-400 transition-colors">
                  Anaheim, CA
                </Link>
              </li>
              <li>
                <Link to="/santa-ana/" className="text-sm sm:text-base text-gray-300 hover:text-amber-400 transition-colors">
                  Santa Ana, CA
                </Link>
              </li>
              <li>
                <Link to="/los-angeles/" className="text-sm sm:text-base text-gray-300 hover:text-amber-400 transition-colors">
                  Los Angeles, CA
                </Link>
              </li>
              <li>
                <Link to="/blog/" className="text-sm sm:text-base text-gray-300 hover:text-amber-400 transition-colors">
                  {language === 'en' ? 'Immigration Blog' : 'مدونة الهجرة'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 font-serif">{t.footer.contact}</h4>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <a href="#" className="flex items-center gap-2 sm:gap-3 group hover:translate-x-1 transition-transform">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg gradient-gold flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                  <MapPin size={18} className="sm:hidden text-white" />
                  <MapPin size={20} className="hidden sm:block text-white" />
                </div>
                <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">{t.footer.address}</span>
              </a>
              <a href={`tel:${t.footer.phone}`} className="flex items-center gap-2 sm:gap-3 group hover:translate-x-1 transition-transform">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg gradient-gold flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                  <Phone size={18} className="sm:hidden text-white" />
                  <Phone size={20} className="hidden sm:block text-white" />
                </div>
                <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">{t.footer.phone}</span>
              </a>
              <a href={`mailto:${t.footer.email}`} className="flex items-center gap-2 sm:gap-3 group hover:translate-x-1 transition-transform">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg gradient-gold flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                  <Mail size={18} className="sm:hidden text-white" />
                  <Mail size={20} className="hidden sm:block text-white" />
                </div>
                <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">{t.footer.email}</span>
              </a>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-gradient-to-br hover:from-amber-600 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <ArrowUp size={18} className="sm:hidden group-hover:animate-bounce" />
              <ArrowUp size={20} className="hidden sm:block group-hover:animate-bounce" />
              <span className="font-semibold text-sm sm:text-base">{language === 'en' ? 'Back to Top' : 'العودة للأعلى'}</span>
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="text-center space-y-2 sm:space-y-3">
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto px-2">
              {t.footer.disclaimer}
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} SoCal Immigration Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
