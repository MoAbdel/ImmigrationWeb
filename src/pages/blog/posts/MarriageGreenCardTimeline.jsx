import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';
import GanttChartTimeline from '../../../components/blog/widgets/GanttChartTimeline';

const MarriageGreenCardTimeline = ({ language }) => {
    const content = {
        en: {
            slug: "marriage-green-card-timeline-2026",
            title: "Marriage Green Card Timeline 2026: Month-by-Month Guide",
            subtitle: "Realistic expectations for spousal visas in the current year",
            metaTitle: "Spouse Visa Processing Time 2026 | Marriage Green Card Timeline",
            metaDescription: "See our interactive 2026 timeline for marriage green cards. Visualize each step from I-130 petition to interview.",
            keywords: "marriage green card timeline, spouse visa processing time 2026, CR1 visa wait time, IR1 visa timeline",
            category: "Family Immigration",
            location: "Irvine",
            date: "January 7, 2026",
            readTime: "10 min read",
            author: "SoCal Immigration Services",
            locationIntro: "Serving couples across Irvine and Orange County, we help navigate the often lengthy spousal visa process.",

            sections: [
                {
                    heading: "Understanding the Wait",
                    content: "One of the most common questions we get is 'How long will it take?' The answer depends on several factors, including whether the sponsor is a U.S. Citizen or Green Card holder, and the current workload of USCIS field offices."
                },
                {
                    heading: "2026 Processing Timeline Visualization",
                    content: "We've broken down the current average processing times for a U.S. Citizen sponsoring a spouse currently living abroad (Consular Processing).",
                    component: <GanttChartTimeline language={language} />
                },
                {
                    heading: "Stage 1: USCIS Processing (I-130)",
                    content: "This is often the longest wait. Your petition goes to a service center. Currently, the Potomac, Texas, and California Service Centers are handling the bulk of these petitions. Approval takes roughly 12-14 months."
                },
                {
                    heading: "Stage 2: NVC Processing",
                    content: "Once approved, your case moves to the National Visa Center. You will need to submit financial documents (Affidavit of Support) and the DS-260 application. If you are prepared, this stage can be quick (2-4 months)."
                },
                {
                    heading: "Stage 3: Consulate Interview",
                    content: "The final hurdle. The wait time here depends heavily on the specific U.S. embassy or consulate in your spouse's country. Busy posts like Juarez or Cairo may have longer backlogs."
                }
            ],
            cta: {
                title: "Start Your Journey Today",
                text: "Time is valuable. The sooner you file, the sooner you reunite. Let us help you prepare a perfect application.",
                button: "Start Application"
            }
        },
        ar: {
            slug: "marriage-green-card-timeline-2026",
            title: "الجدول الزمني للبطاقة الخضراء عبر الزواج 2026: دليل شهر بشهر",
            subtitle: "توقعات واقعية لتأشيرات الزوج/الزوجة في العام الحالي",
            metaTitle: "مدة معالجة فيزا الزواج 2026 | الجدول الزمني للجرين كارد",
            metaDescription: "شاهد جدولنا الزمني التفاعلي لعام 2026 لبطاقات الجرين كارد عبر الزواج. تصور كل خطوة من عريضة I-130 إلى المقابلة.",
            keywords: "الجدول الزمني للجرين كارد, مدة معالجة فيزا الزوج 2026, وقت انتظار CR1, جدول زمني IR1",
            category: "هجرة العائلة",
            location: "إرفاين",
            date: "٧ يناير ٢٠٢٦",
            readTime: "١٠ دقائق قراءة",
            author: "خدمات سوكال للهجرة",
            locationIntro: "نخدم الأزواج في جميع أنحاء إرفاين ومقاطعة أورانج، ونساعد في التنقل عبر عملية تأشيرة الزوج التي غالباً ما تكون طويلة.",

            sections: [
                {
                    heading: "فهم الانتظار",
                    content: "أحد أكثر الأسئلة شيوعاً التي نتلقاها هو 'كم من الوقت سيستغرق الأمر؟' تعتمد الإجابة على عدة عوامل، بما في ذلك ما إذا كان الكفيل مواطناً أمريكياً أو حامل بطاقة خضراء، وعبء العمل الحالي لمكاتب USCIS."
                },
                {
                    heading: "تصور الجدول الزمني للمالجة في 2026",
                    content: "لقد قمنا بتفصيل متوسط أوقات المعالجة الحالية لمواطن أمريكي يكفل زوجاً يعيش حالياً في الخارج (المعالجة القنصلية).",
                    component: <GanttChartTimeline language={language} />
                },
                {
                    heading: "المرحلة ١: معالجة USCIS (I-130)",
                    content: "غالباً ما يكون هذا أطول انتظار. تذهب عريضتك إلى مركز خدمة. حالياً، تتعامل مراكز خدمة بوتوماك وتكساس وكاليفورنيا مع الجزء الأكبر من هذه العرائض. تستغرق الموافقة تقريباً 12-14 شهراً."
                },
                {
                    heading: "المرحلة ٢: معالجة NVC",
                    content: "بمجرد الموافقة، تنتقل قضيتك إلى مركز التأشيرات الوطني. ستحتاج إلى تقديم المستندات المالية (كفالة الدعم) وطلب DS-260. إذا كنت مستعداً، يمكن أن تكون هذه المرحلة سريعة (2-4 أشهر)."
                },
                {
                    heading: "المرحلة ٣: مقابلة القنصلية",
                    content: "العقبة الأخيرة. يعتمد وقت الانتظار هنا بشكل كبير على السفارة أو القنصلية الأمريكية المحددة في بلد زوجك. قد يكون للمراكز المزدحمة مثل خواريز أو القاهرة تراكمات أطول."
                }
            ],
            cta: {
                title: "ابدأ رحلتك اليوم",
                text: "الوقت ثمين. كلما قدمت أسرع، كلما اجتمعتما أسرع. دعنا نساعدك في إعداد طلب مثالي.",
                button: "بدء الطلب"
            }
        }
    };

    return <BlogPostTemplate content={content} language={language} />;
};

export default MarriageGreenCardTimeline;
