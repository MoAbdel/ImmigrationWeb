import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const PalestinianRefugeeStatusDaly = ({ language }) => {
  const content = {
    en: {
      slug: "palestinian-refugee-status-daly-city",
      title: "Palestinian Refugee Status in Daly City: Immigration Options for Palestinians in the Bay Area",
      subtitle: "Understanding asylum, humanitarian protection, and immigration pathways for Palestinian families",
      metaTitle: "Palestinian Refugee Status Daly City | Palestinian Immigration Help Bay Area",
      metaDescription: "Immigration help for Palestinians in Daly City. Asylum applications, humanitarian protection, family petitions. Arabic-speaking staff. Call (714) 421-8872.",
      keywords: "Palestinian refugee Daly City, Palestinian asylum Bay Area, Palestinian immigration help, stateless Palestinian immigration, humanitarian protection",
      category: "Asylum & Refugee",
      location: "Daly City",
      date: "January 20, 2026",
      readTime: "12 min read",
      author: "SoCal Immigration Services",
      locationIntro: "Palestinians face unique immigration challenges due to statelessness and ongoing conflict. For Palestinian families in Daly City and the Bay Area, understanding available immigration options is crucial. SoCal Immigration Services provides Arabic-speaking assistance for Palestinians seeking protection and immigration benefits.",

      sections: [
        {
          heading: "Unique Challenges for Palestinians",
          content: "Palestinians face specific immigration obstacles:\n\n• Statelessness - Many lack recognized citizenship\n• Travel document limitations\n• Complex country of origin issues\n• UNRWA registration considerations\n• Historical displacement documentation\n• Varying status across host countries"
        },
        {
          heading: "Asylum for Palestinians",
          content: "Palestinians may qualify for asylum based on:",
          list: [
            "Persecution based on nationality/ethnicity",
            "Political opinion persecution",
            "Religious persecution (Christian Palestinians)",
            "Persecution by non-state actors",
            "Inability of authorities to protect",
            "Past persecution or well-founded fear"
          ]
        },
        {
          heading: "Country of Origin Issues",
          content: "Determining 'country of origin' for Palestinians:\n\nPossible countries of origin:\n• Gaza Strip\n• West Bank\n• Israel (for Palestinians with citizenship)\n• Jordan (for those with Jordanian citizenship)\n• Lebanon, Syria, etc. (for refugees in those countries)\n\nThis affects which country conditions apply to your case."
        },
        {
          heading: "UNRWA Registration",
          content: "If registered with UNRWA (UN agency for Palestinian refugees):\n\n• UNRWA registration can be evidence of refugee status\n• May affect asylum eligibility analysis\n• Shows history of displacement\n• Does not automatically grant U.S. immigration benefits\n• Can be helpful documentation for your case"
        },
        {
          heading: "Asylum Application Process",
          content: "Steps for Palestinian asylum seekers:",
          list: [
            "File Form I-589 within 1 year of arrival",
            "Gather country conditions evidence",
            "Document personal persecution or fear",
            "Provide identity documents (or explain absence)",
            "Attend asylum interview or court hearing",
            "Await decision",
            "If approved, apply for green card after 1 year"
          ]
        },
        {
          heading: "Evidence for Palestinian Asylum",
          content: "Helpful evidence includes:",
          list: [
            "UNRWA registration documents",
            "Palestinian Authority ID or travel document",
            "Family registration records",
            "Evidence of residence in Palestinian territories",
            "Country conditions reports (State Dept, Human Rights Watch)",
            "News articles about conditions",
            "Personal statements detailing persecution",
            "Medical records if injuries from violence",
            "Witness affidavits from family/community"
          ]
        },
        {
          heading: "Withholding of Removal & CAT",
          content: "Alternative protections if asylum denied:\n\nWithholding of Removal:\n• Higher standard than asylum\n• Cannot be returned to danger\n• No path to green card\n• Allows work authorization\n\nConvention Against Torture (CAT):\n• Protection from torture\n• Can be granted even with bars to asylum\n• Allows work authorization\n• No path to green card"
        },
        {
          heading: "Family-Based Immigration",
          content: "If you have U.S. citizen or resident relatives:\n\nOptions:\n• Immediate relative petition (spouse, parent, child of citizen)\n• Family preference categories\n• Can pursue family petition while asylum pending\n• Dual-track approach may be beneficial"
        },
        {
          heading: "Temporary Protected Status (TPS)",
          content: "TPS availability for Palestinians:\n\n• TPS is country-specific\n• Check current TPS designations\n• Palestinians from certain areas may qualify\n• Provides work authorization and protection\n• Does not lead directly to green card"
        },
        {
          heading: "Work Authorization While Waiting",
          content: "Getting work permission:",
          table: {
            headers: ["Situation", "Work Authorization", "How to Get"],
            rows: [
              ["Asylum pending 180+ days", "Yes (if no delays caused by you)", "File I-765 with (c)(8) category"],
              ["Withholding granted", "Yes", "File I-765"],
              ["CAT protection granted", "Yes", "File I-765"],
              ["TPS (if designated)", "Yes", "Included with TPS application"]
            ]
          }
        },
        {
          heading: "Daly City Palestinian Services",
          content: "SoCal Immigration Services helps Palestinians with:",
          list: [
            "Arabic-speaking staff (Palestinian dialect understood)",
            "Asylum application preparation",
            "Country conditions documentation",
            "Statelessness documentation",
            "Work authorization applications",
            "Family petition coordination",
            "Referrals to Palestinian community organizations"
          ]
        }
      ],

      faqs: [
        {
          q: "Can Palestinians apply for asylum in the United States?",
          a: "Yes. Palestinians can apply for asylum based on persecution or well-founded fear of persecution. The specific grounds depend on individual circumstances - ethnicity, political opinion, religion, or particular social group membership."
        },
        {
          q: "What if I don't have a passport?",
          a: "Many Palestinians lack passports due to statelessness. USCIS understands this. You can explain the situation and provide alternative identity documents like UNRWA registration, Palestinian Authority ID, or family documents."
        },
        {
          q: "Does UNRWA registration help my asylum case?",
          a: "UNRWA registration can help document your Palestinian refugee status and history of displacement. However, it doesn't automatically make you eligible for U.S. asylum - you still need to show persecution or fear."
        },
        {
          q: "Can I work while my asylum case is pending?",
          a: "Yes, after your asylum application has been pending for 180 days (without delays caused by you), you can apply for work authorization."
        },
        {
          q: "What if I entered without papers?",
          a: "Entering without inspection doesn't bar you from asylum. You can still apply if you file within one year of arrival and meet asylum requirements."
        },
        {
          q: "Is there TPS for Palestinians?",
          a: "TPS designations change. Currently, you should check if Palestinians from Gaza or West Bank have TPS designation. Even without TPS, asylum remains an option."
        }
      ],

      cta: {
        title: "Palestinian in Daly City Seeking Immigration Help?",
        text: "Our Arabic-speaking team understands the unique challenges Palestinians face. Let us help you explore asylum, family immigration, and other options.",
        button: "Schedule Free Consultation"
      }
    },
    ar: {
      slug: "palestinian-refugee-status-daly-city",
      title: "وضع اللاجئ الفلسطيني في دالي سيتي: خيارات الهجرة للفلسطينيين في منطقة الخليج",
      subtitle: "فهم اللجوء، الحماية الإنسانية، ومسارات الهجرة للعائلات الفلسطينية",
      metaTitle: "وضع اللاجئ الفلسطيني دالي سيتي | مساعدة الهجرة الفلسطينية منطقة الخليج",
      metaDescription: "مساعدة الهجرة للفلسطينيين في دالي سيتي. طلبات اللجوء، الحماية الإنسانية، التماسات العائلة. فريق يتحدث العربية. اتصل (714) 421-8872.",
      keywords: "اللاجئ الفلسطيني دالي سيتي، اللجوء الفلسطيني منطقة الخليج، مساعدة الهجرة الفلسطينية، هجرة الفلسطينيين عديمي الجنسية، الحماية الإنسانية",
      category: "اللجوء واللاجئين",
      location: "دالي سيتي",
      date: "20 يناير 2026",
      readTime: "12 دقيقة قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "يواجه الفلسطينيون تحديات هجرة فريدة بسبب انعدام الجنسية والصراع المستمر. للعائلات الفلسطينية في دالي سيتي ومنطقة الخليج، فهم خيارات الهجرة المتاحة أمر حاسم. توفر خدمات حلول الهجرة مساعدة بالعربية للفلسطينيين الباحثين عن الحماية ومزايا الهجرة.",

      sections: [
        {
          heading: "التحديات الفريدة للفلسطينيين",
          content: "يواجه الفلسطينيون عقبات هجرة محددة:\n\n• انعدام الجنسية - العديد يفتقرون للمواطنة المعترف بها\n• قيود وثائق السفر\n• مشاكل بلد المنشأ المعقدة\n• اعتبارات تسجيل الأونروا\n• توثيق التهجير التاريخي\n• الوضع المتفاوت عبر الدول المضيفة"
        },
        {
          heading: "اللجوء للفلسطينيين",
          content: "قد يتأهل الفلسطينيون للجوء بناءً على:",
          list: [
            "الاضطهاد على أساس الجنسية/العرق",
            "اضطهاد الرأي السياسي",
            "الاضطهاد الديني (الفلسطينيون المسيحيون)",
            "الاضطهاد من جهات فاعلة غير حكومية",
            "عدم قدرة السلطات على الحماية",
            "الاضطهاد السابق أو الخوف المبرر"
          ]
        },
        {
          heading: "مشاكل بلد المنشأ",
          content: "تحديد 'بلد المنشأ' للفلسطينيين:\n\nالبلدان المحتملة للمنشأ:\n• قطاع غزة\n• الضفة الغربية\n• إسرائيل (للفلسطينيين الحاصلين على الجنسية)\n• الأردن (للحاصلين على الجنسية الأردنية)\n• لبنان، سوريا، إلخ. (للاجئين في تلك البلدان)\n\nهذا يؤثر على ظروف البلد التي تنطبق على قضيتك."
        },
        {
          heading: "تسجيل الأونروا",
          content: "إذا كنت مسجلاً لدى الأونروا (وكالة الأمم المتحدة للاجئين الفلسطينيين):\n\n• تسجيل الأونروا يمكن أن يكون دليلاً على وضع اللاجئ\n• قد يؤثر على تحليل أهلية اللجوء\n• يظهر تاريخ التهجير\n• لا يمنح تلقائياً مزايا الهجرة الأمريكية\n• يمكن أن يكون توثيقاً مفيداً لقضيتك"
        },
        {
          heading: "عملية طلب اللجوء",
          content: "خطوات لطالبي اللجوء الفلسطينيين:",
          list: [
            "قدم نموذج I-589 خلال سنة واحدة من الوصول",
            "اجمع أدلة ظروف البلد",
            "وثق الاضطهاد الشخصي أو الخوف",
            "قدم وثائق الهوية (أو اشرح غيابها)",
            "احضر مقابلة اللجوء أو جلسة المحكمة",
            "انتظر القرار",
            "إذا وافقوا، تقدم للبطاقة الخضراء بعد سنة"
          ]
        },
        {
          heading: "أدلة اللجوء الفلسطيني",
          content: "الأدلة المفيدة تشمل:",
          list: [
            "وثائق تسجيل الأونروا",
            "هوية أو وثيقة سفر السلطة الفلسطينية",
            "سجلات تسجيل العائلة",
            "دليل الإقامة في الأراضي الفلسطينية",
            "تقارير ظروف البلد (وزارة الخارجية، هيومن رايتس ووتش)",
            "مقالات إخبارية عن الظروف",
            "بيانات شخصية تفصل الاضطهاد",
            "سجلات طبية إذا كانت هناك إصابات من العنف",
            "إفادات شهود من العائلة/المجتمع"
          ]
        },
        {
          heading: "وقف الترحيل واتفاقية مناهضة التعذيب",
          content: "حمايات بديلة إذا رُفض اللجوء:\n\nوقف الترحيل:\n• معيار أعلى من اللجوء\n• لا يمكن إعادتك للخطر\n• لا مسار للبطاقة الخضراء\n• يسمح بتصريح العمل\n\nاتفاقية مناهضة التعذيب (CAT):\n• الحماية من التعذيب\n• يمكن منحها حتى مع موانع اللجوء\n• يسمح بتصريح العمل\n• لا مسار للبطاقة الخضراء"
        },
        {
          heading: "الهجرة القائمة على العائلة",
          content: "إذا كان لديك أقارب مواطنون أو مقيمون أمريكيون:\n\nالخيارات:\n• التماس القريب المباشر (زوج، والد، طفل مواطن)\n• فئات التفضيل العائلي\n• يمكن متابعة التماس العائلة أثناء انتظار اللجوء\n• نهج المسار المزدوج قد يكون مفيداً"
        },
        {
          heading: "وضع الحماية المؤقتة (TPS)",
          content: "توفر TPS للفلسطينيين:\n\n• TPS خاص بالبلد\n• تحقق من تعيينات TPS الحالية\n• الفلسطينيون من مناطق معينة قد يتأهلون\n• يوفر تصريح عمل وحماية\n• لا يؤدي مباشرة للبطاقة الخضراء"
        },
        {
          heading: "تصريح العمل أثناء الانتظار",
          content: "الحصول على إذن العمل:",
          table: {
            headers: ["الوضع", "تصريح العمل", "كيفية الحصول"],
            rows: [
              ["اللجوء معلق 180+ يوماً", "نعم (إذا لم تسبب تأخيرات)", "قدم I-765 بفئة (c)(8)"],
              ["وقف الترحيل ممنوح", "نعم", "قدم I-765"],
              ["حماية CAT ممنوحة", "نعم", "قدم I-765"],
              ["TPS (إذا كان معيناً)", "نعم", "مضمن مع طلب TPS"]
            ]
          }
        },
        {
          heading: "خدمات الفلسطينيين في دالي سيتي",
          content: "تساعد خدمات حلول الهجرة الفلسطينيين في:",
          list: [
            "فريق يتحدث العربية (اللهجة الفلسطينية مفهومة)",
            "إعداد طلب اللجوء",
            "توثيق ظروف البلد",
            "توثيق انعدام الجنسية",
            "طلبات تصريح العمل",
            "تنسيق التماس العائلة",
            "إحالات لمنظمات المجتمع الفلسطيني"
          ]
        }
      ],

      faqs: [
        {
          q: "هل يمكن للفلسطينيين التقدم للجوء في الولايات المتحدة؟",
          a: "نعم. يمكن للفلسطينيين التقدم للجوء بناءً على الاضطهاد أو الخوف المبرر من الاضطهاد. الأسباب المحددة تعتمد على الظروف الفردية - العرق، الرأي السياسي، الدين، أو عضوية مجموعة اجتماعية معينة."
        },
        {
          q: "ماذا لو لم يكن لدي جواز سفر؟",
          a: "العديد من الفلسطينيين يفتقرون لجوازات السفر بسبب انعدام الجنسية. USCIS تفهم هذا. يمكنك شرح الوضع وتقديم وثائق هوية بديلة مثل تسجيل الأونروا، هوية السلطة الفلسطينية، أو وثائق العائلة."
        },
        {
          q: "هل يساعد تسجيل الأونروا في قضية اللجوء الخاصة بي؟",
          a: "تسجيل الأونروا يمكن أن يساعد في توثيق وضعك كلاجئ فلسطيني وتاريخ التهجير. ومع ذلك، لا يجعلك مؤهلاً تلقائياً للجوء الأمريكي - لا تزال بحاجة لإظهار الاضطهاد أو الخوف."
        },
        {
          q: "هل يمكنني العمل أثناء انتظار قضية اللجوء؟",
          a: "نعم، بعد أن يكون طلب اللجوء الخاص بك معلقاً لمدة 180 يوماً (بدون تأخيرات سببتها أنت)، يمكنك التقدم لتصريح العمل."
        },
        {
          q: "ماذا لو دخلت بدون أوراق؟",
          a: "الدخول بدون تفتيش لا يمنعك من اللجوء. لا يزال بإمكانك التقديم إذا قدمت خلال سنة واحدة من الوصول واستوفيت متطلبات اللجوء."
        },
        {
          q: "هل يوجد TPS للفلسطينيين؟",
          a: "تعيينات TPS تتغير. حالياً، يجب عليك التحقق إذا كان الفلسطينيون من غزة أو الضفة الغربية لديهم تعيين TPS. حتى بدون TPS، يبقى اللجوء خياراً."
        }
      ],

      cta: {
        title: "فلسطيني في دالي سيتي تبحث عن مساعدة الهجرة؟",
        text: "فريقنا الذي يتحدث العربية يفهم التحديات الفريدة التي يواجهها الفلسطينيون. دعنا نساعدك في استكشاف اللجوء، الهجرة العائلية، والخيارات الأخرى.",
        button: "جدولة استشارة مجانية"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default PalestinianRefugeeStatusDaly;
