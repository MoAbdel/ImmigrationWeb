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

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">
              {t.howItWorksTitle}
            </h2>
            <p className="text-xl text-gray-600">
              {t.howItWorksSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.howItWorksSteps.map((step, idx) => {
              const icons = [Phone, FileText, CheckCircle, Send];
              const IconComponent = icons[idx];

              return (
                <div key={idx} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <div className="text-3xl font-bold text-amber-600 mb-2">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  {/* Connector Arrow (except for last item) */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-amber-300">
                      <div className={`absolute ${isRTL ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent ${isRTL ? 'border-l-4 border-l-amber-300' : 'border-r-4 border-r-amber-300'}`}></div>
                    </div>
                  )}
                </div>
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">
              {t.testimonialsTitle}
            </h2>
            <p className="text-xl text-gray-600">
              {t.testimonialsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, starIdx) => (
                    <Star key={starIdx} className="text-amber-500 fill-amber-500" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">
              {t.faqTitle}
            </h2>
            <p className="text-xl text-gray-600">
              {t.faqSubtitle}
            </p>
          </div>

          <div className="space-y-4">
            {t.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-lg text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`text-amber-600 flex-shrink-0 transition-transform ${
                      openFaqIndex === idx ? 'transform rotate-180' : ''
                    }`}
                    size={24}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openFaqIndex === idx ? 'max-h-96 py-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">
            {t.finalCtaTitle}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t.finalCtaText}
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
            {t.finalCtaButton}
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
