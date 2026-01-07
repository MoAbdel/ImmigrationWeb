import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const PublicChargeRulePomona = ({ language }) => {
  const content = {
    en: {
      slug: "public-charge-rule-pomona",
      title: "Public Charge Rule in Pomona: What Immigrants Need to Know",
      subtitle: "Understanding how public benefits affect immigration applications",
      metaTitle: "Public Charge Rule Pomona | Immigration Benefits Guide LA County",
      metaDescription: "Public charge rule guidance in Pomona. Understanding how benefits affect green card applications. Arabic-speaking immigration help. Call (714) 421-8872.",
      keywords: "public charge rule Pomona, immigration public benefits, green card public charge, LA County immigration",
      category: "Immigration Guidelines",
      location: "Pomona",
      date: "December 30, 2025",
      readTime: "9 min read",
      author: "SoCal Immigration Services",
      locationIntro: "For immigrants in Pomona applying for green cards or visas, understanding the public charge rule is essential. SoCal Immigration Services helps families understand how this rule affects their applications and what benefits they can safely use.",

      sections: [
        {
          heading: "What is the Public Charge Rule?",
          content: "The public charge rule determines whether someone is likely to become primarily dependent on the government for support. Key points:\n\n• It's a ground of inadmissibility in immigration law\n• Applies when applying for a visa, admission, or green card\n• Considers whether you're likely to become a public charge in the future\n• Recent rule changes have affected how it's applied\n• Not all immigrants are subject to public charge"
        },
        {
          heading: "Who is Subject to Public Charge?",
          content: "Public charge applies to most immigrants applying for:",
          list: [
            "Family-based green cards",
            "Employment-based green cards",
            "Visa applications at consulates",
            "Adjustment of status in the U.S.",
            "Extension of nonimmigrant status (some categories)"
          ]
        },
        {
          heading: "Who is Exempt from Public Charge?",
          content: "Certain categories are NOT subject to public charge:",
          list: [
            "Refugees and asylees",
            "VAWA self-petitioners",
            "T visa holders (trafficking victims)",
            "U visa holders (crime victims)",
            "Special Immigrant Juveniles",
            "Certain Afghan and Iraqi special immigrants",
            "Cuban and Haitian entrants",
            "Applicants for Temporary Protected Status (TPS)",
            "Naturalization applicants"
          ]
        },
        {
          heading: "What Benefits Count Under Public Charge?",
          content: "Under current policy, only certain cash assistance programs are considered:",
          table: {
            headers: ["Counts as Public Charge", "Does NOT Count"],
            rows: [
              ["SSI (Supplemental Security Income)", "Medicaid (except long-term care)"],
              ["TANF cash assistance", "CHIP (Children's Health Insurance)"],
              ["General Assistance/General Relief", "Food stamps (SNAP)"],
              ["Long-term institutionalized care", "WIC nutrition program"],
              ["", "Housing assistance (Section 8)"],
              ["", "School lunch programs"],
              ["", "Emergency Medicaid"]
            ]
          }
        },
        {
          heading: "Factors USCIS Considers",
          content: "When evaluating public charge, USCIS looks at the totality of circumstances:",
          list: [
            "Age - very young or elderly may have less ability to work",
            "Health - chronic illness may affect ability to work",
            "Family status - number of dependents",
            "Assets, resources, and financial status",
            "Education and skills",
            "Employment history and current employment",
            "Affidavit of Support (Form I-864) from sponsor",
            "Previous receipt of public benefits"
          ]
        },
        {
          heading: "The Affidavit of Support (I-864)",
          content: "For family-based green cards, the sponsor's I-864 is critical:\n\n• Sponsor must meet 125% of federal poverty guidelines\n• Creates a legally enforceable obligation\n• Joint sponsors can help if primary sponsor's income is insufficient\n• Demonstrates the immigrant won't need public benefits\n• Required for most family-based and some employment-based cases"
        },
        {
          heading: "Income Requirements for 2025",
          content: "Sponsors must meet these income thresholds (125% of poverty guidelines):",
          table: {
            headers: ["Household Size", "Minimum Income Required"],
            rows: [
              ["2 persons", "$25,550"],
              ["3 persons", "$32,187"],
              ["4 persons", "$38,825"],
              ["5 persons", "$45,462"],
              ["6 persons", "$52,100"],
              ["Each additional", "+$6,637"]
            ]
          }
        },
        {
          heading: "Benefits Safe to Use",
          content: "The following benefits generally will NOT affect your immigration case:",
          list: [
            "Emergency Medicaid services",
            "School-based services (free lunch, special education)",
            "Immunizations and treatment of communicable diseases",
            "Emergency disaster relief",
            "Food banks and community food assistance",
            "Head Start and early education programs",
            "Job training programs",
            "COVID-19 testing and treatment (and related benefits)"
          ]
        },
        {
          heading: "Common Public Charge Concerns",
          content: "Many families worry unnecessarily about public charge. Here's the reality:",
          steps: [
            {
              title: "Using Benefits for Children",
              description: "Benefits used by U.S. citizen children generally don't count against immigrant parents."
            },
            {
              title: "Past Benefit Use",
              description: "Benefits used in the past (before applying) are only one factor in the totality of circumstances."
            },
            {
              title: "Emergency Benefits",
              description: "Emergency services including emergency Medicaid are exempt from public charge."
            },
            {
              title: "COVID-19 Related Benefits",
              description: "Benefits related to COVID-19 testing, treatment, and relief are not considered."
            }
          ]
        },
        {
          heading: "Public Charge for Arab Immigrants in Pomona",
          content: "We help Arab families in Pomona understand public charge in their specific situations:\n\n• Large families and income threshold calculations\n• Elderly parents being sponsored for green cards\n• Self-employed sponsors documenting income\n• Using household member income to meet requirements\n• Joint sponsor options when income is insufficient\n\nOur Arabic-speaking staff can explain these complex rules clearly."
        },
        {
          heading: "Our Public Charge Services in Pomona",
          content: "SoCal Immigration Services helps Pomona families with:",
          list: [
            "Public charge risk assessment",
            "Income calculation for Affidavit of Support",
            "I-864 Affidavit of Support preparation",
            "Joint sponsor documentation",
            "Asset verification and documentation",
            "Evidence of employment and skills",
            "Arabic language support",
            "Guidance on safe benefit use"
          ]
        }
      ],

      faqs: [
        {
          q: "Will using Medicaid hurt my green card application?",
          a: "Regular Medicaid generally does not count under current public charge rules. Only long-term institutionalized care at government expense is considered. Emergency Medicaid never counts."
        },
        {
          q: "Can I use food stamps while waiting for my green card?",
          a: "SNAP (food stamps) is not considered under current public charge policy. However, some families choose to avoid it during the application process to be cautious."
        },
        {
          q: "What if my sponsor doesn't make enough money?",
          a: "You can use a joint sponsor (another person who meets income requirements) or combine household income from family members living with the sponsor."
        },
        {
          q: "Are my U.S. citizen children's benefits counted against me?",
          a: "Generally no. Benefits received by U.S. citizen family members are not attributed to the immigrant applicant for public charge purposes."
        },
        {
          q: "I received benefits in the past. Is my case hopeless?",
          a: "Not at all. Past benefit use is just one factor. Strong employment, income, health, and sponsor support can overcome past benefit use."
        },
        {
          q: "Does public charge apply to citizenship applications?",
          a: "No. Public charge is not a consideration for naturalization (citizenship) applications."
        }
      ],

      cta: {
        title: "Worried About Public Charge in Pomona?",
        text: "Don't let fear of public charge keep you from benefits you need or delay your green card. Let us help you understand your situation.",
        button: "Schedule Consultation"
      }
    },
    ar: {
      slug: "public-charge-rule-pomona",
      title: "قاعدة العبء العام في بومونا: ما يحتاج المهاجرون معرفته",
      subtitle: "فهم كيف تؤثر المزايا العامة على طلبات الهجرة",
      metaTitle: "قاعدة العبء العام بومونا | دليل مزايا الهجرة مقاطعة لوس أنجلوس",
      metaDescription: "إرشاد قاعدة العبء العام في بومونا. فهم كيف تؤثر المزايا على طلبات البطاقة الخضراء. مساعدة الهجرة بالعربية. اتصل (714) 421-8872.",
      keywords: "قاعدة العبء العام بومونا، المزايا العامة للهجرة، العبء العام للبطاقة الخضراء",
      category: "إرشادات الهجرة",
      location: "بومونا",
      date: "30 ديسمبر 2025",
      readTime: "9 دقيقة قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "للمهاجرين في بومونا الذين يتقدمون للبطاقات الخضراء أو التأشيرات، فهم قاعدة العبء العام أمر ضروري. تساعد خدمات حلول الهجرة العائلات على فهم كيف تؤثر هذه القاعدة على طلباتهم وما المزايا التي يمكنهم استخدامها بأمان.",

      sections: [
        {
          heading: "ما هي قاعدة العبء العام؟",
          content: "تحدد قاعدة العبء العام ما إذا كان شخص ما من المحتمل أن يصبح معتمداً بشكل رئيسي على الحكومة للدعم. نقاط رئيسية:\n\n• إنها سبب لعدم القبول في قانون الهجرة\n• تنطبق عند التقدم لتأشيرة أو قبول أو بطاقة خضراء\n• تنظر في ما إذا كنت من المحتمل أن تصبح عبئاً عاماً في المستقبل\n• التغييرات الأخيرة في القواعد أثرت على كيفية تطبيقها\n• ليس كل المهاجرين يخضعون للعبء العام"
        },
        {
          heading: "من يخضع للعبء العام؟",
          content: "ينطبق العبء العام على معظم المهاجرين المتقدمين لـ:",
          list: [
            "البطاقات الخضراء القائمة على الأسرة",
            "البطاقات الخضراء القائمة على التوظيف",
            "طلبات التأشيرات في القنصليات",
            "تعديل الوضع في الولايات المتحدة",
            "تمديد وضع غير المهاجر (بعض الفئات)"
          ]
        },
        {
          heading: "من المعفى من العبء العام؟",
          content: "فئات معينة لا تخضع للعبء العام:",
          list: [
            "اللاجئون واللاجئون السياسيون",
            "مقدمو الطلبات الذاتية بموجب VAWA",
            "حاملو تأشيرة T (ضحايا الاتجار)",
            "حاملو تأشيرة U (ضحايا الجرائم)",
            "الأحداث المهاجرون الخاصون",
            "بعض المهاجرين الأفغان والعراقيين الخاصين",
            "القادمون الكوبيون والهايتيون",
            "المتقدمون للوضع المحمي المؤقت (TPS)",
            "المتقدمون للتجنس"
          ]
        },
        {
          heading: "ما المزايا التي تُحسب ضمن العبء العام؟",
          content: "بموجب السياسة الحالية، تُعتبر فقط برامج المساعدة النقدية المعينة:",
          table: {
            headers: ["تُحسب كعبء عام", "لا تُحسب"],
            rows: [
              ["SSI (الدخل التكميلي للضمان)", "Medicaid (باستثناء الرعاية طويلة المدى)"],
              ["مساعدة TANF النقدية", "CHIP (التأمين الصحي للأطفال)"],
              ["المساعدة العامة/الإغاثة العامة", "طوابع الطعام (SNAP)"],
              ["الرعاية المؤسسية طويلة المدى", "برنامج WIC للتغذية"],
              ["", "المساعدة الإسكانية (القسم 8)"],
              ["", "برامج الغداء المدرسي"],
              ["", "Medicaid الطارئ"]
            ]
          }
        },
        {
          heading: "العوامل التي تنظر فيها USCIS",
          content: "عند تقييم العبء العام، تنظر USCIS في مجمل الظروف:",
          list: [
            "العمر - صغار السن أو المسنون قد تكون لديهم قدرة أقل على العمل",
            "الصحة - المرض المزمن قد يؤثر على القدرة على العمل",
            "الوضع العائلي - عدد المعالين",
            "الأصول والموارد والوضع المالي",
            "التعليم والمهارات",
            "تاريخ التوظيف والتوظيف الحالي",
            "الكفالة المالية (نموذج I-864) من الكفيل",
            "الاستلام السابق للمزايا العامة"
          ]
        },
        {
          heading: "الكفالة المالية (I-864)",
          content: "للبطاقات الخضراء القائمة على الأسرة، I-864 للكفيل حاسم:\n\n• يجب أن يستوفي الكفيل 125% من إرشادات الفقر الفيدرالية\n• يُنشئ التزاماً قابلاً للتنفيذ قانونياً\n• يمكن للكفلاء المشتركين المساعدة إذا كان دخل الكفيل الرئيسي غير كافٍ\n• يُثبت أن المهاجر لن يحتاج مزايا عامة\n• مطلوب لمعظم الحالات القائمة على الأسرة وبعض الحالات القائمة على التوظيف"
        },
        {
          heading: "متطلبات الدخل لعام 2025",
          content: "يجب على الكفلاء استيفاء عتبات الدخل هذه (125% من إرشادات الفقر):",
          table: {
            headers: ["حجم الأسرة", "الحد الأدنى للدخل المطلوب"],
            rows: [
              ["شخصان", "$25,550"],
              ["3 أشخاص", "$32,187"],
              ["4 أشخاص", "$38,825"],
              ["5 أشخاص", "$45,462"],
              ["6 أشخاص", "$52,100"],
              ["كل إضافي", "+$6,637"]
            ]
          }
        },
        {
          heading: "المزايا الآمنة للاستخدام",
          content: "المزايا التالية عموماً لن تؤثر على قضية هجرتك:",
          list: [
            "خدمات Medicaid الطارئة",
            "الخدمات المدرسية (الغداء المجاني، التعليم الخاص)",
            "التطعيمات وعلاج الأمراض المعدية",
            "إغاثة الكوارث الطارئة",
            "بنوك الطعام والمساعدة الغذائية المجتمعية",
            "برامج Head Start والتعليم المبكر",
            "برامج التدريب الوظيفي",
            "اختبار وعلاج COVID-19 (والمزايا ذات الصلة)"
          ]
        },
        {
          heading: "مخاوف العبء العام الشائعة",
          content: "تقلق العديد من العائلات دون داعٍ بشأن العبء العام. إليك الحقيقة:",
          steps: [
            {
              title: "استخدام المزايا للأطفال",
              description: "المزايا المستخدمة من قبل الأطفال المواطنين الأمريكيين عموماً لا تُحسب ضد الوالدين المهاجرين."
            },
            {
              title: "استخدام المزايا السابق",
              description: "المزايا المستخدمة في الماضي (قبل التقديم) هي عامل واحد فقط في مجمل الظروف."
            },
            {
              title: "مزايا الطوارئ",
              description: "خدمات الطوارئ بما في ذلك Medicaid الطارئ معفاة من العبء العام."
            },
            {
              title: "المزايا المتعلقة بـ COVID-19",
              description: "المزايا المتعلقة باختبار وعلاج وإغاثة COVID-19 لا تُعتبر."
            }
          ]
        },
        {
          heading: "العبء العام للمهاجرين العرب في بومونا",
          content: "نساعد العائلات العربية في بومونا على فهم العبء العام في أوضاعهم المحددة:\n\n• العائلات الكبيرة وحسابات عتبة الدخل\n• الوالدون المسنون المكفولون للبطاقات الخضراء\n• الكفلاء العاملون لحسابهم الخاص الذين يوثقون الدخل\n• استخدام دخل أفراد الأسرة لاستيفاء المتطلبات\n• خيارات الكفيل المشترك عندما يكون الدخل غير كافٍ\n\nيمكن لفريقنا الناطق بالعربية شرح هذه القواعد المعقدة بوضوح."
        },
        {
          heading: "خدمات العبء العام لدينا في بومونا",
          content: "تساعد خدمات حلول الهجرة عائلات بومونا من خلال:",
          list: [
            "تقييم مخاطر العبء العام",
            "حساب الدخل للكفالة المالية",
            "إعداد الكفالة المالية I-864",
            "توثيق الكفيل المشترك",
            "التحقق من الأصول وتوثيقها",
            "أدلة على التوظيف والمهارات",
            "الدعم باللغة العربية",
            "التوجيه لاستخدام المزايا الآمن"
          ]
        }
      ],

      faqs: [
        {
          q: "هل سيضر استخدام Medicaid بطلب بطاقتي الخضراء؟",
          a: "Medicaid العادي عموماً لا يُحسب بموجب قواعد العبء العام الحالية. فقط الرعاية المؤسسية طويلة المدى على نفقة الحكومة تُعتبر. Medicaid الطارئ لا يُحسب أبداً."
        },
        {
          q: "هل يمكنني استخدام طوابع الطعام أثناء انتظار بطاقتي الخضراء؟",
          a: "SNAP (طوابع الطعام) لا تُعتبر بموجب سياسة العبء العام الحالية. ومع ذلك، تختار بعض العائلات تجنبها أثناء عملية التقديم لتكون حذرة."
        },
        {
          q: "ماذا لو كان كفيلي لا يكسب ما يكفي من المال؟",
          a: "يمكنك استخدام كفيل مشترك (شخص آخر يستوفي متطلبات الدخل) أو الجمع بين دخل الأسرة من أفراد الأسرة الذين يعيشون مع الكفيل."
        },
        {
          q: "هل تُحسب مزايا أطفالي المواطنين الأمريكيين ضدي؟",
          a: "عموماً لا. المزايا التي يتلقاها أفراد الأسرة المواطنون الأمريكيون لا تُنسب إلى المتقدم المهاجر لأغراض العبء العام."
        },
        {
          q: "تلقيت مزايا في الماضي. هل حالتي ميؤوس منها؟",
          a: "على الإطلاق. استخدام المزايا السابق هو عامل واحد فقط. التوظيف القوي والدخل والصحة ودعم الكفيل يمكن أن يتغلب على استخدام المزايا السابق."
        },
        {
          q: "هل ينطبق العبء العام على طلبات الجنسية؟",
          a: "لا. العبء العام ليس اعتباراً في طلبات التجنس (الجنسية)."
        }
      ],

      cta: {
        title: "قلق بشأن العبء العام في بومونا؟",
        text: "لا تدع الخوف من العبء العام يمنعك من المزايا التي تحتاجها أو يؤخر بطاقتك الخضراء. دعنا نساعدك على فهم وضعك.",
        button: "حجز استشارة"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default PublicChargeRulePomona;
