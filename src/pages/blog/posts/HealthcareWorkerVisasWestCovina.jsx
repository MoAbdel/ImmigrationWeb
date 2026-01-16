import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const HealthcareWorkerVisasWestCovina = ({ language }) => {
  const content = {
    en: {
      slug: "healthcare-worker-visas-west-covina",
      title: "Healthcare Worker Visas in West Covina: Immigration for Nurses and Medical Professionals",
      subtitle: "Visa options for foreign nurses, doctors, and healthcare workers in the San Gabriel Valley",
      metaTitle: "Healthcare Worker Visa West Covina | Nurse Immigration LA County",
      metaDescription: "Immigration help for healthcare workers in West Covina. Nurse visas, physician green cards, EB-3 and H-1B for medical professionals. Call (714) 421-8872.",
      keywords: "healthcare worker visa West Covina, nurse immigration, physician green card, EB-3 nurse visa, H-1B doctor",
      category: "Employment",
      location: "West Covina",
      date: "January 16, 2026",
      readTime: "12 min read",
      author: "SoCal Immigration Services",
      locationIntro: "The United States faces ongoing shortages of healthcare workers, creating immigration opportunities for foreign nurses, physicians, and medical professionals. SoCal Immigration Services helps healthcare workers in West Covina and the San Gabriel Valley navigate their immigration options.",

      sections: [
        {
          heading: "Healthcare Worker Immigration Overview",
          content: "Foreign healthcare workers have multiple pathways to work in the United States:\n\nKey Advantages:\n• High demand creates more visa opportunities\n• Special visa categories for healthcare\n• EB-3 green card category for nurses\n• Conrad 30 program for physicians\n• Faster processing in some categories\n• Hospitals often sponsor immigration costs"
        },
        {
          heading: "Visa Options for Nurses",
          content: "Immigration pathways for registered nurses:",
          table: {
            headers: ["Visa Type", "Description", "Timeline"],
            rows: [
              ["EB-3 Green Card", "Permanent residence for skilled workers", "2-5 years"],
              ["H-1B (BSN)", "Specialty occupation for BSN nurses", "1-3 years"],
              ["TN Visa", "For Canadian/Mexican nurses", "1-3 days"],
              ["EB-2 NIW", "For nurses with advanced practice", "1-3 years"]
            ]
          }
        },
        {
          heading: "EB-3 Green Card for Nurses",
          content: "The most common pathway for nurse immigration:\n\nRequirements:\n• Valid nursing license in destination state\n• Job offer from US healthcare employer\n• CGFNS VisaScreen certificate\n• IELTS or TOEFL English proficiency\n• Labor certification (PERM) from employer\n\nProcess:\n1. Employer files PERM labor certification\n2. Employer files I-140 immigrant petition\n3. Wait for priority date to become current\n4. File I-485 adjustment of status (or consular processing)\n5. Receive green card"
        },
        {
          heading: "Physician Immigration Options",
          content: "Visa pathways for foreign physicians:",
          list: [
            "J-1 Exchange Visitor - Medical residency training",
            "H-1B - After residency, sponsored by employer",
            "Conrad 30 Waiver - J-1 waiver for underserved areas",
            "EB-2 National Interest Waiver - For physicians serving underserved populations",
            "EB-1B Outstanding Researcher - For physician researchers"
          ]
        },
        {
          heading: "VisaScreen Certificate Requirement",
          content: "Most healthcare workers need VisaScreen certification:\n\nWhat is VisaScreen?\n• Required credential verification for healthcare workers\n• Issued by CGFNS (Commission on Graduates of Foreign Nursing Schools)\n• Verifies education, license, and English proficiency\n\nWho Needs It:\n• Nurses (RN, LPN/LVN)\n• Physical therapists\n• Occupational therapists\n• Medical technicians\n• Physicians (except for J-1 training)"
        },
        {
          heading: "Other Healthcare Professionals",
          content: "Immigration options for non-physician healthcare workers:",
          table: {
            headers: ["Profession", "Common Visa", "Notes"],
            rows: [
              ["Physical Therapist", "EB-3 or H-1B", "High demand, FCCPT evaluation required"],
              ["Occupational Therapist", "EB-3 or H-1B", "NBCOT certification needed"],
              ["Medical Technologist", "EB-3", "AMT or ASCP certification"],
              ["Pharmacist", "H-1B", "Must pass NAPLEX/MPJE"],
              ["Dentist", "H-1B or EB-2", "State license required"],
              ["Speech Pathologist", "H-1B or EB-3", "CCC-SLP certification"]
            ]
          }
        },
        {
          heading: "Employer Sponsorship Process",
          content: "How healthcare employers sponsor foreign workers:\n\n1. Recruitment: Employer identifies qualified foreign worker\n2. PERM Labor Certification: Prove no qualified US workers available\n3. I-140 Petition: Employer files immigrant visa petition\n4. Priority Date Wait: May take years depending on country\n5. Green Card Application: I-485 adjustment or consular processing\n\nEmployer Responsibilities:\n• Pay legal fees and government filing fees\n• Provide permanent full-time job\n• Meet prevailing wage requirements"
        },
        {
          heading: "Credential Evaluation",
          content: "Getting your foreign credentials recognized:",
          list: [
            "CGFNS Certification Program for nurses",
            "ECFMG Certification for physicians",
            "FCCPT for physical therapists",
            "NBCOT for occupational therapists",
            "State licensing board requirements",
            "English proficiency tests (IELTS, TOEFL, OET)"
          ]
        },
        {
          heading: "West Covina Healthcare Immigration Services",
          content: "SoCal Immigration Services helps healthcare workers with:",
          list: [
            "Visa category evaluation and strategy",
            "VisaScreen application assistance",
            "Employer liaison for sponsorship",
            "I-140 and I-485 preparation",
            "Credential evaluation guidance",
            "Arabic and English speaking support"
          ]
        }
      ],

      faqs: [
        {
          q: "Can I work as a nurse in the US without a green card?",
          a: "Yes, nurses with at least a bachelor's degree may qualify for H-1B visas. Canadian and Mexican nurses can use TN visas. However, most nurses pursue EB-3 green cards for permanent status."
        },
        {
          q: "How long does nurse immigration take?",
          a: "The EB-3 process typically takes 2-5 years, depending on your country of birth. Filipino and Indian nurses may face longer waits due to backlogs. The PERM and I-140 stages take about 1-2 years, with additional waiting for visa availability."
        },
        {
          q: "Do I need to pass NCLEX before getting a visa?",
          a: "You need to pass NCLEX to get a nursing license, which is required before you can work. You'll also need the VisaScreen certificate, which requires English proficiency testing."
        },
        {
          q: "Can hospitals sponsor my green card?",
          a: "Yes, many hospitals actively sponsor foreign nurses and healthcare workers due to ongoing shortages. They typically cover the legal and filing costs associated with immigration."
        },
        {
          q: "What is the Conrad 30 waiver for physicians?",
          a: "The Conrad 30 waiver allows J-1 physicians to stay in the US after residency instead of returning home for 2 years. They must work in a medically underserved area for 3 years."
        },
        {
          q: "Can my family come with me on a healthcare worker visa?",
          a: "Yes, spouses and children under 21 can accompany you as derivative beneficiaries. On H-1B, they get H-4 status; with a green card, they also receive permanent residence."
        }
      ],

      cta: {
        title: "Healthcare Worker Seeking US Opportunities in West Covina?",
        text: "Let us help you navigate the immigration process for nurses, physicians, and other healthcare professionals. We understand the unique requirements for medical worker visas.",
        button: "Schedule Free Consultation"
      }
    },
    ar: {
      slug: "healthcare-worker-visas-west-covina",
      title: "تأشيرات عمال الرعاية الصحية في ويست كوفينا: الهجرة للممرضين والمهنيين الطبيين",
      subtitle: "خيارات التأشيرة للممرضين والأطباء وعمال الرعاية الصحية الأجانب في وادي سان غابرييل",
      metaTitle: "تأشيرة عامل رعاية صحية ويست كوفينا | هجرة الممرضين مقاطعة لوس أنجلوس",
      metaDescription: "مساعدة هجرة لعمال الرعاية الصحية في ويست كوفينا. تأشيرات الممرضين، البطاقات الخضراء للأطباء، EB-3 و H-1B للمهنيين الطبيين. اتصل (714) 421-8872.",
      keywords: "تأشيرة عامل رعاية صحية ويست كوفينا، هجرة الممرضين، بطاقة خضراء للطبيب، تأشيرة EB-3 للممرضين، H-1B للطبيب",
      category: "التوظيف",
      location: "ويست كوفينا",
      date: "16 يناير 2026",
      readTime: "12 دقيقة قراءة",
      author: "خدمات سوكال للهجرة",
      locationIntro: "تواجه الولايات المتحدة نقصاً مستمراً في عمال الرعاية الصحية، مما يخلق فرص هجرة للممرضين والأطباء والمهنيين الطبيين الأجانب. تساعد خدمات سوكال للهجرة عمال الرعاية الصحية في ويست كوفينا ووادي سان غابرييل في التنقل في خيارات هجرتهم.",

      sections: [
        {
          heading: "نظرة عامة على هجرة عمال الرعاية الصحية",
          content: "لدى عمال الرعاية الصحية الأجانب مسارات متعددة للعمل في الولايات المتحدة:\n\nالمزايا الرئيسية:\n• الطلب العالي يخلق المزيد من فرص التأشيرة\n• فئات تأشيرة خاصة للرعاية الصحية\n• فئة البطاقة الخضراء EB-3 للممرضين\n• برنامج Conrad 30 للأطباء\n• معالجة أسرع في بعض الفئات\n• المستشفيات غالباً ترعى تكاليف الهجرة"
        },
        {
          heading: "خيارات التأشيرة للممرضين",
          content: "مسارات الهجرة للممرضين المسجلين:",
          table: {
            headers: ["نوع التأشيرة", "الوصف", "الجدول الزمني"],
            rows: [
              ["البطاقة الخضراء EB-3", "الإقامة الدائمة للعمال المهرة", "2-5 سنوات"],
              ["H-1B (BSN)", "مهنة متخصصة لممرضي BSN", "1-3 سنوات"],
              ["تأشيرة TN", "للممرضين الكنديين/المكسيكيين", "1-3 أيام"],
              ["EB-2 NIW", "للممرضين ذوي الممارسة المتقدمة", "1-3 سنوات"]
            ]
          }
        },
        {
          heading: "البطاقة الخضراء EB-3 للممرضين",
          content: "المسار الأكثر شيوعاً لهجرة الممرضين:\n\nالمتطلبات:\n• رخصة تمريض صالحة في الولاية الوجهة\n• عرض عمل من صاحب عمل رعاية صحية أمريكي\n• شهادة VisaScreen من CGFNS\n• إتقان اللغة الإنجليزية IELTS أو TOEFL\n• شهادة العمل (PERM) من صاحب العمل\n\nالعملية:\n1. صاحب العمل يقدم شهادة العمل PERM\n2. صاحب العمل يقدم التماس المهاجر I-140\n3. الانتظار حتى يصبح تاريخ الأولوية حالياً\n4. تقديم I-485 تعديل الوضع (أو المعالجة القنصلية)\n5. الحصول على البطاقة الخضراء"
        },
        {
          heading: "خيارات هجرة الأطباء",
          content: "مسارات التأشيرة للأطباء الأجانب:",
          list: [
            "J-1 زائر تبادل - تدريب الإقامة الطبية",
            "H-1B - بعد الإقامة، برعاية صاحب العمل",
            "إعفاء Conrad 30 - إعفاء J-1 للمناطق المحرومة",
            "EB-2 إعفاء المصلحة الوطنية - للأطباء الذين يخدمون السكان المحرومين",
            "EB-1B باحث متميز - للباحثين الأطباء"
          ]
        },
        {
          heading: "متطلبات شهادة VisaScreen",
          content: "معظم عمال الرعاية الصحية يحتاجون شهادة VisaScreen:\n\nما هو VisaScreen؟\n• التحقق من أوراق الاعتماد المطلوبة لعمال الرعاية الصحية\n• صادرة من CGFNS (لجنة خريجي مدارس التمريض الأجنبية)\n• تتحقق من التعليم والرخصة وإتقان الإنجليزية\n\nمن يحتاجه:\n• الممرضون (RN، LPN/LVN)\n• المعالجون الفيزيائيون\n• المعالجون المهنيون\n• الفنيون الطبيون\n• الأطباء (باستثناء تدريب J-1)"
        },
        {
          heading: "المهنيون الصحيون الآخرون",
          content: "خيارات الهجرة لعمال الرعاية الصحية غير الأطباء:",
          table: {
            headers: ["المهنة", "التأشيرة الشائعة", "ملاحظات"],
            rows: [
              ["المعالج الفيزيائي", "EB-3 أو H-1B", "طلب عالٍ، تقييم FCCPT مطلوب"],
              ["المعالج المهني", "EB-3 أو H-1B", "شهادة NBCOT مطلوبة"],
              ["التقني الطبي", "EB-3", "شهادة AMT أو ASCP"],
              ["الصيدلي", "H-1B", "يجب اجتياز NAPLEX/MPJE"],
              ["طبيب الأسنان", "H-1B أو EB-2", "رخصة الولاية مطلوبة"],
              ["أخصائي النطق", "H-1B أو EB-3", "شهادة CCC-SLP"]
            ]
          }
        },
        {
          heading: "عملية رعاية صاحب العمل",
          content: "كيف يرعى أصحاب العمل الصحيون العمال الأجانب:\n\n1. التوظيف: صاحب العمل يحدد عاملاً أجنبياً مؤهلاً\n2. شهادة العمل PERM: إثبات عدم توفر عمال أمريكيين مؤهلين\n3. التماس I-140: صاحب العمل يقدم التماس تأشيرة المهاجر\n4. انتظار تاريخ الأولوية: قد يستغرق سنوات حسب البلد\n5. طلب البطاقة الخضراء: I-485 تعديل أو معالجة قنصلية\n\nمسؤوليات صاحب العمل:\n• دفع الرسوم القانونية ورسوم التقديم الحكومية\n• توفير وظيفة دائمة بدوام كامل\n• استيفاء متطلبات الأجر السائد"
        },
        {
          heading: "تقييم أوراق الاعتماد",
          content: "الاعتراف بأوراق اعتمادك الأجنبية:",
          list: [
            "برنامج شهادة CGFNS للممرضين",
            "شهادة ECFMG للأطباء",
            "FCCPT للمعالجين الفيزيائيين",
            "NBCOT للمعالجين المهنيين",
            "متطلبات مجلس ترخيص الولاية",
            "اختبارات إتقان الإنجليزية (IELTS، TOEFL، OET)"
          ]
        },
        {
          heading: "خدمات هجرة الرعاية الصحية في ويست كوفينا",
          content: "تساعد خدمات سوكال للهجرة عمال الرعاية الصحية في:",
          list: [
            "تقييم فئة التأشيرة والاستراتيجية",
            "مساعدة طلب VisaScreen",
            "التنسيق مع صاحب العمل للرعاية",
            "إعداد I-140 و I-485",
            "إرشاد تقييم أوراق الاعتماد",
            "دعم بالعربية والإنجليزية"
          ]
        }
      ],

      faqs: [
        {
          q: "هل يمكنني العمل كممرض في أمريكا بدون بطاقة خضراء؟",
          a: "نعم، الممرضون الحاصلون على درجة بكالوريوس على الأقل قد يؤهلون لتأشيرات H-1B. الممرضون الكنديون والمكسيكيون يمكنهم استخدام تأشيرات TN. ومع ذلك، معظم الممرضين يسعون للبطاقات الخضراء EB-3 للوضع الدائم."
        },
        {
          q: "كم تستغرق هجرة الممرضين؟",
          a: "عملية EB-3 عادة تستغرق 2-5 سنوات، حسب بلد الميلاد. الممرضون الفلبينيون والهنود قد يواجهون انتظاراً أطول بسبب التراكم. مراحل PERM و I-140 تستغرق حوالي 1-2 سنة، مع انتظار إضافي لتوافر التأشيرة."
        },
        {
          q: "هل أحتاج لاجتياز NCLEX قبل الحصول على تأشيرة؟",
          a: "تحتاج لاجتياز NCLEX للحصول على رخصة تمريض، المطلوبة قبل العمل. ستحتاج أيضاً شهادة VisaScreen، التي تتطلب اختبار إتقان الإنجليزية."
        },
        {
          q: "هل يمكن للمستشفيات رعاية بطاقتي الخضراء؟",
          a: "نعم، العديد من المستشفيات ترعى بنشاط الممرضين وعمال الرعاية الصحية الأجانب بسبب النقص المستمر. عادة يغطون التكاليف القانونية ورسوم التقديم المرتبطة بالهجرة."
        },
        {
          q: "ما هو إعفاء Conrad 30 للأطباء؟",
          a: "إعفاء Conrad 30 يسمح لأطباء J-1 بالبقاء في أمريكا بعد الإقامة بدلاً من العودة لبلدهم لسنتين. يجب عليهم العمل في منطقة محرومة طبياً لمدة 3 سنوات."
        },
        {
          q: "هل يمكن لعائلتي القدوم معي على تأشيرة عامل رعاية صحية؟",
          a: "نعم، الأزواج والأطفال دون 21 يمكنهم مرافقتك كمستفيدين مشتقين. على H-1B، يحصلون على وضع H-4؛ مع البطاقة الخضراء، يحصلون أيضاً على الإقامة الدائمة."
        }
      ],

      cta: {
        title: "عامل رعاية صحية يبحث عن فرص أمريكية في ويست كوفينا؟",
        text: "دعنا نساعدك في التنقل في عملية الهجرة للممرضين والأطباء والمهنيين الصحيين الآخرين. نفهم المتطلبات الفريدة لتأشيرات العمال الطبيين.",
        button: "احجز استشارة مجانية"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default HealthcareWorkerVisasWestCovina;
