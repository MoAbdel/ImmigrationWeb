import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const YemeniRefugeeSupportElCajon = ({ language }) => {
  const content = {
    en: {
      slug: "yemeni-refugee-support-el-cajon",
      title: "Yemeni Refugee Support in El Cajon: Asylum & Immigration Help",
      subtitle: "Compassionate immigration assistance for Yemeni families fleeing conflict",
      metaTitle: "Yemeni Refugee Help El Cajon | Asylum Services San Diego County",
      metaDescription: "Yemeni refugee and asylum support in El Cajon. Arabic-speaking staff help with asylum applications, TPS, and family reunification. Call (714) 421-8872.",
      keywords: "Yemeni refugees El Cajon, Yemen asylum help, Yemeni TPS, Arab refugee services San Diego",
      category: "Asylum & Refugee",
      location: "El Cajon",
      date: "January 1, 2026",
      readTime: "12 min read",
      author: "Immigration Solution Services",
      locationIntro: "El Cajon has become a welcoming home for Yemeni refugees fleeing the ongoing humanitarian crisis in Yemen. Our Arabic-speaking team provides compassionate support for Yemeni families navigating the complex U.S. immigration system.",

      sections: [
        {
          heading: "Understanding the Yemeni Refugee Crisis",
          content: "Yemen has faced devastating conflict since 2014, creating one of the world's worst humanitarian crises. Many Yemeni families have fled seeking safety in the United States, particularly in communities like El Cajon where Arabic-speaking support is available.\n\nYemeni nationals in the U.S. may have arrived through various paths:\n• Refugee resettlement program\n• Asylum applications\n• Temporary Protected Status (TPS)\n• Family-based petitions\n• Student or visitor visas (now unable to return)"
        },
        {
          heading: "Temporary Protected Status (TPS) for Yemen",
          content: "Yemen has been designated for Temporary Protected Status due to the ongoing armed conflict. TPS provides Yemeni nationals with:",
          list: [
            "Protection from deportation",
            "Work authorization (EAD)",
            "Ability to travel with advance parole",
            "Valid legal status in the United States",
            "Renewable as long as designation continues"
          ]
        },
        {
          heading: "TPS Requirements for Yemeni Nationals",
          list: [
            "Must be a national of Yemen",
            "Must have continuously resided in U.S. since designation date",
            "Must have been continuously physically present since designation",
            "Must not have certain criminal convictions",
            "Must register during the designated registration period"
          ]
        },
        {
          heading: "Asylum for Yemeni Families",
          content: "Yemeni nationals who fear returning to Yemen may apply for asylum based on persecution due to:",
          list: [
            "Political opinion (opposition to Houthi or government forces)",
            "Religion (religious minorities, converts)",
            "Nationality or tribal affiliation",
            "Membership in particular social group",
            "Race or ethnicity"
          ]
        },
        {
          heading: "Asylum Application Timeline",
          steps: [
            { title: "Filing", description: "Submit Form I-589 within one year of arrival (exceptions may apply)" },
            { title: "Biometrics", description: "Attend fingerprinting appointment" },
            { title: "Interview", description: "Present your case to an asylum officer" },
            { title: "Decision", description: "Receive approval, referral to court, or denial" },
            { title: "Work Permit", description: "Apply for EAD after 150 days if pending" }
          ]
        },
        {
          heading: "Family Reunification for Yemeni Refugees",
          content: "Refugees and asylees can petition for family members:\n\n• I-730 for spouse and unmarried children under 21 (within 2 years)\n• I-130 for other family members after becoming permanent resident\n\nFor Yemeni families separated by conflict, family reunification is often the most urgent priority. We help prepare complete petitions with proper documentation."
        },
        {
          heading: "Documents Often Needed",
          list: [
            "Yemeni passport or travel document",
            "Birth certificates (with certified translations)",
            "Marriage certificates (with certified translations)",
            "Evidence of persecution or country conditions",
            "Medical records documenting trauma (if applicable)",
            "Photos, news articles, or other supporting evidence",
            "Affidavits from witnesses"
          ]
        }
      ],

      faqs: [
        { q: "Is Yemen currently designated for TPS?", a: "Yemen has been designated for TPS. Check with us for current registration periods and requirements, as these can change." },
        { q: "Can I apply for asylum if I've been in the U.S. more than one year?", a: "While the general rule requires filing within one year, exceptions exist for changed circumstances or extraordinary circumstances. We can evaluate your specific situation." },
        { q: "Can my family in Yemen join me?", a: "If you're a refugee or asylee, you may petition for your spouse and unmarried children under 21 using Form I-730 within two years of your status approval." },
        { q: "Will I be sent back to Yemen?", a: "If you have valid TPS or approved asylum, you are protected from deportation. Even with pending applications, removal is generally paused." },
        { q: "Can I work while waiting for my asylum decision?", a: "You can apply for work authorization 150 days after filing a complete asylum application if it's still pending." }
      ],

      cta: {
        title: "Need Help with Yemeni Immigration Issues?",
        text: "Our compassionate Arabic-speaking team understands the challenges facing Yemeni families. We provide personalized support for TPS, asylum, and family reunification.",
        button: "Schedule Consultation"
      }
    },
    ar: {
      slug: "yemeni-refugee-support-el-cajon",
      title: "دعم اللاجئين اليمنيين في إل كاجون: مساعدة اللجوء والهجرة",
      subtitle: "مساعدة هجرة رحيمة للعائلات اليمنية الفارة من الصراع",
      metaTitle: "مساعدة اللاجئين اليمنيين إل كاجون | خدمات اللجوء سان دييغو",
      metaDescription: "دعم اللاجئين اليمنيين واللجوء في إل كاجون. فريق يتحدث العربية يساعد في طلبات اللجوء، TPS، ولم شمل الأسرة. اتصل (714) 421-8872.",
      keywords: "اللاجئين اليمنيين إل كاجون، مساعدة لجوء اليمن، TPS اليمني، خدمات اللاجئين العرب سان دييغو",
      category: "اللجوء واللاجئين",
      location: "إل كاجون",
      date: "1 يناير 2026",
      readTime: "12 دقيقة قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "أصبحت إل كاجون موطناً مرحباً للاجئين اليمنيين الفارين من الأزمة الإنسانية المستمرة في اليمن. فريقنا الناطق بالعربية يقدم دعماً رحيماً للعائلات اليمنية التي تتنقل في نظام الهجرة الأمريكي المعقد.",

      sections: [
        {
          heading: "فهم أزمة اللاجئين اليمنيين",
          content: "واجهت اليمن صراعاً مدمراً منذ 2014، مما خلق واحدة من أسوأ الأزمات الإنسانية في العالم. العديد من العائلات اليمنية فرت طلباً للأمان في الولايات المتحدة، خاصة في مجتمعات مثل إل كاجون حيث يتوفر الدعم الناطق بالعربية.\n\nقد يكون المواطنون اليمنيون في الولايات المتحدة قد وصلوا عبر مسارات مختلفة:\n• برنامج إعادة توطين اللاجئين\n• طلبات اللجوء\n• الوضع المحمي المؤقت (TPS)\n• الطلبات العائلية\n• تأشيرات طلابية أو زائر (غير قادرين الآن على العودة)"
        },
        {
          heading: "الوضع المحمي المؤقت (TPS) لليمن",
          content: "تم تعيين اليمن للوضع المحمي المؤقت بسبب الصراع المسلح المستمر. يوفر TPS للمواطنين اليمنيين:",
          list: [
            "الحماية من الترحيل",
            "تصريح العمل (EAD)",
            "القدرة على السفر مع الإفراج المسبق",
            "وضع قانوني صالح في الولايات المتحدة",
            "قابل للتجديد طالما استمر التعيين"
          ]
        },
        {
          heading: "متطلبات TPS للمواطنين اليمنيين",
          list: [
            "يجب أن تكون من مواطني اليمن",
            "يجب أن تكون قد أقمت باستمرار في الولايات المتحدة منذ تاريخ التعيين",
            "يجب أن تكون قد كنت حاضراً جسدياً باستمرار منذ التعيين",
            "يجب ألا يكون لديك إدانات جنائية معينة",
            "يجب التسجيل خلال فترة التسجيل المحددة"
          ]
        },
        {
          heading: "اللجوء للعائلات اليمنية",
          content: "يمكن للمواطنين اليمنيين الذين يخشون العودة إلى اليمن التقدم للجوء بناءً على الاضطهاد بسبب:",
          list: [
            "الرأي السياسي (معارضة قوات الحوثي أو الحكومة)",
            "الدين (الأقليات الدينية، المتحولين)",
            "الجنسية أو الانتماء القبلي",
            "العضوية في مجموعة اجتماعية معينة",
            "العرق أو الإثنية"
          ]
        },
        {
          heading: "الجدول الزمني لطلب اللجوء",
          steps: [
            { title: "التقديم", description: "تقديم نموذج I-589 خلال سنة من الوصول (قد تنطبق استثناءات)" },
            { title: "البصمات", description: "حضور موعد أخذ البصمات" },
            { title: "المقابلة", description: "عرض قضيتك على ضابط اللجوء" },
            { title: "القرار", description: "تلقي الموافقة، الإحالة للمحكمة، أو الرفض" },
            { title: "تصريح العمل", description: "التقدم لـ EAD بعد 150 يوماً إذا كان معلقاً" }
          ]
        },
        {
          heading: "لم شمل الأسرة للاجئين اليمنيين",
          content: "يمكن للاجئين واللاجئين تقديم طلبات لأفراد العائلة:\n\n• I-730 للزوج والأطفال غير المتزوجين تحت 21 (خلال سنتين)\n• I-130 لأفراد العائلة الآخرين بعد أن تصبح مقيماً دائماً\n\nللعائلات اليمنية المنفصلة بسبب الصراع، لم شمل الأسرة غالباً ما يكون الأولوية الأكثر إلحاحاً. نحن نساعد في إعداد طلبات كاملة مع الوثائق المناسبة."
        },
        {
          heading: "الوثائق المطلوبة غالباً",
          list: [
            "جواز السفر اليمني أو وثيقة السفر",
            "شهادات الميلاد (مع ترجمات معتمدة)",
            "شهادات الزواج (مع ترجمات معتمدة)",
            "دليل على الاضطهاد أو ظروف البلد",
            "السجلات الطبية التي توثق الصدمة (إن وجدت)",
            "الصور، المقالات الإخبارية، أو أدلة داعمة أخرى",
            "إفادات من الشهود"
          ]
        }
      ],

      faqs: [
        { q: "هل اليمن معينة حالياً لـ TPS؟", a: "تم تعيين اليمن لـ TPS. تحقق معنا لفترات التسجيل الحالية والمتطلبات، حيث يمكن أن تتغير." },
        { q: "هل يمكنني التقدم للجوء إذا كنت في الولايات المتحدة أكثر من سنة؟", a: "بينما تتطلب القاعدة العامة التقديم خلال سنة، توجد استثناءات للظروف المتغيرة أو الظروف الاستثنائية. يمكننا تقييم وضعك المحدد." },
        { q: "هل يمكن لعائلتي في اليمن الانضمام إلي؟", a: "إذا كنت لاجئاً أو لاجئاً، يمكنك تقديم طلب لزوجتك وأطفالك غير المتزوجين تحت 21 باستخدام نموذج I-730 خلال سنتين من موافقة وضعك." },
        { q: "هل سيتم إرسالي إلى اليمن؟", a: "إذا كان لديك TPS صالح أو لجوء موافق عليه، فأنت محمي من الترحيل. حتى مع الطلبات المعلقة، يتم إيقاف الترحيل عموماً." },
        { q: "هل يمكنني العمل أثناء انتظار قرار اللجوء؟", a: "يمكنك التقدم لتصريح العمل بعد 150 يوماً من تقديم طلب لجوء كامل إذا كان لا يزال معلقاً." }
      ],

      cta: {
        title: "تحتاج مساعدة في قضايا الهجرة اليمنية؟",
        text: "فريقنا الرحيم الناطق بالعربية يفهم التحديات التي تواجه العائلات اليمنية. نقدم دعماً شخصياً لـ TPS واللجوء ولم شمل الأسرة.",
        button: "حجز استشارة"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default YemeniRefugeeSupportElCajon;
