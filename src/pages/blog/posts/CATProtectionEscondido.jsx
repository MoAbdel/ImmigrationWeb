import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const CATProtectionEscondido = ({ language }) => {
  const content = {
    en: {
      slug: "cat-protection-escondido",
      title: "CAT Protection in Escondido: Convention Against Torture Relief for Immigrants",
      metaTitle: "CAT Protection Escondido | Convention Against Torture | Torture Relief | SoCal Immigration",
      metaDescription: "CAT protection in Escondido. Convention Against Torture relief for immigrants facing torture if deported. Available even with criminal history. Call (714) 421-8872.",
      keywords: "CAT protection Escondido, Convention Against Torture, torture relief, deferral of removal, withholding under CAT",
      category: "Humanitarian Protection",
      location: "Escondido",
      date: "January 10, 2026",
      lastUpdated: "January 10, 2026",
      readTime: "11 min read",
      author: "SoCal Immigration Services",
      subtitle: "Protection from removal to countries where torture awaits",
      summary: "The Convention Against Torture (CAT) provides protection for individuals who would face torture if returned to their home country. Unlike asylum, CAT protection is available regardless of criminal history, making it a critical option for those with serious convictions facing deportation.",
      locationIntro: "Escondido and North San Diego County have diverse immigrant communities, including individuals who may face torture if deported to their home countries. SoCal Immigration Services provides Arabic-speaking guidance for those seeking CAT protection, a vital safeguard when other relief isn't available.",
      sections: [
        {
          heading: "What Is CAT Protection?",
          content: "The Convention Against Torture is an international treaty that prohibits returning anyone to a country where they would likely face torture:\n\n**Key Principles:**\n• No person shall be returned to face torture\n• Protection is mandatory if standard met\n• Available regardless of criminal history\n• Cannot be denied for any reason if torture shown\n\n**Two Forms of CAT Relief:**\n1. Withholding of Removal under CAT\n2. Deferral of Removal under CAT"
        },
        {
          heading: "CAT Withholding vs. Deferral",
          content: "The two forms of CAT protection have different requirements and benefits:",
          table: {
            headers: ["Feature", "Withholding of Removal", "Deferral of Removal"],
            rows: [
              ["Standard", "More likely than not tortured", "More likely than not tortured"],
              ["Criminal bars", "Yes - serious crimes bar", "No bars - available to anyone"],
              ["Can be terminated?", "Yes, if conditions change", "Yes, more easily terminated"],
              ["Work authorization", "Yes", "Yes, but must renew"],
              ["Travel abroad", "Generally no", "No"],
              ["Path to green card", "No", "No"]
            ]
          }
        },
        {
          heading: "The Definition of Torture",
          content: "Torture under CAT has a specific legal definition:\n\n**Required Elements:**\n• Severe pain or suffering (physical or mental)\n• Intentionally inflicted\n• For specific purposes: obtaining information, punishment, intimidation, coercion, or discrimination\n• Inflicted by or with acquiescence of public official\n\n**What Counts:**\n• Government torture by police, military, prison officials\n• Torture by others that government knowingly ignores\n• Torture government is willfully blind to\n\n**What Doesn't Count:**\n• General violence or crime (without government involvement)\n• Pain from lawful sanctions\n• Isolated incidents without pattern"
        },
        {
          heading: "The 'More Likely Than Not' Standard",
          content: "To qualify for CAT protection, you must show it's more likely than not you'll be tortured:\n\n**What This Means:**\n• Greater than 50% chance of torture\n• Higher standard than asylum's 'well-founded fear'\n• Must be specific to you personally\n• Considers country conditions AND your individual circumstances\n\n**Factors Considered:**\n• Evidence of past torture\n• Country condition reports\n• Your profile (political, ethnic, religious)\n• Government's treatment of similar individuals\n• Availability of internal relocation"
        },
        {
          heading: "Government Acquiescence Requirement",
          content: "The torture must involve government action or acquiescence:\n\n**Direct Government Torture:**\n• Police brutality\n• Military violence\n• Prison abuse\n• State-sponsored persecution\n\n**Government Acquiescence:**\n• Officials know about torture and don't prevent it\n• Willful blindness to known practices\n• Failure to protect despite knowledge\n• Encouragement or facilitation of torture by others\n\n**Not Sufficient:**\n• Random criminal violence\n• Private disputes without government involvement\n• Government's mere inability to protect (vs. unwillingness)"
        },
        {
          heading: "CAT Protection with Criminal History",
          content: "CAT's most significant feature is availability despite criminal convictions:\n\n**Withholding Under CAT:**\n• Barred if convicted of 'particularly serious crime'\n• Aggravated felonies often qualify as particularly serious\n• Still may be eligible for deferral\n\n**Deferral Under CAT:**\n• NO criminal bars whatsoever\n• Available even with most serious convictions\n• Only protection for some with extensive criminal history\n• Mandatory if torture standard met\n\n**Important:** Even those with murder convictions can receive deferral if they meet the torture standard."
        },
        {
          heading: "Applying for CAT Protection",
          content: "CAT claims are typically raised in removal proceedings:",
          list: [
            "CAT must be raised in immigration court",
            "File Form I-589 (same as asylum application)",
            "Present evidence of torture risk",
            "Testify about past experiences and fear",
            "Submit country condition evidence",
            "Await immigration judge decision",
            "Can appeal to BIA if denied",
            "Further appeal to federal circuit court possible"
          ]
        },
        {
          heading: "Evidence for CAT Claims",
          content: "Strong CAT applications include compelling evidence:\n\n**Personal Evidence:**\n• Detailed declaration about torture/fear\n• Medical records documenting past torture\n• Psychological evaluation showing trauma\n• Photos of injuries or scars\n• Witness statements\n\n**Country Condition Evidence:**\n• State Department human rights reports\n• International organization reports (Amnesty, HRW)\n• News articles about torture in country\n• Expert witness testimony\n• Documentation of government practices"
        },
        {
          heading: "Living Under CAT Protection",
          content: "What life looks like with CAT protection:\n\n**Work Authorization:**\n• Can apply for Employment Authorization Document\n• Must renew periodically\n• Deferral requires more frequent renewal\n\n**Limitations:**\n• Cannot get green card through CAT\n• Cannot travel abroad (risk losing protection)\n• Can be terminated if country conditions change\n• Deferral can be terminated more easily\n• Always subject to removal if torture risk ends\n\n**Benefits:**\n• Protection from deportation\n• Legal work authorization\n• Ability to remain with family in U.S."
        },
        {
          heading: "Termination of CAT Protection",
          content: "CAT protection is not permanent:\n\n**Grounds for Termination:**\n• Country conditions fundamentally change\n• Original torture risk no longer exists\n• Evidence of fraud in obtaining protection\n• Diplomatic assurances from home country (rare)\n\n**Process:**\n• Government must file motion to terminate\n• Hearing before immigration judge\n• Burden shifts depending on type of protection\n• Can appeal termination decision\n\n**Withholding vs. Deferral:** Deferral can be terminated more easily than withholding."
        },
        {
          heading: "CAT vs. Asylum vs. Withholding",
          content: "Understanding the differences:",
          table: {
            headers: ["Feature", "Asylum", "Withholding (INA)", "CAT"],
            rows: [
              ["Standard", "Well-founded fear", "More likely than not persecuted", "More likely than not tortured"],
              ["Filing deadline", "1 year (exceptions)", "None", "None"],
              ["Criminal bars", "Serious crimes bar", "Aggravated felony bar", "None for deferral"],
              ["Green card path", "Yes", "No", "No"],
              ["Family included", "Yes", "No", "No"],
              ["Discretionary", "Yes", "No", "No"]
            ]
          }
        },
        {
          heading: "Why Escondido Residents Choose Us",
          content: "Those facing torture in Escondido trust SoCal Immigration Services because:\n\n• We understand the complex CAT legal standards\n• Arabic-speaking staff explain the torture definition clearly\n• We gather compelling country condition evidence\n• We prepare clients for difficult testimony\n• We handle cases involving criminal history\n• We appeal denials to BIA and federal courts"
        }
      ],
      faqs: [
        {
          q: "Can I get CAT protection if I have a serious criminal conviction?",
          a: "Yes, deferral of removal under CAT has no criminal bars whatsoever. Even if you have aggravated felonies or serious crimes that bar asylum and withholding, you can still receive deferral if you prove it's more likely than not you'll be tortured."
        },
        {
          q: "What's the difference between persecution and torture for immigration purposes?",
          a: "Persecution (for asylum) is broader and includes various harms based on protected grounds. Torture (for CAT) is more specific: severe pain or suffering, intentionally inflicted, for certain purposes, by or with government acquiescence. Torture doesn't require a protected ground but has stricter requirements about the nature of harm."
        },
        {
          q: "Can I travel outside the U.S. with CAT protection?",
          a: "Generally no. Unlike asylees, CAT recipients typically cannot get travel documents to leave and return. If you leave the U.S., you may not be able to return, and your protection could be considered abandoned. This is a significant limitation of CAT status."
        },
        {
          q: "Can my family be included in my CAT application?",
          a: "No, unlike asylum, CAT protection does not include derivative status for family members. Each family member who faces torture must file their own claim and prove their own case. This is another important difference from asylum."
        },
        {
          q: "How long does CAT protection last?",
          a: "CAT protection lasts as long as the torture risk exists. It can be terminated if country conditions change significantly or the individual torture risk ends. Deferral is more vulnerable to termination than withholding. It's not a permanent status and doesn't lead to a green card."
        },
        {
          q: "I already lost my asylum case. Can I still apply for CAT?",
          a: "Often yes, but it depends on the circumstances. If you raised CAT in your original proceedings and it was denied, you may be limited to a motion to reopen. If CAT wasn't properly considered or new evidence exists, there may be options. Consult an attorney about your specific situation."
        }
      ],
      cta: {
        title: "Facing Torture If Deported?",
        text: "If you fear torture in your home country and need protection, contact us for a confidential consultation. CAT may be available even if other relief isn't an option.",
        button: "Get CAT Protection Help"
      },
      relatedPosts: [
        {
          slug: "asylum-application-los-angeles",
          title: "Asylum Application in Los Angeles",
          category: "Humanitarian",
          excerpt: "Protection for those fleeing persecution."
        },
        {
          slug: "withholding-of-removal-hemet",
          title: "Withholding of Removal in Hemet",
          category: "Humanitarian",
          excerpt: "Alternative protection when asylum isn't available."
        }
      ]
    },
    ar: {
      slug: "cat-protection-escondido",
      title: "حماية CAT في إسكونديدو: إعفاء اتفاقية مناهضة التعذيب للمهاجرين",
      metaTitle: "حماية CAT إسكونديدو | اتفاقية مناهضة التعذيب | إعفاء التعذيب | سوكال للهجرة",
      metaDescription: "حماية CAT في إسكونديدو. إعفاء اتفاقية مناهضة التعذيب للمهاجرين الذين يواجهون التعذيب إذا رُحلوا. متاح حتى مع تاريخ جنائي. اتصل (714) 421-8872.",
      keywords: "حماية CAT إسكونديدو، اتفاقية مناهضة التعذيب، إعفاء التعذيب، تأجيل الترحيل، الحجب بموجب CAT",
      category: "الحماية الإنسانية",
      location: "إسكونديدو",
      date: "10 يناير 2026",
      lastUpdated: "10 يناير 2026",
      readTime: "11 دقيقة للقراءة",
      author: "سوكال لخدمات الهجرة",
      subtitle: "الحماية من الترحيل إلى بلدان ينتظر فيها التعذيب",
      summary: "توفر اتفاقية مناهضة التعذيب (CAT) حماية للأفراد الذين سيواجهون التعذيب إذا أُعيدوا إلى بلدهم. على عكس اللجوء، حماية CAT متاحة بغض النظر عن التاريخ الجنائي، مما يجعلها خياراً حاسماً لأولئك الذين لديهم إدانات خطيرة ويواجهون الترحيل.",
      locationIntro: "إسكونديدو وشمال مقاطعة سان دييغو لديهما مجتمعات مهاجرة متنوعة، بما في ذلك أفراد قد يواجهون التعذيب إذا رُحلوا إلى بلدانهم. تقدم سوكال لخدمات الهجرة إرشادات بالعربية لأولئك الذين يسعون لحماية CAT، وهي ضمانة حيوية عندما لا يكون الإعفاء الآخر متاحاً.",
      sections: [
        {
          heading: "ما هي حماية CAT؟",
          content: "اتفاقية مناهضة التعذيب هي معاهدة دولية تحظر إعادة أي شخص إلى بلد حيث سيواجه على الأرجح التعذيب:\n\n**المبادئ الرئيسية:**\n• لا يُعاد أي شخص لمواجهة التعذيب\n• الحماية إلزامية إذا استُوفي المعيار\n• متاحة بغض النظر عن التاريخ الجنائي\n• لا يمكن رفضها لأي سبب إذا أُثبت التعذيب\n\n**شكلان من إعفاء CAT:**\n1. حجب الترحيل بموجب CAT\n2. تأجيل الترحيل بموجب CAT"
        },
        {
          heading: "حجب CAT مقابل التأجيل",
          content: "شكلا حماية CAT لهما متطلبات وفوائد مختلفة:",
          table: {
            headers: ["الميزة", "حجب الترحيل", "تأجيل الترحيل"],
            rows: [
              ["المعيار", "من المرجح أكثر أن يُعذب", "من المرجح أكثر أن يُعذب"],
              ["الحظر الجنائي", "نعم - الجرائم الخطيرة تحظر", "لا حظر - متاح لأي شخص"],
              ["يمكن إنهاؤه؟", "نعم، إذا تغيرت الظروف", "نعم، يُنهى بسهولة أكبر"],
              ["تصريح العمل", "نعم", "نعم، لكن يجب التجديد"],
              ["السفر للخارج", "عموماً لا", "لا"],
              ["مسار للجرين كارد", "لا", "لا"]
            ]
          }
        },
        {
          heading: "تعريف التعذيب",
          content: "التعذيب بموجب CAT له تعريف قانوني محدد:\n\n**العناصر المطلوبة:**\n• ألم أو معاناة شديدة (جسدية أو عقلية)\n• مُلحقة عمداً\n• لأغراض محددة: الحصول على معلومات، العقاب، التخويف، الإكراه، أو التمييز\n• مُلحقة من قبل أو بموافقة مسؤول عام\n\n**ما يُحتسب:**\n• تعذيب حكومي من قبل الشرطة، الجيش، مسؤولي السجون\n• تعذيب من آخرين تتجاهله الحكومة عن علم\n• تعذيب الحكومة عمياء عنه عمداً\n\n**ما لا يُحتسب:**\n• العنف العام أو الجريمة (بدون مشاركة حكومية)\n• الألم من العقوبات القانونية\n• الحوادث المعزولة بدون نمط"
        },
        {
          heading: "معيار 'من المرجح أكثر'",
          content: "للتأهل لحماية CAT، يجب إظهار أنه من المرجح أكثر أنك ستُعذب:\n\n**ما يعني هذا:**\n• فرصة أكبر من 50% للتعذيب\n• معيار أعلى من 'الخوف المؤسس' للجوء\n• يجب أن يكون محدداً لك شخصياً\n• يأخذ بالاعتبار ظروف البلد وظروفك الفردية\n\n**العوامل المدروسة:**\n• دليل على التعذيب السابق\n• تقارير ظروف البلد\n• ملفك الشخصي (سياسي، عرقي، ديني)\n• معاملة الحكومة لأفراد مماثلين\n• توفر الانتقال الداخلي"
        },
        {
          heading: "متطلب موافقة الحكومة",
          content: "يجب أن يتضمن التعذيب إجراء حكومي أو موافقة:\n\n**التعذيب الحكومي المباشر:**\n• وحشية الشرطة\n• العنف العسكري\n• إساءة السجون\n• الاضطهاد الذي ترعاه الدولة\n\n**موافقة الحكومة:**\n• المسؤولون يعرفون عن التعذيب ولا يمنعونه\n• العمى المتعمد عن الممارسات المعروفة\n• الفشل في الحماية رغم المعرفة\n• التشجيع أو التسهيل للتعذيب من قبل الآخرين\n\n**غير كافٍ:**\n• العنف الإجرامي العشوائي\n• النزاعات الخاصة بدون مشاركة حكومية\n• مجرد عدم قدرة الحكومة على الحماية (مقابل عدم الرغبة)"
        },
        {
          heading: "حماية CAT مع تاريخ جنائي",
          content: "أهم ميزة لـ CAT هي التوفر رغم الإدانات الجنائية:\n\n**الحجب بموجب CAT:**\n• محظور إذا أُدين بـ 'جريمة خطيرة بشكل خاص'\n• الجنايات المشددة غالباً تعتبر خطيرة بشكل خاص\n• لا يزال قد يكون مؤهلاً للتأجيل\n\n**التأجيل بموجب CAT:**\n• لا حظر جنائي على الإطلاق\n• متاح حتى مع أخطر الإدانات\n• الحماية الوحيدة لبعض ذوي التاريخ الجنائي الواسع\n• إلزامي إذا استُوفي معيار التعذيب\n\n**مهم:** حتى أولئك الذين لديهم إدانات بالقتل يمكنهم الحصول على التأجيل إذا استوفوا معيار التعذيب."
        },
        {
          heading: "التقدم لحماية CAT",
          content: "عادة ما تُثار مطالبات CAT في إجراءات الترحيل:",
          list: [
            "يجب إثارة CAT في محكمة الهجرة",
            "قدم نموذج I-589 (نفس طلب اللجوء)",
            "قدم دليلاً على خطر التعذيب",
            "اشهد عن التجارب السابقة والخوف",
            "قدم أدلة ظروف البلد",
            "انتظر قرار قاضي الهجرة",
            "يمكن الاستئناف لـ BIA إذا رُفض",
            "استئناف إضافي لمحكمة الدائرة الفيدرالية ممكن"
          ]
        },
        {
          heading: "الأدلة لمطالبات CAT",
          content: "طلبات CAT القوية تتضمن أدلة مقنعة:\n\n**الأدلة الشخصية:**\n• إفادة مفصلة عن التعذيب/الخوف\n• السجلات الطبية التي توثق التعذيب السابق\n• التقييم النفسي الذي يظهر الصدمة\n• صور الإصابات أو الندوب\n• شهادات الشهود\n\n**أدلة ظروف البلد:**\n• تقارير حقوق الإنسان لوزارة الخارجية\n• تقارير المنظمات الدولية (منظمة العفو، HRW)\n• مقالات إخبارية عن التعذيب في البلد\n• شهادة الشهود الخبراء\n• توثيق الممارسات الحكومية"
        },
        {
          heading: "الحياة تحت حماية CAT",
          content: "كيف تبدو الحياة مع حماية CAT:\n\n**تصريح العمل:**\n• يمكن التقدم لوثيقة تصريح العمل\n• يجب التجديد دورياً\n• التأجيل يتطلب تجديداً أكثر تكراراً\n\n**القيود:**\n• لا يمكن الحصول على جرين كارد من خلال CAT\n• لا يمكن السفر للخارج (خطر فقدان الحماية)\n• يمكن إنهاؤه إذا تغيرت ظروف البلد\n• يمكن إنهاء التأجيل بسهولة أكبر\n• دائماً خاضع للترحيل إذا انتهى خطر التعذيب\n\n**الفوائد:**\n• الحماية من الترحيل\n• تصريح عمل قانوني\n• القدرة على البقاء مع العائلة في الولايات المتحدة"
        },
        {
          heading: "إنهاء حماية CAT",
          content: "حماية CAT ليست دائمة:\n\n**أسباب الإنهاء:**\n• تغير ظروف البلد بشكل جوهري\n• خطر التعذيب الأصلي لم يعد موجوداً\n• دليل على الاحتيال في الحصول على الحماية\n• ضمانات دبلوماسية من بلد الوطن (نادر)\n\n**العملية:**\n• يجب على الحكومة تقديم طلب للإنهاء\n• جلسة أمام قاضي الهجرة\n• ينتقل عبء الإثبات حسب نوع الحماية\n• يمكن استئناف قرار الإنهاء\n\n**الحجب مقابل التأجيل:** يمكن إنهاء التأجيل بسهولة أكبر من الحجب."
        },
        {
          heading: "CAT مقابل اللجوء مقابل الحجب",
          content: "فهم الاختلافات:",
          table: {
            headers: ["الميزة", "اللجوء", "الحجب (INA)", "CAT"],
            rows: [
              ["المعيار", "خوف مؤسس", "من المرجح أكثر أن يُضطهد", "من المرجح أكثر أن يُعذب"],
              ["الموعد النهائي للتقديم", "سنة واحدة (استثناءات)", "لا يوجد", "لا يوجد"],
              ["الحظر الجنائي", "الجرائم الخطيرة تحظر", "حظر الجناية المشددة", "لا يوجد للتأجيل"],
              ["مسار الجرين كارد", "نعم", "لا", "لا"],
              ["العائلة مشمولة", "نعم", "لا", "لا"],
              ["تقديري", "نعم", "لا", "لا"]
            ]
          }
        },
        {
          heading: "لماذا يختارنا سكان إسكونديدو",
          content: "أولئك الذين يواجهون التعذيب في إسكونديدو يثقون في سوكال لخدمات الهجرة لأن:\n\n• نفهم المعايير القانونية المعقدة لـ CAT\n• طاقم ناطق بالعربية يشرح تعريف التعذيب بوضوح\n• نجمع أدلة ظروف البلد المقنعة\n• نعد العملاء للشهادة الصعبة\n• نتعامل مع الحالات التي تتضمن تاريخاً جنائياً\n• نستأنف الرفض لـ BIA والمحاكم الفيدرالية"
        }
      ],
      faqs: [
        {
          q: "هل يمكنني الحصول على حماية CAT إذا لدي إدانة جنائية خطيرة؟",
          a: "نعم، تأجيل الترحيل بموجب CAT ليس له حظر جنائي على الإطلاق. حتى لو لديك جنايات مشددة أو جرائم خطيرة تحظر اللجوء والحجب، لا يزال بإمكانك الحصول على التأجيل إذا أثبت أنه من المرجح أكثر أنك ستُعذب."
        },
        {
          q: "ما الفرق بين الاضطهاد والتعذيب لأغراض الهجرة؟",
          a: "الاضطهاد (للجوء) أوسع ويشمل أضراراً متنوعة بناءً على أسس محمية. التعذيب (لـ CAT) أكثر تحديداً: ألم أو معاناة شديدة، ملحقة عمداً، لأغراض معينة، من قبل أو بموافقة الحكومة. التعذيب لا يتطلب أساساً محمياً لكن لديه متطلبات أكثر صرامة حول طبيعة الضرر."
        },
        {
          q: "هل يمكنني السفر خارج الولايات المتحدة بحماية CAT؟",
          a: "عموماً لا. على عكس اللاجئين، متلقو CAT عادة لا يمكنهم الحصول على وثائق سفر للمغادرة والعودة. إذا غادرت الولايات المتحدة، قد لا تتمكن من العودة، وحمايتك قد تعتبر متخلى عنها. هذا قيد كبير لوضع CAT."
        },
        {
          q: "هل يمكن تضمين عائلتي في طلب CAT الخاص بي؟",
          a: "لا، على عكس اللجوء، حماية CAT لا تشمل وضعاً مشتقاً لأفراد العائلة. كل فرد من العائلة يواجه التعذيب يجب أن يقدم مطالبته الخاصة ويثبت قضيته الخاصة. هذا فرق مهم آخر عن اللجوء."
        },
        {
          q: "كم تدوم حماية CAT؟",
          a: "حماية CAT تدوم طالما خطر التعذيب موجود. يمكن إنهاؤها إذا تغيرت ظروف البلد بشكل كبير أو انتهى خطر التعذيب الفردي. التأجيل أكثر عرضة للإنهاء من الحجب. إنه ليس وضعاً دائماً ولا يؤدي إلى جرين كارد."
        },
        {
          q: "خسرت بالفعل قضية اللجوء. هل لا يزال بإمكاني التقدم لـ CAT؟",
          a: "غالباً نعم، لكن يعتمد على الظروف. إذا أثرت CAT في إجراءاتك الأصلية ورُفضت، قد تكون محدوداً بطلب إعادة الفتح. إذا لم يُنظر في CAT بشكل صحيح أو وجدت أدلة جديدة، قد تكون هناك خيارات. استشر محامياً حول وضعك المحدد."
        }
      ],
      cta: {
        title: "تواجه التعذيب إذا رُحلت؟",
        text: "إذا كنت تخشى التعذيب في بلدك وتحتاج حماية، اتصل بنا لاستشارة سرية. CAT قد يكون متاحاً حتى لو لم يكن الإعفاء الآخر خياراً.",
        button: "احصل على مساعدة حماية CAT"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default CATProtectionEscondido;
