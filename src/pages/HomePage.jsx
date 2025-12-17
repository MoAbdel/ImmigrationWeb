import React from 'react';
import { Users, Flag, FileText, ScrollText, Heart, Award, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = ({ language, content }) => {
  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?q=80&w=2000)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            {t.hero.headline}
          </h2>
          <p className="text-xl sm:text-2xl mb-8 text-gray-200">
            {t.hero.subhead}
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
            {t.hero.cta}
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">
              {t.servicesTitle}
            </h2>
            <p className="text-xl text-gray-600">
              {t.servicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.categories.map((category, idx) => {
              const IconComponent = category.icon;
              const routes = [
                '/services/visas-family',
                '/services/status-citizenship',
                '/services/legal-documents',
                '/services/professional-services'
              ];

              return (
                <Link
                  key={idx}
                  to={routes[idx]}
                  className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 hover:border-amber-400 transform hover:scale-105 cursor-pointer"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-slate-900 rounded-lg mb-4 mx-auto">
                    <IconComponent className="text-amber-400" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 text-center font-serif">
                    {category.title}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {category.services.map((service, serviceIdx) => (
                      <li
                        key={serviceIdx}
                        className="text-gray-700 flex items-start gap-2"
                      >
                        <span className="text-amber-600 mt-1">•</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center mt-4">
                    <span className="text-amber-600 font-semibold hover:text-amber-700">
                      {language === 'en' ? 'Learn More →' : 'اعرف المزيد ←'}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              {t.whyTitle}
            </h2>
            <p className="text-xl text-gray-300">
              {t.whySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.whyFeatures.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={idx}
                  className="text-center p-8 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-center w-20 h-20 bg-amber-600 rounded-full mb-6 mx-auto">
                    <IconComponent size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-serif">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
