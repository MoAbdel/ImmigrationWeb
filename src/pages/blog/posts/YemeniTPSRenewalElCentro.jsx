import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const YemeniTPSRenewalElCentro = ({ language }) => {
  const content = {
    en: {
      slug: "yemeni-tps-renewal-el-centro",
      title: "Yemeni TPS Renewal in El Centro: Complete Guide for Yemen TPS Holders",
      subtitle: "Step-by-step guide to renewing your Yemen Temporary Protected Status and work authorization",
      metaTitle: "Yemeni TPS Renewal El Centro | Yemen TPS Extension Imperial Valley",
      metaDescription: "Renew your Yemen TPS in El Centro. Complete guide for TPS re-registration, EAD renewal, deadlines, and fees. Arabic-speaking immigration help. Call (714) 421-8872.",
      keywords: "Yemen TPS renewal El Centro, Yemeni TPS extension, TPS re-registration Yemen, Yemen EAD renewal, Temporary Protected Status Yemen",
      category: "Humanitarian",
      location: "El Centro",
      date: "January 20, 2026",
      readTime: "10 min read",
      author: "SoCal Immigration Services",
      locationIntro: "Yemeni nationals with Temporary Protected Status (TPS) must re-register during each extension period to maintain their status and work authorization. This guide helps Yemen TPS holders in El Centro and the Imperial Valley understand the renewal process. SoCal Immigration Services provides Arabic-speaking assistance for TPS renewals.",

      sections: [
        {
          heading: "Current Yemen TPS Status",
          content: "Yemen has been designated for TPS due to ongoing armed conflict and humanitarian crisis. TPS provides:\n\n• Protection from deportation\n• Work authorization (EAD)\n• Travel authorization (with advance permission)\n• Cannot be detained based on immigration status\n\nCheck USCIS.gov for current designation end dates and re-registration periods."
        },
        {
          heading: "Who Must Re-Register?",
          content: "You must re-register if you:",
          list: [
            "Currently have Yemen TPS status",
            "Have a valid TPS-based EAD",
            "Want to maintain your TPS benefits",
            "Are within the re-registration window",
            "Have not abandoned your TPS status"
          ]
        },
        {
          heading: "Re-Registration Deadlines",
          content: "Critical timing information:\n\n• USCIS announces re-registration periods in Federal Register\n• Typically 60-day window to re-register\n• Missing deadline can result in TPS termination\n• Late filings may be accepted with good cause\n• Set reminders well before deadline"
        },
        {
          heading: "Required Forms",
          content: "Forms needed for TPS re-registration:",
          table: {
            headers: ["Form", "Purpose", "Fee (2026)"],
            rows: [
              ["I-821", "TPS Application", "$50"],
              ["I-765", "Work Permit (EAD)", "$410"],
              ["I-821 + I-765", "Filed together", "$460 total"],
              ["Biometrics", "Fingerprints", "$85"]
            ]
          }
        },
        {
          heading: "Required Documents",
          content: "Gather these documents for re-registration:",
          list: [
            "Copy of previous TPS approval notice (I-797)",
            "Copy of current EAD (front and back)",
            "Two passport-style photos",
            "Copy of passport or national ID",
            "Evidence of continuous residence in U.S.",
            "Evidence of continuous physical presence",
            "Form I-94 arrival record (if available)",
            "Any name change documents (if applicable)"
          ]
        },
        {
          heading: "Continuous Residence Requirement",
          content: "You must show continuous U.S. residence since the required date:\n\nAcceptable Evidence:\n• Utility bills, rent receipts\n• Bank statements\n• Employment records\n• School records\n• Medical records\n• Any dated documents showing U.S. address\n\nBrief trips abroad don't break continuous residence if properly authorized."
        },
        {
          heading: "Filing Process",
          content: "How to submit your re-registration:",
          list: [
            "Complete Form I-821 (TPS)",
            "Complete Form I-765 (EAD) - check TPS category (c)(19)",
            "Gather all supporting documents",
            "Include proper fees or fee waiver request",
            "Make copies of everything",
            "Mail to correct USCIS address (check instructions)",
            "Use certified mail with tracking",
            "Wait for receipt notice"
          ]
        },
        {
          heading: "Fee Waiver Option",
          content: "You may qualify for fee waiver if:\n\n• Receiving means-tested benefits\n• Income below 150% of poverty guidelines\n• Financial hardship\n\nFile Form I-912 with your application and supporting evidence of financial situation."
        },
        {
          heading: "While Waiting for New EAD",
          content: "If your current EAD expires before new one arrives:\n\n• USCIS typically auto-extends EADs during re-registration\n• Check Federal Register notice for auto-extension details\n• Auto-extension is usually 180 days\n• Show employer: expired EAD + I-797 receipt notice + Federal Register notice\n• Continue working legally during auto-extension"
        },
        {
          heading: "Travel with TPS",
          content: "Traveling abroad while on TPS:\n\nBefore Travel:\n• Must obtain advance parole (Form I-131)\n• Apply well before travel dates\n• Travel document required\n\nRisks:\n• Unauthorized travel can abandon TPS\n• Travel to Yemen not recommended\n• May trigger inadmissibility issues upon return"
        },
        {
          heading: "El Centro TPS Services",
          content: "SoCal Immigration Services helps Yemen TPS holders:",
          list: [
            "Arabic and English speaking staff",
            "Complete re-registration assistance",
            "Document preparation and review",
            "Fee waiver applications",
            "Travel document (I-131) applications",
            "Employment verification letters",
            "Deadline tracking and reminders"
          ]
        }
      ],

      faqs: [
        {
          q: "What happens if I miss the TPS re-registration deadline?",
          a: "Missing the deadline can result in losing TPS status and work authorization. If you miss it, contact an immigration professional immediately - late filings may be accepted with good cause explanation."
        },
        {
          q: "Is my EAD automatically extended during re-registration?",
          a: "Usually yes. USCIS typically announces automatic EAD extensions for TPS holders who timely re-register. Check the Federal Register notice for your country's specific auto-extension period."
        },
        {
          q: "Can I travel to Yemen while on TPS?",
          a: "Technically you can travel with advance parole, but traveling to Yemen is strongly discouraged. It may raise questions about whether you still need protection and could jeopardize your TPS status."
        },
        {
          q: "How much does TPS re-registration cost?",
          a: "In 2026, the fees are: I-821 ($50) + I-765 ($410) + Biometrics ($85) = $545 total. Fee waivers are available for those who qualify based on income or hardship."
        },
        {
          q: "Can I get a green card through TPS?",
          a: "TPS itself doesn't lead to a green card. However, you may pursue other immigration options (family petition, employment, etc.) while on TPS. Each pathway has its own requirements."
        },
        {
          q: "My TPS case is taking a long time - can I still work?",
          a: "If you timely filed for re-registration and received a receipt notice, check for auto-extension announcements. Your EAD is typically automatically extended while your renewal is pending."
        }
      ],

      cta: {
        title: "Need Help Renewing Your Yemen TPS in El Centro?",
        text: "Don't miss your re-registration deadline. Our Arabic-speaking team helps Yemeni families maintain their protected status and work authorization.",
        button: "Schedule Free Consultation"
      }
    },
    ar: {
      slug: "yemeni-tps-renewal-el-centro",
      title: "تجديد TPS اليمني في إل سنترو: دليل كامل لحاملي TPS اليمن",
      subtitle: "دليل خطوة بخطوة لتجديد وضع الحماية المؤقتة اليمني وتصريح العمل",
      metaTitle: "تجديد TPS اليمني إل سنترو | تمديد TPS اليمن وادي إمبريال",
      metaDescription: "جدد TPS اليمن الخاص بك في إل سنترو. دليل كامل لإعادة تسجيل TPS، تجديد EAD، المواعيد النهائية، والرسوم. مساعدة هجرة بالعربية. اتصل (714) 421-8872.",
      keywords: "تجديد TPS اليمن إل سنترو، تمديد TPS اليمني، إعادة تسجيل TPS اليمن، تجديد EAD اليمن، وضع الحماية المؤقتة اليمن",
      category: "الإنسانية",
      location: "إل سنترو",
      date: "20 يناير 2026",
      readTime: "10 دقيقة قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "يجب على المواطنين اليمنيين الحاصلين على وضع الحماية المؤقتة (TPS) إعادة التسجيل خلال كل فترة تمديد للحفاظ على وضعهم وتصريح العمل. يساعد هذا الدليل حاملي TPS اليمن في إل سنترو ووادي إمبريال على فهم عملية التجديد. توفر خدمات حلول الهجرة مساعدة بالعربية لتجديدات TPS.",

      sections: [
        {
          heading: "وضع TPS اليمن الحالي",
          content: "تم تعيين اليمن لـ TPS بسبب الصراع المسلح المستمر والأزمة الإنسانية. يوفر TPS:\n\n• الحماية من الترحيل\n• تصريح العمل (EAD)\n• تصريح السفر (بإذن مسبق)\n• لا يمكن احتجازك بناءً على وضع الهجرة\n\nتحقق من USCIS.gov لتواريخ انتهاء التعيين الحالية وفترات إعادة التسجيل."
        },
        {
          heading: "من يجب أن يعيد التسجيل؟",
          content: "يجب أن تعيد التسجيل إذا:",
          list: [
            "لديك حالياً وضع TPS اليمن",
            "لديك EAD صالح قائم على TPS",
            "تريد الحفاظ على مزايا TPS الخاصة بك",
            "أنت ضمن نافذة إعادة التسجيل",
            "لم تتخلَ عن وضع TPS الخاص بك"
          ]
        },
        {
          heading: "مواعيد إعادة التسجيل النهائية",
          content: "معلومات التوقيت الحرجة:\n\n• USCIS تعلن فترات إعادة التسجيل في السجل الفيدرالي\n• عادة نافذة 60 يوماً لإعادة التسجيل\n• تفويت الموعد النهائي يمكن أن يؤدي لإنهاء TPS\n• التقديمات المتأخرة قد تُقبل بسبب وجيه\n• اضبط تذكيرات قبل الموعد النهائي بوقت"
        },
        {
          heading: "النماذج المطلوبة",
          content: "النماذج المطلوبة لإعادة تسجيل TPS:",
          table: {
            headers: ["النموذج", "الغرض", "الرسوم (2026)"],
            rows: [
              ["I-821", "طلب TPS", "$50"],
              ["I-765", "تصريح العمل (EAD)", "$410"],
              ["I-821 + I-765", "مقدمة معاً", "إجمالي $460"],
              ["البصمات", "بصمات الأصابع", "$85"]
            ]
          }
        },
        {
          heading: "المستندات المطلوبة",
          content: "اجمع هذه المستندات لإعادة التسجيل:",
          list: [
            "نسخة من إشعار موافقة TPS السابق (I-797)",
            "نسخة من EAD الحالي (الأمام والخلف)",
            "صورتان بحجم جواز السفر",
            "نسخة من جواز السفر أو الهوية الوطنية",
            "دليل الإقامة المستمرة في الولايات المتحدة",
            "دليل الوجود المادي المستمر",
            "سجل الوصول I-94 (إن توفر)",
            "أي مستندات تغيير الاسم (إن وجدت)"
          ]
        },
        {
          heading: "متطلب الإقامة المستمرة",
          content: "يجب أن تظهر إقامة أمريكية مستمرة منذ التاريخ المطلوب:\n\nالأدلة المقبولة:\n• فواتير الخدمات، إيصالات الإيجار\n• كشوف الحساب البنكية\n• سجلات العمل\n• سجلات المدرسة\n• السجلات الطبية\n• أي مستندات مؤرخة تظهر عنوان أمريكي\n\nالرحلات القصيرة للخارج لا تقطع الإقامة المستمرة إذا كانت مصرحة بشكل صحيح."
        },
        {
          heading: "عملية التقديم",
          content: "كيفية تقديم إعادة تسجيلك:",
          list: [
            "أكمل نموذج I-821 (TPS)",
            "أكمل نموذج I-765 (EAD) - حدد فئة TPS (c)(19)",
            "اجمع جميع المستندات الداعمة",
            "ضمّن الرسوم المناسبة أو طلب إعفاء الرسوم",
            "اصنع نسخاً من كل شيء",
            "أرسل بالبريد إلى عنوان USCIS الصحيح (تحقق من التعليمات)",
            "استخدم البريد المعتمد مع التتبع",
            "انتظر إشعار الاستلام"
          ]
        },
        {
          heading: "خيار إعفاء الرسوم",
          content: "قد تتأهل لإعفاء الرسوم إذا:\n\n• تتلقى مزايا مختبرة\n• الدخل أقل من 150% من إرشادات الفقر\n• ضائقة مالية\n\nقدم نموذج I-912 مع طلبك والأدلة الداعمة للوضع المالي."
        },
        {
          heading: "أثناء انتظار EAD الجديد",
          content: "إذا انتهى صلاحية EAD الحالي قبل وصول الجديد:\n\n• USCIS عادة تمدد EADs تلقائياً أثناء إعادة التسجيل\n• تحقق من إشعار السجل الفيدرالي لتفاصيل التمديد التلقائي\n• التمديد التلقائي عادة 180 يوماً\n• أظهر لصاحب العمل: EAD المنتهي + إشعار استلام I-797 + إشعار السجل الفيدرالي\n• استمر في العمل بشكل قانوني أثناء التمديد التلقائي"
        },
        {
          heading: "السفر مع TPS",
          content: "السفر للخارج أثناء TPS:\n\nقبل السفر:\n• يجب الحصول على إذن مسبق (نموذج I-131)\n• تقدم قبل تواريخ السفر بوقت\n• مطلوب وثيقة السفر\n\nالمخاطر:\n• السفر غير المصرح يمكن أن يتخلى عن TPS\n• السفر إلى اليمن غير موصى به\n• قد يثير مشاكل عدم القبول عند العودة"
        },
        {
          heading: "خدمات TPS في إل سنترو",
          content: "تساعد خدمات حلول الهجرة حاملي TPS اليمن:",
          list: [
            "فريق يتحدث العربية والإنجليزية",
            "مساعدة إعادة التسجيل الكاملة",
            "إعداد ومراجعة المستندات",
            "طلبات إعفاء الرسوم",
            "طلبات وثيقة السفر (I-131)",
            "خطابات التحقق من العمل",
            "تتبع المواعيد النهائية والتذكيرات"
          ]
        }
      ],

      faqs: [
        {
          q: "ماذا يحدث إذا فوت الموعد النهائي لإعادة تسجيل TPS؟",
          a: "تفويت الموعد النهائي يمكن أن يؤدي لفقدان وضع TPS وتصريح العمل. إذا فوته، اتصل بمحترف هجرة فوراً - التقديمات المتأخرة قد تُقبل مع شرح السبب الوجيه."
        },
        {
          q: "هل يتم تمديد EAD الخاص بي تلقائياً أثناء إعادة التسجيل؟",
          a: "عادة نعم. USCIS عادة تعلن تمديدات EAD التلقائية لحاملي TPS الذين يعيدون التسجيل في الوقت المحدد. تحقق من إشعار السجل الفيدرالي لفترة التمديد التلقائي المحددة لبلدك."
        },
        {
          q: "هل يمكنني السفر إلى اليمن أثناء TPS؟",
          a: "تقنياً يمكنك السفر بإذن مسبق، لكن السفر إلى اليمن غير موصى به بشدة. قد يثير أسئلة حول ما إذا كنت لا تزال بحاجة للحماية ويمكن أن يعرض وضع TPS الخاص بك للخطر."
        },
        {
          q: "كم تكلفة إعادة تسجيل TPS؟",
          a: "في 2026، الرسوم هي: I-821 ($50) + I-765 ($410) + البصمات ($85) = إجمالي $545. إعفاءات الرسوم متاحة للذين يتأهلون بناءً على الدخل أو الضائقة."
        },
        {
          q: "هل يمكنني الحصول على البطاقة الخضراء من خلال TPS؟",
          a: "TPS بحد ذاته لا يؤدي للبطاقة الخضراء. ومع ذلك، يمكنك متابعة خيارات هجرة أخرى (التماس العائلة، التوظيف، إلخ) أثناء TPS. كل مسار له متطلباته الخاصة."
        },
        {
          q: "قضيتي TPS تستغرق وقتاً طويلاً - هل لا يزال بإمكاني العمل؟",
          a: "إذا قدمت لإعادة التسجيل في الوقت المحدد وتلقيت إشعار استلام، تحقق من إعلانات التمديد التلقائي. يتم عادة تمديد EAD الخاص بك تلقائياً أثناء انتظار تجديدك."
        }
      ],

      cta: {
        title: "تحتاج مساعدة في تجديد TPS اليمن الخاص بك في إل سنترو؟",
        text: "لا تفوت الموعد النهائي لإعادة التسجيل. فريقنا الذي يتحدث العربية يساعد العائلات اليمنية على الحفاظ على وضعهم المحمي وتصريح العمل.",
        button: "جدولة استشارة مجانية"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default YemeniTPSRenewalElCentro;
