import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send } from 'lucide-react';

const ContactForm = ({ language, content }) => {
  const t = content[language];
  const isRTL = language === 'ar';
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (state.succeeded) {
    return (
      <section id="contact-form" className="py-12 sm:py-16 md:py-24 gradient-premium relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              {t.contactForm.successMessage || "Thanks for joining!"}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto"></div>
         </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-12 sm:py-16 md:py-24 gradient-premium relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 sm:mb-6">
            {t.contactForm.title}
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto px-4">
            {t.contactForm.subtitle}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-premium p-6 sm:p-8 md:p-10">
          <form onSubmit={handleSubmit} className={`space-y-6 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                {t.contactForm.nameLabel}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all text-slate-900"
                placeholder={t.contactForm.namePlaceholder}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                {t.contactForm.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all text-slate-900"
                placeholder={t.contactForm.emailPlaceholder}
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                {t.contactForm.phoneLabel}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all text-slate-900"
                placeholder={t.contactForm.phonePlaceholder}
              />
            </div>

            {/* Service Selection */}
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-slate-900 mb-2">
                {t.contactForm.serviceLabel}
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all text-slate-900 bg-white"
              >
                <option value="">{t.contactForm.servicePlaceholder}</option>
                {t.contactForm.serviceOptions.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                {t.contactForm.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all resize-none text-slate-900"
                placeholder={t.contactForm.messagePlaceholder}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-premium text-lg py-4 flex items-center justify-center gap-3"
            >
              <Send size={20} />
              {t.contactForm.submitButton}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
