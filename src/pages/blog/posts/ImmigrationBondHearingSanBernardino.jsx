import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const ImmigrationBondHearingSanBernardino = ({ language }) => {
  const content = {
    en: {
      slug: "immigration-bond-hearing-san-bernardino",
      title: "Immigration Bond Hearing Help in San Bernardino: Release from Detention",
      subtitle: "Expert assistance for families seeking release of detained loved ones through immigration bond",
      metaTitle: "Immigration Bond Hearing San Bernardino | Detention Release Help",
      metaDescription: "Expert immigration bond hearing assistance in San Bernardino. Help getting loved ones released from detention. Arabic-speaking staff. Call (714) 421-8872.",
      keywords: "immigration bond San Bernardino, detention release, immigration detention help, bond hearing, ICE detention release",
      category: "Green Card & Status",
      location: "San Bernardino",
      date: "January 6, 2026",
      readTime: "10 min read",
      author: "Immigration Solution Services",
      locationIntro: "San Bernardino County is home to the Adelanto ICE Processing Center, one of the largest immigration detention facilities in California. Many families in San Bernardino and the Inland Empire have loved ones detained at Adelanto or other facilities. Understanding the immigration bond process is crucial for those seeking to reunite with detained family members. Immigration Solution Services helps families navigate this stressful process.",

      sections: [
        {
          heading: "What is an Immigration Bond?",
          content: "An immigration bond is a payment that allows a detained immigrant to be released from custody while their immigration case proceeds. It serves as a guarantee that the person will appear for all future immigration court hearings and comply with removal orders if issued.\n\nBond is not available to everyone—certain criminal convictions or security concerns may make someone ineligible for release. However, many detained individuals do qualify for bond and can be released to their families."
        },
        {
          heading: "Types of Immigration Bonds",
          content: "There are two main types of immigration bonds:",
          table: {
            headers: ["Bond Type", "Purpose", "Return Conditions"],
            rows: [
              ["Delivery Bond", "Release to attend hearings", "Returned when case concludes and person complies with outcome"],
              ["Voluntary Departure Bond", "Allows person to leave U.S. voluntarily", "Returned after verified departure from the country"],
              ["Order of Supervision Bond", "Release with reporting conditions", "Must check in regularly with ICE"]
            ]
          }
        },
        {
          heading: "Who is Eligible for Immigration Bond?",
          content: "Eligibility for bond depends on several factors:",
          list: [
            "Not subject to mandatory detention (certain criminal convictions)",
            "Not considered a flight risk",
            "Not deemed a danger to the community",
            "Not subject to expedited removal",
            "Have some ties to the community (family, employment, residence)",
            "Have a legitimate immigration case to pursue"
          ]
        },
        {
          heading: "How is Bond Amount Determined?",
          content: "Immigration judges consider several factors when setting bond amounts:\n\n• Criminal history and severity of any convictions\n• Immigration history (previous deportations, violations)\n• Length of residence in the United States\n• Family ties and community connections\n• Employment history\n• Likelihood of appearing for hearings\n• Danger to the community\n\nBond amounts typically range from $1,500 to $25,000 or more, depending on these factors."
        },
        {
          heading: "The Bond Hearing Process",
          steps: [
            {
              title: "Request a Bond Hearing",
              description: "The detained person or their representative requests a hearing before an immigration judge"
            },
            {
              title: "Gather Supporting Evidence",
              description: "Collect documents showing ties to community, employment, family support, and good character"
            },
            {
              title: "Attend the Hearing",
              description: "Present evidence and arguments to the immigration judge"
            },
            {
              title: "Judge's Decision",
              description: "Judge sets bond amount, denies bond, or orders release on recognizance"
            },
            {
              title: "Pay the Bond",
              description: "If bond is granted, pay at ICE office or through bond company"
            },
            {
              title: "Release",
              description: "Person is released from detention after bond payment is processed"
            }
          ]
        },
        {
          heading: "Evidence to Present at Bond Hearing",
          content: "Strong bond applications include evidence of:",
          list: [
            "U.S. citizen or permanent resident family members (especially children)",
            "Stable employment or job offer",
            "Long-term residence in the community",
            "Property ownership or lease agreements",
            "Tax returns showing compliance",
            "Letters of support from employers, community members, religious leaders",
            "Rehabilitation evidence (if there are prior convictions)",
            "Medical conditions requiring treatment",
            "Immigration relief being pursued (asylum, cancellation of removal, etc.)"
          ]
        },
        {
          heading: "Paying the Immigration Bond",
          content: "Once bond is set, you have options for payment:",
          table: {
            headers: ["Payment Method", "Description", "Considerations"],
            rows: [
              ["Cash Bond", "Pay full amount to ICE", "Fully refundable if person complies"],
              ["Surety Bond", "Pay percentage to bond company", "Non-refundable fee, company posts full amount"],
              ["Property Bond", "Use property as collateral", "Less common, requires equity verification"]
            ]
          }
        },
        {
          heading: "What if Bond is Denied?",
          content: "If bond is denied, you have several options:\n\n• Appeal to the Board of Immigration Appeals (BIA)\n• Request a new bond hearing if circumstances change\n• File a habeas corpus petition in federal court\n• Continue with the immigration case while detained\n\nDenials can be challenged, especially if new evidence becomes available or the person's circumstances change."
        },
        {
          heading: "Adelanto Detention Center Information",
          content: "The Adelanto ICE Processing Center is located in San Bernardino County:\n\n• Address: 10400 Rancho Road, Adelanto, CA 92301\n• Phone: (760) 530-2003\n• Facility Code: ADEL\n\nFamily members can deposit money for the detained person's commissary account and schedule visits through the facility."
        },
        {
          heading: "Why Choose Immigration Solution Services?",
          content: "Serving San Bernardino and the Inland Empire, we offer:",
          list: [
            "Experience with bond hearings at Adelanto and other facilities",
            "Arabic and English-speaking staff",
            "Help preparing bond packets and evidence",
            "Coordination with immigration attorneys",
            "Support for families during the detention process",
            "Free initial consultation to evaluate your case"
          ]
        }
      ],

      faqs: [
        {
          q: "How long does it take to get a bond hearing?",
          a: "Bond hearings are typically scheduled within 1-2 weeks of the request. However, the actual release after bond is paid can take 1-3 days for processing."
        },
        {
          q: "Can I get my bond money back?",
          a: "If you paid a cash bond directly to ICE, you can get it back when the case concludes—either after voluntary departure, removal, or if the person wins their case. If you used a bond company, their fee is not refundable."
        },
        {
          q: "What if we can't afford the bond amount?",
          a: "You can request a bond redetermination hearing to ask for a lower amount. There are also immigrant bond funds that may help in some cases. Additionally, surety bond companies only require a percentage of the total."
        },
        {
          q: "Can someone with a criminal record get bond?",
          a: "It depends on the type of conviction. Some crimes make a person subject to mandatory detention with no bond eligibility. Other convictions may affect the bond amount but not eligibility. Each case is different."
        },
        {
          q: "How do I find out if my family member is detained?",
          a: "You can use the ICE Online Detainee Locator System at locator.ice.gov. You'll need their full name, country of birth, and A-Number if known."
        },
        {
          q: "Do you offer services in Arabic?",
          a: "Yes! Our staff speaks Arabic fluently, and we provide all consultations and services in Arabic for families in San Bernardino and throughout the Inland Empire."
        }
      ],

      cta: {
        title: "Have a Loved One in Detention?",
        text: "Schedule your free consultation today. Our compassionate team is ready to help San Bernardino families navigate the immigration bond process.",
        button: "Schedule Free Consultation"
      }
    },
    ar: {
      slug: "immigration-bond-hearing-san-bernardino",
      title: "مساعدة جلسة كفالة الهجرة في سان برناردينو: الإفراج من الاحتجاز",
      subtitle: "مساعدة خبراء للعائلات التي تسعى للإفراج عن أحبائها المحتجزين من خلال كفالة الهجرة",
      metaTitle: "جلسة كفالة الهجرة سان برناردينو | مساعدة الإفراج من الاحتجاز",
      metaDescription: "مساعدة خبراء في جلسة كفالة الهجرة في سان برناردينو. مساعدة في إطلاق سراح الأحباء من الاحتجاز. فريق يتحدث العربية. اتصل (714) 421-8872.",
      keywords: "كفالة الهجرة سان برناردينو، الإفراج من الاحتجاز، مساعدة احتجاز الهجرة، جلسة الكفالة، إفراج احتجاز ICE",
      category: "البطاقة الخضراء والوضع",
      location: "سان برناردينو",
      date: "6 يناير 2026",
      readTime: "10 دقائق قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "مقاطعة سان برناردينو هي موطن لمركز معالجة ICE في أديلانتو، أحد أكبر مرافق احتجاز الهجرة في كاليفورنيا. العديد من العائلات في سان برناردينو ومنطقة إنلاند إمباير لديها أحباء محتجزين في أديلانتو أو مرافق أخرى. فهم عملية كفالة الهجرة أمر بالغ الأهمية لأولئك الذين يسعون للم الشمل مع أفراد الأسرة المحتجزين.",

      sections: [
        {
          heading: "ما هي كفالة الهجرة؟",
          content: "كفالة الهجرة هي دفعة تسمح للمهاجر المحتجز بالإفراج عنه من الحجز أثناء سير قضية الهجرة الخاصة به. إنها تعمل كضمان بأن الشخص سيحضر جميع جلسات محكمة الهجرة المستقبلية ويمتثل لأوامر الترحيل إذا صدرت.\n\nالكفالة ليست متاحة للجميع - بعض الإدانات الجنائية أو المخاوف الأمنية قد تجعل شخصاً ما غير مؤهل للإفراج. ومع ذلك، العديد من الأفراد المحتجزين يتأهلون للكفالة ويمكن إطلاق سراحهم لعائلاتهم."
        },
        {
          heading: "أنواع كفالات الهجرة",
          content: "هناك نوعان رئيسيان من كفالات الهجرة:",
          table: {
            headers: ["نوع الكفالة", "الغرض", "شروط الإرجاع"],
            rows: [
              ["كفالة التسليم", "الإفراج لحضور الجلسات", "ترجع عند انتهاء القضية وامتثال الشخص للنتيجة"],
              ["كفالة المغادرة الطوعية", "تسمح للشخص بمغادرة الولايات المتحدة طوعاً", "ترجع بعد التحقق من المغادرة من البلد"],
              ["كفالة أمر الإشراف", "الإفراج مع شروط الإبلاغ", "يجب تسجيل الحضور بانتظام مع ICE"]
            ]
          }
        },
        {
          heading: "من يتأهل لكفالة الهجرة؟",
          content: "تعتمد الأهلية للكفالة على عدة عوامل:",
          list: [
            "عدم الخضوع للاحتجاز الإلزامي (بعض الإدانات الجنائية)",
            "عدم اعتباره خطر هروب",
            "عدم اعتباره خطراً على المجتمع",
            "عدم الخضوع للترحيل المعجل",
            "وجود بعض الروابط بالمجتمع (الأسرة، العمل، الإقامة)",
            "وجود قضية هجرة مشروعة للمتابعة"
          ]
        },
        {
          heading: "كيف يتم تحديد مبلغ الكفالة؟",
          content: "ينظر قضاة الهجرة في عدة عوامل عند تحديد مبالغ الكفالة:\n\n• التاريخ الجنائي وشدة أي إدانات\n• تاريخ الهجرة (عمليات الترحيل السابقة، المخالفات)\n• مدة الإقامة في الولايات المتحدة\n• الروابط الأسرية والاتصالات المجتمعية\n• تاريخ التوظيف\n• احتمالية الحضور للجلسات\n• الخطر على المجتمع\n\nتتراوح مبالغ الكفالة عادة من $1,500 إلى $25,000 أو أكثر، حسب هذه العوامل."
        },
        {
          heading: "عملية جلسة الكفالة",
          steps: [
            {
              title: "طلب جلسة كفالة",
              description: "يطلب الشخص المحتجز أو ممثله جلسة أمام قاضي الهجرة"
            },
            {
              title: "جمع الأدلة الداعمة",
              description: "جمع الوثائق التي تظهر الروابط بالمجتمع والتوظيف ودعم الأسرة والشخصية الجيدة"
            },
            {
              title: "حضور الجلسة",
              description: "تقديم الأدلة والحجج لقاضي الهجرة"
            },
            {
              title: "قرار القاضي",
              description: "يحدد القاضي مبلغ الكفالة، أو يرفض الكفالة، أو يأمر بالإفراج على الذمة"
            },
            {
              title: "دفع الكفالة",
              description: "إذا تم منح الكفالة، ادفع في مكتب ICE أو من خلال شركة كفالة"
            },
            {
              title: "الإفراج",
              description: "يتم إطلاق سراح الشخص من الاحتجاز بعد معالجة دفع الكفالة"
            }
          ]
        },
        {
          heading: "الأدلة لتقديمها في جلسة الكفالة",
          content: "طلبات الكفالة القوية تتضمن أدلة على:",
          list: [
            "أفراد الأسرة المواطنين الأمريكيين أو المقيمين الدائمين (خاصة الأطفال)",
            "التوظيف المستقر أو عرض العمل",
            "الإقامة طويلة الأمد في المجتمع",
            "ملكية العقارات أو اتفاقيات الإيجار",
            "الإقرارات الضريبية التي تظهر الامتثال",
            "رسائل دعم من أصحاب العمل وأفراد المجتمع والقادة الدينيين",
            "أدلة إعادة التأهيل (إذا كانت هناك إدانات سابقة)",
            "الحالات الطبية التي تتطلب العلاج",
            "إغاثة الهجرة المطلوبة (اللجوء، إلغاء الترحيل، إلخ.)"
          ]
        },
        {
          heading: "دفع كفالة الهجرة",
          content: "بمجرد تحديد الكفالة، لديك خيارات للدفع:",
          table: {
            headers: ["طريقة الدفع", "الوصف", "الاعتبارات"],
            rows: [
              ["كفالة نقدية", "دفع المبلغ الكامل لـ ICE", "قابلة للاسترداد بالكامل إذا امتثل الشخص"],
              ["كفالة ضمان", "دفع نسبة لشركة كفالة", "رسوم غير قابلة للاسترداد، الشركة تنشر المبلغ الكامل"],
              ["كفالة عقارية", "استخدام العقار كضمان", "أقل شيوعاً، تتطلب التحقق من حقوق الملكية"]
            ]
          }
        },
        {
          heading: "ماذا لو رُفضت الكفالة؟",
          content: "إذا رُفضت الكفالة، لديك عدة خيارات:\n\n• الاستئناف أمام مجلس استئناف الهجرة (BIA)\n• طلب جلسة كفالة جديدة إذا تغيرت الظروف\n• تقديم طلب أمر إحضار في المحكمة الفيدرالية\n• الاستمرار في قضية الهجرة أثناء الاحتجاز\n\nيمكن الطعن في الرفض، خاصة إذا أصبحت أدلة جديدة متاحة أو تغيرت ظروف الشخص."
        },
        {
          heading: "معلومات مركز احتجاز أديلانتو",
          content: "يقع مركز معالجة ICE في أديلانتو في مقاطعة سان برناردينو:\n\n• العنوان: 10400 Rancho Road, Adelanto, CA 92301\n• الهاتف: (760) 530-2003\n• رمز المرفق: ADEL\n\nيمكن لأفراد الأسرة إيداع أموال لحساب المقصف للشخص المحتجز وجدولة الزيارات من خلال المرفق."
        },
        {
          heading: "لماذا تختار خدمات حلول الهجرة؟",
          content: "نخدم سان برناردينو ومنطقة إنلاند إمباير، ونقدم:",
          list: [
            "خبرة في جلسات الكفالة في أديلانتو ومرافق أخرى",
            "فريق يتحدث العربية والإنجليزية",
            "مساعدة في إعداد حزم الكفالة والأدلة",
            "التنسيق مع محامي الهجرة",
            "دعم للعائلات خلال عملية الاحتجاز",
            "استشارة أولية مجانية لتقييم قضيتك"
          ]
        }
      ],

      faqs: [
        {
          q: "كم يستغرق الحصول على جلسة كفالة؟",
          a: "عادة ما يتم جدولة جلسات الكفالة خلال 1-2 أسبوع من الطلب. ومع ذلك، الإفراج الفعلي بعد دفع الكفالة يمكن أن يستغرق 1-3 أيام للمعالجة."
        },
        {
          q: "هل يمكنني استرداد أموال الكفالة؟",
          a: "إذا دفعت كفالة نقدية مباشرة لـ ICE، يمكنك استردادها عند انتهاء القضية - إما بعد المغادرة الطوعية أو الترحيل أو إذا فاز الشخص بقضيته. إذا استخدمت شركة كفالة، رسومهم غير قابلة للاسترداد."
        },
        {
          q: "ماذا لو لم نستطع تحمل مبلغ الكفالة؟",
          a: "يمكنك طلب جلسة إعادة تحديد الكفالة لطلب مبلغ أقل. هناك أيضاً صناديق كفالة المهاجرين التي قد تساعد في بعض الحالات. بالإضافة إلى ذلك، شركات كفالة الضمان تتطلب فقط نسبة من المجموع."
        },
        {
          q: "هل يمكن لشخص لديه سجل جنائي الحصول على كفالة؟",
          a: "يعتمد على نوع الإدانة. بعض الجرائم تجعل الشخص خاضعاً للاحتجاز الإلزامي بدون أهلية للكفالة. إدانات أخرى قد تؤثر على مبلغ الكفالة ولكن ليس الأهلية. كل حالة مختلفة."
        },
        {
          q: "كيف أعرف إذا كان فرد من عائلتي محتجزاً؟",
          a: "يمكنك استخدام نظام تحديد موقع المحتجزين عبر الإنترنت ICE على locator.ice.gov. ستحتاج إلى اسمهم الكامل وبلد الميلاد ورقم A إذا كان معروفاً."
        },
        {
          q: "هل تقدمون خدمات بالعربية؟",
          a: "نعم! فريقنا يتحدث العربية بطلاقة، ونقدم جميع الاستشارات والخدمات بالعربية للعائلات في سان برناردينو وفي جميع أنحاء منطقة إنلاند إمباير."
        }
      ],

      cta: {
        title: "هل لديك شخص عزيز في الاحتجاز؟",
        text: "حدد موعد استشارتك المجانية اليوم. فريقنا الرحيم جاهز لمساعدة عائلات سان برناردينو في عملية كفالة الهجرة.",
        button: "حجز استشارة مجانية"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default ImmigrationBondHearingSanBernardino;
