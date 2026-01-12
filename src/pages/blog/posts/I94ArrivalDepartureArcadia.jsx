import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const I94ArrivalDepartureArcadia = ({ language }) => {
  const content = {
    en: {
      slug: "i94-arrival-departure-record-arcadia",
      title: "I-94 Arrival/Departure Record in Arcadia: Complete Guide for Arab Immigrants",
      subtitle: "Understanding and correcting your I-94 record with Arabic-speaking assistance",
      metaTitle: "I-94 Arrival/Departure Record Arcadia | Arab Immigration Services",
      metaDescription: "Expert I-94 help in Arcadia for Arab immigrants. Retrieve, correct, and understand your arrival/departure record. Arabic-speaking staff. Call (714) 421-8872.",
      keywords: "I-94 record Arcadia, arrival departure record, CBP I-94, immigration status verification, Arab immigration help",
      category: "Documents",
      location: "Arcadia",
      date: "January 12, 2026",
      readTime: "9 min read",
      author: "SoCal Immigration Services",
      locationIntro: "For Arab immigrants in Arcadia and the San Gabriel Valley, understanding your I-94 arrival/departure record is crucial for maintaining legal immigration status. SoCal Immigration Services provides Arabic-speaking assistance to help you navigate this important document.",

      sections: [
        {
          heading: "What is the I-94 Arrival/Departure Record?",
          content: "The I-94 is your official record of arrival into the United States. It documents your legal entry and shows how long you're authorized to stay. For immigrants in Arcadia, this record is essential for:\n\n• Proving lawful entry into the United States\n• Determining your authorized period of stay\n• Applying for immigration benefits (green card, work permit)\n• Extending your visa status\n• Verifying employment eligibility"
        },
        {
          heading: "Electronic vs. Paper I-94",
          content: "Most travelers now receive electronic I-94 records instead of paper forms:",
          table: {
            headers: ["Type", "When Issued", "How to Access"],
            rows: [
              ["Electronic I-94", "Air/sea arrivals (most common)", "CBP website: i94.cbp.dhs.gov"],
              ["Paper I-94", "Land border crossings", "Stamped card at entry"],
              ["Paper I-94", "Issues with electronic system", "Given by CBP officer"]
            ]
          }
        },
        {
          heading: "How to Retrieve Your I-94 Online",
          content: "To get your I-94 record online from Arcadia:",
          list: [
            "Visit i94.cbp.dhs.gov",
            "Click 'Get Most Recent I-94'",
            "Enter your first name (as on passport)",
            "Enter your last name (as on passport)",
            "Enter your birth date",
            "Enter your passport number",
            "Select your country of citizenship",
            "Click 'Get Most Recent I-94'"
          ]
        },
        {
          heading: "Understanding Your I-94 Information",
          content: "Your I-94 contains critical information:",
          list: [
            "Admission Number: 11-digit unique identifier",
            "Most Recent Date of Entry: When you last entered the US",
            "Class of Admission: Your visa type (B-2, F-1, H-1B, etc.)",
            "Admit Until Date: Your authorized stay deadline (or 'D/S' for duration of status)",
            "Port of Entry: Airport or border crossing where you entered"
          ]
        },
        {
          heading: "Common I-94 Problems",
          content: "Arab immigrants in Arcadia frequently encounter these I-94 issues:",
          list: [
            "Wrong admit until date (shorter than it should be)",
            "Incorrect class of admission",
            "Name misspelling",
            "Missing I-94 record",
            "Wrong passport number",
            "Duplicate entries causing confusion"
          ]
        },
        {
          heading: "How to Correct I-94 Errors",
          content: "If your I-94 has errors, take these steps:\n\n1. At the Airport (within 24-48 hours):\n• Return to the CBP office at your arrival airport\n• Bring your passport and visa documents\n• Explain the error and request correction\n\n2. After Leaving the Airport:\n• Visit a local CBP Deferred Inspection office\n• Nearest to Arcadia: Los Angeles International Airport (LAX)\n• Bring all supporting documents\n\n3. By Mail:\n• Submit CBP INFO Center request\n• Include copies of passport, visa, and boarding pass"
        },
        {
          heading: "D/S Duration of Status Explained",
          content: "If your I-94 shows 'D/S' instead of a date, it means Duration of Status. This applies to:\n\n• F-1 students: Stay as long as you maintain student status\n• J-1 exchange visitors: Stay for program duration plus grace period\n• Diplomats: Stay as long as diplomatic assignment continues\n\nImportant: D/S doesn't mean unlimited stay. You must maintain valid status with your sponsoring institution."
        },
        {
          heading: "I-94 for Different Visa Types",
          content: "How I-94 works for common visa categories:",
          table: {
            headers: ["Visa Type", "Typical I-94 Period", "Extension Possible"],
            rows: [
              ["B-1/B-2 Tourist", "Up to 6 months", "Yes, apply before expiration"],
              ["F-1 Student", "D/S (Duration of Status)", "Maintain student status"],
              ["H-1B Worker", "Up to 3 years", "Yes, with employer petition"],
              ["L-1 Transfer", "Up to 3-7 years", "Yes, with employer petition"],
              ["K-1 Fiancé", "90 days", "No, must marry within 90 days"]
            ]
          }
        },
        {
          heading: "I-94 History for Immigration Applications",
          content: "Many immigration applications require your travel history. You can access your complete I-94 history online:\n\n1. Go to i94.cbp.dhs.gov\n2. Click 'View Travel History'\n3. Enter your information\n4. Review all entries and departures\n5. Print for your records\n\nThis history is essential for green card applications, citizenship, and proving continuous presence."
        },
        {
          heading: "Arcadia I-94 Services",
          content: "SoCal Immigration Services helps Arcadia residents with:",
          list: [
            "Retrieving and printing I-94 records",
            "Identifying errors and problems",
            "Preparing correction requests",
            "Translating documents (Arabic to English)",
            "Explaining I-94 dates and status",
            "Coordinating with CBP for corrections",
            "Extension applications before I-94 expires"
          ]
        }
      ],

      faqs: [
        {
          q: "Where can I get help with my I-94 in Arcadia?",
          a: "SoCal Immigration Services in Garden Grove serves Arcadia residents with Arabic-speaking staff. We help retrieve, explain, and correct I-94 records for the Arab community."
        },
        {
          q: "My I-94 date has passed. What should I do?",
          a: "If you stayed beyond your I-94 date, you may have accumulated unlawful presence. Contact us immediately for guidance on your options, which may include applying for an extension or change of status."
        },
        {
          q: "Can I travel domestically without my I-94?",
          a: "Yes, for domestic travel within the US, you don't need your I-94. However, always carry your passport and visa for identification purposes."
        },
        {
          q: "How long are I-94 records kept?",
          a: "CBP maintains I-94 records for 5 years. You can retrieve your travel history going back 5 years from the current date on the CBP website."
        },
        {
          q: "What if my name is spelled wrong on my I-94?",
          a: "Name misspellings should be corrected. Visit a CBP Deferred Inspection office with your passport showing the correct spelling, or submit a correction request by mail."
        },
        {
          q: "Do I get a new I-94 each time I enter the US?",
          a: "Yes, each entry into the US generates a new I-94 record. Your most recent I-94 is the one that determines your current authorized stay period."
        }
      ],

      cta: {
        title: "Need Help with Your I-94 in Arcadia?",
        text: "Our Arabic-speaking team can help you understand, retrieve, and correct your I-94 arrival/departure record. Don't let I-94 issues affect your immigration status.",
        button: "Schedule Free Consultation"
      }
    },
    ar: {
      slug: "i94-arrival-departure-record-arcadia",
      title: "سجل الوصول/المغادرة I-94 في أركاديا: دليل شامل للمهاجرين العرب",
      subtitle: "فهم وتصحيح سجل I-94 الخاص بك مع مساعدة ناطقة بالعربية",
      metaTitle: "سجل الوصول/المغادرة I-94 أركاديا | خدمات الهجرة العربية",
      metaDescription: "مساعدة متخصصة في I-94 في أركاديا للمهاجرين العرب. استرجاع وتصحيح وفهم سجل الوصول/المغادرة. فريق يتحدث العربية. اتصل (714) 421-8872.",
      keywords: "سجل I-94 أركاديا، سجل الوصول والمغادرة، CBP I-94، التحقق من حالة الهجرة",
      category: "الوثائق",
      location: "أركاديا",
      date: "12 يناير 2026",
      readTime: "9 دقائق قراءة",
      author: "خدمات الهجرة سوكال",
      locationIntro: "للمهاجرين العرب في أركاديا ووادي سان غابرييل، فهم سجل الوصول/المغادرة I-94 الخاص بك أمر حاسم للحفاظ على وضع الهجرة القانوني. تقدم خدمات الهجرة سوكال مساعدة ناطقة بالعربية لمساعدتك في التعامل مع هذه الوثيقة المهمة.",

      sections: [
        {
          heading: "ما هو سجل الوصول/المغادرة I-94؟",
          content: "I-94 هو سجلك الرسمي للوصول إلى الولايات المتحدة. يوثق دخولك القانوني ويظهر المدة المسموح لك بالبقاء. للمهاجرين في أركاديا، هذا السجل ضروري لـ:\n\n• إثبات الدخول القانوني إلى الولايات المتحدة\n• تحديد فترة إقامتك المصرح بها\n• التقدم لمزايا الهجرة (البطاقة الخضراء، تصريح العمل)\n• تمديد حالة التأشيرة\n• التحقق من أهلية العمل"
        },
        {
          heading: "I-94 الإلكتروني مقابل الورقي",
          content: "معظم المسافرين يحصلون الآن على سجلات I-94 إلكترونية بدلاً من النماذج الورقية:",
          table: {
            headers: ["النوع", "متى يصدر", "كيفية الوصول"],
            rows: [
              ["I-94 الإلكتروني", "الوصول جواً/بحراً (الأكثر شيوعاً)", "موقع CBP: i94.cbp.dhs.gov"],
              ["I-94 الورقي", "معابر الحدود البرية", "بطاقة مختومة عند الدخول"],
              ["I-94 الورقي", "مشاكل في النظام الإلكتروني", "يعطيه ضابط CBP"]
            ]
          }
        },
        {
          heading: "كيفية استرجاع I-94 عبر الإنترنت",
          content: "للحصول على سجل I-94 الخاص بك عبر الإنترنت من أركاديا:",
          list: [
            "زيارة i94.cbp.dhs.gov",
            "انقر على 'Get Most Recent I-94'",
            "أدخل اسمك الأول (كما في جواز السفر)",
            "أدخل اسم العائلة (كما في جواز السفر)",
            "أدخل تاريخ ميلادك",
            "أدخل رقم جواز سفرك",
            "اختر بلد جنسيتك",
            "انقر على 'Get Most Recent I-94'"
          ]
        },
        {
          heading: "فهم معلومات I-94 الخاصة بك",
          content: "يحتوي I-94 على معلومات حاسمة:",
          list: [
            "رقم القبول: معرف فريد من 11 رقم",
            "آخر تاريخ دخول: متى دخلت آخر مرة إلى أمريكا",
            "فئة القبول: نوع تأشيرتك (B-2، F-1، H-1B، إلخ)",
            "تاريخ القبول حتى: الموعد النهائي لإقامتك المصرح بها",
            "منفذ الدخول: المطار أو معبر الحدود حيث دخلت"
          ]
        },
        {
          heading: "مشاكل I-94 الشائعة",
          content: "يواجه المهاجرون العرب في أركاديا هذه المشاكل مع I-94:",
          list: [
            "تاريخ القبول خاطئ (أقصر مما يجب)",
            "فئة القبول غير صحيحة",
            "خطأ إملائي في الاسم",
            "سجل I-94 مفقود",
            "رقم جواز السفر خاطئ",
            "إدخالات مكررة تسبب الارتباك"
          ]
        },
        {
          heading: "كيفية تصحيح أخطاء I-94",
          content: "إذا كان I-94 الخاص بك يحتوي على أخطاء، اتخذ هذه الخطوات:\n\n1. في المطار (خلال 24-48 ساعة):\n• عد إلى مكتب CBP في مطار وصولك\n• أحضر جواز سفرك ووثائق التأشيرة\n• اشرح الخطأ واطلب التصحيح\n\n2. بعد مغادرة المطار:\n• زر مكتب فحص CBP المؤجل المحلي\n• الأقرب لأركاديا: مطار لوس أنجلوس الدولي (LAX)\n• أحضر جميع الوثائق الداعمة\n\n3. بالبريد:\n• قدم طلب مركز معلومات CBP\n• أرفق نسخ من جواز السفر والتأشيرة وبطاقة الصعود"
        },
        {
          heading: "D/S مدة الحالة موضحة",
          content: "إذا أظهر I-94 الخاص بك 'D/S' بدلاً من تاريخ، فهذا يعني مدة الحالة. ينطبق هذا على:\n\n• طلاب F-1: البقاء طالما تحافظ على حالة الطالب\n• زوار التبادل J-1: البقاء لمدة البرنامج بالإضافة إلى فترة السماح\n• الدبلوماسيين: البقاء طالما استمرت المهمة الدبلوماسية\n\nمهم: D/S لا تعني إقامة غير محدودة. يجب عليك الحفاظ على حالة صالحة مع مؤسستك الراعية."
        },
        {
          heading: "I-94 لأنواع التأشيرات المختلفة",
          content: "كيف يعمل I-94 لفئات التأشيرات الشائعة:",
          table: {
            headers: ["نوع التأشيرة", "فترة I-94 النموذجية", "التمديد ممكن"],
            rows: [
              ["سائح B-1/B-2", "حتى 6 أشهر", "نعم، قدم قبل انتهاء الصلاحية"],
              ["طالب F-1", "D/S (مدة الحالة)", "حافظ على حالة الطالب"],
              ["عامل H-1B", "حتى 3 سنوات", "نعم، مع طلب صاحب العمل"],
              ["نقل L-1", "حتى 3-7 سنوات", "نعم، مع طلب صاحب العمل"],
              ["خطيب K-1", "90 يوماً", "لا، يجب الزواج خلال 90 يوماً"]
            ]
          }
        },
        {
          heading: "تاريخ I-94 لطلبات الهجرة",
          content: "العديد من طلبات الهجرة تتطلب تاريخ سفرك. يمكنك الوصول إلى تاريخ I-94 الكامل عبر الإنترنت:\n\n1. اذهب إلى i94.cbp.dhs.gov\n2. انقر على 'View Travel History'\n3. أدخل معلوماتك\n4. راجع جميع الإدخالات والمغادرات\n5. اطبع لسجلاتك\n\nهذا التاريخ ضروري لطلبات البطاقة الخضراء والجنسية وإثبات الوجود المستمر."
        },
        {
          heading: "خدمات I-94 في أركاديا",
          content: "تساعد خدمات الهجرة سوكال سكان أركاديا في:",
          list: [
            "استرجاع وطباعة سجلات I-94",
            "تحديد الأخطاء والمشاكل",
            "إعداد طلبات التصحيح",
            "ترجمة الوثائق (من العربية إلى الإنجليزية)",
            "شرح تواريخ I-94 والحالة",
            "التنسيق مع CBP للتصحيحات",
            "طلبات التمديد قبل انتهاء صلاحية I-94"
          ]
        }
      ],

      faqs: [
        {
          q: "أين يمكنني الحصول على مساعدة في I-94 في أركاديا؟",
          a: "خدمات الهجرة سوكال في غاردن غروف تخدم سكان أركاديا مع فريق ناطق بالعربية. نساعد في استرجاع وشرح وتصحيح سجلات I-94 للمجتمع العربي."
        },
        {
          q: "تاريخ I-94 الخاص بي قد مر. ماذا أفعل؟",
          a: "إذا بقيت بعد تاريخ I-94 الخاص بك، قد تكون قد تراكم عليك وجود غير قانوني. اتصل بنا فوراً للحصول على إرشادات حول خياراتك، والتي قد تشمل التقدم للتمديد أو تغيير الحالة."
        },
        {
          q: "هل يمكنني السفر محلياً بدون I-94؟",
          a: "نعم، للسفر الداخلي داخل أمريكا، لا تحتاج I-94. ومع ذلك، احمل دائماً جواز سفرك وتأشيرتك لأغراض التعريف."
        },
        {
          q: "كم مدة حفظ سجلات I-94؟",
          a: "يحتفظ CBP بسجلات I-94 لمدة 5 سنوات. يمكنك استرجاع تاريخ سفرك لآخر 5 سنوات من التاريخ الحالي على موقع CBP."
        },
        {
          q: "ماذا لو كان اسمي مكتوباً بشكل خاطئ على I-94؟",
          a: "يجب تصحيح الأخطاء الإملائية في الاسم. زر مكتب فحص CBP المؤجل مع جواز سفرك الذي يظهر التهجئة الصحيحة، أو قدم طلب تصحيح بالبريد."
        },
        {
          q: "هل أحصل على I-94 جديد في كل مرة أدخل فيها أمريكا؟",
          a: "نعم، كل دخول إلى أمريكا يولد سجل I-94 جديد. آخر I-94 لديك هو الذي يحدد فترة إقامتك المصرح بها الحالية."
        }
      ],

      cta: {
        title: "تحتاج مساعدة في I-94 في أركاديا؟",
        text: "فريقنا الناطق بالعربية يمكنه مساعدتك في فهم واسترجاع وتصحيح سجل الوصول/المغادرة I-94 الخاص بك. لا تدع مشاكل I-94 تؤثر على حالة هجرتك.",
        button: "احجز استشارة مجانية"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default I94ArrivalDepartureArcadia;
