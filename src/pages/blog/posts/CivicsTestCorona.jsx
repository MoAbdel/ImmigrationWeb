import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const CivicsTestCorona = ({ language }) => {
  const content = {
    en: {
      slug: "civics-test-study-corona",
      title: "Civics Test Study Help in Corona: Citizenship Prep for Arab Seniors",
      subtitle: "Simplified civics test preparation for the Inland Empire's senior Arab community",
      metaTitle: "Civics Test Help Corona | Senior Citizenship Prep Inland Empire",
      metaDescription: "Civics test study help for seniors in Corona. Arabic study materials, patient tutoring. Call (714) 421-8872.",
      keywords: "civics test Corona, citizenship test Inland Empire, senior naturalization, Arabic civics study",
      category: "Citizenship",
      location: "Corona",
      date: "December 28, 2025",
      readTime: "6 min read",
      author: "SoCal Immigration Services",
      locationIntro: "Corona's growing Arab senior population often faces unique challenges when preparing for the U.S. citizenship civics test. We provide patient, culturally-sensitive study support with Arabic materials.",

      sections: [
        {
          heading: "The Civics Test Explained",
          content: "The civics test is an oral exam during your naturalization interview. A USCIS officer asks up to 10 questions from a list of 100. You must answer 6 correctly to pass.\n\nQuestions cover three areas:\n• American Government\n• American History\n• Integrated Civics (geography, symbols, holidays)"
        },
        {
          heading: "Special Rules for Seniors",
          content: "Seniors in Corona may qualify for testing accommodations:",
          table: {
            headers: ["Rule", "Requirements", "Benefits"],
            rows: [
              ["50/20 Rule", "Age 50+ with 20 years as green card holder", "Take test in Arabic"],
              ["55/15 Rule", "Age 55+ with 15 years as green card holder", "Take test in Arabic"],
              ["65/20 Rule", "Age 65+ with 20 years as green card holder", "Simplified test (20 questions only)"]
            ]
          }
        },
        {
          heading: "Study Tips for Senior Learners",
          list: [
            "Study a few questions each day rather than cramming",
            "Use Arabic translations alongside English",
            "Watch videos explaining concepts",
            "Practice with family members",
            "Focus on the 20-question list if eligible",
            "Don't worry about perfect English - understanding is key"
          ]
        },
        {
          heading: "Most Common Test Questions",
          content: "These questions appear most frequently:",
          list: [
            "What is the supreme law of the land? (The Constitution)",
            "What does the Constitution do? (Sets up/defines government, protects rights)",
            "How many senators are there? (100)",
            "Who is the President today?",
            "What are two rights in the Declaration of Independence? (Life, liberty, pursuit of happiness)"
          ]
        }
      ],

      faqs: [
        { q: "Can I take the civics test in Arabic in Corona?", a: "Yes, if you meet the 50/20 or 55/15 requirements." },
        { q: "What if I fail the test?", a: "You can retake it once within 60-90 days." },
        { q: "Do you offer in-person study help?", a: "We provide study materials and can review questions with you." }
      ],

      cta: {
        title: "Need Help Studying for the Civics Test?",
        text: "Our patient Arabic-speaking staff helps Corona seniors prepare for success.",
        button: "Get Study Help"
      }
    },
    ar: {
      slug: "civics-test-study-corona",
      title: "مساعدة دراسة اختبار التربية المدنية في كورونا: التحضير للجنسية لكبار السن العرب",
      subtitle: "تحضير مبسط لاختبار التربية المدنية لمجتمع كبار السن العرب في إنلاند إمباير",
      metaTitle: "مساعدة اختبار التربية المدنية كورونا | التحضير للجنسية لكبار السن إنلاند إمباير",
      metaDescription: "مساعدة دراسة اختبار التربية المدنية لكبار السن في كورونا. مواد دراسية بالعربية، دروس صبورة. اتصل (714) 421-8872.",
      keywords: "اختبار التربية المدنية كورونا، اختبار الجنسية إنلاند إمباير، تجنس كبار السن",
      category: "الجنسية",
      location: "كورونا",
      date: "28 ديسمبر 2025",
      readTime: "6 دقائق قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "غالباً ما يواجه سكان كورونا من كبار السن العرب تحديات فريدة عند التحضير لاختبار التربية المدنية للجنسية الأمريكية. نقدم دعماً دراسياً صبوراً وحساساً ثقافياً مع مواد بالعربية.",

      sections: [
        {
          heading: "شرح اختبار التربية المدنية",
          content: "اختبار التربية المدنية هو اختبار شفهي أثناء مقابلة التجنس. يسأل مسؤول USCIS حتى 10 أسئلة من قائمة 100. يجب أن تجيب على 6 بشكل صحيح للنجاح.\n\nتغطي الأسئلة ثلاثة مجالات:\n• الحكومة الأمريكية\n• التاريخ الأمريكي\n• التربية المدنية المتكاملة (الجغرافيا، الرموز، العطلات)"
        },
        {
          heading: "قواعد خاصة لكبار السن",
          content: "قد يتأهل كبار السن في كورونا لتسهيلات الاختبار:",
          table: {
            headers: ["القاعدة", "المتطلبات", "الفوائد"],
            rows: [
              ["قاعدة 50/20", "عمر 50+ مع 20 سنة كحامل بطاقة خضراء", "إجراء الاختبار بالعربية"],
              ["قاعدة 55/15", "عمر 55+ مع 15 سنة كحامل بطاقة خضراء", "إجراء الاختبار بالعربية"],
              ["قاعدة 65/20", "عمر 65+ مع 20 سنة كحامل بطاقة خضراء", "اختبار مبسط (20 سؤالاً فقط)"]
            ]
          }
        },
        {
          heading: "نصائح الدراسة للمتعلمين الكبار",
          list: [
            "ادرس بعض الأسئلة كل يوم بدلاً من الحشو",
            "استخدم الترجمات العربية إلى جانب الإنجليزية",
            "شاهد مقاطع فيديو تشرح المفاهيم",
            "تدرب مع أفراد الأسرة",
            "ركز على قائمة الـ 20 سؤالاً إذا كنت مؤهلاً",
            "لا تقلق بشأن الإنجليزية المثالية - الفهم هو المفتاح"
          ]
        },
        {
          heading: "أسئلة الاختبار الأكثر شيوعاً",
          content: "هذه الأسئلة تظهر بشكل متكرر:",
          list: [
            "ما هو القانون الأعلى للبلاد؟ (الدستور)",
            "ماذا يفعل الدستور؟ (يؤسس/يحدد الحكومة، يحمي الحقوق)",
            "كم عدد أعضاء مجلس الشيوخ؟ (100)",
            "من هو الرئيس اليوم؟",
            "ما هما حقان في إعلان الاستقلال؟ (الحياة، الحرية، السعي للسعادة)"
          ]
        }
      ],

      faqs: [
        { q: "هل يمكنني إجراء اختبار التربية المدنية بالعربية في كورونا؟", a: "نعم، إذا استوفيت متطلبات 50/20 أو 55/15." },
        { q: "ماذا لو فشلت في الاختبار؟", a: "يمكنك إعادته مرة واحدة خلال 60-90 يوماً." },
        { q: "هل تقدمون مساعدة دراسية شخصية؟", a: "نوفر مواد دراسية ويمكننا مراجعة الأسئلة معك." }
      ],

      cta: {
        title: "تحتاج مساعدة في الدراسة لاختبار التربية المدنية؟",
        text: "فريقنا الصبور الناطق بالعربية يساعد كبار السن في كورونا على التحضير للنجاح.",
        button: "احصل على مساعدة الدراسة"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default CivicsTestCorona;
