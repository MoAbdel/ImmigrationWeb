import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const SponsorIncomeCalculatorUpland = ({ language }) => {
  const content = {
    en: {
      slug: "sponsor-income-calculator-upland",
      title: "Sponsor Income Calculator in Upland: I-864 Income Requirements for Family Immigration",
      subtitle: "Calculate if you meet the income requirements to sponsor family members for green cards",
      metaTitle: "Sponsor Income Calculator Upland | I-864 Income Requirements Inland Empire",
      metaDescription: "Calculate sponsor income requirements in Upland. I-864 affidavit of support income levels, joint sponsors, assets. Arabic-speaking immigration help. Call (714) 421-8872.",
      keywords: "sponsor income calculator Upland, I-864 income requirements, affidavit of support income, family immigration sponsor, joint sponsor requirements",
      category: "Family",
      location: "Upland",
      date: "January 20, 2026",
      readTime: "10 min read",
      author: "SoCal Immigration Services",
      locationIntro: "To sponsor a family member for a green card, you must prove you can financially support them. This guide helps Upland residents understand the income requirements for Form I-864 Affidavit of Support. SoCal Immigration Services provides Arabic-speaking assistance with income calculations and joint sponsor arrangements.",

      sections: [
        {
          heading: "2026 Poverty Guidelines for I-864",
          content: "Sponsors must have income at 125% of poverty guidelines (100% for active military):",
          table: {
            headers: ["Household Size", "125% Poverty (2026)", "100% Poverty (Military)"],
            rows: [
              ["2", "$25,550", "$20,440"],
              ["3", "$32,225", "$25,780"],
              ["4", "$38,900", "$31,120"],
              ["5", "$45,575", "$36,460"],
              ["6", "$52,250", "$41,800"],
              ["7", "$58,925", "$47,140"],
              ["8", "$65,600", "$52,480"],
              ["Each additional", "+$6,675", "+$5,340"]
            ]
          }
        },
        {
          heading: "Calculating Your Household Size",
          content: "Your household size includes:",
          list: [
            "Yourself (the sponsor)",
            "Your spouse (even if not living with you)",
            "Your children under 21 (even if not living with you)",
            "Anyone you claimed as dependent on last tax return",
            "Any other people you're currently sponsoring",
            "The immigrant(s) you're sponsoring now"
          ]
        },
        {
          heading: "Example Calculation",
          content: "Here's how to calculate your household size:\n\nScenario: Upland resident sponsoring parents\n• Sponsor: 1\n• Sponsor's spouse: 1\n• Sponsor's 2 children: 2\n• Parents being sponsored: 2\n• Total household: 6 people\n• Required income: $52,250/year"
        },
        {
          heading: "What Income Counts?",
          content: "Income that qualifies for I-864:",
          list: [
            "Employment income (W-2, salary)",
            "Self-employment income (net after expenses)",
            "Retirement income (pension, Social Security)",
            "Investment income (dividends, interest, rental)",
            "Alimony or child support received",
            "Household member income (if contributing)",
            "Assets can supplement income"
          ]
        },
        {
          heading: "What Doesn't Count?",
          content: "Income that does NOT qualify:",
          list: [
            "Public benefits (welfare, food stamps, Medicaid)",
            "Unemployment compensation",
            "Child support you PAY (this reduces your income)",
            "One-time income (lottery, inheritance)",
            "Income from illegal sources",
            "Projected future income (usually)"
          ]
        },
        {
          heading: "Using Assets Instead of Income",
          content: "If income is insufficient, assets can help:\n\n• Assets must equal 3x the income shortfall\n• For sponsored spouse/children: 3x shortfall\n• For other relatives: 5x shortfall\n\nExample:\n• Required income: $38,900\n• Your income: $30,000\n• Shortfall: $8,900\n• Assets needed: $8,900 × 3 = $26,700"
        },
        {
          heading: "Qualifying Assets",
          content: "Assets that can be used:",
          list: [
            "Cash in bank accounts (checking, savings)",
            "Stocks, bonds, mutual funds",
            "Real estate equity (after mortgage)",
            "Personal property (cars, jewelry - at resale value)",
            "Retirement accounts (IRAs, 401k - at withdrawal value)",
            "Life insurance cash value"
          ]
        },
        {
          heading: "Joint Sponsor Option",
          content: "If you don't meet requirements alone, a joint sponsor can help:\n\nJoint Sponsor Requirements:\n• Must be U.S. citizen or permanent resident\n• Must be 18 years or older\n• Must live in the United States\n• Must meet income requirements independently\n• Does NOT need to be related to you or immigrant"
        },
        {
          heading: "Household Member Income",
          content: "Household members can contribute income:\n\nRequirements:\n• Must live with you\n• Must sign Form I-864A\n• Their income counts toward your household\n• They become jointly liable for support obligation\n\nCommon: Adult children or working spouse contributing income."
        },
        {
          heading: "Self-Employment Income",
          content: "Self-employed sponsors face additional requirements:\n\n• Net self-employment income (after expenses) counts\n• Must provide last 3 years of tax returns\n• Business profit/loss statements may be required\n• Irregular income may need explanation\n• Consider having joint sponsor as backup"
        },
        {
          heading: "Upland Sponsor Services",
          content: "SoCal Immigration Services helps Upland sponsors:",
          list: [
            "Arabic and English speaking staff",
            "Income calculation and verification",
            "Joint sponsor arrangement assistance",
            "Asset documentation preparation",
            "I-864 form completion",
            "Household member income coordination",
            "Tax document review"
          ]
        }
      ],

      faqs: [
        {
          q: "How much income do I need to sponsor my parents?",
          a: "It depends on your total household size. For a family of 6 (you, spouse, 2 kids, 2 parents), you need $52,250 in 2026. Use our calculation to determine your specific requirement."
        },
        {
          q: "Can I use my spouse's income even if they're not the sponsor?",
          a: "Yes! If your spouse lives with you and signs Form I-864A, their income counts toward your household income. They become jointly responsible for the support obligation."
        },
        {
          q: "What if I don't have enough income but have savings?",
          a: "You can use assets to supplement income. You need assets worth 3x the income shortfall (5x for non-spouse/child relatives). Cash, home equity, and investments all count."
        },
        {
          q: "Can my brother be a joint sponsor?",
          a: "Yes! Joint sponsors don't need to be related to you or the immigrant. They just need to be a U.S. citizen or green card holder, age 18+, and meet the income requirements themselves."
        },
        {
          q: "I'm self-employed - how do I prove income?",
          a: "You'll need your last 3 years of tax returns showing net self-employment income (Schedule C or K-1). The income after business expenses is what counts."
        },
        {
          q: "Do I include my children I'm sponsoring in household size?",
          a: "Yes. Both your existing household members AND the immigrants you're sponsoring count toward household size when calculating required income."
        }
      ],

      cta: {
        title: "Need Help Calculating Sponsor Income in Upland?",
        text: "Let our Arabic-speaking team help you determine if you meet I-864 requirements and explore options like joint sponsors or assets if needed.",
        button: "Schedule Free Consultation"
      }
    },
    ar: {
      slug: "sponsor-income-calculator-upland",
      title: "حاسبة دخل الكفيل في أبلاند: متطلبات دخل I-864 للهجرة العائلية",
      subtitle: "احسب إذا كنت تستوفي متطلبات الدخل لكفالة أفراد العائلة للبطاقات الخضراء",
      metaTitle: "حاسبة دخل الكفيل أبلاند | متطلبات دخل I-864 إنلاند إمباير",
      metaDescription: "احسب متطلبات دخل الكفيل في أبلاند. مستويات دخل إفادة الدعم I-864، الكفلاء المشتركون، الأصول. مساعدة هجرة بالعربية. اتصل (714) 421-8872.",
      keywords: "حاسبة دخل الكفيل أبلاند، متطلبات دخل I-864، دخل إفادة الدعم، كفيل الهجرة العائلية، متطلبات الكفيل المشترك",
      category: "العائلة",
      location: "أبلاند",
      date: "20 يناير 2026",
      readTime: "10 دقيقة قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "لكفالة فرد من العائلة للبطاقة الخضراء، يجب أن تثبت قدرتك على دعمهم مالياً. يساعد هذا الدليل سكان أبلاند على فهم متطلبات الدخل لنموذج I-864 إفادة الدعم. توفر خدمات حلول الهجرة مساعدة بالعربية في حسابات الدخل وترتيبات الكفيل المشترك.",

      sections: [
        {
          heading: "إرشادات الفقر 2026 لـ I-864",
          content: "يجب أن يكون دخل الكفلاء 125% من إرشادات الفقر (100% للعسكريين النشطين):",
          table: {
            headers: ["حجم الأسرة", "125% الفقر (2026)", "100% الفقر (العسكري)"],
            rows: [
              ["2", "$25,550", "$20,440"],
              ["3", "$32,225", "$25,780"],
              ["4", "$38,900", "$31,120"],
              ["5", "$45,575", "$36,460"],
              ["6", "$52,250", "$41,800"],
              ["7", "$58,925", "$47,140"],
              ["8", "$65,600", "$52,480"],
              ["كل شخص إضافي", "+$6,675", "+$5,340"]
            ]
          }
        },
        {
          heading: "حساب حجم أسرتك",
          content: "حجم أسرتك يشمل:",
          list: [
            "أنت (الكفيل)",
            "زوجك (حتى لو لا يعيش معك)",
            "أطفالك تحت 21 (حتى لو لا يعيشون معك)",
            "أي شخص طالبت به كمعال في آخر إقرار ضريبي",
            "أي أشخاص آخرين تكفلهم حالياً",
            "المهاجر(ين) الذين تكفلهم الآن"
          ]
        },
        {
          heading: "مثال على الحساب",
          content: "إليك كيفية حساب حجم أسرتك:\n\nالسيناريو: مقيم في أبلاند يكفل والديه\n• الكفيل: 1\n• زوج الكفيل: 1\n• طفلا الكفيل: 2\n• الوالدان المكفولان: 2\n• إجمالي الأسرة: 6 أشخاص\n• الدخل المطلوب: $52,250/سنة"
        },
        {
          heading: "ما الدخل المحتسب؟",
          content: "الدخل المؤهل لـ I-864:",
          list: [
            "دخل العمل (W-2، الراتب)",
            "دخل العمل الحر (الصافي بعد المصاريف)",
            "دخل التقاعد (المعاش، الضمان الاجتماعي)",
            "دخل الاستثمار (الأرباح، الفوائد، الإيجار)",
            "النفقة أو دعم الطفل المستلم",
            "دخل أفراد الأسرة (إذا كانوا يساهمون)",
            "الأصول يمكن أن تكمل الدخل"
          ]
        },
        {
          heading: "ما لا يُحتسب؟",
          content: "الدخل الذي لا يؤهل:",
          list: [
            "المزايا العامة (الرعاية الاجتماعية، كوبونات الطعام، Medicaid)",
            "تعويض البطالة",
            "دعم الطفل الذي تدفعه (هذا يقلل دخلك)",
            "الدخل لمرة واحدة (اليانصيب، الميراث)",
            "الدخل من مصادر غير قانونية",
            "الدخل المستقبلي المتوقع (عادة)"
          ]
        },
        {
          heading: "استخدام الأصول بدلاً من الدخل",
          content: "إذا كان الدخل غير كافٍ، يمكن أن تساعد الأصول:\n\n• يجب أن تساوي الأصول 3 أضعاف نقص الدخل\n• للزوج/الأطفال المكفولين: 3 أضعاف النقص\n• للأقارب الآخرين: 5 أضعاف النقص\n\nمثال:\n• الدخل المطلوب: $38,900\n• دخلك: $30,000\n• النقص: $8,900\n• الأصول المطلوبة: $8,900 × 3 = $26,700"
        },
        {
          heading: "الأصول المؤهلة",
          content: "الأصول التي يمكن استخدامها:",
          list: [
            "النقد في الحسابات المصرفية (الجاري، التوفير)",
            "الأسهم، السندات، صناديق الاستثمار",
            "حقوق العقارات (بعد الرهن)",
            "الممتلكات الشخصية (السيارات، المجوهرات - بقيمة إعادة البيع)",
            "حسابات التقاعد (IRA، 401k - بقيمة السحب)",
            "القيمة النقدية للتأمين على الحياة"
          ]
        },
        {
          heading: "خيار الكفيل المشترك",
          content: "إذا لم تستوفِ المتطلبات وحدك، يمكن للكفيل المشترك المساعدة:\n\nمتطلبات الكفيل المشترك:\n• يجب أن يكون مواطناً أمريكياً أو مقيماً دائماً\n• يجب أن يكون 18 سنة أو أكبر\n• يجب أن يعيش في الولايات المتحدة\n• يجب أن يستوفي متطلبات الدخل بشكل مستقل\n• لا يحتاج أن يكون قريباً لك أو للمهاجر"
        },
        {
          heading: "دخل أفراد الأسرة",
          content: "يمكن لأفراد الأسرة المساهمة بالدخل:\n\nالمتطلبات:\n• يجب أن يعيش معك\n• يجب أن يوقع نموذج I-864A\n• دخلهم يُحتسب نحو دخل أسرتك\n• يصبحون مسؤولين بالتضامن عن التزام الدعم\n\nشائع: الأطفال البالغون أو الزوج العامل يساهمون بالدخل."
        },
        {
          heading: "دخل العمل الحر",
          content: "الكفلاء العاملون لحسابهم الخاص يواجهون متطلبات إضافية:\n\n• صافي دخل العمل الحر (بعد المصاريف) يُحتسب\n• يجب تقديم آخر 3 سنوات من الإقرارات الضريبية\n• قد تكون بيانات أرباح/خسائر الأعمال مطلوبة\n• الدخل غير المنتظم قد يحتاج شرحاً\n• فكر في وجود كفيل مشترك كاحتياطي"
        },
        {
          heading: "خدمات الكفالة في أبلاند",
          content: "تساعد خدمات حلول الهجرة الكفلاء في أبلاند:",
          list: [
            "فريق يتحدث العربية والإنجليزية",
            "حساب الدخل والتحقق",
            "مساعدة ترتيب الكفيل المشترك",
            "إعداد توثيق الأصول",
            "إكمال نموذج I-864",
            "تنسيق دخل أفراد الأسرة",
            "مراجعة المستندات الضريبية"
          ]
        }
      ],

      faqs: [
        {
          q: "كم من الدخل أحتاج لكفالة والديّ؟",
          a: "يعتمد على إجمالي حجم أسرتك. لعائلة من 6 (أنت، زوج، طفلان، والدان)، تحتاج $52,250 في 2026. استخدم حسابنا لتحديد متطلبك المحدد."
        },
        {
          q: "هل يمكنني استخدام دخل زوجي حتى لو لم يكن الكفيل؟",
          a: "نعم! إذا كان زوجك يعيش معك ويوقع نموذج I-864A، دخلهم يُحتسب نحو دخل أسرتك. يصبحون مسؤولين بالتضامن عن التزام الدعم."
        },
        {
          q: "ماذا لو لم يكن لدي دخل كافٍ لكن لدي مدخرات؟",
          a: "يمكنك استخدام الأصول لتكملة الدخل. تحتاج أصولاً تساوي 3 أضعاف نقص الدخل (5 أضعاف للأقارب غير الزوج/الأطفال). النقد، حقوق المنزل، والاستثمارات كلها تُحتسب."
        },
        {
          q: "هل يمكن لأخي أن يكون كفيلاً مشتركاً؟",
          a: "نعم! الكفلاء المشتركون لا يحتاجون أن يكونوا أقارب لك أو للمهاجر. يحتاجون فقط أن يكونوا مواطنين أمريكيين أو حاملي بطاقة خضراء، 18+ سنة، ويستوفون متطلبات الدخل بأنفسهم."
        },
        {
          q: "أنا أعمل لحسابي - كيف أثبت الدخل؟",
          a: "ستحتاج آخر 3 سنوات من الإقرارات الضريبية التي تظهر صافي دخل العمل الحر (Schedule C أو K-1). الدخل بعد مصاريف العمل هو ما يُحتسب."
        },
        {
          q: "هل أضمّن أطفالي الذين أكفلهم في حجم الأسرة؟",
          a: "نعم. كلا أفراد أسرتك الحاليين والمهاجرين الذين تكفلهم يُحتسبون نحو حجم الأسرة عند حساب الدخل المطلوب."
        }
      ],

      cta: {
        title: "تحتاج مساعدة في حساب دخل الكفيل في أبلاند؟",
        text: "دع فريقنا الذي يتحدث العربية يساعدك على تحديد إذا كنت تستوفي متطلبات I-864 واستكشاف خيارات مثل الكفلاء المشتركين أو الأصول إذا لزم الأمر.",
        button: "جدولة استشارة مجانية"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default SponsorIncomeCalculatorUpland;
