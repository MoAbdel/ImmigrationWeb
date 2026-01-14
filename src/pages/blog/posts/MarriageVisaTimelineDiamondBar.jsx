import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const MarriageVisaTimelineDiamondBar = ({ language }) => {
  const content = {
    en: {
      slug: "marriage-visa-timeline-diamond-bar",
      title: "Marriage Visa Timeline in Diamond Bar: How Long to Get Your Spouse's Green Card",
      subtitle: "Understanding processing times for spousal immigration in 2026",
      metaTitle: "Marriage Visa Timeline Diamond Bar | Spouse Green Card Processing Time 2026",
      metaDescription: "Marriage visa timeline in Diamond Bar. CR-1, IR-1, K-1 processing times, adjustment of status timeline. Arabic support. Call (714) 421-8872.",
      keywords: "marriage visa timeline Diamond Bar, spouse green card time, CR-1 processing, IR-1 visa timeline, adjustment of status timeline",
      category: "Marriage",
      location: "Diamond Bar",
      date: "January 14, 2026",
      readTime: "11 min read",
      author: "SoCal Immigration Services",
      image: "/images/blog/marriage.jpg",
      summary: "Spousal green card processing times vary from 12-36 months depending on whether your spouse is in the U.S. or abroad and what type of petition you file. Understanding the timeline helps you plan your immigration journey.",
      locationIntro: "For couples in Diamond Bar navigating the marriage-based immigration process, understanding realistic timelines is crucial for planning. SoCal Immigration Services helps Arab families understand what to expect during the spousal immigration journey.",

      sections: [
        {
          heading: "Marriage Immigration Options Overview",
          content: "When sponsoring your spouse for a green card, you have different pathways:\n\n• Adjustment of Status (spouse already in U.S.)\n• Consular Processing IR-1/CR-1 (spouse abroad)\n• K-1 Fiancé Visa then Adjustment (fiancé abroad)\n\nTimelines vary significantly between these options."
        },
        {
          heading: "Adjustment of Status Timeline (Spouse in U.S.)",
          content: "If your spouse is already in the U.S. legally, adjustment of status is typically fastest:",
          table: {
            headers: ["Step", "Processing Time", "Cumulative"],
            rows: [
              ["File I-130 + I-485 concurrently", "Initial receipt: 2-4 weeks", "1 month"],
              ["Biometrics appointment", "4-8 weeks after filing", "2-3 months"],
              ["EAD/Advance Parole (I-765/I-131)", "3-6 months", "3-6 months"],
              ["Interview scheduled", "8-18 months after filing", "8-18 months"],
              ["Decision after interview", "Same day to 2 months", "8-20 months"],
              ["Green card received", "2-4 weeks after approval", "9-21 months"]
            ]
          }
        },
        {
          heading: "Consular Processing Timeline (Spouse Abroad)",
          content: "If your spouse is outside the U.S., the process has more steps:",
          table: {
            headers: ["Step", "Processing Time", "Cumulative"],
            rows: [
              ["I-130 approval", "12-18 months", "12-18 months"],
              ["Case transferred to NVC", "4-8 weeks", "13-20 months"],
              ["NVC document collection", "1-3 months", "14-23 months"],
              ["NVC review and scheduling", "1-3 months", "15-26 months"],
              ["Embassy interview", "Scheduled availability", "16-30 months"],
              ["Visa issuance", "1-2 weeks after interview", "16-30 months"],
              ["Entry to U.S.", "Valid 6 months", "17-31 months"]
            ]
          }
        },
        {
          heading: "K-1 Fiancé Visa Timeline",
          content: "The K-1 route has its own timeline:",
          table: {
            headers: ["Step", "Processing Time", "Cumulative"],
            rows: [
              ["I-129F approval", "8-14 months", "8-14 months"],
              ["NVC processing", "4-6 weeks", "9-15 months"],
              ["Embassy interview", "2-4 months", "11-19 months"],
              ["Enter U.S. and marry", "90 days to marry", "12-20 months"],
              ["File I-485 adjustment", "After marriage", "12-20 months"],
              ["Green card approval", "8-18 months more", "20-38 months"]
            ]
          }
        },
        {
          heading: "IR-1 vs CR-1 Visa Differences",
          content: "The visa type depends on marriage length:\n\n• IR-1 (Immediate Relative): Married 2+ years at green card issuance\n  - Receive permanent 10-year green card\n  - No conditions to remove\n\n• CR-1 (Conditional Resident): Married less than 2 years\n  - Receive conditional 2-year green card\n  - Must file I-751 to remove conditions\n  - File jointly 90 days before expiration"
        },
        {
          heading: "Factors That Affect Timeline",
          content: "Several factors can speed up or delay your case:",
          list: [
            "USCIS office workload (varies by location)",
            "Complete vs. incomplete applications",
            "Background check delays",
            "Requests for Evidence (RFE)",
            "Embassy interview availability",
            "Administrative processing",
            "COVID-19 related backlogs (diminishing)"
          ]
        },
        {
          heading: "How to Check Processing Times",
          content: "Monitor your case and current processing times:",
          steps: [
            {
              title: "USCIS Online Account",
              description: "Check case status with receipt number"
            },
            {
              title: "USCIS Processing Times",
              description: "View current times by form and office"
            },
            {
              title: "CEAC Status",
              description: "Track consular cases through State Department"
            },
            {
              title: "NVC Case Status",
              description: "Check National Visa Center progress"
            },
            {
              title: "Case Inquiry",
              description: "Submit inquiry if outside normal processing time"
            }
          ]
        },
        {
          heading: "Work Authorization During Process",
          content: "Work permit options while waiting:\n\n• Adjustment of Status: Can file I-765 for EAD\n• K-1 after marriage: File I-485 and I-765\n• Consular processing: No U.S. work permit until entry\n• Combo card: EAD + Advance Parole in one"
        },
        {
          heading: "Travel During the Process",
          content: "Travel considerations vary by situation:\n\n• Adjustment pending: Need Advance Parole to travel\n• K-1 pending adjustment: Advance Parole required\n• Consular processing: Spouse remains abroad\n• Green card holders: Travel freely with valid card"
        },
        {
          heading: "Tips for Faster Processing",
          content: "Maximize efficiency in your case:",
          list: [
            "Submit complete applications first time",
            "Respond quickly to any USCIS requests",
            "Keep address updated with USCIS",
            "Prepare thoroughly for interview",
            "Have all documents ready before appointments",
            "Check case status regularly",
            "File within processing time inquiries when eligible"
          ]
        },
        {
          heading: "Diamond Bar Marriage Immigration Services",
          content: "SoCal Immigration Services helps Diamond Bar couples with:",
          list: [
            "Timeline planning for your specific situation",
            "Concurrent I-130/I-485 filing",
            "Consular processing preparation",
            "K-1 vs direct spouse visa analysis",
            "Work permit and travel document applications",
            "Interview preparation and support"
          ]
        }
      ],

      faqs: [
        {
          q: "What's faster: adjustment of status or consular processing?",
          a: "Adjustment of status is typically faster if your spouse can legally file in the U.S. (usually 12-20 months total vs 18-30 months for consular processing). However, individual circumstances vary."
        },
        {
          q: "Can I expedite my spouse's green card?",
          a: "USCIS rarely grants expedites for marriage cases unless there's severe financial loss, medical emergency, or humanitarian reasons. You can request expedited processing but approval is discretionary."
        },
        {
          q: "How long after the interview do I get the green card?",
          a: "If approved at the interview, the green card typically arrives within 2-4 weeks. Some cases require additional review which can add weeks or months."
        },
        {
          q: "Is K-1 faster than CR-1 visa?",
          a: "K-1 gets your fiancé to the U.S. faster, but the total time to green card is often longer because you must then file adjustment of status after marriage. Direct CR-1 is often faster for total green card timeline."
        },
        {
          q: "What if processing is taking longer than posted times?",
          a: "If your case is outside normal processing times, you can submit a case inquiry through USCIS online, call the Contact Center, or request an InfoPass appointment for complex issues."
        },
        {
          q: "Can my spouse work while waiting for green card?",
          a: "With adjustment of status, you can file for an EAD (work permit) that typically arrives within 3-6 months. K-1 holders can file for EAD after marriage when filing I-485."
        }
      ],

      cta: {
        title: "Planning Your Marriage Immigration Timeline?",
        text: "Let us help you understand realistic timelines and choose the best pathway for your situation. Free consultation for Diamond Bar couples.",
        button: "Schedule Free Consultation"
      }
    },
    ar: {
      slug: "marriage-visa-timeline-diamond-bar",
      title: "جدول تأشيرة الزواج في دايموند بار: كم يستغرق الحصول على البطاقة الخضراء لزوجك",
      subtitle: "فهم أوقات معالجة هجرة الأزواج في 2026",
      metaTitle: "جدول تأشيرة الزواج دايموند بار | وقت معالجة البطاقة الخضراء للزوج 2026",
      metaDescription: "جدول تأشيرة الزواج في دايموند بار. أوقات معالجة CR-1، IR-1، K-1، جدول تعديل الوضع. دعم عربي. اتصل (714) 421-8872.",
      keywords: "جدول تأشيرة الزواج دايموند بار، وقت البطاقة الخضراء للزوج، معالجة CR-1، جدول تأشيرة IR-1",
      category: "الزواج",
      location: "دايموند بار",
      date: "14 يناير 2026",
      readTime: "11 دقيقة قراءة",
      author: "خدمات الهجرة في جنوب كاليفورنيا",
      image: "/images/blog/marriage.jpg",
      summary: "تختلف أوقات معالجة البطاقة الخضراء للزوج من 12-36 شهراً حسب ما إذا كان زوجك في الولايات المتحدة أو في الخارج ونوع الطلب الذي تقدمه. فهم الجدول الزمني يساعدك على التخطيط لرحلة هجرتك.",
      locationIntro: "للأزواج في دايموند بار الذين يتنقلون في عملية الهجرة القائمة على الزواج، فهم الجداول الزمنية الواقعية أمر حاسم للتخطيط. تساعد خدمات الهجرة في جنوب كاليفورنيا العائلات العربية في فهم ما يمكن توقعه خلال رحلة هجرة الأزواج.",

      sections: [
        {
          heading: "نظرة عامة على خيارات هجرة الزواج",
          content: "عند كفالة زوجك للبطاقة الخضراء، لديك مسارات مختلفة:\n\n• تعديل الوضع (الزوج موجود في الولايات المتحدة)\n• المعالجة القنصلية IR-1/CR-1 (الزوج في الخارج)\n• تأشيرة الخطيب K-1 ثم التعديل (الخطيب في الخارج)\n\nتختلف الجداول الزمنية بشكل كبير بين هذه الخيارات."
        },
        {
          heading: "جدول تعديل الوضع (الزوج في الولايات المتحدة)",
          content: "إذا كان زوجك موجوداً في الولايات المتحدة بشكل قانوني، عادة ما يكون تعديل الوضع الأسرع:",
          table: {
            headers: ["الخطوة", "وقت المعالجة", "التراكمي"],
            rows: [
              ["تقديم I-130 + I-485 معاً", "استلام أولي: 2-4 أسابيع", "شهر واحد"],
              ["موعد القياسات الحيوية", "4-8 أسابيع بعد التقديم", "2-3 أشهر"],
              ["EAD/الإفراج المشروط المسبق", "3-6 أشهر", "3-6 أشهر"],
              ["جدولة المقابلة", "8-18 شهر بعد التقديم", "8-18 شهر"],
              ["القرار بعد المقابلة", "نفس اليوم إلى شهرين", "8-20 شهر"],
              ["استلام البطاقة الخضراء", "2-4 أسابيع بعد الموافقة", "9-21 شهر"]
            ]
          }
        },
        {
          heading: "جدول المعالجة القنصلية (الزوج في الخارج)",
          content: "إذا كان زوجك خارج الولايات المتحدة، العملية لها خطوات أكثر:",
          table: {
            headers: ["الخطوة", "وقت المعالجة", "التراكمي"],
            rows: [
              ["موافقة I-130", "12-18 شهر", "12-18 شهر"],
              ["نقل القضية إلى NVC", "4-8 أسابيع", "13-20 شهر"],
              ["جمع وثائق NVC", "1-3 أشهر", "14-23 شهر"],
              ["مراجعة NVC والجدولة", "1-3 أشهر", "15-26 شهر"],
              ["مقابلة السفارة", "التوافر المجدول", "16-30 شهر"],
              ["إصدار التأشيرة", "1-2 أسبوع بعد المقابلة", "16-30 شهر"],
              ["الدخول للولايات المتحدة", "صالح 6 أشهر", "17-31 شهر"]
            ]
          }
        },
        {
          heading: "جدول تأشيرة الخطيب K-1",
          content: "مسار K-1 له جدوله الخاص:",
          table: {
            headers: ["الخطوة", "وقت المعالجة", "التراكمي"],
            rows: [
              ["موافقة I-129F", "8-14 شهر", "8-14 شهر"],
              ["معالجة NVC", "4-6 أسابيع", "9-15 شهر"],
              ["مقابلة السفارة", "2-4 أشهر", "11-19 شهر"],
              ["الدخول والزواج", "90 يوم للزواج", "12-20 شهر"],
              ["تقديم تعديل I-485", "بعد الزواج", "12-20 شهر"],
              ["موافقة البطاقة الخضراء", "8-18 شهر إضافي", "20-38 شهر"]
            ]
          }
        },
        {
          heading: "الفروق بين تأشيرة IR-1 و CR-1",
          content: "يعتمد نوع التأشيرة على مدة الزواج:\n\n• IR-1 (قريب مباشر): متزوج 2+ سنة عند إصدار البطاقة الخضراء\n  - تحصل على بطاقة خضراء دائمة 10 سنوات\n  - لا شروط لإزالتها\n\n• CR-1 (مقيم مشروط): متزوج أقل من سنتين\n  - تحصل على بطاقة خضراء مشروطة سنتين\n  - يجب تقديم I-751 لإزالة الشروط\n  - قدم معاً قبل 90 يوم من انتهاء الصلاحية"
        },
        {
          heading: "العوامل التي تؤثر على الجدول الزمني",
          content: "عدة عوامل يمكن أن تسرع أو تؤخر قضيتك:",
          list: [
            "عبء عمل مكتب USCIS (يختلف حسب الموقع)",
            "الطلبات الكاملة مقابل غير الكاملة",
            "تأخيرات التحقق من الخلفية",
            "طلبات الأدلة (RFE)",
            "توفر مقابلة السفارة",
            "المعالجة الإدارية",
            "تراكمات متعلقة بكوفيد-19 (تتناقص)"
          ]
        },
        {
          heading: "كيفية التحقق من أوقات المعالجة",
          content: "راقب قضيتك وأوقات المعالجة الحالية:",
          steps: [
            {
              title: "حساب USCIS عبر الإنترنت",
              description: "تحقق من حالة القضية برقم الاستلام"
            },
            {
              title: "أوقات معالجة USCIS",
              description: "اعرض الأوقات الحالية حسب النموذج والمكتب"
            },
            {
              title: "حالة CEAC",
              description: "تتبع الحالات القنصلية من خلال وزارة الخارجية"
            },
            {
              title: "حالة قضية NVC",
              description: "تحقق من تقدم المركز الوطني للتأشيرات"
            },
            {
              title: "استفسار القضية",
              description: "قدم استفسار إذا كان خارج وقت المعالجة العادي"
            }
          ]
        },
        {
          heading: "تصريح العمل أثناء العملية",
          content: "خيارات تصريح العمل أثناء الانتظار:\n\n• تعديل الوضع: يمكن تقديم I-765 لـ EAD\n• K-1 بعد الزواج: قدم I-485 و I-765\n• المعالجة القنصلية: لا تصريح عمل أمريكي حتى الدخول\n• بطاقة كومبو: EAD + الإفراج المشروط المسبق في واحد"
        },
        {
          heading: "السفر أثناء العملية",
          content: "اعتبارات السفر تختلف حسب الوضع:\n\n• تعديل معلق: تحتاج الإفراج المشروط المسبق للسفر\n• K-1 تعديل معلق: الإفراج المشروط المسبق مطلوب\n• المعالجة القنصلية: الزوج يبقى في الخارج\n• حاملو البطاقة الخضراء: سافر بحرية مع بطاقة صالحة"
        },
        {
          heading: "نصائح للمعالجة الأسرع",
          content: "حقق أقصى كفاءة في قضيتك:",
          list: [
            "قدم طلبات كاملة من المرة الأولى",
            "استجب بسرعة لأي طلبات USCIS",
            "حافظ على تحديث العنوان مع USCIS",
            "استعد جيداً للمقابلة",
            "جهز جميع الوثائق قبل المواعيد",
            "تحقق من حالة القضية بانتظام",
            "قدم استفسارات وقت المعالجة عند الأهلية"
          ]
        },
        {
          heading: "خدمات هجرة الزواج في دايموند بار",
          content: "تساعد خدمات الهجرة في جنوب كاليفورنيا الأزواج في دايموند بار في:",
          list: [
            "تخطيط الجدول الزمني لوضعك المحدد",
            "تقديم I-130/I-485 متزامن",
            "إعداد المعالجة القنصلية",
            "تحليل K-1 مقابل تأشيرة الزوج المباشرة",
            "طلبات تصريح العمل ووثائق السفر",
            "إعداد ودعم المقابلة"
          ]
        }
      ],

      faqs: [
        {
          q: "ما الأسرع: تعديل الوضع أم المعالجة القنصلية؟",
          a: "تعديل الوضع عادة أسرع إذا كان زوجك يمكنه التقديم قانونياً في الولايات المتحدة (عادة 12-20 شهر إجمالي مقابل 18-30 شهر للمعالجة القنصلية). ومع ذلك، تختلف الظروف الفردية."
        },
        {
          q: "هل يمكنني تعجيل البطاقة الخضراء لزوجي؟",
          a: "نادراً ما توافق USCIS على التعجيل لحالات الزواج ما لم يكن هناك خسارة مالية شديدة، طوارئ طبية، أو أسباب إنسانية. يمكنك طلب معالجة معجلة لكن الموافقة تقديرية."
        },
        {
          q: "كم بعد المقابلة أحصل على البطاقة الخضراء؟",
          a: "إذا وافقوا في المقابلة، تصل البطاقة الخضراء عادة خلال 2-4 أسابيع. بعض الحالات تتطلب مراجعة إضافية التي يمكن أن تضيف أسابيع أو أشهر."
        },
        {
          q: "هل K-1 أسرع من تأشيرة CR-1؟",
          a: "K-1 تحضر خطيبتك للولايات المتحدة أسرع، لكن الوقت الإجمالي للبطاقة الخضراء غالباً أطول لأنك يجب أن تقدم تعديل الوضع بعد الزواج. CR-1 المباشر غالباً أسرع للجدول الزمني الإجمالي للبطاقة الخضراء."
        },
        {
          q: "ماذا لو كانت المعالجة تأخذ أطول من الأوقات المنشورة؟",
          a: "إذا كانت قضيتك خارج أوقات المعالجة العادية، يمكنك تقديم استفسار قضية من خلال USCIS عبر الإنترنت، الاتصال بمركز الاتصال، أو طلب موعد InfoPass للمشاكل المعقدة."
        },
        {
          q: "هل يمكن لزوجي العمل أثناء انتظار البطاقة الخضراء؟",
          a: "مع تعديل الوضع، يمكنك التقدم لـ EAD (تصريح العمل) الذي يصل عادة خلال 3-6 أشهر. حاملو K-1 يمكنهم التقدم لـ EAD بعد الزواج عند تقديم I-485."
        }
      ],

      cta: {
        title: "تخطط لجدول هجرة زواجك؟",
        text: "دعنا نساعدك في فهم الجداول الزمنية الواقعية واختيار أفضل مسار لوضعك. استشارة مجانية للأزواج في دايموند بار.",
        button: "حدد موعد استشارة مجانية"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default MarriageVisaTimelineDiamondBar;
