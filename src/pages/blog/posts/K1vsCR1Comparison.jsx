import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';
import VisaSelector from '../../../components/blog/widgets/VisaSelector';

const K1vsCR1Comparison = ({ language }) => {
    const content = {
        en: {
            slug: "k1-vs-cr1-visa-pros-and-cons",
            title: "Fiancé (K-1) vs. Spouse (CR-1) Visa: The Ultimate Battle",
            subtitle: "Unsure whether to marry now or later? Use our decision tool.",
            metaTitle: "K1 vs CR1 Visa Pros and Cons | Spousal Visa Guide 2026",
            metaDescription: "Decide between the K-1 Fiancé Visa and CR-1 Spouse Visa. Compare speed, cost, and work authorization benefits.",
            keywords: "K-1 vs CR-1, fiancé visa vs spouse visa, immigration speed vs cost, marriage visa options",
            category: "Family Immigration",
            location: "Los Angeles",
            date: "January 1, 2026",
            readTime: "8 min read",
            author: "SoCal Immigration Services",
            locationIntro: "Helping couples in Los Angeles choose the right path for their international love stories.",

            sections: [
                {
                    heading: "The Big Decision: Marriage Location",
                    content: "The fundamental difference comes down to where you get married. If you want to marry in the U.S., you need a K-1 Fiancé Visa. If you marry abroad (in your partner's country or a third country) and then apply, you are seeking a CR-1 Spousal Visa."
                },
                {
                    heading: "Interactive Decision Tool",
                    content: "What matters most to you right now? Select your priority below to see our recommendation.",
                    component: <VisaSelector language={language} />
                },
                {
                    heading: "The K-1 Fiancé Visa Explained",
                    content: "The K-1 allows your fiancé to enter the U.S. for 90 days, during which you MUST get married. After marriage, they must file for Adjustment of Status (Green Card), which is an additional expensive process. They cannot work or travel freely until that adjustment is processed (which takes months)."
                },
                {
                    heading: "The CR-1 Spousal Visa Explained",
                    content: "For the CR-1, you marry first, then file. The processing takes longer upfront, but when your spouse arrives, they step off the plane as a Permanent Resident. They get their Green Card almost immediately and can work from Day 1. It is 'one and done'."
                }
            ],
            cta: {
                title: "Let's Plan Your Union",
                text: "Whichever path you choose, we handle the paperwork so you can focus on the wedding.",
                button: "Couples Consultation"
            }
        },
        ar: {
            slug: "k1-vs-cr1-visa-pros-and-cons",
            title: "فيزا الخطيب (K-1) مقابل فيزا الزوج (CR-1): المعركة النهائية",
            subtitle: "غير متأكد ما إذا كنت تتزوج الآن أم لاحقاً؟ استخدم أداة القرار الخاصة بنا.",
            metaTitle: "إيجابيات وسلبيات فيزا K1 مقابل CR1 | دليل تأشيرة الزوج 2026",
            metaDescription: "قرر بين فيزا الخطيب K-1 وفيزا الزواج CR-1. قارن بين السرعة والتكلفة ومزايا تصريح العمل.",
            keywords: "K-1 مقابل CR-1, فيزا الخطيب مقابل فيزا الزوج, سرعة الهجرة مقابل التكلفة, خيارات فيزا الزواج",
            category: "هجرة العائلة",
            location: "لوس أنجلوس",
            date: "١ يناير ٢٠٢٦",
            readTime: "٨ دقائق قراءة",
            author: "خدمات سوكال للهجرة",
            locationIntro: "مساعدة الأزواج في لوس أنجلوس على اختيار المسار الصحيح لقصص حبهم الدولية.",

            sections: [
                {
                    heading: "القرار الكبير: مكان الزواج",
                    content: "الفرق الأساسي يتلخص في مكان الزواج. إذا كنت ترغب في الزواج في الولايات المتحدة، فأنت بحاجة إلى فيزا خطيب K-1. إذا تزوجت في الخارج (في بلد شريكك أو بلد ثالث) ثم قدمت الطلب، فأنت تسعى للحصول على فيزا زواج CR-1."
                },
                {
                    heading: "أداة القرار التفاعلية",
                    content: "ما الذي يهمك أكثر الآن؟ حدد أولويتك أدناه لرؤية توصيتنا.",
                    component: <VisaSelector language={language} />
                },
                {
                    heading: "شرح فيزا الخطيب K-1",
                    content: "تسمح K-1 لخطيبك بدخول الولايات المتحدة لمدة 90 يوماً، يجب خلالها عليكما الزواج. بعد الزواج، يجب عليهم تقديم طلب لتعديل الوضع (الجرين كارد)، وهي عملية إضافية مكلفة. لا يمكنهم العمل أو السفر بحرية حتى تتم معالجة هذا التعديل (الذي يستغرق شهوراً)."
                },
                {
                    heading: "شرح فيزا الزواج CR-1",
                    content: "بالنسبة لـ CR-1، تتزوج أولاً، ثم تقدم الطلب. تستغرق المعالجة وقتاً أطول مقدماً، ولكن عند وصول زوجك/زوجتك، ينزلون من الطائرة كمقيم دائم. يحصلون على الجرين كارد الخاص بهم فوراً تقريباً ويمكنهم العمل من اليوم الأول. إنها 'خطوة واحدة وانتهى الأمر'."
                }
            ],
            cta: {
                title: "دعنا نخطط لاتحادكما",
                text: "أيًّا كان المسار الذي تختارانه، نحن نتعامل مع الأوراق حتى تتمكنا من التركيز على حفل الزفاف.",
                button: "استشارة الأزواج"
            }
        }
    };

    return <BlogPostTemplate content={content} language={language} />;
};

export default K1vsCR1Comparison;
