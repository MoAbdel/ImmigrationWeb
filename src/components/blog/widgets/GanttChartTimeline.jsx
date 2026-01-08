import React from 'react';
import MasterpieceContainer from './MasterpieceContainer';

const GanttChartTimeline = ({ language }) => {
    const isRTL = language === 'ar';

    const content = {
        en: {
            title: "Marriage Green Card Timeline 2026",
            subtitle: "Estimated processing times for each stage of the application",
            stages: [
                { name: "I-130 Petition", duration: "12-14 Months", color: "bg-blue-500", start: 0, width: 45 },
                { name: "NVC Processing", duration: "2-4 Months", color: "bg-purple-500", start: 45, width: 15 },
                { name: "Interview Wait", duration: "4-8 Months", color: "bg-amber-500", start: 60, width: 25 },
                { name: "Green Card Issued", duration: "1-2 Months", color: "bg-green-500", start: 85, width: 10 }
            ],
            months: ["Month 0", "Month 6", "Month 12", "Month 18", "Month 24+"],
            total: "Total: 18-28 Months"
        },
        ar: {
            title: "الجدول الزمني للبطاقة الخضراء عبر الزواج 2026",
            subtitle: "أوقات المعالجة التقديرية لكل مرحلة من مراحل الطلب",
            stages: [
                { name: "عريضة I-130", duration: "12-14 شهراً", color: "bg-blue-500", start: 0, width: 45 },
                { name: "معالجة NVC", duration: "2-4 أشهر", color: "bg-purple-500", start: 45, width: 15 },
                { name: "انتظار المقابلة", duration: "4-8 أشهر", color: "bg-amber-500", start: 60, width: 25 },
                { name: "إصدار البطاقة", duration: "1-2 أشهر", color: "bg-green-500", start: 85, width: 10 }
            ],
            months: ["شهر 0", "شهر 6", "شهر 12", "شهر 18", "شهر 24+"],
            total: "المجموع: 18-28 شهراً"
        }
    };

    const t = content[language];

    return (
        <MasterpieceContainer title={t.title} subtitle={t.subtitle}>
            <div className="relative pt-8 pb-4">
                {/* Timeline Grid Lines */}
                <div className="absolute inset-0 flex justify-between px-2 text-xs text-gray-400 -z-0 h-full">
                    {t.months.map((month, idx) => (
                        <div key={idx} className="flex flex-col h-full items-center">
                            <span>{month}</span>
                            <div className="h-full w-px bg-gray-100 mt-2"></div>
                        </div>
                    ))}
                </div>

                {/* Bars */}
                <div className="space-y-6 relative z-10 mt-6">
                    {t.stages.map((stage, idx) => (
                        <div key={idx} className="relative">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-bold text-slate-700">{stage.name}</span>
                                <span className="text-xs font-semibold text-slate-500">{stage.duration}</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden shadow-inner">
                                <div
                                    className={`h-full rounded-full ${stage.color} opacity-90 relative group transition-all hover:opacity-100`}
                                    style={{
                                        width: `${stage.width}%`,
                                        marginLeft: isRTL ? 'auto' : `${stage.start}%`,
                                        marginRight: isRTL ? `${stage.start}%` : 'auto'
                                    }}
                                >
                                    {/* Tooltip on Hover */}
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-xl">
                                        {stage.duration}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <span className="inline-block bg-slate-100 text-slate-800 px-4 py-2 rounded-lg font-bold text-sm">
                        {t.total}
                    </span>
                </div>
            </div>
        </MasterpieceContainer>
    );
};

export default GanttChartTimeline;
