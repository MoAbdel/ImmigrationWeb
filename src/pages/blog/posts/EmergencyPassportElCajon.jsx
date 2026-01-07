import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const EmergencyPassportElCajon = ({ language }) => {
  const content = {
    en: {
      slug: "emergency-passport-services-el-cajon",
      title: "Emergency Passport Services in El Cajon: Travel Document Help for Iraqi Refugees",
      subtitle: "Urgent passport renewal and replacement assistance for refugee families in San Diego County",
      metaTitle: "Emergency Passport Services El Cajon | Iraqi Refugee Travel Documents",
      metaDescription: "Emergency passport help for Iraqi refugees in El Cajon. Expedited processing and document assistance. Arabic support. Call (714) 421-8872.",
      keywords: "emergency passport El Cajon, Iraqi refugee passport, expedited passport San Diego, travel document help, refugee travel document",
      category: "Travel Documents",
      location: "El Cajon",
      date: "December 28, 2025",
      readTime: "8 min read",
      author: "SoCal Immigration Services",
      locationIntro: "El Cajon's large Iraqi and refugee community often faces urgent travel document needs. Whether you need an emergency U.S. passport, refugee travel document, or assistance with foreign passport issues, SoCal Immigration Services provides guidance to help you travel safely and legally.",

      sections: [
        {
          heading: "Types of Travel Documents for Immigrants",
          content: "Different immigration statuses require different travel documents:",
          table: {
            headers: ["Document Type", "Who Needs It", "Validity"],
            rows: [
              ["U.S. Passport", "U.S. Citizens (naturalized or born)", "10 years (adult) / 5 years (child)"],
              ["Refugee Travel Document", "Refugees and Asylees", "1 year (typically)"],
              ["Re-entry Permit", "Permanent Residents", "Up to 2 years"],
              ["Advance Parole", "Pending adjustment applicants", "1 year (typically)"],
              ["Foreign Passport", "Non-citizens (varies by status)", "Varies by country"]
            ]
          }
        },
        {
          heading: "Emergency U.S. Passport Services",
          content: "If you're a U.S. citizen with urgent travel needs:",
          steps: [
            {
              title: "Gather Required Documents",
              description: "Naturalization certificate, current/expired passport, photo ID, passport photo"
            },
            {
              title: "Complete DS-11 or DS-82",
              description: "DS-11 for first-time or expired 5+ years; DS-82 for renewal within 5 years"
            },
            {
              title: "Schedule Appointment",
              description: "Book at passport agency for life-or-death emergency or urgent travel"
            },
            {
              title: "Provide Proof of Travel",
              description: "Flight itinerary or letter showing travel within 14 days"
            },
            {
              title: "Pay Expedite Fees",
              description: "Standard fee plus $60 expedite fee; additional fees for agency appointment"
            }
          ]
        },
        {
          heading: "Refugee Travel Document (I-131)",
          content: "Iraqi refugees and asylees in El Cajon need special travel documents:",
          list: [
            "Cannot travel on Iraqi passport without jeopardizing status",
            "File Form I-131 for Refugee Travel Document",
            "Must apply before leaving the United States",
            "Processing typically takes 3-5 months",
            "Valid for single or multiple entries for 1 year",
            "IMPORTANT: Do not travel to your home country"
          ]
        },
        {
          heading: "WARNING: Returning to Home Country",
          content: "For refugees and asylees, returning to your home country (Iraq) can have serious consequences:\n\n• May be considered abandonment of refugee/asylee status\n• Could result in loss of green card eligibility\n• May trigger bars to future immigration benefits\n• Exceptions are very limited and require advance consultation\n\nNEVER travel to Iraq or countries of persecution without consulting an immigration professional first."
        },
        {
          heading: "Re-entry Permit for Green Card Holders",
          content: "Permanent residents planning extended trips need re-entry permits:",
          list: [
            "Required if staying outside U.S. for 1+ year",
            "Protects green card status during extended absence",
            "File Form I-131 before departing the United States",
            "Valid for up to 2 years",
            "Biometrics appointment required",
            "Cannot be extended while abroad"
          ]
        },
        {
          heading: "Emergency Situations and Solutions",
          content: "Common urgent travel scenarios we help with:",
          table: {
            headers: ["Emergency", "Solution", "Timeline"],
            rows: [
              ["Family death abroad", "Expedited passport or emergency RTD", "1-3 days possible"],
              ["Medical emergency abroad", "Agency appointment, proof of emergency", "1-3 days"],
              ["Lost passport while abroad", "Contact U.S. embassy for emergency passport", "Varies"],
              ["Expired travel document", "Expedited renewal (if eligible)", "1-2 weeks"],
              ["Business travel emergency", "Expedited processing with proof", "1-2 weeks"]
            ]
          }
        },
        {
          heading: "Document Requirements for Passport Application",
          content: "Gather these documents before applying:",
          list: [
            "Proof of U.S. citizenship (naturalization certificate, birth certificate, or passport)",
            "Valid photo ID (driver's license, state ID, green card)",
            "Passport photo meeting State Department requirements",
            "DS-11 or DS-82 form (depending on situation)",
            "Previous passport (if applicable)",
            "Proof of urgent travel (itinerary, death certificate, medical documentation)",
            "Payment for fees (varies by service level)"
          ]
        },
        {
          heading: "Passport Photo Requirements",
          content: "Your passport photo must meet strict requirements:",
          list: [
            "Taken within the last 6 months",
            "2x2 inch color photo on white background",
            "Face clearly visible, neutral expression",
            "No glasses (new requirement)",
            "Head coverings only for religious reasons",
            "No uniforms (except religious attire)",
            "Photo must be high quality, not digitally altered"
          ]
        },
        {
          heading: "Common Mistakes to Avoid",
          content: "El Cajon families often encounter these issues:",
          list: [
            "Traveling on home country passport as a refugee (can lose status)",
            "Letting travel document expire before applying for renewal",
            "Not having biometrics completed in time",
            "Applying for wrong document type for your status",
            "Not bringing correct documentation to appointment",
            "Missing proof of emergency for expedited service",
            "Traveling without valid documents"
          ]
        },
        {
          heading: "Our Travel Document Services",
          content: "SoCal Immigration Services helps El Cajon families with:",
          list: [
            "Form I-131 preparation for Refugee Travel Documents",
            "Guidance on expedited U.S. passport applications",
            "Document review before submission",
            "Translation of supporting documents",
            "Emergency travel consultation",
            "Coordination with passport agencies",
            "Status monitoring and updates"
          ]
        }
      ],

      faqs: [
        {
          q: "Can Iraqi refugees travel internationally?",
          a: "Yes, with a valid Refugee Travel Document. However, you should NOT travel to Iraq or any country where you claimed persecution, as this can jeopardize your refugee status."
        },
        {
          q: "How long does a Refugee Travel Document take to process?",
          a: "Typically 3-5 months. There is no expedited processing available for most I-131 applications, so plan ahead for any international travel."
        },
        {
          q: "Can I expedite my U.S. passport if I'm a naturalized citizen?",
          a: "Yes, naturalized citizens can use the same expedited services as any U.S. citizen. Bring your naturalization certificate as proof of citizenship."
        },
        {
          q: "What if I need to travel for a family emergency but don't have documents?",
          a: "Contact us immediately. There are emergency procedures for life-or-death situations, but options depend on your immigration status."
        },
        {
          q: "Can I renew my Iraqi passport after becoming a U.S. citizen?",
          a: "Yes, U.S. citizens can hold foreign passports. However, you must enter and exit the U.S. using your U.S. passport."
        },
        {
          q: "What happens if my Refugee Travel Document expires while abroad?",
          a: "You may have difficulty returning to the U.S. Contact the nearest U.S. embassy or consulate immediately for emergency travel documentation."
        },
        {
          q: "Do green card holders need a Re-entry Permit for short trips?",
          a: "Not usually. Re-entry Permits are for trips exceeding 1 year. For shorter trips, your green card (and passport from your country) is typically sufficient."
        },
        {
          q: "Can I apply for a Refugee Travel Document from outside the U.S.?",
          a: "No. You must apply while physically present in the United States before your trip. Planning ahead is essential."
        }
      ],

      cta: {
        title: "Don't Let Travel Documents Stop Your Journey",
        text: "Whether you need emergency passport help or Refugee Travel Document guidance, our Arabic-speaking team in El Cajon is ready to assist.",
        button: "Get Travel Document Help"
      }
    },
    ar: {
      slug: "emergency-passport-services-el-cajon",
      title: "خدمات جواز السفر الطارئ في إل كاجون: مساعدة وثائق السفر للاجئين العراقيين",
      subtitle: "تجديد واستبدال جواز السفر العاجل لعائلات اللاجئين في مقاطعة سان دييغو",
      metaTitle: "خدمات جواز السفر الطارئ إل كاجون | وثائق سفر اللاجئين العراقيين",
      metaDescription: "مساعدة جواز السفر الطارئ للاجئين العراقيين في إل كاجون. معالجة سريعة ومساعدة الوثائق. دعم بالعربية. اتصل (714) 421-8872.",
      keywords: "جواز السفر الطارئ إل كاجون، جواز سفر اللاجئ العراقي، جواز السفر السريع سان دييغو، مساعدة وثائق السفر",
      category: "وثائق السفر",
      location: "إل كاجون",
      date: "28 ديسمبر 2025",
      readTime: "8 دقائق قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "مجتمع إل كاجون الكبير من العراقيين واللاجئين غالباً ما يواجه احتياجات عاجلة لوثائق السفر. سواء كنت بحاجة لجواز سفر أمريكي طارئ أو وثيقة سفر اللاجئ أو مساعدة في مشاكل جواز السفر الأجنبي، تقدم خدمات حلول الهجرة إرشادات لمساعدتك على السفر بأمان وقانونياً.",

      sections: [
        {
          heading: "أنواع وثائق السفر للمهاجرين",
          content: "أوضاع الهجرة المختلفة تتطلب وثائق سفر مختلفة:",
          table: {
            headers: ["نوع الوثيقة", "من يحتاجها", "الصلاحية"],
            rows: [
              ["جواز السفر الأمريكي", "المواطنون الأمريكيون (متجنسون أو بالولادة)", "10 سنوات (بالغ) / 5 سنوات (طفل)"],
              ["وثيقة سفر اللاجئ", "اللاجئون واللاجئون", "سنة واحدة (عادةً)"],
              ["تصريح إعادة الدخول", "المقيمون الدائمون", "حتى سنتين"],
              ["Advance Parole", "مقدمو طلبات التعديل المعلقة", "سنة واحدة (عادةً)"],
              ["جواز السفر الأجنبي", "غير المواطنين (يختلف حسب الوضع)", "يختلف حسب البلد"]
            ]
          }
        },
        {
          heading: "خدمات جواز السفر الأمريكي الطارئ",
          content: "إذا كنت مواطناً أمريكياً مع احتياجات سفر عاجلة:",
          steps: [
            {
              title: "اجمع الوثائق المطلوبة",
              description: "شهادة التجنس، جواز السفر الحالي/المنتهي، هوية بالصورة، صورة جواز السفر"
            },
            {
              title: "أكمل DS-11 أو DS-82",
              description: "DS-11 للمرة الأولى أو المنتهي 5+ سنوات؛ DS-82 للتجديد خلال 5 سنوات"
            },
            {
              title: "حدد موعداً",
              description: "احجز في وكالة جوازات السفر لحالات الحياة والموت أو السفر العاجل"
            },
            {
              title: "قدم إثبات السفر",
              description: "جدول الرحلة أو رسالة تظهر السفر خلال 14 يوماً"
            },
            {
              title: "ادفع رسوم التعجيل",
              description: "الرسوم القياسية بالإضافة إلى $60 رسوم التعجيل؛ رسوم إضافية لموعد الوكالة"
            }
          ]
        },
        {
          heading: "وثيقة سفر اللاجئ (I-131)",
          content: "اللاجئون العراقيون واللاجئون في إل كاجون يحتاجون وثائق سفر خاصة:",
          list: [
            "لا يمكن السفر على جواز السفر العراقي دون تعريض الوضع للخطر",
            "قدم نموذج I-131 لوثيقة سفر اللاجئ",
            "يجب التقديم قبل مغادرة الولايات المتحدة",
            "المعالجة تستغرق عادةً 3-5 أشهر",
            "صالحة لدخول واحد أو متعدد لمدة سنة",
            "مهم: لا تسافر إلى بلدك الأصلي"
          ]
        },
        {
          heading: "تحذير: العودة إلى بلد الأصل",
          content: "للاجئين واللاجئين، العودة إلى بلدك الأصلي (العراق) يمكن أن يكون لها عواقب خطيرة:\n\n• قد يُعتبر تخلياً عن وضع اللاجئ/اللاجئ\n• يمكن أن يؤدي إلى فقدان أهلية البطاقة الخضراء\n• قد يُفعّل موانع لمنافع الهجرة المستقبلية\n• الاستثناءات محدودة جداً وتتطلب استشارة مسبقة\n\nلا تسافر أبداً إلى العراق أو دول الاضطهاد دون استشارة محترف هجرة أولاً."
        },
        {
          heading: "تصريح إعادة الدخول لحاملي البطاقة الخضراء",
          content: "المقيمون الدائمون الذين يخططون لرحلات ممتدة يحتاجون تصاريح إعادة الدخول:",
          list: [
            "مطلوب إذا كانت الإقامة خارج الولايات المتحدة لأكثر من سنة",
            "يحمي وضع البطاقة الخضراء أثناء الغياب الممتد",
            "قدم نموذج I-131 قبل مغادرة الولايات المتحدة",
            "صالح لمدة تصل إلى سنتين",
            "موعد البصمات مطلوب",
            "لا يمكن تمديده أثناء التواجد في الخارج"
          ]
        },
        {
          heading: "الحالات الطارئة والحلول",
          content: "سيناريوهات السفر العاجلة الشائعة التي نساعد فيها:",
          table: {
            headers: ["الطوارئ", "الحل", "الجدول الزمني"],
            rows: [
              ["وفاة عائلية في الخارج", "جواز سفر سريع أو RTD طارئ", "1-3 أيام ممكنة"],
              ["طوارئ طبية في الخارج", "موعد وكالة، إثبات الطوارئ", "1-3 أيام"],
              ["جواز سفر مفقود في الخارج", "اتصل بالسفارة الأمريكية لجواز سفر طارئ", "يختلف"],
              ["وثيقة سفر منتهية", "تجديد سريع (إذا كان مؤهلاً)", "1-2 أسابيع"],
              ["طوارئ سفر عمل", "معالجة سريعة مع إثبات", "1-2 أسابيع"]
            ]
          }
        },
        {
          heading: "متطلبات الوثائق لطلب جواز السفر",
          content: "اجمع هذه الوثائق قبل التقديم:",
          list: [
            "إثبات الجنسية الأمريكية (شهادة التجنس، شهادة الميلاد، أو جواز السفر)",
            "هوية بالصورة صالحة (رخصة القيادة، هوية الولاية، البطاقة الخضراء)",
            "صورة جواز السفر التي تستوفي متطلبات وزارة الخارجية",
            "نموذج DS-11 أو DS-82 (حسب الحالة)",
            "جواز السفر السابق (إذا كان ينطبق)",
            "إثبات السفر العاجل (جدول الرحلة، شهادة الوفاة، التوثيق الطبي)",
            "دفع الرسوم (تختلف حسب مستوى الخدمة)"
          ]
        },
        {
          heading: "متطلبات صورة جواز السفر",
          content: "يجب أن تستوفي صورة جواز سفرك متطلبات صارمة:",
          list: [
            "مأخوذة خلال الأشهر الستة الماضية",
            "صورة ملونة 2x2 بوصة على خلفية بيضاء",
            "الوجه مرئي بوضوح، تعبير محايد",
            "لا نظارات (متطلب جديد)",
            "أغطية الرأس فقط لأسباب دينية",
            "لا زي رسمي (باستثناء الملابس الدينية)",
            "الصورة يجب أن تكون عالية الجودة، غير معدلة رقمياً"
          ]
        },
        {
          heading: "الأخطاء الشائعة التي يجب تجنبها",
          content: "عائلات إل كاجون غالباً ما تواجه هذه المشاكل:",
          list: [
            "السفر على جواز سفر بلد الأصل كلاجئ (يمكن فقدان الوضع)",
            "ترك وثيقة السفر تنتهي قبل التقدم للتجديد",
            "عدم إكمال البصمات في الوقت المناسب",
            "التقدم لنوع الوثيقة الخاطئ لوضعك",
            "عدم إحضار التوثيق الصحيح للموعد",
            "فقدان إثبات الطوارئ للخدمة السريعة",
            "السفر بدون وثائق صالحة"
          ]
        },
        {
          heading: "خدمات وثائق السفر لدينا",
          content: "خدمات حلول الهجرة تساعد عائلات إل كاجون في:",
          list: [
            "إعداد نموذج I-131 لوثائق سفر اللاجئ",
            "إرشادات حول طلبات جواز السفر الأمريكي السريعة",
            "مراجعة الوثائق قبل التقديم",
            "ترجمة الوثائق الداعمة",
            "استشارة السفر الطارئ",
            "التنسيق مع وكالات جوازات السفر",
            "مراقبة الحالة والتحديثات"
          ]
        }
      ],

      faqs: [
        {
          q: "هل يمكن للاجئين العراقيين السفر دولياً؟",
          a: "نعم، مع وثيقة سفر لاجئ صالحة. ومع ذلك، لا يجب أن تسافر إلى العراق أو أي بلد ادعيت فيه الاضطهاد، لأن هذا يمكن أن يعرض وضع اللاجئ للخطر."
        },
        {
          q: "كم تستغرق معالجة وثيقة سفر اللاجئ؟",
          a: "عادةً 3-5 أشهر. لا توجد معالجة سريعة متاحة لمعظم طلبات I-131، لذا خطط مسبقاً لأي سفر دولي."
        },
        {
          q: "هل يمكنني تعجيل جواز سفري الأمريكي إذا كنت مواطناً متجنساً؟",
          a: "نعم، يمكن للمواطنين المتجنسين استخدام نفس الخدمات السريعة مثل أي مواطن أمريكي. أحضر شهادة التجنس كإثبات للجنسية."
        },
        {
          q: "ماذا لو احتجت للسفر لحالة طوارئ عائلية لكن ليس لدي وثائق؟",
          a: "اتصل بنا فوراً. هناك إجراءات طوارئ لحالات الحياة والموت، لكن الخيارات تعتمد على وضع هجرتك."
        },
        {
          q: "هل يمكنني تجديد جواز سفري العراقي بعد أن أصبحت مواطناً أمريكياً؟",
          a: "نعم، يمكن للمواطنين الأمريكيين حمل جوازات سفر أجنبية. ومع ذلك، يجب أن تدخل وتخرج من الولايات المتحدة باستخدام جواز سفرك الأمريكي."
        },
        {
          q: "ماذا يحدث إذا انتهت صلاحية وثيقة سفر اللاجئ أثناء التواجد في الخارج؟",
          a: "قد تواجه صعوبة في العودة إلى الولايات المتحدة. اتصل بأقرب سفارة أو قنصلية أمريكية فوراً للحصول على وثائق سفر طارئة."
        },
        {
          q: "هل يحتاج حاملو البطاقة الخضراء تصريح إعادة الدخول للرحلات القصيرة؟",
          a: "ليس عادةً. تصاريح إعادة الدخول للرحلات التي تتجاوز سنة واحدة. للرحلات الأقصر، بطاقتك الخضراء (وجواز سفر من بلدك) كافية عادةً."
        },
        {
          q: "هل يمكنني التقدم لوثيقة سفر اللاجئ من خارج الولايات المتحدة؟",
          a: "لا. يجب التقديم أثناء التواجد الفعلي في الولايات المتحدة قبل رحلتك. التخطيط المسبق ضروري."
        }
      ],

      cta: {
        title: "لا تدع وثائق السفر توقف رحلتك",
        text: "سواء كنت بحاجة لمساعدة جواز سفر طارئ أو إرشادات وثيقة سفر اللاجئ، فريقنا الناطق بالعربية في إل كاجون جاهز للمساعدة.",
        button: "احصل على مساعدة وثائق السفر"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default EmergencyPassportElCajon;
