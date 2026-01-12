import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const ImmigrationHealthInsuranceLakewood = ({ language }) => {
  const content = {
    en: {
      slug: "immigration-health-insurance-lakewood",
      title: "Immigration and Health Insurance in Lakewood: Understanding Your Coverage Options",
      subtitle: "Navigate health insurance choices without affecting your immigration status",
      metaTitle: "Immigration Health Insurance Lakewood | Immigrant Healthcare Los Angeles County",
      metaDescription: "Health insurance options for immigrants in Lakewood. Understand coverage without affecting immigration status or public charge. Arabic support. Call (714) 421-8872.",
      keywords: "immigration health insurance Lakewood, immigrant healthcare, public charge, Medi-Cal immigration, Los Angeles immigrant insurance",
      category: "Resources",
      location: "Lakewood",
      date: "January 12, 2026",
      readTime: "11 min read",
      author: "SoCal Immigration Services",
      locationIntro: "For immigrants in Lakewood and Southeast Los Angeles County, understanding health insurance options - and how they may affect immigration status - is essential. SoCal Immigration Services provides Arabic-speaking guidance on navigating healthcare as an immigrant.",

      sections: [
        {
          heading: "Health Insurance and Immigration Status",
          content: "Your immigration status affects what health insurance options are available to you. Many immigrants worry about the 'public charge' rule, but understanding the facts can help you make informed decisions about healthcare for yourself and your family.\n\nKey Point: Using most healthcare programs does NOT negatively affect your immigration case. The public charge rule has specific, limited applications that don't include most health coverage."
        },
        {
          heading: "Health Insurance by Immigration Status",
          content: "Your options depend on your current immigration status:",
          table: {
            headers: ["Status", "Marketplace/ACA", "Medi-Cal", "Employer Insurance"],
            rows: [
              ["U.S. Citizen", "Yes", "Yes (income-based)", "Yes"],
              ["Green Card Holder", "Yes", "Yes (after 5 years or sooner)", "Yes"],
              ["Refugee/Asylee", "Yes", "Yes (immediately)", "Yes"],
              ["Work Visa (H-1B, L-1, etc.)", "Yes", "Limited", "Yes"],
              ["Student (F-1)", "Yes", "No", "Limited"],
              ["DACA", "No (federal)", "Yes (CA only)", "Yes"],
              ["Undocumented", "No", "Limited (CA emergency/pregnancy)", "No"]
            ]
          }
        },
        {
          heading: "The Public Charge Rule Explained",
          content: "The public charge rule makes immigrants inadmissible if they're likely to become primarily dependent on government benefits. However, healthcare programs that are NOT considered for public charge include:",
          list: [
            "Medi-Cal (even regular Medi-Cal in California)",
            "CHIP (Children's Health Insurance Program)",
            "Emergency Medicaid",
            "Medicare (if you've worked and earned it)",
            "COVID-19 vaccines and testing",
            "Marketplace insurance subsidies",
            "Employer-provided health insurance"
          ]
        },
        {
          heading: "Covered California (Health Insurance Marketplace)",
          content: "Covered California is California's health insurance marketplace under the Affordable Care Act:\n\n• Available to: Citizens, green card holders, refugees/asylees, certain visa holders\n• Income-based subsidies can reduce your premium costs\n• NOT considered for public charge\n• Open enrollment is typically November-January\n• Qualifying life events allow special enrollment\n\nLakewood residents can apply at CoveredCA.com or get in-person help."
        },
        {
          heading: "Medi-Cal for Immigrants",
          content: "California has expanded Medi-Cal to cover more immigrants than federal rules require:",
          list: [
            "Full-scope Medi-Cal: Now available to all income-eligible adults regardless of immigration status (as of 2024)",
            "Refugees/Asylees: Immediately eligible for full Medi-Cal",
            "Green Card Holders: Full Medi-Cal after 5 years, restricted before",
            "Pregnant Women: Emergency and pregnancy Medi-Cal regardless of status",
            "Children: Full Medi-Cal regardless of immigration status",
            "Emergency Medi-Cal: Available to anyone for true emergencies"
          ]
        },
        {
          heading: "California's Medi-Cal Expansion",
          content: "California has progressively expanded Medi-Cal:\n\n• 2020: All income-eligible young adults (19-25) regardless of status\n• 2022: All income-eligible adults 50+ regardless of status\n• 2024: All income-eligible adults regardless of status\n\nThis is state-funded and NOT counted for federal public charge determinations. Lakewood residents can apply for Medi-Cal regardless of immigration status if they meet income requirements."
        },
        {
          heading: "Employer Health Insurance",
          content: "If you work for an employer that offers health insurance:\n\n• This is typically your best and most cost-effective option\n• Available regardless of immigration status if you're authorized to work\n• Employer contributions are NOT considered income for immigration purposes\n• NOT considered for public charge\n• Usually covers dependents (spouse, children)\n\nAlways review what your employer offers during open enrollment."
        },
        {
          heading: "What Healthcare CAN Affect Immigration",
          content: "Very limited healthcare use can affect immigration, specifically:",
          list: [
            "Long-term institutionalization at government expense (nursing homes, etc.)",
            "Cash assistance programs like SSI (though healthcare itself is exempt)",
            "Being a public charge during initial entry (not applicable to most adjusting status)"
          ]
        },
        {
          heading: "Healthcare for Mixed-Status Families",
          content: "Many Lakewood families include members with different immigration statuses. Important points:\n\n• Citizen/LPR family members' use of benefits doesn't affect the immigrant's case\n• Children can receive Medi-Cal even if parents can't\n• Applying for benefits for eligible family members is safe\n• Privacy protections prevent immigration agencies from accessing health records in most cases"
        },
        {
          heading: "Community Health Centers",
          content: "Federally Qualified Health Centers (FQHCs) serve everyone regardless of immigration status or insurance:\n\n• Sliding fee scale based on income\n• No immigration status requirements\n• Do not report to immigration authorities\n• Provide primary care, dental, and mental health services\n\nLakewood-area community health centers include:\n• JWCH Institute\n• AltaMed Health Services\n• Community Health Alliance of Pasadena"
        },
        {
          heading: "Lakewood Health Insurance Services",
          content: "SoCal Immigration Services helps Lakewood immigrants with:",
          list: [
            "Understanding health coverage options by status",
            "Public charge guidance and assessment",
            "Connecting to Covered California enrollment assistance",
            "Medi-Cal application guidance",
            "Arabic to English translation for health forms",
            "Referrals to community health centers",
            "Explaining how healthcare affects immigration cases"
          ]
        }
      ],

      faqs: [
        {
          q: "Will using Medi-Cal hurt my green card application?",
          a: "No. California Medi-Cal is NOT considered for public charge. Using Medi-Cal will not negatively affect your green card or citizenship application."
        },
        {
          q: "Can I get health insurance if I'm undocumented?",
          a: "Yes, through California's expanded Medi-Cal which now covers all income-eligible adults regardless of immigration status. You can also use community health centers."
        },
        {
          q: "Should I avoid healthcare to protect my immigration case?",
          a: "No! Getting necessary healthcare does not hurt your immigration case in the vast majority of situations. Staying healthy is important, and avoiding care can have serious consequences."
        },
        {
          q: "Does immigration check my health insurance use?",
          a: "USCIS does not routinely access health records. Public charge looks at whether someone is LIKELY to become dependent on certain benefits, not healthcare specifically."
        },
        {
          q: "Can my U.S. citizen child get Medi-Cal?",
          a: "Yes! U.S. citizen children are eligible for full Medi-Cal based on household income, regardless of their parents' immigration status. This does not affect parents' cases."
        },
        {
          q: "I have a work visa. What are my options?",
          a: "Work visa holders can: use employer-provided insurance, purchase through Covered California (with subsidies if income-eligible), or pay full price for private insurance. Medi-Cal options are limited."
        }
      ],

      cta: {
        title: "Questions About Healthcare and Immigration in Lakewood?",
        text: "Don't let confusion about public charge keep you from getting the healthcare you need. Our Arabic-speaking team can help you understand your options.",
        button: "Schedule Free Consultation"
      }
    },
    ar: {
      slug: "immigration-health-insurance-lakewood",
      title: "الهجرة والتأمين الصحي في ليكوود: فهم خيارات التغطية الخاصة بك",
      subtitle: "تنقل في خيارات التأمين الصحي دون التأثير على وضع هجرتك",
      metaTitle: "التأمين الصحي للهجرة ليكوود | الرعاية الصحية للمهاجرين لوس أنجلوس كاونتي",
      metaDescription: "خيارات التأمين الصحي للمهاجرين في ليكوود. فهم التغطية دون التأثير على وضع الهجرة أو العبء العام. دعم بالعربية. اتصل (714) 421-8872.",
      keywords: "التأمين الصحي للهجرة ليكوود، الرعاية الصحية للمهاجرين، العبء العام، Medi-Cal الهجرة",
      category: "الموارد",
      location: "ليكوود",
      date: "12 يناير 2026",
      readTime: "11 دقيقة قراءة",
      author: "خدمات الهجرة سوكال",
      locationIntro: "للمهاجرين في ليكوود وجنوب شرق لوس أنجلوس كاونتي، فهم خيارات التأمين الصحي - وكيف قد تؤثر على وضع الهجرة - أمر أساسي. تقدم خدمات الهجرة سوكال إرشادات ناطقة بالعربية للتنقل في الرعاية الصحية كمهاجر.",

      sections: [
        {
          heading: "التأمين الصحي ووضع الهجرة",
          content: "وضع هجرتك يؤثر على خيارات التأمين الصحي المتاحة لك. يقلق العديد من المهاجرين بشأن قاعدة 'العبء العام'، لكن فهم الحقائق يمكن أن يساعدك في اتخاذ قرارات مستنيرة حول الرعاية الصحية لك ولعائلتك.\n\nنقطة رئيسية: استخدام معظم برامج الرعاية الصحية لا يؤثر سلباً على قضية هجرتك. قاعدة العبء العام لها تطبيقات محددة ومحدودة لا تشمل معظم التغطية الصحية."
        },
        {
          heading: "التأمين الصحي حسب وضع الهجرة",
          content: "خياراتك تعتمد على وضع هجرتك الحالي:",
          table: {
            headers: ["الوضع", "السوق/ACA", "Medi-Cal", "تأمين صاحب العمل"],
            rows: [
              ["مواطن أمريكي", "نعم", "نعم (حسب الدخل)", "نعم"],
              ["حامل بطاقة خضراء", "نعم", "نعم (بعد 5 سنوات أو قبل)", "نعم"],
              ["لاجئ/لاجئ سياسي", "نعم", "نعم (فوراً)", "نعم"],
              ["تأشيرة عمل (H-1B، L-1، إلخ)", "نعم", "محدود", "نعم"],
              ["طالب (F-1)", "نعم", "لا", "محدود"],
              ["DACA", "لا (فيدرالي)", "نعم (كاليفورنيا فقط)", "نعم"],
              ["غير موثق", "لا", "محدود (كاليفورنيا طوارئ/حمل)", "لا"]
            ]
          }
        },
        {
          heading: "شرح قاعدة العبء العام",
          content: "قاعدة العبء العام تجعل المهاجرين غير مقبولين إذا كانوا على الأرجح سيصبحون معتمدين بشكل أساسي على مزايا الحكومة. ومع ذلك، برامج الرعاية الصحية التي لا تُعتبر للعبء العام تشمل:",
          list: [
            "Medi-Cal (حتى Medi-Cal العادي في كاليفورنيا)",
            "CHIP (برنامج التأمين الصحي للأطفال)",
            "Medicaid الطوارئ",
            "Medicare (إذا عملت وكسبته)",
            "لقاحات واختبارات COVID-19",
            "دعم تأمين السوق",
            "التأمين الصحي من صاحب العمل"
          ]
        },
        {
          heading: "Covered California (سوق التأمين الصحي)",
          content: "Covered California هو سوق التأمين الصحي في كاليفورنيا تحت قانون الرعاية الميسرة:\n\n• متاح لـ: المواطنين، حاملي البطاقة الخضراء، اللاجئين/اللاجئين السياسيين، حاملي تأشيرات معينين\n• الدعم حسب الدخل يمكن أن يقلل تكاليف قسطك\n• لا يُعتبر للعبء العام\n• التسجيل المفتوح عادة نوفمبر-يناير\n• أحداث الحياة المؤهلة تسمح بالتسجيل الخاص\n\nسكان ليكوود يمكنهم التقديم على CoveredCA.com أو الحصول على مساعدة شخصية."
        },
        {
          heading: "Medi-Cal للمهاجرين",
          content: "وسعت كاليفورنيا Medi-Cal لتغطي مهاجرين أكثر مما تتطلب القواعد الفيدرالية:",
          list: [
            "Medi-Cal كامل النطاق: متاح الآن لجميع البالغين المؤهلين للدخل بغض النظر عن وضع الهجرة (اعتباراً من 2024)",
            "اللاجئون/اللاجئون السياسيون: مؤهلون فوراً لـ Medi-Cal الكامل",
            "حاملو البطاقة الخضراء: Medi-Cal الكامل بعد 5 سنوات، مقيد قبل",
            "النساء الحوامل: Medi-Cal الطوارئ والحمل بغض النظر عن الوضع",
            "الأطفال: Medi-Cal الكامل بغض النظر عن وضع الهجرة",
            "Medi-Cal الطوارئ: متاح لأي شخص للطوارئ الحقيقية"
          ]
        },
        {
          heading: "توسيع Medi-Cal في كاليفورنيا",
          content: "وسعت كاليفورنيا Medi-Cal تدريجياً:\n\n• 2020: جميع الشباب البالغين المؤهلين للدخل (19-25) بغض النظر عن الوضع\n• 2022: جميع البالغين المؤهلين للدخل 50+ بغض النظر عن الوضع\n• 2024: جميع البالغين المؤهلين للدخل بغض النظر عن الوضع\n\nهذا ممول من الولاية ولا يُحسب لتحديدات العبء العام الفيدرالية. سكان ليكوود يمكنهم التقدم لـ Medi-Cal بغض النظر عن وضع الهجرة إذا استوفوا متطلبات الدخل."
        },
        {
          heading: "التأمين الصحي من صاحب العمل",
          content: "إذا كنت تعمل لصاحب عمل يقدم التأمين الصحي:\n\n• هذا عادة أفضل وأكثر خيار فعال من حيث التكلفة\n• متاح بغض النظر عن وضع الهجرة إذا كنت مصرحاً للعمل\n• مساهمات صاحب العمل لا تُعتبر دخلاً لأغراض الهجرة\n• لا يُعتبر للعبء العام\n• عادة يغطي المعالين (الزوج، الأطفال)\n\nراجع دائماً ما يقدمه صاحب عملك خلال التسجيل المفتوح."
        },
        {
          heading: "ما الرعاية الصحية التي يمكن أن تؤثر على الهجرة",
          content: "استخدام رعاية صحية محدود جداً يمكن أن يؤثر على الهجرة، تحديداً:",
          list: [
            "الإقامة طويلة الأمد في المؤسسات على حساب الحكومة (دور الرعاية، إلخ)",
            "برامج المساعدة النقدية مثل SSI (رغم أن الرعاية الصحية نفسها معفاة)",
            "كونك عبء عام خلال الدخول الأولي (لا ينطبق على معظم من يُعدّلون الوضع)"
          ]
        },
        {
          heading: "الرعاية الصحية للعائلات مختلطة الوضع",
          content: "العديد من عائلات ليكوود تتضمن أعضاء بأوضاع هجرة مختلفة. نقاط مهمة:\n\n• استخدام أفراد العائلة المواطنين/المقيمين الدائمين للمزايا لا يؤثر على قضية المهاجر\n• الأطفال يمكنهم الحصول على Medi-Cal حتى لو لم يستطع الآباء\n• التقدم للمزايا لأفراد العائلة المؤهلين آمن\n• حماية الخصوصية تمنع وكالات الهجرة من الوصول إلى السجلات الصحية في معظم الحالات"
        },
        {
          heading: "مراكز الصحة المجتمعية",
          content: "مراكز الصحة المؤهلة فيدرالياً (FQHCs) تخدم الجميع بغض النظر عن وضع الهجرة أو التأمين:\n\n• مقياس رسوم متدرج حسب الدخل\n• لا متطلبات لوضع الهجرة\n• لا تُبلغ لسلطات الهجرة\n• تقدم رعاية أولية وأسنان وصحة نفسية\n\nمراكز الصحة المجتمعية في منطقة ليكوود تشمل:\n• معهد JWCH\n• خدمات AltaMed الصحية\n• تحالف الصحة المجتمعية في باسادينا"
        },
        {
          heading: "خدمات التأمين الصحي في ليكوود",
          content: "تساعد خدمات الهجرة سوكال مهاجري ليكوود في:",
          list: [
            "فهم خيارات التغطية الصحية حسب الوضع",
            "إرشادات وتقييم العبء العام",
            "الربط بمساعدة التسجيل في Covered California",
            "إرشادات طلب Medi-Cal",
            "ترجمة نماذج الصحة من العربية إلى الإنجليزية",
            "إحالات إلى مراكز الصحة المجتمعية",
            "شرح كيف تؤثر الرعاية الصحية على قضايا الهجرة"
          ]
        }
      ],

      faqs: [
        {
          q: "هل استخدام Medi-Cal سيضر بطلب البطاقة الخضراء؟",
          a: "لا. Medi-Cal كاليفورنيا لا يُعتبر للعبء العام. استخدام Medi-Cal لن يؤثر سلباً على طلب البطاقة الخضراء أو الجنسية."
        },
        {
          q: "هل يمكنني الحصول على تأمين صحي إذا كنت غير موثق؟",
          a: "نعم، من خلال توسيع Medi-Cal في كاليفورنيا الذي يغطي الآن جميع البالغين المؤهلين للدخل بغض النظر عن وضع الهجرة. يمكنك أيضاً استخدام مراكز الصحة المجتمعية."
        },
        {
          q: "هل يجب أن أتجنب الرعاية الصحية لحماية قضية هجرتي؟",
          a: "لا! الحصول على الرعاية الصحية الضرورية لا يضر قضية هجرتك في الغالبية العظمى من الحالات. البقاء بصحة جيدة مهم، وتجنب الرعاية يمكن أن يكون له عواقب خطيرة."
        },
        {
          q: "هل تتحقق الهجرة من استخدامي للتأمين الصحي؟",
          a: "USCIS لا تصل بشكل روتيني إلى السجلات الصحية. العبء العام ينظر إلى ما إذا كان شخص ما من المحتمل أن يصبح معتمداً على مزايا معينة، وليس الرعاية الصحية تحديداً."
        },
        {
          q: "هل يمكن لطفلي المواطن الأمريكي الحصول على Medi-Cal؟",
          a: "نعم! الأطفال المواطنون الأمريكيون مؤهلون لـ Medi-Cal الكامل حسب دخل الأسرة، بغض النظر عن وضع هجرة والديهم. هذا لا يؤثر على قضايا الوالدين."
        },
        {
          q: "لدي تأشيرة عمل. ما هي خياراتي؟",
          a: "حاملو تأشيرات العمل يمكنهم: استخدام تأمين صاحب العمل، الشراء من خلال Covered California (مع الدعم إذا كنت مؤهلاً للدخل)، أو دفع السعر الكامل للتأمين الخاص. خيارات Medi-Cal محدودة."
        }
      ],

      cta: {
        title: "أسئلة حول الرعاية الصحية والهجرة في ليكوود؟",
        text: "لا تدع الارتباك حول العبء العام يمنعك من الحصول على الرعاية الصحية التي تحتاجها. فريقنا الناطق بالعربية يمكنه مساعدتك في فهم خياراتك.",
        button: "احجز استشارة مجانية"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default ImmigrationHealthInsuranceLakewood;
