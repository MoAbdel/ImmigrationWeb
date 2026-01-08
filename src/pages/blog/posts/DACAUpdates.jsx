import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';
import NewsTicker from '../../../components/blog/widgets/NewsTicker';

const DACAUpdates = ({ language }) => {
    const content = {
        en: {
            slug: "daca-renewal-news-2026",
            title: "DACA Status & Updates 2026",
            subtitle: "Stay informed on Deferred Action for Childhood Arrivals",
            metaTitle: "DACA Renewal News 2026 | Latest USCIS Updates",
            metaDescription: "Latest news on DACA renewals, fees, and court rulings for 2026. Keep your status protected with SoCal Immigration Services.",
            keywords: "DACA news 2026, DACA renewal fee, Deferred Action updates, Dreamer immigration help",
            category: "Humanitarian",
            location: "Riverside",
            date: "January 3, 2026",
            readTime: "6 min read",
            author: "SoCal Immigration Services",
            locationIntro: "We support Dreamers across Riverside and the Inland Empire in maintaining their protected status and work authorization.",

            sections: [
                {
                    heading: "Current Status Dashboard",
                    content: "The legal landscape for DACA allows for renewals but blocks new INITIAL applications. Here is the latest emerging news:",
                    component: <NewsTicker language={language} />
                },
                {
                    heading: "Renewal Guidelines for 2026",
                    content: "If you currently hold DACA, you must continue to renew it every two years. USCIS generally recommends filing for renewal 120 to 150 days before your current DACA status expires. Filing too early can lead to rejection, and filing too late risks a gap in your employment authorization."
                },
                {
                    heading: "Advance Parole for DACA",
                    content: "DACA recipients CAN travel abroad if they obtain Advance Parole mainly for educational, employment, or humanitarian reasons. This is a critical strategic move, as re-entering with Advance Parole provides a 'lawful entry,' which can be vital for future green card adjustments."
                },
                {
                    heading: "What If My DACA Expired?",
                    content: "If your DACA expired less than one year ago, you can still file a renewal request. If it expired more than one year ago, you would be treated as a new applicant, which is currently blocked by court order. Do not let your status lapse!"
                }
            ],
            cta: {
                title: "Time to Renew?",
                text: "We expertly prepare DACA renewal packages to ensure no delays in your work permit.",
                button: "Renew DACA Now"
            }
        },
        ar: {
            slug: "daca-renewal-news-2026",
            title: "وضع وتحديثات DACA لعام 2026",
            subtitle: "ابق على اطلاع بشأن الإجراء المؤجل للقادمين في مرحلة الطفولة",
            metaTitle: "أخبار تجديد DACA 2026 | آخر تحديثات USCIS",
            metaDescription: "آخر الأخبار حول تجديدات DACA والرسوم والأحكام القضائية لعام 2026. حافظ على حماية وضعك مع خدمات سوكال للهجرة.",
            keywords: "أخبار DACA 2026, رسوم تجديد DACA, تحديثات الإجراء المؤجل, مساعدة هجرة الحالمين",
            category: "إنساني",
            location: "ريفرسايد",
            date: "٣ يناير ٢٠٢٦",
            readTime: "٦ دقائق قراءة",
            author: "خدمات سوكال للهجرة",
            locationIntro: "ندعم الحالمين في جميع أنحاء ريفرسايد وإينلاند إمباير في الحفاظ على وضعهم المحمي وتصريح العمل.",

            sections: [
                {
                    heading: "لوحة الحالة الحالية",
                    content: "يسمح المشهد القانوني لـ DACA بالتجديدات ولكنه يحظر الطلبات الأولية الجديدة. إليك آخر الأخبار العاجلة:",
                    component: <NewsTicker language={language} />
                },
                {
                    heading: "إرشادات التجديد لعام 2026",
                    content: "إذا كنت تحمل DACA حالياً، يجب عليك الاستمرار في تجديده كل عامين. توصي USCIS عموماً بتقديم طلب التجديد قبل 120 إلى 150 يوماً من انتهاء صلاحية وضع DACA الحالي. التقديم المبكر جداً قد يؤدي إلى الرفض، والتقديم المتأخر جداً يخاطر بوجود فجوة في تصريح عملك."
                },
                {
                    heading: "الإفراج المسبق لـ DACA",
                    content: "يمكن لمستلمي DACA السفر إلى الخارج إذا حصلوا على إفراج مسبق (Advance Parole) بشكل أساسي لأسباب تعليمية أو وظيفية أو إنسانية. هذه خطوة استراتيجية حاسمة، حيث أن إعادة الدخول بإفراج مسبق توفر 'دخولاً قانونياً'، والذي يمكن أن يكون حيوياً لتعديلات الجرين كارد المستقبلية."
                },
                {
                    heading: "ماذا لو انتهت صلاحية DACA الخاصة بي؟",
                    content: "إذا انتهت صلاحية DACA الخاصة بك منذ أقل من عام، لا يزال بإمكانك تقديم طلب تجديد. إذا انتهت منذ أكثر من عام، فسيتم معاملتك كمقدم طلب جديد، وهو أمر محظور حالياً بأمر المحكمة. لا تدع وضعك ينتهي!"
                }
            ],
            cta: {
                title: "حان وقت التجديد؟",
                text: "نقوم بإعداد حزم تجديد DACA بخبرة لضمان عدم وجود تأخير في تصريح عملك.",
                button: "تجديد DACA الآن"
            }
        }
    };

    return <BlogPostTemplate content={content} language={language} />;
};

export default DACAUpdates;
