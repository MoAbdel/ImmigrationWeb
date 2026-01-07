import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const I130UnmarriedChildrenRiverside = ({ language }) => {
  const content = {
    en: {
      slug: "i130-unmarried-adult-children-riverside",
      title: "I-130 for Unmarried Adult Children in Riverside: F2B Family Preference Guide",
      subtitle: "Sponsoring your unmarried sons and daughters over 21",
      metaTitle: "I-130 Unmarried Adult Children Riverside | F2B Family Immigration",
      metaDescription: "I-130 petition help for unmarried adult children in Riverside. F2B family preference category guidance for Inland Empire families. Call (714) 421-8872.",
      keywords: "I-130 unmarried children Riverside, F2B visa family, adult child immigration, Inland Empire immigration",
      category: "Family Immigration",
      location: "Riverside",
      date: "January 1, 2026",
      readTime: "9 min read",
      author: "SoCal Immigration Services",
      locationIntro: "For permanent residents in Riverside looking to bring their unmarried adult children to the United States, the I-130 family petition process can be complex. Understanding the F2B preference category and current wait times is essential for Inland Empire families.",

      sections: [
        {
          heading: "Understanding the F2B Category",
          content: "The F2B preference category is for unmarried sons and daughters (21 years or older) of lawful permanent residents. This is different from:\n\n• F2A: Spouses and unmarried children under 21 of LPRs\n• F1: Unmarried adult children of U.S. citizens\n• F3: Married adult children of U.S. citizens\n\nAs an LPR, you can only petition for unmarried children. If your child marries, they will no longer qualify in this category."
        },
        {
          heading: "Current Wait Times for F2B",
          content: "F2B has some of the longest wait times in the family preference system. Current priority dates vary significantly by country of origin:",
          table: {
            headers: ["Country of Birth", "Approximate Wait", "Notes"],
            rows: [
              ["All Countries (except below)", "5-7 years", "General processing"],
              ["Mexico", "15-20+ years", "Significant backlog"],
              ["Philippines", "10-15+ years", "Long waiting period"],
              ["India", "8-10 years", "Growing backlog"],
              ["China (mainland)", "6-8 years", "Moderate wait"]
            ]
          }
        },
        {
          heading: "Requirements for the Petitioner (LPR Parent)",
          list: [
            "Must be a lawful permanent resident (green card holder)",
            "Must be able to prove parent-child relationship",
            "Must be able to prove your own immigration status",
            "Must be willing to financially support your child",
            "No minimum income requirement to file (but needed for I-864 later)"
          ]
        },
        {
          heading: "Requirements for the Beneficiary (Adult Child)",
          list: [
            "Must be your biological or legally adopted child",
            "Must be 21 years of age or older",
            "Must be unmarried (never married or divorced/widowed)",
            "Must remain unmarried throughout the process",
            "If they marry, petition will be automatically revoked"
          ]
        },
        {
          heading: "The I-130 Process",
          steps: [
            { title: "File I-130", description: "Submit Form I-130 with supporting documents and $535 fee" },
            { title: "Wait for Priority Date", description: "USCIS processes petition and assigns priority date" },
            { title: "I-130 Approval", description: "Once approved, case goes to National Visa Center" },
            { title: "Wait for Visa Availability", description: "Wait until priority date becomes current" },
            { title: "Consular Processing or AOS", description: "Apply for immigrant visa or adjust status if in US" }
          ]
        },
        {
          heading: "What If You Become a U.S. Citizen?",
          content: "If you naturalize while your child's petition is pending, the category changes:\n\n• F2B converts to F1 (unmarried adult children of citizens)\n• F1 often has faster processing than F2B\n• Priority date may change (check with USCIS)\n• This is generally beneficial but verify for your specific country\n\nThis is called 'automatic conversion' and happens when you become a citizen."
        },
        {
          heading: "Important Considerations",
          list: [
            "Child must remain unmarried - marriage voids the petition",
            "Child ages out protections don't apply to F2B",
            "If you lose your LPR status, petition becomes invalid",
            "Child can work and study in the US once admitted",
            "Petition can be revoked if fraud is discovered"
          ]
        },
        {
          heading: "Documents Needed",
          list: [
            "Form I-130 (Petition for Alien Relative)",
            "Copy of your green card (front and back)",
            "Child's birth certificate (with certified translation)",
            "Evidence of relationship (photos, correspondence)",
            "Your birth certificate if names differ",
            "Passport-style photos",
            "Filing fee ($535)"
          ]
        }
      ],

      faqs: [
        { q: "How long does F2B processing take?", a: "Currently, F2B wait times range from 5-20+ years depending on country of birth. Check the State Department Visa Bulletin for current priority dates." },
        { q: "What happens if my child marries while waiting?", a: "If your child marries at any point before becoming a permanent resident, the petition is automatically revoked. They would need a new petition in a married child category (if you're a citizen) or no category (if you're an LPR)." },
        { q: "Can my child work in the US while waiting?", a: "No, your child cannot work or live in the US solely based on a pending I-130. They must wait abroad until their priority date is current and they receive their immigrant visa." },
        { q: "Should I naturalize to help my child?", a: "Often yes - when you become a citizen, your child's petition converts from F2B to F1, which typically has shorter wait times for most countries." },
        { q: "Can I petition for married children as an LPR?", a: "No, as a permanent resident you can only petition for unmarried children. To petition for married children, you must first become a U.S. citizen." }
      ],

      cta: {
        title: "Need Help with Family Immigration in Riverside?",
        text: "Our team helps Inland Empire families navigate the complex I-130 petition process for adult children.",
        button: "Schedule Consultation"
      }
    },
    ar: {
      slug: "i130-unmarried-adult-children-riverside",
      title: "I-130 للأطفال البالغين غير المتزوجين في ريفرسايد: دليل فئة التفضيل العائلي F2B",
      subtitle: "كفالة أبنائك وبناتك غير المتزوجين فوق 21",
      metaTitle: "I-130 الأطفال البالغين غير المتزوجين ريفرسايد | هجرة العائلة F2B",
      metaDescription: "مساعدة طلب I-130 للأطفال البالغين غير المتزوجين في ريفرسايد. إرشاد فئة التفضيل العائلي F2B لعائلات إنلاند إمباير. اتصل (714) 421-8872.",
      keywords: "I-130 الأطفال غير المتزوجين ريفرسايد، تأشيرة عائلة F2B، هجرة الأطفال البالغين",
      category: "هجرة العائلة",
      location: "ريفرسايد",
      date: "1 يناير 2026",
      readTime: "9 دقائق قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "للمقيمين الدائمين في ريفرسايد الذين يتطلعون لإحضار أطفالهم البالغين غير المتزوجين إلى الولايات المتحدة، يمكن أن تكون عملية طلب العائلة I-130 معقدة. فهم فئة التفضيل F2B وأوقات الانتظار الحالية ضروري لعائلات إنلاند إمباير.",

      sections: [
        {
          heading: "فهم فئة F2B",
          content: "فئة التفضيل F2B هي للأبناء والبنات غير المتزوجين (21 سنة أو أكثر) من المقيمين الدائمين القانونيين. هذا مختلف عن:\n\n• F2A: أزواج وأطفال غير متزوجين تحت 21 من LPRs\n• F1: الأطفال البالغين غير المتزوجين للمواطنين الأمريكيين\n• F3: الأطفال البالغين المتزوجين للمواطنين الأمريكيين\n\nكـ LPR، يمكنك فقط تقديم طلب للأطفال غير المتزوجين. إذا تزوج طفلك، لن يتأهل في هذه الفئة."
        },
        {
          heading: "أوقات الانتظار الحالية لـ F2B",
          content: "F2B لديها بعض من أطول أوقات الانتظار في نظام تفضيل العائلة. تتفاوت تواريخ الأولوية الحالية بشكل كبير حسب بلد المنشأ:",
          table: {
            headers: ["بلد الميلاد", "الانتظار التقريبي", "ملاحظات"],
            rows: [
              ["جميع البلدان (باستثناء أدناه)", "5-7 سنوات", "معالجة عامة"],
              ["المكسيك", "15-20+ سنة", "تراكم كبير"],
              ["الفلبين", "10-15+ سنة", "فترة انتظار طويلة"],
              ["الهند", "8-10 سنوات", "تراكم متزايد"],
              ["الصين (البر الرئيسي)", "6-8 سنوات", "انتظار معتدل"]
            ]
          }
        },
        {
          heading: "متطلبات مقدم الطلب (الوالد LPR)",
          list: [
            "يجب أن تكون مقيماً دائماً قانونياً (حامل بطاقة خضراء)",
            "يجب أن تكون قادراً على إثبات علاقة الوالد والطفل",
            "يجب أن تكون قادراً على إثبات وضعك كمهاجر",
            "يجب أن تكون مستعداً لدعم طفلك مالياً",
            "لا يوجد حد أدنى للدخل للتقديم (لكنه مطلوب لـ I-864 لاحقاً)"
          ]
        },
        {
          heading: "متطلبات المستفيد (الطفل البالغ)",
          list: [
            "يجب أن يكون طفلك البيولوجي أو المتبنى قانونياً",
            "يجب أن يكون عمره 21 سنة أو أكثر",
            "يجب أن يكون غير متزوج (لم يتزوج أبداً أو مطلق/أرمل)",
            "يجب أن يظل غير متزوج طوال العملية",
            "إذا تزوجوا، سيتم إلغاء الطلب تلقائياً"
          ]
        },
        {
          heading: "عملية I-130",
          steps: [
            { title: "تقديم I-130", description: "قدم نموذج I-130 مع الوثائق الداعمة ورسوم $535" },
            { title: "انتظار تاريخ الأولوية", description: "تعالج USCIS الطلب وتعين تاريخ الأولوية" },
            { title: "موافقة I-130", description: "بمجرد الموافقة، تذهب القضية إلى مركز التأشيرات الوطني" },
            { title: "انتظار توفر التأشيرة", description: "انتظر حتى يصبح تاريخ الأولوية حالياً" },
            { title: "المعالجة القنصلية أو AOS", description: "التقدم لتأشيرة المهاجر أو تعديل الوضع إذا كنت في الولايات المتحدة" }
          ]
        },
        {
          heading: "ماذا لو أصبحت مواطناً أمريكياً؟",
          content: "إذا تجنست بينما طلب طفلك معلق، تتغير الفئة:\n\n• F2B تتحول إلى F1 (الأطفال البالغين غير المتزوجين للمواطنين)\n• F1 غالباً لها معالجة أسرع من F2B\n• قد يتغير تاريخ الأولوية (تحقق مع USCIS)\n• هذا مفيد عموماً لكن تحقق لبلدك المحدد\n\nهذا يسمى 'التحويل التلقائي' ويحدث عندما تصبح مواطناً."
        },
        {
          heading: "اعتبارات مهمة",
          list: [
            "يجب أن يظل الطفل غير متزوج - الزواج يلغي الطلب",
            "حماية تقدم العمر لا تنطبق على F2B",
            "إذا فقدت وضع LPR الخاص بك، يصبح الطلب غير صالح",
            "يمكن للطفل العمل والدراسة في الولايات المتحدة بمجرد القبول",
            "يمكن إلغاء الطلب إذا تم اكتشاف احتيال"
          ]
        },
        {
          heading: "الوثائق المطلوبة",
          list: [
            "نموذج I-130 (طلب لقريب أجنبي)",
            "نسخة من بطاقتك الخضراء (الأمام والخلف)",
            "شهادة ميلاد الطفل (مع ترجمة معتمدة)",
            "دليل على العلاقة (صور، مراسلات)",
            "شهادة ميلادك إذا اختلفت الأسماء",
            "صور بحجم جواز السفر",
            "رسوم التقديم ($535)"
          ]
        }
      ],

      faqs: [
        { q: "كم تستغرق معالجة F2B؟", a: "حالياً، أوقات انتظار F2B تتراوح من 5-20+ سنة حسب بلد الميلاد. تحقق من نشرة التأشيرات لوزارة الخارجية لتواريخ الأولوية الحالية." },
        { q: "ماذا يحدث إذا تزوج طفلي أثناء الانتظار؟", a: "إذا تزوج طفلك في أي وقت قبل أن يصبح مقيماً دائماً، يتم إلغاء الطلب تلقائياً. سيحتاجون لطلب جديد في فئة الطفل المتزوج (إذا كنت مواطناً) أو لا توجد فئة (إذا كنت LPR)." },
        { q: "هل يمكن لطفلي العمل في الولايات المتحدة أثناء الانتظار؟", a: "لا، لا يمكن لطفلك العمل أو العيش في الولايات المتحدة فقط بناءً على I-130 معلق. يجب أن ينتظروا في الخارج حتى يصبح تاريخ أولويتهم حالياً ويتلقون تأشيرة المهاجر." },
        { q: "هل يجب أن أتجنس لمساعدة طفلي؟", a: "غالباً نعم - عندما تصبح مواطناً، يتحول طلب طفلك من F2B إلى F1، والتي عادة لها أوقات انتظار أقصر لمعظم البلدان." },
        { q: "هل يمكنني تقديم طلب للأطفال المتزوجين كـ LPR؟", a: "لا، كمقيم دائم يمكنك فقط تقديم طلب للأطفال غير المتزوجين. لتقديم طلب للأطفال المتزوجين، يجب أن تصبح أولاً مواطناً أمريكياً." }
      ],

      cta: {
        title: "تحتاج مساعدة في هجرة العائلة في ريفرسايد؟",
        text: "فريقنا يساعد عائلات إنلاند إمباير على التنقل في عملية طلب I-130 المعقدة للأطفال البالغين.",
        button: "حجز استشارة"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default I130UnmarriedChildrenRiverside;
