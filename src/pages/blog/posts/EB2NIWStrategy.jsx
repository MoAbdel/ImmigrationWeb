import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';
import EligibilityQuiz from '../../../components/blog/widgets/EligibilityQuiz';

const EB2NIWStrategy = ({ language }) => {
    const content = {
        en: {
            slug: "eb2-niw-strategy-guide",
            title: "The EB-2 NIW Strategy Guide: Green Card Without a Job Offer",
            subtitle: "How professionals can bypass the labor certification process in 2026",
            metaTitle: "EB-2 NIW Strategy Guide 2026 | National Interest Waiver Requirements",
            metaDescription: "Identify if you qualify for the EB-2 National Interest Waiver (NIW) with our interactive eligibility quiz. Learn the strict 2026 requirements.",
            keywords: "EB-2 NIW, National Interest Waiver, Green Card without employer, NIW requirements 2026",
            category: "Employment Immigration",
            location: "Westminster",
            date: "January 6, 2026",
            readTime: "12 min read",
            author: "SoCal Immigration Services",
            locationIntro: "Based in Westminster, we help professionals across Southern California leverage their advanced degrees for permanent residency.",

            sections: [
                {
                    heading: "What is the National Interest Waiver?",
                    content: "The EB-2 National Interest Waiver (NIW) is one of the most powerful tools in U.S. immigration. It allows highly qualified individuals to skip the requirement of having a specific job offer and a labor certification. Basically, you are asking the government to waive these requirements because your work is so important to the United States that it would be detrimental to delay your entry."
                },
                {
                    heading: "Interactive Eligibility Check",
                    content: "Are you a good candidate? Take our quick assessment below to see if you meet the baseline criteria established by the Matter of Dhanasar precedent.",
                    component: <EligibilityQuiz language={language} />
                },
                {
                    heading: "The Three Prongs of Matter of Dhanasar",
                    content: "To win an NIW case, you must satisfy all three 'prongs' established by the Administrative Appeals Office:",
                    list: [
                        "1. The proposed endeavor must have substantial merit and national importance.",
                        "2. You must be well-positioned to advance the proposed endeavor.",
                        "3. On balance, it must be beneficial to the U.S. to waive the job offer and labor certification requirements."
                    ]
                },
                {
                    heading: "Documentation Strategy",
                    content: "Success lies in the evidence. A strong petition includes:",
                    list: [
                        "Advanced Degree (Master's or higher) OR Bachelor's + 5 years progressive experience",
                        "Expert Opinion Letters (independent peers in your field)",
                        "Citation record (for researchers) or commercial contracts (for entrepreneurs)",
                        "Detailed business plan or research proposal"
                    ]
                }
            ],
            cta: {
                title: "Ready to Build Your Case?",
                text: "Don't guess at your eligibility. Schedule a consultation to review your CV and specific situation.",
                button: "Book NIW Consultation"
            }
        },
        ar: {
            slug: "eb2-niw-strategy-guide",
            title: "دليل استراتيجية EB-2 NIW: الجرين كارد بدون عرض عمل",
            subtitle: "كيف يمكن للمهنيين تجاوز عملية شهادة العمل في 2026",
            metaTitle: "دليل استراتيجية EB-2 NIW 2026 | متطلبات الإعفاء من المصلحة الوطنية",
            metaDescription: "تحقق مما إذا كنت مؤهلاً للحصول على الإعفاء من المصلحة الوطنية EB-2 (NIW) من خلال اختبار الأهلية التفاعلي. تعرف على المتطلبات الصارمة لعام 2026.",
            keywords: "EB-2 NIW, الإعفاء من المصلحة الوطنية, جرين كارد بدون صاحب عمل, متطلبات NIW 2026",
            category: "هجرة العمل",
            location: "ويستمنستر",
            date: "٦ يناير ٢٠٢٦",
            readTime: "١٢ دقيقة قراءة",
            author: "خدمات سوكال للهجرة",
            locationIntro: "من مقرنا في ويستمنستر، نساعد المهنيين في جميع أنحاء جنوب كاليفورنيا على الاستفادة من درجاتهم المتقدمة للحصول على الإقامة الدائمة.",

            sections: [
                {
                    heading: "ما هو الإعفاء من المصلحة الوطنية (NIW)؟",
                    content: "يعد الإعفاء من المصلحة الوطنية EB-2 (NIW) أحد أقوى الأدوات في الهجرة الأمريكية. يسمح للأفراد المؤهلين تأهيلاً عالياً بتخطي شرط وجود عرض عمل محدد وشهادة العمل. في الأساس، أنت تطلب من الحكومة التنازل عن هذه المتطلبات لأن عملك مهم جداً للولايات المتحدة لدرجة أنه سيكون من الضار تأخير دخولك."
                },
                {
                    heading: "فحص الأهلية التفاعلي",
                    content: "هل أنت مرشح جيد؟ قم بإجراء تقييمنا السريع أدناه لمعرفة ما إذا كنت تستوفي المعايير الأساسية التي وضعتها سابقة 'قضية داناسار'.",
                    component: <EligibilityQuiz language={language} />
                },
                {
                    heading: "الأركان الثلاثة لقضية داناسار",
                    content: "للفوز بقضية NIW، يجب عليك استيفاء جميع 'الأركان' الثلاثة التي وضعها مكتب استئناف الإدارة:",
                    list: [
                        "١. يجب أن يكون للمسعى المقترح جدارة جوهرية وأهمية وطنية.",
                        "٢. يجب أن تكون في وضع جيد لتعزيز المسعى المقترح.",
                        "٣. عند الموازنة، يجب أن يكون من المفيد للولايات المتحدة التنازل عن متطلبات عرض العمل وشهادة العمل."
                    ]
                },
                {
                    heading: "استراتيجية التوثيق",
                    content: "النجاح يكمن في الأدلة. يتضمن الطلب القوي ما يلي:",
                    list: [
                        "درجة متقدمة (ماجستير أو أعلى) أو بكالوريوس + ٥ سنوات خبرة تقدمية",
                        "رسائل رأي الخبراء (أقران مستقلون في مجالك)",
                        "سجل الاستشهادات (للباحثين) أو العقود التجارية (لرواد الأعمال)",
                        "خطة عمل مفصلة أو مقترح بحثي"
                    ]
                }
            ],
            cta: {
                title: "مستعد لبناء قضيتك؟",
                text: "لا تخمن أهليتك. حدد موعداً لاستشارة لمراجعة سيرتك الذاتية ووضعك الخاص.",
                button: "حجز استشارة NIW"
            }
        }
    };

    return <BlogPostTemplate content={content} language={language} />;
};

export default EB2NIWStrategy;
