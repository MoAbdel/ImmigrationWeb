import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const I730RefugeeFamilySanDiego = ({ language }) => {
  const content = {
    en: {
      slug: "i730-refugee-family-san-diego",
      title: "I-730 Refugee Family Reunification in San Diego: For Syrian Families",
      subtitle: "Bring your spouse and children to the US through the follow-to-join process",
      metaTitle: "I-730 Refugee Family San Diego | Syrian Family Reunification",
      metaDescription: "I-730 refugee family reunification in San Diego for Syrian families. Bring spouse and children. Arabic support. Call (714) 421-8872.",
      keywords: "I-730 San Diego, refugee family reunification, Syrian refugee family, follow to join petition",
      category: "Family Immigration",
      location: "San Diego",
      date: "December 28, 2025",
      readTime: "10 min read",
      author: "SoCal Immigration Services",
      locationIntro: "San Diego County's Syrian refugee community often has family members still abroad. The I-730 petition allows refugees and asylees to bring their spouse and unmarried children under 21 to the United States.",

      sections: [
        {
          heading: "What is the I-730 Petition?",
          content: "Form I-730, Refugee/Asylee Relative Petition, allows refugees and asylees to bring their immediate family members to the United States. This is often called 'follow-to-join' and is specifically for:\n\n• Spouse who was married before you were granted refugee/asylee status\n• Unmarried children under 21 at the time of your status grant"
        },
        {
          heading: "Who Can File I-730?",
          list: [
            "Refugees admitted to the US",
            "Asylees granted asylum",
            "Those who have adjusted status from refugee/asylee",
            "Derivative refugees and asylees (in some cases)"
          ]
        },
        {
          heading: "Important Requirements",
          content: "To successfully file I-730, your family member must have:\n\n• Been your spouse or child at the time you were granted status\n• Been listed on your original refugee application (or explain why not)\n• Not independently qualify for refugee status\n• Marriage must have occurred BEFORE your status was granted"
        },
        {
          heading: "I-730 vs. I-130",
          table: {
            headers: ["Factor", "I-730", "I-130"],
            rows: [
              ["Filing Fee", "No fee", "$535"],
              ["Who Can File", "Refugees/Asylees only", "Citizens/Green Card Holders"],
              ["For Whom", "Spouse/children under 21", "Various relatives"],
              ["Timing", "Within 2 years of status", "Any time"],
              ["Processing", "Usually faster", "Varies by category"]
            ]
          }
        },
        {
          heading: "The Two-Year Deadline",
          content: "Important: You should file I-730 within 2 years of being granted refugee or asylee status. After 2 years, you may need to file I-130 instead, which has different requirements and may be slower."
        },
        {
          heading: "Required Documents",
          list: [
            "Form I-730",
            "Copy of your I-94 or approval letter",
            "Proof of relationship (marriage certificate, birth certificates)",
            "Passport photos of family members",
            "Copy of your green card (if adjusted)",
            "Evidence family was part of original application"
          ]
        },
        {
          heading: "Processing Timeline",
          content: "I-730 processing varies but typically takes 6-18 months. Family members will attend an interview at a U.S. embassy or refugee processing center, depending on their location."
        }
      ],

      faqs: [
        { q: "Can I bring my parents on I-730?", a: "No, I-730 is only for spouse and unmarried children under 21. To bring parents, you must become a U.S. citizen and file I-130." },
        { q: "What if I married after getting refugee status?", a: "Spouses married after your status grant don't qualify for I-730. You would need to adjust to green card, then file I-130." },
        { q: "Is there a filing fee for I-730?", a: "No, there is no filing fee for I-730 petitions." },
        { q: "What if my child turns 21?", a: "If your child turns 21 before approval, they may 'age out' and not qualify. File as soon as possible." }
      ],

      cta: {
        title: "Need to Reunite with Your Family?",
        text: "Our Arabic-speaking team helps Syrian refugees in San Diego bring their families to America.",
        button: "Start I-730 Today"
      }
    },
    ar: {
      slug: "i730-refugee-family-san-diego",
      title: "لم شمل عائلة اللاجئين I-730 في سان دييغو: للعائلات السورية",
      subtitle: "أحضر زوجتك وأطفالك إلى أمريكا من خلال عملية الالتحاق",
      metaTitle: "عائلة اللاجئين I-730 سان دييغو | لم شمل العائلة السورية",
      metaDescription: "لم شمل عائلة اللاجئين I-730 في سان دييغو للعائلات السورية. أحضر الزوج والأطفال. دعم بالعربية. اتصل (714) 421-8872.",
      keywords: "I-730 سان دييغو، لم شمل عائلة اللاجئين، عائلة اللاجئين السوريين، طلب الالتحاق",
      category: "هجرة العائلة",
      location: "سان دييغو",
      date: "28 ديسمبر 2025",
      readTime: "10 دقائق قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "غالباً ما يكون لمجتمع اللاجئين السوريين في مقاطعة سان دييغو أفراد أسرة لا يزالون في الخارج. يسمح طلب I-730 للاجئين واللاجئين السياسيين بإحضار زوجهم وأطفالهم غير المتزوجين تحت 21 إلى الولايات المتحدة.",

      sections: [
        {
          heading: "ما هو طلب I-730؟",
          content: "نموذج I-730، طلب قريب اللاجئ/اللاجئ السياسي، يسمح للاجئين واللاجئين السياسيين بإحضار أفراد أسرهم المباشرين إلى الولايات المتحدة. غالباً ما يسمى هذا 'الالتحاق' وهو خصيصاً لـ:\n\n• الزوج الذي كان متزوجاً قبل منحك وضع اللاجئ/اللاجئ السياسي\n• الأطفال غير المتزوجين تحت 21 في وقت منح وضعك"
        },
        {
          heading: "من يمكنه تقديم I-730؟",
          list: [
            "اللاجئون المقبولون في أمريكا",
            "اللاجئون السياسيون الممنوحون اللجوء",
            "الذين عدلوا وضعهم من لاجئ/لاجئ سياسي",
            "اللاجئون واللاجئون السياسيون المشتقون (في بعض الحالات)"
          ]
        },
        {
          heading: "متطلبات مهمة",
          content: "لتقديم I-730 بنجاح، يجب أن يكون فرد عائلتك:\n\n• كان زوجك أو طفلك في وقت منحك الوضع\n• كان مدرجاً في طلب اللاجئ الأصلي (أو شرح لماذا لا)\n• لا يتأهل بشكل مستقل لوضع اللاجئ\n• الزواج يجب أن يكون قد حدث قبل منح وضعك"
        },
        {
          heading: "I-730 مقابل I-130",
          table: {
            headers: ["العامل", "I-730", "I-130"],
            rows: [
              ["رسوم التقديم", "بدون رسوم", "$535"],
              ["من يمكنه التقديم", "اللاجئون/اللاجئون السياسيون فقط", "المواطنون/حاملو البطاقة الخضراء"],
              ["لمن", "الزوج/الأطفال تحت 21", "أقارب متنوعين"],
              ["التوقيت", "خلال سنتين من الوضع", "أي وقت"],
              ["المعالجة", "عادة أسرع", "يختلف حسب الفئة"]
            ]
          }
        },
        {
          heading: "الموعد النهائي لسنتين",
          content: "مهم: يجب تقديم I-730 خلال سنتين من منحك وضع اللاجئ أو اللاجئ السياسي. بعد سنتين، قد تحتاج لتقديم I-130 بدلاً من ذلك، والذي له متطلبات مختلفة وقد يكون أبطأ."
        },
        {
          heading: "الوثائق المطلوبة",
          list: [
            "نموذج I-730",
            "نسخة من I-94 أو خطاب الموافقة",
            "إثبات العلاقة (شهادة الزواج، شهادات الميلاد)",
            "صور جواز السفر لأفراد الأسرة",
            "نسخة من بطاقتك الخضراء (إذا عدلت الوضع)",
            "دليل على أن الأسرة كانت جزءاً من الطلب الأصلي"
          ]
        },
        {
          heading: "الجدول الزمني للمعالجة",
          content: "تختلف معالجة I-730 لكنها تستغرق عادة 6-18 شهراً. سيحضر أفراد الأسرة مقابلة في سفارة أمريكية أو مركز معالجة اللاجئين، حسب موقعهم."
        }
      ],

      faqs: [
        { q: "هل يمكنني إحضار والديّ على I-730؟", a: "لا، I-730 فقط للزوج والأطفال غير المتزوجين تحت 21. لإحضار الوالدين، يجب أن تصبح مواطناً أمريكياً وتقدم I-130." },
        { q: "ماذا لو تزوجت بعد الحصول على وضع اللاجئ؟", a: "الأزواج الذين تزوجوا بعد منح وضعك لا يتأهلون لـ I-730. ستحتاج للتعديل إلى بطاقة خضراء، ثم تقديم I-130." },
        { q: "هل هناك رسوم تقديم لـ I-730؟", a: "لا، لا توجد رسوم تقديم لطلبات I-730." },
        { q: "ماذا لو بلغ طفلي 21؟", a: "إذا بلغ طفلك 21 قبل الموافقة، قد 'يتجاوز العمر' ولا يتأهل. قدم في أقرب وقت ممكن." }
      ],

      cta: {
        title: "تحتاج للم شمل عائلتك؟",
        text: "فريقنا الناطق بالعربية يساعد اللاجئين السوريين في سان دييغو في إحضار عائلاتهم إلى أمريكا.",
        button: "ابدأ I-730 اليوم"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default I730RefugeeFamilySanDiego;
