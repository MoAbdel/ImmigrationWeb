import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ language, setLanguage, content }) => {
  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-xl sm:text-2xl font-serif font-bold text-amber-400 hover:text-amber-300 transition-colors">
                {t.logo}
              </h1>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 rtl:space-x-reverse">
            <Link to="/" className="hover:text-amber-400 transition-colors">{t.nav.home}</Link>
            <a href="/#services" className="hover:text-amber-400 transition-colors">{t.nav.services}</a>
            <a href="/#about" className="hover:text-amber-400 transition-colors">{t.nav.about}</a>
            <a href="/#contact" className="hover:text-amber-400 transition-colors">{t.nav.contact}</a>
          </div>

          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            {language === 'en' ? '🇸🇦' : '🇺🇸'} {t.langToggle}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
