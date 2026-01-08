import React from 'react';
import { Check, X, Minus } from 'lucide-react';
import MasterpieceContainer from './MasterpieceContainer';

const InvestmentComparisonTable = ({ language }) => {
    const isRTL = language === 'ar';

    const content = {
        en: {
            title: "Investment Visa Showdown: E-2 vs. EB-5",
            subtitle: "Compare key requirements and benefits side-by-side",
            headers: ["Feature", "E-2 Treaty Investor", "EB-5 Immigrant Investor"],
            rows: [
                { feature: "Primary Goal", e2: "Work Visa (Non-Immigrant)", eb5: "Green Card (Immigrant)" },
                { feature: "Min Investment", e2: "Substantial (~$100k+)", eb5: "$800k or $1.05M" },
                { feature: "Job Creation", e2: "Not strictly defined", eb5: "Must create 10 full-time jobs" },
                { feature: "Processing Time", e2: "2-5 Months (Premium)", eb5: "2-5 Years" },
                { feature: "Nationality", e2: "Treaty Countries Only", eb5: "All Countries" },
                { feature: "Path to Citizenship", e2: "No (Directly)", eb5: "Yes" },
            ]
        },
        ar: {
            title: "مقارنة تأشيرات الاستثمار: E-2 مقابل EB-5",
            subtitle: "قارن المتطلبات الرئيسية والمزايا جنباً إلى جنب",
            headers: ["الميزة", "مستثمر المعاهدة E-2", "المستثمر المهاجر EB-5"],
            rows: [
                { feature: "الهدف الأساسي", e2: "فيزا عمل (غير هجرة)", eb5: "جرين كارد (هجرة)" },
                { feature: "الحد الأدنى للاستثمار", e2: "جوهري (~$100k+)", eb5: "$800k أو $1.05M" },
                { feature: "خلق الوظائف", e2: "غير محدد بدقة", eb5: "يجب خلق 10 وظائف بدوام كامل" },
                { feature: "وقت المعالجة", e2: "2-5 أشهر (ممتاز)", eb5: "2-5 سنوات" },
                { feature: "الجنسية", e2: "دول المعاهدة فقط", eb5: "جميع الدول" },
                { feature: "طريق للجنسية", e2: "لا (بشكل مباشر)", eb5: "نعم" },
            ]
        }
    };

    const t = content[language];

    return (
        <MasterpieceContainer title={t.title} subtitle={t.subtitle}>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap md:whitespace-normal">
                    <thead>
                        <tr className="bg-slate-100 text-slate-800 border-b-2 border-slate-200">
                            <th className="p-4 font-bold rounded-tl-lg">{t.headers[0]}</th>
                            <th className="p-4 font-bold text-blue-700 bg-blue-50 border-x border-white">{t.headers[1]}</th>
                            <th className="p-4 font-bold text-green-700 bg-green-50 rounded-tr-lg">{t.headers[2]}</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-slate-600">
                        {t.rows.map((row, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                <td className="p-4 font-medium text-slate-900 sticky left-0 bg-inherit shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] md:shadow-none md:static">
                                    {row.feature}
                                </td>
                                <td className="p-4 text-blue-900 font-medium bg-blue-50/30 border-x border-slate-100">
                                    {row.e2 === "Yes" || row.e2 === "نعم" ? <Check className="text-green-500" size={20} /> :
                                        row.e2 === "No (Directly)" || row.e2 === "لا (بشكل مباشر)" ? <X className="text-red-500" size={20} /> : row.e2}
                                </td>
                                <td className="p-4 text-green-900 font-medium bg-green-50/30">
                                    {row.eb5 === "Yes" || row.eb5 === "نعم" ? <Check className="text-green-500" size={20} /> :
                                        row.eb5 === "All Countries" ? row.eb5 : <span className="font-semibold">{row.eb5}</span>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </MasterpieceContainer>
    );
};

export default InvestmentComparisonTable;
