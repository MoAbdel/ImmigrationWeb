import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const GreenCardLotteryEligibilityNorco = ({ language }) => {
  const content = {
    en: {
      slug: "green-card-lottery-eligibility-norco",
      title: "Green Card Lottery Eligibility in Norco: DV Lottery Requirements for Arab Immigrants",
      subtitle: "Find out if you qualify for the Diversity Visa lottery and how to register correctly",
      metaTitle: "Green Card Lottery Eligibility Norco | DV Lottery Requirements Riverside County",
      metaDescription: "Check your DV lottery eligibility in Norco. Learn requirements for the green card lottery, eligible countries, education requirements. Arabic support. Call (714) 421-8872.",
      keywords: "green card lottery Norco, DV lottery eligibility, diversity visa requirements, lottery registration, Arab immigration lottery",
      category: "News & Updates",
      location: "Norco",
      date: "January 20, 2026",
      readTime: "9 min read",
      author: "SoCal Immigration Services",
      locationIntro: "The Diversity Visa (DV) Lottery offers a chance for immigrants from underrepresented countries to obtain green cards. For Norco residents and their families abroad, understanding the eligibility requirements is the first step. SoCal Immigration Services helps families determine eligibility and register correctly.",

      sections: [
        {
          heading: "What is the DV Lottery?",
          content: "The Diversity Visa Lottery is a U.S. government program that randomly selects up to 55,000 people annually for immigrant visas.\n\nKey Facts:\n• Free to enter - never pay to register\n• One entry per person per year\n• Registration typically October-November\n• Results available the following May\n• Selection doesn't guarantee a visa"
        },
        {
          heading: "Country Eligibility",
          content: "You must be born in an eligible country. Most Arab countries ARE eligible:",
          list: [
            "Egypt - ELIGIBLE",
            "Jordan - ELIGIBLE",
            "Lebanon - ELIGIBLE",
            "Syria - ELIGIBLE",
            "Iraq - ELIGIBLE",
            "Yemen - ELIGIBLE",
            "Palestine - ELIGIBLE",
            "Morocco - ELIGIBLE",
            "Tunisia - ELIGIBLE",
            "Algeria - ELIGIBLE",
            "Libya - ELIGIBLE",
            "Sudan - ELIGIBLE"
          ]
        },
        {
          heading: "Countries NOT Eligible",
          content: "These countries have high immigration rates and are excluded:",
          list: [
            "Bangladesh",
            "Brazil",
            "Canada",
            "China (mainland)",
            "Dominican Republic",
            "El Salvador",
            "Haiti",
            "Honduras",
            "India",
            "Jamaica",
            "Mexico",
            "Nigeria",
            "Pakistan",
            "Philippines",
            "South Korea",
            "United Kingdom (except N. Ireland)",
            "Venezuela",
            "Vietnam"
          ]
        },
        {
          heading: "Education Requirements",
          content: "You must meet ONE of these requirements:",
          table: {
            headers: ["Option", "Requirement", "Evidence Needed"],
            rows: [
              ["Education", "High school diploma or equivalent", "Diploma, transcripts"],
              ["Work Experience", "2 years in qualifying occupation", "Employment letters, O*NET job listing"],
              ["Combination", "Some education + some experience", "Must total equivalent qualification"]
            ]
          }
        },
        {
          heading: "Qualifying Work Experience",
          content: "If using work experience instead of education:\n\n• Must be in occupation requiring 2+ years of training\n• Must have 2 years of experience in past 5 years\n• Job must be in O*NET database at SVP 7.0+\n• Examples: Chef, electrician, nurse, mechanic\n• Non-qualifying: General labor, retail, driving"
        },
        {
          heading: "Cross-Chargeability Rules",
          content: "Born in an ineligible country? You may still qualify:\n\nSpouse Cross-Chargeability:\n• If your spouse was born in an eligible country\n• You can use their country of chargeability\n• You must immigrate together\n\nParent Cross-Chargeability:\n• If neither parent was born or resided in your birth country\n• You can claim their country of birth"
        },
        {
          heading: "Registration Process",
          content: "How to register for the DV Lottery:",
          list: [
            "Go to dvprogram.state.gov during registration period",
            "Complete online form (free - no fees ever)",
            "Upload qualifying photo (strict requirements)",
            "Include spouse and children under 21",
            "Submit before deadline (no extensions)",
            "Save confirmation number immediately",
            "Only ONE entry per person"
          ]
        },
        {
          heading: "Photo Requirements",
          content: "Photos must meet exact specifications:",
          table: {
            headers: ["Requirement", "Specification"],
            rows: [
              ["Size", "600x600 pixels (2x2 inches)"],
              ["Format", "JPEG (.jpg)"],
              ["File Size", "240KB maximum"],
              ["Background", "Plain white or off-white"],
              ["Recency", "Taken within 6 months"],
              ["Head Position", "Facing camera directly"],
              ["Expression", "Neutral, eyes open"],
              ["Glasses", "NOT allowed (even prescription)"]
            ]
          }
        },
        {
          heading: "Common Disqualification Reasons",
          content: "Entries are disqualified for:",
          list: [
            "Multiple entries (only one allowed)",
            "Incorrect photo specifications",
            "Born in ineligible country (without cross-charge)",
            "Not meeting education/work requirements",
            "Incomplete or inaccurate information",
            "Missing spouse or children",
            "Using paid submission services incorrectly"
          ]
        },
        {
          heading: "After Selection",
          content: "If selected in the lottery:\n\n• Check results at dvprogram.state.gov (May)\n• Complete DS-260 immigrant visa application\n• Gather required documents\n• Pay processing fees\n• Attend medical examination\n• Interview at U.S. embassy\n• All steps must complete before September 30"
        },
        {
          heading: "Norco DV Lottery Services",
          content: "SoCal Immigration Services helps Norco families with:",
          list: [
            "Arabic and English speaking staff",
            "Eligibility evaluation",
            "Cross-chargeability analysis",
            "Photo preparation assistance",
            "Registration review before submission",
            "Winner processing (DS-260, documents)",
            "Interview preparation"
          ]
        }
      ],

      faqs: [
        {
          q: "Is Egypt eligible for the green card lottery?",
          a: "Yes! Egypt and most other Arab countries are eligible for the DV lottery. Only countries with high immigration rates to the U.S. are excluded."
        },
        {
          q: "Do I need to pay to enter the lottery?",
          a: "No! The DV lottery is completely free. Never pay anyone to submit your entry. Scammers charge fees for something that's free. Register only at dvprogram.state.gov."
        },
        {
          q: "I don't have a high school diploma - can I still enter?",
          a: "Yes, if you have 2 years of work experience in a qualifying occupation (one that requires at least 2 years of training). We can help determine if your job qualifies."
        },
        {
          q: "Can my spouse and I both enter?",
          a: "Yes! Each person can submit one entry. If either of you wins, both can immigrate together. This doubles your chances."
        },
        {
          q: "I was born in a non-eligible country but my spouse wasn't - can I enter?",
          a: "Yes! You can use your spouse's country of birth (cross-chargeability) if they were born in an eligible country. You must immigrate together."
        },
        {
          q: "What happens if I submit more than one entry?",
          a: "Both entries will be disqualified. Only submit ONE entry per person. Spouses should submit separate entries under their own names."
        }
      ],

      cta: {
        title: "Want to Enter the Green Card Lottery from Norco?",
        text: "Let our Arabic-speaking team help you determine eligibility and submit a correct entry. Don't risk disqualification from simple mistakes.",
        button: "Schedule Free Consultation"
      }
    },
    ar: {
      slug: "green-card-lottery-eligibility-norco",
      title: "أهلية قرعة البطاقة الخضراء في نوركو: متطلبات قرعة DV للمهاجرين العرب",
      subtitle: "اكتشف إذا كنت مؤهلاً لقرعة تأشيرة التنوع وكيفية التسجيل بشكل صحيح",
      metaTitle: "أهلية قرعة البطاقة الخضراء نوركو | متطلبات قرعة DV مقاطعة ريفرسايد",
      metaDescription: "تحقق من أهليتك لقرعة DV في نوركو. تعلم متطلبات قرعة البطاقة الخضراء، البلدان المؤهلة، متطلبات التعليم. دعم عربي. اتصل (714) 421-8872.",
      keywords: "قرعة البطاقة الخضراء نوركو، أهلية قرعة DV، متطلبات تأشيرة التنوع، تسجيل القرعة، قرعة الهجرة العربية",
      category: "الأخبار والتحديثات",
      location: "نوركو",
      date: "20 يناير 2026",
      readTime: "9 دقيقة قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "تقدم قرعة تأشيرة التنوع (DV) فرصة للمهاجرين من البلدان الممثلة تمثيلاً ناقصاً للحصول على البطاقات الخضراء. لسكان نوركو وعائلاتهم في الخارج، فهم متطلبات الأهلية هو الخطوة الأولى. تساعد خدمات حلول الهجرة العائلات على تحديد الأهلية والتسجيل بشكل صحيح.",

      sections: [
        {
          heading: "ما هي قرعة DV؟",
          content: "قرعة تأشيرة التنوع هي برنامج حكومي أمريكي يختار عشوائياً ما يصل إلى 55,000 شخص سنوياً لتأشيرات الهجرة.\n\nحقائق أساسية:\n• مجاني للدخول - لا تدفع أبداً للتسجيل\n• مشاركة واحدة لكل شخص سنوياً\n• التسجيل عادة أكتوبر-نوفمبر\n• النتائج متاحة في مايو التالي\n• الاختيار لا يضمن التأشيرة"
        },
        {
          heading: "أهلية البلد",
          content: "يجب أن تكون مولوداً في بلد مؤهل. معظم الدول العربية مؤهلة:",
          list: [
            "مصر - مؤهلة",
            "الأردن - مؤهل",
            "لبنان - مؤهل",
            "سوريا - مؤهلة",
            "العراق - مؤهل",
            "اليمن - مؤهل",
            "فلسطين - مؤهلة",
            "المغرب - مؤهل",
            "تونس - مؤهلة",
            "الجزائر - مؤهلة",
            "ليبيا - مؤهلة",
            "السودان - مؤهل"
          ]
        },
        {
          heading: "البلدان غير المؤهلة",
          content: "هذه البلدان لديها معدلات هجرة عالية ومستبعدة:",
          list: [
            "بنغلاديش",
            "البرازيل",
            "كندا",
            "الصين (البر الرئيسي)",
            "جمهورية الدومينيكان",
            "السلفادور",
            "هايتي",
            "هندوراس",
            "الهند",
            "جامايكا",
            "المكسيك",
            "نيجيريا",
            "باكستان",
            "الفلبين",
            "كوريا الجنوبية",
            "المملكة المتحدة (باستثناء أيرلندا الشمالية)",
            "فنزويلا",
            "فيتنام"
          ]
        },
        {
          heading: "متطلبات التعليم",
          content: "يجب أن تستوفي واحداً من هذه المتطلبات:",
          table: {
            headers: ["الخيار", "المتطلب", "الأدلة المطلوبة"],
            rows: [
              ["التعليم", "شهادة ثانوية أو ما يعادلها", "الشهادة، كشوف الدرجات"],
              ["خبرة العمل", "سنتان في مهنة مؤهلة", "خطابات العمل، قائمة وظائف O*NET"],
              ["مزيج", "بعض التعليم + بعض الخبرة", "يجب أن يساوي مؤهلاً معادلاً"]
            ]
          }
        },
        {
          heading: "خبرة العمل المؤهلة",
          content: "إذا كنت تستخدم خبرة العمل بدلاً من التعليم:\n\n• يجب أن تكون في مهنة تتطلب 2+ سنوات تدريب\n• يجب أن يكون لديك سنتان من الخبرة في السنوات الخمس الماضية\n• يجب أن تكون الوظيفة في قاعدة بيانات O*NET عند SVP 7.0+\n• أمثلة: طاهٍ، كهربائي، ممرض، ميكانيكي\n• غير مؤهلة: العمالة العامة، البيع بالتجزئة، القيادة"
        },
        {
          heading: "قواعد المحاسبة المتقاطعة",
          content: "مولود في بلد غير مؤهل؟ قد لا تزال تتأهل:\n\nالمحاسبة المتقاطعة للزوج:\n• إذا كان زوجك مولوداً في بلد مؤهل\n• يمكنك استخدام بلد محاسبتهم\n• يجب أن تهاجرا معاً\n\nالمحاسبة المتقاطعة للوالدين:\n• إذا لم يكن أي من الوالدين مولوداً أو مقيماً في بلد ولادتك\n• يمكنك المطالبة ببلد ولادتهم"
        },
        {
          heading: "عملية التسجيل",
          content: "كيفية التسجيل في قرعة DV:",
          list: [
            "اذهب إلى dvprogram.state.gov خلال فترة التسجيل",
            "أكمل النموذج عبر الإنترنت (مجاني - لا رسوم أبداً)",
            "ارفع صورة مؤهلة (متطلبات صارمة)",
            "ضمّن الزوج والأطفال تحت 21",
            "قدم قبل الموعد النهائي (لا تمديدات)",
            "احفظ رقم التأكيد فوراً",
            "مشاركة واحدة فقط لكل شخص"
          ]
        },
        {
          heading: "متطلبات الصورة",
          content: "يجب أن تلبي الصور مواصفات محددة:",
          table: {
            headers: ["المتطلب", "المواصفة"],
            rows: [
              ["الحجم", "600x600 بكسل (2x2 بوصة)"],
              ["التنسيق", "JPEG (.jpg)"],
              ["حجم الملف", "240KB كحد أقصى"],
              ["الخلفية", "أبيض سادة أو قريب من الأبيض"],
              ["الحداثة", "ملتقطة خلال 6 أشهر"],
              ["وضع الرأس", "مواجه للكاميرا مباشرة"],
              ["التعبير", "محايد، العيون مفتوحة"],
              ["النظارات", "غير مسموح (حتى الطبية)"]
            ]
          }
        },
        {
          heading: "أسباب الاستبعاد الشائعة",
          content: "يتم استبعاد المشاركات بسبب:",
          list: [
            "مشاركات متعددة (واحدة فقط مسموحة)",
            "مواصفات صورة غير صحيحة",
            "مولود في بلد غير مؤهل (بدون محاسبة متقاطعة)",
            "عدم استيفاء متطلبات التعليم/العمل",
            "معلومات ناقصة أو غير دقيقة",
            "عدم ذكر الزوج أو الأطفال",
            "استخدام خدمات التقديم المدفوعة بشكل غير صحيح"
          ]
        },
        {
          heading: "بعد الاختيار",
          content: "إذا تم اختيارك في القرعة:\n\n• تحقق من النتائج على dvprogram.state.gov (مايو)\n• أكمل طلب تأشيرة الهجرة DS-260\n• اجمع المستندات المطلوبة\n• ادفع رسوم المعالجة\n• احضر الفحص الطبي\n• مقابلة في السفارة الأمريكية\n• يجب إكمال جميع الخطوات قبل 30 سبتمبر"
        },
        {
          heading: "خدمات قرعة DV في نوركو",
          content: "تساعد خدمات حلول الهجرة عائلات نوركو في:",
          list: [
            "فريق يتحدث العربية والإنجليزية",
            "تقييم الأهلية",
            "تحليل المحاسبة المتقاطعة",
            "مساعدة إعداد الصورة",
            "مراجعة التسجيل قبل التقديم",
            "معالجة الفائزين (DS-260، المستندات)",
            "التحضير للمقابلة"
          ]
        }
      ],

      faqs: [
        {
          q: "هل مصر مؤهلة لقرعة البطاقة الخضراء؟",
          a: "نعم! مصر ومعظم الدول العربية الأخرى مؤهلة لقرعة DV. فقط البلدان ذات معدلات الهجرة العالية إلى الولايات المتحدة مستبعدة."
        },
        {
          q: "هل أحتاج للدفع لدخول القرعة؟",
          a: "لا! قرعة DV مجانية تماماً. لا تدفع أبداً لأي شخص لتقديم مشاركتك. المحتالون يتقاضون رسوماً لشيء مجاني. سجل فقط على dvprogram.state.gov."
        },
        {
          q: "ليس لدي شهادة ثانوية - هل لا يزال بإمكاني الدخول؟",
          a: "نعم، إذا كان لديك سنتان من خبرة العمل في مهنة مؤهلة (واحدة تتطلب على الأقل سنتين من التدريب). يمكننا مساعدتك في تحديد إذا كانت وظيفتك مؤهلة."
        },
        {
          q: "هل يمكن لي ولزوجي الدخول معاً؟",
          a: "نعم! كل شخص يمكنه تقديم مشاركة واحدة. إذا فاز أي منكما، يمكن لكليكما الهجرة معاً. هذا يضاعف فرصكم."
        },
        {
          q: "ولدت في بلد غير مؤهل لكن زوجي لم يكن - هل يمكنني الدخول؟",
          a: "نعم! يمكنك استخدام بلد ولادة زوجك (المحاسبة المتقاطعة) إذا كان مولوداً في بلد مؤهل. يجب أن تهاجرا معاً."
        },
        {
          q: "ماذا يحدث إذا قدمت أكثر من مشاركة واحدة؟",
          a: "كلا المشاركتين سيتم استبعادهما. قدم مشاركة واحدة فقط لكل شخص. يجب على الأزواج تقديم مشاركات منفصلة بأسمائهم الخاصة."
        }
      ],

      cta: {
        title: "تريد دخول قرعة البطاقة الخضراء من نوركو؟",
        text: "دع فريقنا الذي يتحدث العربية يساعدك على تحديد الأهلية وتقديم مشاركة صحيحة. لا تخاطر بالاستبعاد من أخطاء بسيطة.",
        button: "جدولة استشارة مجانية"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default GreenCardLotteryEligibilityNorco;
