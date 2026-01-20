import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const CitizenshipThroughParentsIndio = ({ language }) => {
  const content = {
    en: {
      slug: "citizenship-through-parents-indio",
      title: "Citizenship Through Parents in Indio: Acquiring U.S. Citizenship at Birth",
      subtitle: "Understanding derivative citizenship for children of American citizens",
      metaTitle: "Citizenship Through Parents Indio | Acquired Citizenship Coachella Valley",
      metaDescription: "Learn about U.S. citizenship through parents in Indio. Acquired vs derived citizenship, N-600 application, proof of citizenship. Call (714) 421-8872.",
      keywords: "citizenship through parents Indio, acquired citizenship, derivative citizenship, N-600 certificate, citizenship by birth abroad, Coachella Valley immigration",
      category: "Citizenship",
      location: "Indio",
      date: "January 19, 2026",
      readTime: "12 min read",
      author: "SoCal Immigration Services",
      locationIntro: "For families in Indio and the Coachella Valley, understanding how U.S. citizenship passes from parents to children is important. Many people are already U.S. citizens without knowing it because their parents were citizens. SoCal Immigration Services helps you determine your citizenship status and obtain proof.",

      sections: [
        {
          heading: "Ways Children Become U.S. Citizens",
          content: "Children can become U.S. citizens through their parents in several ways:\n\n1. Acquired Citizenship: Born abroad to U.S. citizen parent(s)\n2. Derived Citizenship: Automatically became a citizen when parent naturalized\n3. Birth in the U.S.: Automatic citizenship by birth on U.S. soil\n\nThe rules depend on when you were born, whether your parents were married, and how long your citizen parent lived in the U.S."
        },
        {
          heading: "Acquired Citizenship: Born Abroad to U.S. Citizen Parents",
          content: "If you were born outside the U.S. to a U.S. citizen parent, you may have acquired citizenship at birth. The rules differ based on your birth date and family situation:",
          table: {
            headers: ["Born", "Parent Situation", "Physical Presence Requirement"],
            rows: [
              ["After Nov 14, 1986", "Both parents U.S. citizens", "One parent lived in U.S. before your birth"],
              ["After Nov 14, 1986", "One citizen parent, married", "5 years in U.S. (2 after age 14) before your birth"],
              ["After Nov 14, 1986", "One citizen parent, unmarried mother", "1 year continuous U.S. presence before birth"],
              ["After Nov 14, 1986", "One citizen parent, unmarried father", "5 years (2 after age 14) + legitimation requirements"],
              ["June 12, 1968 - Nov 13, 1986", "One citizen parent, married", "10 years (5 after age 14) before birth"],
              ["Before June 12, 1968", "Various rules", "Consult for specific requirements"]
            ]
          }
        },
        {
          heading: "Derived Citizenship: When Parents Naturalize",
          content: "Children can automatically become citizens when their parents naturalize, under the Child Citizenship Act (CCA) of 2000:\n\nRequirements (for births after Feb 27, 2001):\n• At least one parent is a U.S. citizen (natural-born or naturalized)\n• The child is under 18\n• The child is a lawful permanent resident (green card holder)\n• The child is in the legal and physical custody of the citizen parent\n\nIf all conditions are met, the child becomes a citizen automatically - no application needed. But you should still get proof."
        },
        {
          heading: "Proving Your Citizenship",
          content: "To prove citizenship acquired or derived through parents, you can use:",
          list: [
            "U.S. passport (if previously issued)",
            "Certificate of Citizenship (N-600 approval)",
            "Consular Report of Birth Abroad (FS-240 or CRBA)",
            "Certificate of Naturalization (if you naturalized)",
            "In some cases, your birth certificate plus parent's citizenship proof"
          ]
        },
        {
          heading: "Form N-600: Certificate of Citizenship",
          content: "The N-600 application is used to get official proof of citizenship acquired or derived through parents:\n\nProcess:\n• File Form N-600 with USCIS\n• Pay filing fee ($1,170 as of 2026)\n• Submit evidence of your and your parent's citizenship\n• Attend biometrics appointment\n• May be interviewed\n• Receive Certificate of Citizenship if approved\n\nCurrent processing time: 8-14 months"
        },
        {
          heading: "Documents Needed for N-600",
          content: "Gather these documents to prove citizenship through parents:",
          list: [
            "Your birth certificate (with certified translation if in Arabic)",
            "Parent's proof of U.S. citizenship (birth certificate, naturalization certificate, or passport)",
            "Parent's marriage certificate (if applicable)",
            "Evidence parent lived in U.S. for required period (school records, tax returns, employment records)",
            "Your current immigration status evidence (green card if applicable)",
            "Proof of relationship (if name differs from birth certificate)",
            "Two passport-style photos",
            "Filing fee ($1,170)"
          ]
        },
        {
          heading: "Children Born Abroad to Arab-American Citizens",
          content: "For Indio families with ties to Arab countries, common scenarios include:\n\nScenario 1: U.S. citizen moves to Jordan, has child there\n• Child may be U.S. citizen at birth if physical presence requirements are met\n\nScenario 2: Green card holder naturalizes, child is under 18\n• Child may automatically become citizen under the CCA\n\nScenario 3: Child born abroad, parent didn't meet presence requirements\n• Child may need to naturalize separately after becoming a permanent resident\n\nWe help document your specific situation."
        },
        {
          heading: "What if My Parent Didn't Meet the Requirements?",
          content: "If your citizen parent didn't meet the physical presence requirements at your birth:\n\n• You did NOT automatically acquire citizenship\n• You may need to immigrate as a relative of a citizen\n• After getting a green card, you can naturalize\n• In some cases, grandparents' citizenship may help\n\nDon't assume you're not a citizen - the rules are complex and individual analysis is needed."
        },
        {
          heading: "Unmarried Fathers and Citizenship",
          content: "The rules are stricter when the U.S. citizen parent is an unmarried father:\n\nFor children born after Nov 14, 1986:\n• Father must have been a citizen at the time of birth\n• Father must have resided in U.S. for 5 years (2 after age 14) before birth\n• Child must be legitimated before age 18 OR father must establish paternity\n• Father must agree in writing to provide financial support until age 18\n\nLegitimation methods vary by country - we can help document your case."
        },
        {
          heading: "Lost or Never Obtained Citizenship Documents",
          content: "If you believe you're a citizen but never got documentation:\n\n• Apply for a U.S. passport (if you have evidence of citizenship)\n• File N-600 for Certificate of Citizenship\n• Contact the consulate if born abroad (for Consular Report of Birth)\n\nIt's never too late to get proof of citizenship you acquired at birth. The Certificate of Citizenship is valuable for obtaining a passport and proving citizenship for employment."
        },
        {
          heading: "Indio Citizenship Documentation Services",
          content: "SoCal Immigration Services helps Coachella Valley families with:",
          list: [
            "Analysis of your citizenship status based on family history",
            "N-600 application preparation and filing",
            "Document gathering and Arabic translation",
            "Physical presence evidence compilation",
            "Legitimation and paternity documentation",
            "Passport application assistance",
            "Alternative paths if requirements weren't met",
            "Appeals for denied applications"
          ]
        }
      ],

      faqs: [
        {
          q: "How do I know if I'm already a U.S. citizen through my parents?",
          a: "It depends on when you were born, whether your parents were married, and whether the U.S. citizen parent lived in the U.S. long enough before your birth. We can analyze your specific situation to determine if you acquired citizenship automatically."
        },
        {
          q: "My parent became a citizen while I was under 18. Am I automatically a citizen?",
          a: "If you were also a green card holder in your parent's legal and physical custody when they naturalized (and you were under 18), you likely became a citizen automatically under the Child Citizenship Act. You should still get a Certificate of Citizenship as proof."
        },
        {
          q: "How long does the N-600 Certificate of Citizenship take?",
          a: "Current processing time is 8-14 months. After filing, you'll have a biometrics appointment and may be interviewed. Once approved, you'll receive your Certificate of Citizenship by mail."
        },
        {
          q: "What if I was born in Jordan to a U.S. citizen parent?",
          a: "You may have acquired U.S. citizenship at birth if your citizen parent lived in the U.S. for the required period before your birth. The specific requirements depend on whether both parents were citizens, if they were married, and your birth date."
        },
        {
          q: "Can I just apply for a passport instead of the N-600?",
          a: "Yes, you can apply for a U.S. passport directly with evidence of citizenship through parents. However, the Certificate of Citizenship is more comprehensive proof and makes future passport renewals easier."
        },
        {
          q: "My father was a citizen but my parents weren't married. Am I a citizen?",
          a: "Possibly, but the requirements are stricter. Your father must have met physical presence requirements AND taken steps to legitimate you or acknowledge paternity before you turned 18. The specific requirements depend on your birth date."
        }
      ],

      cta: {
        title: "Questions About Citizenship Through Parents in Indio?",
        text: "Many people are U.S. citizens without knowing it. Let our Arabic-speaking team analyze your family history and help you obtain proof of citizenship.",
        button: "Schedule Citizenship Analysis"
      }
    },
    ar: {
      slug: "citizenship-through-parents-indio",
      title: "الجنسية من خلال الوالدين في إنديو: اكتساب الجنسية الأمريكية عند الولادة",
      subtitle: "فهم الجنسية المشتقة لأبناء المواطنين الأمريكيين",
      metaTitle: "الجنسية من خلال الوالدين إنديو | الجنسية المكتسبة وادي كوتشيلا",
      metaDescription: "تعرف على الجنسية الأمريكية من خلال الوالدين في إنديو. الجنسية المكتسبة مقابل المشتقة، طلب N-600، إثبات الجنسية. اتصل (714) 421-8872.",
      keywords: "الجنسية من خلال الوالدين إنديو، الجنسية المكتسبة، الجنسية المشتقة، شهادة N-600، الجنسية بالولادة في الخارج، هجرة وادي كوتشيلا",
      category: "المواطنة",
      location: "إنديو",
      date: "19 يناير 2026",
      readTime: "12 دقيقة قراءة",
      author: "خدمات الهجرة في جنوب كاليفورنيا",
      locationIntro: "للعائلات في إنديو ووادي كوتشيلا، فهم كيف تنتقل الجنسية الأمريكية من الآباء إلى الأبناء أمر مهم. كثير من الناس هم بالفعل مواطنون أمريكيون دون معرفة ذلك لأن والديهم كانوا مواطنين. تساعدك خدمات الهجرة في جنوب كاليفورنيا على تحديد وضع جنسيتك والحصول على إثبات.",

      sections: [
        {
          heading: "طرق حصول الأطفال على الجنسية الأمريكية",
          content: "يمكن للأطفال أن يصبحوا مواطنين أمريكيين من خلال والديهم بعدة طرق:\n\n1. الجنسية المكتسبة: الولادة في الخارج لوالد(ين) مواطن أمريكي\n2. الجنسية المشتقة: أصبح مواطناً تلقائياً عندما تجنس الوالد\n3. الولادة في الولايات المتحدة: الجنسية التلقائية بالولادة على الأراضي الأمريكية\n\nتعتمد القواعد على تاريخ ولادتك، وما إذا كان والداك متزوجين، ومدة إقامة الوالد المواطن في الولايات المتحدة."
        },
        {
          heading: "الجنسية المكتسبة: الولادة في الخارج لوالدين مواطنين أمريكيين",
          content: "إذا ولدت خارج الولايات المتحدة لوالد مواطن أمريكي، فقد تكون اكتسبت الجنسية عند الولادة. تختلف القواعد بناءً على تاريخ ولادتك ووضعك العائلي:",
          table: {
            headers: ["الولادة", "وضع الوالد", "متطلبات الوجود الفعلي"],
            rows: [
              ["بعد 14 نوفمبر 1986", "كلا الوالدين مواطنان أمريكيان", "أحد الوالدين عاش في الولايات المتحدة قبل ولادتك"],
              ["بعد 14 نوفمبر 1986", "والد مواطن واحد، متزوج", "5 سنوات في الولايات المتحدة (سنتان بعد سن 14) قبل ولادتك"],
              ["بعد 14 نوفمبر 1986", "والد مواطن واحد، أم غير متزوجة", "سنة واحدة وجود متواصل في الولايات المتحدة قبل الولادة"],
              ["بعد 14 نوفمبر 1986", "والد مواطن واحد، أب غير متزوج", "5 سنوات (سنتان بعد 14) + متطلبات الشرعنة"],
              ["12 يونيو 1968 - 13 نوفمبر 1986", "والد مواطن واحد، متزوج", "10 سنوات (5 بعد سن 14) قبل الولادة"],
              ["قبل 12 يونيو 1968", "قواعد مختلفة", "استشر للمتطلبات المحددة"]
            ]
          }
        },
        {
          heading: "الجنسية المشتقة: عندما يتجنس الوالدان",
          content: "يمكن للأطفال أن يصبحوا مواطنين تلقائياً عندما يتجنس والداهم، بموجب قانون جنسية الطفل (CCA) لعام 2000:\n\nالمتطلبات (للمواليد بعد 27 فبراير 2001):\n• على الأقل أحد الوالدين مواطن أمريكي (بالولادة أو التجنس)\n• الطفل دون 18 سنة\n• الطفل مقيم دائم قانوني (حامل بطاقة خضراء)\n• الطفل في الحضانة القانونية والفعلية للوالد المواطن\n\nإذا تم استيفاء جميع الشروط، يصبح الطفل مواطناً تلقائياً - لا حاجة لطلب. لكن يجب الحصول على إثبات."
        },
        {
          heading: "إثبات جنسيتك",
          content: "لإثبات الجنسية المكتسبة أو المشتقة من خلال الوالدين، يمكنك استخدام:",
          list: [
            "جواز سفر أمريكي (إذا تم إصداره سابقاً)",
            "شهادة الجنسية (موافقة N-600)",
            "تقرير القنصلية للولادة في الخارج (FS-240 أو CRBA)",
            "شهادة التجنس (إذا تجنست)",
            "في بعض الحالات، شهادة ميلادك بالإضافة إلى إثبات جنسية الوالد"
          ]
        },
        {
          heading: "نموذج N-600: شهادة الجنسية",
          content: "يُستخدم طلب N-600 للحصول على إثبات رسمي للجنسية المكتسبة أو المشتقة من خلال الوالدين:\n\nالعملية:\n• قدم نموذج N-600 مع USCIS\n• ادفع رسوم التقديم ($1,170 اعتباراً من 2026)\n• قدم أدلة على جنسيتك وجنسية والدك\n• احضر موعد القياسات الحيوية\n• قد يتم إجراء مقابلة\n• استلم شهادة الجنسية إذا تمت الموافقة\n\nوقت المعالجة الحالي: 8-14 شهراً"
        },
        {
          heading: "الوثائق المطلوبة لـ N-600",
          content: "اجمع هذه الوثائق لإثبات الجنسية من خلال الوالدين:",
          list: [
            "شهادة ميلادك (مع ترجمة معتمدة إذا كانت بالعربية)",
            "إثبات جنسية الوالد الأمريكية (شهادة ميلاد، شهادة تجنس، أو جواز سفر)",
            "شهادة زواج الوالد (إذا انطبق)",
            "دليل على إقامة الوالد في الولايات المتحدة للفترة المطلوبة (سجلات مدرسية، إقرارات ضريبية، سجلات توظيف)",
            "دليل على وضع الهجرة الحالي الخاص بك (البطاقة الخضراء إذا انطبق)",
            "إثبات العلاقة (إذا اختلف الاسم عن شهادة الميلاد)",
            "صورتان بحجم جواز السفر",
            "رسوم التقديم ($1,170)"
          ]
        },
        {
          heading: "الأطفال المولودون في الخارج لمواطنين أمريكيين عرب",
          content: "لعائلات إنديو ذات الروابط بالدول العربية، تشمل السيناريوهات الشائعة:\n\nالسيناريو 1: مواطن أمريكي ينتقل إلى الأردن، ينجب طفلاً هناك\n• قد يكون الطفل مواطناً أمريكياً عند الولادة إذا تم استيفاء متطلبات الوجود الفعلي\n\nالسيناريو 2: حامل بطاقة خضراء يتجنس، الطفل دون 18 سنة\n• قد يصبح الطفل مواطناً تلقائياً بموجب CCA\n\nالسيناريو 3: الطفل مولود في الخارج، الوالد لم يستوفِ متطلبات الوجود\n• قد يحتاج الطفل للتجنس بشكل منفصل بعد أن يصبح مقيماً دائماً\n\nنساعد في توثيق وضعك المحدد."
        },
        {
          heading: "ماذا لو لم يستوفِ والدي المتطلبات؟",
          content: "إذا لم يستوفِ والدك المواطن متطلبات الوجود الفعلي عند ولادتك:\n\n• لم تكتسب الجنسية تلقائياً\n• قد تحتاج للهجرة كقريب لمواطن\n• بعد الحصول على البطاقة الخضراء، يمكنك التجنس\n• في بعض الحالات، قد تساعد جنسية الأجداد\n\nلا تفترض أنك لست مواطناً - القواعد معقدة والتحليل الفردي مطلوب."
        },
        {
          heading: "الآباء غير المتزوجين والجنسية",
          content: "القواعد أكثر صرامة عندما يكون الوالد المواطن الأمريكي أباً غير متزوج:\n\nللأطفال المولودين بعد 14 نوفمبر 1986:\n• يجب أن يكون الأب مواطناً وقت الولادة\n• يجب أن يكون الأب قد أقام في الولايات المتحدة لمدة 5 سنوات (سنتان بعد سن 14) قبل الولادة\n• يجب شرعنة الطفل قبل سن 18 أو يجب على الأب إثبات الأبوة\n• يجب أن يوافق الأب كتابياً على تقديم الدعم المالي حتى سن 18\n\nتختلف طرق الشرعنة حسب البلد - يمكننا المساعدة في توثيق قضيتك."
        },
        {
          heading: "وثائق الجنسية المفقودة أو التي لم يتم الحصول عليها",
          content: "إذا كنت تعتقد أنك مواطن لكن لم تحصل على وثائق قط:\n\n• تقدم بطلب جواز سفر أمريكي (إذا كان لديك دليل على الجنسية)\n• قدم N-600 لشهادة الجنسية\n• اتصل بالقنصلية إذا ولدت في الخارج (لتقرير القنصلية للولادة)\n\nليس متأخراً أبداً للحصول على إثبات الجنسية التي اكتسبتها عند الولادة. شهادة الجنسية قيمة للحصول على جواز سفر وإثبات الجنسية للتوظيف."
        },
        {
          heading: "خدمات توثيق الجنسية في إنديو",
          content: "تساعد خدمات الهجرة في جنوب كاليفورنيا عائلات وادي كوتشيلا في:",
          list: [
            "تحليل وضع جنسيتك بناءً على تاريخ العائلة",
            "إعداد وتقديم طلب N-600",
            "جمع الوثائق والترجمة العربية",
            "تجميع أدلة الوجود الفعلي",
            "توثيق الشرعنة والأبوة",
            "مساعدة طلب جواز السفر",
            "المسارات البديلة إذا لم تُستوفَ المتطلبات",
            "الاستئنافات للطلبات المرفوضة"
          ]
        }
      ],

      faqs: [
        {
          q: "كيف أعرف إذا كنت بالفعل مواطناً أمريكياً من خلال والديّ؟",
          a: "يعتمد ذلك على تاريخ ولادتك، وما إذا كان والداك متزوجين، وما إذا كان الوالد المواطن الأمريكي قد عاش في الولايات المتحدة لفترة كافية قبل ولادتك. يمكننا تحليل وضعك المحدد لتحديد ما إذا كنت قد اكتسبت الجنسية تلقائياً."
        },
        {
          q: "أصبح والدي مواطناً بينما كنت دون 18 سنة. هل أنا مواطن تلقائياً؟",
          a: "إذا كنت أيضاً حامل بطاقة خضراء في الحضانة القانونية والفعلية لوالدك عندما تجنس (وكنت دون 18 سنة)، فمن المحتمل أنك أصبحت مواطناً تلقائياً بموجب قانون جنسية الطفل. يجب أن تحصل على شهادة الجنسية كإثبات."
        },
        {
          q: "كم تستغرق شهادة الجنسية N-600؟",
          a: "وقت المعالجة الحالي هو 8-14 شهراً. بعد التقديم، سيكون لديك موعد قياسات حيوية وقد يتم إجراء مقابلة. بمجرد الموافقة، ستستلم شهادة الجنسية بالبريد."
        },
        {
          q: "ماذا لو ولدت في الأردن لوالد مواطن أمريكي؟",
          a: "قد تكون قد اكتسبت الجنسية الأمريكية عند الولادة إذا كان والدك المواطن قد عاش في الولايات المتحدة للفترة المطلوبة قبل ولادتك. تعتمد المتطلبات المحددة على ما إذا كان كلا الوالدين مواطنين، وإذا كانا متزوجين، وتاريخ ولادتك."
        },
        {
          q: "هل يمكنني فقط التقدم لجواز السفر بدلاً من N-600؟",
          a: "نعم، يمكنك التقدم لجواز سفر أمريكي مباشرة مع أدلة على الجنسية من خلال الوالدين. ومع ذلك، شهادة الجنسية هي إثبات أكثر شمولاً وتجعل تجديدات جواز السفر المستقبلية أسهل."
        },
        {
          q: "كان والدي مواطناً لكن والداي لم يكونا متزوجين. هل أنا مواطن؟",
          a: "ربما، لكن المتطلبات أكثر صرامة. يجب أن يكون والدك قد استوفى متطلبات الوجود الفعلي واتخذ خطوات لشرعنتك أو الاعتراف بالأبوة قبل بلوغك 18 سنة. تعتمد المتطلبات المحددة على تاريخ ولادتك."
        }
      ],

      cta: {
        title: "أسئلة حول الجنسية من خلال الوالدين في إنديو؟",
        text: "كثير من الناس مواطنون أمريكيون دون معرفة ذلك. دع فريقنا الناطق بالعربية يحلل تاريخ عائلتك ويساعدك في الحصول على إثبات الجنسية.",
        button: "جدولة تحليل الجنسية"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default CitizenshipThroughParentsIndio;
