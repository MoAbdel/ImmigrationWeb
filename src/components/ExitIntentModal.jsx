import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { X, Send, AlertCircle } from 'lucide-react';

const ExitIntentModal = ({ language, content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const t = content[language];
  const isRTL = language === 'ar';
  
  // Reuse the same Formspree ID as the main contact form
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    // Check if we've already shown the modal in this session
    const shownInSession = sessionStorage.getItem('exitIntentShown');
    if (shownInSession) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e) => {
      // If mouse leaves the top of the window
      if (e.clientY <= 0 && !hasShown && !isVisible) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown, isVisible]);

  const closeModal = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-300"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Close Button */}
        <button 
          onClick={closeModal}
          className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} text-gray-400 hover:text-gray-600 transition-colors z-10`}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Header with Gradient */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white text-center">
          <h3 className="text-2xl font-serif font-bold mb-2">
            {language === 'en' ? 'Wait! Don\'t leave yet.' : 'انتظر! لا تغادر بعد.'}
          </h3>
          <p className="text-amber-400 font-medium">
            {language === 'en' ? 'Get a free consultation before you go.' : 'احصل على استشارة مجانية قبل أن تذهب.'}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {state.succeeded ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                {t.contactForm.successMessage || (language === 'en' ? 'Message Sent!' : 'تم إرسال الرسالة!')}
              </h4>
              <p className="text-gray-600 mb-6">
                {language === 'en' 
                  ? 'We\'ll get back to you shortly.' 
                  : 'سنعود إليك قريباً.'}
              </p>
              <button 
                onClick={closeModal}
                className="btn-premium px-8 py-2"
              >
                {language === 'en' ? 'Close' : 'إغلاق'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-gray-600 text-center mb-6 text-sm">
                {language === 'en' 
                  ? 'Fill out the form below and our team will contact you within 24 hours.' 
                  : 'املأ النموذج أدناه وسيقوم فريقنا بالاتصال بك في غضون 24 ساعة.'}
              </p>

              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t.contactForm.namePlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t.contactForm.emailPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder={t.contactForm.phonePlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder={t.contactForm.messagePlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full btn-premium py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                {state.submitting ? (
                  <span className="animate-pulse">...</span>
                ) : (
                  <>
                    <Send size={18} />
                    {t.contactForm.submitButton}
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExitIntentModal;
