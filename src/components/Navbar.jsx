import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';

const Navbar = ({ language, setLanguage, content }) => {
  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <nav className="gradient-premium text-white shadow-premium sticky top-0 z-50 backdrop-blur-md bg-slate-900/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0">
            <Link to="/" className="group">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <span className="text-2xl font-bold text-white">IS</span>
                </div>
                <h1 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                  {t.logo}
                </h1>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex space-x-10 rtl:space-x-reverse">
            <Link to="/" className="relative group py-2">
              <span className="hover:text-amber-400 transition-colors font-medium">{t.nav.home}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a href="/#services" className="relative group py-2">
              <span className="hover:text-amber-400 transition-colors font-medium">{t.nav.services}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/#about" className="relative group py-2">
              <span className="hover:text-amber-400 transition-colors font-medium">{t.nav.about}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/#contact" className="relative group py-2">
              <span className="hover:text-amber-400 transition-colors font-medium">{t.nav.contact}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="gradient-gold hover:from-amber-700 hover:to-amber-600 px-5 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Globe size={18} className="pulse-slow" />
            {language === 'en' ? '🇸🇦' : '🇺🇸'} {t.langToggle}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
