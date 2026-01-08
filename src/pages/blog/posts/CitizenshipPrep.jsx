import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';
import FlashcardDeck from '../../../components/blog/widgets/FlashcardDeck';

const CitizenshipPrep = ({ language }) => {
    const content = {
        en: {
            slug: "naturalization-interview-questions",
            title: "The Citizenship Interview Prep Hub",
            subtitle: "Master the Civics Test with our practice tools",
            metaTitle: "Naturalization Interview Questions | Citizenship Test Prep 2026",
            metaDescription: "Study for your U.S. citizenship interview with our interactive flashcards. Covers common civics questions and N-400 interview tips.",
            keywords: "citizenship interview questions, naturalization test prep, civics test flashcards, N-400 interview guide",
            category: "Citizenship",
            location: "San Diego",
            date: "January 2, 2026",
            readTime: "15 min read",
            author: "SoCal Immigration Services",
            locationIntro: "Preparing future citizens in San Diego for their interviews at the downtown Federal Building.",

            sections: [
                {
                    heading: "The Final Step to Citizenship",
                    content: "The naturalization interview is the final major hurdle. It consists of two parts: a review of your N-400 application to confirm your answers are still true, and a Civics/English test. You must answer 6 out of 10 civics questions correctly to pass."
                },
                {
                    heading: "Interactive Civics Flashcards",
                    content: "Test yourself right now! Click the cards below to see the answers. These are taken directly from the official 100-question pool.",
                    component: <FlashcardDeck language={language} />
                },
                {
                    heading: "The English Test",
                    content: "You will also need to demonstrate basic ability to read, write, and speak English. The officer will ask you to read one sentence and write one sentence. The sentences are simple, usually focusing on civics topics (e.g., 'Washington was the first President')."
                },
                {
                    heading: "N-400 Application Review",
                    content: "Don't just study history! Most of the interview is actually reviewing your application. They will ask about your trips outside the U.S., your marital history, and 'Yes/No' questions about your moral character (taxes, crimes, etc.). Be honest and consistent."
                }
            ],
            cta: {
                title: "Need Application Help?",
                text: "We review N-400 applications to ensure no red flags before you file.",
                button: "Citizenship Review"
            }
        },
        ar: {
            slug: "naturalization-interview-questions",
            title: "مركز التحضير لمقابلة الجنسية",
            subtitle: "أتقن اختبار التربية المدنية باستخدام أدوات التدريب لدينا",
            metaTitle: "أسئلة مقابلة التجنس | التحضير لاختبار الجنسية 2026",
            metaDescription: "ادرس لمقابلة الجنسية الأمريكية باستخدام بطاقاتنا التعليمية التفاعلية. يغطي أسئلة التربية المدنية الشائعة ونصائح مقابلة N-400.",
            keywords: "أسئلة مقابلة الجنسية, التحضير لاختبار التجنس, بطاقات اختبار التربية المدنية, دليل مقابلة N-400",
            category: "الجنسية",
            location: "سان دييغو",
            date: "٢ يناير ٢٠٢٦",
            readTime: "١٥ دقيقة قراءة",
            author: "خدمات سوكال للهجرة",
            locationIntro: "نجهز مواطني المستقبل في سان دييغو لمقابلاتهم في المبنى الفيدرالي بوسط المدينة.",

            sections: [
                {
                    heading: "الخطوة الأخيرة نحو الجنسية",
                    content: "تعد مقابلة التجنس العقبة الرئيسية الأخيرة. تتكون من جزأين: مراجعة طلب N-400 الخاص بك لتأكيد أن إجاباتك لا تزال صحيحة، واختبار المدنية/الإنجليزية. يجب عليك الإجابة على 6 من أصل 10 أسئلة مدنية بشكل صحيح للنجاح."
                },
                {
                    heading: "بطاقات تعليمية تفاعلية للمدنية",
                    content: "اختبر نفسك الآن! انقر فوق البطاقات أدناه لرؤية الإجابات. هذه مأخوذة مباشرة من مجموعة الأسئلة الرسمية المكونة من 100 سؤال.",
                    component: <FlashcardDeck language={language} />
                },
                {
                    heading: "اختبار اللغة الإنجليزية",
                    content: "ستحتاج أيضاً إلى إظهار القدرة الأساسية على قراءة وكتابة وتحدث اللغة الإنجليزية. سيطلب منك الضابط قراءة جملة واحدة وكتابة جملة واحدة. الجمل بسيطة، وعادة ما تركز على موضوعات مدنية (على سبيل المثال، 'كان واشنطن أول رئيس')."
                },
                {
                    heading: "مراجعة طلب N-400",
                    content: "لا تدرس التاريخ فقط! معظم المقابلة في الواقع هي مراجعة طلبك. سيسألون عن رحلاتك خارج الولايات المتحدة، وتاريخك الزوجي، وأسئلة 'نعم/لا' حول شخصيتك الأخلاقية (الضرائب، الجرائم، إلخ). كن صادقاً ومتسقاً."
                }
            ],
            cta: {
                title: "تحتاج مساعدة في الطلب؟",
                text: "نراجع طلبات N-400 لضمان عدم وجود أي إشارات حمراء قبل التقديم.",
                button: "مراجعة الجنسية"
            }
        }
    };

    return <BlogPostTemplate content={content} language={language} />;
};

export default CitizenshipPrep;
