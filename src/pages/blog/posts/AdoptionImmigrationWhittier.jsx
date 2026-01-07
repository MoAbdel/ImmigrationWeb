import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const AdoptionImmigrationWhittier = ({ language }) => {
  const content = {
    en: {
      slug: "adoption-immigration-whittier",
      title: "Adoption Immigration in Whittier: Bringing Your Adopted Child to America",
      subtitle: "Immigration pathways for international adoptions and immigrant orphan petitions in Los Angeles County",
      metaTitle: "Adoption Immigration Whittier | International Adoption Green Card LA County",
      metaDescription: "Adoption immigration help in Whittier for families adopting internationally. IR-3, IR-4, IH-3, IH-4 visas. Arabic support. Call (714) 421-8872.",
      keywords: "adoption immigration Whittier, international adoption green card, immigrant orphan petition, adoption visa Los Angeles",
      category: "Family Immigration",
      location: "Whittier",
      date: "January 1, 2026",
      readTime: "12 min read",
      author: "SoCal Immigration Services",
      locationIntro: "Whittier, a historic city in Los Angeles County, is home to many families who have expanded through international adoption. The immigration process for adopted children involves specific visa categories and requirements that vary based on the adoption circumstances and country of origin.",

      sections: [
        {
          heading: "Immigration Options for Adopted Children",
          content: "The United States provides several immigration pathways for adopted children, depending on how and where the adoption occurs:\n\n**Immediate Relative Categories:**\n• IR-2: Child adopted before age 16, in custody 2+ years\n• IR-3: Orphan adopted abroad by U.S. citizen\n• IR-4: Orphan to be adopted in U.S. by citizen\n• IH-3: Hague Convention adoption completed abroad\n• IH-4: Hague Convention adoption to be completed in U.S."
        },
        {
          heading: "Hague vs. Non-Hague Adoptions",
          table: {
            headers: ["Feature", "Hague Convention Countries", "Non-Hague Countries"],
            rows: [
              ["Governing Law", "Hague Adoption Convention", "Immigration & Nationality Act"],
              ["Forms Required", "I-800A, I-800", "I-600A, I-600"],
              ["Home Study", "Hague-accredited agency", "Licensed agency"],
              ["Examples", "China, India, Philippines", "Ethiopia, Lebanon, Jordan"],
              ["Visa Type", "IH-3 or IH-4", "IR-3 or IR-4"]
            ]
          }
        },
        {
          heading: "Basic Eligibility Requirements",
          list: [
            "Adoptive parent must be U.S. citizen (at least one if married)",
            "Married couples must adopt jointly",
            "Single parents may adopt (some countries restrict)",
            "Child must be under 16 at time of adoption (under 18 for siblings)",
            "Must meet definition of 'orphan' or 'Convention adoptee'",
            "Home study approval required before adoption"
          ]
        },
        {
          heading: "The Adoption Immigration Process",
          steps: [
            { title: "Home Study", description: "Complete home study with licensed/accredited agency" },
            { title: "I-600A or I-800A", description: "File advance processing application with USCIS" },
            { title: "USCIS Approval", description: "Receive approval to adopt internationally" },
            { title: "Foreign Adoption", description: "Complete adoption in child's country of origin" },
            { title: "I-600 or I-800", description: "File immigrant petition for adopted child" },
            { title: "Visa Issuance", description: "Child receives immigrant visa at U.S. consulate" },
            { title: "U.S. Entry", description: "Child enters as lawful permanent resident" }
          ]
        },
        {
          heading: "Documentation Requirements",
          content: "Adoption immigration requires extensive documentation:",
          list: [
            "Birth certificates of adoptive parents",
            "Marriage certificate (if applicable)",
            "Evidence of U.S. citizenship",
            "Home study report from accredited agency",
            "Child's birth certificate",
            "Death certificates of biological parents (if applicable)",
            "Adoption decree from foreign country",
            "Photos of child and family",
            "Financial evidence (income, assets)",
            "Criminal background checks"
          ]
        },
        {
          heading: "Citizenship for Adopted Children",
          content: "Under the Child Citizenship Act of 2000, adopted children automatically acquire U.S. citizenship when:\n\n• At least one adoptive parent is a U.S. citizen\n• Child is admitted as lawful permanent resident\n• Child is in legal and physical custody of citizen parent\n• Child is under 18 years old\n\nFor IR-3 and IH-3 visas (full adoption abroad), citizenship is automatic upon U.S. entry. For IR-4 and IH-4 cases, the adoption must be finalized in the U.S. first."
        }
      ],

      faqs: [
        { q: "Can I adopt a child from an Arab country?", a: "Yes, but it varies by country. Some Arab countries allow certain types of adoption or guardianship (kafala). Lebanon and Jordan permit some adoptions. Countries like Saudi Arabia follow Islamic law which may limit traditional adoption but allow kafala guardianship." },
        { q: "How long does the adoption immigration process take?", a: "The entire process typically takes 2-4 years, depending on the country of origin, wait times for children, and USCIS processing. Some countries have specific timelines and quotas." },
        { q: "Does my adopted child automatically become a citizen?", a: "If the adoption is completed abroad (IR-3/IH-3 visa), the child becomes a citizen upon admission to the U.S. For adoptions completed in the U.S. (IR-4/IH-4), citizenship occurs when the adoption is finalized." },
        { q: "What is a home study?", a: "A home study is an evaluation by a licensed agency that assesses your suitability to adopt. It includes interviews, home visits, background checks, and financial review. It's required before you can be approved to adopt internationally." },
        { q: "Can I adopt my relative's child from overseas?", a: "Adopting a relative may be possible but has specific requirements. The child must meet the orphan definition, and you must demonstrate the adoption is not solely for immigration purposes." }
      ],

      cta: {
        title: "Adopting a Child from Overseas?",
        text: "Our team helps families in Whittier navigate the complex paperwork of international adoption immigration.",
        button: "Schedule Consultation"
      }
    },
    ar: {
      slug: "adoption-immigration-whittier",
      title: "هجرة التبني في ويتير: إحضار طفلك المتبنى إلى أمريكا",
      subtitle: "مسارات الهجرة للتبني الدولي وطلبات اليتيم المهاجر في مقاطعة لوس أنجلوس",
      metaTitle: "هجرة التبني ويتير | البطاقة الخضراء للتبني الدولي مقاطعة لوس أنجلوس",
      metaDescription: "مساعدة هجرة التبني في ويتير للعائلات التي تتبنى دولياً. تأشيرات IR-3، IR-4، IH-3، IH-4. دعم بالعربية. اتصل (714) 421-8872.",
      keywords: "هجرة التبني ويتير، البطاقة الخضراء للتبني الدولي، طلب اليتيم المهاجر",
      category: "هجرة العائلة",
      location: "ويتير",
      date: "1 يناير 2026",
      readTime: "12 دقيقة قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "ويتير، مدينة تاريخية في مقاطعة لوس أنجلوس، هي موطن للعديد من العائلات التي توسعت من خلال التبني الدولي. عملية الهجرة للأطفال المتبنين تتضمن فئات تأشيرات ومتطلبات محددة تختلف بناءً على ظروف التبني وبلد الأصل.",

      sections: [
        {
          heading: "خيارات الهجرة للأطفال المتبنين",
          content: "توفر الولايات المتحدة عدة مسارات هجرة للأطفال المتبنين، اعتماداً على كيفية ومكان التبني:\n\n**فئات الأقارب المباشرين:**\n• IR-2: طفل متبنى قبل سن 16، في الحضانة 2+ سنة\n• IR-3: يتيم متبنى في الخارج من قبل مواطن أمريكي\n• IR-4: يتيم سيُتبنى في الولايات المتحدة من قبل مواطن\n• IH-3: تبني اتفاقية لاهاي مكتمل في الخارج\n• IH-4: تبني اتفاقية لاهاي سيكتمل في الولايات المتحدة"
        },
        {
          heading: "تبني لاهاي مقابل غير لاهاي",
          table: {
            headers: ["الميزة", "دول اتفاقية لاهاي", "الدول غير لاهاي"],
            rows: [
              ["القانون الحاكم", "اتفاقية لاهاي للتبني", "قانون الهجرة والجنسية"],
              ["النماذج المطلوبة", "I-800A، I-800", "I-600A، I-600"],
              ["الدراسة المنزلية", "وكالة معتمدة من لاهاي", "وكالة مرخصة"],
              ["أمثلة", "الصين، الهند، الفلبين", "إثيوبيا، لبنان، الأردن"],
              ["نوع التأشيرة", "IH-3 أو IH-4", "IR-3 أو IR-4"]
            ]
          }
        },
        {
          heading: "متطلبات الأهلية الأساسية",
          list: [
            "يجب أن يكون الوالد المتبني مواطناً أمريكياً (واحد على الأقل إذا متزوجين)",
            "يجب على الأزواج المتزوجين التبني معاً",
            "يمكن للوالدين العازبين التبني (بعض البلدان تقيد)",
            "يجب أن يكون الطفل تحت 16 وقت التبني (تحت 18 للأشقاء)",
            "يجب أن يستوفي تعريف 'يتيم' أو 'متبنى الاتفاقية'",
            "موافقة الدراسة المنزلية مطلوبة قبل التبني"
          ]
        },
        {
          heading: "عملية هجرة التبني",
          steps: [
            { title: "الدراسة المنزلية", description: "أكمل الدراسة المنزلية مع وكالة مرخصة/معتمدة" },
            { title: "I-600A أو I-800A", description: "قدم طلب المعالجة المسبقة مع USCIS" },
            { title: "موافقة USCIS", description: "استلم الموافقة للتبني دولياً" },
            { title: "التبني الأجنبي", description: "أكمل التبني في بلد أصل الطفل" },
            { title: "I-600 أو I-800", description: "قدم طلب المهاجر للطفل المتبنى" },
            { title: "إصدار التأشيرة", description: "الطفل يستلم تأشيرة مهاجر في القنصلية الأمريكية" },
            { title: "الدخول للولايات المتحدة", description: "الطفل يدخل كمقيم دائم قانوني" }
          ]
        },
        {
          heading: "متطلبات التوثيق",
          content: "هجرة التبني تتطلب توثيقاً واسعاً:",
          list: [
            "شهادات ميلاد الوالدين المتبنين",
            "شهادة الزواج (إذا كان ذلك ينطبق)",
            "دليل الجنسية الأمريكية",
            "تقرير الدراسة المنزلية من وكالة معتمدة",
            "شهادة ميلاد الطفل",
            "شهادات وفاة الوالدين البيولوجيين (إذا كان ذلك ينطبق)",
            "مرسوم التبني من البلد الأجنبي",
            "صور الطفل والعائلة",
            "دليل مالي (الدخل، الأصول)",
            "فحوصات السوابق الجنائية"
          ]
        },
        {
          heading: "الجنسية للأطفال المتبنين",
          content: "بموجب قانون جنسية الطفل 2000، يكتسب الأطفال المتبنون الجنسية الأمريكية تلقائياً عندما:\n\n• على الأقل أحد الوالدين المتبنين مواطن أمريكي\n• الطفل مقبول كمقيم دائم قانوني\n• الطفل في الحضانة القانونية والجسدية للوالد المواطن\n• الطفل تحت 18 سنة\n\nلتأشيرات IR-3 و IH-3 (التبني الكامل في الخارج)، الجنسية تلقائية عند الدخول للولايات المتحدة. لحالات IR-4 و IH-4، يجب إنهاء التبني في الولايات المتحدة أولاً."
        }
      ],

      faqs: [
        { q: "هل يمكنني تبني طفل من بلد عربي؟", a: "نعم، لكنه يختلف حسب البلد. بعض البلدان العربية تسمح بأنواع معينة من التبني أو الكفالة. لبنان والأردن يسمحان ببعض حالات التبني. بلدان مثل السعودية تتبع الشريعة الإسلامية التي قد تقيد التبني التقليدي لكنها تسمح بالكفالة." },
        { q: "كم تستغرق عملية هجرة التبني؟", a: "العملية الكاملة تستغرق عادة 2-4 سنوات، اعتماداً على بلد الأصل، أوقات انتظار الأطفال، ومعالجة USCIS. بعض البلدان لها جداول زمنية وحصص محددة." },
        { q: "هل يصبح طفلي المتبنى مواطناً تلقائياً؟", a: "إذا اكتمل التبني في الخارج (تأشيرة IR-3/IH-3)، يصبح الطفل مواطناً عند القبول في الولايات المتحدة. للتبني المكتمل في الولايات المتحدة (IR-4/IH-4)، تحدث الجنسية عند إنهاء التبني." },
        { q: "ما هي الدراسة المنزلية؟", a: "الدراسة المنزلية هي تقييم من وكالة مرخصة يقيم ملاءمتك للتبني. تشمل مقابلات، زيارات منزلية، فحوصات خلفية، ومراجعة مالية. مطلوبة قبل أن تتم الموافقة على التبني دولياً." },
        { q: "هل يمكنني تبني طفل قريبي من الخارج؟", a: "تبني قريب قد يكون ممكناً لكن له متطلبات محددة. يجب أن يستوفي الطفل تعريف اليتيم، ويجب أن تثبت أن التبني ليس فقط لأغراض الهجرة." }
      ],

      cta: {
        title: "تتبنى طفلاً من الخارج؟",
        text: "فريقنا يساعد العائلات في ويتير على التنقل في الأوراق المعقدة لهجرة التبني الدولي.",
        button: "حجز استشارة"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default AdoptionImmigrationWhittier;
