import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const F1StudentVisaIrvine = ({ language }) => {
  const content = {
    en: {
      slug: "f1-student-visa-extension-irvine",
      title: "F-1 Student Visa Extension in Irvine: Guide for International STEM Students",
      subtitle: "Navigate F-1 status maintenance and program extensions for students at UC Irvine and Orange County colleges",
      metaTitle: "F-1 Student Visa Extension Irvine | International Student Immigration Help",
      metaDescription: "F-1 student visa extension and status help in Irvine. STEM OPT, program transfers, and visa maintenance. Arabic support. Call (714) 421-8872.",
      keywords: "F-1 visa extension Irvine, international student visa, UCI student immigration, STEM OPT, student status maintenance",
      category: "Work Visas",
      location: "Irvine",
      date: "December 28, 2025",
      readTime: "9 min read",
      author: "Immigration Solution Services",
      locationIntro: "Irvine is home to UC Irvine and numerous colleges attracting international students from the Middle East and around the world. Immigration Solution Services helps F-1 students maintain legal status, extend their programs, and transition to work authorization while pursuing their American education dreams.",

      sections: [
        {
          heading: "Understanding F-1 Student Status",
          content: "The F-1 visa is the most common student visa for international students pursuing full-time academic studies in the United States. As an F-1 student in Irvine, you must maintain your status by:\n\n• Maintaining full-time enrollment (12+ units undergraduate, 9+ units graduate)\n• Making normal progress toward your degree\n• Keeping your I-20 valid and updated\n• Reporting address changes to your school within 10 days\n• Not working without proper authorization"
        },
        {
          heading: "When You Need a Program Extension",
          content: "F-1 students may need to extend their program for various legitimate reasons:",
          list: [
            "Academic difficulties requiring extra time to complete degree",
            "Change of major or adding a second major",
            "Medical reasons documented by a physician",
            "Initial time estimate was too short",
            "Unforeseen circumstances beyond your control",
            "Research or thesis taking longer than expected"
          ]
        },
        {
          heading: "How to Extend Your I-20 Program End Date",
          content: "The extension process involves working with your Designated School Official (DSO):",
          steps: [
            {
              title: "Contact Your DSO Early",
              description: "Request extension at least 30 days before your current I-20 expires"
            },
            {
              title: "Provide Justification",
              description: "Explain the reason for needing additional time with documentation"
            },
            {
              title: "Show Financial Support",
              description: "Demonstrate you can fund the extended period of study"
            },
            {
              title: "DSO Issues New I-20",
              description: "If approved, receive updated I-20 with new program end date"
            },
            {
              title: "Maintain Valid Status",
              description: "Continue full-time enrollment and all F-1 requirements"
            }
          ]
        },
        {
          heading: "STEM OPT Extension: 24 Additional Months",
          content: "STEM students at UCI and Irvine colleges have special advantages:",
          list: [
            "24-month extension on top of regular 12-month OPT",
            "Total of 36 months of work authorization",
            "Must work for E-Verify registered employer",
            "Must file 17-month I-765 before initial OPT expires",
            "Training plan (Form I-983) required",
            "Eligible CIP codes include engineering, computer science, math, and sciences"
          ]
        },
        {
          heading: "Changing Your F-1 Program or School",
          content: "If you want to change your educational path in Irvine, you have options:",
          table: {
            headers: ["Change Type", "Requirements", "Timeline"],
            rows: [
              ["Transfer to New School", "Acceptance letter, SEVIS transfer", "Before program end date"],
              ["Change Education Level", "New I-20 from DSO", "Apply during current status"],
              ["Add Second Major", "School approval, updated I-20", "During current program"],
              ["Change to New Major", "School approval, possible extension", "Before program ends"]
            ]
          }
        },
        {
          heading: "Reinstatement if You Fall Out of Status",
          content: "If you've violated your F-1 status, you may be able to reinstate:",
          list: [
            "File Form I-539 to request reinstatement",
            "Show the violation was beyond your control or due to circumstances",
            "Demonstrate you're currently pursuing full course of study",
            "Not engaged in unauthorized employment",
            "Not deportable on other grounds",
            "No more than 5 months out of status (generally)"
          ]
        },
        {
          heading: "Common F-1 Status Issues in Irvine",
          content: "We help international students avoid and resolve these common problems:",
          list: [
            "Dropping below full-time enrollment without authorization",
            "Working off-campus without proper work authorization",
            "Failing to report address changes within 10 days",
            "Expired I-20 without timely extension request",
            "Unauthorized gap between programs",
            "Not maintaining valid passport",
            "Missing OPT application deadlines"
          ]
        },
        {
          heading: "Special Considerations for Arab International Students",
          content: "Our team understands unique challenges facing Middle Eastern students in Irvine:",
          list: [
            "Administrative processing delays for visa renewals",
            "Cultural adjustment support",
            "Arabic-language document translation",
            "Coordination with home country requirements",
            "Family visit visa questions",
            "Understanding U.S. academic culture"
          ]
        },
        {
          heading: "Planning Your Immigration Path After Graduation",
          content: "F-1 students have several options after completing their studies:",
          list: [
            "OPT (Optional Practical Training) - 12 months work authorization",
            "STEM OPT Extension - Additional 24 months for STEM graduates",
            "H-1B Visa - Specialty occupation work visa",
            "Change to Other Status - Such as dependent status, investor visa",
            "Return Home with American Degree - Valuable international experience",
            "Further Education - Masters or Ph.D. programs"
          ]
        }
      ],

      faqs: [
        {
          q: "How early should I request an I-20 extension?",
          a: "Contact your DSO at least 30 days before your current I-20 program end date. Earlier is better, as the process takes time and you need to maintain valid status."
        },
        {
          q: "Can I work while on F-1 visa in Irvine?",
          a: "F-1 students can work on-campus up to 20 hours during school and full-time during breaks. Off-campus work requires CPT, OPT, or severe economic hardship authorization."
        },
        {
          q: "What if I want to take a semester off?",
          a: "Taking time off without authorization can violate your status. You must work with your DSO to get an authorized leave or complete a proper program withdrawal and departure."
        },
        {
          q: "How long can I stay in the US after graduation?",
          a: "You have a 60-day grace period after program completion. If you apply for OPT before graduation, you can stay while your application is pending and during your OPT period."
        },
        {
          q: "Can I travel outside the US on F-1 visa?",
          a: "Yes, with a valid I-20 signed for travel (within 1 year), valid visa stamp (or visa-exempt nationality), valid passport, and proof of enrollment."
        },
        {
          q: "What happens if my visa stamp expires?",
          a: "You can remain in the US with expired visa stamp as long as your F-1 status is valid. However, you'll need a new stamp to re-enter the US after traveling abroad."
        }
      ],

      cta: {
        title: "Protect Your F-1 Student Status",
        text: "Don't risk your education and immigration future. Our team helps international students in Irvine maintain status and plan for success.",
        button: "Schedule Student Consultation"
      }
    },
    ar: {
      slug: "f1-student-visa-extension-irvine",
      title: "تمديد تأشيرة الطالب F-1 في إرفاين: دليل لطلاب STEM الدوليين",
      subtitle: "التنقل في الحفاظ على وضع F-1 وتمديدات البرنامج للطلاب في جامعة كاليفورنيا إرفاين وكليات مقاطعة أورانج",
      metaTitle: "تمديد تأشيرة الطالب F-1 إرفاين | مساعدة هجرة الطلاب الدوليين",
      metaDescription: "تمديد تأشيرة الطالب F-1 ومساعدة الوضع في إرفاين. STEM OPT، نقل البرامج، والحفاظ على التأشيرة. دعم بالعربية. اتصل (714) 421-8872.",
      keywords: "تمديد تأشيرة F-1 إرفاين، تأشيرة الطالب الدولي، هجرة طلاب UCI، STEM OPT، الحفاظ على وضع الطالب",
      category: "تأشيرات العمل",
      location: "إرفاين",
      date: "28 ديسمبر 2025",
      readTime: "9 دقائق قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "إرفاين هي موطن لجامعة كاليفورنيا إرفاين والعديد من الكليات التي تجذب الطلاب الدوليين من الشرق الأوسط وحول العالم. تساعد خدمات حلول الهجرة طلاب F-1 في الحفاظ على الوضع القانوني، وتمديد برامجهم، والانتقال إلى تصريح العمل أثناء متابعة أحلامهم التعليمية الأمريكية.",

      sections: [
        {
          heading: "فهم وضع الطالب F-1",
          content: "تأشيرة F-1 هي أكثر تأشيرات الطلاب شيوعاً للطلاب الدوليين الذين يتابعون دراسات أكاديمية بدوام كامل في الولايات المتحدة. كطالب F-1 في إرفاين، يجب عليك الحفاظ على وضعك من خلال:\n\n• الحفاظ على التسجيل بدوام كامل (12+ وحدة جامعية، 9+ وحدات دراسات عليا)\n• تحقيق تقدم طبيعي نحو شهادتك\n• الحفاظ على صلاحية I-20 وتحديثها\n• الإبلاغ عن تغييرات العنوان لمدرستك في غضون 10 أيام\n• عدم العمل بدون تصريح مناسب"
        },
        {
          heading: "متى تحتاج تمديد البرنامج",
          content: "قد يحتاج طلاب F-1 إلى تمديد برنامجهم لأسباب مشروعة مختلفة:",
          list: [
            "صعوبات أكاديمية تتطلب وقتاً إضافياً لإكمال الدرجة",
            "تغيير التخصص أو إضافة تخصص ثان",
            "أسباب طبية موثقة من طبيب",
            "التقدير الزمني الأولي كان قصيراً جداً",
            "ظروف غير متوقعة خارجة عن إرادتك",
            "البحث أو الأطروحة تستغرق وقتاً أطول من المتوقع"
          ]
        },
        {
          heading: "كيفية تمديد تاريخ انتهاء برنامج I-20",
          content: "تتضمن عملية التمديد العمل مع المسؤول المدرسي المعين (DSO):",
          steps: [
            {
              title: "اتصل بـ DSO مبكراً",
              description: "اطلب التمديد قبل 30 يوماً على الأقل من انتهاء I-20 الحالي"
            },
            {
              title: "قدم المبرر",
              description: "اشرح سبب الحاجة إلى وقت إضافي مع التوثيق"
            },
            {
              title: "أظهر الدعم المالي",
              description: "أثبت أنه يمكنك تمويل فترة الدراسة الممتدة"
            },
            {
              title: "DSO يصدر I-20 جديد",
              description: "إذا تمت الموافقة، استلم I-20 محدث بتاريخ انتهاء برنامج جديد"
            },
            {
              title: "حافظ على الوضع الصالح",
              description: "استمر في التسجيل بدوام كامل وجميع متطلبات F-1"
            }
          ]
        },
        {
          heading: "تمديد STEM OPT: 24 شهراً إضافياً",
          content: "طلاب STEM في UCI وكليات إرفاين لديهم مزايا خاصة:",
          list: [
            "تمديد 24 شهراً بالإضافة إلى OPT العادي لمدة 12 شهراً",
            "إجمالي 36 شهراً من تصريح العمل",
            "يجب العمل لدى صاحب عمل مسجل في E-Verify",
            "يجب تقديم I-765 لمدة 17 شهراً قبل انتهاء OPT الأولي",
            "خطة التدريب (نموذج I-983) مطلوبة",
            "رموز CIP المؤهلة تشمل الهندسة وعلوم الكمبيوتر والرياضيات والعلوم"
          ]
        },
        {
          heading: "تغيير برنامج F-1 أو المدرسة",
          content: "إذا كنت تريد تغيير مسارك التعليمي في إرفاين، لديك خيارات:",
          table: {
            headers: ["نوع التغيير", "المتطلبات", "الجدول الزمني"],
            rows: [
              ["النقل إلى مدرسة جديدة", "خطاب القبول، نقل SEVIS", "قبل تاريخ انتهاء البرنامج"],
              ["تغيير مستوى التعليم", "I-20 جديد من DSO", "التقديم أثناء الوضع الحالي"],
              ["إضافة تخصص ثان", "موافقة المدرسة، I-20 محدث", "أثناء البرنامج الحالي"],
              ["التغيير إلى تخصص جديد", "موافقة المدرسة، تمديد محتمل", "قبل انتهاء البرنامج"]
            ]
          }
        },
        {
          heading: "إعادة الوضع إذا فقدت الوضع القانوني",
          content: "إذا انتهكت وضع F-1 الخاص بك، قد تتمكن من إعادة الوضع:",
          list: [
            "قدم نموذج I-539 لطلب إعادة الوضع",
            "أظهر أن الانتهاك كان خارج إرادتك أو بسبب ظروف",
            "أثبت أنك تتابع حالياً دورة دراسية كاملة",
            "لم تشارك في توظيف غير مصرح به",
            "غير قابل للترحيل على أسس أخرى",
            "لا أكثر من 5 أشهر خارج الوضع (عموماً)"
          ]
        },
        {
          heading: "مشاكل وضع F-1 الشائعة في إرفاين",
          content: "نساعد الطلاب الدوليين في تجنب وحل هذه المشاكل الشائعة:",
          list: [
            "الانخفاض دون التسجيل بدوام كامل بدون تصريح",
            "العمل خارج الحرم الجامعي بدون تصريح عمل مناسب",
            "عدم الإبلاغ عن تغييرات العنوان في غضون 10 أيام",
            "I-20 منتهي الصلاحية بدون طلب تمديد في الوقت المناسب",
            "فجوة غير مصرح بها بين البرامج",
            "عدم الحفاظ على جواز سفر صالح",
            "تفويت مواعيد تقديم OPT"
          ]
        },
        {
          heading: "اعتبارات خاصة للطلاب العرب الدوليين",
          content: "فريقنا يفهم التحديات الفريدة التي يواجهها الطلاب من الشرق الأوسط في إرفاين:",
          list: [
            "تأخيرات المعالجة الإدارية لتجديد التأشيرة",
            "دعم التكيف الثقافي",
            "ترجمة الوثائق باللغة العربية",
            "التنسيق مع متطلبات بلد الأصل",
            "أسئلة تأشيرة زيارة العائلة",
            "فهم الثقافة الأكاديمية الأمريكية"
          ]
        },
        {
          heading: "تخطيط مسار الهجرة الخاص بك بعد التخرج",
          content: "طلاب F-1 لديهم عدة خيارات بعد إكمال دراستهم:",
          list: [
            "OPT (التدريب العملي الاختياري) - 12 شهراً من تصريح العمل",
            "تمديد STEM OPT - 24 شهراً إضافياً لخريجي STEM",
            "تأشيرة H-1B - تأشيرة عمل للمهن المتخصصة",
            "التغيير إلى وضع آخر - مثل وضع المعال، تأشيرة المستثمر",
            "العودة إلى الوطن بشهادة أمريكية - خبرة دولية قيمة",
            "التعليم الإضافي - برامج الماجستير أو الدكتوراه"
          ]
        }
      ],

      faqs: [
        {
          q: "متى يجب أن أطلب تمديد I-20؟",
          a: "اتصل بـ DSO قبل 30 يوماً على الأقل من تاريخ انتهاء برنامج I-20 الحالي. الأبكر أفضل، لأن العملية تستغرق وقتاً وتحتاج للحفاظ على الوضع الصالح."
        },
        {
          q: "هل يمكنني العمل أثناء تأشيرة F-1 في إرفاين؟",
          a: "يمكن لطلاب F-1 العمل داخل الحرم الجامعي حتى 20 ساعة أثناء الدراسة ودوام كامل خلال العطلات. العمل خارج الحرم يتطلب CPT أو OPT أو تصريح صعوبات اقتصادية شديدة."
        },
        {
          q: "ماذا لو أردت أخذ فصل دراسي عطلة؟",
          a: "أخذ إجازة بدون تصريح يمكن أن ينتهك وضعك. يجب أن تعمل مع DSO للحصول على إجازة مصرح بها أو إكمال انسحاب من البرنامج ومغادرة صحيحة."
        },
        {
          q: "كم يمكنني البقاء في الولايات المتحدة بعد التخرج؟",
          a: "لديك فترة سماح 60 يوماً بعد إكمال البرنامج. إذا تقدمت بطلب OPT قبل التخرج، يمكنك البقاء أثناء انتظار طلبك وخلال فترة OPT."
        },
        {
          q: "هل يمكنني السفر خارج الولايات المتحدة بتأشيرة F-1؟",
          a: "نعم، مع I-20 صالح موقع للسفر (خلال سنة واحدة)، ختم تأشيرة صالح (أو جنسية معفاة من التأشيرة)، جواز سفر صالح، وإثبات التسجيل."
        },
        {
          q: "ماذا يحدث إذا انتهت صلاحية ختم التأشيرة؟",
          a: "يمكنك البقاء في الولايات المتحدة مع ختم تأشيرة منتهي الصلاحية طالما أن وضع F-1 الخاص بك صالح. ومع ذلك، ستحتاج ختماً جديداً لإعادة الدخول إلى الولايات المتحدة بعد السفر للخارج."
        }
      ],

      cta: {
        title: "احم وضع الطالب F-1 الخاص بك",
        text: "لا تخاطر بتعليمك ومستقبلك في الهجرة. فريقنا يساعد الطلاب الدوليين في إرفاين على الحفاظ على الوضع والتخطيط للنجاح.",
        button: "جدولة استشارة الطالب"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default F1StudentVisaIrvine;
