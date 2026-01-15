import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const I693MedicalExamLosAngeles = ({ language }) => {
  const content = {
    en: {
      slug: "i693-medical-exam-los-angeles",
      title: "I-693 Medical Exam in Los Angeles: Immigration Physical Requirements",
      subtitle: "Complete guide to the green card medical examination process",
      metaTitle: "I-693 Medical Exam Los Angeles | Immigration Physical Civil Surgeon",
      metaDescription: "I-693 immigration medical exam guide for Los Angeles. Civil surgeon locations, required vaccinations, what to expect. Arabic support. Call (714) 421-8872.",
      keywords: "I-693 medical exam Los Angeles, immigration physical, civil surgeon, green card medical",
      category: "Document Services",
      location: "Los Angeles",
      date: "January 15, 2026",
      readTime: "9 min read",
      author: "SoCal Immigration Services",
      locationIntro: "Los Angeles has hundreds of USCIS-designated civil surgeons who can perform the required I-693 medical examination for green card applicants. Understanding what to expect, which vaccinations are required, and how to prepare can help ensure your medical exam doesn't delay your case.",

      sections: [
        {
          heading: "What is the I-693 Medical Exam?",
          content: "The Form I-693, Report of Medical Examination and Vaccination Record, is required for nearly all green card applicants. A USCIS-designated civil surgeon must:\n\n• Conduct a physical examination\n• Review vaccination history\n• Administer required vaccinations\n• Screen for certain conditions\n• Complete and sign Form I-693\n\nThe completed form is submitted with your I-485 adjustment of status application."
        },
        {
          heading: "Who Needs the I-693?",
          list: [
            "Adjustment of status applicants (I-485)",
            "Diversity visa lottery winners adjusting in the U.S.",
            "Some applicants for certain waivers",
            "K-1 fiancé visa holders adjusting after marriage",
            "Refugees applying for green card (after 1 year)"
          ]
        },
        {
          heading: "Finding a Civil Surgeon in LA",
          content: "Only USCIS-designated civil surgeons can complete Form I-693. To find one:\n\n• Use the USCIS Civil Surgeon Locator online\n• Search by zip code in Los Angeles area\n• Verify the doctor's designation is current\n• Call to confirm they do immigration physicals\n• Ask about pricing and what's included\n\nPrices in Los Angeles typically range from $150-$400 depending on included vaccinations."
        },
        {
          heading: "What to Bring to Your Exam",
          list: [
            "Government-issued photo ID (passport or driver's license)",
            "Vaccination records (as complete as possible)",
            "Medical records for any significant conditions",
            "List of current medications",
            "Eyeglasses or contacts if you wear them",
            "Payment (most offices don't bill insurance)"
          ]
        },
        {
          heading: "The Examination Process",
          steps: [
            { title: "Document Review", description: "Doctor reviews your ID, vaccination records, and medical history" },
            { title: "Physical Exam", description: "Basic physical including eyes, ears, heart, lungs, abdomen, skin" },
            { title: "Mental Status", description: "Brief evaluation of mental and behavioral health" },
            { title: "Blood Tests", description: "Testing for syphilis and other conditions if indicated" },
            { title: "TB Screening", description: "Tuberculosis test (skin test, blood test, or chest X-ray)" },
            { title: "Vaccinations", description: "Any missing required vaccinations administered" },
            { title: "Form Completion", description: "Doctor completes I-693 and seals envelope" }
          ]
        },
        {
          heading: "Required Vaccinations",
          content: "USCIS requires age-appropriate vaccinations including:",
          table: {
            headers: ["Vaccine", "Required For", "Notes"],
            rows: [
              ["MMR", "All ages", "Measles, Mumps, Rubella"],
              ["Tdap/Td", "All ages", "Tetanus, Diphtheria, Pertussis"],
              ["Polio", "Under 18", "May be waived for adults"],
              ["Hepatitis B", "Under 18", "Series of 3 shots"],
              ["Varicella", "All ages", "Chickenpox vaccine"],
              ["Influenza", "During flu season", "Annual flu shot"],
              ["COVID-19", "All ages", "Per current USCIS guidance"]
            ]
          }
        },
        {
          heading: "Tuberculosis Testing",
          content: "TB screening is required for all applicants:\n\n• Interferon Gamma Release Assay (IGRA) blood test is preferred\n• Tuberculin skin test (TST) is alternative\n• Positive screening requires chest X-ray\n• Active TB requires treatment before approval\n• Latent TB may require treatment plan documentation\n\nMany Middle Eastern applicants test positive due to BCG vaccination - this usually only requires X-ray confirmation."
        },
        {
          heading: "I-693 Validity Period",
          content: "The I-693 has specific validity rules:\n\n• Valid for 2 years from the date the civil surgeon signs it\n• Must be valid when you file I-485 AND when USCIS makes decision\n• If your case takes longer than 2 years, you may need a new exam\n• Don't get the exam too early - timing matters\n\nRecommendation: Get the exam shortly before filing your I-485, not months in advance."
        },
        {
          heading: "Common Issues and Solutions",
          content: "Problems that can affect your medical exam:\n\n• Missing vaccination records: Doctor can administer vaccines or accept titer blood tests showing immunity\n• Positive TB test: Usually just requires clear chest X-ray, not a problem\n• Mental health conditions: Most conditions don't affect immigration, be honest with the doctor\n• Physical disabilities: Generally don't affect green card eligibility\n• HIV positive: No longer a bar to immigration (changed in 2010)"
        },
        {
          heading: "After the Examination",
          content: "When the exam is complete:\n\n• Doctor places I-693 in sealed envelope\n• You sign across the seal (do not open)\n• Keep envelope sealed until USCIS interview\n• Bring to interview or submit with I-485\n• USCIS officer opens at interview\n\nOpening the envelope voids the form and you'll need a new exam."
        }
      ],

      faqs: [
        { q: "How much does the I-693 exam cost in Los Angeles?", a: "Prices typically range from $150-$400. Higher prices usually include more vaccinations. Shop around and ask what's included. Vaccinations are the most variable cost." },
        { q: "Can I use my regular doctor?", a: "Only if your doctor is a USCIS-designated civil surgeon. Most regular doctors are not. You must use the USCIS Civil Surgeon Locator to find an authorized physician." },
        { q: "What if I can't find my vaccination records?", a: "The civil surgeon can either administer the vaccines again or draw blood for titer tests that prove immunity. Either option satisfies USCIS requirements." },
        { q: "I tested positive for TB - will I be denied?", a: "A positive TB screening test is very common and usually not a problem. You'll need a chest X-ray to rule out active TB. If clear, your application proceeds normally." },
        { q: "Can I submit I-693 after filing I-485?", a: "Yes. Many applicants file I-485 first and bring the sealed I-693 to their interview. However, submitting it with your application may speed up processing." },
        { q: "What happens if my I-693 expires?", a: "If your I-693 expires before USCIS decides your case, you'll need a new medical exam. USCIS will notify you or request a new I-693 if this happens." }
      ],

      cta: {
        title: "Questions About Your Medical Exam?",
        text: "Our team helps Los Angeles green card applicants understand and prepare for the I-693 medical examination requirements.",
        button: "Schedule Consultation"
      }
    },
    ar: {
      slug: "i693-medical-exam-los-angeles",
      title: "الفحص الطبي I-693 في لوس أنجلوس: متطلبات الفحص الطبي للهجرة",
      subtitle: "دليل شامل لعملية الفحص الطبي للبطاقة الخضراء",
      metaTitle: "الفحص الطبي I-693 لوس أنجلوس | الفحص الطبي للهجرة",
      metaDescription: "دليل الفحص الطبي للهجرة I-693 للوس أنجلوس. مواقع الجراحين المدنيين، التطعيمات المطلوبة، ما تتوقعه. دعم بالعربية. اتصل (714) 421-8872.",
      keywords: "الفحص الطبي I-693 لوس أنجلوس، الفحص الطبي للهجرة، الجراح المدني، طبي البطاقة الخضراء",
      category: "خدمات الوثائق",
      location: "لوس أنجلوس",
      date: "15 يناير 2026",
      readTime: "9 دقائق قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "لوس أنجلوس لديها مئات الجراحين المدنيين المعينين من USCIS الذين يمكنهم إجراء الفحص الطبي المطلوب I-693 لمتقدمي البطاقة الخضراء. فهم ما تتوقعه، أي التطعيمات مطلوبة، وكيفية التحضير يمكن أن يساعد في ضمان عدم تأخير فحصك الطبي لقضيتك.",

      sections: [
        {
          heading: "ما هو الفحص الطبي I-693؟",
          content: "نموذج I-693، تقرير الفحص الطبي وسجل التطعيم، مطلوب لتقريباً جميع متقدمي البطاقة الخضراء. يجب على الجراح المدني المعين من USCIS:\n\n• إجراء فحص جسدي\n• مراجعة تاريخ التطعيم\n• إعطاء التطعيمات المطلوبة\n• الفحص لحالات معينة\n• إكمال وتوقيع نموذج I-693\n\nالنموذج المكتمل يُقدم مع طلب تعديل الوضع I-485."
        },
        {
          heading: "من يحتاج I-693؟",
          list: [
            "متقدمو تعديل الوضع (I-485)",
            "الفائزون في قرعة التأشيرة المتنوعة الذين يعدلون في الولايات المتحدة",
            "بعض المتقدمين لإعفاءات معينة",
            "حاملو تأشيرة K-1 الذين يعدلون بعد الزواج",
            "اللاجئون المتقدمون للبطاقة الخضراء (بعد سنة)"
          ]
        },
        {
          heading: "إيجاد جراح مدني في LA",
          content: "فقط الجراحون المدنيون المعينون من USCIS يمكنهم إكمال نموذج I-693. لإيجاد واحد:\n\n• استخدم محدد الجراح المدني USCIS عبر الإنترنت\n• ابحث بالرمز البريدي في منطقة لوس أنجلوس\n• تحقق من أن تعيين الطبيب حالي\n• اتصل لتأكيد أنهم يجرون فحوصات الهجرة\n• اسأل عن الأسعار وما هو مشمول\n\nالأسعار في لوس أنجلوس عادةً تتراوح من $150-$400 حسب التطعيمات المشمولة."
        },
        {
          heading: "ما تحضره لفحصك",
          list: [
            "هوية حكومية بصورة (جواز سفر أو رخصة قيادة)",
            "سجلات التطعيم (كاملة قدر الإمكان)",
            "سجلات طبية لأي حالات مهمة",
            "قائمة الأدوية الحالية",
            "نظارات أو عدسات لاصقة إذا كنت ترتديها",
            "الدفع (معظم المكاتب لا تفوتر التأمين)"
          ]
        },
        {
          heading: "عملية الفحص",
          steps: [
            { title: "مراجعة الوثائق", description: "الطبيب يراجع هويتك، سجلات التطعيم، والتاريخ الطبي" },
            { title: "الفحص الجسدي", description: "فحص جسدي أساسي يشمل العيون، الأذنين، القلب، الرئتين، البطن، الجلد" },
            { title: "الوضع العقلي", description: "تقييم موجز للصحة العقلية والسلوكية" },
            { title: "فحوصات الدم", description: "فحص للزهري وحالات أخرى إذا أشير" },
            { title: "فحص السل", description: "اختبار السل (اختبار جلدي، اختبار دم، أو أشعة صدر)" },
            { title: "التطعيمات", description: "أي تطعيمات مطلوبة مفقودة تُعطى" },
            { title: "إكمال النموذج", description: "الطبيب يكمل I-693 ويختم الظرف" }
          ]
        },
        {
          heading: "التطعيمات المطلوبة",
          content: "USCIS تتطلب تطعيمات مناسبة للعمر تشمل:",
          table: {
            headers: ["اللقاح", "مطلوب لـ", "ملاحظات"],
            rows: [
              ["MMR", "جميع الأعمار", "الحصبة، النكاف، الحصبة الألمانية"],
              ["Tdap/Td", "جميع الأعمار", "الكزاز، الدفتيريا، السعال الديكي"],
              ["شلل الأطفال", "تحت 18", "قد يُعفى للبالغين"],
              ["التهاب الكبد B", "تحت 18", "سلسلة من 3 جرعات"],
              ["الحماق", "جميع الأعمار", "لقاح جدري الماء"],
              ["الإنفلونزا", "خلال موسم الإنفلونزا", "لقاح الإنفلونزا السنوي"],
              ["COVID-19", "جميع الأعمار", "حسب توجيهات USCIS الحالية"]
            ]
          }
        },
        {
          heading: "اختبار السل",
          content: "فحص السل مطلوب لجميع المتقدمين:\n\n• اختبار IGRA للدم مفضل\n• اختبار الجلد TST بديل\n• الفحص الإيجابي يتطلب أشعة صدر\n• السل النشط يتطلب العلاج قبل الموافقة\n• السل الكامن قد يتطلب توثيق خطة العلاج\n\nالعديد من المتقدمين من الشرق الأوسط يختبرون إيجابياً بسبب لقاح BCG - هذا عادةً يتطلب فقط تأكيد الأشعة."
        },
        {
          heading: "فترة صلاحية I-693",
          content: "I-693 لها قواعد صلاحية محددة:\n\n• صالحة لمدة سنتين من تاريخ توقيع الجراح المدني\n• يجب أن تكون صالحة عند تقديم I-485 وعندما تتخذ USCIS قراراً\n• إذا استغرقت قضيتك أكثر من سنتين، قد تحتاج فحصاً جديداً\n• لا تحصل على الفحص مبكراً جداً - التوقيت مهم\n\nالتوصية: احصل على الفحص قبل تقديم I-485 بفترة قصيرة، وليس قبل أشهر."
        },
        {
          heading: "المشاكل الشائعة والحلول",
          content: "المشاكل التي يمكن أن تؤثر على فحصك الطبي:\n\n• سجلات التطعيم المفقودة: الطبيب يمكنه إعطاء اللقاحات أو قبول فحوصات دم المعايرة التي تظهر المناعة\n• اختبار السل الإيجابي: عادةً يتطلب فقط أشعة صدر واضحة، ليست مشكلة\n• حالات الصحة العقلية: معظم الحالات لا تؤثر على الهجرة، كن صادقاً مع الطبيب\n• الإعاقات الجسدية: عموماً لا تؤثر على أهلية البطاقة الخضراء\n• HIV إيجابي: لم يعد حاجزاً للهجرة (تغير في 2010)"
        },
        {
          heading: "بعد الفحص",
          content: "عندما يكتمل الفحص:\n\n• الطبيب يضع I-693 في ظرف مغلق\n• توقع عبر الختم (لا تفتح)\n• احتفظ بالظرف مغلقاً حتى مقابلة USCIS\n• أحضره للمقابلة أو قدمه مع I-485\n• ضابط USCIS يفتحه في المقابلة\n\nفتح الظرف يبطل النموذج وستحتاج فحصاً جديداً."
        }
      ],

      faqs: [
        { q: "كم يكلف فحص I-693 في لوس أنجلوس؟", a: "الأسعار عادةً تتراوح من $150-$400. الأسعار الأعلى عادةً تشمل المزيد من التطعيمات. ابحث واسأل ما هو مشمول. التطعيمات هي التكلفة الأكثر تغيراً." },
        { q: "هل يمكنني استخدام طبيبي العادي؟", a: "فقط إذا كان طبيبك جراحاً مدنياً معيناً من USCIS. معظم الأطباء العاديين ليسوا كذلك. يجب استخدام محدد الجراح المدني USCIS لإيجاد طبيب مرخص." },
        { q: "ماذا لو لم أجد سجلات التطعيم؟", a: "الجراح المدني يمكنه إما إعطاء اللقاحات مرة أخرى أو سحب دم لاختبارات المعايرة التي تثبت المناعة. أي من الخيارين يفي بمتطلبات USCIS." },
        { q: "اختبرت إيجابياً للسل - هل سأُرفض؟", a: "اختبار فحص السل الإيجابي شائع جداً وعادةً ليس مشكلة. ستحتاج أشعة صدر لاستبعاد السل النشط. إذا كانت واضحة، طلبك يستمر بشكل طبيعي." },
        { q: "هل يمكنني تقديم I-693 بعد تقديم I-485؟", a: "نعم. العديد من المتقدمين يقدمون I-485 أولاً ويحضرون I-693 المغلق لمقابلتهم. ومع ذلك، تقديمه مع طلبك قد يسرع المعالجة." },
        { q: "ماذا يحدث إذا انتهت صلاحية I-693؟", a: "إذا انتهت صلاحية I-693 قبل أن تقرر USCIS قضيتك، ستحتاج فحصاً طبياً جديداً. USCIS ستخطرك أو تطلب I-693 جديد إذا حدث هذا." }
      ],

      cta: {
        title: "أسئلة حول فحصك الطبي؟",
        text: "فريقنا يساعد متقدمي البطاقة الخضراء في لوس أنجلوس على فهم والتحضير لمتطلبات الفحص الطبي I-693.",
        button: "حجز استشارة"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default I693MedicalExamLosAngeles;
