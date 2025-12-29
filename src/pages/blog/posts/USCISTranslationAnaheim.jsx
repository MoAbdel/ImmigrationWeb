import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const USCISTranslationAnaheim = ({ language }) => {
  const content = {
    en: {
      slug: "uscis-translation-anaheim",
      title: "USCIS Certified Translation in Anaheim: Arabic Document Services",
      subtitle: "Fast, accurate Arabic to English translations for immigration applications in Little Arabia",
      metaTitle: "USCIS Translation Anaheim | Arabic Document Translation Orange County",
      metaDescription: "Certified Arabic translation for USCIS in Anaheim. Birth certificates, marriage certificates. Fast service. Call (714) 421-8872.",
      keywords: "USCIS translation Anaheim, Arabic translation Orange County, certified translation Little Arabia, immigration document translation",
      category: "Document Services",
      location: "Anaheim",
      date: "December 28, 2025",
      readTime: "5 min read",
      author: "Immigration Solution Services",
      locationIntro: "Little Arabia in Anaheim is the hub for Arabic-speaking immigrants in Orange County. We provide USCIS-certified translations from Arabic to English, helping families with their immigration documents.",

      sections: [
        {
          heading: "USCIS Translation Requirements",
          content: "USCIS requires that all documents in a foreign language be accompanied by a certified English translation. The translation must include a certification statement that the translator is competent and the translation is accurate."
        },
        {
          heading: "Documents We Translate",
          list: [
            "Birth certificates",
            "Marriage certificates",
            "Divorce decrees",
            "Death certificates",
            "Academic transcripts and diplomas",
            "Police clearance certificates",
            "Military records",
            "Court documents",
            "Passports and IDs"
          ]
        },
        {
          heading: "Our Translation Process",
          steps: [
            { title: "Document Submission", description: "Bring or email clear copies of your documents" },
            { title: "Translation", description: "Professional translators handle your documents" },
            { title: "Certification", description: "We add the required certification statement" },
            { title: "Quality Review", description: "Final review for accuracy" },
            { title: "Delivery", description: "Pick up or receive by email/mail" }
          ]
        },
        {
          heading: "Pricing and Turnaround",
          table: {
            headers: ["Service", "Standard", "Rush"],
            rows: [
              ["Birth Certificate", "$30-40", "$50-60"],
              ["Marriage Certificate", "$30-40", "$50-60"],
              ["Academic Documents", "$40-60/page", "$70-90/page"],
              ["Turnaround", "3-5 business days", "24-48 hours"]
            ]
          }
        }
      ],

      faqs: [
        { q: "Are your translations accepted by USCIS?", a: "Yes, all our translations include the required certification statement and are accepted by USCIS, embassies, and courts." },
        { q: "Do I need original documents?", a: "You can bring copies. We'll translate from clear copies; you keep your originals safe." },
        { q: "Can you translate handwritten documents?", a: "Yes, though handwritten documents may take longer due to legibility issues." }
      ],

      cta: {
        title: "Need Arabic Documents Translated?",
        text: "Visit our office near Little Arabia for fast, certified translations.",
        button: "Get Translation Quote"
      }
    },
    ar: {
      slug: "uscis-translation-anaheim",
      title: "الترجمة المعتمدة لـ USCIS في أنهايم: خدمات الوثائق العربية",
      subtitle: "ترجمات سريعة ودقيقة من العربية إلى الإنجليزية لطلبات الهجرة في ليتل أريبيا",
      metaTitle: "ترجمة USCIS أنهايم | ترجمة الوثائق العربية أورانج كاونتي",
      metaDescription: "ترجمة عربية معتمدة لـ USCIS في أنهايم. شهادات الميلاد، شهادات الزواج. خدمة سريعة. اتصل (714) 421-8872.",
      keywords: "ترجمة USCIS أنهايم، ترجمة عربية أورانج كاونتي، ترجمة معتمدة ليتل أريبيا",
      category: "خدمات الوثائق",
      location: "أنهايم",
      date: "28 ديسمبر 2025",
      readTime: "5 دقائق قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "ليتل أريبيا في أنهايم هي المركز للمهاجرين الناطقين بالعربية في مقاطعة أورانج. نقدم ترجمات معتمدة من USCIS من العربية إلى الإنجليزية، مساعدة العائلات في وثائق الهجرة.",

      sections: [
        {
          heading: "متطلبات ترجمة USCIS",
          content: "تتطلب USCIS أن تكون جميع الوثائق بلغة أجنبية مصحوبة بترجمة إنجليزية معتمدة. يجب أن تتضمن الترجمة بيان شهادة بأن المترجم كفؤ والترجمة دقيقة."
        },
        {
          heading: "الوثائق التي نترجمها",
          list: [
            "شهادات الميلاد",
            "شهادات الزواج",
            "أحكام الطلاق",
            "شهادات الوفاة",
            "الشهادات والدبلومات الأكاديمية",
            "شهادات الخلو من السوابق",
            "السجلات العسكرية",
            "وثائق المحكمة",
            "جوازات السفر والهويات"
          ]
        },
        {
          heading: "عملية الترجمة لدينا",
          steps: [
            { title: "تقديم الوثائق", description: "أحضر أو أرسل نسخاً واضحة من وثائقك بالبريد الإلكتروني" },
            { title: "الترجمة", description: "مترجمون محترفون يتعاملون مع وثائقك" },
            { title: "الشهادة", description: "نضيف بيان الشهادة المطلوب" },
            { title: "مراجعة الجودة", description: "مراجعة نهائية للدقة" },
            { title: "التسليم", description: "استلم أو احصل عليها بالبريد الإلكتروني/البريد" }
          ]
        },
        {
          heading: "الأسعار والمدة",
          table: {
            headers: ["الخدمة", "عادي", "مستعجل"],
            rows: [
              ["شهادة الميلاد", "$30-40", "$50-60"],
              ["شهادة الزواج", "$30-40", "$50-60"],
              ["الوثائق الأكاديمية", "$40-60/صفحة", "$70-90/صفحة"],
              ["المدة", "3-5 أيام عمل", "24-48 ساعة"]
            ]
          }
        }
      ],

      faqs: [
        { q: "هل ترجماتكم مقبولة من USCIS؟", a: "نعم، جميع ترجماتنا تتضمن بيان الشهادة المطلوب ومقبولة من USCIS والسفارات والمحاكم." },
        { q: "هل أحتاج الوثائق الأصلية؟", a: "يمكنك إحضار نسخ. سنترجم من نسخ واضحة؛ احتفظ بأصولك آمنة." },
        { q: "هل يمكنكم ترجمة الوثائق المكتوبة بخط اليد؟", a: "نعم، رغم أن الوثائق المكتوبة بخط اليد قد تستغرق وقتاً أطول بسبب مشاكل الوضوح." }
      ],

      cta: {
        title: "تحتاج ترجمة وثائق عربية؟",
        text: "زر مكتبنا قرب ليتل أريبيا لترجمات سريعة ومعتمدة.",
        button: "احصل على عرض سعر للترجمة"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default USCISTranslationAnaheim;
