import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const H1BVisaIrvine = ({ language }) => {
  const content = {
    en: {
      slug: "h1b-visa-services-irvine",
      title: "H-1B Visa Services in Irvine: For Middle Eastern Tech Professionals",
      subtitle: "Expert H-1B document preparation for Irvine's professional community",
      metaTitle: "H-1B Visa Irvine | Tech Professional Immigration Orange County",
      metaDescription: "H-1B visa help for tech professionals in Irvine. Lottery strategy, transfer assistance. Arabic support. Call (714) 421-8872.",
      keywords: "H-1B visa Irvine, tech immigration Orange County, work visa professionals, Arab H-1B help",
      category: "Work Visas",
      location: "Irvine",
      date: "December 28, 2025",
      readTime: "9 min read",
      author: "SoCal Immigration Services",
      locationIntro: "Irvine is a major tech hub in Orange County, home to many companies that sponsor H-1B workers. For Middle Eastern tech professionals, understanding the H-1B process is essential for career growth in America.",

      sections: [
        {
          heading: "What is the H-1B Visa?",
          content: "The H-1B is a non-immigrant work visa for specialty occupations requiring at least a bachelor's degree. Common H-1B fields include:\n\n• Software Engineering/IT\n• Engineering (all types)\n• Finance and Accounting\n• Healthcare (doctors, therapists)\n• Architecture\n• Education"
        },
        {
          heading: "H-1B Requirements",
          list: [
            "Job offer from U.S. employer willing to sponsor",
            "Position requires specialty occupation",
            "You have at least a bachelor's degree in related field",
            "Employer agrees to pay prevailing wage",
            "Selected in H-1B lottery (if cap-subject)"
          ]
        },
        {
          heading: "The H-1B Lottery",
          content: "Most H-1B petitions are subject to an annual cap:",
          table: {
            headers: ["Category", "Annual Cap", "Notes"],
            rows: [
              ["Regular Cap", "65,000", "Available to all employers"],
              ["Master's Cap", "20,000", "U.S. master's or higher"],
              ["Cap-Exempt", "Unlimited", "Universities, research orgs"]
            ]
          }
        },
        {
          heading: "Timeline for H-1B",
          steps: [
            { title: "March", description: "Employer registers for lottery" },
            { title: "April", description: "Lottery selection announced" },
            { title: "April-June", description: "Full petition filed if selected" },
            { title: "October 1", description: "Earliest start date" }
          ]
        },
        {
          heading: "H-1B Transfers for Irvine Professionals",
          content: "Already have an H-1B and want to change employers in Irvine? H-1B transfer allows you to:\n\n• Start working for new employer once petition is filed\n• Not subject to lottery (cap-exempt)\n• Maintain your current H-1B time\n• Port your priority date if you have pending green card"
        }
      ],

      faqs: [
        { q: "How long can I stay on H-1B?", a: "Initial period is 3 years, extendable to 6 years total. Extensions beyond 6 years possible with pending green card." },
        { q: "Can my spouse work on H-4?", a: "H-4 spouses can apply for work authorization if the H-1B holder has an approved I-140 or extended H-1B." },
        { q: "What if I'm not selected in the lottery?", a: "You can try again next year, seek cap-exempt employer, or explore other visa options." }
      ],

      cta: {
        title: "Need H-1B Help in Irvine?",
        text: "Our team helps tech professionals navigate H-1B petitions, transfers, and extensions.",
        button: "Schedule Consultation"
      }
    },
    ar: {
      slug: "h1b-visa-services-irvine",
      title: "خدمات تأشيرة H-1B في إرفاين: لمتخصصي التقنية من الشرق الأوسط",
      subtitle: "إعداد الوثائق المتخصص لـ H-1B لمجتمع المحترفين في إرفاين",
      metaTitle: "تأشيرة H-1B إرفاين | هجرة المحترفين التقنيين أورانج كاونتي",
      metaDescription: "مساعدة تأشيرة H-1B للمحترفين التقنيين في إرفاين. استراتيجية القرعة، مساعدة النقل. دعم بالعربية. اتصل (714) 421-8872.",
      keywords: "تأشيرة H-1B إرفاين، هجرة التقنية أورانج كاونتي، تأشيرة عمل المحترفين",
      category: "تأشيرات العمل",
      location: "إرفاين",
      date: "28 ديسمبر 2025",
      readTime: "9 دقائق قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "إرفاين هي مركز تقنية رئيسي في مقاطعة أورانج، موطن للعديد من الشركات التي تكفل عمال H-1B. للمحترفين التقنيين من الشرق الأوسط، فهم عملية H-1B ضروري للنمو المهني في أمريكا.",

      sections: [
        {
          heading: "ما هي تأشيرة H-1B؟",
          content: "H-1B هي تأشيرة عمل غير مهاجرة للمهن المتخصصة التي تتطلب على الأقل درجة بكالوريوس. تشمل مجالات H-1B الشائعة:\n\n• هندسة البرمجيات/تقنية المعلومات\n• الهندسة (جميع الأنواع)\n• المالية والمحاسبة\n• الرعاية الصحية (أطباء، معالجين)\n• العمارة\n• التعليم"
        },
        {
          heading: "متطلبات H-1B",
          list: [
            "عرض عمل من صاحب عمل أمريكي مستعد للكفالة",
            "الوظيفة تتطلب مهنة متخصصة",
            "لديك على الأقل درجة بكالوريوس في مجال ذي صلة",
            "صاحب العمل يوافق على دفع الأجر السائد",
            "تم اختيارك في قرعة H-1B (إذا خاضع للحد)"
          ]
        },
        {
          heading: "قرعة H-1B",
          content: "معظم طلبات H-1B تخضع لحد سنوي:",
          table: {
            headers: ["الفئة", "الحد السنوي", "ملاحظات"],
            rows: [
              ["الحد العادي", "65,000", "متاح لجميع أصحاب العمل"],
              ["حد الماجستير", "20,000", "ماجستير أمريكي أو أعلى"],
              ["معفى من الحد", "غير محدود", "الجامعات، منظمات البحث"]
            ]
          }
        },
        {
          heading: "الجدول الزمني لـ H-1B",
          steps: [
            { title: "مارس", description: "صاحب العمل يسجل للقرعة" },
            { title: "أبريل", description: "إعلان اختيار القرعة" },
            { title: "أبريل-يونيو", description: "تقديم الطلب الكامل إذا تم الاختيار" },
            { title: "1 أكتوبر", description: "أول تاريخ بداية" }
          ]
        },
        {
          heading: "نقل H-1B لمحترفي إرفاين",
          content: "لديك بالفعل H-1B وتريد تغيير أصحاب العمل في إرفاين؟ نقل H-1B يسمح لك بـ:\n\n• البدء بالعمل لصاحب العمل الجديد بمجرد تقديم الطلب\n• غير خاضع للقرعة (معفى من الحد)\n• الحفاظ على وقت H-1B الحالي\n• نقل تاريخ الأولوية إذا كان لديك بطاقة خضراء قيد الانتظار"
        }
      ],

      faqs: [
        { q: "كم يمكنني البقاء على H-1B؟", a: "الفترة الأولية 3 سنوات، قابلة للتمديد إلى 6 سنوات إجمالي. تمديدات أبعد من 6 سنوات ممكنة مع بطاقة خضراء قيد الانتظار." },
        { q: "هل يمكن لزوجتي العمل على H-4؟", a: "يمكن لأزواج H-4 التقدم لتصريح العمل إذا كان حامل H-1B لديه I-140 موافق عليه أو H-1B ممدد." },
        { q: "ماذا لو لم يتم اختياري في القرعة؟", a: "يمكنك المحاولة مرة أخرى العام القادم، البحث عن صاحب عمل معفى من الحد، أو استكشاف خيارات تأشيرة أخرى." }
      ],

      cta: {
        title: "تحتاج مساعدة H-1B في إرفاين؟",
        text: "فريقنا يساعد المحترفين التقنيين في التنقل في طلبات H-1B والنقل والتمديدات.",
        button: "حجز استشارة"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default H1BVisaIrvine;
