import React, { useState } from 'react';
import { Heart, Clock, DollarSign, Briefcase } from 'lucide-react';
import MasterpieceContainer from './MasterpieceContainer';

const VisaSelector = ({ language }) => {
    const [selected, setSelected] = useState('speed'); // 'speed' or 'cost'
    const isRTL = language === 'ar';

    const content = {
        en: {
            title: "K-1 Fiancé vs. CR-1 Spouse Visa",
            subtitle: "Which path is right for your relationship?",
            toggles: [
                { id: 'speed', label: "I prioritize Speed ⚡" },
                { id: 'cost', label: "I prioritize Cost & Stability 💰" }
            ],
            results: {
                speed: {
                    rec: "Recommendation: K-1 Fiancé Visa",
                    desc: "The K-1 is historically faster to get your partner to the U.S., but it's more expensive overall and requires Adjustment of Status after marriage.",
                    pros: ["Faster processing time to entry", "Can plan wedding in the U.S."],
                    cons: ["Higher total cost", "Cannot work immediately upon arrival", "Must adjust status later"]
                },
                cost: {
                    rec: "Recommendation: CR-1 Spouse Visa",
                    desc: "The CR-1 takes longer to process, but your spouse enters as a Permanent Resident (Green Card holder) with ability to work immediately.",
                    pros: ["Lower total cost", "Immediate work authorization", "Instant Green Card on arrival"],
                    cons: ["Longer separation time", "Must marry outside U.S. first"]
                }
            }
        },
        ar: {
            title: "مقارنة فيزا الخطيب K-1 وزواج CR-1",
            subtitle: "أي مسار هو الأنسب لعلاقتكما؟",
            toggles: [
                { id: 'speed', label: "أولويتي هي السرعة ⚡" },
                { id: 'cost', label: "أولويتي التكلفة والاستقرار 💰" }
            ],
            results: {
                speed: {
                    rec: "التوصية: فيزا الخطيب K-1",
                    desc: "تعتبر K-1 تاريخياً أسرع لإحضار شريكك إلى الولايات المتحدة، لكنها أكثر تكلفة بشكل عام وتتطلب تعديل الوضع بعد الزواج.",
                    pros: ["وقت معالجة أسرع للدخول", "يمكن التخطيط للزفاف في الولايات المتحدة"],
                    cons: ["تكلفة إجمالية أعلى", "لا يمكن العمل فور الوصول", "يجب تعديل الوضع لاحقاً"]
                },
                cost: {
                    rec: "التوصية: فيزا الزواج CR-1",
                    desc: "تستغرق CR-1 وقتاً أطول للمعالجة، لكن زوجك/زوجتك يدخل كمقيم دائم (حامل جرين كارد) مع القدرة على العمل فوراً.",
                    pros: ["تكلفة إجمالية أقل", "تصريح عمل فوري", "جرين كارد فوري عند الوصول"],
                    cons: ["وقت انفصال أطول", "يجب الزواج خارج الولايات المتحدة أولاً"]
                }
            }
        }
    };

    const t = content[language];
    const res = t.results[selected];

    return (
        <MasterpieceContainer title={t.title} subtitle={t.subtitle}>
            {/* Toggle */}
            <div className="flex flex-col sm:flex-row gap-2 bg-slate-100 p-1 rounded-lg mb-8">
                {t.toggles.map((toggle) => (
                    <button
                        key={toggle.id}
                        onClick={() => setSelected(toggle.id)}
                        className={`flex-1 py-3 px-4 rounded-md font-semibold text-sm transition-all shadow-sm ${selected === toggle.id
                                ? 'bg-white text-slate-900 shadow-md ring-1 ring-black/5'
                                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50 shadow-none'
                            }`}
                    >
                        {toggle.label}
                    </button>
                ))}
            </div>

            {/* Result Card */}
            <div className={`border-l-4 rounded-r-lg p-6 transition-all duration-300 ${selected === 'speed' ? 'bg-amber-50 border-amber-500' : 'bg-green-50 border-green-500'
                }`}>
                <h3 className={`text-2xl font-bold mb-3 ${selected === 'speed' ? 'text-amber-700' : 'text-green-700'}`}>
                    {res.rec}
                </h3>
                <p className="text-slate-700 mb-6 text-lg leading-relaxed">
                    {res.desc}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                            <span className="text-green-500">✔</span> Pros
                        </h4>
                        <ul className="space-y-2">
                            {res.pros.map((pro, i) => (
                                <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                                    {pro}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                            <span className="text-red-500">✖</span> Cons
                        </h4>
                        <ul className="space-y-2">
                            {res.cons.map((con, i) => (
                                <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                                    {con}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </MasterpieceContainer>
    );
};

export default VisaSelector;
