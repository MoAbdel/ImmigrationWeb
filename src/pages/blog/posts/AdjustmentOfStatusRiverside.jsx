import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const AdjustmentOfStatusRiverside = ({ language }) => {
  const content = {
    en: {
      slug: "adjustment-of-status-riverside",
      title: "Adjustment of Status in Riverside: Green Card Application for Arab Families",
      subtitle: "Apply for your green card from within the U.S. in Riverside and Inland Empire",
      metaTitle: "Adjustment of Status Riverside | I-485 Green Card Inland Empire",
      metaDescription: "Adjustment of status help in Riverside. I-485 application, document preparation. Arabic support. Call (714) 421-8872.",
      keywords: "adjustment of status Riverside, I-485 Inland Empire, green card application, Arab immigration services",
      category: "Green Card & Status",
      location: "Riverside",
      date: "December 28, 2025",
      readTime: "9 min read",
      author: "Immigration Solution Services",
      locationIntro: "Riverside families seeking to adjust their status to permanent resident can do so without leaving the United States. Form I-485 allows eligible immigrants in the Inland Empire to apply for their green cards from within America.",

      sections: [
        {
          heading: "What is Adjustment of Status?",
          content: "Adjustment of Status (AOS) is the process of applying for lawful permanent residence (green card) while physically present in the United States. This is different from consular processing, which requires an interview abroad."
        },
        {
          heading: "Who Can Adjust Status?",
          list: [
            "Immediate relatives of U.S. citizens (spouse, parent, child under 21)",
            "Family preference beneficiaries with current priority dates",
            "Employment-based beneficiaries with current priority dates",
            "Refugees and asylees (one year after status granted)",
            "Diversity lottery winners",
            "Certain other special categories"
          ]
        },
        {
          heading: "Benefits of Adjusting Status",
          list: [
            "Stay in the United States during processing",
            "Apply for work authorization (EAD) while waiting",
            "Apply for travel authorization (Advance Parole)",
            "Interview at local USCIS office instead of embassy abroad",
            "Continue working if already employed"
          ]
        },
        {
          heading: "Required Documents",
          list: [
            "Form I-485, Application to Register Permanent Residence",
            "Form I-130 (if family-based) or I-140 approval (employment)",
            "Birth certificate",
            "Passport and visa documents",
            "I-94 arrival record",
            "Medical exam (I-693)",
            "Photos",
            "Affidavit of Support (I-864)"
          ]
        },
        {
          heading: "Processing Times",
          table: {
            headers: ["Category", "Timeline"],
            rows: [
              ["Immediate Relative", "12-24 months"],
              ["Family Preference", "Varies by priority date"],
              ["Employment-Based", "12-24 months after priority current"],
              ["Asylee/Refugee", "8-14 months"]
            ]
          }
        }
      ],

      faqs: [
        { q: "Can I travel while I-485 is pending?", a: "Only with approved Advance Parole (I-131). Leaving without it may abandon your application." },
        { q: "Can I work while waiting?", a: "Yes, with approved Employment Authorization Document (EAD)." },
        { q: "What if my visa expired?", a: "Immediate relatives of U.S. citizens may still adjust. Others need legal status." }
      ],

      cta: {
        title: "Ready to Adjust Your Status?",
        text: "Let us help you apply for your green card from Riverside.",
        button: "Schedule Consultation"
      }
    },
    ar: {
      slug: "adjustment-of-status-riverside",
      title: "تعديل الوضع في ريفرسايد: طلب البطاقة الخضراء للعائلات العربية",
      subtitle: "قدم طلب بطاقتك الخضراء من داخل الولايات المتحدة في ريفرسايد وإنلاند إمباير",
      metaTitle: "تعديل الوضع ريفرسايد | طلب البطاقة الخضراء I-485 إنلاند إمباير",
      metaDescription: "مساعدة تعديل الوضع في ريفرسايد. طلب I-485، إعداد الوثائق. دعم بالعربية. اتصل (714) 421-8872.",
      keywords: "تعديل الوضع ريفرسايد، I-485 إنلاند إمباير، طلب البطاقة الخضراء، خدمات الهجرة العربية",
      category: "البطاقة الخضراء والوضع",
      location: "ريفرسايد",
      date: "28 ديسمبر 2025",
      readTime: "9 دقائق قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "يمكن لعائلات ريفرسايد التي تسعى لتعديل وضعها إلى مقيم دائم القيام بذلك دون مغادرة الولايات المتحدة. يسمح نموذج I-485 للمهاجرين المؤهلين في إنلاند إمباير بالتقدم لبطاقاتهم الخضراء من داخل أمريكا.",

      sections: [
        {
          heading: "ما هو تعديل الوضع؟",
          content: "تعديل الوضع (AOS) هو عملية التقدم للإقامة الدائمة القانونية (البطاقة الخضراء) أثناء التواجد الفعلي في الولايات المتحدة. هذا يختلف عن المعالجة القنصلية التي تتطلب مقابلة في الخارج."
        },
        {
          heading: "من يمكنه تعديل الوضع؟",
          list: [
            "الأقارب المباشرون للمواطنين الأمريكيين (الزوج، الوالد، الطفل تحت 21)",
            "المستفيدون من أفضليات العائلة مع تواريخ أولوية حالية",
            "المستفيدون القائمون على التوظيف مع تواريخ أولوية حالية",
            "اللاجئون واللاجئون السياسيون (سنة واحدة بعد منح الوضع)",
            "الفائزون بقرعة التنوع",
            "فئات خاصة معينة أخرى"
          ]
        },
        {
          heading: "فوائد تعديل الوضع",
          list: [
            "البقاء في الولايات المتحدة أثناء المعالجة",
            "التقدم لتصريح العمل (EAD) أثناء الانتظار",
            "التقدم لتصريح السفر (الإفراج المسبق)",
            "المقابلة في مكتب USCIS المحلي بدلاً من السفارة في الخارج",
            "الاستمرار في العمل إذا كنت موظفاً بالفعل"
          ]
        },
        {
          heading: "الوثائق المطلوبة",
          list: [
            "نموذج I-485، طلب تسجيل الإقامة الدائمة",
            "نموذج I-130 (إذا قائم على العائلة) أو موافقة I-140 (التوظيف)",
            "شهادة الميلاد",
            "جواز السفر ووثائق التأشيرة",
            "سجل الوصول I-94",
            "الفحص الطبي (I-693)",
            "الصور",
            "الكفالة المالية (I-864)"
          ]
        },
        {
          heading: "أوقات المعالجة",
          table: {
            headers: ["الفئة", "الجدول الزمني"],
            rows: [
              ["القريب المباشر", "12-24 شهراً"],
              ["أفضلية العائلة", "يختلف حسب تاريخ الأولوية"],
              ["قائم على التوظيف", "12-24 شهراً بعد أن يصبح تاريخ الأولوية حالياً"],
              ["لاجئ/لاجئ سياسي", "8-14 شهراً"]
            ]
          }
        }
      ],

      faqs: [
        { q: "هل يمكنني السفر أثناء انتظار I-485؟", a: "فقط مع الإفراج المسبق المعتمد (I-131). المغادرة بدونه قد يعني التخلي عن طلبك." },
        { q: "هل يمكنني العمل أثناء الانتظار؟", a: "نعم، مع وثيقة تصريح العمل المعتمدة (EAD)." },
        { q: "ماذا لو انتهت صلاحية تأشيرتي؟", a: "الأقارب المباشرون للمواطنين الأمريكيين قد يظلون يعدلون. الآخرون يحتاجون وضعاً قانونياً." }
      ],

      cta: {
        title: "مستعد لتعديل وضعك؟",
        text: "دعنا نساعدك في التقدم لبطاقتك الخضراء من ريفرسايد.",
        button: "حجز استشارة"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default AdjustmentOfStatusRiverside;
