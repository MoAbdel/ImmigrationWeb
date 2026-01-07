import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const EmploymentVerificationI9Downey = ({ language }) => {
  const content = {
    en: {
      slug: "employment-verification-i9-downey",
      title: "Employment Verification I-9 in Downey: Work Authorization Documentation Guide",
      subtitle: "Understanding Form I-9 requirements for employers and employees in Los Angeles County",
      metaTitle: "I-9 Employment Verification Downey | Work Authorization Docs LA County",
      metaDescription: "I-9 employment verification help in Downey for employers and employees. Work authorization documentation guide. Arabic support. Call (714) 421-8872.",
      keywords: "I-9 employment verification Downey, work authorization documents, employment eligibility, Form I-9 help Los Angeles",
      category: "Document Services",
      location: "Downey",
      date: "January 1, 2026",
      readTime: "10 min read",
      author: "SoCal Immigration Services",
      locationIntro: "Downey, a diverse city in southeast Los Angeles County, has a thriving business community and many immigrant workers. Form I-9, Employment Eligibility Verification, is required for every employee hired in the United States. Understanding this process helps both employers maintain compliance and employees prove their work authorization.",

      sections: [
        {
          heading: "What is Form I-9?",
          content: "Form I-9 is a federal requirement that verifies the identity and employment authorization of individuals hired for employment in the United States. Every employer must complete an I-9 for each employee they hire.\n\n**Key Points:**\n• Required for ALL employees, including U.S. citizens\n• Must be completed within 3 business days of hire\n• Employer must physically examine original documents\n• Form must be retained for specific time periods\n• Penalties for non-compliance can be severe"
        },
        {
          heading: "Acceptable I-9 Documents",
          content: "Documents are divided into three lists. Employees must present documents from List A alone, OR one document from List B AND one from List C:",
          table: {
            headers: ["List A (Identity + Work Auth)", "List B (Identity Only)", "List C (Work Auth Only)"],
            rows: [
              ["U.S. Passport or Passport Card", "Driver's license", "Social Security Card (unrestricted)"],
              ["Permanent Resident Card (Green Card)", "State ID card with photo", "Birth certificate (U.S.)"],
              ["Employment Authorization Document (EAD)", "School ID with photo", "Certification of Birth Abroad"],
              ["Foreign passport with I-551 stamp", "Voter registration card", "Employment authorization (USCIS issued)"],
              ["Foreign passport with I-94 work authorized", "U.S. military ID", "Form I-94 with work authorization"]
            ]
          }
        },
        {
          heading: "I-9 Timeline Requirements",
          steps: [
            { title: "Day 1 (First Day of Work)", description: "Employee completes Section 1 of Form I-9" },
            { title: "Days 1-3", description: "Employer examines documents and completes Section 2" },
            { title: "Ongoing", description: "Re-verify expiring work authorization (Section 3)" },
            { title: "Retention", description: "Keep I-9 for 3 years after hire OR 1 year after termination (whichever is later)" }
          ]
        },
        {
          heading: "Common I-9 Mistakes to Avoid",
          list: [
            "Accepting photocopies instead of original documents",
            "Specifying which documents an employee must present",
            "Not completing Form I-9 within 3 business days",
            "Failing to re-verify expiring employment authorization",
            "Not retaining I-9s for the required period",
            "Accepting documents that don't reasonably appear genuine",
            "Over-documentation (asking for more documents than required)",
            "Discrimination based on citizenship or national origin"
          ]
        },
        {
          heading: "Receipts and Work Authorization Gaps",
          content: "In some cases, employees may present a receipt instead of an actual document:\n\n**Acceptable Receipts:**\n• Receipt for replacement of lost/stolen/damaged document\n• Receipt for I-551 (temporary green card evidence)\n• I-94 with refugee admission stamp\n\n**Important:** Receipts are valid for 90 days. The actual document must be presented before the receipt expires.\n\n**Work Authorization Gaps:** If an employee's EAD expires and renewal is pending, they may present a 180-day automatic extension letter with their expired EAD."
        },
        {
          heading: "Our Document Services",
          content: "We help employees and employers with I-9 related needs:\n\n**For Employees:**\n• Certified translations of foreign documents\n• Understanding which documents you can use\n• Replacing lost immigration documents\n• Tracking EAD renewal status\n\n**For Employers:**\n• I-9 compliance training\n• Document verification guidance\n• Understanding re-verification requirements\n• Translation services for employment records"
        }
      ],

      faqs: [
        { q: "Can I use my expired green card for I-9?", a: "No, expired green cards are not acceptable for I-9 purposes. However, if you have a pending I-90 renewal with USCIS, you may use your expired card along with the I-797 receipt notice as a List A document for 12 months." },
        { q: "What if my EAD hasn't arrived but my work authorization is still valid?", a: "If you filed for EAD renewal before your current EAD expired, you may be eligible for a 180-day automatic extension. Present your expired EAD with the I-797C receipt notice." },
        { q: "Can my employer ask for specific documents?", a: "No, employers cannot specify which documents you must present. You choose which acceptable documents to provide. Requiring specific documents may be considered discrimination." },
        { q: "Do U.S. citizens need to complete I-9?", a: "Yes, Form I-9 is required for ALL employees, including U.S. citizens. Citizens can present a U.S. passport (List A) or driver's license + birth certificate (List B + C)." },
        { q: "Can documents be in a foreign language?", a: "Documents in foreign languages may need certified translations. However, some documents like foreign passports with USCIS stamps are acceptable without translation for I-9 purposes." }
      ],

      cta: {
        title: "Need I-9 Document Help?",
        text: "Our team helps employees and employers in Downey with document translations and I-9 compliance questions.",
        button: "Schedule Consultation"
      }
    },
    ar: {
      slug: "employment-verification-i9-downey",
      title: "التحقق من التوظيف I-9 في داوني: دليل توثيق تصريح العمل",
      subtitle: "فهم متطلبات نموذج I-9 لأصحاب العمل والموظفين في مقاطعة لوس أنجلوس",
      metaTitle: "التحقق من التوظيف I-9 داوني | وثائق تصريح العمل مقاطعة لوس أنجلوس",
      metaDescription: "مساعدة التحقق من التوظيف I-9 في داوني لأصحاب العمل والموظفين. دليل وثائق تصريح العمل. دعم بالعربية. اتصل (714) 421-8872.",
      keywords: "التحقق من التوظيف I-9 داوني، وثائق تصريح العمل، أهلية التوظيف",
      category: "خدمات الوثائق",
      location: "داوني",
      date: "1 يناير 2026",
      readTime: "10 دقائق قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "داوني، مدينة متنوعة في جنوب شرق مقاطعة لوس أنجلوس، لديها مجتمع أعمال مزدهر والعديد من العمال المهاجرين. نموذج I-9، التحقق من أهلية التوظيف، مطلوب لكل موظف يُعين في الولايات المتحدة. فهم هذه العملية يساعد أصحاب العمل على الحفاظ على الامتثال والموظفين على إثبات تصريح عملهم.",

      sections: [
        {
          heading: "ما هو نموذج I-9؟",
          content: "نموذج I-9 هو متطلب فيدرالي يتحقق من هوية وتصريح العمل للأفراد المعينين للعمل في الولايات المتحدة. يجب على كل صاحب عمل إكمال I-9 لكل موظف يوظفه.\n\n**النقاط الرئيسية:**\n• مطلوب لجميع الموظفين، بما في ذلك المواطنين الأمريكيين\n• يجب إكماله خلال 3 أيام عمل من التوظيف\n• يجب على صاحب العمل فحص الوثائق الأصلية جسدياً\n• يجب الاحتفاظ بالنموذج لفترات زمنية محددة\n• عقوبات عدم الامتثال يمكن أن تكون شديدة"
        },
        {
          heading: "وثائق I-9 المقبولة",
          content: "الوثائق مقسمة إلى ثلاث قوائم. يجب على الموظفين تقديم وثائق من القائمة أ وحدها، أو وثيقة واحدة من القائمة ب ووثيقة واحدة من القائمة ج:",
          table: {
            headers: ["القائمة أ (الهوية + تصريح العمل)", "القائمة ب (الهوية فقط)", "القائمة ج (تصريح العمل فقط)"],
            rows: [
              ["جواز السفر أو بطاقة جواز السفر الأمريكي", "رخصة القيادة", "بطاقة الضمان الاجتماعي (غير مقيدة)"],
              ["بطاقة الإقامة الدائمة (البطاقة الخضراء)", "بطاقة هوية الولاية مع صورة", "شهادة الميلاد (أمريكية)"],
              ["وثيقة تصريح العمل (EAD)", "هوية المدرسة مع صورة", "شهادة الميلاد في الخارج"],
              ["جواز سفر أجنبي مع ختم I-551", "بطاقة تسجيل الناخبين", "تصريح العمل (صادر من USCIS)"],
              ["جواز سفر أجنبي مع I-94 مصرح بالعمل", "هوية الجيش الأمريكي", "نموذج I-94 مع تصريح العمل"]
            ]
          }
        },
        {
          heading: "متطلبات الجدول الزمني لـ I-9",
          steps: [
            { title: "اليوم 1 (أول يوم عمل)", description: "الموظف يكمل القسم 1 من نموذج I-9" },
            { title: "الأيام 1-3", description: "صاحب العمل يفحص الوثائق ويكمل القسم 2" },
            { title: "مستمر", description: "إعادة التحقق من تصريح العمل المنتهي (القسم 3)" },
            { title: "الاحتفاظ", description: "احتفظ بـ I-9 لمدة 3 سنوات بعد التوظيف أو سنة بعد الإنهاء (أيهما أطول)" }
          ]
        },
        {
          heading: "أخطاء I-9 الشائعة التي يجب تجنبها",
          list: [
            "قبول نسخ ضوئية بدلاً من الوثائق الأصلية",
            "تحديد أي وثائق يجب على الموظف تقديمها",
            "عدم إكمال نموذج I-9 خلال 3 أيام عمل",
            "الفشل في إعادة التحقق من تصريح العمل المنتهي",
            "عدم الاحتفاظ بـ I-9 للفترة المطلوبة",
            "قبول وثائق لا تبدو أصلية بشكل معقول",
            "الإفراط في التوثيق (طلب وثائق أكثر من المطلوب)",
            "التمييز على أساس المواطنة أو الأصل القومي"
          ]
        },
        {
          heading: "الإيصالات وفجوات تصريح العمل",
          content: "في بعض الحالات، قد يقدم الموظفون إيصالاً بدلاً من الوثيقة الفعلية:\n\n**الإيصالات المقبولة:**\n• إيصال لاستبدال وثيقة مفقودة/مسروقة/تالفة\n• إيصال لـ I-551 (دليل البطاقة الخضراء المؤقتة)\n• I-94 مع ختم قبول اللاجئ\n\n**مهم:** الإيصالات صالحة لـ 90 يوماً. يجب تقديم الوثيقة الفعلية قبل انتهاء الإيصال.\n\n**فجوات تصريح العمل:** إذا انتهت صلاحية EAD الموظف والتجديد معلق، يمكنهم تقديم رسالة التمديد التلقائي 180 يوماً مع EAD المنتهي."
        },
        {
          heading: "خدمات الوثائق لدينا",
          content: "نساعد الموظفين وأصحاب العمل في احتياجات I-9:\n\n**للموظفين:**\n• ترجمات معتمدة للوثائق الأجنبية\n• فهم أي وثائق يمكنك استخدامها\n• استبدال وثائق الهجرة المفقودة\n• تتبع حالة تجديد EAD\n\n**لأصحاب العمل:**\n• تدريب الامتثال لـ I-9\n• إرشاد التحقق من الوثائق\n• فهم متطلبات إعادة التحقق\n• خدمات الترجمة لسجلات التوظيف"
        }
      ],

      faqs: [
        { q: "هل يمكنني استخدام بطاقتي الخضراء المنتهية لـ I-9؟", a: "لا، البطاقات الخضراء المنتهية غير مقبولة لأغراض I-9. ومع ذلك، إذا كان لديك تجديد I-90 معلق مع USCIS، يمكنك استخدام بطاقتك المنتهية مع إشعار استلام I-797 كوثيقة القائمة أ لمدة 12 شهراً." },
        { q: "ماذا لو لم يصل EAD الخاص بي لكن تصريح عملي لا يزال صالحاً؟", a: "إذا قدمت لتجديد EAD قبل انتهاء EAD الحالي، قد تكون مؤهلاً لتمديد تلقائي 180 يوماً. قدم EAD المنتهي مع إشعار استلام I-797C." },
        { q: "هل يمكن لصاحب عملي طلب وثائق محددة؟", a: "لا، لا يمكن لأصحاب العمل تحديد أي وثائق يجب عليك تقديمها. أنت تختار أي وثائق مقبولة لتقديمها. طلب وثائق محددة قد يعتبر تمييزاً." },
        { q: "هل يحتاج المواطنون الأمريكيون لإكمال I-9؟", a: "نعم، نموذج I-9 مطلوب لجميع الموظفين، بما في ذلك المواطنين الأمريكيين. يمكن للمواطنين تقديم جواز سفر أمريكي (القائمة أ) أو رخصة قيادة + شهادة ميلاد (القائمة ب + ج)." },
        { q: "هل يمكن أن تكون الوثائق بلغة أجنبية؟", a: "الوثائق بلغات أجنبية قد تحتاج ترجمات معتمدة. ومع ذلك، بعض الوثائق مثل جوازات السفر الأجنبية مع أختام USCIS مقبولة بدون ترجمة لأغراض I-9." }
      ],

      cta: {
        title: "تحتاج مساعدة في وثائق I-9؟",
        text: "فريقنا يساعد الموظفين وأصحاب العمل في داوني في ترجمة الوثائق وأسئلة الامتثال لـ I-9.",
        button: "حجز استشارة"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default EmploymentVerificationI9Downey;
