import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';

const Navbar = ({ language, setLanguage, content }) => {
  const t = content[language];
  const isRTL = language === 'ar';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="gradient-premium text-white shadow-premium sticky top-0 z-50 backdrop-blur-md bg-slate-900/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <div className="flex-shrink-0">
            <Link to="/" className="group" onClick={closeMobileMenu}>
              <h1 className="text-sm sm:text-xl md:text-2xl font-serif font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                {t.logo}
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
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
            <Link to="/blog" className="relative group py-2">
              <span className="hover:text-amber-400 transition-colors font-medium">{t.nav.blog}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Right Side: Language Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="gradient-gold hover:from-amber-700 hover:to-amber-600 px-3 py-2 md:px-5 md:py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm md:text-base"
            >
              <Globe size={16} className="md:hidden pulse-slow" />
              <Globe size={18} className="hidden md:block pulse-slow" />
              <span className="hidden sm:inline">{language === 'en' ? t.langToggle : '🇺🇸 ' + t.langToggle}</span>
              <span className="sm:hidden">{language === 'en' ? 'ع' : 'EN'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="px-4 py-2 hover:bg-white/10 rounded-lg transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                {t.nav.home}
              </Link>
              <a
                href="/#services"
                className="px-4 py-2 hover:bg-white/10 rounded-lg transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                {t.nav.services}
              </a>
              <a
                href="/#about"
                className="px-4 py-2 hover:bg-white/10 rounded-lg transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                {t.nav.about}
              </a>
              <a
                href="/#contact"
                className="px-4 py-2 hover:bg-white/10 rounded-lg transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                {t.nav.contact}
              </a>
              <Link
                to="/blog"
                className="px-4 py-2 hover:bg-white/10 rounded-lg transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                {t.nav.blog}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
