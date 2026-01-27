import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const CitizenshipTestStudyMaterialsBuenaPark = ({ language }) => {
  const content = {
    en: {
      slug: "citizenship-test-study-materials-buena-park",
      title: "Citizenship Test Study Materials in Buena Park: Civics and English Exam Prep",
      subtitle: "Free resources and study guides for naturalization test preparation",
      metaTitle: "Citizenship Test Study Materials Buena Park | Civics English Exam Prep",
      metaDescription: "Free citizenship test study materials for Buena Park residents. 100 civics questions, English test prep, and Arabic study resources. Call (714) 421-8872.",
      keywords: "citizenship test study Buena Park, civics test 100 questions, naturalization exam prep, English test citizenship, Arabic citizenship study",
      category: "Citizenship",
      location: "Buena Park",
      date: "January 25, 2026",
      readTime: "11 min read",
      author: "SoCal Immigration Services",
      locationIntro: "For Buena Park residents preparing for the U.S. citizenship test, having the right study materials is essential. SoCal Immigration Services provides Arabic-speaking assistance and study resources to help you pass both the civics and English portions of the naturalization exam.",

      sections: [
        {
          heading: "Understanding the Citizenship Test",
          content: "The naturalization test has two main components:\n\nCivics Test:\n• 100 possible questions (you'll be asked 10)\n• Must answer 6 correctly to pass\n• Questions about U.S. history and government\n• Oral test administered by USCIS officer\n\nEnglish Test:\n• Reading: Read 1 of 3 sentences correctly\n• Writing: Write 1 of 3 sentences correctly\n• Speaking: Evaluated during interview"
        },
        {
          heading: "Official USCIS Study Materials",
          content: "Free resources available from USCIS:",
          list: [
            "100 Civics Questions and Answers (official list)",
            "Reading Vocabulary List (specific words to study)",
            "Writing Vocabulary List (words you may need to write)",
            "USCIS Civics Practice Test online",
            "Civics Flash Cards (printable)",
            "Audio files of 100 questions (for listening practice)"
          ]
        },
        {
          heading: "The 100 Civics Questions - Categories",
          content: "Questions are organized by topic:",
          table: {
            headers: ["Category", "Number of Questions", "Topics Covered"],
            rows: [
              ["American Government", "57 questions", "Branches, rights, Constitution"],
              ["American History", "32 questions", "Colonial, 1800s, recent history"],
              ["Integrated Civics", "11 questions", "Geography, symbols, holidays"]
            ]
          }
        },
        {
          heading: "Most Important Questions to Know",
          content: "Focus on these frequently asked questions:\n\nGovernment:\n• What is the supreme law of the land? (Constitution)\n• How many amendments does the Constitution have? (27)\n• What are two rights in the Declaration of Independence? (Life, liberty, pursuit of happiness)\n• What is freedom of religion?\n• Who is the President now?\n• Who is your state's Governor?\n\nHistory:\n• What did the Declaration of Independence do?\n• When was the Constitution written? (1787)\n• Who wrote the Declaration of Independence? (Jefferson)\n• What was one reason for the Civil War?"
        },
        {
          heading: "English Reading Test Preparation",
          content: "The reading test uses vocabulary from these categories:",
          list: [
            "People: Abraham Lincoln, George Washington, Presidents",
            "Civics: American flag, Bill of Rights, Constitution",
            "Places: United States, America, U.S., states, capitals",
            "Holidays: Independence Day, Presidents' Day, Memorial Day",
            "Question words: How, What, When, Where, Who, Why",
            "Verbs: can, come, do, does, have, is, lives, want"
          ]
        },
        {
          heading: "English Writing Test Preparation",
          content: "Practice writing sentences with these common patterns:\n\nSample Sentences:\n• 'The President lives in the White House.'\n• 'Congress makes federal laws.'\n• 'Washington is the father of our nation.'\n• 'Citizens can vote for President.'\n\nPractice writing clearly and legibly. Spelling must be correct."
        },
        {
          heading: "Study Strategies for Success",
          content: "Effective study approaches:",
          list: [
            "Study 15-30 minutes daily rather than long sessions",
            "Use flashcards for civics questions",
            "Listen to audio files while commuting",
            "Practice reading aloud daily",
            "Write vocabulary words repeatedly",
            "Take practice tests weekly",
            "Study with family members"
          ]
        },
        {
          heading: "Special Accommodations",
          content: "Some applicants qualify for modified tests:\n\n65/20 Exception:\n• 65+ years old AND\n• 20+ years as permanent resident\n• Only need to study 20 civics questions\n• Test given in native language\n\nDisability Accommodations:\n• Medical waiver (N-648) for disabilities\n• Sign language interpreters\n• Extended time for tests"
        },
        {
          heading: "Buena Park Study Resources",
          content: "SoCal Immigration Services helps Buena Park residents:",
          list: [
            "Free citizenship test study guides",
            "Practice test sessions",
            "English tutoring for the exam",
            "Arabic-language civics explanations",
            "Mock interview practice",
            "Complete N-400 application assistance"
          ]
        }
      ],

      faqs: [
        {
          q: "How many questions are on the citizenship civics test?",
          a: "You'll be asked up to 10 questions from the 100 possible questions. You must answer 6 correctly to pass. The officer stops asking once you get 6 right."
        },
        {
          q: "Can I take the citizenship test in Arabic?",
          a: "The test is normally in English. However, if you're 65+ and have been a permanent resident for 20+ years, you may take the civics test in Arabic with an interpreter."
        },
        {
          q: "What happens if I fail the citizenship test?",
          a: "You'll be rescheduled for a second attempt within 60-90 days. You can retake only the portion(s) you failed. If you fail twice, your application is denied and you must reapply."
        },
        {
          q: "Where can I get free study materials?",
          a: "USCIS provides free materials at uscis.gov/citizenship. This includes the 100 questions, vocabulary lists, flashcards, and practice tests. SoCal Immigration Services also provides free study guides."
        },
        {
          q: "How long should I study for the citizenship test?",
          a: "Most people study for 2-3 months. Study 15-30 minutes daily rather than cramming. Take practice tests to identify weak areas."
        },
        {
          q: "Is the English test hard?",
          a: "The English test uses basic vocabulary from a specific list. If you've lived in the U.S. for years, you likely know most words. Practice reading and writing the specific vocabulary lists from USCIS."
        }
      ],

      cta: {
        title: "Ready to Start Studying for Citizenship in Buena Park?",
        text: "Our team provides study materials, practice tests, and Arabic-language support to help you pass the naturalization exam.",
        button: "Get Free Study Materials"
      }
    },
    ar: {
      slug: "citizenship-test-study-materials-buena-park",
      title: "مواد دراسة اختبار الجنسية في بوينا بارك: التحضير لامتحان التربية المدنية واللغة الإنجليزية",
      subtitle: "موارد مجانية وأدلة دراسة للتحضير لاختبار التجنس",
      metaTitle: "مواد دراسة اختبار الجنسية بوينا بارك | التحضير لامتحان التربية المدنية والإنجليزية",
      metaDescription: "مواد دراسة مجانية لاختبار الجنسية لسكان بوينا بارك. 100 سؤال تربية مدنية، التحضير لاختبار الإنجليزية، وموارد دراسة بالعربية. اتصل (714) 421-8872.",
      keywords: "دراسة اختبار الجنسية بوينا بارك، 100 سؤال التربية المدنية، التحضير لامتحان التجنس",
      category: "الجنسية",
      location: "بوينا بارك",
      date: "25 يناير 2026",
      readTime: "11 دقيقة قراءة",
      author: "خدمات الهجرة في جنوب كاليفورنيا",
      locationIntro: "لسكان بوينا بارك الذين يستعدون لاختبار الجنسية الأمريكية، امتلاك مواد الدراسة المناسبة أمر ضروري. تقدم خدمات الهجرة في جنوب كاليفورنيا مساعدة باللغة العربية وموارد دراسة.",

      sections: [
        {
          heading: "فهم اختبار الجنسية",
          content: "لاختبار التجنس مكونان رئيسيان:\n\nاختبار التربية المدنية:\n• 100 سؤال محتمل (سيُطرح عليك 10)\n• يجب الإجابة على 6 بشكل صحيح للنجاح\n• أسئلة عن التاريخ والحكومة الأمريكية\n• اختبار شفهي يديره ضابط USCIS\n\nاختبار الإنجليزية:\n• القراءة: قراءة جملة واحدة من 3 بشكل صحيح\n• الكتابة: كتابة جملة واحدة من 3 بشكل صحيح\n• التحدث: يُقيّم أثناء المقابلة"
        },
        {
          heading: "مواد الدراسة الرسمية من USCIS",
          content: "موارد مجانية متاحة من USCIS:",
          list: [
            "100 سؤال وجواب في التربية المدنية (القائمة الرسمية)",
            "قائمة مفردات القراءة (كلمات محددة للدراسة)",
            "قائمة مفردات الكتابة (كلمات قد تحتاج لكتابتها)",
            "اختبار ممارسة التربية المدنية من USCIS عبر الإنترنت",
            "بطاقات التربية المدنية (قابلة للطباعة)",
            "ملفات صوتية لـ 100 سؤال (لممارسة الاستماع)"
          ]
        },
        {
          heading: "أهم الأسئلة التي يجب معرفتها",
          content: "ركز على هذه الأسئلة المتكررة:\n\nالحكومة:\n• ما هو القانون الأعلى للبلاد؟ (الدستور)\n• كم تعديلاً يحتوي الدستور؟ (27)\n• ما هما حقان في إعلان الاستقلال؟ (الحياة، الحرية، السعي للسعادة)\n• ما هي حرية الدين؟\n• من هو الرئيس الآن؟\n• من هو حاكم ولايتك؟\n\nالتاريخ:\n• ماذا فعل إعلان الاستقلال؟\n• متى كُتب الدستور؟ (1787)\n• من كتب إعلان الاستقلال؟ (جيفرسون)\n• ما كان أحد أسباب الحرب الأهلية؟"
        }
      ],

      faqs: [
        {
          q: "كم عدد الأسئلة في اختبار التربية المدنية للجنسية؟",
          a: "سيُطرح عليك حتى 10 أسئلة من 100 سؤال محتمل. يجب أن تجيب على 6 بشكل صحيح للنجاح. يتوقف الضابط عن السؤال بمجرد أن تجيب على 6 صحيحة."
        },
        {
          q: "هل يمكنني إجراء اختبار الجنسية بالعربية؟",
          a: "الاختبار عادة بالإنجليزية. ومع ذلك، إذا كان عمرك 65+ وكنت مقيماً دائماً لمدة 20+ سنة، يمكنك إجراء اختبار التربية المدنية بالعربية مع مترجم."
        },
        {
          q: "ماذا يحدث إذا فشلت في اختبار الجنسية؟",
          a: "ستُحدد لك موعد لمحاولة ثانية في غضون 60-90 يوماً. يمكنك إعادة الجزء الذي فشلت فيه فقط. إذا فشلت مرتين، يُرفض طلبك ويجب عليك التقديم من جديد."
        }
      ],

      cta: {
        title: "هل أنت مستعد لبدء الدراسة للجنسية في بوينا بارك؟",
        text: "يوفر فريقنا مواد دراسة واختبارات تجريبية ودعم باللغة العربية لمساعدتك في اجتياز امتحان التجنس.",
        button: "احصل على مواد دراسة مجانية"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default CitizenshipTestStudyMaterialsBuenaPark;
