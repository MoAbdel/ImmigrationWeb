import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';
import InvestmentComparisonTable from '../../../components/blog/widgets/InvestmentComparisonTable';

const InvestmentVisas = ({ language }) => {
    const content = {
        en: {
            slug: "investor-visa-usa-comparison",
            title: "Investment Visas: E-2 vs. EB-5",
            subtitle: "Navigating the path for investors and entrepreneurs",
            metaTitle: "Investor Visa USA Comparison | E-2 vs EB-5 Requirements",
            metaDescription: "Complete breakdown of E-2 Treaty Investor vs EB-5 Immigrant Investor visas. Compare investment amounts, processing times, and green card paths.",
            keywords: "E-2 visa requirements, EB-5 minimum investment, investor visa USA, business immigration",
            category: "Investment Immigration",
            location: "Anaheim",
            date: "January 4, 2026",
            readTime: "11 min read",
            author: "SoCal Immigration Services",
            locationIntro: "Serving international investors in Anaheim and Orange County, we clarify the complex financial requirements of U.S. immigration.",

            sections: [
                {
                    heading: "Two Paths for Capital Investment",
                    content: "The U.S. offers two primary visa categories for individuals looking to invest capital in American businesses. The E-2 is a non-immigrant visa based on treaties, while the EB-5 is a direct path to permanent residency (Green Card)."
                },
                {
                    heading: "Feature Breakdown",
                    content: "Review the table below to quickly identify which visa aligns with your capital availability and long-term goals.",
                    component: <InvestmentComparisonTable language={language} />
                },
                {
                    heading: "The E-2 Advantage: Speed and Flexibility",
                    content: "For citizens of treaty countries (matches include Jordan, Egypt, Morocco, etc.), the E-2 is faster and requires less capital. You can start a smaller business, like a consultancy or franchise, with $100,000-$150,000. The downside: It does not directly lead to a Green Card. You must renew it, and your children age out at 21."
                },
                {
                    heading: "The EB-5 Gold Standard: Valid for Everyone",
                    content: "The EB-5 is open to citizens of all countries. It requires a significant investment ($800,000 in a Targeted Employment Area or $1.05 Million elsewhere). However, it grants you, your spouse, and children under 21 unconditional Green Cards."
                }
            ],
            cta: {
                title: "Discuss Your Investment Strategy",
                text: "Whether you're buying a franchise or funding a major development, we ensure your paperwork meets strict USCIS standards.",
                button: "Investor Consultation"
            }
        },
        ar: {
            slug: "investor-visa-usa-comparison",
            title: "تأشيرات الاستثمار: E-2 مقابل EB-5",
            subtitle: "التنقل في المسار للمستثمرين ورواد الأعمال",
            metaTitle: "مقارنة فيزا المستثمر أمريكا | متطلبات E-2 مقابل EB-5",
            metaDescription: "تحليل كامل لتأشيرات مستثمر المعاهدة E-2 مقابل المستثمر المهاجر EB-5. قارن مبالغ الاستثمار، أوقات المعالجة، ومسارات الجرين كارد.",
            keywords: "متطلبات فيزا E-2, الحد الأدنى لاستثمار EB-5, فيزا المستثمر أمريكا, هجرة الأعمال",
            category: "هجرة الاستثمار",
            location: "أناهايم",
            date: "٤ يناير ٢٠٢٦",
            readTime: "١١ دقيقة قراءة",
            author: "خدمات سوكال للهجرة",
            locationIntro: "نخدم المستثمرين الدوليين في أناهايم ومقاطعة أورانج، ونوضح المتطلبات المالية المعقدة للهجرة الأمريكية.",

            sections: [
                {
                    heading: "مساران لاستثمار رأس المال",
                    content: "تقدم الولايات المتحدة فئتين رئيسيتين للتأشيرات للأفراد الذين يتطلعون إلى استثمار رؤوس الأموال في الشركات الأمريكية. E-2 هي تأشيرة لغير المهاجرين تعتمد على المعاهدات، بينما EB-5 هي طريق مباشر للإقامة الدائمة (الجرين كارد)."
                },
                {
                    heading: "تفصيل الميزات",
                    content: "راجع الجدول أدناه لتحديد التأشيرة التي تتوافق مع توفر رأس المال وأهدافك طويلة المدى بسرعة.",
                    component: <InvestmentComparisonTable language={language} />
                },
                {
                    heading: "ميزة E-2: السرعة والمرونة",
                    content: "لمواطني دول المعاهدة (تشمل الأردن، مصر، المغرب، إلخ)، تعتبر E-2 أسرع وتتطلب رأس مال أقل. يمكنك بدء عمل تجاري أصغر، مثل استشارات أو امتياز تجاري، بمبلغ 100,000 - 150,000 دولار. الجانب السلبي: لا تؤدي مباشرة إلى جرين كارد. يجب عليك تجديدها، ويفقد أطفالك الأهلية عند سن 21."
                },
                {
                    heading: "المعيار الذهبي EB-5: متاح للجميع",
                    content: "تأشيرة EB-5 مفتوحة لمواطني جميع الدول. تتطلب استثماراً كبيراً (800,000 دولار في منطقة توظيف مستهدفة أو 1.05 مليون دولار في مكان آخر). ومع ذلك، فهي تمنحك أنت وزوجتك وأطفالك تحت سن 21 بطاقات خضراء غير مشروطة."
                }
            ],
            cta: {
                title: "ناقش استراتيجية استثمارك",
                text: "سواء كنت تشتري امتيازاً تجارياً أو تمول تطويراً كبيراً، نضمن أن أوراقك تلبي معايير USCIS الصارمة.",
                button: "استشارة مستثمر"
            }
        }
    };

    return <BlogPostTemplate content={content} language={language} />;
};

export default InvestmentVisas;
