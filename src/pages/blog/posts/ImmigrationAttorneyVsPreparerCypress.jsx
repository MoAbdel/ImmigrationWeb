import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const ImmigrationAttorneyVsPreparerCypress = ({ language }) => {
  const content = {
    en: {
      slug: "immigration-attorney-vs-preparer-cypress",
      title: "Immigration Attorney vs Document Preparer in Cypress: Know the Difference",
      subtitle: "Understanding who can legally help with your immigration case",
      metaTitle: "Immigration Attorney vs Document Preparer Cypress | Legal Immigration Help",
      metaDescription: "Immigration attorney vs document preparer in Cypress. Who can give legal advice, document preparation services, notario fraud warning. Arabic support. Call (714) 421-8872.",
      keywords: "immigration attorney Cypress, document preparer, notario fraud, immigration legal help, who can help immigration",
      category: "Community",
      location: "Cypress",
      date: "January 14, 2026",
      readTime: "10 min read",
      author: "SoCal Immigration Services",
      image: "/images/blog/community.jpg",
      summary: "Understanding the difference between immigration attorneys and document preparers is crucial for protecting yourself from fraud. While both can assist with paperwork, only attorneys can provide legal advice.",
      locationIntro: "For Cypress residents seeking immigration help, knowing who can legally assist you is essential. SoCal Immigration Services helps Arab families understand their options and avoid unauthorized practice of law scams.",

      sections: [
        {
          heading: "Who Can Legally Help with Immigration?",
          content: "Only certain professionals are authorized to provide immigration services:\n\n• Licensed Immigration Attorneys\n• DOJ-Accredited Representatives\n• Notaries (document preparation only - NOT legal advice)\n• Immigration Document Preparers (typing only)\n\nUnderstanding these distinctions protects you from fraud and ensures you get proper help."
        },
        {
          heading: "Immigration Attorneys",
          content: "What licensed attorneys can do:",
          table: {
            headers: ["Service", "Attorney?", "Document Preparer?"],
            rows: [
              ["Give legal advice", "Yes", "NO"],
              ["Recommend what forms to file", "Yes", "NO"],
              ["Explain immigration options", "Yes", "NO"],
              ["Represent you at USCIS", "Yes", "NO"],
              ["Appear in immigration court", "Yes", "NO"],
              ["Analyze your case strategy", "Yes", "NO"],
              ["Fill out forms based on your answers", "Yes", "Yes (typing only)"],
              ["Translate documents", "Yes", "Yes"],
              ["Make copies and organize documents", "Yes", "Yes"]
            ]
          }
        },
        {
          heading: "Immigration Document Preparers",
          content: "What document preparers can legally do:\n\n• Type information you provide onto forms\n• Make copies of documents\n• Translate documents (certified translation)\n• Mail documents on your behalf\n• Provide general information about forms\n\nThey CANNOT give legal advice or tell you what to file."
        },
        {
          heading: "DOJ-Accredited Representatives",
          content: "A middle option exists through DOJ accreditation:\n\n• Work for recognized non-profit organizations\n• Can provide legal advice\n• Can represent you before USCIS\n• Must complete training and be approved\n• Often offer lower-cost services\n• Verify accreditation at justice.gov"
        },
        {
          heading: "The 'Notario' Fraud Warning",
          content: "BEWARE of 'notario' fraud in immigrant communities:\n\n• In many countries, 'notario' means attorney\n• In the U.S., notary public is NOT an attorney\n• Notaries cannot give legal advice\n• Many scams target Spanish and Arabic speakers\n• Unauthorized practice of law is a crime\n• Victims often lose money and cases"
        },
        {
          heading: "Signs of Immigration Fraud",
          content: "Red flags to watch for:",
          list: [
            "Guarantees approval of your case",
            "Claims special relationship with USCIS",
            "Asks you to sign blank forms",
            "Won't give you copies of filed documents",
            "Uses 'notario' or similar titles",
            "Very low prices that seem too good",
            "No written contract or receipts",
            "Discourages you from asking questions",
            "Pressures you to decide immediately"
          ]
        },
        {
          heading: "When You Need an Attorney",
          content: "Situations that typically require legal representation:",
          list: [
            "Complex cases with prior immigration violations",
            "Criminal history affecting immigration",
            "Prior deportation or removal orders",
            "Immigration court proceedings",
            "Appeals of denied cases",
            "Waivers for inadmissibility",
            "Asylum or persecution claims",
            "Business or investment immigration"
          ]
        },
        {
          heading: "When Document Preparation May Suffice",
          content: "Simpler cases where document prep might be enough:\n\n• Straightforward citizenship applications\n• Simple renewal applications\n• Basic family petitions (no complications)\n• Green card renewal\n• Travel document applications\n\nEven simple cases can become complex. When in doubt, consult an attorney."
        },
        {
          heading: "Questions to Ask Before Hiring",
          content: "Protect yourself by asking:",
          steps: [
            {
              title: "Ask About Credentials",
              description: "Are you an attorney? Where are you licensed?"
            },
            {
              title: "Request Bar Number",
              description: "Verify attorney license with State Bar"
            },
            {
              title: "Get Written Agreement",
              description: "What services will you provide?"
            },
            {
              title: "Understand Costs",
              description: "Get pricing in writing upfront"
            },
            {
              title: "Document Copies",
              description: "Will I get copies of everything filed?"
            },
            {
              title: "Check Reviews",
              description: "Look up online reviews and complaints"
            }
          ]
        },
        {
          heading: "If You've Been a Victim",
          content: "Steps to take if you've been defrauded:\n\n• Report to local police\n• File complaint with State Bar (if attorney)\n• Report to FTC (Federal Trade Commission)\n• Contact your state attorney general\n• Gather all documents and receipts\n• Consult a legitimate attorney about your case"
        },
        {
          heading: "SoCal Immigration Services Approach",
          content: "Our document preparation services in Cypress include:",
          list: [
            "Honest explanation of what we can and cannot do",
            "Clear written agreements",
            "Referrals to attorneys for legal advice needs",
            "Transparent pricing",
            "Copies of all documents",
            "Arabic and English speaking staff",
            "No false promises or guarantees"
          ]
        }
      ],

      faqs: [
        {
          q: "Can document preparers tell me what form to file?",
          a: "No. Recommending which form to file is legal advice, which only attorneys can provide. Document preparers can only type information onto forms you have already selected."
        },
        {
          q: "Is it safe to use a document preparer?",
          a: "For simple, straightforward cases, yes - as long as you understand they cannot give legal advice. For any complication, consult an attorney first to know what you need."
        },
        {
          q: "How do I verify if someone is a real attorney?",
          a: "Ask for their bar number and state of license. Then verify with that state's bar association. California attorneys can be verified at calbar.ca.gov."
        },
        {
          q: "Why are document preparers less expensive?",
          a: "Document preparers have less training and cannot provide legal services. They're essentially providing typing and translation services, not legal analysis or representation."
        },
        {
          q: "What if I already paid a notario who wasn't authorized?",
          a: "Gather all documents and receipts, report to authorities, and consult a legitimate attorney immediately. Acting fast may help save your case if incorrect forms were filed."
        },
        {
          q: "Can family members help with my immigration paperwork?",
          a: "Family can help you gather documents and fill out forms for free, but they also cannot give legal advice. For anything complex, professional help is recommended."
        }
      ],

      cta: {
        title: "Need Honest Immigration Document Help?",
        text: "We clearly explain what services we provide and when you need attorney assistance. No false promises - just reliable document preparation.",
        button: "Schedule Free Consultation"
      }
    },
    ar: {
      slug: "immigration-attorney-vs-preparer-cypress",
      title: "محامي الهجرة مقابل معد الوثائق في سايبرس: اعرف الفرق",
      subtitle: "فهم من يمكنه مساعدتك قانونياً في قضية هجرتك",
      metaTitle: "محامي الهجرة مقابل معد الوثائق سايبرس | مساعدة الهجرة القانونية",
      metaDescription: "محامي الهجرة مقابل معد الوثائق في سايبرس. من يمكنه تقديم المشورة القانونية، خدمات إعداد الوثائق، تحذير احتيال نوتاريو. دعم عربي. اتصل (714) 421-8872.",
      keywords: "محامي الهجرة سايبرس، معد الوثائق، احتيال نوتاريو، مساعدة الهجرة القانونية",
      category: "المجتمع",
      location: "سايبرس",
      date: "14 يناير 2026",
      readTime: "10 دقيقة قراءة",
      author: "خدمات الهجرة في جنوب كاليفورنيا",
      image: "/images/blog/community.jpg",
      summary: "فهم الفرق بين محامي الهجرة ومعدي الوثائق أمر حاسم لحماية نفسك من الاحتيال. بينما يمكن لكليهما المساعدة في الأوراق، فقط المحامون يمكنهم تقديم المشورة القانونية.",
      locationIntro: "لسكان سايبرس الذين يبحثون عن مساعدة الهجرة، معرفة من يمكنه مساعدتك قانونياً أمر ضروري. تساعد خدمات الهجرة في جنوب كاليفورنيا العائلات العربية في فهم خياراتها وتجنب عمليات الاحتيال غير المصرح بها في ممارسة القانون.",

      sections: [
        {
          heading: "من يمكنه المساعدة قانونياً في الهجرة؟",
          content: "فقط متخصصون معينون مصرح لهم بتقديم خدمات الهجرة:\n\n• محامو الهجرة المرخصون\n• الممثلون المعتمدون من وزارة العدل\n• كتاب العدل (إعداد الوثائق فقط - ليس المشورة القانونية)\n• معدو وثائق الهجرة (الكتابة فقط)\n\nفهم هذه الفروق يحميك من الاحتيال ويضمن حصولك على المساعدة المناسبة."
        },
        {
          heading: "محامو الهجرة",
          content: "ما يمكن للمحامين المرخصين فعله:",
          table: {
            headers: ["الخدمة", "المحامي؟", "معد الوثائق؟"],
            rows: [
              ["تقديم المشورة القانونية", "نعم", "لا"],
              ["التوصية بالنماذج للتقديم", "نعم", "لا"],
              ["شرح خيارات الهجرة", "نعم", "لا"],
              ["تمثيلك أمام USCIS", "نعم", "لا"],
              ["الظهور في محكمة الهجرة", "نعم", "لا"],
              ["تحليل استراتيجية قضيتك", "نعم", "لا"],
              ["ملء النماذج بناءً على إجاباتك", "نعم", "نعم (الكتابة فقط)"],
              ["ترجمة الوثائق", "نعم", "نعم"],
              ["نسخ وتنظيم الوثائق", "نعم", "نعم"]
            ]
          }
        },
        {
          heading: "معدو وثائق الهجرة",
          content: "ما يمكن لمعدي الوثائق فعله قانونياً:\n\n• كتابة المعلومات التي تقدمها على النماذج\n• عمل نسخ من الوثائق\n• ترجمة الوثائق (ترجمة معتمدة)\n• إرسال الوثائق بالبريد نيابة عنك\n• تقديم معلومات عامة عن النماذج\n\nهم لا يستطيعون تقديم المشورة القانونية أو إخبارك بما يجب تقديمه."
        },
        {
          heading: "الممثلون المعتمدون من وزارة العدل",
          content: "يوجد خيار وسط من خلال اعتماد وزارة العدل:\n\n• يعملون لمنظمات غير ربحية معترف بها\n• يمكنهم تقديم المشورة القانونية\n• يمكنهم تمثيلك أمام USCIS\n• يجب إكمال التدريب والحصول على الموافقة\n• غالباً ما يقدمون خدمات بتكلفة أقل\n• تحقق من الاعتماد على justice.gov"
        },
        {
          heading: "تحذير احتيال 'نوتاريو'",
          content: "احذر من احتيال 'نوتاريو' في مجتمعات المهاجرين:\n\n• في كثير من البلدان، 'نوتاريو' تعني محامي\n• في الولايات المتحدة، كاتب العدل ليس محامي\n• لا يمكن لكتاب العدل تقديم المشورة القانونية\n• العديد من عمليات الاحتيال تستهدف الناطقين بالإسبانية والعربية\n• ممارسة القانون غير المصرح بها جريمة\n• الضحايا غالباً يخسرون المال والقضايا"
        },
        {
          heading: "علامات احتيال الهجرة",
          content: "علامات تحذيرية للانتباه لها:",
          list: [
            "ضمانات بالموافقة على قضيتك",
            "ادعاءات بعلاقة خاصة مع USCIS",
            "طلب توقيع نماذج فارغة",
            "عدم إعطائك نسخ من الوثائق المقدمة",
            "استخدام 'نوتاريو' أو ألقاب مشابهة",
            "أسعار منخفضة جداً تبدو جيدة جداً",
            "لا عقد مكتوب أو إيصالات",
            "تثبيطك عن طرح الأسئلة",
            "الضغط عليك لاتخاذ قرار فوراً"
          ]
        },
        {
          heading: "متى تحتاج محامي",
          content: "المواقف التي تتطلب عادة تمثيل قانوني:",
          list: [
            "القضايا المعقدة مع انتهاكات هجرة سابقة",
            "تاريخ جنائي يؤثر على الهجرة",
            "ترحيل سابق أو أوامر إزالة",
            "إجراءات محكمة الهجرة",
            "استئنافات القضايا المرفوضة",
            "إعفاءات لعدم القبول",
            "ادعاءات اللجوء أو الاضطهاد",
            "هجرة الأعمال أو الاستثمار"
          ]
        },
        {
          heading: "متى قد يكفي إعداد الوثائق",
          content: "القضايا البسيطة حيث قد يكون إعداد الوثائق كافياً:\n\n• طلبات المواطنة المباشرة\n• طلبات التجديد البسيطة\n• طلبات العائلة الأساسية (بدون تعقيدات)\n• تجديد البطاقة الخضراء\n• طلبات وثائق السفر\n\nحتى القضايا البسيطة يمكن أن تصبح معقدة. عند الشك، استشر محامي."
        },
        {
          heading: "أسئلة لطرحها قبل التوظيف",
          content: "احمِ نفسك بالسؤال:",
          steps: [
            {
              title: "اسأل عن الاعتماد",
              description: "هل أنت محامي؟ أين أنت مرخص؟"
            },
            {
              title: "اطلب رقم النقابة",
              description: "تحقق من رخصة المحامي مع نقابة المحامين"
            },
            {
              title: "احصل على اتفاق مكتوب",
              description: "ما الخدمات التي ستقدمها؟"
            },
            {
              title: "افهم التكاليف",
              description: "احصل على الأسعار كتابياً مقدماً"
            },
            {
              title: "نسخ الوثائق",
              description: "هل سأحصل على نسخ من كل ما يُقدم؟"
            },
            {
              title: "تحقق من التقييمات",
              description: "ابحث عن التقييمات والشكاوى عبر الإنترنت"
            }
          ]
        },
        {
          heading: "إذا كنت ضحية",
          content: "خطوات اتخاذها إذا تعرضت للاحتيال:\n\n• أبلغ الشرطة المحلية\n• قدم شكوى لنقابة المحامين (إذا كان محامي)\n• أبلغ FTC (لجنة التجارة الفيدرالية)\n• تواصل مع المدعي العام لولايتك\n• اجمع جميع الوثائق والإيصالات\n• استشر محامي شرعي حول قضيتك"
        },
        {
          heading: "نهج خدمات الهجرة في جنوب كاليفورنيا",
          content: "خدمات إعداد الوثائق لدينا في سايبرس تشمل:",
          list: [
            "شرح صادق لما يمكننا ولا يمكننا فعله",
            "اتفاقات مكتوبة واضحة",
            "إحالات للمحامين لاحتياجات المشورة القانونية",
            "تسعير شفاف",
            "نسخ من جميع الوثائق",
            "موظفون ناطقون بالعربية والإنجليزية",
            "لا وعود أو ضمانات كاذبة"
          ]
        }
      ],

      faqs: [
        {
          q: "هل يمكن لمعدي الوثائق إخباري بالنموذج الذي يجب تقديمه؟",
          a: "لا. التوصية بالنموذج الذي يجب تقديمه هي مشورة قانونية، والتي يمكن للمحامين فقط تقديمها. يمكن لمعدي الوثائق فقط كتابة المعلومات على النماذج التي اخترتها بالفعل."
        },
        {
          q: "هل من الآمن استخدام معد وثائق؟",
          a: "للقضايا البسيطة والمباشرة، نعم - طالما تفهم أنهم لا يستطيعون تقديم المشورة القانونية. لأي تعقيد، استشر محامي أولاً لمعرفة ما تحتاجه."
        },
        {
          q: "كيف أتحقق إذا كان شخص ما محامي حقيقي؟",
          a: "اسأل عن رقم نقابتهم وولاية الترخيص. ثم تحقق مع نقابة محامي تلك الولاية. يمكن التحقق من محامي كاليفورنيا على calbar.ca.gov."
        },
        {
          q: "لماذا معدو الوثائق أقل تكلفة؟",
          a: "معدو الوثائق لديهم تدريب أقل ولا يستطيعون تقديم خدمات قانونية. هم يقدمون أساساً خدمات الكتابة والترجمة، وليس التحليل القانوني أو التمثيل."
        },
        {
          q: "ماذا لو دفعت بالفعل لنوتاريو غير مصرح به؟",
          a: "اجمع جميع الوثائق والإيصالات، أبلغ السلطات، واستشر محامي شرعي فوراً. التصرف بسرعة قد يساعد في إنقاذ قضيتك إذا قُدمت نماذج خاطئة."
        },
        {
          q: "هل يمكن لأفراد العائلة المساعدة في أوراق هجرتي؟",
          a: "يمكن للعائلة مساعدتك في جمع الوثائق وملء النماذج مجاناً، لكنهم أيضاً لا يستطيعون تقديم المشورة القانونية. لأي شيء معقد، يُنصح بالمساعدة المهنية."
        }
      ],

      cta: {
        title: "تحتاج مساعدة صادقة في وثائق الهجرة؟",
        text: "نشرح بوضوح الخدمات التي نقدمها ومتى تحتاج مساعدة محامي. لا وعود كاذبة - فقط إعداد وثائق موثوق.",
        button: "حدد موعد استشارة مجانية"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default ImmigrationAttorneyVsPreparerCypress;
