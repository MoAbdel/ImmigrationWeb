import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const RefugeeHealthScreeningSantee = ({ language }) => {
  const content = {
    en: {
      slug: "refugee-health-screening-santee",
      title: "Refugee Health Screening in Santee: Medical Requirements for Refugees and Asylees",
      subtitle: "Understanding health screenings and medical exams for refugee resettlement",
      metaTitle: "Refugee Health Screening Santee | Medical Requirements Refugees Asylees",
      metaDescription: "Refugee health screening information in Santee. Medical exam requirements for refugees and asylees. Arabic-speaking help for East County families. Call (714) 421-8872.",
      keywords: "refugee health screening Santee, refugee medical exam, asylee health requirements, I-693 refugee, San Diego County refugee health",
      category: "Refugee Services",
      location: "Santee",
      date: "January 27, 2026",
      readTime: "12 min read",
      author: "SoCal Immigration Services",
      locationIntro: "For refugees and asylees in Santee and East San Diego County, health screenings are an important part of the immigration process. SoCal Immigration Services helps Arab refugee families understand medical requirements and find appropriate healthcare providers.",

      sections: [
        {
          heading: "Refugee Health Screening Overview",
          content: "Refugees undergo health screenings at multiple points in the immigration process, designed to identify health conditions and connect newcomers with healthcare.\n\nTypes of Health Screenings:\n• Overseas medical exam (before arrival)\n• Port-of-entry screening\n• Domestic health assessment (after arrival)\n• I-693 medical exam (for adjustment of status)\n\nEach serves different purposes in the refugee health continuum."
        },
        {
          heading: "Overseas Medical Examination",
          content: "Before arriving in the United States, refugees undergo mandatory medical exams:",
          list: [
            "Conducted by panel physicians designated by the U.S. embassy",
            "Physical examination",
            "Tuberculosis (TB) screening",
            "Vaccination review",
            "Syphilis and HIV testing for ages 15+",
            "Mental health evaluation",
            "Drug abuse screening",
            "Review of medical history"
          ]
        },
        {
          heading: "Domestic Refugee Health Assessment",
          content: "After arriving in the U.S., refugees receive follow-up health assessments:\n\nPurpose:\n• Not to create barriers, but to ensure health\n• Connect refugees with healthcare system\n• Follow up on overseas findings\n• Identify conditions needing treatment\n• Provide vaccinations not given overseas\n\nThis is typically arranged by the resettlement agency within 30-90 days of arrival."
        },
        {
          heading: "What the Domestic Health Assessment Includes",
          content: "The post-arrival health screening typically covers:",
          table: {
            headers: ["Component", "Purpose", "Notes"],
            rows: [
              ["Physical Exam", "Overall health assessment", "Height, weight, vital signs"],
              ["TB Screening", "Follow-up from overseas", "Chest X-ray or blood test"],
              ["Immunizations", "Complete CDC schedule", "Update vaccines"],
              ["Blood Tests", "Screen for conditions", "Varies by age and risk"],
              ["Mental Health", "Identify trauma/PTSD", "Important for refugees"],
              ["Dental Screening", "Oral health assessment", "Often neglected overseas"]
            ]
          }
        },
        {
          heading: "I-693 Medical Exam for Adjustment of Status",
          content: "When refugees adjust status to permanent residence, they need Form I-693:\n\nI-693 Requirements:\n• Completed by USCIS-designated civil surgeon\n• Must be completed within 60 days of filing I-485\n• Valid for 2 years from date completed\n• Includes vaccination requirements\n• Physical examination\n• TB screening\n\nFor Santee refugees: The I-693 is required even if you had a domestic health assessment."
        },
        {
          heading: "Vaccination Requirements",
          content: "Refugees must meet vaccination requirements for immigration:",
          list: [
            "Measles, Mumps, Rubella (MMR)",
            "Polio",
            "Tetanus and Diphtheria (Td/Tdap)",
            "Hepatitis B",
            "Haemophilus influenzae type b (Hib)",
            "Varicella (chickenpox)",
            "Pneumococcal",
            "Influenza (seasonal)",
            "COVID-19 (current requirement)",
            "Additional vaccines based on age"
          ]
        },
        {
          heading: "TB Screening for Refugees",
          content: "Tuberculosis screening is particularly important for refugee populations:\n\nTypes of TB Screening:\n• Tuberculin skin test (TST/PPD)\n• Interferon-gamma release assay (IGRA) blood test\n• Chest X-ray (if needed)\n\nClass B TB Conditions:\n• Some refugees arrive with 'Class B' TB designation\n• Requires follow-up within 30 days\n• Does not mean active TB disease\n• Must complete evaluation to exclude active TB"
        },
        {
          heading: "Mental Health Considerations",
          content: "Mental health is a critical component of refugee health:\n\nCommon Mental Health Concerns:\n• Post-traumatic stress disorder (PTSD)\n• Depression\n• Anxiety\n• Adjustment difficulties\n• Grief and loss\n\nFor Arab Refugees:\n• May face additional stressors from war trauma\n• Cultural considerations in mental health treatment\n• Arabic-speaking mental health providers when possible\n• Family-centered approaches often appropriate"
        },
        {
          heading: "Finding Healthcare Providers in Santee",
          content: "Resources for refugee health services in East County:",
          list: [
            "County refugee health programs",
            "Community health centers accepting refugees",
            "USCIS-designated civil surgeons for I-693",
            "Culturally competent providers",
            "Interpretation services available",
            "Refugee resettlement agency referrals",
            "County mental health services"
          ]
        },
        {
          heading: "Health Insurance for Refugees",
          content: "Understanding health coverage options:\n\nRefugee Medical Assistance (RMA):\n• Available for first 8 months after arrival\n• Covers medical, dental, vision\n• Transitions to Medi-Cal after RMA ends\n\nMedi-Cal:\n• California's Medicaid program\n• Available to refugees and asylees\n• No waiting period for refugees\n• Covers comprehensive services"
        },
        {
          heading: "Costs and Fee Waivers",
          content: "Understanding the costs of refugee health requirements:",
          table: {
            headers: ["Service", "Cost", "Notes"],
            rows: [
              ["Domestic Health Assessment", "Usually free", "Covered by resettlement funding"],
              ["I-693 Civil Surgeon Exam", "$100-400", "Varies by provider"],
              ["Vaccinations", "Varies", "May be covered by insurance"],
              ["TB Follow-up", "Usually covered", "County programs available"],
              ["Mental Health Services", "Usually covered", "Insurance or county services"]
            ]
          }
        },
        {
          heading: "Santee Refugee Health Services",
          content: "SoCal Immigration Services connects East County refugees with health resources:",
          list: [
            "Arabic and English speaking staff",
            "Referrals to civil surgeons for I-693",
            "Connection to refugee health programs",
            "I-485 adjustment of status preparation",
            "Coordination with resettlement agencies",
            "Understanding of cultural health needs"
          ]
        }
      ],

      faqs: [
        {
          q: "Do refugees need another medical exam to get a green card?",
          a: "Yes. Even if you had a health screening when you arrived, you need Form I-693 completed by a USCIS civil surgeon when you file for adjustment of status (green card). The domestic health assessment does not replace this requirement."
        },
        {
          q: "What if I'm afraid of needles or medical exams?",
          a: "This is common, especially for refugees who may have trauma related to medical settings. Let your healthcare provider know about your concerns. They can take steps to make you more comfortable, and some tests may have alternatives."
        },
        {
          q: "Can I refuse vaccinations for religious reasons?",
          a: "Some vaccinations may be waived for religious or moral objections. You would need to request a waiver from USCIS using appropriate documentation. However, waivers are limited and may affect your application."
        },
        {
          q: "What if I have a condition found in the health screening?",
          a: "Finding a health condition does not mean you'll be denied immigration benefits. The purpose is to connect you with treatment. Very few conditions create immigration bars, and most can be addressed with treatment."
        },
        {
          q: "How do I find a civil surgeon near Santee?",
          a: "USCIS maintains a list of designated civil surgeons on their website. We can help you find one nearby who is experienced with refugees and may have lower costs or accept insurance."
        },
        {
          q: "Does my health insurance cover the I-693 exam?",
          a: "Most health insurance plans do not cover immigration medical exams because they're not considered medically necessary treatment. However, some community health centers offer reduced fees, and vaccinations may be covered separately."
        }
      ],

      cta: {
        title: "Need Help with Refugee Health Requirements in Santee?",
        text: "Our Arabic-speaking team helps East County refugees understand health screenings and connect with appropriate healthcare providers. We coordinate with your adjustment of status application.",
        button: "Schedule Free Consultation"
      }
    },
    ar: {
      slug: "refugee-health-screening-santee",
      title: "الفحص الصحي للاجئين في سانتي: المتطلبات الطبية للاجئين واللاجئين",
      subtitle: "فهم الفحوصات الصحية والفحوصات الطبية لإعادة توطين اللاجئين",
      metaTitle: "الفحص الصحي للاجئين سانتي | المتطلبات الطبية للاجئين واللاجئين",
      metaDescription: "معلومات الفحص الصحي للاجئين في سانتي. متطلبات الفحص الطبي للاجئين. مساعدة باللغة العربية لعائلات إيست كاونتي. اتصل (714) 421-8872.",
      keywords: "الفحص الصحي للاجئين سانتي، الفحص الطبي للاجئين، المتطلبات الصحية للاجئين",
      category: "خدمات اللاجئين",
      location: "سانتي",
      date: "27 يناير 2026",
      readTime: "12 دقيقة قراءة",
      author: "خدمات الهجرة في جنوب كاليفورنيا",
      locationIntro: "للاجئين واللاجئين في سانتي ومقاطعة سان دييغو الشرقية، تعد الفحوصات الصحية جزءاً مهماً من عملية الهجرة. تساعد خدمات الهجرة في جنوب كاليفورنيا العائلات اللاجئة العربية في فهم المتطلبات الطبية وإيجاد مقدمي الرعاية الصحية المناسبين.",

      sections: [
        {
          heading: "نظرة عامة على الفحص الصحي للاجئين",
          content: "يخضع اللاجئون لفحوصات صحية في نقاط متعددة في عملية الهجرة، مصممة لتحديد الحالات الصحية وربط القادمين الجدد بالرعاية الصحية.\n\nأنواع الفحوصات الصحية:\n• الفحص الطبي في الخارج (قبل الوصول)\n• الفحص عند نقطة الدخول\n• التقييم الصحي المحلي (بعد الوصول)\n• الفحص الطبي I-693 (لتعديل الوضع)\n\nكل منها يخدم أغراضاً مختلفة في سلسلة صحة اللاجئين."
        },
        {
          heading: "الفحص الطبي في الخارج",
          content: "قبل الوصول إلى الولايات المتحدة، يخضع اللاجئون لفحوصات طبية إلزامية:",
          list: [
            "يجريه أطباء اللجان المعينون من السفارة الأمريكية",
            "الفحص البدني",
            "فحص السل (TB)",
            "مراجعة التطعيمات",
            "اختبار الزهري وفيروس نقص المناعة للأعمار 15+",
            "تقييم الصحة النفسية",
            "فحص تعاطي المخدرات",
            "مراجعة التاريخ الطبي"
          ]
        },
        {
          heading: "التقييم الصحي المحلي للاجئين",
          content: "بعد الوصول إلى الولايات المتحدة، يتلقى اللاجئون تقييمات صحية متابعة:\n\nالغرض:\n• ليس لخلق حواجز، ولكن لضمان الصحة\n• ربط اللاجئين بنظام الرعاية الصحية\n• متابعة النتائج من الخارج\n• تحديد الحالات التي تحتاج علاج\n• توفير التطعيمات التي لم تُعطَ في الخارج\n\nيتم ترتيب هذا عادة من قبل وكالة إعادة التوطين خلال 30-90 يوماً من الوصول."
        },
        {
          heading: "ما يتضمنه التقييم الصحي المحلي",
          content: "الفحص الصحي بعد الوصول يغطي عادة:",
          table: {
            headers: ["المكون", "الغرض", "ملاحظات"],
            rows: [
              ["الفحص البدني", "تقييم الصحة العامة", "الطول، الوزن، العلامات الحيوية"],
              ["فحص السل", "متابعة من الخارج", "أشعة الصدر أو فحص الدم"],
              ["التطعيمات", "إكمال جدول CDC", "تحديث اللقاحات"],
              ["فحوصات الدم", "الفحص للحالات", "يختلف حسب العمر والمخاطر"],
              ["الصحة النفسية", "تحديد الصدمة/PTSD", "مهم للاجئين"],
              ["فحص الأسنان", "تقييم صحة الفم", "غالباً مُهمل في الخارج"]
            ]
          }
        },
        {
          heading: "الفحص الطبي I-693 لتعديل الوضع",
          content: "عندما يعدل اللاجئون وضعهم للإقامة الدائمة، يحتاجون نموذج I-693:\n\nمتطلبات I-693:\n• يُكمله جراح مدني معين من USCIS\n• يجب إكماله في غضون 60 يوماً من تقديم I-485\n• صالح لمدة سنتين من تاريخ الإكمال\n• يتضمن متطلبات التطعيم\n• الفحص البدني\n• فحص السل\n\nللاجئين في سانتي: I-693 مطلوب حتى لو كان لديك تقييم صحي محلي."
        },
        {
          heading: "متطلبات التطعيم",
          content: "يجب على اللاجئين تلبية متطلبات التطعيم للهجرة:",
          list: [
            "الحصبة، النكاف، الحصبة الألمانية (MMR)",
            "شلل الأطفال",
            "الكزاز والدفتيريا (Td/Tdap)",
            "التهاب الكبد B",
            "المستدمية النزلية النوع b (Hib)",
            "الجدري المائي (الحماق)",
            "المكورات الرئوية",
            "الإنفلونزا (الموسمية)",
            "COVID-19 (المتطلب الحالي)",
            "لقاحات إضافية بناءً على العمر"
          ]
        }
      ],

      faqs: [
        {
          q: "هل يحتاج اللاجئون لفحص طبي آخر للحصول على البطاقة الخضراء؟",
          a: "نعم. حتى لو أجريت فحصاً صحياً عند وصولك، تحتاج نموذج I-693 مُكمل من جراح مدني USCIS عندما تقدم لتعديل الوضع (البطاقة الخضراء). التقييم الصحي المحلي لا يحل محل هذا المتطلب."
        },
        {
          q: "ماذا لو كنت أخاف من الإبر أو الفحوصات الطبية؟",
          a: "هذا شائع، خاصة للاجئين الذين قد يكون لديهم صدمة تتعلق بالبيئات الطبية. أخبر مقدم الرعاية الصحية عن مخاوفك. يمكنهم اتخاذ خطوات لجعلك أكثر راحة، وبعض الاختبارات قد يكون لها بدائل."
        },
        {
          q: "هل يمكنني رفض التطعيمات لأسباب دينية؟",
          a: "قد يُعفى من بعض التطعيمات لاعتراضات دينية أو أخلاقية. ستحتاج لطلب إعفاء من USCIS باستخدام التوثيق المناسب. ومع ذلك، الإعفاءات محدودة وقد تؤثر على طلبك."
        },
        {
          q: "ماذا لو تم اكتشاف حالة في الفحص الصحي؟",
          a: "اكتشاف حالة صحية لا يعني أنك ستُرفض من مزايا الهجرة. الغرض هو ربطك بالعلاج. عدد قليل جداً من الحالات تخلق موانع هجرة، ومعظمها يمكن معالجته بالعلاج."
        },
        {
          q: "كيف أجد جراحاً مدنياً بالقرب من سانتي؟",
          a: "تحتفظ USCIS بقائمة من الجراحين المدنيين المعينين على موقعها. يمكننا مساعدتك في إيجاد واحد قريب لديه خبرة مع اللاجئين وقد يكون لديه تكاليف أقل أو يقبل التأمين."
        },
        {
          q: "هل يغطي تأميني الصحي فحص I-693؟",
          a: "معظم خطط التأمين الصحي لا تغطي فحوصات الهجرة الطبية لأنها لا تُعتبر علاجاً ضرورياً طبياً. ومع ذلك، بعض مراكز الصحة المجتمعية تقدم رسوماً مخفضة، والتطعيمات قد تُغطى بشكل منفصل."
        }
      ],

      cta: {
        title: "هل تحتاج مساعدة في المتطلبات الصحية للاجئين في سانتي؟",
        text: "يساعد فريقنا الناطق بالعربية لاجئي إيست كاونتي في فهم الفحوصات الصحية والتواصل مع مقدمي الرعاية الصحية المناسبين. ننسق مع طلب تعديل وضعك.",
        button: "جدولة استشارة مجانية"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default RefugeeHealthScreeningSantee;
