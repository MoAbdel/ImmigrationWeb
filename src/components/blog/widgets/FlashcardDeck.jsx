import React, { useState } from 'react';
import { RotateCw, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import MasterpieceContainer from './MasterpieceContainer';

const FlashcardDeck = ({ language }) => {
    const [currentCard, setCurrentCard] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const isRTL = language === 'ar';

    const content = {
        en: {
            title: "Citizenship Interview Flashcards",
            subtitle: "Test your knowledge with these common civics questions",
            cards: [
                { q: "What is the supreme law of the land?", a: "The Constitution" },
                { q: "What does the Constitution do?", a: "Sets up the government / Defines the government / Protects basic rights of Americans" },
                { q: "The idea of self-government is in the first three words of the Constitution. What are these words?", a: "We the People" },
                { q: "What is an amendment?", a: "A change (to the Constitution) / An addition (to the Constitution)" },
                { q: "What do we call the first ten amendments to the Constitution?", a: "The Bill of Rights" }
            ],
            flip: "Click to Flip",
            next: "Next Card",
            prev: "Previous"
        },
        ar: {
            title: "بطاقات تعليمية لمقابلة الجنسية",
            subtitle: "اختبر معلوماتك مع هذه الأسئلة المدنية الشائعة",
            cards: [
                { q: "ما هو القانون الأعلى للبلاد؟", a: "الدستور (The Constitution)" },
                { q: "ماذا يفعل الدستور؟", a: "يؤييس الحكومة / يحدد الحكومة / يحمي الحقوق الأساسية للأمريكيين" },
                { q: "فكرة الحكم الذاتي موجودة في الكلمات الثلاث الأولى من الدستور. ما هي هذه الكلمات؟", a: "نحن الشعب (We the People)" },
                { q: "ما هو التعديل؟", a: "تغيير (في الدستور) / إضافة (إلى الدستور)" },
                { q: "ماذا نسمي التعديلات العشرة الأولى للدستور؟", a: "وثيقة الحقوق (The Bill of Rights)" }
            ],
            flip: "انقر للقلب",
            next: "البطاقة التالية",
            prev: "السابقة"
        }
    };

    const t = content[language];

    const nextCard = (e) => {
        e.stopPropagation();
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentCard((prev) => (prev + 1) % t.cards.length);
        }, 150);
    };

    const prevCard = (e) => {
        e.stopPropagation();
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentCard((prev) => (prev === 0 ? t.cards.length - 1 : prev - 1));
        }, 150);
    };

    return (
        <MasterpieceContainer title={t.title} subtitle={t.subtitle}>
            <div className="perspective-1000 w-full max-w-lg mx-auto h-64 cursor-pointer group" onClick={() => setIsFlipped(!isFlipped)}>
                <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
                    style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>

                    {/* Front */}
                    <div className="absolute inset-0 w-full h-full bg-slate-800 text-white rounded-xl shadow-xl p-8 flex flex-col items-center justify-center text-center backface-hidden"
                        style={{ backfaceVisibility: 'hidden' }}>
                        <span className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-4">Question {currentCard + 1}</span>
                        <h3 className="text-2xl font-serif font-bold">{t.cards[currentCard].q}</h3>
                        <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
                            <RotateCw size={14} /> {t.flip}
                        </div>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 w-full h-full bg-white text-slate-900 border-2 border-amber-500 rounded-xl shadow-xl p-8 flex flex-col items-center justify-center text-center backface-hidden"
                        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                        <span className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-4">Answer</span>
                        <h3 className="text-xl font-medium">{t.cards[currentCard].a}</h3>
                        <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
                            <Check size={14} className="text-green-500" /> Correct?
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex justify-between items-center max-w-lg mx-auto mt-6">
                <button
                    onClick={prevCard}
                    className="flex items-center gap-2 text-slate-600 hover:text-amber-600 font-medium transition-colors"
                >
                    <ArrowLeft size={18} className={isRTL ? 'rotate-180' : ''} /> {t.prev}
                </button>

                <span className="text-sm text-gray-400">
                    {currentCard + 1} / {t.cards.length}
                </span>

                <button
                    onClick={nextCard}
                    className="flex items-center gap-2 text-slate-600 hover:text-amber-600 font-medium transition-colors"
                >
                    {t.next} <ArrowRight size={18} className={isRTL ? 'rotate-180' : ''} />
                </button>
            </div>

        </MasterpieceContainer>
    );
};

export default FlashcardDeck;
