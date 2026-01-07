import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const AsylumApplicationElCajon = ({ language }) => {
  const content = {
    en: {
      slug: "asylum-application-el-cajon-syrian",
      title: "Asylum Application Help in El Cajon: Syrian & Iraqi Refugee Support",
      subtitle: "Compassionate assistance for asylum seekers in San Diego County's largest refugee community",
      metaTitle: "Asylum Help El Cajon | Syrian Iraqi Refugee Immigration Services",
      metaDescription: "Asylum application assistance for Syrian and Iraqi refugees in El Cajon. Arabic-speaking support, document preparation. Call (714) 421-8872.",
      keywords: "asylum El Cajon, Syrian refugee help, Iraqi asylum, refugee immigration San Diego, Arabic asylum services",
      category: "Asylum & Refugee",
      location: "El Cajon",
      date: "December 28, 2025",
      readTime: "12 min read",
      author: "SoCal Immigration Services",
      locationIntro: "El Cajon, often called 'The Refugee Capital of the U.S.,' is home to more than 40,000 Iraqi and Syrian refugees. For those who fled persecution in the Middle East, the asylum process offers protection and a path to permanent residence in America.",

      sections: [
        {
          heading: "Understanding Asylum in the United States",
          content: "Asylum is a form of protection that allows individuals who have been persecuted or fear persecution to remain in the United States. The persecution must be based on one of five protected grounds:\n\n• Race\n• Religion\n• Nationality\n• Political opinion\n• Membership in a particular social group\n\nFor many Syrian and Iraqi refugees in El Cajon, persecution due to religion (Christian minorities) or political opinion (opponents of certain regimes) forms the basis of their asylum claims."
        },
        {
          heading: "Affirmative vs. Defensive Asylum",
          content: "There are two paths to asylum in the United States:",
          table: {
            headers: ["Type", "When to Apply", "Process"],
            rows: [
              ["Affirmative Asylum", "When not in removal proceedings", "Apply with USCIS, attend interview"],
              ["Defensive Asylum", "When in removal proceedings", "Present case before immigration judge"],
              ["One-Year Deadline", "Must apply within 1 year of arrival", "Exceptions may apply"]
            ]
          }
        },
        {
          heading: "The One-Year Filing Deadline",
          content: "You must file for asylum within one year of arriving in the United States. However, exceptions may apply if:\n\n• Changed country conditions (new conflicts, regime changes)\n• Changed personal circumstances (new threats, discovery of persecution)\n• Extraordinary circumstances (serious illness, legal disability, ineffective assistance)\n\nMany Syrian refugees in El Cajon may qualify for exceptions due to ongoing changes in Syrian country conditions."
        },
        {
          heading: "Documents Needed for Asylum Applications",
          content: "Building a strong asylum case requires documentation:",
          list: [
            "Form I-589, Application for Asylum",
            "Personal declaration describing your persecution",
            "Country conditions evidence (news reports, human rights reports)",
            "Medical records documenting injuries from persecution",
            "Witness affidavits from family or others who can confirm your story",
            "Identification documents (passport, national ID)",
            "Any evidence of threats (letters, photos, police reports)",
            "Expert witness declarations (when available)"
          ]
        },
        {
          heading: "The Asylum Interview Process",
          content: "For affirmative asylum cases, you'll attend an interview with a USCIS asylum officer:",
          steps: [
            {
              title: "Receive Interview Notice",
              description: "USCIS schedules your interview, typically at the closest asylum office"
            },
            {
              title: "Prepare Your Testimony",
              description: "Practice telling your story clearly and consistently"
            },
            {
              title: "Attend the Interview",
              description: "Answer the officer's questions about your persecution claim"
            },
            {
              title: "Wait for Decision",
              description: "Decisions are mailed; you may be approved, referred to court, or denied"
            }
          ]
        },
        {
          heading: "Work Authorization for Asylum Seekers",
          content: "While waiting for your asylum decision, you may be able to work:\n\n• 150 days after filing a complete asylum application, you can file for an Employment Authorization Document (EAD)\n• Processing time for EAD is typically 30-90 days\n• Work permits must be renewed annually while asylum is pending\n\nWe can help El Cajon asylum seekers with Form I-765 work permit applications."
        },
        {
          heading: "Special Considerations for Syrian Refugees",
          content: "Syrian asylum seekers in El Cajon may face unique circumstances:\n\n• Country conditions documentation is abundant due to ongoing conflict\n• Religious minorities (Christians, Yazidis) have strong persecution claims\n• Political opponents of the Assad regime or ISIS may qualify\n• Family members may have derivative asylum claims\n• Travel back to Syria can affect your case"
        },
        {
          heading: "Special Considerations for Iraqi Refugees",
          content: "Iraqi asylum seekers, particularly Chaldean Christians in El Cajon, often have claims based on:\n\n• Religious persecution by ISIS/sectarian militias\n• Persecution for working with U.S. military or government\n• Political persecution\n• Ethnic persecution (Kurds, minorities)\n\nThe El Cajon Chaldean community has successfully obtained asylum protection for decades."
        },
        {
          heading: "From Asylum to Green Card",
          content: "Once granted asylum, you can apply for permanent residence (green card) after one year:\n\n• File Form I-485 one year after asylum approval\n• Your spouse and children who received derivative asylum also qualify\n• No interview is typically required\n• Processing time: 6-12 months\n• After 5 years with green card, you can apply for citizenship"
        },
        {
          heading: "Why Choose Us for Asylum Help in El Cajon",
          content: "SoCal Immigration Services understands the unique needs of El Cajon's refugee community:",
          list: [
            "Arabic-speaking staff from Iraq and Syria",
            "Cultural sensitivity and understanding of Middle Eastern persecution",
            "Experience with Christian minority asylum cases",
            "Document translation and preparation services",
            "Compassionate, trauma-informed approach",
            "Connections to legal resources for complex cases"
          ]
        }
      ],

      faqs: [
        {
          q: "What is the deadline to apply for asylum in El Cajon?",
          a: "You must apply within one year of arriving in the United States. However, exceptions exist for changed country conditions or extraordinary circumstances, which may apply to many Syrian and Iraqi refugees."
        },
        {
          q: "Can I work while my asylum case is pending?",
          a: "Yes, 150 days after filing a complete asylum application, you can apply for a work permit (EAD). We help with this application."
        },
        {
          q: "How long does the asylum process take?",
          a: "Asylum processing times vary significantly. Some cases are decided within months, while others take years depending on backlog and complexity."
        },
        {
          q: "Can my family members get asylum too?",
          a: "Your spouse and unmarried children under 21 can be included in your asylum application as derivative applicants, or you can petition for them after approval."
        },
        {
          q: "Will I have to go to court?",
          a: "If USCIS doesn't approve your affirmative asylum case, it may be referred to immigration court. Defensive asylum cases go directly to court."
        },
        {
          q: "Do you provide legal representation for asylum cases?",
          a: "We provide document preparation services but are not attorneys. For complex asylum cases, we can refer you to immigration attorneys experienced with Middle Eastern cases."
        }
      ],

      cta: {
        title: "Need Asylum Assistance in El Cajon?",
        text: "Our Arabic-speaking team provides compassionate support for Syrian and Iraqi asylum seekers. We understand what you've been through.",
        button: "Schedule Free Consultation"
      }
    },
    ar: {
      slug: "asylum-application-el-cajon-syrian",
      title: "مساعدة طلب اللجوء في إل كاجون: دعم اللاجئين السوريين والعراقيين",
      subtitle: "مساعدة رحيمة لطالبي اللجوء في أكبر مجتمع لاجئين في مقاطعة سان دييغو",
      metaTitle: "مساعدة اللجوء إل كاجون | خدمات هجرة اللاجئين السوريين والعراقيين",
      metaDescription: "مساعدة طلب اللجوء للاجئين السوريين والعراقيين في إل كاجون. دعم بالعربية، إعداد الوثائق. اتصل (714) 421-8872.",
      keywords: "اللجوء إل كاجون، مساعدة اللاجئين السوريين، لجوء العراقيين، هجرة اللاجئين سان دييغو، خدمات اللجوء بالعربية",
      category: "اللجوء واللاجئين",
      location: "إل كاجون",
      date: "28 ديسمبر 2025",
      readTime: "12 دقيقة قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "إل كاجون، التي تسمى غالباً 'عاصمة اللاجئين في أمريكا'، هي موطن لأكثر من 40,000 لاجئ عراقي وسوري. لأولئك الذين فروا من الاضطهاد في الشرق الأوسط، تقدم عملية اللجوء الحماية ومساراً للإقامة الدائمة في أمريكا.",

      sections: [
        {
          heading: "فهم اللجوء في الولايات المتحدة",
          content: "اللجوء هو شكل من أشكال الحماية يسمح للأفراد الذين تعرضوا للاضطهاد أو يخشون الاضطهاد بالبقاء في الولايات المتحدة. يجب أن يكون الاضطهاد قائماً على أحد الأسس الخمسة المحمية:\n\n• العرق\n• الدين\n• الجنسية\n• الرأي السياسي\n• العضوية في فئة اجتماعية معينة\n\nللعديد من اللاجئين السوريين والعراقيين في إل كاجون، يشكل الاضطهاد بسبب الدين (الأقليات المسيحية) أو الرأي السياسي (معارضي أنظمة معينة) أساس مطالبات اللجوء."
        },
        {
          heading: "اللجوء الإيجابي مقابل الدفاعي",
          content: "هناك مساران للجوء في الولايات المتحدة:",
          table: {
            headers: ["النوع", "متى تقدم", "العملية"],
            rows: [
              ["اللجوء الإيجابي", "عندما لا تكون في إجراءات الترحيل", "قدم إلى USCIS، احضر مقابلة"],
              ["اللجوء الدفاعي", "عندما تكون في إجراءات الترحيل", "قدم قضيتك أمام قاضي الهجرة"],
              ["الموعد النهائي سنة واحدة", "يجب التقديم خلال سنة من الوصول", "قد تنطبق استثناءات"]
            ]
          }
        },
        {
          heading: "الموعد النهائي للتقديم خلال سنة واحدة",
          content: "يجب أن تقدم طلب اللجوء خلال سنة واحدة من وصولك إلى الولايات المتحدة. ومع ذلك، قد تنطبق استثناءات إذا:\n\n• تغيرت ظروف البلد (نزاعات جديدة، تغييرات في النظام)\n• تغيرت ظروفك الشخصية (تهديدات جديدة، اكتشاف الاضطهاد)\n• ظروف استثنائية (مرض خطير، إعاقة قانونية، مساعدة غير فعالة)\n\nالعديد من اللاجئين السوريين في إل كاجون قد يتأهلون للاستثناءات بسبب التغييرات المستمرة في ظروف سوريا."
        },
        {
          heading: "الوثائق المطلوبة لطلبات اللجوء",
          content: "بناء قضية لجوء قوية يتطلب توثيقاً:",
          list: [
            "نموذج I-589، طلب اللجوء",
            "إفادة شخصية تصف اضطهادك",
            "أدلة ظروف البلد (تقارير إخبارية، تقارير حقوق الإنسان)",
            "سجلات طبية توثق الإصابات من الاضطهاد",
            "إفادات الشهود من العائلة أو آخرين يمكنهم تأكيد قصتك",
            "وثائق الهوية (جواز السفر، الهوية الوطنية)",
            "أي دليل على التهديدات (رسائل، صور، تقارير الشرطة)",
            "إفادات شهود خبراء (عند توفرها)"
          ]
        },
        {
          heading: "عملية مقابلة اللجوء",
          content: "لحالات اللجوء الإيجابي، ستحضر مقابلة مع مسؤول لجوء USCIS:",
          steps: [
            {
              title: "استلام إشعار المقابلة",
              description: "تحدد USCIS موعد مقابلتك، عادة في أقرب مكتب لجوء"
            },
            {
              title: "إعداد شهادتك",
              description: "تدرب على سرد قصتك بوضوح واتساق"
            },
            {
              title: "حضور المقابلة",
              description: "أجب على أسئلة المسؤول حول مطالبة الاضطهاد"
            },
            {
              title: "انتظار القرار",
              description: "ترسل القرارات بالبريد؛ قد تتم الموافقة أو الإحالة إلى المحكمة أو الرفض"
            }
          ]
        },
        {
          heading: "تصريح العمل لطالبي اللجوء",
          content: "أثناء انتظار قرار اللجوء، قد تتمكن من العمل:\n\n• بعد 150 يوماً من تقديم طلب لجوء كامل، يمكنك التقدم بطلب للحصول على وثيقة تصريح العمل (EAD)\n• وقت معالجة EAD عادة 30-90 يوماً\n• يجب تجديد تصاريح العمل سنوياً أثناء انتظار اللجوء\n\nيمكننا مساعدة طالبي اللجوء في إل كاجون بطلبات تصريح العمل نموذج I-765."
        },
        {
          heading: "اعتبارات خاصة للاجئين السوريين",
          content: "قد يواجه طالبو اللجوء السوريون في إل كاجون ظروفاً فريدة:\n\n• توثيق ظروف البلد متوفر بكثرة بسبب النزاع المستمر\n• الأقليات الدينية (المسيحيون، الإيزيديون) لديهم مطالبات اضطهاد قوية\n• المعارضون السياسيون لنظام الأسد أو داعش قد يتأهلون\n• أفراد الأسرة قد يكون لديهم مطالبات لجوء مشتقة\n• السفر إلى سوريا يمكن أن يؤثر على قضيتك"
        },
        {
          heading: "اعتبارات خاصة للاجئين العراقيين",
          content: "طالبو اللجوء العراقيون، وخاصة المسيحيون الكلدان في إل كاجون، غالباً لديهم مطالبات قائمة على:\n\n• الاضطهاد الديني من قبل داعش/الميليشيات الطائفية\n• الاضطهاد للعمل مع الجيش أو الحكومة الأمريكية\n• الاضطهاد السياسي\n• الاضطهاد العرقي (الأكراد، الأقليات)\n\nحصل المجتمع الكلداني في إل كاجون بنجاح على حماية اللجوء لعقود."
        },
        {
          heading: "من اللجوء إلى البطاقة الخضراء",
          content: "بمجرد منح اللجوء، يمكنك التقدم للإقامة الدائمة (البطاقة الخضراء) بعد سنة واحدة:\n\n• قدم نموذج I-485 بعد سنة من موافقة اللجوء\n• زوجتك وأطفالك الذين حصلوا على لجوء مشتق مؤهلون أيضاً\n• عادة لا تتطلب مقابلة\n• وقت المعالجة: 6-12 شهراً\n• بعد 5 سنوات مع البطاقة الخضراء، يمكنك التقدم للجنسية"
        },
        {
          heading: "لماذا تختارنا لمساعدة اللجوء في إل كاجون",
          content: "تفهم خدمات حلول الهجرة الاحتياجات الفريدة لمجتمع اللاجئين في إل كاجون:",
          list: [
            "فريق ناطق بالعربية من العراق وسوريا",
            "حساسية ثقافية وفهم للاضطهاد في الشرق الأوسط",
            "خبرة في قضايا لجوء الأقليات المسيحية",
            "خدمات ترجمة وإعداد الوثائق",
            "نهج رحيم ومدرك للصدمات",
            "اتصالات بالموارد القانونية للحالات المعقدة"
          ]
        }
      ],

      faqs: [
        {
          q: "ما هو الموعد النهائي للتقدم للجوء في إل كاجون؟",
          a: "يجب أن تتقدم خلال سنة واحدة من وصولك إلى الولايات المتحدة. ومع ذلك، توجد استثناءات لتغير ظروف البلد أو الظروف الاستثنائية، والتي قد تنطبق على العديد من اللاجئين السوريين والعراقيين."
        },
        {
          q: "هل يمكنني العمل أثناء انتظار قضية اللجوء؟",
          a: "نعم، بعد 150 يوماً من تقديم طلب لجوء كامل، يمكنك التقدم بطلب للحصول على تصريح عمل (EAD). نحن نساعد في هذا الطلب."
        },
        {
          q: "كم تستغرق عملية اللجوء؟",
          a: "تختلف أوقات معالجة اللجوء بشكل كبير. بعض الحالات يتم البت فيها خلال أشهر، بينما تستغرق أخرى سنوات حسب التراكم والتعقيد."
        },
        {
          q: "هل يمكن لأفراد عائلتي الحصول على اللجوء أيضاً؟",
          a: "يمكن تضمين زوجتك وأطفالك غير المتزوجين تحت 21 في طلب اللجوء كمتقدمين مشتقين، أو يمكنك تقديم طلب لهم بعد الموافقة."
        },
        {
          q: "هل سأضطر للذهاب إلى المحكمة؟",
          a: "إذا لم توافق USCIS على قضية اللجوء الإيجابي، قد تحال إلى محكمة الهجرة. حالات اللجوء الدفاعي تذهب مباشرة إلى المحكمة."
        },
        {
          q: "هل تقدمون تمثيلاً قانونياً لقضايا اللجوء؟",
          a: "نحن نقدم خدمات إعداد الوثائق ولكننا لسنا محامين. للحالات المعقدة، يمكننا إحالتك إلى محامي هجرة ذوي خبرة في قضايا الشرق الأوسط."
        }
      ],

      cta: {
        title: "تحتاج مساعدة في اللجوء في إل كاجون؟",
        text: "فريقنا الناطق بالعربية يقدم دعماً رحيماً لطالبي اللجوء السوريين والعراقيين. نحن نفهم ما مررت به.",
        button: "حجز استشارة مجانية"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default AsylumApplicationElCajon;
