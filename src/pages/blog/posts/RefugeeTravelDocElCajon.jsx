import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const RefugeeTravelDocElCajon = ({ language }) => {
  const content = {
    en: {
      slug: "refugee-travel-document-el-cajon",
      title: "Refugee Travel Document in El Cajon: International Travel for Iraqi Refugees",
      subtitle: "Travel abroad as a refugee without risking your status in San Diego County",
      metaTitle: "Refugee Travel Document El Cajon | Iraqi Refugee Travel San Diego",
      metaDescription: "Refugee travel document help in El Cajon. Travel abroad safely as a refugee. Arabic support. Call (714) 421-8872.",
      keywords: "refugee travel document El Cajon, Iraqi refugee travel, I-131 refugee, San Diego refugee services",
      category: "Travel Documents",
      location: "El Cajon",
      date: "December 28, 2025",
      readTime: "8 min read",
      author: "SoCal Immigration Services",
      locationIntro: "El Cajon's large Iraqi refugee community often needs to travel internationally while maintaining their protected status. A refugee travel document allows you to leave and reenter the U.S. without abandoning your refugee status.",

      sections: [
        {
          heading: "What is a Refugee Travel Document?",
          content: "A Refugee Travel Document (RTD) is issued to refugees and asylees who need to travel internationally. It serves as a passport for those who cannot use their home country's passport without risking their status.\n\nImportant: Do NOT travel to your home country (Iraq, Syria, etc.) even with an RTD. This may be considered abandonment of your refugee status."
        },
        {
          heading: "Who is Eligible?",
          list: [
            "Refugees admitted to the U.S.",
            "Asylees granted asylum",
            "Lawful permanent residents who obtained status through refugee/asylee channels",
            "Must be physically in the U.S. to apply"
          ]
        },
        {
          heading: "Required Documents",
          list: [
            "Form I-131, Application for Travel Document",
            "Copy of I-94 showing refugee admission",
            "Copy of approval letter/documentation",
            "Two passport-style photos",
            "Copy of green card (if adjusted status)",
            "Filing fee ($135)"
          ]
        },
        {
          heading: "Processing Times",
          table: {
            headers: ["Step", "Timeline"],
            rows: [
              ["Receipt Notice", "2-4 weeks"],
              ["Biometrics (if required)", "4-8 weeks"],
              ["Document Issuance", "2-4 months total"],
              ["Validity", "1 year typically"]
            ]
          }
        },
        {
          heading: "Critical Warnings for El Cajon Refugees",
          content: "Before traveling, understand these risks:\n\n• DO NOT return to Iraq or your country of persecution\n• Returning may void your refugee/asylee status\n• You may face difficulties getting a visa for certain countries\n• Apply 3-4 months before planned travel\n• Keep documents safe while traveling"
        }
      ],

      faqs: [
        { q: "Can I travel to Iraq with a refugee travel document?", a: "NO. Traveling to your country of persecution (Iraq, Syria, etc.) may be considered abandonment of your refugee status and could affect your green card application." },
        { q: "How long is the document valid?", a: "Usually 1 year for refugees/asylees, 2 years for permanent residents." },
        { q: "Can I renew my refugee travel document?", a: "Yes, you can apply for a new one before expiration." }
      ],

      cta: {
        title: "Need a Refugee Travel Document?",
        text: "Our Arabic-speaking team helps El Cajon refugees apply for travel documents safely.",
        button: "Start Application"
      }
    },
    ar: {
      slug: "refugee-travel-document-el-cajon",
      title: "وثيقة سفر اللاجئين في إل كاجون: السفر الدولي للاجئين العراقيين",
      subtitle: "سافر للخارج كلاجئ دون المخاطرة بوضعك في مقاطعة سان دييغو",
      metaTitle: "وثيقة سفر اللاجئين إل كاجون | سفر اللاجئين العراقيين سان دييغو",
      metaDescription: "مساعدة وثيقة سفر اللاجئين في إل كاجون. سافر للخارج بأمان كلاجئ. دعم بالعربية. اتصل (714) 421-8872.",
      keywords: "وثيقة سفر اللاجئين إل كاجون، سفر اللاجئين العراقيين، I-131 اللاجئين، خدمات اللاجئين سان دييغو",
      category: "وثائق السفر",
      location: "إل كاجون",
      date: "28 ديسمبر 2025",
      readTime: "8 دقائق قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "يحتاج مجتمع اللاجئين العراقيين الكبير في إل كاجون غالباً للسفر دولياً مع الحفاظ على وضعهم المحمي. تسمح لك وثيقة سفر اللاجئين بالمغادرة وإعادة الدخول إلى الولايات المتحدة دون التخلي عن وضعك كلاجئ.",

      sections: [
        {
          heading: "ما هي وثيقة سفر اللاجئين؟",
          content: "وثيقة سفر اللاجئين (RTD) تصدر للاجئين واللاجئين السياسيين الذين يحتاجون للسفر دولياً. تعمل كجواز سفر لأولئك الذين لا يمكنهم استخدام جواز سفر بلدهم الأصلي دون المخاطرة بوضعهم.\n\nمهم: لا تسافر إلى بلدك الأصلي (العراق، سوريا، إلخ) حتى مع RTD. هذا قد يعتبر تخلياً عن وضعك كلاجئ."
        },
        {
          heading: "من هو المؤهل؟",
          list: [
            "اللاجئون المقبولون في الولايات المتحدة",
            "اللاجئون السياسيون الممنوحون اللجوء",
            "المقيمون الدائمون القانونيون الذين حصلوا على الوضع عبر قنوات اللاجئين/اللجوء",
            "يجب أن تكون في الولايات المتحدة للتقديم"
          ]
        },
        {
          heading: "الوثائق المطلوبة",
          list: [
            "نموذج I-131، طلب وثيقة السفر",
            "نسخة من I-94 تظهر قبول اللاجئ",
            "نسخة من خطاب/وثائق الموافقة",
            "صورتان بحجم جواز السفر",
            "نسخة من البطاقة الخضراء (إذا عدلت الوضع)",
            "رسوم التقديم ($135)"
          ]
        },
        {
          heading: "أوقات المعالجة",
          table: {
            headers: ["الخطوة", "الجدول الزمني"],
            rows: [
              ["إشعار الاستلام", "2-4 أسابيع"],
              ["البصمات (إذا مطلوب)", "4-8 أسابيع"],
              ["إصدار الوثيقة", "2-4 أشهر إجمالي"],
              ["الصلاحية", "سنة واحدة عادة"]
            ]
          }
        },
        {
          heading: "تحذيرات حرجة للاجئي إل كاجون",
          content: "قبل السفر، افهم هذه المخاطر:\n\n• لا تعد إلى العراق أو بلد اضطهادك\n• العودة قد تبطل وضعك كلاجئ/لاجئ سياسي\n• قد تواجه صعوبات في الحصول على تأشيرة لبعض الدول\n• قدم قبل 3-4 أشهر من السفر المخطط\n• احتفظ بالوثائق آمنة أثناء السفر"
        }
      ],

      faqs: [
        { q: "هل يمكنني السفر إلى العراق بوثيقة سفر اللاجئين؟", a: "لا. السفر إلى بلد اضطهادك (العراق، سوريا، إلخ) قد يعتبر تخلياً عن وضعك كلاجئ وقد يؤثر على طلب بطاقتك الخضراء." },
        { q: "كم مدة صلاحية الوثيقة؟", a: "عادة سنة واحدة للاجئين/اللاجئين السياسيين، سنتين للمقيمين الدائمين." },
        { q: "هل يمكنني تجديد وثيقة سفر اللاجئين؟", a: "نعم، يمكنك التقدم لواحدة جديدة قبل انتهاء الصلاحية." }
      ],

      cta: {
        title: "تحتاج وثيقة سفر اللاجئين؟",
        text: "فريقنا الناطق بالعربية يساعد لاجئي إل كاجون في التقدم لوثائق السفر بأمان.",
        button: "ابدأ الطلب"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default RefugeeTravelDocElCajon;
