import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const IraqiChaldeanSpringValley = ({ language }) => {
  const content = {
    en: {
      slug: "iraqi-chaldean-community-spring-valley",
      title: "Iraqi Chaldean Community Resources in Spring Valley: Immigration Help for Iraqi Families",
      subtitle: "Dedicated immigration support for Iraqi Christians and Chaldean families in San Diego County",
      metaTitle: "Iraqi Chaldean Immigration Spring Valley | Chaldean Family Services San Diego",
      metaDescription: "Immigration help for Iraqi Chaldean families in Spring Valley. Asylum, family petitions, I-730, citizenship. Arabic and Chaldean speaking staff. Call (714) 421-8872.",
      keywords: "Iraqi Chaldean Spring Valley, Chaldean immigration San Diego, Iraqi Christian immigration, I-730 family reunification, Chaldean community services",
      category: "Community",
      location: "Spring Valley",
      date: "January 20, 2026",
      readTime: "11 min read",
      author: "SoCal Immigration Services",
      locationIntro: "Spring Valley in San Diego County is home to a significant Iraqi Chaldean community, many of whom arrived as refugees fleeing religious persecution. SoCal Immigration Services provides culturally sensitive immigration assistance to Chaldean families, with Arabic-speaking staff who understand the unique challenges faced by Iraqi Christians.",

      sections: [
        {
          heading: "The Chaldean Community in Spring Valley",
          content: "Spring Valley and the greater San Diego area host one of the largest Chaldean communities outside Iraq. Most arrived as refugees, fleeing persecution of Christians in Iraq following the 2003 war and ISIS invasion.\n\nCommunity Facts:\n• Estimated 50,000+ Chaldeans in San Diego County\n• Strong presence in Spring Valley, El Cajon, and La Mesa\n• Deep Christian faith traditions (Catholic Church)\n• Aramaic (Chaldean) and Arabic languages spoken\n• Close-knit family networks and community support"
        },
        {
          heading: "Common Immigration Needs",
          content: "Immigration services most needed by the Chaldean community:",
          list: [
            "I-730 Refugee Family Reunification - bringing family still in Iraq",
            "Adjustment of Status - refugees applying for green cards",
            "Naturalization - becoming U.S. citizens",
            "Family Petitions - sponsoring relatives for green cards",
            "Asylum - for those who entered another way",
            "Deferred deportation help - for those with removal orders",
            "Travel documents - for refugees needing to travel"
          ]
        },
        {
          heading: "I-730 Refugee Family Reunification",
          content: "Many Chaldean refugees have family members still in Iraq or other countries. Form I-730 allows refugees and asylees to bring certain family members:\n\nWho Can Be Petitioned:\n• Spouse (married before your refugee approval)\n• Unmarried children under 21 (at time of your application)\n\nImportant Deadlines:\n• Must file within 2 years of your refugee admission\n• Exceptions available in some cases\n\nChallenges:\n• Family members may be in dangerous areas\n• Documentation can be difficult to obtain from Iraq\n• Processing can take 2-5 years"
        },
        {
          heading: "Refugee Adjustment of Status",
          content: "Refugees must apply for green cards after one year in the U.S.:",
          table: {
            headers: ["Requirement", "Details", "Evidence Needed"],
            rows: [
              ["Timing", "1 year after refugee admission", "I-94 arrival record"],
              ["Form", "I-485", "With fee waiver available"],
              ["Medical Exam", "Required", "I-693 from civil surgeon"],
              ["Biometrics", "Required", "Fingerprints, photo"],
              ["Interview", "Usually waived for refugees", "May be required"]
            ]
          }
        },
        {
          heading: "Naturalization for Refugees",
          content: "Refugees can become citizens after meeting these requirements:\n\nTimeline:\n• Green card for at least 5 years (4 years counted from refugee admission)\n• Physical presence in U.S. at least 30 months\n• Continuous residence maintained\n\nSpecial Benefits:\n• Time as refugee counts toward naturalization\n• May qualify for fee waivers\n• Special considerations for older applicants\n• English/civics test accommodations available"
        },
        {
          heading: "Family Petitions (I-130)",
          content: "Once you're a citizen or green card holder, you can sponsor family:",
          table: {
            headers: ["Your Status", "Who You Can Sponsor", "Wait Time"],
            rows: [
              ["U.S. Citizen", "Parents, spouse, children", "Immediate (no wait)"],
              ["U.S. Citizen", "Siblings", "15+ years"],
              ["U.S. Citizen", "Married adult children", "13+ years"],
              ["Green Card Holder", "Spouse and children", "2-4 years"]
            ]
          }
        },
        {
          heading: "Iraqi Christians and Asylum",
          content: "Some Chaldeans entered the U.S. not as refugees but through other means. They may qualify for asylum based on religious persecution:\n\nAsylum Eligibility:\n• Must apply within 1 year of arrival (exceptions exist)\n• Must show persecution based on religion\n• Must show Iraqi government cannot protect you\n\nEvidence Needed:\n• Documentation of Christian faith/baptism\n• Evidence of persecution (threats, attacks, family members harmed)\n• Country conditions evidence (State Dept reports)\n• Expert testimony on conditions in Iraq"
        },
        {
          heading: "Deferred Action and Stays of Removal",
          content: "Some Iraqis in Spring Valley face deportation orders. While immigration reform is uncertain, options may include:\n\n• Motions to Reopen based on changed country conditions\n• Stays of removal due to danger in Iraq\n• Deferred action requests\n• Protection under Convention Against Torture (CAT)\n\nEach case requires individual assessment - contact us immediately if you have a deportation order."
        },
        {
          heading: "Travel Documents for Refugees",
          content: "Refugees need special documents to travel internationally:\n\nRefugee Travel Document (I-131):\n• Required for travel outside the U.S.\n• Valid for 1 year\n• Cannot travel to Iraq without risking status\n• Apply before any international travel\n\nImportant Warning:\n• Returning to Iraq can jeopardize your refugee status\n• Consult with us before any travel to your home country"
        },
        {
          heading: "Document Challenges for Iraqis",
          content: "Iraqi documents often present challenges:\n\nCommon Issues:\n• Documents destroyed by war/ISIS\n• Birth certificates not available from Iraq\n• Marriage certificates in Arabic need translation\n• Name variations between documents\n• Documents issued by religious authorities vs. government\n\nSolutions:\n• Secondary evidence when primary documents unavailable\n• Affidavits from family members\n• Church baptismal and marriage records\n• Properly certified translations"
        },
        {
          heading: "Chaldean Community Organizations",
          content: "Resources for Chaldean families in San Diego:",
          list: [
            "Chaldean American Chamber of Commerce",
            "Chaldean Catholic Churches (St. Peter, St. Michael)",
            "Catholic Charities refugee services",
            "International Rescue Committee (IRC) San Diego",
            "License to Freedom - domestic violence support",
            "Chaldean Community Council",
            "East County refugee resettlement services"
          ]
        },
        {
          heading: "Spring Valley Immigration Services",
          content: "SoCal Immigration Services helps Chaldean families with:",
          list: [
            "Arabic-speaking staff who understand Chaldean culture",
            "I-730 family reunification petitions",
            "Refugee adjustment of status",
            "Naturalization applications and test preparation",
            "Family petition filing (I-130)",
            "Asylum applications for religious persecution",
            "Document translation and authentication",
            "Travel document applications"
          ]
        }
      ],

      faqs: [
        {
          q: "Can I bring my parents from Iraq if I'm a refugee?",
          a: "Not through the I-730 process - that's only for spouses and unmarried children under 21. However, once you become a U.S. citizen, you can immediately sponsor your parents through Form I-130."
        },
        {
          q: "Is it safe to travel to Iraq as a refugee?",
          a: "Traveling to Iraq can jeopardize your refugee status. It may suggest you no longer need protection. We strongly advise consulting with us before any travel to Iraq, even for emergencies."
        },
        {
          q: "I lost my Iraqi documents - can I still apply for immigration benefits?",
          a: "Yes. We can help you use secondary evidence like affidavits, church records, and other documentation when original Iraqi documents are unavailable due to war or persecution."
        },
        {
          q: "My family member has a deportation order to Iraq - what can we do?",
          a: "There may be options including motions to reopen, stays of removal, or protection under CAT due to dangerous conditions in Iraq. Contact us immediately for an individual case assessment."
        },
        {
          q: "How long does it take to bring family through I-730?",
          a: "I-730 processing typically takes 2-5 years. The exact time depends on where your family member is located and current processing backlogs. You must file within 2 years of your refugee admission."
        },
        {
          q: "Can I become a citizen if I entered as a refugee?",
          a: "Yes! Refugees can naturalize. Your time as a refugee counts toward the 5-year residency requirement. You can apply for citizenship 4 years and 9 months after your refugee admission date (assuming you got your green card on time)."
        }
      ],

      cta: {
        title: "Need Immigration Help for Your Chaldean Family in Spring Valley?",
        text: "Our Arabic-speaking team understands the unique needs of Iraqi Chaldean families. Whether you need family reunification, citizenship help, or document assistance, we're here to serve the Spring Valley community.",
        button: "Schedule Free Consultation"
      }
    },
    ar: {
      slug: "iraqi-chaldean-community-spring-valley",
      title: "موارد المجتمع العراقي الكلداني في سبرينج فالي: مساعدة الهجرة للعائلات العراقية",
      subtitle: "دعم هجرة مخصص للمسيحيين العراقيين والعائلات الكلدانية في مقاطعة سان دييغو",
      metaTitle: "هجرة العراقيين الكلدان سبرينج فالي | خدمات العائلات الكلدانية سان دييغو",
      metaDescription: "مساعدة الهجرة للعائلات العراقية الكلدانية في سبرينج فالي. اللجوء، التماسات العائلة، I-730، المواطنة. فريق يتحدث العربية والكلدانية. اتصل (714) 421-8872.",
      keywords: "العراقيين الكلدان سبرينج فالي، هجرة الكلدان سان دييغو، هجرة المسيحيين العراقيين، لم شمل العائلة I-730، خدمات المجتمع الكلداني",
      category: "المجتمع",
      location: "سبرينج فالي",
      date: "20 يناير 2026",
      readTime: "11 دقيقة قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "سبرينج فالي في مقاطعة سان دييغو هي موطن لمجتمع عراقي كلداني كبير، وصل معظمهم كلاجئين هاربين من الاضطهاد الديني. توفر خدمات حلول الهجرة مساعدة هجرة حساسة ثقافياً للعائلات الكلدانية، مع فريق يتحدث العربية يفهم التحديات الفريدة التي يواجهها المسيحيون العراقيون.",

      sections: [
        {
          heading: "المجتمع الكلداني في سبرينج فالي",
          content: "سبرينج فالي ومنطقة سان دييغو الكبرى تستضيف واحدة من أكبر المجتمعات الكلدانية خارج العراق. وصل معظمهم كلاجئين، هاربين من اضطهاد المسيحيين في العراق بعد حرب 2003 وغزو داعش.\n\nحقائق المجتمع:\n• يُقدر بأكثر من 50,000 كلداني في مقاطعة سان دييغو\n• وجود قوي في سبرينج فالي، الكاجون، ولاميسا\n• تقاليد إيمانية مسيحية عميقة (الكنيسة الكاثوليكية)\n• يتحدثون الآرامية (الكلدانية) والعربية\n• شبكات عائلية وطيدة ودعم مجتمعي"
        },
        {
          heading: "احتياجات الهجرة الشائعة",
          content: "خدمات الهجرة الأكثر حاجة في المجتمع الكلداني:",
          list: [
            "لم شمل عائلة اللاجئين I-730 - إحضار العائلة التي لا تزال في العراق",
            "تعديل الوضع - اللاجئون المتقدمون للبطاقات الخضراء",
            "التجنس - الحصول على الجنسية الأمريكية",
            "التماسات العائلة - كفالة الأقارب للبطاقات الخضراء",
            "اللجوء - لمن دخلوا بطريقة أخرى",
            "مساعدة الترحيل المؤجل - لمن لديهم أوامر إبعاد",
            "وثائق السفر - للاجئين الذين يحتاجون للسفر"
          ]
        },
        {
          heading: "لم شمل عائلة اللاجئين I-730",
          content: "العديد من اللاجئين الكلدان لديهم أفراد عائلة لا يزالون في العراق أو دول أخرى. يسمح نموذج I-730 للاجئين وطالبي اللجوء بإحضار أفراد معينين من العائلة:\n\nمن يمكن تقديم التماس له:\n• الزوج/الزوجة (متزوجين قبل موافقة اللجوء)\n• الأطفال غير المتزوجين تحت 21 (في وقت طلبك)\n\nمواعيد نهائية مهمة:\n• يجب التقديم خلال سنتين من قبولك كلاجئ\n• استثناءات متاحة في بعض الحالات\n\nالتحديات:\n• قد يكون أفراد العائلة في مناطق خطرة\n• يمكن أن يكون الحصول على الوثائق من العراق صعباً\n• قد تستغرق المعالجة 2-5 سنوات"
        },
        {
          heading: "تعديل وضع اللاجئ",
          content: "يجب على اللاجئين التقدم للبطاقات الخضراء بعد سنة واحدة في الولايات المتحدة:",
          table: {
            headers: ["المتطلب", "التفاصيل", "الأدلة المطلوبة"],
            rows: [
              ["التوقيت", "سنة واحدة بعد قبول اللجوء", "سجل الوصول I-94"],
              ["النموذج", "I-485", "مع إعفاء الرسوم متاح"],
              ["الفحص الطبي", "مطلوب", "I-693 من جراح مدني"],
              ["البصمات", "مطلوبة", "بصمات، صورة"],
              ["المقابلة", "عادة تُعفى للاجئين", "قد تكون مطلوبة"]
            ]
          }
        },
        {
          heading: "التجنس للاجئين",
          content: "يمكن للاجئين أن يصبحوا مواطنين بعد استيفاء هذه المتطلبات:\n\nالجدول الزمني:\n• البطاقة الخضراء لمدة 5 سنوات على الأقل (4 سنوات تُحتسب من قبول اللجوء)\n• الوجود الفعلي في الولايات المتحدة لمدة 30 شهراً على الأقل\n• الحفاظ على الإقامة المستمرة\n\nمزايا خاصة:\n• الوقت كلاجئ يُحتسب نحو التجنس\n• قد تتأهل لإعفاءات الرسوم\n• اعتبارات خاصة للمتقدمين الأكبر سناً\n• تسهيلات اختبار الإنجليزية/التربية المدنية متاحة"
        },
        {
          heading: "التماسات العائلة (I-130)",
          content: "بمجرد أن تصبح مواطناً أو حاملاً للبطاقة الخضراء، يمكنك كفالة العائلة:",
          table: {
            headers: ["وضعك", "من يمكنك كفالته", "وقت الانتظار"],
            rows: [
              ["مواطن أمريكي", "الوالدين، الزوج، الأطفال", "فوري (بدون انتظار)"],
              ["مواطن أمريكي", "الأشقاء", "15+ سنة"],
              ["مواطن أمريكي", "الأطفال البالغين المتزوجين", "13+ سنة"],
              ["حامل البطاقة الخضراء", "الزوج والأطفال", "2-4 سنوات"]
            ]
          }
        },
        {
          heading: "المسيحيون العراقيون واللجوء",
          content: "بعض الكلدان دخلوا الولايات المتحدة ليس كلاجئين ولكن من خلال وسائل أخرى. قد يتأهلون للجوء بناءً على الاضطهاد الديني:\n\nأهلية اللجوء:\n• يجب التقديم خلال سنة واحدة من الوصول (توجد استثناءات)\n• يجب إظهار اضطهاد بناءً على الدين\n• يجب إظهار أن الحكومة العراقية لا تستطيع حمايتك\n\nالأدلة المطلوبة:\n• توثيق الإيمان المسيحي/التعميد\n• أدلة على الاضطهاد (تهديدات، هجمات، أفراد العائلة المتضررين)\n• أدلة ظروف البلد (تقارير وزارة الخارجية)\n• شهادة خبراء عن الظروف في العراق"
        },
        {
          heading: "الإجراء المؤجل ووقف الترحيل",
          content: "بعض العراقيين في سبرينج فالي يواجهون أوامر ترحيل. بينما إصلاح الهجرة غير مؤكد، قد تشمل الخيارات:\n\n• طلبات إعادة فتح بناءً على تغير ظروف البلد\n• وقف الترحيل بسبب الخطر في العراق\n• طلبات الإجراء المؤجل\n• الحماية بموجب اتفاقية مناهضة التعذيب (CAT)\n\nكل حالة تتطلب تقييماً فردياً - اتصل بنا فوراً إذا كان لديك أمر ترحيل."
        },
        {
          heading: "وثائق السفر للاجئين",
          content: "يحتاج اللاجئون إلى وثائق خاصة للسفر دولياً:\n\nوثيقة سفر اللاجئ (I-131):\n• مطلوبة للسفر خارج الولايات المتحدة\n• صالحة لسنة واحدة\n• لا يمكن السفر إلى العراق دون المخاطرة بوضعك\n• قدم قبل أي سفر دولي\n\nتحذير مهم:\n• العودة إلى العراق يمكن أن تعرض وضعك كلاجئ للخطر\n• استشرنا قبل أي سفر إلى بلدك الأصلي"
        },
        {
          heading: "تحديات الوثائق للعراقيين",
          content: "الوثائق العراقية غالباً تمثل تحديات:\n\nمشاكل شائعة:\n• وثائق دمرت بسبب الحرب/داعش\n• شهادات الميلاد غير متاحة من العراق\n• شهادات الزواج بالعربية تحتاج ترجمة\n• اختلافات الأسماء بين الوثائق\n• وثائق صادرة من السلطات الدينية مقابل الحكومة\n\nالحلول:\n• أدلة ثانوية عندما تكون الوثائق الأساسية غير متاحة\n• إفادات من أفراد العائلة\n• سجلات التعميد والزواج الكنسية\n• ترجمات معتمدة بشكل صحيح"
        },
        {
          heading: "منظمات المجتمع الكلداني",
          content: "موارد للعائلات الكلدانية في سان دييغو:",
          list: [
            "غرفة التجارة الأمريكية الكلدانية",
            "الكنائس الكاثوليكية الكلدانية (مار بطرس، مار ميخائيل)",
            "خدمات اللاجئين كاريتاس الكاثوليكية",
            "لجنة الإنقاذ الدولية (IRC) سان دييغو",
            "رخصة الحرية - دعم العنف المنزلي",
            "المجلس المجتمعي الكلداني",
            "خدمات إعادة توطين اللاجئين في مقاطعة الشرق"
          ]
        },
        {
          heading: "خدمات الهجرة في سبرينج فالي",
          content: "تساعد خدمات حلول الهجرة العائلات الكلدانية في:",
          list: [
            "فريق يتحدث العربية يفهم الثقافة الكلدانية",
            "التماسات لم شمل العائلة I-730",
            "تعديل وضع اللاجئ",
            "طلبات التجنس والتحضير للاختبار",
            "تقديم التماس العائلة (I-130)",
            "طلبات اللجوء للاضطهاد الديني",
            "ترجمة وتوثيق الوثائق",
            "طلبات وثائق السفر"
          ]
        }
      ],

      faqs: [
        {
          q: "هل يمكنني إحضار والديّ من العراق إذا كنت لاجئاً؟",
          a: "ليس من خلال عملية I-730 - تلك فقط للأزواج والأطفال غير المتزوجين تحت 21. ومع ذلك، بمجرد أن تصبح مواطناً أمريكياً، يمكنك فوراً كفالة والديك من خلال نموذج I-130."
        },
        {
          q: "هل السفر إلى العراق آمن كلاجئ؟",
          a: "السفر إلى العراق يمكن أن يعرض وضعك كلاجئ للخطر. قد يشير إلى أنك لم تعد بحاجة للحماية. ننصح بشدة باستشارتنا قبل أي سفر إلى العراق، حتى للطوارئ."
        },
        {
          q: "فقدت وثائقي العراقية - هل لا يزال بإمكاني التقدم لمزايا الهجرة؟",
          a: "نعم. يمكننا مساعدتك في استخدام الأدلة الثانوية مثل الإفادات، سجلات الكنيسة، والوثائق الأخرى عندما تكون الوثائق العراقية الأصلية غير متاحة بسبب الحرب أو الاضطهاد."
        },
        {
          q: "فرد من عائلتي لديه أمر ترحيل إلى العراق - ماذا يمكننا أن نفعل؟",
          a: "قد تكون هناك خيارات بما في ذلك طلبات إعادة الفتح، وقف الترحيل، أو الحماية بموجب CAT بسبب الظروف الخطرة في العراق. اتصل بنا فوراً لتقييم الحالة الفردية."
        },
        {
          q: "كم يستغرق إحضار العائلة من خلال I-730؟",
          a: "معالجة I-730 تستغرق عادة 2-5 سنوات. الوقت الدقيق يعتمد على مكان وجود فرد عائلتك والتراكمات الحالية في المعالجة. يجب التقديم خلال سنتين من قبولك كلاجئ."
        },
        {
          q: "هل يمكنني أن أصبح مواطناً إذا دخلت كلاجئ؟",
          a: "نعم! يمكن للاجئين التجنس. وقتك كلاجئ يُحتسب نحو متطلب الإقامة 5 سنوات. يمكنك التقدم للمواطنة 4 سنوات و9 أشهر بعد تاريخ قبولك كلاجئ (بافتراض حصولك على البطاقة الخضراء في الوقت المحدد)."
        }
      ],

      cta: {
        title: "تحتاج مساعدة هجرة لعائلتك الكلدانية في سبرينج فالي؟",
        text: "فريقنا الذي يتحدث العربية يفهم الاحتياجات الفريدة للعائلات العراقية الكلدانية. سواء كنت بحاجة للم شمل العائلة، مساعدة المواطنة، أو مساعدة الوثائق، نحن هنا لخدمة مجتمع سبرينج فالي.",
        button: "جدولة استشارة مجانية"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default IraqiChaldeanSpringValley;
