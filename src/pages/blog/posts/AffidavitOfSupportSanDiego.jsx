import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const AffidavitOfSupportSanDiego = ({ language }) => {
  const content = {
    en: {
      slug: "affidavit-of-support-san-diego",
      title: "Affidavit of Support Preparation in San Diego: I-864 for Arab Sponsors",
      subtitle: "Understanding income requirements and completing the I-864 correctly",
      metaTitle: "Affidavit of Support San Diego | I-864 Sponsor Requirements",
      metaDescription: "I-864 Affidavit of Support help in San Diego. Income requirements, joint sponsors. Arabic support. Call (714) 421-8872.",
      keywords: "affidavit of support San Diego, I-864 help, sponsor income requirements, Arab immigration services",
      category: "Document Services",
      location: "San Diego",
      date: "December 28, 2025",
      readTime: "8 min read",
      author: "Immigration Solution Services",
      locationIntro: "When sponsoring a family member for a green card in San Diego, you must prove you can financially support them. The Affidavit of Support (Form I-864) is a legally binding contract between you and the U.S. government.",

      sections: [
        {
          heading: "What is the Affidavit of Support?",
          content: "Form I-864 is a legal document where you promise to financially support the immigrant you're sponsoring at 125% of the federal poverty level. This obligation lasts until the immigrant becomes a citizen, earns 40 work quarters, or permanently leaves the U.S."
        },
        {
          heading: "2025 Income Requirements",
          table: {
            headers: ["Household Size", "Minimum Income", "Monthly"],
            rows: [
              ["2", "$25,550", "$2,129"],
              ["3", "$32,187", "$2,682"],
              ["4", "$38,825", "$3,235"],
              ["5", "$45,462", "$3,789"],
              ["6", "$52,100", "$4,342"],
              ["Each additional", "+$6,637", "+$553"]
            ]
          }
        },
        {
          heading: "What Counts as Income?",
          list: [
            "Salary and wages",
            "Self-employment income",
            "Rental income",
            "Social Security benefits",
            "Retirement income",
            "Alimony and child support (if consistent)",
            "Spouse's income (if filing jointly)"
          ]
        },
        {
          heading: "What if You Don't Meet the Income?",
          content: "If your income is below the requirement, you have options:\n\n• Count assets: Bank accounts, property, and other assets can supplement income (value must be 3x the difference, or 5x for sponsored siblings/parents)\n• Use a joint sponsor: Another U.S. citizen or green card holder who meets the requirements on their own\n• Include household members: Others in your household who contribute income"
        },
        {
          heading: "Required Documents",
          list: [
            "Form I-864",
            "Copy of most recent tax return with W-2s",
            "Three years of tax returns (if self-employed)",
            "Employment letter with salary",
            "Recent pay stubs",
            "Proof of assets (if using assets)",
            "Joint sponsor's documents (if applicable)"
          ]
        }
      ],

      faqs: [
        { q: "How long am I financially responsible?", a: "Until the immigrant becomes a citizen, earns 40 work quarters (~10 years of work), leaves permanently, or dies." },
        { q: "Can a joint sponsor help?", a: "Yes, any U.S. citizen or permanent resident who meets the income requirement independently can be a joint sponsor." },
        { q: "What if I lose my job after filing?", a: "Your obligation continues. The government can require you to reimburse benefits paid to the immigrant." }
      ],

      cta: {
        title: "Need Help with Your Affidavit of Support?",
        text: "We help San Diego sponsors understand and complete the I-864 correctly.",
        button: "Get I-864 Help"
      }
    },
    ar: {
      slug: "affidavit-of-support-san-diego",
      title: "إعداد الكفالة المالية في سان دييغو: I-864 للكفلاء العرب",
      subtitle: "فهم متطلبات الدخل وإكمال I-864 بشكل صحيح",
      metaTitle: "الكفالة المالية سان دييغو | متطلبات الكفيل I-864",
      metaDescription: "مساعدة الكفالة المالية I-864 في سان دييغو. متطلبات الدخل، الكفلاء المشتركين. دعم بالعربية. اتصل (714) 421-8872.",
      keywords: "الكفالة المالية سان دييغو، مساعدة I-864، متطلبات دخل الكفيل، خدمات الهجرة العربية",
      category: "خدمات الوثائق",
      location: "سان دييغو",
      date: "28 ديسمبر 2025",
      readTime: "8 دقائق قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "عند كفالة أحد أفراد العائلة للحصول على بطاقة خضراء في سان دييغو، يجب أن تثبت أنك تستطيع دعمهم مالياً. الكفالة المالية (نموذج I-864) هي عقد ملزم قانونياً بينك وبين الحكومة الأمريكية.",

      sections: [
        {
          heading: "ما هي الكفالة المالية؟",
          content: "نموذج I-864 هو وثيقة قانونية تتعهد فيها بدعم المهاجر الذي تكفله مالياً عند 125% من مستوى الفقر الفيدرالي. يستمر هذا الالتزام حتى يصبح المهاجر مواطناً، أو يكسب 40 ربع عمل، أو يغادر الولايات المتحدة نهائياً."
        },
        {
          heading: "متطلبات الدخل 2025",
          table: {
            headers: ["حجم الأسرة", "الحد الأدنى للدخل", "شهرياً"],
            rows: [
              ["2", "$25,550", "$2,129"],
              ["3", "$32,187", "$2,682"],
              ["4", "$38,825", "$3,235"],
              ["5", "$45,462", "$3,789"],
              ["6", "$52,100", "$4,342"],
              ["كل شخص إضافي", "+$6,637", "+$553"]
            ]
          }
        },
        {
          heading: "ما الذي يعتبر دخلاً؟",
          list: [
            "الراتب والأجور",
            "دخل العمل الحر",
            "دخل الإيجار",
            "مزايا الضمان الاجتماعي",
            "دخل التقاعد",
            "النفقة ودعم الأطفال (إذا كانت متسقة)",
            "دخل الزوج (إذا قدمتم بشكل مشترك)"
          ]
        },
        {
          heading: "ماذا لو لم تستوفِ الدخل؟",
          content: "إذا كان دخلك أقل من المتطلب، لديك خيارات:\n\n• احتساب الأصول: الحسابات البنكية والممتلكات والأصول الأخرى يمكن أن تكمل الدخل (القيمة يجب أن تكون 3 أضعاف الفرق، أو 5 أضعاف للأخوة/الوالدين المكفولين)\n• استخدم كفيلاً مشتركاً: مواطن أمريكي أو حامل بطاقة خضراء آخر يستوفي المتطلبات بمفرده\n• تضمين أفراد الأسرة: الآخرون في أسرتك الذين يساهمون بالدخل"
        },
        {
          heading: "الوثائق المطلوبة",
          list: [
            "نموذج I-864",
            "نسخة من أحدث إقرار ضريبي مع W-2s",
            "ثلاث سنوات من الإقرارات الضريبية (إذا كنت تعمل لحسابك)",
            "خطاب التوظيف مع الراتب",
            "قسائم الراتب الأخيرة",
            "إثبات الأصول (إذا كنت تستخدم الأصول)",
            "وثائق الكفيل المشترك (إذا كان ذلك ينطبق)"
          ]
        }
      ],

      faqs: [
        { q: "كم مدة مسؤوليتي المالية؟", a: "حتى يصبح المهاجر مواطناً، أو يكسب 40 ربع عمل (~10 سنوات من العمل)، أو يغادر نهائياً، أو يتوفى." },
        { q: "هل يمكن لكفيل مشترك المساعدة؟", a: "نعم، أي مواطن أمريكي أو مقيم دائم يستوفي متطلبات الدخل بشكل مستقل يمكن أن يكون كفيلاً مشتركاً." },
        { q: "ماذا لو فقدت عملي بعد التقديم؟", a: "التزامك يستمر. يمكن للحكومة أن تطالبك بتعويض المزايا المدفوعة للمهاجر." }
      ],

      cta: {
        title: "تحتاج مساعدة في الكفالة المالية؟",
        text: "نساعد كفلاء سان دييغو في فهم وإكمال I-864 بشكل صحيح.",
        button: "احصل على مساعدة I-864"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default AffidavitOfSupportSanDiego;
