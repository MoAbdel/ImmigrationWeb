import React, { useState } from 'react';
import { Users, Flag, FileText, ScrollText, Heart, Award, Shield, Phone, CheckCircle, Send, Star, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = ({ language, content }) => {
  const t = content[language];
  const isRTL = language === 'ar';
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section - Enhanced with Gradient Overlay */}
      <section
        id="home"
        className="relative min-h-[500px] sm:min-h-[600px] md:h-[700px] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.75) 100%), url(https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=2000)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-amber-900/20"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 py-12 sm:py-16">
          <div className="fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-4 sm:mb-6 leading-tight text-shadow-lg">
              {t.hero.headline}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 text-gray-100 font-light max-w-3xl mx-auto px-4">
              {t.hero.subhead}
            </p>
            <button className="btn-premium text-base sm:text-lg inline-flex items-center gap-2 w-full sm:w-auto justify-center">
              <Phone size={18} className="sm:hidden" />
              <Phone size={20} className="hidden sm:block" />
              {t.hero.cta}
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Section - Enhanced with Premium Cards */}
      <section id="services" className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 sm:mb-6">
              {t.servicesTitle}
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              {t.servicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
                  className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-premium hover:shadow-premium-lg transition-all duration-500 border border-gray-100 hover:border-amber-400 transform hover:scale-105 overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 gradient-premium rounded-2xl mb-4 sm:mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-6">
                      <IconComponent className="text-amber-400" size={32} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 text-center font-serif group-hover:text-amber-700 transition-colors">
                      {category.title}
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {category.services.map((service, serviceIdx) => (
                        <li
                          key={serviceIdx}
                          className="text-sm sm:text-base text-gray-700 flex items-start gap-2 sm:gap-3 group-hover:text-gray-900 transition-colors"
                        >
                          <CheckCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={16} />
                          <span className="font-medium">{service}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-center mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                      <span className="text-sm sm:text-base text-amber-600 font-bold group-hover:text-amber-700 inline-flex items-center gap-2">
                        {language === 'en' ? 'Learn More' : 'اعرف المزيد'}
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section - Enhanced */}
      <section className="py-12 sm:py-16 md:py-24 gradient-premium text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-amber-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6">
              {t.howItWorksTitle}
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              {t.howItWorksSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-8">
            {t.howItWorksSteps.map((step, idx) => {
              const icons = [Phone, FileText, CheckCircle, Send];
              const IconComponent = icons[idx];

              return (
                <div key={idx} className="relative group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 gradient-gold rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300 relative">
                      <IconComponent className="text-white" size={32} />
                      <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-amber-400 mb-2 sm:mb-3">
                      {step.step}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 font-serif">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed px-2">
                      {step.description}
                    </p>
                  </div>
                  {/* Enhanced Connector - Only on desktop */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-[80%]">
                      <div className="h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 relative">
                        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-amber-400 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Enhanced */}
      <section id="about" className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 sm:mb-6">
              {t.whyTitle}
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              {t.whySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {t.whyFeatures.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={idx}
                  className="relative group text-center p-6 sm:p-8 md:p-10 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-premium hover:shadow-premium-lg transition-all duration-500 border border-gray-100 hover:border-amber-200"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 gradient-gold rounded-full mb-6 sm:mb-8 mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110">
                      <IconComponent size={36} className="sm:hidden text-white" />
                      <IconComponent size={44} className="hidden sm:block text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-serif text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6">
              {t.testimonialsTitle}
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              {t.testimonialsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {t.testimonials.map((testimonial, idx) => (
              <div key={idx} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-premium-lg hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-amber-400/50 transform hover:scale-105">
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, starIdx) => (
                    <Star key={starIdx} className="text-amber-400 fill-amber-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 sm:mb-8 italic leading-relaxed text-sm sm:text-base md:text-lg font-light">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-white/10 pt-4 sm:pt-6">
                  <p className="font-bold text-white text-base sm:text-lg">{testimonial.name}</p>
                  <p className="text-amber-400 text-xs sm:text-sm mt-1">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 sm:mb-6">
              {t.faqTitle}
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              {t.faqSubtitle}
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {t.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-premium overflow-hidden hover:shadow-premium-lg transition-all duration-300">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors group"
                >
                  <span className="font-bold text-base sm:text-lg md:text-xl text-slate-900 pr-3 sm:pr-4 group-hover:text-amber-700 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`text-amber-600 flex-shrink-0 transition-all duration-300 ${
                      openFaqIndex === idx ? 'transform rotate-180' : ''
                    }`}
                    size={24}
                  />
                </button>
                <div
                  className={`px-4 sm:px-6 md:px-8 overflow-hidden transition-all duration-500 ${
                    openFaqIndex === idx ? 'max-h-96 py-4 sm:py-5 md:py-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg border-t border-gray-100 pt-4 sm:pt-5 md:pt-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Band - Enhanced with Gradient */}
      <section className="py-12 sm:py-16 md:py-24 gradient-premium relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 text-white">
            {t.finalCtaTitle}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-10 font-light px-4">
            {t.finalCtaText}
          </p>
          <button className="btn-premium text-base sm:text-lg md:text-xl inline-flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
            <Phone size={18} className="sm:hidden" />
            <Phone size={20} className="hidden sm:block md:hidden" />
            <Phone size={24} className="hidden md:block" />
            {t.finalCtaButton}
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
