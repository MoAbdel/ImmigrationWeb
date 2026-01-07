import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const OPTtoH1BSanDiego = ({ language }) => {
  const content = {
    en: {
      slug: "opt-to-h1b-san-diego",
      title: "OPT to H-1B Transition in San Diego: Guide for Arab STEM Students",
      subtitle: "Navigating the path from student visa to work visa in San Diego",
      metaTitle: "OPT to H-1B San Diego | F-1 Student Work Visa Transition",
      metaDescription: "OPT to H-1B transition guide for students in San Diego. STEM OPT, lottery strategy. Arabic support. Call (714) 421-8872.",
      keywords: "OPT H-1B San Diego, F-1 student work visa, STEM OPT extension, Arab student immigration",
      category: "Work Visas",
      location: "San Diego",
      date: "December 28, 2025",
      readTime: "8 min read",
      author: "SoCal Immigration Services",
      locationIntro: "San Diego's universities produce many international graduates, including Arab students pursuing careers in America. Transitioning from F-1 student status through OPT to H-1B is a critical path.",

      sections: [
        {
          heading: "Understanding OPT",
          content: "Optional Practical Training (OPT) allows F-1 students to work in their field of study:\n\n• Pre-completion OPT: Part-time during studies\n• Post-completion OPT: 12 months after graduation\n• STEM OPT Extension: Additional 24 months for STEM degrees"
        },
        {
          heading: "The OPT to H-1B Timeline",
          table: {
            headers: ["Period", "Action", "Status"],
            rows: [
              ["Graduation", "Apply for OPT", "F-1 Student"],
              ["OPT Approved", "Work for 12 months", "F-1 OPT"],
              ["STEM Extension", "Additional 24 months (if eligible)", "F-1 STEM OPT"],
              ["March", "Employer registers for H-1B lottery", "F-1 OPT/STEM"],
              ["October 1", "H-1B status begins if selected", "H-1B"]
            ]
          }
        },
        {
          heading: "The Cap-Gap Extension",
          content: "If you're on OPT and your employer files for H-1B:\n\n• Your OPT is automatically extended until September 30\n• If H-1B is approved, you transition on October 1\n• If not selected in lottery, OPT ends on scheduled date"
        },
        {
          heading: "Tips for San Diego Students",
          list: [
            "Start job searching early in your OPT period",
            "Target employers who sponsor H-1Bs",
            "Consider cap-exempt employers (universities, research)",
            "Keep your STEM OPT reporting current",
            "Don't let unemployment exceed 90/150 days"
          ]
        }
      ],

      faqs: [
        { q: "What if I'm not selected in the H-1B lottery?", a: "You can work on STEM OPT (if eligible) and try again. Other options include O-1 visa or employer transfer to cap-exempt organization." },
        { q: "Can I change employers on OPT?", a: "Yes, but you must report the change within 10 days and the new job must be in your field of study." }
      ],

      cta: {
        title: "Need Help with OPT to H-1B?",
        text: "We help San Diego students navigate the transition from student to professional status.",
        button: "Schedule Consultation"
      }
    },
    ar: {
      slug: "opt-to-h1b-san-diego",
      title: "الانتقال من OPT إلى H-1B في سان دييغو: دليل لطلاب STEM العرب",
      subtitle: "التنقل في المسار من تأشيرة الطالب إلى تأشيرة العمل في سان دييغو",
      metaTitle: "OPT إلى H-1B سان دييغو | انتقال تأشيرة عمل طالب F-1",
      metaDescription: "دليل انتقال OPT إلى H-1B للطلاب في سان دييغو. تمديد STEM OPT، استراتيجية القرعة. دعم بالعربية. اتصل (714) 421-8872.",
      keywords: "OPT H-1B سان دييغو، تأشيرة عمل طالب F-1، تمديد STEM OPT، هجرة الطلاب العرب",
      category: "تأشيرات العمل",
      location: "سان دييغو",
      date: "28 ديسمبر 2025",
      readTime: "8 دقائق قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "تنتج جامعات سان دييغو العديد من الخريجين الدوليين، بما في ذلك الطلاب العرب الذين يسعون لمهن في أمريكا. الانتقال من وضع طالب F-1 عبر OPT إلى H-1B هو مسار حرج.",

      sections: [
        {
          heading: "فهم OPT",
          content: "يسمح التدريب العملي الاختياري (OPT) لطلاب F-1 بالعمل في مجال دراستهم:\n\n• OPT قبل الإكمال: بدوام جزئي أثناء الدراسة\n• OPT بعد الإكمال: 12 شهراً بعد التخرج\n• تمديد STEM OPT: 24 شهراً إضافية لدرجات STEM"
        },
        {
          heading: "الجدول الزمني من OPT إلى H-1B",
          table: {
            headers: ["الفترة", "الإجراء", "الوضع"],
            rows: [
              ["التخرج", "التقدم لـ OPT", "طالب F-1"],
              ["موافقة OPT", "العمل لـ 12 شهراً", "F-1 OPT"],
              ["تمديد STEM", "24 شهراً إضافية (إذا مؤهل)", "F-1 STEM OPT"],
              ["مارس", "صاحب العمل يسجل لقرعة H-1B", "F-1 OPT/STEM"],
              ["1 أكتوبر", "وضع H-1B يبدأ إذا تم الاختيار", "H-1B"]
            ]
          }
        },
        {
          heading: "تمديد فجوة الحد",
          content: "إذا كنت على OPT وصاحب عملك يقدم لـ H-1B:\n\n• يتم تمديد OPT الخاص بك تلقائياً حتى 30 سبتمبر\n• إذا تمت الموافقة على H-1B، تنتقل في 1 أكتوبر\n• إذا لم يتم الاختيار في القرعة، ينتهي OPT في التاريخ المحدد"
        },
        {
          heading: "نصائح لطلاب سان دييغو",
          list: [
            "ابدأ البحث عن عمل مبكراً في فترة OPT",
            "استهدف أصحاب العمل الذين يكفلون H-1B",
            "فكر في أصحاب العمل المعفيين من الحد (جامعات، بحث)",
            "حافظ على تقارير STEM OPT الخاصة بك محدثة",
            "لا تدع البطالة تتجاوز 90/150 يوماً"
          ]
        }
      ],

      faqs: [
        { q: "ماذا لو لم يتم اختياري في قرعة H-1B؟", a: "يمكنك العمل على STEM OPT (إذا مؤهل) والمحاولة مرة أخرى. خيارات أخرى تشمل تأشيرة O-1 أو نقل صاحب العمل إلى منظمة معفاة من الحد." },
        { q: "هل يمكنني تغيير أصحاب العمل على OPT؟", a: "نعم، لكن يجب الإبلاغ عن التغيير خلال 10 أيام ويجب أن تكون الوظيفة الجديدة في مجال دراستك." }
      ],

      cta: {
        title: "تحتاج مساعدة في OPT إلى H-1B؟",
        text: "نساعد طلاب سان دييغو في التنقل في الانتقال من وضع الطالب إلى المحترف.",
        button: "حجز استشارة"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default OPTtoH1BSanDiego;
