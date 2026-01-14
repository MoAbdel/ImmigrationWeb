import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const AsylumClockWorkAuthorizationPerris = ({ language }) => {
  const content = {
    en: {
      slug: "asylum-clock-work-authorization-perris",
      title: "Asylum Clock and Work Authorization in Perris: Understanding the 180-Day Wait",
      subtitle: "Know when you can apply for work permit while your asylum case is pending",
      metaTitle: "Asylum Clock Work Authorization Perris | EAD Eligibility for Asylum Seekers",
      metaDescription: "Asylum clock and work authorization guide in Perris. When to apply for EAD, clock stops and restarts, 180-day rule. Arabic support. Call (714) 421-8872.",
      keywords: "asylum clock Perris, asylum work permit, EAD asylum pending, 180-day rule immigration, asylum work authorization",
      category: "Asylum",
      location: "Perris",
      date: "January 14, 2026",
      readTime: "12 min read",
      author: "SoCal Immigration Services",
      image: "/images/blog/asylum.jpg",
      summary: "Asylum seekers can apply for work authorization after their 'asylum clock' reaches 180 days. Understanding what stops or restarts the clock is essential for obtaining legal work permission.",
      locationIntro: "For asylum seekers in Perris waiting for their cases to be decided, work authorization can provide critical support. SoCal Immigration Services helps Arab families understand the asylum clock and apply for work permits with Arabic-speaking support.",

      sections: [
        {
          heading: "What is the Asylum Clock?",
          content: "The 'asylum clock' is a tracking system that counts the days since your asylum application was filed. After 180 days on the clock, you become eligible to apply for an Employment Authorization Document (EAD). Key points:\n\n• Clock starts when complete asylum application is filed\n• Must reach 180 days to apply for work permit\n• Certain delays can stop the clock\n• USCIS tracks the clock in their system"
        },
        {
          heading: "When Does the Asylum Clock Start?",
          content: "Your asylum clock begins when USCIS or Immigration Court receives your complete asylum application:",
          table: {
            headers: ["Filing Location", "Clock Start", "Application"],
            rows: [
              ["USCIS (Affirmative)", "Date application received", "Form I-589"],
              ["Immigration Court (Defensive)", "Date filed with court", "Form I-589"],
              ["Referral cases", "Date referred to court", "After USCIS interview"],
              ["Reopened cases", "Date case reopened", "Varies by situation"]
            ]
          }
        },
        {
          heading: "What Stops the Asylum Clock?",
          content: "Your clock can stop (pause) if delays are caused by you, not the government:",
          list: [
            "Requesting a continuance or postponement",
            "Not appearing for scheduled interviews or hearings",
            "Failing to submit requested documents on time",
            "Requesting additional time to prepare",
            "Moving without notifying the court/USCIS",
            "Any delay caused by the applicant"
          ]
        },
        {
          heading: "What Does NOT Stop the Clock",
          content: "Government-caused delays do not stop your clock:\n\n• Court scheduling backlogs\n• USCIS processing delays\n• Continuances requested by the government\n• Transfers between offices\n• Judge-initiated postponements\n• Normal processing time"
        },
        {
          heading: "Applying for Work Authorization",
          content: "Once your clock reaches 180 days, you can apply for an EAD:",
          steps: [
            {
              title: "Verify Clock Status",
              description: "Confirm your asylum clock shows 180+ days"
            },
            {
              title: "Complete Form I-765",
              description: "File with category (c)(8) for pending asylum"
            },
            {
              title: "Gather Documents",
              description: "Asylum receipt, photos, ID, clock evidence"
            },
            {
              title: "Submit Application",
              description: "No filing fee for asylum-based EAD"
            },
            {
              title: "Attend Biometrics",
              description: "Schedule appointment if required"
            },
            {
              title: "Receive EAD",
              description: "Card valid for 2 years (renewable)"
            }
          ]
        },
        {
          heading: "Form I-765 Requirements for Asylum EAD",
          content: "Required documents for your asylum work permit application:",
          list: [
            "Form I-765, Application for Employment Authorization",
            "Copy of I-589 receipt notice or filing proof",
            "Two passport-style photos",
            "Copy of government-issued ID",
            "Evidence of asylum application filing date",
            "No filing fee (fee exempt for category (c)(8))"
          ]
        },
        {
          heading: "Processing Time for Asylum EAD",
          content: "Current processing times and what to expect:\n\n• Standard processing: 90-180 days\n• Check current times on USCIS website\n• Can request expedited processing if hardship\n• 180-day rule: If EAD not processed within 30 days of eligibility, may qualify for interim EAD\n• Keep case numbers handy for status checks"
        },
        {
          heading: "Renewing Your Asylum EAD",
          content: "Your asylum-based EAD is valid for 2 years. To renew:\n\n• File renewal 180 days before expiration\n• May qualify for automatic 540-day extension\n• Must still have pending asylum case\n• Same (c)(8) category for renewal\n• Keep working while renewal pending with auto-extension"
        },
        {
          heading: "If Your Clock Shows Wrong Days",
          content: "If you believe your asylum clock is incorrect:\n\n• Request clock review from USCIS or court\n• Provide evidence of correct filing date\n• Document any government-caused delays\n• Keep copies of all notices and filings\n• Consider consulting an immigration professional"
        },
        {
          heading: "Work Without Authorization Consequences",
          content: "Working before your EAD is approved can have serious consequences:\n\n• May affect asylum case credibility\n• Can result in deportation proceedings\n• Future immigration benefits may be denied\n• Always wait for valid EAD before working"
        },
        {
          heading: "Perris Asylum Work Authorization Services",
          content: "SoCal Immigration Services helps Perris asylum seekers with:",
          list: [
            "Tracking and verifying asylum clock status",
            "Preparing Form I-765 EAD applications",
            "Gathering required documentation",
            "Expedite requests for financial hardship",
            "EAD renewal applications",
            "Arabic and English speaking support"
          ]
        }
      ],

      faqs: [
        {
          q: "Can I work while waiting for my asylum decision?",
          a: "Yes, but only after your asylum clock reaches 180 days AND you receive an approved EAD. You cannot work before getting your work permit."
        },
        {
          q: "Is there a fee for asylum work permit?",
          a: "No. Asylum-based EAD applications (category c)(8)) are fee exempt. Do not pay any filing fee for this category."
        },
        {
          q: "What if my asylum case is denied?",
          a: "If your asylum is denied and you appeal, you may continue working with a valid EAD while the appeal is pending. If no appeal, work authorization typically ends."
        },
        {
          q: "Can I change jobs with my asylum EAD?",
          a: "Yes. The asylum EAD allows you to work for any employer in any job. It is not tied to a specific employer or occupation."
        },
        {
          q: "How do I check my asylum clock status?",
          a: "You can inquire about your clock through USCIS Contact Center, at your asylum interview, or through your immigration court if in removal proceedings."
        },
        {
          q: "What happens to my EAD if I win asylum?",
          a: "If granted asylum, you become an asylee and can apply for an asylee-based EAD (category a)(5)), which has different rules and benefits."
        }
      ],

      cta: {
        title: "Need Help with Asylum Work Authorization in Perris?",
        text: "Our team can help you track your asylum clock and apply for work authorization as soon as you're eligible.",
        button: "Schedule Free Consultation"
      }
    },
    ar: {
      slug: "asylum-clock-work-authorization-perris",
      title: "ساعة اللجوء وتصريح العمل في بيريس: فهم انتظار 180 يوماً",
      subtitle: "اعرف متى يمكنك التقدم لتصريح العمل أثناء انتظار قضية لجوئك",
      metaTitle: "ساعة اللجوء تصريح العمل بيريس | أهلية EAD لطالبي اللجوء",
      metaDescription: "دليل ساعة اللجوء وتصريح العمل في بيريس. متى تتقدم لـ EAD، توقف واستئناف الساعة، قاعدة 180 يوم. دعم عربي. اتصل (714) 421-8872.",
      keywords: "ساعة اللجوء بيريس، تصريح عمل اللجوء، EAD اللجوء المعلق، قاعدة 180 يوم الهجرة",
      category: "اللجوء",
      location: "بيريس",
      date: "14 يناير 2026",
      readTime: "12 دقيقة قراءة",
      author: "خدمات الهجرة في جنوب كاليفورنيا",
      image: "/images/blog/asylum.jpg",
      summary: "يمكن لطالبي اللجوء التقدم لتصريح العمل بعد وصول 'ساعة اللجوء' إلى 180 يوماً. فهم ما يوقف أو يعيد تشغيل الساعة ضروري للحصول على إذن عمل قانوني.",
      locationIntro: "لطالبي اللجوء في بيريس الذين ينتظرون البت في قضاياهم، يمكن أن يوفر تصريح العمل دعماً حيوياً. تساعد خدمات الهجرة في جنوب كاليفورنيا العائلات العربية في فهم ساعة اللجوء والتقدم لتصاريح العمل مع دعم باللغة العربية.",

      sections: [
        {
          heading: "ما هي ساعة اللجوء؟",
          content: "'ساعة اللجوء' هي نظام تتبع يحسب الأيام منذ تقديم طلب لجوئك. بعد 180 يوماً على الساعة، تصبح مؤهلاً للتقدم لوثيقة تصريح العمل (EAD). النقاط الرئيسية:\n\n• تبدأ الساعة عند تقديم طلب لجوء كامل\n• يجب الوصول إلى 180 يوماً للتقدم لتصريح العمل\n• يمكن أن توقف تأخيرات معينة الساعة\n• تتبع USCIS الساعة في نظامها"
        },
        {
          heading: "متى تبدأ ساعة اللجوء؟",
          content: "تبدأ ساعة لجوئك عندما تستلم USCIS أو محكمة الهجرة طلب لجوئك الكامل:",
          table: {
            headers: ["موقع التقديم", "بدء الساعة", "الطلب"],
            rows: [
              ["USCIS (إيجابي)", "تاريخ استلام الطلب", "نموذج I-589"],
              ["محكمة الهجرة (دفاعي)", "تاريخ التقديم للمحكمة", "نموذج I-589"],
              ["حالات الإحالة", "تاريخ الإحالة للمحكمة", "بعد مقابلة USCIS"],
              ["الحالات المعاد فتحها", "تاريخ إعادة فتح القضية", "يختلف حسب الوضع"]
            ]
          }
        },
        {
          heading: "ما الذي يوقف ساعة اللجوء؟",
          content: "يمكن أن تتوقف ساعتك إذا كانت التأخيرات بسببك، وليس الحكومة:",
          list: [
            "طلب تأجيل أو تأخير",
            "عدم الحضور للمقابلات أو الجلسات المجدولة",
            "عدم تقديم الوثائق المطلوبة في الوقت المحدد",
            "طلب وقت إضافي للتحضير",
            "الانتقال دون إخطار المحكمة/USCIS",
            "أي تأخير بسبب مقدم الطلب"
          ]
        },
        {
          heading: "ما الذي لا يوقف الساعة",
          content: "التأخيرات بسبب الحكومة لا توقف ساعتك:\n\n• تراكم جدولة المحكمة\n• تأخيرات معالجة USCIS\n• التأجيلات التي تطلبها الحكومة\n• التحويلات بين المكاتب\n• التأجيلات التي يبادر بها القاضي\n• وقت المعالجة العادي"
        },
        {
          heading: "التقدم لتصريح العمل",
          content: "بمجرد وصول ساعتك إلى 180 يوماً، يمكنك التقدم لـ EAD:",
          steps: [
            {
              title: "تحقق من حالة الساعة",
              description: "تأكد أن ساعة لجوئك تظهر 180+ يوم"
            },
            {
              title: "أكمل نموذج I-765",
              description: "قدم مع الفئة (c)(8) للجوء المعلق"
            },
            {
              title: "اجمع الوثائق",
              description: "إيصال اللجوء، صور، هوية، دليل الساعة"
            },
            {
              title: "قدم الطلب",
              description: "لا رسوم تقديم لـ EAD القائم على اللجوء"
            },
            {
              title: "احضر القياسات الحيوية",
              description: "حدد موعد إذا لزم الأمر"
            },
            {
              title: "استلم EAD",
              description: "البطاقة صالحة لسنتين (قابلة للتجديد)"
            }
          ]
        },
        {
          heading: "متطلبات نموذج I-765 لـ EAD اللجوء",
          content: "الوثائق المطلوبة لطلب تصريح عمل اللجوء:",
          list: [
            "نموذج I-765، طلب تصريح العمل",
            "نسخة من إشعار استلام I-589 أو إثبات التقديم",
            "صورتان بحجم جواز السفر",
            "نسخة من هوية صادرة عن الحكومة",
            "دليل على تاريخ تقديم طلب اللجوء",
            "لا رسوم تقديم (معفى من الرسوم للفئة (c)(8))"
          ]
        },
        {
          heading: "وقت معالجة EAD اللجوء",
          content: "أوقات المعالجة الحالية وما تتوقعه:\n\n• المعالجة القياسية: 90-180 يوم\n• تحقق من الأوقات الحالية على موقع USCIS\n• يمكن طلب معالجة عاجلة إذا كان هناك ضائقة\n• قاعدة 180 يوم: إذا لم تتم معالجة EAD خلال 30 يوماً من الأهلية، قد تتأهل لـ EAD مؤقت\n• احتفظ بأرقام القضية جاهزة لفحص الحالة"
        },
        {
          heading: "تجديد EAD اللجوء",
          content: "EAD القائم على اللجوء صالح لسنتين. للتجديد:\n\n• قدم التجديد قبل 180 يوماً من انتهاء الصلاحية\n• قد تتأهل لتمديد تلقائي 540 يوم\n• يجب أن يكون لديك قضية لجوء معلقة\n• نفس الفئة (c)(8) للتجديد\n• استمر في العمل أثناء انتظار التجديد مع التمديد التلقائي"
        },
        {
          heading: "إذا أظهرت ساعتك أيام خاطئة",
          content: "إذا كنت تعتقد أن ساعة لجوئك غير صحيحة:\n\n• اطلب مراجعة الساعة من USCIS أو المحكمة\n• قدم دليل على تاريخ التقديم الصحيح\n• وثق أي تأخيرات بسبب الحكومة\n• احتفظ بنسخ من جميع الإشعارات والتقديمات\n• فكر في استشارة محترف هجرة"
        },
        {
          heading: "عواقب العمل بدون تصريح",
          content: "العمل قبل الموافقة على EAD يمكن أن يكون له عواقب خطيرة:\n\n• قد يؤثر على مصداقية قضية اللجوء\n• يمكن أن يؤدي إلى إجراءات ترحيل\n• قد يتم رفض مزايا الهجرة المستقبلية\n• انتظر دائماً EAD صالح قبل العمل"
        },
        {
          heading: "خدمات تصريح عمل اللجوء في بيريس",
          content: "تساعد خدمات الهجرة في جنوب كاليفورنيا طالبي اللجوء في بيريس في:",
          list: [
            "تتبع والتحقق من حالة ساعة اللجوء",
            "إعداد طلبات EAD نموذج I-765",
            "جمع الوثائق المطلوبة",
            "طلبات التعجيل للضائقة المالية",
            "طلبات تجديد EAD",
            "دعم باللغة العربية والإنجليزية"
          ]
        }
      ],

      faqs: [
        {
          q: "هل يمكنني العمل أثناء انتظار قرار لجوئي؟",
          a: "نعم، لكن فقط بعد وصول ساعة لجوئك إلى 180 يوماً وحصولك على EAD معتمد. لا يمكنك العمل قبل الحصول على تصريح العمل."
        },
        {
          q: "هل هناك رسوم لتصريح عمل اللجوء؟",
          a: "لا. طلبات EAD القائمة على اللجوء (الفئة c)(8)) معفاة من الرسوم. لا تدفع أي رسوم تقديم لهذه الفئة."
        },
        {
          q: "ماذا لو رُفضت قضية لجوئي؟",
          a: "إذا رُفض لجوؤك واستأنفت، يمكنك الاستمرار في العمل بـ EAD صالح أثناء انتظار الاستئناف. إذا لم يكن هناك استئناف، ينتهي تصريح العمل عادة."
        },
        {
          q: "هل يمكنني تغيير الوظائف مع EAD اللجوء؟",
          a: "نعم. يسمح لك EAD اللجوء بالعمل لأي صاحب عمل في أي وظيفة. ليس مرتبطاً بصاحب عمل أو مهنة محددة."
        },
        {
          q: "كيف أتحقق من حالة ساعة لجوئي؟",
          a: "يمكنك الاستفسار عن ساعتك من خلال مركز اتصال USCIS، في مقابلة لجوئك، أو من خلال محكمة الهجرة إذا كنت في إجراءات الترحيل."
        },
        {
          q: "ماذا يحدث لـ EAD إذا فزت باللجوء؟",
          a: "إذا مُنحت اللجوء، تصبح لاجئاً ويمكنك التقدم لـ EAD القائم على اللاجئ (الفئة a)(5))، والتي لها قواعد ومزايا مختلفة."
        }
      ],

      cta: {
        title: "تحتاج مساعدة في تصريح عمل اللجوء في بيريس؟",
        text: "يمكن لفريقنا مساعدتك في تتبع ساعة لجوئك والتقدم لتصريح العمل بمجرد أن تكون مؤهلاً.",
        button: "حدد موعد استشارة مجانية"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default AsylumClockWorkAuthorizationPerris;
