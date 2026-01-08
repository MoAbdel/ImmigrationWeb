import React, { useState } from 'react';
import { CheckCircle, XCircle, RefreshCw, AlertCircle } from 'lucide-react';
import MasterpieceContainer from './MasterpieceContainer';

const EligibilityQuiz = ({ language }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [answers, setAnswers] = useState([]);

    const isRTL = language === 'ar';

    const content = {
        en: {
            title: "Do I Qualify for EB-2 NIW?",
            subtitle: "Take this quick 5-question assessment to check your eligibility",
            questions: [
                {
                    text: "Do you have an advanced degree (Master's or higher) OR a Bachelor's degree + 5 years of progressive experience?",
                    options: [
                        { text: "Yes", value: 1 },
                        { text: "No", value: 0 }
                    ]
                },
                {
                    text: "Does your proposed endeavor have both 'Substantial Merit' and 'National Importance'?",
                    tooltip: "Example: Improving US healthcare, advancing technology, or enhancing environmental sustainability.",
                    options: [
                        { text: "Yes", value: 1 },
                        { text: "No", value: 0 },
                        { text: "Unsure", value: 0 }
                    ]
                },
                {
                    text: "Are you well-positioned to advance this endeavor?",
                    tooltip: "Consider your education, skills, record of success, and plans for the future.",
                    options: [
                        { text: "Yes", value: 1 },
                        { text: "No", value: 0 }
                    ]
                },
                {
                    text: "Would it be beneficial to the United States to waive the job offer and labor certification requirements?",
                    tooltip: "Does the US urgency or your unique qualifications outweigh the need to protect US workers?",
                    options: [
                        { text: "Yes", value: 1 },
                        { text: "No", value: 0 }
                    ]
                },
                {
                    text: "Can you provide evidence of your achievements (awards, publications, high salary, etc.)?",
                    options: [
                        { text: "Yes, extensive evidence", value: 1 },
                        { text: "Some evidence", value: 0.5 },
                        { text: "Little to no evidence", value: 0 }
                    ]
                }
            ],
            results: {
                high: {
                    title: "High Potential for NIW",
                    text: "You appear to have a strong profile for the National Interest Waiver. We highly recommend scheduling a consultation to discuss your specific strategy.",
                    color: "text-green-600",
                    bg: "bg-green-50"
                },
                medium: {
                    title: "Moderate Potential",
                    text: "You meet some criteria, but may need to strengthen your case or gather more evidence. A professional evaluation is recommended.",
                    color: "text-amber-600",
                    bg: "bg-amber-50"
                },
                low: {
                    title: "Low Potential / More Info Needed",
                    text: "Based on these answers, you might face challenges with an NIW petition at this time. However, every case is unique. Contact us for a full review.",
                    color: "text-red-600",
                    bg: "bg-red-50"
                }
            },
            restart: "Restart Quiz",
            book: "Book Consultation",
            next: "Next",
            back: "Back"
        },
        ar: {
            title: "هل أنا مؤهل للحصول على EB-2 NIW؟",
            subtitle: "قم بإجراء هذا التقييم السريع المكون من 5 أسئلة للتحقق من أهليتك",
            questions: [
                {
                    text: "هل لديك درجة متقدمة (ماجستير أو أعلى) أو درجة بكالوريوس + 5 سنوات من الخبرة التقدمية؟",
                    options: [
                        { text: "نعم", value: 1 },
                        { text: "لا", value: 0 }
                    ]
                },
                {
                    text: "هل مسعاك المقترح له 'جدارة جوهرية' و 'أهمية وطنية'؟",
                    tooltip: "مثال: تحسين الرعاية الصحية الأمريكية، أو تطوير التكنولوجيا، أو تعزيز الاستدامة البيئية.",
                    options: [
                        { text: "نعم", value: 1 },
                        { text: "لا", value: 0 },
                        { text: "غير متأكد", value: 0 }
                    ]
                },
                {
                    text: "هل أنت في وضع جيد لتعزيز هذا المسعى؟",
                    tooltip: "ضع في اعتبارك تعليمك ومهاراتك وسجل نجاحك وخططك للمستقبل.",
                    options: [
                        { text: "نعم", value: 1 },
                        { text: "لا", value: 0 }
                    ]
                },
                {
                    text: "هل سيكون من المفيد للولايات المتحدة التنازل عن متطلبات عرض العمل وشهادة العمل؟",
                    tooltip: "هل تفوق الحاجة الملحة للولايات المتحدة أو مؤهلاتك الفريدة الحاجة لحماية العمال الأمريكيين؟",
                    options: [
                        { text: "نعم", value: 1 },
                        { text: "لا", value: 0 }
                    ]
                },
                {
                    text: "هل يمكنك تقديم دليل على إنجازاتك (جوائز، منشورات، راتب مرتفع، إلخ)؟",
                    options: [
                        { text: "نعم، أدلة واسعة", value: 1 },
                        { text: "بعض الأدلة", value: 0.5 },
                        { text: "قليل من الأدلة أو لا يوجد", value: 0 }
                    ]
                }
            ],
            results: {
                high: {
                    title: "إمكانية عالية لـ NIW",
                    text: "يبدو أن لديك ملفًا قويًا للإعفاء من المصلحة الوطنية. نوصي بشدة بجدولة استشارة لمناقشة استراتيجيتك المحددة.",
                    color: "text-green-600",
                    bg: "bg-green-50"
                },
                medium: {
                    title: "إمكانية متوسطة",
                    text: "تستوفي بعض المعايير، لكن قد تحتاج إلى تعزيز قضيتك أو جمع المزيد من الأدلة. يوصى بتقييم مهني.",
                    color: "text-amber-600",
                    bg: "bg-amber-50"
                },
                low: {
                    title: "إمكانية منخفضة / بحاجة لمزيد من المعلومات",
                    text: "بناءً على هذه الإجابات، قد تواجه تحديات مع التماس NIW في هذا الوقت. ومع ذلك، كل حالة فريدة. اتصل بنا لمراجعة كاملة.",
                    color: "text-red-600",
                    bg: "bg-red-50"
                }
            },
            restart: "إعادة الاختبار",
            book: "حجز استشارة",
            next: "التالي",
            back: "سابق"
        }
    };

    const t = content[language];

    const handleAnswer = (value) => {
        const newAnswers = [...answers, value];
        setAnswers(newAnswers);
        setScore(score + value);

        if (currentQuestion < t.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setAnswers([]);
        setShowResult(false);
    };

    const getResult = () => {
        if (score >= 4) return t.results.high;
        if (score >= 2.5) return t.results.medium;
        return t.results.low;
    };

    const result = showResult ? getResult() : null;

    return (
        <MasterpieceContainer title={t.title} subtitle={t.subtitle}>
            {!showResult ? (
                <div className="space-y-6">
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                        <div
                            className="bg-amber-600 h-2.5 rounded-full transition-all duration-300"
                            style={{ width: `${((currentQuestion) / t.questions.length) * 100}%` }}
                        ></div>
                    </div>

                    <div className="min-h-[120px]">
                        <h4 className="text-lg font-semibold text-slate-800 mb-2">
                            {t.questions[currentQuestion].text}
                        </h4>
                        {t.questions[currentQuestion].tooltip && (
                            <div className="flex items-start gap-2 text-sm text-slate-500 bg-slate-50 p-3 rounded-lg">
                                <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                                <p>{t.questions[currentQuestion].tooltip}</p>
                            </div>
                        )}
                    </div>

                    <div className="grid gap-3">
                        {t.questions[currentQuestion].options.map((option, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleAnswer(option.value)}
                                className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-amber-500 hover:bg-amber-50 transition-all font-medium text-slate-700 flex justify-between items-center group"
                            >
                                {option.text}
                                <ChevronRight className={`text-gray-300 group-hover:text-amber-500 transition-colors ${isRTL ? 'rotate-180' : ''}`} size={20} />
                            </button>
                        ))}
                    </div>

                    <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
                        <span>{isRTL ? `السؤال ${currentQuestion + 1} من ${t.questions.length}` : `Question ${currentQuestion + 1} of ${t.questions.length}`}</span>
                        {currentQuestion > 0 && (
                            <button
                                onClick={() => {
                                    setCurrentQuestion(currentQuestion - 1);
                                    setScore(score - answers[currentQuestion - 1]);
                                    setAnswers(answers.slice(0, -1));
                                }}
                                className="text-slate-500 hover:text-slate-700 underline"
                            >
                                {t.back}
                            </button>
                        )}
                    </div>
                </div>
            ) : (
                <div className={`text-center py-8 px-4 rounded-lg ${result.bg}`}>
                    {score >= 4 ? (
                        <CheckCircle className="mx-auto text-green-600 mb-4" size={48} />
                    ) : score >= 2.5 ? (
                        <AlertCircle className="mx-auto text-amber-600 mb-4" size={48} />
                    ) : (
                        <XCircle className="mx-auto text-red-600 mb-4" size={48} />
                    )}

                    <h3 className={`text-2xl font-bold mb-3 ${result.color}`}>
                        {result.title}
                    </h3>
                    <p className="text-slate-700 mb-8 max-w-lg mx-auto">
                        {result.text}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contact"
                            className="bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                        >
                            {t.book}
                        </a>
                        <button
                            onClick={resetQuiz}
                            className="flex items-center justify-center gap-2 text-slate-600 hover:text-slate-800 font-medium px-6 py-2"
                        >
                            <RefreshCw size={18} />
                            {t.restart}
                        </button>
                    </div>
                </div>
            )}
        </MasterpieceContainer>
    );
};

// Helper component for chevron, needed locally specifically here
const ChevronRight = ({ className, size }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="m9 18 6-6-6-6" />
    </svg>
);

export default EligibilityQuiz;
