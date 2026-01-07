import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const DeportationDefensePasadena = ({ language }) => {
  const content = {
    en: {
      slug: "deportation-defense-help-pasadena",
      title: "Deportation Defense Help in Pasadena: Immigration Court Assistance for Arab Families",
      subtitle: "Understanding your rights and options when facing removal proceedings in Los Angeles County",
      metaTitle: "Deportation Defense Pasadena | Immigration Court Help Los Angeles",
      metaDescription: "Deportation defense help in Pasadena for Arab families facing removal. Know your rights in immigration court. Arabic support. Call (714) 421-8872.",
      keywords: "deportation defense Pasadena, immigration court Los Angeles, removal proceedings help, Arab deportation assistance",
      category: "Asylum & Refugee",
      location: "Pasadena",
      date: "January 1, 2026",
      readTime: "13 min read",
      author: "SoCal Immigration Services",
      locationIntro: "Pasadena, in Los Angeles County, is home to a diverse immigrant community including many Arab families. Facing deportation or removal proceedings is extremely stressful. Understanding your rights, the process, and available relief options is critical for anyone in immigration court.",

      sections: [
        {
          heading: "Understanding Removal Proceedings",
          content: "Removal proceedings occur when the government seeks to deport someone from the United States. These cases are heard in immigration court before an immigration judge. If you've received a Notice to Appear (NTA), you are in removal proceedings.\n\nIMPORTANT: We are not attorneys and cannot represent you in immigration court. However, we can help you:\n• Understand the process and your rights\n• Prepare documents for your case\n• Connect with qualified immigration attorneys\n• Provide translation and interpretation services"
        },
        {
          heading: "Common Reasons for Removal Proceedings",
          list: [
            "Visa overstay or unlawful presence",
            "Entry without inspection (EWI)",
            "Criminal convictions (certain crimes)",
            "Immigration fraud or misrepresentation",
            "Failure to maintain valid status",
            "Asylum denial",
            "Removal of conditional residence"
          ]
        },
        {
          heading: "Your Rights in Immigration Court",
          content: "Everyone in removal proceedings has fundamental rights:",
          list: [
            "Right to be represented by an attorney (at your own expense)",
            "Right to review the evidence against you",
            "Right to present your own evidence",
            "Right to appeal an immigration judge's decision",
            "Right to an interpreter",
            "Right to apply for relief from removal if eligible"
          ]
        },
        {
          heading: "Forms of Relief from Deportation",
          table: {
            headers: ["Relief Type", "Who May Qualify", "Key Requirements"],
            rows: [
              ["Asylum", "Those fearing persecution", "Apply within 1 year of arrival"],
              ["Cancellation of Removal (LPR)", "Green card holders", "7 years residence, 5 years as LPR"],
              ["Cancellation of Removal (Non-LPR)", "Certain undocumented", "10 years presence, exceptional hardship"],
              ["VAWA", "Abuse victims", "Abuse by USC/LPR spouse or parent"],
              ["Adjustment of Status", "Immediate relatives", "Eligible family relationship"],
              ["Voluntary Departure", "Those without relief", "Clean record, means to depart"]
            ]
          }
        },
        {
          heading: "The Immigration Court Process",
          steps: [
            { title: "Notice to Appear (NTA)", description: "Government issues charges and date for court appearance" },
            { title: "Master Calendar Hearing", description: "Initial hearing to review charges and set case timeline" },
            { title: "Individual Hearing", description: "Present evidence, testimony, and arguments before judge" },
            { title: "Judge's Decision", description: "Immigration judge orders removal or grants relief" },
            { title: "Appeal (if needed)", description: "Appeal to Board of Immigration Appeals within 30 days" }
          ]
        },
        {
          heading: "How We Can Help",
          content: "While we cannot represent you in court, our document preparation services can assist with:\n\n• Gathering and organizing supporting documents\n• Translating foreign language documents for court submission\n• Preparing applications for relief (asylum, VAWA, etc.)\n• Providing certified translations of birth certificates, marriage certificates, and other vital records\n• Helping you understand USCIS forms and requirements\n• Connecting you with experienced immigration attorneys in Pasadena"
        }
      ],

      faqs: [
        { q: "Can I work while in removal proceedings?", a: "If you had valid work authorization before proceedings began, it may remain valid. Some forms of relief, like asylum, allow you to apply for work authorization while your case is pending." },
        { q: "How long do removal proceedings take?", a: "Cases can take months to years depending on court backlogs, complexity of your case, and whether you're applying for relief. The Los Angeles area has significant backlogs." },
        { q: "Should I attend my immigration court hearing?", a: "Yes, ALWAYS attend your court hearings. Failure to appear typically results in an order of removal in your absence, making future relief much harder to obtain." },
        { q: "Can I stop deportation?", a: "Possibly. Various forms of relief exist depending on your situation. Consult with an immigration attorney immediately to understand your options." },
        { q: "What happens if I'm ordered deported?", a: "You may have 30 days to appeal to the Board of Immigration Appeals. An attorney can advise whether an appeal is appropriate for your case." }
      ],

      cta: {
        title: "Need Help Understanding Your Immigration Case?",
        text: "Our Arabic-speaking team provides document preparation, translation services, and attorney referrals for families facing immigration court.",
        button: "Schedule Consultation"
      }
    },
    ar: {
      slug: "deportation-defense-help-pasadena",
      title: "مساعدة الدفاع ضد الترحيل في باسادينا: مساعدة محكمة الهجرة للعائلات العربية",
      subtitle: "فهم حقوقك وخياراتك عند مواجهة إجراءات الإبعاد في مقاطعة لوس أنجلوس",
      metaTitle: "الدفاع ضد الترحيل باسادينا | مساعدة محكمة الهجرة لوس أنجلوس",
      metaDescription: "مساعدة الدفاع ضد الترحيل في باسادينا للعائلات العربية التي تواجه الإبعاد. اعرف حقوقك في محكمة الهجرة. دعم بالعربية. اتصل (714) 421-8872.",
      keywords: "الدفاع ضد الترحيل باسادينا، محكمة الهجرة لوس أنجلوس، مساعدة إجراءات الإبعاد",
      category: "اللجوء واللاجئين",
      location: "باسادينا",
      date: "1 يناير 2026",
      readTime: "13 دقيقة قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "باسادينا، في مقاطعة لوس أنجلوس، هي موطن لمجتمع مهاجر متنوع بما في ذلك العديد من العائلات العربية. مواجهة الترحيل أو إجراءات الإبعاد أمر مرهق للغاية. فهم حقوقك والعملية وخيارات الإعفاء المتاحة أمر حاسم لأي شخص في محكمة الهجرة.",

      sections: [
        {
          heading: "فهم إجراءات الإبعاد",
          content: "تحدث إجراءات الإبعاد عندما تسعى الحكومة لترحيل شخص من الولايات المتحدة. تُسمع هذه القضايا في محكمة الهجرة أمام قاضي هجرة. إذا تلقيت إشعاراً بالمثول (NTA)، فأنت في إجراءات إبعاد.\n\nمهم: نحن لسنا محامين ولا يمكننا تمثيلك في محكمة الهجرة. ومع ذلك، يمكننا مساعدتك في:\n• فهم العملية وحقوقك\n• إعداد الوثائق لقضيتك\n• التواصل مع محامي هجرة مؤهلين\n• توفير خدمات الترجمة والترجمة الفورية"
        },
        {
          heading: "الأسباب الشائعة لإجراءات الإبعاد",
          list: [
            "تجاوز مدة التأشيرة أو الوجود غير القانوني",
            "الدخول بدون تفتيش (EWI)",
            "الإدانات الجنائية (جرائم معينة)",
            "الاحتيال في الهجرة أو التحريف",
            "الفشل في الحفاظ على وضع صالح",
            "رفض اللجوء",
            "إلغاء الإقامة المشروطة"
          ]
        },
        {
          heading: "حقوقك في محكمة الهجرة",
          content: "كل شخص في إجراءات الإبعاد له حقوق أساسية:",
          list: [
            "الحق في التمثيل بمحامٍ (على نفقتك الخاصة)",
            "الحق في مراجعة الأدلة ضدك",
            "الحق في تقديم أدلتك الخاصة",
            "الحق في استئناف قرار قاضي الهجرة",
            "الحق في مترجم",
            "الحق في التقدم للإعفاء من الإبعاد إذا كنت مؤهلاً"
          ]
        },
        {
          heading: "أشكال الإعفاء من الترحيل",
          table: {
            headers: ["نوع الإعفاء", "من قد يتأهل", "المتطلبات الرئيسية"],
            rows: [
              ["اللجوء", "أولئك الذين يخشون الاضطهاد", "التقديم خلال سنة من الوصول"],
              ["إلغاء الإبعاد (LPR)", "حاملو البطاقة الخضراء", "7 سنوات إقامة، 5 سنوات كـ LPR"],
              ["إلغاء الإبعاد (غير LPR)", "بعض غير الموثقين", "10 سنوات وجود، صعوبة استثنائية"],
              ["VAWA", "ضحايا الإساءة", "إساءة من زوج أو والد مواطن أو LPR"],
              ["تعديل الوضع", "الأقارب المباشرين", "علاقة عائلية مؤهلة"],
              ["المغادرة الطوعية", "أولئك بدون إعفاء", "سجل نظيف، وسائل للمغادرة"]
            ]
          }
        },
        {
          heading: "عملية محكمة الهجرة",
          steps: [
            { title: "إشعار بالمثول (NTA)", description: "الحكومة تصدر التهم وتاريخ المثول أمام المحكمة" },
            { title: "جلسة التقويم الرئيسية", description: "الجلسة الأولى لمراجعة التهم وتحديد جدول القضية" },
            { title: "الجلسة الفردية", description: "تقديم الأدلة والشهادة والحجج أمام القاضي" },
            { title: "قرار القاضي", description: "قاضي الهجرة يأمر بالإبعاد أو يمنح الإعفاء" },
            { title: "الاستئناف (إذا لزم)", description: "الاستئناف لمجلس استئناف الهجرة خلال 30 يوماً" }
          ]
        },
        {
          heading: "كيف يمكننا المساعدة",
          content: "بينما لا يمكننا تمثيلك في المحكمة، خدمات إعداد الوثائق لدينا يمكن أن تساعد في:\n\n• جمع وتنظيم الوثائق الداعمة\n• ترجمة الوثائق باللغات الأجنبية لتقديمها للمحكمة\n• إعداد طلبات الإعفاء (اللجوء، VAWA، إلخ)\n• توفير ترجمات معتمدة لشهادات الميلاد، شهادات الزواج، والسجلات الحيوية الأخرى\n• مساعدتك في فهم نماذج ومتطلبات USCIS\n• توصيلك بمحامي هجرة ذوي خبرة في باسادينا"
        }
      ],

      faqs: [
        { q: "هل يمكنني العمل أثناء إجراءات الإبعاد؟", a: "إذا كان لديك تصريح عمل صالح قبل بدء الإجراءات، قد يظل صالحاً. بعض أشكال الإعفاء، مثل اللجوء، تسمح لك بالتقدم لتصريح العمل أثناء انتظار قضيتك." },
        { q: "كم تستغرق إجراءات الإبعاد؟", a: "يمكن أن تستغرق القضايا أشهراً إلى سنوات اعتماداً على تراكم المحكمة، تعقيد قضيتك، وما إذا كنت تتقدم للإعفاء. منطقة لوس أنجلوس لديها تراكم كبير." },
        { q: "هل يجب أن أحضر جلسة محكمة الهجرة؟", a: "نعم، احضر دائماً جلسات محكمتك. عدم الحضور عادة يؤدي إلى أمر بالإبعاد في غيابك، مما يجعل الإعفاء المستقبلي أصعب بكثير للحصول عليه." },
        { q: "هل يمكنني إيقاف الترحيل؟", a: "ربما. توجد أشكال مختلفة من الإعفاء اعتماداً على وضعك. استشر محامي هجرة فوراً لفهم خياراتك." },
        { q: "ماذا يحدث إذا صدر أمر بترحيلي؟", a: "قد يكون لديك 30 يوماً للاستئناف لمجلس استئناف الهجرة. يمكن للمحامي تقديم المشورة حول ما إذا كان الاستئناف مناسباً لقضيتك." }
      ],

      cta: {
        title: "تحتاج مساعدة لفهم قضية هجرتك؟",
        text: "فريقنا الناطق بالعربية يوفر إعداد الوثائق وخدمات الترجمة وإحالات المحامين للعائلات التي تواجه محكمة الهجرة.",
        button: "حجز استشارة"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default DeportationDefensePasadena;
