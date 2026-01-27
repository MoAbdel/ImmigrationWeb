import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const PhoneWidget = ({ language }) => {
    const isRTL = language === 'ar';
    const phoneNumber = "(714) 421-8872";
    const telLink = "tel:+17144218872";

    const labels = {
        en: {
            cta: "Call Now",
            subtitle: "Available 24/7"
        },
        ar: {
            cta: "اتصل الآن",
            subtitle: "متاح 24/7"
        }
    };

    const t = labels[language] || labels.en;

    return (
        <a
            href={telLink}
            className={`fixed bottom-9 right-32 z-40 hidden md:flex items-center gap-3 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border border-amber-100 group text-slate-900 no-underline ${isRTL ? 'flex-row-reverse' : 'flex-row'
                }`}
            aria-label="Call Customer Support"
        >
            {/* Icon Container */}
            <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 flex items-center justify-center text-white shadow-md group-hover:rotate-12 transition-transform duration-300 ${isRTL ? 'ml-2' : 'mr-2'
                }`}>
                <Phone size={20} fill="currentColor" />
            </div>

            {/* Text Content */}
            <div className={`flex flex-col ${isRTL ? 'items-end' : 'items-start'}`}>
                <span className="text-[10px] uppercase tracking-wider text-amber-600 font-bold mb-0.5">
                    {t.cta}
                </span>
                <span className="text-lg font-bold text-slate-800 leading-none">
                    {phoneNumber}
                </span>
            </div>

            {/* CTA Arrow/Button */}
            <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-50 transition-colors duration-300 ${isRTL ? 'mr-3' : 'ml-3'
                }`}>
                <ArrowRight size={16} className={`transform transition-transform duration-300 ${isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'
                    }`} />
            </div>
        </a>
    );
};

export default PhoneWidget;
