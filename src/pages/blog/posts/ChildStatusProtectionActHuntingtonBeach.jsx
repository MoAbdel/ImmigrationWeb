import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const ChildStatusProtectionActHuntingtonBeach = ({ language }) => {
  const content = {
    en: {
      slug: "child-status-protection-act-huntington-beach",
      title: "Child Status Protection Act in Huntington Beach: Protect Your Child's Immigration Eligibility",
      subtitle: "Understanding CSPA age-out protection for immigrant children in Orange County",
      metaTitle: "CSPA Huntington Beach | Child Status Protection Act Orange County",
      metaDescription: "Child Status Protection Act help in Huntington Beach for families worried about aging out. Arabic-speaking immigration support. Call (714) 421-8872.",
      keywords: "CSPA Huntington Beach, Child Status Protection Act Orange County, aging out immigration, child immigrant eligibility",
      category: "Family Immigration",
      location: "Huntington Beach",
      date: "January 1, 2026",
      readTime: "11 min read",
      author: "SoCal Immigration Services",
      locationIntro: "Huntington Beach, known for its beautiful coastline and family-friendly communities, is home to many immigrant families navigating the complex U.S. immigration system. The Child Status Protection Act (CSPA) provides crucial protection for children who might otherwise 'age out' of immigration benefits when they turn 21.",

      sections: [
        {
          heading: "What is the Child Status Protection Act?",
          content: "The Child Status Protection Act (CSPA) was enacted in 2002 to address situations where children of immigrant petitions 'age out' - meaning they turn 21 before their case is processed and lose eligibility as a 'child' beneficiary.\n\nWithout CSPA, a child who was 18 when a petition was filed but turned 21 during years of processing could lose their place or face much longer waits. CSPA provides formulas and protections to prevent this injustice."
        },
        {
          heading: "How CSPA Age Calculation Works",
          content: "CSPA uses a special formula to determine if your child still qualifies as a 'child' (under 21):",
          table: {
            headers: ["Step", "Calculation", "Example"],
            rows: [
              ["1", "Child's age when visa becomes available", "23 years old"],
              ["2", "Minus: Time petition was pending", "-3 years"],
              ["3", "Equals: CSPA age", "= 20 (still a 'child')"]
            ]
          }
        },
        {
          heading: "Who Benefits from CSPA",
          list: [
            "Children of U.S. citizens (immediate relative petitions)",
            "Children of lawful permanent residents (family preference)",
            "Derivative beneficiaries on family-based petitions",
            "Derivative beneficiaries on employment-based petitions",
            "Children of asylum/refugee applicants",
            "Diversity Visa lottery winners with children"
          ]
        },
        {
          heading: "CSPA Categories and Rules",
          table: {
            headers: ["Category", "Protection", "Additional Requirements"],
            rows: [
              ["Immediate Relatives", "Age locked at filing", "Petition by USC parent"],
              ["Family Preference", "CSPA formula applies", "Seek to acquire status within 1 year"],
              ["Employment-Based", "CSPA formula applies", "Seek to acquire status within 1 year"],
              ["Asylum/Refugee", "Age locked at parent's filing", "Derivative application"],
              ["Diversity Visa", "Age locked at DV entry deadline", "Selected applicants"]
            ]
          }
        },
        {
          heading: "Critical: The 'Sought to Acquire' Requirement",
          content: "For family preference and employment-based cases, CSPA protection requires that the child 'sought to acquire' permanent residence within one year of visa availability. This typically means:\n\n• Filing Form I-485 (adjustment of status) within 1 year, OR\n• Completing DS-260 for consular processing within 1 year, OR\n• Taking other concrete steps toward the green card\n\nFailing to meet this requirement can result in loss of CSPA protection even if the formula produces an age under 21."
        },
        {
          heading: "Automatic Conversion Under CSPA",
          content: "When a child ages out despite CSPA protection, their petition may automatically convert to a different preference category:\n\n• F2A (spouse/children of LPR) → F2B (adult unmarried children of LPR)\n• Child derivatively on parent's F2B → F2B in their own right\n\nConversion means the child keeps the original priority date but waits in a category with longer processing times."
        }
      ],

      faqs: [
        { q: "My child just turned 21 - did they age out?", a: "Not necessarily. Apply the CSPA formula: subtract the time the petition was pending from their age when the visa became available. If the result is under 21, they're protected." },
        { q: "What is the 'sought to acquire' requirement?", a: "After a visa becomes available, the beneficiary must take action within one year to pursue the green card (file I-485, submit DS-260, etc.) to maintain CSPA protection." },
        { q: "Does CSPA apply to citizenship applications?", a: "CSPA primarily applies to determining 'child' status for green card eligibility. Citizenship through parents has different rules based on the Child Citizenship Act." },
        { q: "Can marriage affect my child's CSPA eligibility?", a: "Yes, if a child marries, they may no longer qualify as a 'child' for immigration purposes, which can affect their petition category and CSPA eligibility." },
        { q: "What if CSPA doesn't protect my child?", a: "If CSPA doesn't prevent aging out, the child may need to wait in a different preference category with longer wait times, or explore other immigration options." }
      ],

      cta: {
        title: "Worried About Your Child Aging Out?",
        text: "Our team helps families in Huntington Beach understand CSPA protections and ensure children maintain their immigration eligibility.",
        button: "Schedule Consultation"
      }
    },
    ar: {
      slug: "child-status-protection-act-huntington-beach",
      title: "قانون حماية وضع الطفل في هنتنغتون بيتش: حماية أهلية طفلك للهجرة",
      subtitle: "فهم حماية CSPA من تجاوز السن للأطفال المهاجرين في مقاطعة أورانج",
      metaTitle: "CSPA هنتنغتون بيتش | قانون حماية وضع الطفل أورانج كاونتي",
      metaDescription: "مساعدة قانون حماية وضع الطفل في هنتنغتون بيتش للعائلات القلقة من تجاوز السن. دعم هجرة بالعربية. اتصل (714) 421-8872.",
      keywords: "CSPA هنتنغتون بيتش، قانون حماية وضع الطفل أورانج كاونتي، تجاوز السن في الهجرة",
      category: "هجرة العائلة",
      location: "هنتنغتون بيتش",
      date: "1 يناير 2026",
      readTime: "11 دقيقة قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "هنتنغتون بيتش، المعروفة بساحلها الجميل ومجتمعاتها الصديقة للعائلات، هي موطن للعديد من العائلات المهاجرة التي تتنقل في نظام الهجرة الأمريكي المعقد. يوفر قانون حماية وضع الطفل (CSPA) حماية حاسمة للأطفال الذين قد يتجاوزون السن المحدد لمزايا الهجرة عندما يبلغون 21.",

      sections: [
        {
          heading: "ما هو قانون حماية وضع الطفل؟",
          content: "تم سن قانون حماية وضع الطفل (CSPA) في 2002 لمعالجة الحالات التي يتجاوز فيها أطفال طلبات الهجرة السن - مما يعني أنهم يبلغون 21 قبل معالجة قضيتهم ويفقدون الأهلية كمستفيد 'طفل'.\n\nبدون CSPA، الطفل الذي كان 18 عند تقديم الطلب لكنه بلغ 21 خلال سنوات المعالجة يمكن أن يفقد مكانه أو يواجه أوقات انتظار أطول بكثير. CSPA يوفر صيغاً وحمايات لمنع هذا الظلم."
        },
        {
          heading: "كيف يعمل حساب سن CSPA",
          content: "CSPA يستخدم صيغة خاصة لتحديد ما إذا كان طفلك لا يزال مؤهلاً كـ'طفل' (تحت 21):",
          table: {
            headers: ["الخطوة", "الحساب", "مثال"],
            rows: [
              ["1", "عمر الطفل عند توفر التأشيرة", "23 سنة"],
              ["2", "ناقص: وقت انتظار الطلب", "-3 سنوات"],
              ["3", "يساوي: سن CSPA", "= 20 (لا يزال 'طفل')"]
            ]
          }
        },
        {
          heading: "من يستفيد من CSPA",
          list: [
            "أطفال المواطنين الأمريكيين (طلبات الأقارب المباشرين)",
            "أطفال المقيمين الدائمين القانونيين (تفضيل العائلة)",
            "المستفيدون المشتقون في الطلبات العائلية",
            "المستفيدون المشتقون في الطلبات القائمة على التوظيف",
            "أطفال متقدمي اللجوء/اللاجئين",
            "الفائزون بقرعة تأشيرة التنوع مع أطفال"
          ]
        },
        {
          heading: "فئات وقواعد CSPA",
          table: {
            headers: ["الفئة", "الحماية", "متطلبات إضافية"],
            rows: [
              ["الأقارب المباشرين", "السن مقفل عند التقديم", "طلب من والد مواطن"],
              ["تفضيل العائلة", "صيغة CSPA تطبق", "السعي لاكتساب الوضع خلال سنة"],
              ["قائم على التوظيف", "صيغة CSPA تطبق", "السعي لاكتساب الوضع خلال سنة"],
              ["اللجوء/اللاجئ", "السن مقفل عند تقديم الوالد", "طلب مشتق"],
              ["تأشيرة التنوع", "السن مقفل عند الموعد النهائي لـ DV", "المتقدمون المختارون"]
            ]
          }
        },
        {
          heading: "حاسم: متطلب 'السعي للاكتساب'",
          content: "لحالات تفضيل العائلة والقائمة على التوظيف، تتطلب حماية CSPA أن الطفل 'سعى لاكتساب' الإقامة الدائمة خلال سنة من توفر التأشيرة. هذا يعني عادة:\n\n• تقديم نموذج I-485 (تعديل الوضع) خلال سنة، أو\n• إكمال DS-260 للمعالجة القنصلية خلال سنة، أو\n• اتخاذ خطوات ملموسة أخرى نحو البطاقة الخضراء\n\nعدم استيفاء هذا المتطلب يمكن أن يؤدي لفقدان حماية CSPA حتى لو أنتجت الصيغة سناً تحت 21."
        },
        {
          heading: "التحويل التلقائي بموجب CSPA",
          content: "عندما يتجاوز الطفل السن رغم حماية CSPA، قد يتحول طلبهم تلقائياً لفئة تفضيل مختلفة:\n\n• F2A (زوج/أطفال LPR) → F2B (أطفال بالغين غير متزوجين لـ LPR)\n• طفل مشتق على F2B الوالد → F2B بحقهم الخاص\n\nالتحويل يعني أن الطفل يحتفظ بتاريخ الأولوية الأصلي لكنه ينتظر في فئة مع أوقات معالجة أطول."
        }
      ],

      faqs: [
        { q: "طفلي بلغ للتو 21 - هل تجاوز السن؟", a: "ليس بالضرورة. طبق صيغة CSPA: اطرح وقت انتظار الطلب من عمرهم عند توفر التأشيرة. إذا كانت النتيجة تحت 21، فهم محميون." },
        { q: "ما هو متطلب 'السعي للاكتساب'؟", a: "بعد توفر التأشيرة، يجب على المستفيد اتخاذ إجراء خلال سنة لمتابعة البطاقة الخضراء (تقديم I-485، تقديم DS-260، إلخ) للحفاظ على حماية CSPA." },
        { q: "هل ينطبق CSPA على طلبات الجنسية؟", a: "CSPA ينطبق بشكل أساسي على تحديد وضع 'الطفل' لأهلية البطاقة الخضراء. الجنسية من خلال الوالدين لها قواعد مختلفة بناءً على قانون جنسية الطفل." },
        { q: "هل يمكن للزواج أن يؤثر على أهلية CSPA لطفلي؟", a: "نعم، إذا تزوج الطفل، قد لا يتأهل بعد ذلك كـ'طفل' لأغراض الهجرة، مما يمكن أن يؤثر على فئة طلبهم وأهلية CSPA." },
        { q: "ماذا لو لم يحمِ CSPA طفلي؟", a: "إذا لم يمنع CSPA تجاوز السن، قد يحتاج الطفل للانتظار في فئة تفضيل مختلفة مع أوقات انتظار أطول، أو استكشاف خيارات هجرة أخرى." }
      ],

      cta: {
        title: "قلق من تجاوز طفلك للسن؟",
        text: "فريقنا يساعد العائلات في هنتنغتون بيتش على فهم حمايات CSPA وضمان احتفاظ الأطفال بأهليتهم للهجرة.",
        button: "حجز استشارة"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default ChildStatusProtectionActHuntingtonBeach;
