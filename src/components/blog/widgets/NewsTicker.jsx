import React, { useState, useEffect } from 'react';
import { Bell, Calendar, ExternalLink } from 'lucide-react';
import MasterpieceContainer from './MasterpieceContainer';

const NewsTicker = ({ language }) => {
    const isRTL = language === 'ar';

    const content = {
        en: {
            title: "Latest DACA Updates & News",
            subtitle: "Live feed of recent court rulings and USCIS announcements",
            updates: [
                { date: "Jan 03, 2026", text: "USCIS confirms 2026 renewal fees remain unchanged at $495.", type: "Official" },
                { date: "Dec 15, 2025", text: "New federal court ruling on DACA expansion pending appeal.", type: "Legal" },
                { date: "Nov 20, 2025", text: "Reminder: Renewal processing times currently averaging 90 days.", type: "Alert" }
            ],
            label: "Latest Update:"
        },
        ar: {
            title: "آخر تحديثات وأخبار DACA",
            subtitle: "تغذية حية للأحكام القضائية الأخيرة وإعلانات USCIS",
            updates: [
                { date: "03 يناير 2026", text: "تؤكد USCIS بقاء رسوم تجديد 2026 دون تغيير عند 495 دولارًا.", type: "رسمي" },
                { date: "15 ديسمبر 2025", text: "حكم محكمة اتحادية جديد بشأن توسيع DACA قيد الاستئناف.", type: "قانوني" },
                { date: "20 نوفمبر 2025", text: "تذكير: متوسط أوقات معالجة التجديد حاليًا 90 يومًا.", type: "تنبيه" }
            ],
            label: "آخر تحديث:"
        }
    };

    const t = content[language];
    const [currentIdx, setCurrentIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIdx((prev) => (prev + 1) % t.updates.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [t.updates.length]);

    return (
        <MasterpieceContainer>
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-slate-50 p-4 rounded-lg border border-slate-200">

                {/* Header/Label */}
                <div className="flex items-center gap-2 text-red-600 font-bold whitespace-nowrap min-w-fit">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    {t.label}
                </div>

                {/* Scrolling Text */}
                <div className="flex-grow w-full overflow-hidden relative h-12 sm:h-auto flex items-center">
                    <div className="transition-all duration-500 ease-in-out transform absolute sm:static w-full flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="text-xs font-semibold text-slate-500 bg-white px-2 py-1 rounded border border-slate-200 uppercase tracking-wider w-fit">
                            {t.updates[currentIdx].type}
                        </span>
                        <span className="text-slate-800 font-medium text-sm sm:text-base line-clamp-1">
                            {t.updates[currentIdx].text}
                        </span>
                        <span className="text-xs text-slate-400 sm:ml-auto whitespace-nowrap flex items-center gap-1">
                            <Calendar size={12} />
                            {t.updates[currentIdx].date}
                        </span>
                    </div>
                </div>

            </div>

            {/* List for SEO/Accessibility (visually simplified) */}
            <div className="mt-4 grid gap-2">
                {t.updates.map((update, idx) => (
                    <div key={idx} className={`text-sm text-gray-500 flex items-center gap-2 ${idx === currentIdx ? 'opacity-100 font-medium' : 'opacity-50'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${idx === currentIdx ? 'bg-amber-500' : 'bg-gray-300'}`}></div>
                        {update.text}
                    </div>
                ))}
            </div>
        </MasterpieceContainer>
    );
};

export default NewsTicker;
