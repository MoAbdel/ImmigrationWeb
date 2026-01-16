import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const I94ArrivalRecordIssuesBrea = ({ language }) => {
  const content = {
    en: {
      slug: "i94-arrival-record-issues-brea",
      title: "I-94 Arrival Record Issues in Brea: Fixing Entry Date and Status Problems",
      subtitle: "Resolving common I-94 problems that can affect your immigration status",
      metaTitle: "I-94 Problems Brea | Fix Arrival Record Issues Orange County",
      metaDescription: "Help with I-94 arrival record issues in Brea. Wrong dates, missing records, status corrections, overstay problems. Call (714) 421-8872.",
      keywords: "I-94 issues Brea, arrival record problems, fix I-94 Orange County, immigration status correction",
      category: "Documents",
      location: "Brea",
      date: "January 16, 2026",
      readTime: "10 min read",
      author: "SoCal Immigration Services",
      locationIntro: "Your I-94 arrival/departure record is one of the most important immigration documents. Errors or problems with your I-94 can affect your legal status and future immigration benefits. SoCal Immigration Services helps Brea and Orange County residents resolve I-94 issues.",

      sections: [
        {
          heading: "What is the I-94 Record?",
          content: "The I-94 is your official arrival/departure record:\n\nWhat It Shows:\n• Your date of entry to the United States\n• Your immigration status upon entry\n• The date your authorized stay expires\n• Your class of admission (visa type)\n\nWhy It Matters:\n• Proves legal entry and status\n• Determines when you must depart\n• Required for employment authorization\n• Needed for status changes and extensions\n• Used in naturalization applications"
        },
        {
          heading: "How to Access Your I-94",
          content: "Finding your I-94 record:",
          table: {
            headers: ["Method", "Website", "Information Needed"],
            rows: [
              ["CBP Website", "i94.cbp.dhs.gov", "Passport number, country, DOB"],
              ["Physical Card", "Given at entry (rare now)", "Keep paper copy safe"],
              ["Travel History", "i94.cbp.dhs.gov/I94/#/history", "Same as above"],
              ["FOIA Request", "CBP FOIA office", "For older records"]
            ]
          }
        },
        {
          heading: "Common I-94 Problems",
          content: "Issues that frequently occur with I-94 records:",
          list: [
            "Wrong admission class (visa type listed incorrectly)",
            "Incorrect entry date recorded",
            "Wrong authorized stay date (should be 'D/S' for some visas)",
            "Missing I-94 record (no electronic record created)",
            "Multiple entries showing incorrectly",
            "Name spelling errors",
            "Wrong passport number recorded"
          ]
        },
        {
          heading: "D/S vs. Specific Date",
          content: "Understanding your authorized stay period:\n\nD/S (Duration of Status):\n• Given to F-1 students, J-1 visitors, some other categories\n• Stay is valid as long as you maintain your status\n• No specific departure date\n\nSpecific Date:\n• Given to B-1/B-2 visitors, H-1B workers, others\n• Shows exact date you must depart by\n• Can be extended by filing with USCIS before expiration\n\nCommon Error: CBP sometimes stamps a specific date when D/S should apply"
        },
        {
          heading: "How to Correct I-94 Errors",
          content: "Steps to fix I-94 problems:",
          table: {
            headers: ["Issue Type", "Where to Correct", "Process"],
            rows: [
              ["Wrong admission class", "Deferred Inspection at port of entry", "Bring proof of correct visa status"],
              ["Wrong date", "CBP Deferred Inspection", "Show passport stamps, tickets"],
              ["Missing record", "CBP or USCIS", "Provide entry documents"],
              ["Name error", "CBP Deferred Inspection", "Bring passport, visa"],
              ["Status correction", "USCIS (may need filing)", "File I-102 or other form"]
            ]
          }
        },
        {
          heading: "Deferred Inspection Process",
          content: "Getting errors corrected at CBP:\n\n1. Locate nearest Deferred Inspection site\n• Port of entry airports (LAX, John Wayne, Ontario)\n• CBP offices with deferred inspection services\n\n2. Gather documents:\n• Passport with visa\n• Previous I-94s if available\n• Flight records or boarding passes\n• Any other entry documentation\n\n3. Schedule or walk-in:\n• Some locations accept walk-ins\n• Others require appointments\n• Call ahead to confirm\n\n4. Meet with CBP officer:\n• Explain the error\n• Provide documentation\n• Receive corrected I-94 or annotation"
        },
        {
          heading: "I-94 and Overstay Issues",
          content: "When your I-94 affects status violations:\n\nOverstay Consequences:\n• Any overstay can affect future visas\n• 180+ days overstay = 3-year bar from returning\n• 365+ days overstay = 10-year bar from returning\n• Overstay triggers unlawful presence\n\nImportant:\n• An incorrect I-94 date doesn't mean you overstayed\n• You can prove lawful status with other documents\n• Correct errors before they cause problems"
        },
        {
          heading: "Travel History Verification",
          content: "Checking your complete travel record:\n\nWhy Review Travel History:\n• Verify all entries and exits recorded\n• Identify missing trips\n• Prepare for naturalization\n• Support visa applications\n\nHow to Get Full History:\n• I94.cbp.dhs.gov shows last 10 years (when available)\n• FOIA request for complete records\n• Keep your own records of all travel"
        },
        {
          heading: "Brea I-94 Services",
          content: "SoCal Immigration Services helps with:",
          list: [
            "I-94 record review and verification",
            "Identifying errors and issues",
            "Deferred inspection preparation",
            "Document gathering for corrections",
            "I-102 replacement card filing",
            "Arabic and English speaking support"
          ]
        }
      ],

      faqs: [
        {
          q: "Where can I find my I-94 record?",
          a: "Visit i94.cbp.dhs.gov and enter your passport information. You can view your most recent I-94 and travel history. If it's not showing, you may need to contact CBP directly."
        },
        {
          q: "My I-94 shows the wrong visa class. How do I fix it?",
          a: "You'll need to visit a CBP Deferred Inspection office with your passport showing the correct visa. They can correct the record. Don't wait - fix it before applying for any benefits."
        },
        {
          q: "What if there's no I-94 record for my entry?",
          a: "This sometimes happens. Gather your evidence of entry (passport stamps, boarding passes, flight records) and visit CBP Deferred Inspection to have a record created or corrected."
        },
        {
          q: "My I-94 shows a date but I'm on an F-1 visa. Is that a problem?",
          a: "F-1 students should have 'D/S' (Duration of Status), not a date. If yours shows a specific date, get it corrected at CBP Deferred Inspection to avoid problems with status."
        },
        {
          q: "How long does it take to correct an I-94?",
          a: "At Deferred Inspection, corrections can often be made same day if you have proper documentation. Some complex cases may take longer or require additional review."
        },
        {
          q: "Can an I-94 error cause me to be out of status?",
          a: "An error on the I-94 doesn't automatically mean you're out of status, but it can cause problems. You should correct errors and keep documentation proving your actual lawful status."
        }
      ],

      cta: {
        title: "I-94 Problems in Brea?",
        text: "Don't let I-94 errors affect your immigration status. We'll help you identify issues and get them corrected properly.",
        button: "Schedule Free Consultation"
      }
    },
    ar: {
      slug: "i94-arrival-record-issues-brea",
      title: "مشاكل سجل الوصول I-94 في بريا: إصلاح مشاكل تاريخ الدخول والوضع",
      subtitle: "حل مشاكل I-94 الشائعة التي يمكن أن تؤثر على وضعك الهجري",
      metaTitle: "مشاكل I-94 بريا | إصلاح مشاكل سجل الوصول أورانج كاونتي",
      metaDescription: "مساعدة في مشاكل سجل الوصول I-94 في بريا. تواريخ خاطئة، سجلات مفقودة، تصحيحات الوضع، مشاكل تجاوز الإقامة. اتصل (714) 421-8872.",
      keywords: "مشاكل I-94 بريا، مشاكل سجل الوصول، إصلاح I-94 أورانج كاونتي، تصحيح وضع الهجرة",
      category: "الوثائق",
      location: "بريا",
      date: "16 يناير 2026",
      readTime: "10 دقائق قراءة",
      author: "خدمات سوكال للهجرة",
      locationIntro: "سجل الوصول/المغادرة I-94 هو أحد أهم وثائق الهجرة. الأخطاء أو المشاكل في I-94 يمكن أن تؤثر على وضعك القانوني ومزايا الهجرة المستقبلية. تساعد خدمات سوكال للهجرة سكان بريا وأورانج كاونتي في حل مشاكل I-94.",

      sections: [
        {
          heading: "ما هو سجل I-94؟",
          content: "I-94 هو سجل الوصول/المغادرة الرسمي:\n\nما يُظهره:\n• تاريخ دخولك إلى الولايات المتحدة\n• وضعك الهجري عند الدخول\n• تاريخ انتهاء إقامتك المصرح بها\n• فئة القبول (نوع التأشيرة)\n\nلماذا يهم:\n• يثبت الدخول القانوني والوضع\n• يحدد متى يجب المغادرة\n• مطلوب لتصريح العمل\n• مطلوب لتغييرات الوضع والتمديدات\n• يُستخدم في طلبات التجنس"
        },
        {
          heading: "كيفية الوصول إلى I-94",
          content: "إيجاد سجل I-94:",
          table: {
            headers: ["الطريقة", "الموقع", "المعلومات المطلوبة"],
            rows: [
              ["موقع CBP", "i94.cbp.dhs.gov", "رقم جواز السفر، البلد، تاريخ الميلاد"],
              ["البطاقة الورقية", "تُعطى عند الدخول (نادر الآن)", "احتفظ بالنسخة الورقية بأمان"],
              ["تاريخ السفر", "i94.cbp.dhs.gov/I94/#/history", "نفس ما سبق"],
              ["طلب FOIA", "مكتب FOIA في CBP", "للسجلات القديمة"]
            ]
          }
        },
        {
          heading: "مشاكل I-94 الشائعة",
          content: "المشاكل التي تحدث كثيراً مع سجلات I-94:",
          list: [
            "فئة قبول خاطئة (نوع التأشيرة مدرج بشكل غير صحيح)",
            "تاريخ دخول غير صحيح مسجل",
            "تاريخ إقامة مصرح به خاطئ (يجب أن يكون 'D/S' لبعض التأشيرات)",
            "سجل I-94 مفقود (لم يُنشأ سجل إلكتروني)",
            "إدخالات متعددة تظهر بشكل غير صحيح",
            "أخطاء إملائية في الاسم",
            "رقم جواز سفر خاطئ مسجل"
          ]
        },
        {
          heading: "D/S مقابل تاريخ محدد",
          content: "فهم فترة إقامتك المصرح بها:\n\nD/S (مدة الوضع):\n• تُعطى لطلاب F-1، زوار J-1، بعض الفئات الأخرى\n• الإقامة صالحة طالما تحافظ على وضعك\n• لا تاريخ مغادرة محدد\n\nتاريخ محدد:\n• يُعطى لزوار B-1/B-2، عمال H-1B، آخرين\n• يُظهر التاريخ الدقيق الذي يجب المغادرة قبله\n• يمكن تمديده بالتقديم إلى USCIS قبل انتهاء الصلاحية\n\nخطأ شائع: CBP أحياناً تختم تاريخاً محدداً عندما يجب أن ينطبق D/S"
        },
        {
          heading: "كيفية تصحيح أخطاء I-94",
          content: "خطوات إصلاح مشاكل I-94:",
          table: {
            headers: ["نوع المشكلة", "أين تصحح", "العملية"],
            rows: [
              ["فئة قبول خاطئة", "التفتيش المؤجل في ميناء الدخول", "أحضر دليل وضع التأشيرة الصحيح"],
              ["تاريخ خاطئ", "التفتيش المؤجل CBP", "أظهر أختام جواز السفر، التذاكر"],
              ["سجل مفقود", "CBP أو USCIS", "قدم وثائق الدخول"],
              ["خطأ في الاسم", "التفتيش المؤجل CBP", "أحضر جواز السفر، التأشيرة"],
              ["تصحيح الوضع", "USCIS (قد يحتاج تقديم)", "قدم I-102 أو نموذج آخر"]
            ]
          }
        },
        {
          heading: "عملية التفتيش المؤجل",
          content: "تصحيح الأخطاء في CBP:\n\n1. حدد أقرب موقع تفتيش مؤجل\n• مطارات ميناء الدخول (LAX، جون واين، أونتاريو)\n• مكاتب CBP مع خدمات التفتيش المؤجل\n\n2. اجمع الوثائق:\n• جواز السفر مع التأشيرة\n• I-94s السابقة إن توفرت\n• سجلات الطيران أو بطاقات الصعود\n• أي وثائق دخول أخرى\n\n3. حدد موعداً أو احضر مباشرة:\n• بعض المواقع تقبل الحضور المباشر\n• أخرى تتطلب مواعيد\n• اتصل مسبقاً للتأكيد\n\n4. قابل ضابط CBP:\n• اشرح الخطأ\n• قدم الوثائق\n• استلم I-94 مصحح أو تعليق"
        },
        {
          heading: "I-94 ومشاكل تجاوز الإقامة",
          content: "عندما يؤثر I-94 على انتهاكات الوضع:\n\nعواقب تجاوز الإقامة:\n• أي تجاوز يمكن أن يؤثر على التأشيرات المستقبلية\n• 180+ يوم تجاوز = حظر 3 سنوات من العودة\n• 365+ يوم تجاوز = حظر 10 سنوات من العودة\n• تجاوز الإقامة يطلق الوجود غير القانوني\n\nمهم:\n• تاريخ I-94 غير صحيح لا يعني أنك تجاوزت الإقامة\n• يمكنك إثبات الوضع القانوني بوثائق أخرى\n• صحح الأخطاء قبل أن تسبب مشاكل"
        },
        {
          heading: "التحقق من تاريخ السفر",
          content: "مراجعة سجل سفرك الكامل:\n\nلماذا مراجعة تاريخ السفر:\n• التحقق من تسجيل جميع الدخولات والخروجات\n• تحديد الرحلات المفقودة\n• التحضير للتجنس\n• دعم طلبات التأشيرة\n\nكيف تحصل على التاريخ الكامل:\n• I94.cbp.dhs.gov يُظهر آخر 10 سنوات (عند التوفر)\n• طلب FOIA للسجلات الكاملة\n• احتفظ بسجلاتك الخاصة لكل السفر"
        },
        {
          heading: "خدمات I-94 في بريا",
          content: "تساعد خدمات سوكال للهجرة في:",
          list: [
            "مراجعة والتحقق من سجل I-94",
            "تحديد الأخطاء والمشاكل",
            "التحضير للتفتيش المؤجل",
            "جمع الوثائق للتصحيحات",
            "تقديم بطاقة بديلة I-102",
            "دعم بالعربية والإنجليزية"
          ]
        }
      ],

      faqs: [
        {
          q: "أين يمكنني إيجاد سجل I-94؟",
          a: "زر i94.cbp.dhs.gov وأدخل معلومات جواز سفرك. يمكنك عرض أحدث I-94 وتاريخ السفر. إذا لم يظهر، قد تحتاج للاتصال بـ CBP مباشرة."
        },
        {
          q: "I-94 يُظهر فئة تأشيرة خاطئة. كيف أصلحه؟",
          a: "ستحتاج لزيارة مكتب التفتيش المؤجل CBP مع جواز سفرك الذي يُظهر التأشيرة الصحيحة. يمكنهم تصحيح السجل. لا تنتظر - أصلحه قبل التقدم لأي مزايا."
        },
        {
          q: "ماذا لو لم يكن هناك سجل I-94 لدخولي؟",
          a: "هذا يحدث أحياناً. اجمع أدلة دخولك (أختام جواز السفر، بطاقات الصعود، سجلات الطيران) وزر التفتيش المؤجل CBP لإنشاء أو تصحيح سجل."
        },
        {
          q: "I-94 يُظهر تاريخاً لكنني على تأشيرة F-1. هل هذه مشكلة؟",
          a: "طلاب F-1 يجب أن يكون لديهم 'D/S' (مدة الوضع)، وليس تاريخ. إذا كان لديك تاريخ محدد، صححه في التفتيش المؤجل CBP لتجنب مشاكل الوضع."
        },
        {
          q: "كم يستغرق تصحيح I-94؟",
          a: "في التفتيش المؤجل، التصحيحات غالباً يمكن إجراؤها في نفس اليوم إذا كان لديك وثائق مناسبة. بعض الحالات المعقدة قد تستغرق وقتاً أطول أو تتطلب مراجعة إضافية."
        },
        {
          q: "هل يمكن لخطأ I-94 أن يجعلني خارج الوضع؟",
          a: "خطأ في I-94 لا يعني تلقائياً أنك خارج الوضع، لكنه يمكن أن يسبب مشاكل. يجب تصحيح الأخطاء والاحتفاظ بوثائق تثبت وضعك القانوني الفعلي."
        }
      ],

      cta: {
        title: "مشاكل I-94 في بريا؟",
        text: "لا تدع أخطاء I-94 تؤثر على وضعك الهجري. سنساعدك في تحديد المشاكل وتصحيحها بشكل صحيح.",
        button: "احجز استشارة مجانية"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default I94ArrivalRecordIssuesBrea;
