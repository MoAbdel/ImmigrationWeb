import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const RefugeeResettlementGlendale = ({ language }) => {
  const content = {
    en: {
      slug: "refugee-resettlement-glendale",
      title: "Refugee Resettlement Help in Glendale: Community Resources for Armenian & Arab Refugees",
      subtitle: "Connecting newly arrived refugees with essential services and community support in Glendale",
      metaTitle: "Refugee Resettlement Glendale | Armenian Arab Refugee Services Los Angeles",
      metaDescription: "Refugee resettlement resources in Glendale for Armenian and Arab refugees. Community support, document services, and immigration help. Arabic speaking. Call (714) 421-8872.",
      keywords: "refugee resettlement Glendale, Armenian refugees, Arab refugees Los Angeles, refugee services, refugee community resources",
      category: "Community Resources",
      location: "Glendale",
      date: "December 29, 2025",
      readTime: "10 min read",
      author: "Immigration Solution Services",
      locationIntro: "Glendale is home to one of the largest Armenian communities outside of Armenia and a growing Arab refugee population. Immigration Solution Services connects newly resettled refugees with essential services and provides Arabic-speaking document support.",

      sections: [
        {
          heading: "Understanding Refugee Resettlement",
          content: "Refugees who are resettled in the Glendale area go through a complex process:\n\nThe Resettlement Process:\n• Referred by UNHCR for U.S. resettlement\n• Approved by U.S. government after extensive vetting\n• Assigned to a resettlement agency\n• Arrive in the U.S. with refugee status\n• Work toward adjustment of status and eventually citizenship"
        },
        {
          heading: "First Steps After Arrival",
          content: "Within the first 30-90 days, refugees should:",
          list: [
            "Complete required medical screenings",
            "Apply for Social Security card",
            "Enroll children in school",
            "Begin English language classes (ESL)",
            "Apply for employment authorization (EAD)",
            "Open a bank account",
            "Learn to navigate public transportation",
            "Connect with community organizations"
          ]
        },
        {
          heading: "Immigration Timeline for Refugees",
          content: "Key immigration milestones for refugees:",
          table: {
            headers: ["Timeframe", "Action", "Notes"],
            rows: [
              ["Day 1", "Arrive with I-94 showing refugee status", "Valid for 1 year"],
              ["Immediately", "Apply for EAD (work permit)", "Free for refugees"],
              ["After 1 year", "Apply for Adjustment of Status (green card)", "Required, not optional"],
              ["5 years after arrival", "Eligible for citizenship", "Green card backdated to entry"],
              ["5+ years", "Apply for naturalization", "Become U.S. citizen"]
            ]
          }
        },
        {
          heading: "Adjustment of Status for Refugees",
          content: "After one year in the United States, refugees MUST apply for adjustment of status:\n\n• File Form I-485 (Application to Register Permanent Residence)\n• The filing fee is waived for refugees\n• Medical exam (I-693) is required\n• Background checks will be conducted\n• Failure to apply may have immigration consequences\n• We help refugees complete this important application"
        },
        {
          heading: "Benefits Available to Refugees",
          content: "Refugees in Glendale have access to various benefits:",
          list: [
            "Refugee Cash Assistance (RCA) - first 8 months",
            "Refugee Medical Assistance (RMA) - if not eligible for Medi-Cal",
            "SNAP (Food Stamps) - CalFresh in California",
            "Medi-Cal (California Medicaid)",
            "Employment services through resettlement agencies",
            "Housing assistance programs",
            "ESL and job training programs",
            "Childcare assistance"
          ]
        },
        {
          heading: "Glendale Community Resources",
          content: "Organizations serving refugees in Glendale include:\n\n• Armenian Relief Society\n• Catholic Charities LA\n• International Rescue Committee (IRC)\n• Jewish Family Service LA\n• Glendale YWCA\n• Local Armenian churches and community centers\n• Glendale Public Library (free ESL classes)\n• Glendale Community College"
        },
        {
          heading: "Employment for Refugees",
          content: "Refugees can work legally in the United States:",
          list: [
            "Your I-94 with refugee stamp allows immediate work",
            "Apply for EAD for a more secure work document",
            "Resettlement agencies provide job placement help",
            "English classes improve employment prospects",
            "Foreign credentials may need evaluation",
            "Many employers in Glendale hire refugees"
          ]
        },
        {
          heading: "Family Reunification (I-730)",
          content: "Refugees can petition for family members:\n\n• Spouse and unmarried children under 21 (within 2 years of refugee arrival)\n• File Form I-730, Refugee/Asylee Relative Petition\n• No filing fee for I-730\n• Derivatives can follow-to-join\n• Processing can take 1-2 years\n• We help prepare I-730 petitions"
        },
        {
          heading: "Refugee Travel Documents",
          content: "Refugees need special documents to travel internationally:\n\n• Refugee Travel Document (RTD) required for international travel\n• Apply using Form I-131\n• Filing fee is waived for refugees\n• IMPORTANT: Do NOT return to your home country - this may abandon refugee status\n• Travel to third countries is permitted\n• We help prepare travel document applications"
        },
        {
          heading: "Special Considerations for Armenian Refugees",
          content: "Glendale's Armenian community offers unique support:\n\n• Armenian-speaking professionals and services\n• Armenian churches (numerous in Glendale)\n• Armenian cultural organizations\n• Armenian-language media and newspapers\n• Ethnic grocery stores and familiar foods\n• Armenian doctors, lawyers, and social workers\n• Strong community advocacy"
        },
        {
          heading: "Special Considerations for Arab Refugees",
          content: "Arab refugees in Glendale can access:\n\n• Arabic-speaking services (including ours)\n• Halal food markets nearby\n• Mosques and Islamic centers\n• Arab cultural organizations\n• Arabic-language community resources\n• Support from Iraqi, Syrian, and other Arab communities"
        },
        {
          heading: "Our Glendale Refugee Services",
          content: "Immigration Solution Services helps Glendale refugees with document preparation:",
          list: [
            "Employment Authorization Document (EAD) applications",
            "Adjustment of Status (I-485) preparation",
            "I-730 family reunification petitions",
            "Refugee Travel Document applications",
            "Document translation (Arabic, Armenian to English)",
            "Social Security and ID application assistance",
            "Naturalization preparation after 5 years",
            "Arabic-speaking staff available"
          ]
        }
      ],

      faqs: [
        {
          q: "How long can I stay in the U.S. as a refugee?",
          a: "Refugees can stay permanently. After 1 year, you must apply for a green card (adjustment of status). After 5 years from your arrival date, you can apply for citizenship."
        },
        {
          q: "Can I work right away as a refugee?",
          a: "Yes. Your I-94 stamp showing refugee status allows you to work immediately. We recommend also applying for an EAD (work permit) as a more secure document for employers."
        },
        {
          q: "Can I bring my family to the U.S.?",
          a: "Refugees can petition for their spouse and unmarried children under 21 using Form I-730. This must be filed within 2 years of your refugee arrival. We help prepare these petitions."
        },
        {
          q: "Can I travel outside the U.S. as a refugee?",
          a: "Yes, but you need a Refugee Travel Document first. Important: Do NOT travel to your home country as this may be seen as abandoning your refugee status."
        },
        {
          q: "What benefits can refugees receive?",
          a: "Refugees can receive cash assistance (RCA), medical assistance, food stamps (CalFresh), and Medi-Cal. Your resettlement agency will help you apply for these benefits."
        },
        {
          q: "Do you provide legal advice for refugees?",
          a: "We are not attorneys and don't provide legal advice. We help with document preparation and can refer you to free legal services through resettlement agencies or legal aid organizations."
        }
      ],

      cta: {
        title: "Newly Resettled Refugee in Glendale?",
        text: "Let our team help you with your immigration documents. We speak Arabic and understand the unique needs of refugee families.",
        button: "Schedule Consultation"
      }
    },
    ar: {
      slug: "refugee-resettlement-glendale",
      title: "مساعدة إعادة توطين اللاجئين في غليندال: موارد مجتمعية للاجئين الأرمن والعرب",
      subtitle: "ربط اللاجئين الواصلين حديثاً بالخدمات الأساسية ودعم المجتمع في غليندال",
      metaTitle: "إعادة توطين اللاجئين غليندال | خدمات اللاجئين الأرمن والعرب لوس أنجلوس",
      metaDescription: "موارد إعادة توطين اللاجئين في غليندال للاجئين الأرمن والعرب. دعم مجتمعي، خدمات الوثائق، ومساعدة الهجرة. فريق يتحدث العربية. اتصل (714) 421-8872.",
      keywords: "إعادة توطين اللاجئين غليندال، اللاجئون الأرمن، اللاجئون العرب لوس أنجلوس، خدمات اللاجئين، موارد مجتمع اللاجئين",
      category: "موارد المجتمع",
      location: "غليندال",
      date: "29 ديسمبر 2025",
      readTime: "10 دقيقة قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "غليندال هي موطن لواحدة من أكبر الجاليات الأرمنية خارج أرمينيا وعدد متزايد من اللاجئين العرب. تربط خدمات حلول الهجرة اللاجئين الذين أعيد توطينهم حديثاً بالخدمات الأساسية وتوفر دعم الوثائق بالعربية.",

      sections: [
        {
          heading: "فهم إعادة توطين اللاجئين",
          content: "اللاجئون الذين يتم إعادة توطينهم في منطقة غليندال يمرون بعملية معقدة:\n\nعملية إعادة التوطين:\n• إحالة من UNHCR لإعادة التوطين في أمريكا\n• الموافقة من الحكومة الأمريكية بعد فحص مكثف\n• تعيين لوكالة إعادة توطين\n• الوصول إلى الولايات المتحدة بوضع لاجئ\n• العمل نحو تعديل الوضع وفي النهاية الجنسية"
        },
        {
          heading: "الخطوات الأولى بعد الوصول",
          content: "خلال أول 30-90 يوماً، يجب على اللاجئين:",
          list: [
            "إكمال الفحوصات الطبية المطلوبة",
            "التقدم للحصول على بطاقة الضمان الاجتماعي",
            "تسجيل الأطفال في المدرسة",
            "بدء دروس اللغة الإنجليزية (ESL)",
            "التقدم لتصريح العمل (EAD)",
            "فتح حساب بنكي",
            "تعلم استخدام وسائل النقل العام",
            "التواصل مع منظمات المجتمع"
          ]
        },
        {
          heading: "الجدول الزمني للهجرة للاجئين",
          content: "معالم الهجرة الرئيسية للاجئين:",
          table: {
            headers: ["الإطار الزمني", "الإجراء", "ملاحظات"],
            rows: [
              ["اليوم 1", "الوصول مع I-94 يظهر وضع اللاجئ", "صالح لسنة واحدة"],
              ["فوراً", "التقدم لـ EAD (تصريح العمل)", "مجاني للاجئين"],
              ["بعد سنة", "التقدم لتعديل الوضع (البطاقة الخضراء)", "مطلوب وليس اختياري"],
              ["5 سنوات بعد الوصول", "مؤهل للجنسية", "البطاقة الخضراء مؤرخة بأثر رجعي للدخول"],
              ["5+ سنوات", "التقدم للتجنس", "تصبح مواطناً أمريكياً"]
            ]
          }
        },
        {
          heading: "تعديل الوضع للاجئين",
          content: "بعد سنة واحدة في الولايات المتحدة، يجب على اللاجئين التقدم لتعديل الوضع:\n\n• قدم نموذج I-485 (طلب تسجيل الإقامة الدائمة)\n• رسوم التقديم معفاة للاجئين\n• الفحص الطبي (I-693) مطلوب\n• سيتم إجراء فحوصات الخلفية\n• عدم التقديم قد يكون له عواقب هجرة\n• نساعد اللاجئين في إكمال هذا الطلب المهم"
        },
        {
          heading: "المزايا المتاحة للاجئين",
          content: "اللاجئون في غليندال لديهم وصول لمزايا متنوعة:",
          list: [
            "مساعدة اللاجئين النقدية (RCA) - أول 8 أشهر",
            "المساعدة الطبية للاجئين (RMA) - إذا لم تكن مؤهلاً لـ Medi-Cal",
            "SNAP (طوابع الغذاء) - CalFresh في كاليفورنيا",
            "Medi-Cal (ميديكيد كاليفورنيا)",
            "خدمات التوظيف من خلال وكالات إعادة التوطين",
            "برامج مساعدة السكن",
            "برامج ESL والتدريب الوظيفي",
            "مساعدة رعاية الأطفال"
          ]
        },
        {
          heading: "موارد مجتمع غليندال",
          content: "المنظمات التي تخدم اللاجئين في غليندال تشمل:\n\n• جمعية الإغاثة الأرمنية\n• الجمعيات الخيرية الكاثوليكية لوس أنجلوس\n• لجنة الإنقاذ الدولية (IRC)\n• خدمات الأسرة اليهودية لوس أنجلوس\n• YWCA غليندال\n• الكنائس الأرمنية المحلية والمراكز المجتمعية\n• مكتبة غليندال العامة (دروس ESL مجانية)\n• كلية مجتمع غليندال"
        },
        {
          heading: "التوظيف للاجئين",
          content: "اللاجئون يمكنهم العمل بشكل قانوني في الولايات المتحدة:",
          list: [
            "ختم I-94 الذي يظهر وضع اللاجئ يسمح بالعمل الفوري",
            "تقدم لـ EAD للحصول على وثيقة عمل أكثر أماناً",
            "وكالات إعادة التوطين توفر مساعدة التوظيف",
            "دروس الإنجليزية تحسن فرص التوظيف",
            "الشهادات الأجنبية قد تحتاج تقييم",
            "العديد من أصحاب العمل في غليندال يوظفون اللاجئين"
          ]
        },
        {
          heading: "لم شمل الأسرة (I-730)",
          content: "اللاجئون يمكنهم تقديم طلبات لأفراد العائلة:\n\n• الزوج والأطفال غير المتزوجين تحت 21 (خلال سنتين من وصول اللاجئ)\n• قدم نموذج I-730، طلب قريب اللاجئ/اللاجئ\n• لا رسوم تقديم لـ I-730\n• المشتقون يمكنهم الالتحاق\n• المعالجة يمكن أن تستغرق 1-2 سنة\n• نساعد في إعداد طلبات I-730"
        },
        {
          heading: "وثائق سفر اللاجئين",
          content: "اللاجئون يحتاجون وثائق خاصة للسفر الدولي:\n\n• وثيقة سفر اللاجئ (RTD) مطلوبة للسفر الدولي\n• تقدم باستخدام نموذج I-131\n• رسوم التقديم معفاة للاجئين\n• مهم: لا تعود إلى بلدك الأصلي - هذا قد يتخلى عن وضع اللاجئ\n• السفر إلى دول ثالثة مسموح\n• نساعد في إعداد طلبات وثيقة السفر"
        },
        {
          heading: "اعتبارات خاصة للاجئين الأرمن",
          content: "مجتمع غليندال الأرمني يقدم دعماً فريداً:\n\n• مهنيون وخدمات ناطقة بالأرمنية\n• الكنائس الأرمنية (عديدة في غليندال)\n• المنظمات الثقافية الأرمنية\n• وسائل الإعلام والصحف الأرمنية\n• محلات البقالة العرقية والأطعمة المألوفة\n• أطباء ومحامون وأخصائيون اجتماعيون أرمن\n• دعوة مجتمعية قوية"
        },
        {
          heading: "اعتبارات خاصة للاجئين العرب",
          content: "اللاجئون العرب في غليندال يمكنهم الوصول إلى:\n\n• خدمات ناطقة بالعربية (بما في ذلك خدماتنا)\n• أسواق الطعام الحلال القريبة\n• المساجد والمراكز الإسلامية\n• المنظمات الثقافية العربية\n• موارد المجتمع العربية\n• دعم من المجتمعات العراقية والسورية والعربية الأخرى"
        },
        {
          heading: "خدمات اللاجئين لدينا في غليندال",
          content: "تساعد خدمات حلول الهجرة لاجئي غليندال في إعداد الوثائق:",
          list: [
            "طلبات وثيقة تصريح العمل (EAD)",
            "إعداد تعديل الوضع (I-485)",
            "طلبات لم شمل الأسرة I-730",
            "طلبات وثيقة سفر اللاجئين",
            "ترجمة الوثائق (العربية، الأرمنية إلى الإنجليزية)",
            "مساعدة طلبات الضمان الاجتماعي والهوية",
            "إعداد التجنس بعد 5 سنوات",
            "فريق يتحدث العربية متاح"
          ]
        }
      ],

      faqs: [
        {
          q: "كم يمكنني البقاء في الولايات المتحدة كلاجئ؟",
          a: "اللاجئون يمكنهم البقاء بشكل دائم. بعد سنة واحدة، يجب أن تتقدم للبطاقة الخضراء (تعديل الوضع). بعد 5 سنوات من تاريخ وصولك، يمكنك التقدم للجنسية."
        },
        {
          q: "هل يمكنني العمل فوراً كلاجئ؟",
          a: "نعم. ختم I-94 الذي يظهر وضع اللاجئ يسمح لك بالعمل فوراً. نوصي أيضاً بالتقدم لـ EAD (تصريح العمل) كوثيقة أكثر أماناً لأصحاب العمل."
        },
        {
          q: "هل يمكنني إحضار عائلتي إلى الولايات المتحدة؟",
          a: "اللاجئون يمكنهم تقديم طلبات لزوجهم وأطفالهم غير المتزوجين تحت 21 باستخدام نموذج I-730. يجب تقديم هذا خلال سنتين من وصولك كلاجئ. نساعد في إعداد هذه الطلبات."
        },
        {
          q: "هل يمكنني السفر خارج الولايات المتحدة كلاجئ؟",
          a: "نعم، لكنك تحتاج وثيقة سفر اللاجئ أولاً. مهم: لا تسافر إلى بلدك الأصلي لأن هذا قد يُعتبر تخلياً عن وضع اللاجئ."
        },
        {
          q: "ما المزايا التي يمكن للاجئين الحصول عليها؟",
          a: "اللاجئون يمكنهم الحصول على مساعدة نقدية (RCA)، مساعدة طبية، طوابع غذاء (CalFresh)، و Medi-Cal. وكالة إعادة التوطين ستساعدك في التقدم لهذه المزايا."
        },
        {
          q: "هل تقدمون مشورة قانونية للاجئين؟",
          a: "نحن لسنا محامين ولا نقدم مشورة قانونية. نساعد في إعداد الوثائق ويمكننا إحالتك إلى خدمات قانونية مجانية من خلال وكالات إعادة التوطين أو منظمات المساعدة القانونية."
        }
      ],

      cta: {
        title: "لاجئ أعيد توطينه حديثاً في غليندال؟",
        text: "دع فريقنا يساعدك في وثائق هجرتك. نتحدث العربية ونفهم الاحتياجات الفريدة لعائلات اللاجئين.",
        button: "حجز استشارة"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default RefugeeResettlementGlendale;
