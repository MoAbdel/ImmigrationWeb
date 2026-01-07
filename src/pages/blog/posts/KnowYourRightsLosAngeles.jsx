import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const KnowYourRightsLosAngeles = ({ language }) => {
  const content = {
    en: {
      slug: "know-your-rights-los-angeles",
      title: "Know Your Rights in Los Angeles: Immigration Encounters for Arab Community",
      subtitle: "Understanding your constitutional rights during immigration enforcement encounters",
      metaTitle: "Know Your Rights Los Angeles | Immigration Rights Arab Community",
      metaDescription: "Know your immigration rights in Los Angeles. What to do during ICE encounters. Arabic resources. Call (714) 421-8872.",
      keywords: "know your rights Los Angeles, immigration rights, ICE encounter, Arab community rights, LA immigration",
      category: "Community Resources",
      location: "Los Angeles",
      date: "December 28, 2025",
      readTime: "6 min read",
      author: "SoCal Immigration Services",
      locationIntro: "Los Angeles County's Arab-American community should understand their constitutional rights during any encounter with immigration enforcement. These rights apply to everyone in the United States, regardless of immigration status.",

      sections: [
        {
          heading: "Rights Everyone Has",
          content: "Under the U.S. Constitution, everyone in the United States has certain rights:",
          list: [
            "Right to remain silent",
            "Right to not open your door without a warrant",
            "Right to refuse consent to search",
            "Right to speak with a lawyer",
            "Right to not sign any documents you don't understand"
          ]
        },
        {
          heading: "At Your Home",
          content: "If immigration officers come to your home:\n\n• You do NOT have to open the door\n• Ask if they have a warrant signed by a judge\n• A judicial warrant (not ICE administrative warrant) is required to enter\n• You can speak through the door or slip a 'Know Your Rights' card under the door\n• Do not lie but remember you have the right to remain silent"
        },
        {
          heading: "In Public or During Traffic Stops",
          list: [
            "Stay calm and don't run",
            "Don't argue or physically resist",
            "You can ask: 'Am I free to leave?'",
            "If detained, state: 'I wish to remain silent and speak with a lawyer'",
            "Don't answer questions about your birthplace or immigration status",
            "Don't show fake documents"
          ]
        },
        {
          heading: "If You Are Arrested",
          list: [
            "State clearly: 'I wish to remain silent'",
            "Don't sign anything without an attorney reviewing it",
            "You have the right to a hearing before an immigration judge",
            "You have the right to contact your consulate",
            "Memorize an emergency contact number"
          ]
        },
        {
          heading: "Prepare Your Family",
          content: "Have a plan in place:\n\n• Memorize emergency contact numbers\n• Know the location of important documents\n• Designate a trusted person for your children\n• Carry a 'Know Your Rights' card\n• Keep copies of immigration documents in a safe place"
        }
      ],

      faqs: [
        { q: "Do I have to answer questions about my immigration status?", a: "No. You have the right to remain silent. You don't have to answer questions about where you were born or your immigration status." },
        { q: "Can ICE arrest me at my workplace?", a: "ICE can conduct workplace enforcement, but you still have rights. You can remain silent and ask for a lawyer." },
        { q: "What if ICE has an arrest warrant for me?", a: "An ICE administrative warrant (I-200) doesn't give them the right to enter your home without consent. A judicial warrant signed by a judge does." }
      ],

      cta: {
        title: "Need Immigration Help?",
        text: "If you or a family member needs immigration document assistance, contact our Arabic-speaking team.",
        button: "Contact Us"
      }
    },
    ar: {
      slug: "know-your-rights-los-angeles",
      title: "اعرف حقوقك في لوس أنجلوس: مواجهات الهجرة للمجتمع العربي",
      subtitle: "فهم حقوقك الدستورية أثناء مواجهات إنفاذ الهجرة",
      metaTitle: "اعرف حقوقك لوس أنجلوس | حقوق الهجرة للمجتمع العربي",
      metaDescription: "اعرف حقوقك في الهجرة في لوس أنجلوس. ماذا تفعل أثناء مواجهات ICE. موارد بالعربية. اتصل (714) 421-8872.",
      keywords: "اعرف حقوقك لوس أنجلوس، حقوق الهجرة، مواجهة ICE، حقوق المجتمع العربي",
      category: "موارد المجتمع",
      location: "لوس أنجلوس",
      date: "28 ديسمبر 2025",
      readTime: "6 دقائق قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "يجب أن يفهم المجتمع العربي الأمريكي في مقاطعة لوس أنجلوس حقوقهم الدستورية أثناء أي مواجهة مع إنفاذ الهجرة. تنطبق هذه الحقوق على كل شخص في الولايات المتحدة، بغض النظر عن وضع الهجرة.",

      sections: [
        {
          heading: "الحقوق التي يملكها الجميع",
          content: "بموجب الدستور الأمريكي، لكل شخص في الولايات المتحدة حقوق معينة:",
          list: [
            "الحق في التزام الصمت",
            "الحق في عدم فتح بابك بدون مذكرة",
            "الحق في رفض الموافقة على التفتيش",
            "الحق في التحدث مع محامٍ",
            "الحق في عدم التوقيع على أي وثائق لا تفهمها"
          ]
        },
        {
          heading: "في منزلك",
          content: "إذا جاء ضباط الهجرة إلى منزلك:\n\n• لا يجب عليك فتح الباب\n• اسأل إذا كان لديهم مذكرة موقعة من قاضٍ\n• مذكرة قضائية (وليس مذكرة ICE الإدارية) مطلوبة للدخول\n• يمكنك التحدث عبر الباب أو تمرير بطاقة 'اعرف حقوقك' تحت الباب\n• لا تكذب لكن تذكر أن لديك الحق في التزام الصمت"
        },
        {
          heading: "في الأماكن العامة أو أثناء التوقف المروري",
          list: [
            "ابقَ هادئاً ولا تهرب",
            "لا تجادل أو تقاوم جسدياً",
            "يمكنك أن تسأل: 'هل أنا حر في المغادرة؟'",
            "إذا احتجزت، قل: 'أرغب في التزام الصمت والتحدث مع محامٍ'",
            "لا تجب على أسئلة عن مكان ولادتك أو وضع الهجرة",
            "لا تظهر وثائق مزورة"
          ]
        },
        {
          heading: "إذا تم اعتقالك",
          list: [
            "قل بوضوح: 'أرغب في التزام الصمت'",
            "لا توقع أي شيء بدون مراجعة محامٍ",
            "لديك الحق في جلسة استماع أمام قاضي الهجرة",
            "لديك الحق في الاتصال بقنصليتك",
            "احفظ رقم طوارئ للاتصال"
          ]
        },
        {
          heading: "جهز عائلتك",
          content: "ضع خطة في مكان:\n\n• احفظ أرقام الطوارئ للاتصال\n• اعرف موقع الوثائق المهمة\n• عين شخصاً موثوقاً لأطفالك\n• احمل بطاقة 'اعرف حقوقك'\n• احتفظ بنسخ من وثائق الهجرة في مكان آمن"
        }
      ],

      faqs: [
        { q: "هل يجب أن أجيب على أسئلة حول وضع الهجرة؟", a: "لا. لديك الحق في التزام الصمت. لا يجب أن تجيب على أسئلة حول مكان ولادتك أو وضع الهجرة." },
        { q: "هل يمكن لـ ICE اعتقالي في مكان عملي؟", a: "يمكن لـ ICE إجراء إنفاذ في مكان العمل، لكن لا تزال لديك حقوق. يمكنك التزام الصمت وطلب محامٍ." },
        { q: "ماذا لو كان لدى ICE مذكرة اعتقال لي؟", a: "مذكرة ICE الإدارية (I-200) لا تعطيهم الحق في دخول منزلك بدون موافقة. مذكرة قضائية موقعة من قاضٍ تفعل." }
      ],

      cta: {
        title: "تحتاج مساعدة في الهجرة؟",
        text: "إذا كنت أنت أو أحد أفراد عائلتك تحتاج مساعدة في وثائق الهجرة، اتصل بفريقنا الناطق بالعربية.",
        button: "اتصل بنا"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default KnowYourRightsLosAngeles;
