import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const ComboCardEADSanDiego = ({ language }) => {
  const content = {
    en: {
      slug: "combo-card-ead-advance-parole-san-diego",
      title: "Combo Card (EAD + Advance Parole) Guide for San Diego Applicants",
      subtitle: "Understanding the combined work permit and travel document for adjustment of status applicants",
      metaTitle: "Combo Card San Diego | EAD Advance Parole | Work Permit Travel Document",
      metaDescription: "Guide to the Combo Card (EAD + Advance Parole) for San Diego green card applicants. Work authorization and travel benefits combined. Arabic support. Call (714) 421-8872.",
      keywords: "combo card San Diego, EAD advance parole, work permit travel document, I-765 I-131, adjustment of status EAD, green card work permit",
      category: "Work Authorization",
      location: "San Diego",
      date: "January 7, 2026",
      readTime: "10 min read",
      author: "SoCal Immigration Services",
      locationIntro: "For San Diego residents applying for a green card through adjustment of status, the Combo Card offers significant benefits by combining work authorization and travel permission into a single document. SoCal Immigration Services helps clients understand and obtain this valuable document while their green card application is pending.",

      sections: [
        {
          heading: "What is a Combo Card?",
          content: "A Combo Card is a single document that combines two important immigration benefits:\n\n• Employment Authorization Document (EAD): Permission to work legally in the United States\n\n• Advance Parole: Permission to travel internationally and return to the U.S. while your green card application is pending\n\nThe Combo Card simplifies the process by eliminating the need to carry two separate documents and typically arrives faster than applying for each document separately."
        },
        {
          heading: "Who Can Apply for a Combo Card?",
          content: "The Combo Card is available to applicants in specific categories:",
          list: [
            "I-485 Adjustment of Status applicants (most common)",
            "Asylum applicants with pending applications",
            "Certain parolees applying for adjustment",
            "VAWA self-petitioners with pending I-485",
            "U-visa applicants in certain situations",
            "Applicants under the Cuban Adjustment Act",
            "Registry applicants under INA 249"
          ]
        },
        {
          heading: "Benefits of the Combo Card",
          content: "The Combo Card offers several advantages over separate EAD and Advance Parole documents:",
          table: {
            headers: ["Benefit", "Description"],
            rows: [
              ["Single Document", "One card instead of two separate documents"],
              ["Faster Processing", "Often processed quicker than separate applications"],
              ["Cost Savings", "No separate filing fees for I-485-based applicants"],
              ["Less Paperwork", "One set of supporting documents instead of two"],
              ["Travel Flexibility", "Can travel internationally without abandoning your case"],
              ["Work Authorization", "Legal permission to work for any employer"],
              ["Valid for 2 Years", "Typically valid for 2 years (as of recent policy changes)"]
            ]
          }
        },
        {
          heading: "How to Apply for a Combo Card",
          content: "Follow these steps to apply for your Combo Card:",
          steps: [
            {
              title: "File I-485",
              description: "First, you must have a pending I-485 Adjustment of Status application."
            },
            {
              title: "File I-765 (EAD)",
              description: "Submit Form I-765 for Employment Authorization. Select category (c)(9) for adjustment applicants."
            },
            {
              title: "File I-131 (Advance Parole)",
              description: "Submit Form I-131 for Advance Parole. You can file this with your I-485 or separately."
            },
            {
              title: "Submit Together",
              description: "For fastest processing, file I-765 and I-131 together. USCIS will issue a combo card combining both."
            },
            {
              title: "Biometrics Appointment",
              description: "Attend your biometrics appointment at the local ASC when scheduled."
            },
            {
              title: "Receive Combo Card",
              description: "Your Combo Card will be mailed to you, typically within 3-6 months."
            }
          ]
        },
        {
          heading: "Required Documents",
          content: "Gather these documents for your Combo Card application:",
          list: [
            "Form I-765, Application for Employment Authorization",
            "Form I-131, Application for Travel Document",
            "Copy of I-485 receipt notice",
            "Copy of valid passport (photo page)",
            "Two passport-style photos",
            "Copy of current immigration status document (visa, I-94)",
            "Copy of any previous EAD (if applicable)",
            "Copy of marriage certificate (if applying through spouse)"
          ]
        },
        {
          heading: "Important Travel Warnings",
          content: "Before traveling with your Combo Card, understand these critical rules:\n\n• Advance Parole is NOT a visa: You may still be questioned at the border and can be denied entry\n\n• Certain Visas: If you entered on K-1 fiancé(e) or K-3 spouse visa, travel risks are lower\n\n• H-1B and L-1: If you have valid H or L status, traveling on Advance Parole may abandon that status\n\n• Unlawful Presence: If you had unlawful presence before filing I-485, traveling may trigger bars to reentry\n\n• Pending Asylum: Traveling while asylum is pending can be seen as abandoning your claim\n\nAlways consult with an immigration professional before traveling with Advance Parole."
        },
        {
          heading: "Processing Times in San Diego",
          content: "Combo Card processing times vary but here are typical expectations:\n\n• Current Processing: Approximately 3-6 months from filing\n\n• Biometrics: Usually scheduled 3-6 weeks after filing\n\n• Expedite Available: Emergency expedite requests possible in certain situations\n\n• Online Filing: Filing online through a USCIS account may result in faster processing\n\n• Automatic Extension: Recent policies provide automatic extensions for renewal applications"
        },
        {
          heading: "Using Your Combo Card for Work",
          content: "Your Combo Card authorizes employment with any U.S. employer:",
          list: [
            "Show the card to your employer for I-9 verification",
            "The card serves as a List A document (proves both identity and work authorization)",
            "You can work for any employer - not restricted to a specific job",
            "Self-employment is also permitted",
            "Note the expiration date and plan to renew before it expires",
            "Your Social Security card should say 'Valid for work with DHS authorization'"
          ]
        },
        {
          heading: "Traveling with Your Combo Card",
          content: "When using your Combo Card for international travel:\n\n• Carry Your Card: Always have your Combo Card when traveling\n\n• Bring I-485 Receipt: Carry the receipt notice for your pending adjustment case\n\n• Passport Required: You still need a valid passport from your country\n\n• Re-entry Process: At the port of entry, present your Combo Card and passport\n\n• CBP Interview: Be prepared to answer questions about your trip and pending application\n\n• Keep Trips Short: Extended trips may raise questions about immigrant intent"
        },
        {
          heading: "Renewing Your Combo Card",
          content: "If your green card case is still pending when your Combo Card expires:\n\n• File Early: Submit renewal applications 6 months before expiration\n\n• Automatic Extension: EAD portion may be automatically extended up to 540 days if filed timely\n\n• Same Forms: Use the same I-765 and I-131 forms for renewal\n\n• No Fee: I-485-based applicants generally don't pay fees for renewals\n\n• Keep Working: With automatic extension, you can continue working while renewal is pending"
        },
        {
          heading: "When You Shouldn't Travel",
          content: "Avoid international travel in these situations:",
          list: [
            "You have a pending asylum application (may be seen as abandonment)",
            "You accrued unlawful presence before filing I-485",
            "You have a criminal history that could affect admissibility",
            "Your I-485 interview has been scheduled",
            "You entered without inspection and don't qualify for 245(i)",
            "You're unsure of your immigration history",
            "Your passport is expired or will expire during travel"
          ]
        }
      ],

      faqs: [
        {
          q: "Is there a fee for the Combo Card if I'm filing with I-485?",
          a: "No, if you're filing I-765 and I-131 based on a pending I-485 adjustment application, there is no additional filing fee. The fees are included in the I-485 filing fee. This applies to initial applications and renewals."
        },
        {
          q: "How long is the Combo Card valid?",
          a: "Currently, Combo Cards are typically issued with 2-year validity. This changed from the previous 1-year validity, giving applicants more time before needing to renew."
        },
        {
          q: "Can I travel multiple times with Advance Parole?",
          a: "Yes, Advance Parole allows unlimited trips during its validity period. However, each time you return, you'll go through inspection at the port of entry. Extended or frequent trips may raise questions."
        },
        {
          q: "What if my Combo Card expires before my green card is approved?",
          a: "You should file for renewal about 6 months before expiration. Under current rules, the EAD portion is automatically extended for up to 540 days if you file a timely renewal. The Advance Parole portion is not automatically extended."
        },
        {
          q: "Can I use the Combo Card as ID for other purposes?",
          a: "The Combo Card can be used for employment verification (I-9) and as proof of immigration status. However, for general ID purposes (like TSA), you'll typically need your passport or state ID."
        },
        {
          q: "What happens if I lose my Combo Card?",
          a: "You'll need to file a replacement application using the same I-765 and I-131 forms. For I-485-based applicants, there's generally no fee for replacement. Keep copies of your card in a safe place."
        }
      ],

      cta: {
        title: "Get Help with Your Combo Card Application",
        text: "Our San Diego team helps adjustment of status applicants obtain their Combo Card quickly and correctly. We ensure your applications are properly filed for the best results.",
        button: "Schedule Consultation"
      }
    },
    ar: {
      slug: "combo-card-ead-advance-parole-san-diego",
      title: "دليل البطاقة المدمجة (EAD + إذن السفر المسبق) لمتقدمي سان دييغو",
      subtitle: "فهم تصريح العمل ووثيقة السفر المدمجة لمتقدمي تعديل الوضع",
      metaTitle: "البطاقة المدمجة سان دييغو | EAD إذن السفر المسبق | تصريح العمل وثيقة السفر",
      metaDescription: "دليل البطاقة المدمجة (EAD + إذن السفر المسبق) لمتقدمي البطاقة الخضراء في سان دييغو. إذن العمل والسفر مجتمعان. دعم بالعربية. اتصل (714) 421-8872.",
      keywords: "البطاقة المدمجة سان دييغو، EAD إذن السفر المسبق، تصريح العمل وثيقة السفر، تعديل الوضع EAD",
      category: "إذن العمل",
      location: "سان دييغو",
      date: "7 يناير 2026",
      readTime: "10 دقيقة قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "لسكان سان دييغو المتقدمين للحصول على بطاقة خضراء من خلال تعديل الوضع، تقدم البطاقة المدمجة فوائد كبيرة من خلال الجمع بين إذن العمل وإذن السفر في وثيقة واحدة. تساعد خدمات حلول الهجرة العملاء على فهم والحصول على هذه الوثيقة القيمة أثناء انتظار طلب البطاقة الخضراء.",

      sections: [
        {
          heading: "ما هي البطاقة المدمجة؟",
          content: "البطاقة المدمجة هي وثيقة واحدة تجمع بين فائدتين هجريتين مهمتين:\n\n• وثيقة إذن العمل (EAD): إذن للعمل بشكل قانوني في الولايات المتحدة\n\n• إذن السفر المسبق: إذن للسفر دوليًا والعودة إلى الولايات المتحدة أثناء انتظار طلب البطاقة الخضراء\n\nتبسط البطاقة المدمجة العملية من خلال إلغاء الحاجة لحمل وثيقتين منفصلتين وعادةً ما تصل أسرع من التقدم لكل وثيقة على حدة."
        },
        {
          heading: "من يمكنه التقدم للبطاقة المدمجة؟",
          content: "البطاقة المدمجة متاحة للمتقدمين في فئات محددة:",
          list: [
            "متقدمو تعديل الوضع I-485 (الأكثر شيوعًا)",
            "متقدمو اللجوء بطلبات معلقة",
            "بعض المفرج عنهم المتقدمين للتعديل",
            "مقدمو عرائض VAWA الذاتية مع I-485 معلق",
            "متقدمو تأشيرة U في حالات معينة",
            "المتقدمون بموجب قانون التعديل الكوبي",
            "متقدمو السجل بموجب INA 249"
          ]
        },
        {
          heading: "فوائد البطاقة المدمجة",
          content: "تقدم البطاقة المدمجة عدة مزايا عن وثائق EAD وإذن السفر المسبق المنفصلة:",
          table: {
            headers: ["الفائدة", "الوصف"],
            rows: [
              ["وثيقة واحدة", "بطاقة واحدة بدلاً من وثيقتين منفصلتين"],
              ["معالجة أسرع", "غالبًا ما تُعالج أسرع من الطلبات المنفصلة"],
              ["توفير التكاليف", "لا رسوم تقديم منفصلة للمتقدمين على أساس I-485"],
              ["أوراق أقل", "مجموعة واحدة من الوثائق الداعمة بدلاً من اثنتين"],
              ["مرونة السفر", "يمكن السفر دوليًا دون التخلي عن قضيتك"],
              ["إذن العمل", "إذن قانوني للعمل لأي صاحب عمل"],
              ["صالح لمدة سنتين", "صالح عادةً لمدة سنتين (وفقًا لتغييرات السياسة الأخيرة)"]
            ]
          }
        },
        {
          heading: "كيفية التقدم للبطاقة المدمجة",
          content: "اتبع هذه الخطوات للتقدم للبطاقة المدمجة:",
          steps: [
            {
              title: "قدم I-485",
              description: "أولاً، يجب أن يكون لديك طلب تعديل وضع I-485 معلق."
            },
            {
              title: "قدم I-765 (EAD)",
              description: "قدم نموذج I-765 لإذن العمل. اختر الفئة (c)(9) لمتقدمي التعديل."
            },
            {
              title: "قدم I-131 (إذن السفر المسبق)",
              description: "قدم نموذج I-131 لإذن السفر المسبق. يمكنك تقديم هذا مع I-485 أو بشكل منفصل."
            },
            {
              title: "قدم معًا",
              description: "للمعالجة الأسرع، قدم I-765 و I-131 معًا. ستصدر USCIS بطاقة مدمجة تجمع كليهما."
            },
            {
              title: "موعد القياسات الحيوية",
              description: "احضر موعد القياسات الحيوية في ASC المحلي عند الجدولة."
            },
            {
              title: "استلام البطاقة المدمجة",
              description: "ستُرسل بطاقتك المدمجة إليك بالبريد، عادةً خلال 3-6 أشهر."
            }
          ]
        },
        {
          heading: "الوثائق المطلوبة",
          content: "اجمع هذه الوثائق لطلب البطاقة المدمجة:",
          list: [
            "نموذج I-765، طلب إذن العمل",
            "نموذج I-131، طلب وثيقة السفر",
            "نسخة من إشعار استلام I-485",
            "نسخة من جواز السفر الساري (صفحة الصورة)",
            "صورتان بحجم جواز السفر",
            "نسخة من وثيقة وضع الهجرة الحالي (تأشيرة، I-94)",
            "نسخة من أي EAD سابق (إن وجد)",
            "نسخة من شهادة الزواج (إذا كنت تتقدم من خلال الزوج)"
          ]
        },
        {
          heading: "تحذيرات سفر مهمة",
          content: "قبل السفر ببطاقتك المدمجة، افهم هذه القواعد الحاسمة:\n\n• إذن السفر المسبق ليس تأشيرة: قد تُسأل لا يزال عند الحدود ويمكن رفض دخولك\n\n• بعض التأشيرات: إذا دخلت بتأشيرة خطيب(ة) K-1 أو تأشيرة زوج K-3، مخاطر السفر أقل\n\n• H-1B و L-1: إذا كان لديك وضع H أو L صالح، السفر بإذن السفر المسبق قد يتخلى عن ذلك الوضع\n\n• الوجود غير القانوني: إذا كان لديك وجود غير قانوني قبل تقديم I-485، السفر قد يفعل حظر إعادة الدخول\n\n• اللجوء المعلق: السفر أثناء انتظار اللجوء يمكن أن يُنظر إليه على أنه تخلي عن مطالبتك\n\nاستشر دائمًا محترف هجرة قبل السفر بإذن السفر المسبق."
        },
        {
          heading: "أوقات المعالجة في سان دييغو",
          content: "تختلف أوقات معالجة البطاقة المدمجة لكن إليك التوقعات النموذجية:\n\n• المعالجة الحالية: حوالي 3-6 أشهر من التقديم\n\n• القياسات الحيوية: تُجدول عادةً بعد 3-6 أسابيع من التقديم\n\n• التسريع متاح: طلبات التسريع الطارئة ممكنة في حالات معينة\n\n• التقديم عبر الإنترنت: التقديم عبر الإنترنت من خلال حساب USCIS قد يؤدي إلى معالجة أسرع\n\n• التمديد التلقائي: توفر السياسات الحديثة تمديدات تلقائية لطلبات التجديد"
        },
        {
          heading: "استخدام بطاقتك المدمجة للعمل",
          content: "تأذن بطاقتك المدمجة بالتوظيف لدى أي صاحب عمل أمريكي:",
          list: [
            "أظهر البطاقة لصاحب العمل للتحقق من I-9",
            "تعمل البطاقة كوثيقة قائمة A (تثبت الهوية وإذن العمل)",
            "يمكنك العمل لأي صاحب عمل - غير مقيد بوظيفة محددة",
            "العمل الحر مسموح أيضًا",
            "لاحظ تاريخ انتهاء الصلاحية وخطط للتجديد قبل انتهائها",
            "يجب أن تقول بطاقة الضمان الاجتماعي 'صالحة للعمل مع إذن DHS'"
          ]
        },
        {
          heading: "السفر ببطاقتك المدمجة",
          content: "عند استخدام بطاقتك المدمجة للسفر الدولي:\n\n• احمل بطاقتك: احمل دائمًا بطاقتك المدمجة عند السفر\n\n• أحضر إيصال I-485: احمل إشعار الاستلام لقضية التعديل المعلقة\n\n• جواز السفر مطلوب: لا تزال بحاجة لجواز سفر صالح من بلدك\n\n• عملية إعادة الدخول: عند نقطة الدخول، قدم بطاقتك المدمجة وجواز سفرك\n\n• مقابلة CBP: كن مستعدًا للإجابة على أسئلة حول رحلتك والطلب المعلق\n\n• اجعل الرحلات قصيرة: الرحلات الممتدة قد تثير أسئلة حول نية الهجرة"
        },
        {
          heading: "تجديد بطاقتك المدمجة",
          content: "إذا كانت قضية البطاقة الخضراء لا تزال معلقة عند انتهاء صلاحية بطاقتك المدمجة:\n\n• قدم مبكرًا: قدم طلبات التجديد قبل 6 أشهر من انتهاء الصلاحية\n\n• التمديد التلقائي: جزء EAD قد يُمدد تلقائيًا حتى 540 يومًا إذا قُدم في الوقت المناسب\n\n• نفس النماذج: استخدم نفس نماذج I-765 و I-131 للتجديد\n\n• لا رسوم: المتقدمون على أساس I-485 عمومًا لا يدفعون رسومًا للتجديدات\n\n• استمر في العمل: مع التمديد التلقائي، يمكنك الاستمرار في العمل أثناء انتظار التجديد"
        },
        {
          heading: "متى لا يجب أن تسافر",
          content: "تجنب السفر الدولي في هذه الحالات:",
          list: [
            "لديك طلب لجوء معلق (قد يُنظر إليه على أنه تخلي)",
            "تراكم لديك وجود غير قانوني قبل تقديم I-485",
            "لديك تاريخ جنائي قد يؤثر على القبول",
            "مقابلة I-485 تمت جدولتها",
            "دخلت بدون فحص ولا تتأهل لـ 245(i)",
            "غير متأكد من تاريخ هجرتك",
            "جواز سفرك منتهي أو سينتهي أثناء السفر"
          ]
        }
      ],

      faqs: [
        {
          q: "هل هناك رسوم للبطاقة المدمجة إذا كنت أقدم مع I-485؟",
          a: "لا، إذا كنت تقدم I-765 و I-131 بناءً على طلب تعديل I-485 المعلق، لا توجد رسوم تقديم إضافية. الرسوم مضمنة في رسوم تقديم I-485. هذا ينطبق على الطلبات الأولية والتجديدات."
        },
        {
          q: "كم مدة صلاحية البطاقة المدمجة؟",
          a: "حاليًا، تُصدر البطاقات المدمجة عادةً بصلاحية سنتين. هذا تغير من الصلاحية السابقة لسنة واحدة، مما يمنح المتقدمين المزيد من الوقت قبل الحاجة للتجديد."
        },
        {
          q: "هل يمكنني السفر عدة مرات بإذن السفر المسبق؟",
          a: "نعم، يسمح إذن السفر المسبق برحلات غير محدودة خلال فترة صلاحيته. ومع ذلك، في كل مرة تعود، ستمر عبر الفحص عند نقطة الدخول. الرحلات الممتدة أو المتكررة قد تثير أسئلة."
        },
        {
          q: "ماذا لو انتهت صلاحية بطاقتي المدمجة قبل الموافقة على بطاقتي الخضراء؟",
          a: "يجب أن تقدم للتجديد قبل حوالي 6 أشهر من انتهاء الصلاحية. بموجب القواعد الحالية، يُمدد جزء EAD تلقائيًا لمدة تصل إلى 540 يومًا إذا قدمت تجديدًا في الوقت المناسب. جزء إذن السفر المسبق لا يُمدد تلقائيًا."
        },
        {
          q: "هل يمكنني استخدام البطاقة المدمجة كهوية لأغراض أخرى؟",
          a: "يمكن استخدام البطاقة المدمجة للتحقق من التوظيف (I-9) وكدليل على وضع الهجرة. ومع ذلك، لأغراض الهوية العامة (مثل TSA)، ستحتاج عادةً لجواز سفرك أو هوية الولاية."
        },
        {
          q: "ماذا يحدث إذا فقدت بطاقتي المدمجة؟",
          a: "ستحتاج لتقديم طلب استبدال باستخدام نفس نماذج I-765 و I-131. للمتقدمين على أساس I-485، عمومًا لا توجد رسوم للاستبدال. احتفظ بنسخ من بطاقتك في مكان آمن."
        }
      ],

      cta: {
        title: "احصل على مساعدة في طلب البطاقة المدمجة",
        text: "يساعد فريقنا في سان دييغو متقدمي تعديل الوضع في الحصول على بطاقتهم المدمجة بسرعة وبشكل صحيح. نضمن تقديم طلباتك بشكل صحيح للحصول على أفضل النتائج.",
        button: "جدول استشارة"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default ComboCardEADSanDiego;
