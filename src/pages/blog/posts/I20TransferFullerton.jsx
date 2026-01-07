import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const I20TransferFullerton = ({ language }) => {
  const content = {
    en: {
      slug: "i20-transfer-f1-students-fullerton",
      title: "I-20 Transfer Guide for F-1 Students in Fullerton",
      subtitle: "How to successfully transfer your SEVIS record between schools while maintaining F-1 status",
      metaTitle: "I-20 Transfer Fullerton | F-1 Student Transfer | SEVIS Transfer Guide",
      metaDescription: "Complete guide to I-20 transfers for F-1 students in Fullerton and Orange County. SEVIS transfer process, timelines, maintaining status. Call (714) 421-8872.",
      keywords: "I-20 transfer Fullerton, F-1 student transfer, SEVIS transfer, change schools F-1, international student transfer, student visa transfer",
      category: "Student Visas",
      location: "Fullerton",
      date: "January 7, 2026",
      readTime: "10 min read",
      author: "SoCal Immigration Services",
      locationIntro: "Fullerton is home to California State University Fullerton and Fullerton College, making it a hub for international students on F-1 visas. Whether you're transferring from another school or planning to move to a different institution, understanding the I-20 transfer process is essential to maintaining your legal status. SoCal Immigration Services helps F-1 students navigate the transfer process successfully.",

      sections: [
        {
          heading: "What is an I-20 Transfer?",
          content: "An I-20 transfer (officially called a SEVIS transfer) is the process of moving your Student and Exchange Visitor Information System (SEVIS) record from your current school to a new school. Your SEVIS record contains all your F-1 status information and must be properly transferred when changing schools.\n\nImportant: You don't physically 'transfer' your I-20 document. Instead, your SEVIS record is electronically transferred, and your new school issues you a new I-20."
        },
        {
          heading: "When Can You Transfer?",
          content: "F-1 students can transfer under these circumstances:",
          list: [
            "After completing a program and wanting to start a new one",
            "Changing schools before completing your current program",
            "Moving from a language program to a degree program",
            "Transferring from community college to university",
            "Changing to a different school due to academic or personal reasons",
            "After initial entry if admitted to multiple schools"
          ]
        },
        {
          heading: "Transfer Timeline Overview",
          content: "Understanding the timeline is critical for a successful transfer:",
          table: {
            headers: ["Stage", "Timing"],
            rows: [
              ["Accept New School Admission", "Before requesting transfer release"],
              ["Request Transfer Release", "After final term at current school begins"],
              ["SEVIS Release Date", "Can be set up to 5 months in advance"],
              ["Enroll at New School", "Within 5 months of transfer release"],
              ["Report to New DSO", "Within 15 days of program start date"],
              ["Start Classes", "By the program start date on new I-20"]
            ]
          }
        },
        {
          heading: "Step-by-Step Transfer Process",
          content: "Follow these steps to transfer your I-20:",
          steps: [
            {
              title: "Apply and Get Accepted",
              description: "Apply to your new school and receive admission. Make sure the school is SEVP-certified to issue I-20s."
            },
            {
              title: "Request Transfer at New School",
              description: "Contact the new school's international student office and request an I-20 transfer. Provide your current SEVIS ID number."
            },
            {
              title: "Request Transfer Release",
              description: "Ask your current school's DSO to release your SEVIS record. This is typically done after your final term begins."
            },
            {
              title: "SEVIS Record Released",
              description: "Your current school releases your record on the agreed date. You must maintain status until release."
            },
            {
              title: "New School Issues I-20",
              description: "Once transferred, your new school issues you a new I-20 with their information."
            },
            {
              title: "Report to New School",
              description: "Report to your new school's international student office within 15 days of your program start date."
            }
          ]
        },
        {
          heading: "Required Documents for Transfer",
          content: "Prepare these documents for the transfer process:",
          list: [
            "Current I-20 from your existing school",
            "Admission letter from new school",
            "Valid passport (at least 6 months validity)",
            "Current F-1 visa stamp (if traveling)",
            "Financial documents showing ability to pay",
            "Academic transcripts",
            "Transfer eligibility form (if required by current school)",
            "SEVIS ID number"
          ]
        },
        {
          heading: "Maintaining Status During Transfer",
          content: "You must maintain valid F-1 status throughout the transfer process:\n\n• Continue Full Course of Study: Maintain full-time enrollment until your release date\n\n• Don't Work Without Authorization: CPT/OPT ends when you transfer\n\n• 5-Month Rule: You must enroll at your new school within 5 months of your release date\n\n• No Status Gaps: Your SEVIS record should not have gaps in active status\n\n• Keep Documents: Maintain all immigration documents during the process"
        },
        {
          heading: "Transfer During OPT",
          content: "Transferring while on OPT has special considerations:\n\n• Pre-Completion OPT: Ends when you transfer to a new school\n\n• Post-Completion OPT: You cannot transfer during post-completion OPT without losing it\n\n• STEM OPT Extension: Lost if you transfer before completion\n\n• Return to School: If you want to continue studying after OPT, you'll need a new I-20 and to begin a new program\n\nCarefully consider whether transfer or completing OPT serves your goals better."
        },
        {
          heading: "Transfer vs. Change of Status",
          content: "Understand the difference between these processes:",
          table: {
            headers: ["Transfer", "Change of Status"],
            rows: [
              ["Same visa category (F-1 to F-1)", "Different visa category (e.g., B-2 to F-1)"],
              ["Handled between schools", "Requires USCIS application"],
              ["No USCIS filing fee", "Filing fee required"],
              ["Processed through SEVIS", "Processed through USCIS"],
              ["Typically takes weeks", "Can take months"],
              ["Maintains current status", "Requesting new status"]
            ]
          }
        },
        {
          heading: "Common Transfer Scenarios",
          content: "Here are typical transfer situations F-1 students face:",
          list: [
            "Community college to 4-year university (most common)",
            "One university to another university",
            "ESL program to degree program",
            "Undergraduate to graduate school (after completing undergrad)",
            "School closure requiring transfer",
            "Academic difficulties requiring transfer",
            "Personal/family reasons for relocating"
          ]
        },
        {
          heading: "Working During and After Transfer",
          content: "Work authorization during transfer:\n\n• On-Campus Employment: Ends at your current school; can begin at new school after enrollment\n\n• CPT: Must apply fresh at new school; previous CPT does not transfer\n\n• OPT: Cannot transfer; must complete at current school or forfeit\n\n• Economic Hardship: Must reapply at new school if needed\n\nAlways verify work authorization with your new school's DSO before starting any employment."
        },
        {
          heading: "Transfer for Graduate School",
          content: "Transferring for graduate studies has unique considerations:\n\n• Complete Bachelor's First: You must complete your undergraduate degree before starting graduate school\n\n• OPT Between: You can use OPT between degrees but lose it if you transfer to grad school\n\n• New I-20: You'll receive a new I-20 reflecting graduate-level study\n\n• Higher Tuition: Be prepared to show additional financial support for graduate programs"
        },
        {
          heading: "What Can Go Wrong",
          content: "Avoid these common transfer mistakes:",
          list: [
            "Not enrolling within 5 months of transfer release",
            "Stopping attendance before release date",
            "Working without proper authorization during transfer",
            "Not reporting to new school within 15 days",
            "Transferring to non-SEVP certified school",
            "Not maintaining full course load before transfer",
            "Missing registration deadlines at new school",
            "Not updating address in SEVIS"
          ]
        }
      ],

      faqs: [
        {
          q: "Do I need a new visa stamp to transfer schools?",
          a: "No, you don't automatically need a new visa stamp just to transfer schools. Your F-1 visa remains valid until its expiration date. However, if you travel outside the U.S., you'll need your new I-20 from the transfer school, and consular officers may ask about the transfer."
        },
        {
          q: "How long does the I-20 transfer process take?",
          a: "The SEVIS transfer itself is nearly instant once your current school releases your record. However, the overall process - from applying to a new school to receiving your new I-20 - typically takes 2-8 weeks depending on school processing times."
        },
        {
          q: "Can I transfer if I'm out of status?",
          a: "If you're out of status, you cannot do a regular transfer. You would need to either apply for reinstatement with USCIS or leave the U.S. and obtain a new F-1 visa. Consult with a DSO or immigration attorney immediately if you're out of status."
        },
        {
          q: "Can I transfer in the middle of a semester?",
          a: "While possible, mid-semester transfers are unusual and may complicate things. Most transfers occur at the end of a semester or academic year. Your current school may have policies about when they'll release your SEVIS record."
        },
        {
          q: "What happens to my SEVIS record if I don't enroll at the new school?",
          a: "If you don't enroll within 5 months of your transfer release date, your SEVIS record will be terminated, and you'll fall out of status. You would then need to leave the U.S. or seek reinstatement."
        },
        {
          q: "Can I work while my transfer is processing?",
          a: "Your work authorization is tied to your school. On-campus work at your current school can continue until your release date. After release, you cannot work until you're enrolled and registered at your new school and have obtained new work authorization if applicable."
        }
      ],

      cta: {
        title: "Need Help with Your I-20 Transfer?",
        text: "Our team helps F-1 students in Fullerton and Orange County navigate the transfer process successfully while maintaining valid status.",
        button: "Schedule Student Consultation"
      }
    },
    ar: {
      slug: "i20-transfer-f1-students-fullerton",
      title: "دليل نقل I-20 لطلاب F-1 في فوليرتون",
      subtitle: "كيفية نقل سجل SEVIS بنجاح بين المدارس مع الحفاظ على وضع F-1",
      metaTitle: "نقل I-20 فوليرتون | نقل طالب F-1 | دليل نقل SEVIS",
      metaDescription: "دليل شامل لنقل I-20 لطلاب F-1 في فوليرتون ومقاطعة أورانج. عملية نقل SEVIS، الجداول الزمنية، الحفاظ على الوضع. اتصل (714) 421-8872.",
      keywords: "نقل I-20 فوليرتون، نقل طالب F-1، نقل SEVIS، تغيير المدارس F-1، نقل الطالب الدولي",
      category: "تأشيرات الطلاب",
      location: "فوليرتون",
      date: "7 يناير 2026",
      readTime: "10 دقيقة قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "فوليرتون هي موطن لجامعة ولاية كاليفورنيا فوليرتون وكلية فوليرتون، مما يجعلها مركزًا للطلاب الدوليين على تأشيرات F-1. سواء كنت تنتقل من مدرسة أخرى أو تخطط للانتقال إلى مؤسسة مختلفة، فإن فهم عملية نقل I-20 أمر ضروري للحفاظ على وضعك القانوني. تساعد خدمات حلول الهجرة طلاب F-1 في التنقل في عملية النقل بنجاح.",

      sections: [
        {
          heading: "ما هو نقل I-20؟",
          content: "نقل I-20 (يُسمى رسميًا نقل SEVIS) هو عملية نقل سجل نظام معلومات الطلاب والزوار (SEVIS) من مدرستك الحالية إلى مدرسة جديدة. يحتوي سجل SEVIS الخاص بك على جميع معلومات وضع F-1 ويجب نقله بشكل صحيح عند تغيير المدارس.\n\nمهم: أنت لا تنقل فعليًا وثيقة I-20 الخاصة بك. بدلاً من ذلك، يُنقل سجل SEVIS إلكترونيًا، وتصدر لك مدرستك الجديدة I-20 جديدًا."
        },
        {
          heading: "متى يمكنك النقل؟",
          content: "يمكن لطلاب F-1 النقل في هذه الظروف:",
          list: [
            "بعد إكمال برنامج والرغبة في بدء برنامج جديد",
            "تغيير المدارس قبل إكمال برنامجك الحالي",
            "الانتقال من برنامج لغوي إلى برنامج درجة",
            "النقل من كلية مجتمعية إلى جامعة",
            "التغيير إلى مدرسة مختلفة لأسباب أكاديمية أو شخصية",
            "بعد الدخول الأولي إذا قُبلت في مدارس متعددة"
          ]
        },
        {
          heading: "نظرة عامة على الجدول الزمني للنقل",
          content: "فهم الجدول الزمني أمر حاسم لنقل ناجح:",
          table: {
            headers: ["المرحلة", "التوقيت"],
            rows: [
              ["قبول قبول المدرسة الجديدة", "قبل طلب إفراج النقل"],
              ["طلب إفراج النقل", "بعد بدء الفصل الأخير في المدرسة الحالية"],
              ["تاريخ إفراج SEVIS", "يمكن تحديده حتى 5 أشهر مقدمًا"],
              ["التسجيل في المدرسة الجديدة", "خلال 5 أشهر من إفراج النقل"],
              ["الإبلاغ لـ DSO الجديد", "خلال 15 يومًا من تاريخ بدء البرنامج"],
              ["بدء الدراسة", "بحلول تاريخ بدء البرنامج على I-20 الجديد"]
            ]
          }
        },
        {
          heading: "عملية النقل خطوة بخطوة",
          content: "اتبع هذه الخطوات لنقل I-20:",
          steps: [
            {
              title: "تقدم واحصل على القبول",
              description: "تقدم إلى مدرستك الجديدة واحصل على القبول. تأكد من أن المدرسة معتمدة من SEVP لإصدار I-20s."
            },
            {
              title: "اطلب النقل في المدرسة الجديدة",
              description: "اتصل بمكتب الطلاب الدوليين في المدرسة الجديدة واطلب نقل I-20. قدم رقم SEVIS ID الحالي."
            },
            {
              title: "اطلب إفراج النقل",
              description: "اطلب من DSO مدرستك الحالية إفراج سجل SEVIS الخاص بك. يتم هذا عادةً بعد بدء فصلك الأخير."
            },
            {
              title: "إفراج سجل SEVIS",
              description: "تُفرج مدرستك الحالية عن سجلك في التاريخ المتفق عليه. يجب الحفاظ على الوضع حتى الإفراج."
            },
            {
              title: "إصدار المدرسة الجديدة I-20",
              description: "بمجرد النقل، تصدر لك مدرستك الجديدة I-20 جديدًا بمعلوماتها."
            },
            {
              title: "الإبلاغ للمدرسة الجديدة",
              description: "أبلغ مكتب الطلاب الدوليين في مدرستك الجديدة خلال 15 يومًا من تاريخ بدء برنامجك."
            }
          ]
        },
        {
          heading: "الوثائق المطلوبة للنقل",
          content: "جهز هذه الوثائق لعملية النقل:",
          list: [
            "I-20 الحالي من مدرستك الحالية",
            "خطاب القبول من المدرسة الجديدة",
            "جواز سفر ساري المفعول (صالح لمدة 6 أشهر على الأقل)",
            "ختم تأشيرة F-1 الحالي (إذا كنت مسافرًا)",
            "وثائق مالية تظهر القدرة على الدفع",
            "كشوف الدرجات الأكاديمية",
            "نموذج أهلية النقل (إذا طلبته المدرسة الحالية)",
            "رقم SEVIS ID"
          ]
        },
        {
          heading: "الحفاظ على الوضع أثناء النقل",
          content: "يجب الحفاظ على وضع F-1 صالح طوال عملية النقل:\n\n• استمر في الدراسة بدوام كامل: حافظ على التسجيل بدوام كامل حتى تاريخ الإفراج\n\n• لا تعمل بدون إذن: ينتهي CPT/OPT عند النقل\n\n• قاعدة الـ 5 أشهر: يجب التسجيل في مدرستك الجديدة خلال 5 أشهر من تاريخ الإفراج\n\n• لا فجوات في الوضع: يجب ألا يكون لسجل SEVIS فجوات في الوضع النشط\n\n• احتفظ بالوثائق: حافظ على جميع وثائق الهجرة أثناء العملية"
        },
        {
          heading: "النقل أثناء OPT",
          content: "النقل أثناء OPT له اعتبارات خاصة:\n\n• OPT قبل الإكمال: ينتهي عند النقل إلى مدرسة جديدة\n\n• OPT بعد الإكمال: لا يمكنك النقل أثناء OPT بعد الإكمال دون فقدانه\n\n• تمديد STEM OPT: يُفقد إذا نقلت قبل الإكمال\n\n• العودة للدراسة: إذا أردت متابعة الدراسة بعد OPT، ستحتاج I-20 جديد وبدء برنامج جديد\n\nفكر بعناية فيما إذا كان النقل أو إكمال OPT يخدم أهدافك بشكل أفضل."
        },
        {
          heading: "النقل مقابل تغيير الوضع",
          content: "افهم الفرق بين هذه العمليات:",
          table: {
            headers: ["النقل", "تغيير الوضع"],
            rows: [
              ["نفس فئة التأشيرة (F-1 إلى F-1)", "فئة تأشيرة مختلفة (مثل B-2 إلى F-1)"],
              ["يُعالج بين المدارس", "يتطلب طلبًا لـ USCIS"],
              ["لا رسوم تقديم USCIS", "رسوم تقديم مطلوبة"],
              ["يُعالج عبر SEVIS", "يُعالج عبر USCIS"],
              ["يستغرق عادةً أسابيع", "يمكن أن يستغرق أشهر"],
              ["يحافظ على الوضع الحالي", "يطلب وضعًا جديدًا"]
            ]
          }
        },
        {
          heading: "سيناريوهات النقل الشائعة",
          content: "إليك حالات النقل النموذجية التي يواجهها طلاب F-1:",
          list: [
            "من كلية مجتمعية إلى جامعة 4 سنوات (الأكثر شيوعًا)",
            "من جامعة إلى جامعة أخرى",
            "من برنامج ESL إلى برنامج درجة",
            "من البكالوريوس إلى الدراسات العليا (بعد إكمال البكالوريوس)",
            "إغلاق المدرسة يتطلب النقل",
            "صعوبات أكاديمية تتطلب النقل",
            "أسباب شخصية/عائلية للانتقال"
          ]
        },
        {
          heading: "العمل أثناء وبعد النقل",
          content: "إذن العمل أثناء النقل:\n\n• التوظيف داخل الحرم: ينتهي في مدرستك الحالية؛ يمكن أن يبدأ في المدرسة الجديدة بعد التسجيل\n\n• CPT: يجب التقدم من جديد في المدرسة الجديدة؛ CPT السابق لا يُنقل\n\n• OPT: لا يمكن نقله؛ يجب الإكمال في المدرسة الحالية أو فقدانه\n\n• الصعوبة الاقتصادية: يجب إعادة التقديم في المدرسة الجديدة إذا لزم الأمر\n\nتحقق دائمًا من إذن العمل مع DSO مدرستك الجديدة قبل بدء أي عمل."
        },
        {
          heading: "النقل للدراسات العليا",
          content: "النقل للدراسات العليا له اعتبارات فريدة:\n\n• أكمل البكالوريوس أولاً: يجب إكمال درجة البكالوريوس قبل بدء الدراسات العليا\n\n• OPT بينهما: يمكنك استخدام OPT بين الدرجات لكن تفقده إذا نقلت للدراسات العليا\n\n• I-20 جديد: ستحصل على I-20 جديد يعكس الدراسة على مستوى الدراسات العليا\n\n• رسوم دراسية أعلى: كن مستعدًا لإظهار دعم مالي إضافي لبرامج الدراسات العليا"
        },
        {
          heading: "ما يمكن أن يحدث خطأ",
          content: "تجنب هذه الأخطاء الشائعة في النقل:",
          list: [
            "عدم التسجيل خلال 5 أشهر من إفراج النقل",
            "التوقف عن الحضور قبل تاريخ الإفراج",
            "العمل بدون إذن مناسب أثناء النقل",
            "عدم الإبلاغ للمدرسة الجديدة خلال 15 يومًا",
            "النقل إلى مدرسة غير معتمدة من SEVP",
            "عدم الحفاظ على حمل دراسي كامل قبل النقل",
            "تفويت مواعيد التسجيل في المدرسة الجديدة",
            "عدم تحديث العنوان في SEVIS"
          ]
        }
      ],

      faqs: [
        {
          q: "هل أحتاج ختم تأشيرة جديد لنقل المدارس؟",
          a: "لا، لا تحتاج تلقائيًا ختم تأشيرة جديد فقط لنقل المدارس. تظل تأشيرة F-1 صالحة حتى تاريخ انتهائها. ومع ذلك، إذا سافرت خارج الولايات المتحدة، ستحتاج I-20 الجديد من مدرسة النقل، وقد يسأل موظفو القنصلية عن النقل."
        },
        {
          q: "كم تستغرق عملية نقل I-20؟",
          a: "نقل SEVIS نفسه فوري تقريبًا بمجرد إفراج مدرستك الحالية عن سجلك. ومع ذلك، العملية الإجمالية - من التقديم لمدرسة جديدة إلى استلام I-20 الجديد - تستغرق عادةً 2-8 أسابيع حسب أوقات معالجة المدرسة."
        },
        {
          q: "هل يمكنني النقل إذا كنت خارج الوضع؟",
          a: "إذا كنت خارج الوضع، لا يمكنك إجراء نقل عادي. ستحتاج إما التقدم لإعادة الوضع مع USCIS أو مغادرة الولايات المتحدة والحصول على تأشيرة F-1 جديدة. استشر DSO أو محامي هجرة فورًا إذا كنت خارج الوضع."
        },
        {
          q: "هل يمكنني النقل في منتصف الفصل الدراسي؟",
          a: "رغم أنه ممكن، إلا أن النقل في منتصف الفصل غير معتاد وقد يعقد الأمور. تحدث معظم التحويلات في نهاية الفصل أو السنة الأكاديمية. قد يكون لمدرستك الحالية سياسات حول متى تُفرج عن سجل SEVIS."
        },
        {
          q: "ماذا يحدث لسجل SEVIS إذا لم أسجل في المدرسة الجديدة؟",
          a: "إذا لم تسجل خلال 5 أشهر من تاريخ إفراج النقل، سيُنهى سجل SEVIS الخاص بك، وستخرج من الوضع. ستحتاج حينها لمغادرة الولايات المتحدة أو طلب إعادة الوضع."
        },
        {
          q: "هل يمكنني العمل أثناء معالجة نقلي؟",
          a: "إذن عملك مرتبط بمدرستك. يمكن أن يستمر العمل داخل الحرم في مدرستك الحالية حتى تاريخ الإفراج. بعد الإفراج، لا يمكنك العمل حتى تكون مسجلاً في مدرستك الجديدة وتحصل على إذن عمل جديد إن أمكن."
        }
      ],

      cta: {
        title: "هل تحتاج مساعدة في نقل I-20؟",
        text: "يساعد فريقنا طلاب F-1 في فوليرتون ومقاطعة أورانج في التنقل في عملية النقل بنجاح مع الحفاظ على وضع صالح.",
        button: "جدول استشارة طالب"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default I20TransferFullerton;
