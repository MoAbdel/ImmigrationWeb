import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import { MessageCircle, X, Send, CheckCircle } from 'lucide-react';

const SupportBubble = ({ language, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNotification, setShowNotification] = useState(true);
    const t = content[language];
    const isRTL = language === 'ar';
    const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        if (showNotification) setShowNotification(false);
    };

    const [formData, setFormData] = useState({
        subject: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const resetForm = () => {
        setFormData({ subject: '', service: '', message: '' });
    };

    const labels = {
        en: {
            title: 'Customer Support',
            subtitle: 'How can we help you today?',
            subjectLabel: 'Subject',
            subjectPlaceholder: 'Enter subject',
            serviceLabel: 'Service',
            servicePlaceholder: 'Select a service',
            messageLabel: 'Message',
            messagePlaceholder: 'Describe your inquiry...',
            submitButton: 'Send Message',
            successTitle: 'Message Sent!',
            successMessage: "We'll get back to you within 24 hours."
        },
        ar: {
            title: 'دعم العملاء',
            subtitle: 'كيف يمكننا مساعدتك اليوم؟',
            subjectLabel: 'الموضوع',
            subjectPlaceholder: 'أدخل الموضوع',
            serviceLabel: 'الخدمة',
            servicePlaceholder: 'اختر خدمة',
            messageLabel: 'الرسالة',
            messagePlaceholder: 'صف استفسارك...',
            submitButton: 'إرسال الرسالة',
            successTitle: 'تم إرسال الرسالة!',
            successMessage: 'سنرد عليك خلال 24 ساعة.'
        }
    };

    const l = labels[language];

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={handleToggle}
                className="fixed bottom-6 right-6 z-50 w-20 h-20 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110"
                aria-label="Customer Support"
            >
                {isOpen ? (
                    <X size={35} className="transition-transform duration-300" />
                ) : (
                    <MessageCircle size={35} className="transition-transform duration-300" />
                )}

                {/* Notification Badge */}
                {showNotification && !isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-6 w-6">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-6 w-6 bg-red-500 items-center justify-center text-xs font-bold">1</span>
                    </span>
                )}
            </button>

            {/* Support Panel */}
            <div
                className={`fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl transition-all duration-300 transform ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                dir={isRTL ? 'rtl' : 'ltr'}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-t-2xl p-4 text-white">
                    <h3 className="text-lg font-bold">{l.title}</h3>
                    <p className="text-sm text-amber-100">{l.subtitle}</p>
                </div>

                {/* Form / Success State */}
                <div className="p-4 max-h-96 overflow-y-auto">
                    {state.succeeded ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-10 h-10 text-green-500" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">{l.successTitle}</h4>
                            <p className="text-gray-600 text-sm">{l.successMessage}</p>
                            <button
                                onClick={() => {
                                    resetForm();
                                    setIsOpen(false);
                                }}
                                className="mt-4 text-amber-600 hover:text-amber-700 font-medium text-sm"
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Subject */}
                            <div>
                                <label htmlFor="support-subject" className="block text-sm font-semibold text-slate-900 mb-1">
                                    {l.subjectLabel} *
                                </label>
                                <input
                                    type="text"
                                    id="support-subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all text-slate-900 text-sm"
                                    placeholder={l.subjectPlaceholder}
                                />
                            </div>

                            {/* Service Dropdown */}
                            <div>
                                <label htmlFor="support-service" className="block text-sm font-semibold text-slate-900 mb-1">
                                    {l.serviceLabel} *
                                </label>
                                <select
                                    id="support-service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all text-slate-900 bg-white text-sm"
                                >
                                    <option value="">{l.servicePlaceholder}</option>
                                    {t.contactForm.serviceOptions.map((option, idx) => (
                                        <option key={idx} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="support-message" className="block text-sm font-semibold text-slate-900 mb-1">
                                    {l.messageLabel} *
                                </label>
                                <textarea
                                    id="support-message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all resize-none text-slate-900 text-sm"
                                    placeholder={l.messagePlaceholder}
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm disabled:opacity-70"
                            >
                                <Send size={16} />
                                {state.submitting ? '...' : l.submitButton}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
};

export default SupportBubble;
