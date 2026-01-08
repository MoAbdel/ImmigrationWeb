import React, { useState } from 'react';
import MasterpieceContainer from './MasterpieceContainer';

const VennDiagramComparison = ({ language }) => {
    const [activeSegment, setActiveSegment] = useState(null);
    const isRTL = language === 'ar';

    const content = {
        en: {
            title: "H-1B Visa Alternatives",
            subtitle: "Click sections to compare visa types",
            types: {
                o1: { name: "O-1", title: "O-1 Extraordinary Ability", desc: "For individuals with sustained national or international acclaim. No lottery, unlimited renewals, but high standard of evidence." },
                tn: { name: "TN", title: "TN NAFTA Professional", desc: "For Canadian and Mexican citizens in specific professions. Fast processing, no cap, but strictly non-immigrant intent." },
                l1: { name: "L-1", title: "L-1 Intracompany Transferee", desc: "For executives/managers (L-1A) or specialized knowledge (L-1B) transferring within a company. Dual intent allowed, path to Green Card." },
                center: { name: "All", title: "Common Benefits", desc: "All allow you to work legally in the US for a specific employer. Determining which is right depends on your citizenship, role, and qualifications." }
            }
        },
        ar: {
            title: "بدائل تأشيرة H-1B",
            subtitle: "انقر فوق الأقسام لمقارنة أنواع التأشيرات",
            types: {
                o1: { name: "O-1", title: "O-1 للقدرات الاستثنائية", desc: "للأفراد ذوي الشهرة الوطنية أو الدولية المستمرة. لا يانصيب، تجديدات غير محدودة، لكن معايير إثبات عالية." },
                tn: { name: "TN", title: "TN مهنيي نافتا", desc: "للمواطنين الكنديين والمكسيكيين في مهن محددة. معالجة سريعة، لا حد أقصى، لكن نية غير الهجرة صارمة." },
                l1: { name: "L-1", title: "L-1 النقل الداخلي للشركات", desc: "للتنفيذيين/المديرين (L-1A) أو المعرفة المتخصصة (L-1B) القادمون ضمن نفس الشركة. يسمح بالنية المزدوجة، طريق للبطاقة الخضراء." },
                center: { name: "الكل", title: "المزايا المشتركة", desc: "تسمح جميعها بالعمل بشكل قانوني في الولايات المتحدة لصاحب عمل محدد. تحديد الأنسب يعتمد على جنسيتك ودورك ومؤهلاتك." }
            }
        }
    };

    const t = content[language];
    const activeData = activeSegment ? t.types[activeSegment] : t.types.center;

    return (
        <MasterpieceContainer title={t.title} subtitle={t.subtitle}>
            <div className="flex flex-col md:flex-row items-center gap-8">

                {/* CSS Venn Diagram */}
                <div className="relative w-64 h-64 flex-shrink-0 mx-auto">
                    {/* O-1 Circle (Top) */}
                    <button
                        onClick={() => setActiveSegment('o1')}
                        className={`absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border-2 border-white mix-blend-multiply transition-all duration-300 flex items-start justify-center pt-6 font-bold cursor-pointer
              ${activeSegment === 'o1' ? 'bg-amber-500 scale-105 z-10 text-white' : 'bg-amber-200 text-amber-800 hover:bg-amber-300'}`}
                    >
                        {t.types.o1.name}
                    </button>

                    {/* TN Circle (Bottom Left) */}
                    <button
                        onClick={() => setActiveSegment('tn')}
                        className={`absolute bottom-0 left-0 w-40 h-40 rounded-full border-2 border-white mix-blend-multiply transition-all duration-300 flex items-end justify-center pb-6 pr-6 font-bold cursor-pointer
             ${activeSegment === 'tn' ? 'bg-blue-500 scale-105 z-10 text-white' : 'bg-blue-200 text-blue-800 hover:bg-blue-300'}`}
                    >
                        {t.types.tn.name}
                    </button>

                    {/* L-1 Circle (Bottom Right) */}
                    <button
                        onClick={() => setActiveSegment('l1')}
                        className={`absolute bottom-0 right-0 w-40 h-40 rounded-full border-2 border-white mix-blend-multiply transition-all duration-300 flex items-end justify-center pb-6 pl-6 font-bold cursor-pointer
             ${activeSegment === 'l1' ? 'bg-green-500 scale-105 z-10 text-white' : 'bg-green-200 text-green-800 hover:bg-green-300'}`}
                    >
                        {t.types.l1.name}
                    </button>

                    {/* Center Intersection */}
                    <button
                        onClick={() => setActiveSegment('center')}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full opacity-0 hover:opacity-20 bg-white cursor-pointer z-20"
                        title={t.types.center.name}
                    ></button>
                </div>

                {/* Info Box */}
                <div className="flex-grow bg-slate-50 p-6 rounded-xl border border-slate-100 min-h-[160px] w-full">
                    <h4 className={`text-xl font-bold mb-2 ${activeSegment === 'o1' ? 'text-amber-600' :
                            activeSegment === 'tn' ? 'text-blue-600' :
                                activeSegment === 'l1' ? 'text-green-600' :
                                    'text-slate-800'
                        }`}>
                        {activeData.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                        {activeData.desc}
                    </p>
                </div>

            </div>
        </MasterpieceContainer>
    );
};

export default VennDiagramComparison;
