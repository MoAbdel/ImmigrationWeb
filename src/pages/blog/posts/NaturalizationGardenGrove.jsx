import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const NaturalizationGardenGrove = ({ language }) => {
  const content = {
    en: {
      slug: "naturalization-citizenship-garden-grove",
      title: "Naturalization Services in Garden Grove: U.S. Citizenship for Arab Immigrants",
      subtitle: "Your path to American citizenship with Arabic-speaking support in Orange County",
      metaTitle: "Naturalization Garden Grove | U.S. Citizenship Arab Immigrants Orange County",
      metaDescription: "Complete naturalization help in Garden Grove. N-400 application, civics test prep, interview coaching in Arabic. Call (714) 421-8872.",
      keywords: "naturalization Garden Grove, citizenship Orange County, N-400 help, civics test Arabic, Arab citizenship services",
      category: "Citizenship",
      location: "Garden Grove",
      date: "December 28, 2025",
      readTime: "10 min read",
      author: "SoCal Immigration Services",
      locationIntro: "Garden Grove, home to our main office, serves as a central hub for Arab-Americans throughout Orange County seeking to become U.S. citizens. We provide comprehensive naturalization assistance with Arabic-speaking staff who understand your journey.",

      sections: [
        {
          heading: "Am I Eligible for U.S. Citizenship?",
          content: "To apply for naturalization through Form N-400, you generally must:",
          list: [
            "Be at least 18 years old",
            "Be a permanent resident (green card holder) for at least 5 years (or 3 years if married to U.S. citizen)",
            "Have lived in the U.S. for at least 30 months of the past 5 years",
            "Have lived in your state for at least 3 months",
            "Be able to read, write, and speak basic English",
            "Pass a civics test about U.S. history and government",
            "Be a person of good moral character"
          ]
        },
        {
          heading: "The Naturalization Process",
          steps: [
            { title: "File Form N-400", description: "Submit application with required documents and fee ($760)" },
            { title: "Biometrics Appointment", description: "Fingerprinting at a USCIS Application Support Center" },
            { title: "Citizenship Interview", description: "English test, civics test, and interview with USCIS officer" },
            { title: "Take Oath of Allegiance", description: "Attend naturalization ceremony and receive certificate" }
          ]
        },
        {
          heading: "The Civics Test",
          content: "You must answer 6 out of 10 civics questions correctly. Questions are drawn from 100 possible topics covering:\n\n• American Government (principles, system, rights)\n• American History (colonial, 1800s, recent)\n• Integrated Civics (geography, symbols, holidays)\n\nWe provide study materials in Arabic to help you prepare."
        },
        {
          heading: "English Test Exemptions",
          content: "Some applicants may be exempt from English requirements:",
          table: {
            headers: ["Age", "Years as Green Card Holder", "Exemption"],
            rows: [
              ["50+", "20+ years", "Exempt from English (test in Arabic)"],
              ["55+", "15+ years", "Exempt from English (test in Arabic)"],
              ["65+", "20+ years", "Simplified civics test (20 questions)"],
              ["Any age", "Medical condition", "N-648 disability waiver possible"]
            ]
          }
        },
        {
          heading: "Why Garden Grove Immigrants Choose Us",
          list: [
            "Convenient central location in Garden Grove",
            "Arabic-speaking staff for consultation",
            "Civics test preparation in Arabic",
            "Document review and organization",
            "Interview coaching and preparation",
            "Assistance with N-648 disability waivers"
          ]
        }
      ],

      faqs: [
        { q: "How long does naturalization take in Garden Grove?", a: "Currently 8-14 months from filing to oath ceremony." },
        { q: "Can I take the civics test in Arabic?", a: "If you qualify for an English exemption (50/20 or 55/15 rule), yes." },
        { q: "What if I fail the interview?", a: "You get a second attempt within 90 days. We offer re-interview preparation." },
        { q: "How much does citizenship cost?", a: "The N-400 filing fee is $760. Fee waivers available for low income." }
      ],

      cta: {
        title: "Ready to Become a U.S. Citizen?",
        text: "Visit our Garden Grove office for personalized naturalization assistance.",
        button: "Schedule Free Consultation"
      }
    },
    ar: {
      slug: "naturalization-citizenship-garden-grove",
      title: "خدمات التجنس في جاردن جروف: الجنسية الأمريكية للمهاجرين العرب",
      subtitle: "طريقك إلى الجنسية الأمريكية مع دعم بالعربية في مقاطعة أورانج",
      metaTitle: "التجنس جاردن جروف | الجنسية الأمريكية للمهاجرين العرب أورانج كاونتي",
      metaDescription: "مساعدة كاملة في التجنس في جاردن جروف. طلب N-400، التحضير لاختبار التربية المدنية، التدريب على المقابلة بالعربية. اتصل (714) 421-8872.",
      keywords: "التجنس جاردن جروف، الجنسية أورانج كاونتي، مساعدة N-400، اختبار التربية المدنية بالعربية",
      category: "الجنسية",
      location: "جاردن جروف",
      date: "28 ديسمبر 2025",
      readTime: "10 دقائق قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "جاردن جروف، موطن مكتبنا الرئيسي، تعمل كمركز رئيسي للأمريكيين العرب في جميع أنحاء مقاطعة أورانج الذين يسعون ليصبحوا مواطنين أمريكيين. نقدم مساعدة شاملة في التجنس مع فريق يتحدث العربية ويفهم رحلتك.",

      sections: [
        {
          heading: "هل أنا مؤهل للجنسية الأمريكية؟",
          content: "للتقدم للتجنس من خلال نموذج N-400، يجب عموماً أن:",
          list: [
            "يكون عمرك 18 سنة على الأقل",
            "تكون مقيماً دائماً (حامل بطاقة خضراء) لمدة 5 سنوات على الأقل (أو 3 سنوات إذا متزوج من مواطن أمريكي)",
            "تكون قد عشت في أمريكا لمدة 30 شهراً على الأقل من السنوات الخمس الماضية",
            "تكون قد عشت في ولايتك لمدة 3 أشهر على الأقل",
            "تكون قادراً على قراءة وكتابة والتحدث بالإنجليزية الأساسية",
            "تجتاز اختبار التربية المدنية حول التاريخ والحكومة الأمريكية",
            "تكون شخصاً ذا أخلاق حميدة"
          ]
        },
        {
          heading: "عملية التجنس",
          steps: [
            { title: "تقديم نموذج N-400", description: "قدم الطلب مع الوثائق المطلوبة والرسوم ($760)" },
            { title: "موعد البصمات", description: "أخذ البصمات في مركز دعم تطبيقات USCIS" },
            { title: "مقابلة الجنسية", description: "اختبار الإنجليزية، اختبار التربية المدنية، ومقابلة مع مسؤول USCIS" },
            { title: "أداء قسم الولاء", description: "حضور حفل التجنس واستلام الشهادة" }
          ]
        },
        {
          heading: "اختبار التربية المدنية",
          content: "يجب أن تجيب على 6 من 10 أسئلة تربية مدنية بشكل صحيح. الأسئلة مستمدة من 100 موضوع محتمل تغطي:\n\n• الحكومة الأمريكية (المبادئ، النظام، الحقوق)\n• التاريخ الأمريكي (الاستعماري، القرن التاسع عشر، الحديث)\n• التربية المدنية المتكاملة (الجغرافيا، الرموز، العطلات)\n\nنوفر مواد دراسية بالعربية لمساعدتك في التحضير."
        },
        {
          heading: "إعفاءات اختبار الإنجليزية",
          content: "بعض المتقدمين قد يُعفون من متطلبات الإنجليزية:",
          table: {
            headers: ["العمر", "سنوات كحامل بطاقة خضراء", "الإعفاء"],
            rows: [
              ["50+", "20+ سنة", "معفى من الإنجليزية (اختبار بالعربية)"],
              ["55+", "15+ سنة", "معفى من الإنجليزية (اختبار بالعربية)"],
              ["65+", "20+ سنة", "اختبار تربية مدنية مبسط (20 سؤالاً)"],
              ["أي عمر", "حالة طبية", "إعفاء الإعاقة N-648 ممكن"]
            ]
          }
        },
        {
          heading: "لماذا يختارنا مهاجرو جاردن جروف",
          list: [
            "موقع مركزي مريح في جاردن جروف",
            "فريق يتحدث العربية للاستشارة",
            "التحضير لاختبار التربية المدنية بالعربية",
            "مراجعة وتنظيم الوثائق",
            "التدريب والتحضير للمقابلة",
            "المساعدة في إعفاءات الإعاقة N-648"
          ]
        }
      ],

      faqs: [
        { q: "كم يستغرق التجنس في جاردن جروف؟", a: "حالياً 8-14 شهراً من التقديم إلى حفل القسم." },
        { q: "هل يمكنني إجراء اختبار التربية المدنية بالعربية؟", a: "إذا كنت مؤهلاً للإعفاء من الإنجليزية (قاعدة 50/20 أو 55/15)، نعم." },
        { q: "ماذا لو فشلت في المقابلة؟", a: "تحصل على محاولة ثانية خلال 90 يوماً. نقدم التحضير لإعادة المقابلة." },
        { q: "كم تكلف الجنسية؟", a: "رسوم تقديم N-400 هي $760. إعفاءات الرسوم متوفرة للدخل المنخفض." }
      ],

      cta: {
        title: "مستعد لتصبح مواطناً أمريكياً؟",
        text: "زر مكتبنا في جاردن جروف للحصول على مساعدة شخصية في التجنس.",
        button: "حجز استشارة مجانية"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default NaturalizationGardenGrove;
