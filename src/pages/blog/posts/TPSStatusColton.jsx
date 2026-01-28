import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const TPSStatusColton = ({ language }) => {
  const content = {
    en: {
      slug: "tps-temporary-protected-status-colton",
      title: "TPS Temporary Protected Status in Colton: Guide for Arab Immigrants",
      subtitle: "Comprehensive guide to Temporary Protected Status eligibility, applications, and renewals for the Arab community in San Bernardino County",
      metaTitle: "TPS Temporary Protected Status Colton | Syria Yemen Sudan Somalia TPS Help",
      metaDescription: "Complete TPS guide for Colton residents. Syria, Yemen, Sudan, Somalia TPS eligibility, work permits, travel rules. Arabic-speaking staff. Call (714) 421-8872.",
      keywords: "TPS Colton, Temporary Protected Status San Bernardino, Syria TPS California, Yemen TPS, Sudan TPS, Somalia TPS, Arab immigration Colton",
      category: "Immigration Status",
      location: "Colton",
      date: "January 28, 2026",
      lastUpdated: "January 28, 2026",
      readTime: "18 min read",
      author: "SoCal Immigration Services",
      wordCount: 3500,
      summary: "Temporary Protected Status (TPS) provides work authorization and deportation protection for nationals from designated countries including Syria, Yemen, Sudan, and Somalia. Colton residents can apply during registration periods or for re-registration if already holding TPS.",
      locationIntro: "Colton, located in San Bernardino County, is home to a diverse Arab community including families from Syria, Yemen, Sudan, and Somalia. These nationals may qualify for Temporary Protected Status (TPS), a vital immigration protection that provides work authorization and safety from deportation. This comprehensive guide explains everything Colton residents need to know about TPS eligibility, applications, and maintaining protected status.",

      sections: [
        {
          heading: "What is Temporary Protected Status (TPS)?",
          content: "Temporary Protected Status is a humanitarian immigration benefit granted by the Department of Homeland Security (DHS) to nationals of countries experiencing ongoing armed conflict, environmental disasters, or other extraordinary conditions that prevent safe return.\n\nTPS provides three essential protections:\n\n1. Protection from Deportation: TPS holders cannot be removed from the United States while their status remains valid\n\n2. Employment Authorization: TPS beneficiaries receive work permits (Employment Authorization Documents) allowing legal employment anywhere in the United States\n\n3. Travel Authorization: With advance parole, TPS holders can travel internationally and return to the United States\n\nTPS is a temporary status that must be renewed during designated registration periods. It does not directly lead to permanent residence, but TPS holders may pursue other immigration pathways while protected. The program has existed since 1990 under the Immigration Act, providing crucial protection for hundreds of thousands of foreign nationals in the United States."
        },
        {
          heading: "Current TPS Designated Countries",
          content: "As of January 2026, the following countries are designated for TPS. Several are particularly relevant to the Arab community in Colton:",
          table: {
            headers: ["Country", "Current Designation", "Re-Registration Period", "Relevance to Arab Community"],
            rows: [
              ["Syria", "Extended through 2027", "Check USCIS for dates", "Primary Arab country - civil war ongoing"],
              ["Yemen", "Extended through 2027", "Check USCIS for dates", "Primary Arab country - humanitarian crisis"],
              ["Sudan", "Extended through 2026", "Check USCIS for dates", "Arab African nation - conflict ongoing"],
              ["Somalia", "Extended through 2026", "Check USCIS for dates", "East African nation with Arab ties"],
              ["South Sudan", "Extended through 2026", "Check USCIS for dates", "Conflict and humanitarian crisis"],
              ["Lebanon", "Check current status", "If designated", "Potential future designation"],
              ["Afghanistan", "Extended through 2026", "Check USCIS for dates", "Muslim-majority nation"],
              ["Ukraine", "Extended through 2026", "Check USCIS for dates", "Recent designation"],
              ["Venezuela", "Extended through 2026", "Check USCIS for dates", "Latin American designation"],
              ["Haiti", "Extended through 2026", "Check USCIS for dates", "Caribbean designation"]
            ]
          }
        },
        {
          heading: "TPS Eligibility Requirements",
          content: "To qualify for Temporary Protected Status, applicants must meet specific criteria established by USCIS. Understanding these requirements is essential before applying:",
          list: [
            "Nationality: You must be a national of a TPS-designated country (or a person without nationality who last habitually resided in that country)",
            "Continuous Physical Presence: You must have been continuously physically present in the United States since the date specified for your country's designation",
            "Continuous Residence: You must have resided continuously in the United States since the date specified in the TPS designation",
            "Filing Deadline: You must file during an open initial registration period or re-registration period",
            "Admissibility: You must not be inadmissible under certain immigration grounds (waivers available for some grounds)",
            "Criminal Bars: You must not have been convicted of a felony or two or more misdemeanors in the United States",
            "Persecution Bar: You must not have persecuted others based on race, religion, nationality, political opinion, or social group membership"
          ]
        },
        {
          heading: "Initial TPS Registration vs Re-Registration",
          content: "Understanding the difference between initial registration and re-registration is critical for maintaining TPS status:\n\nInitial TPS Registration:\nInitial registration is for individuals who have never had TPS before. To be eligible, you must demonstrate that you were present in the United States on the designation date for your country and have maintained continuous residence and physical presence since that date. Initial registration periods are announced when a country is first designated or redesignated for TPS.\n\nRequirements for initial registration include:\n• Proof of nationality from a designated country\n• Evidence of continuous physical presence since the designation date\n• Evidence of continuous residence since the required date\n• Completed Form I-821 (Application for TPS)\n• Completed Form I-765 (Application for Employment Authorization)\n• All required supporting documents and fees\n\nTPS Re-Registration:\nRe-registration is for individuals who already hold valid TPS status and need to maintain their protection. DHS announces re-registration periods before current designations expire. Missing re-registration deadlines can result in loss of TPS status and work authorization.\n\nRe-registration requirements include:\n• Valid existing TPS status\n• Filing during the announced re-registration period\n• Completed Form I-821 marked as re-registration\n• Form I-765 if renewing work authorization\n• Updated evidence if circumstances have changed\n• All required fees\n\nLate Initial Registration:\nIn some cases, individuals may qualify for late initial registration if they meet specific criteria such as:\n• Being a child of a TPS holder who turned 21\n• Having a qualifying change in circumstances\n• Previously being in a valid immigration status that has since expired"
        },
        {
          heading: "Required Documents for TPS Application",
          content: "Gathering proper documentation is essential for a successful TPS application. The following documents are required or strongly recommended:",
          list: [
            "Form I-821: Application for Temporary Protected Status - the primary TPS application form",
            "Form I-765: Application for Employment Authorization Document - required if you want work authorization",
            "Passport or travel document: Current or expired passport from your country of nationality",
            "Birth certificate: Official birth certificate with certified English translation",
            "National ID card: If available, provides additional proof of nationality",
            "Evidence of entry date: I-94, passport stamps, airline tickets, or other proof of when you entered the U.S.",
            "Evidence of continuous residence: Lease agreements, utility bills, bank statements, employment records, school records, medical records, tax returns",
            "Evidence of continuous physical presence: Similar documents showing you remained in the United States",
            "Two passport-style photos: Recent photos meeting USCIS specifications",
            "Filing fees: Current fees for I-821 and I-765 (fee waivers available for those who qualify)",
            "Prior TPS approval notices: If re-registering, include previous approval documents",
            "Employment Authorization Document: Copy of current EAD if re-registering"
          ]
        },
        {
          heading: "TPS Work Authorization (Employment Authorization Document)",
          content: "One of the most valuable benefits of TPS is the Employment Authorization Document (EAD), commonly called a work permit. Here is what Colton residents need to know about TPS work authorization:\n\nObtaining Your Initial EAD:\nWhen you apply for TPS, you can simultaneously apply for an EAD using Form I-765. The EAD allows you to work legally for any employer in the United States. Processing times vary, but USCIS typically issues EADs within 3-6 months of filing.\n\nAutomatic EAD Extensions:\nWhen DHS extends a TPS designation and announces a re-registration period, it typically also provides automatic extensions of existing EADs. This means your current work permit remains valid while your re-registration application is pending. You must carry proof of the automatic extension (Federal Register notice) along with your expired EAD.\n\nEAD Card Details:\nTPS-based EADs contain the category code A-12 or C-19, identifying you as a TPS holder. The card includes your photo, name, date of birth, and expiration date. Employers use this card to verify your work eligibility through the I-9 process.\n\nRenewing Your EAD:\nTo maintain work authorization, you must file Form I-765 with each TPS re-registration. Never let your EAD lapse without filing for renewal, as gaps in work authorization can affect your employment. File your re-registration and EAD renewal as soon as the registration period opens.\n\nWhat to Do If Your EAD Expires:\nIf your EAD expires before your renewal is processed, check if an automatic extension applies. Contact our office for guidance on documenting automatic extensions for your employer. We help Colton residents understand their rights and maintain continuous work authorization."
        },
        {
          heading: "Travel with TPS (Advance Parole Considerations)",
          content: "Traveling outside the United States while holding TPS requires careful planning. Here are essential considerations for Colton residents:\n\nAdvance Parole Requirement:\nBefore traveling internationally, TPS holders must obtain Advance Parole (Form I-131, Application for Travel Document). Traveling without advance parole can result in loss of TPS status and potentially trigger bars to re-entry.\n\nHow to Apply for Advance Parole:\nFile Form I-131 with USCIS, indicating you hold TPS and need to travel temporarily. Include evidence of your TPS status, reason for travel, and all required fees. Processing times can take several months, so plan well in advance.\n\nImportant Travel Warnings:\n• Never travel to your home country: Returning to Syria, Yemen, Sudan, Somalia, or other designated countries can void your TPS status. USCIS may determine that you no longer need protection.\n• Travel to third countries: Travel to countries other than your home country is generally permitted with advance parole, but exercise caution.\n• Re-entry considerations: Upon return, present your advance parole document, valid TPS status evidence, and valid passport to CBP officers.\n• Pending applications: Traveling while immigration applications are pending can complicate your case.\n\nBenefits of Travel with Advance Parole:\nFor TPS holders who entered the United States without inspection (crossed the border without documents), travel with advance parole and lawful return can create a lawful entry record. This lawful entry may be important for future immigration benefits, including adjustment of status to permanent residence.\n\nTravel Document Processing:\nAdvance parole documents are typically valid for one year or until your TPS status expires, whichever comes first. You must have valid TPS status to travel on advance parole. Apply for new advance parole before each international trip if your previous document has expired."
        },
        {
          heading: "TPS Renewal and Redesignation",
          content: "Understanding TPS renewal and redesignation is essential for maintaining your protected status long-term:\n\nTPS Extensions:\nDHS regularly reviews conditions in designated countries and decides whether to extend TPS designations. Extensions are announced in the Federal Register and on the USCIS website. When TPS is extended, current beneficiaries can re-register to maintain their status.\n\nRedesignation:\nRedesignation is different from extension. When DHS redesignates a country for TPS, it opens registration to individuals who arrived after the original designation date but before the new designation date. Redesignation can benefit people who were previously ineligible because they arrived too recently.\n\nTermination of TPS:\nIf DHS determines that conditions in a country have improved sufficiently, it may terminate TPS designation. Termination is announced with advance notice (typically 60-180 days) to allow beneficiaries to prepare. During this time, legal challenges may be filed, and beneficiaries should consult with immigration attorneys about their options.\n\nRe-Registration Process:\nWhen a re-registration period opens:\n1. File Form I-821 marked as re-registration\n2. File Form I-765 for EAD renewal\n3. Submit required fees or fee waiver request\n4. Provide updated evidence if your circumstances have changed\n5. File before the re-registration deadline\n\nConsequences of Missing Re-Registration:\nFailing to re-register during the designated period can result in loss of TPS status and work authorization. If you miss the deadline, you may be able to file a late registration with evidence of good cause for the delay. Contact our office immediately if you missed a re-registration deadline."
        },
        {
          heading: "Path from TPS to Green Card",
          content: "While TPS itself does not provide a direct path to permanent residence, TPS holders have several potential pathways to obtain a green card:\n\nFamily-Based Immigration:\nIf you have a U.S. citizen or permanent resident family member who can petition for you, family-based immigration may be an option. Immediate relatives of U.S. citizens (spouse, parent of adult citizen, unmarried child under 21) have the most direct path. Other family preference categories have longer wait times.\n\nThe Advance Parole Advantage:\nTPS holders who entered without inspection and later travel abroad with advance parole may create a lawful admission record upon return. This lawful entry can enable adjustment of status (applying for a green card while in the U.S.) for those with an approved immigrant petition. This strategy requires careful planning and legal guidance.\n\nEmployment-Based Immigration:\nIf you have skills, education, or job offers that qualify for employment-based immigration, your employer may be able to sponsor you for a green card. Categories include EB-1 (priority workers), EB-2 (professionals with advanced degrees), EB-3 (skilled workers), and others.\n\nAsylum or Refugee Status:\nSome TPS holders may also qualify for asylum if they can demonstrate persecution based on protected grounds. Successfully obtaining asylum provides a more stable status and a path to permanent residence after one year.\n\nSpecial Programs:\nDepending on circumstances, other programs like U visas (crime victims), T visas (trafficking victims), VAWA (domestic violence survivors), or Special Immigrant Visas may apply.\n\nImportant Considerations:\n• TPS does not forgive immigration violations\n• Unlawful presence may affect green card eligibility\n• Some TPS holders face bars to adjustment\n• Legal consultation is essential for pathway planning\n\nOur office helps Colton residents understand their options and develop strategies for transitioning from TPS to permanent residence when possible."
        },
        {
          heading: "Colton Area TPS Services",
          content: "SoCal Immigration Services provides comprehensive TPS assistance to residents throughout Colton and San Bernardino County. Our services include:\n\nTPS Application Preparation:\n• Initial TPS registration applications\n• Re-registration filings\n• Document gathering and organization\n• Form completion and review\n• Filing fee assistance and fee waiver applications\n\nWork Authorization Services:\n• EAD applications with TPS\n• EAD renewal assistance\n• Automatic extension documentation for employers\n• Lost or stolen EAD replacement\n\nTravel Document Services:\n• Advance parole applications\n• Travel planning guidance\n• Re-entry documentation preparation\n\nDocument Services:\n• Arabic to English certified translations\n• Document authentication guidance\n• Evidence gathering for continuous presence and residence\n• Country conditions documentation\n\nOngoing Support:\n• Re-registration deadline monitoring\n• Status update notifications\n• Case status inquiries\n• Address change notifications to USCIS\n\nSpecialized Arab Community Services:\nOur Arabic-speaking staff understands the unique needs of Syrian, Yemeni, Sudanese, and Somali nationals. We provide culturally sensitive assistance and can communicate with you in your native language. We understand the conditions in your home countries and can help gather appropriate documentation.\n\nColton Service Area:\nWhile our office is in Garden Grove, we serve clients throughout Southern California, including Colton, San Bernardino, Rialto, Fontana, Ontario, Riverside, and surrounding communities. We offer phone consultations, video meetings, and can receive documents by mail for clients who cannot travel to our office."
        },
        {
          heading: "Common TPS Questions from Colton Residents",
          content: "We frequently receive questions about TPS from our Colton clients. Here are answers to common concerns:\n\nQuestion: Can I apply for TPS if I entered the United States illegally?\nAnswer: Yes, manner of entry does not disqualify you from TPS. You must prove you were present in the U.S. on the required date and have maintained continuous residence and physical presence.\n\nQuestion: What happens if I leave the United States briefly?\nAnswer: Brief, casual, and innocent departures generally do not break continuous physical presence. However, extended absences or travel without advance parole can affect your status. Consult with us before any international travel.\n\nQuestion: My TPS country designation might end. What should I do?\nAnswer: Continue to re-register while TPS is available. Explore other immigration options such as family petitions, employment sponsorship, or asylum. Legal challenges to TPS termination have historically delayed implementation. Do not assume your status will end without staying informed.\n\nQuestion: Can my children receive TPS?\nAnswer: Children included in your TPS application receive derivative TPS status. Children born in the United States are U.S. citizens and do not need TPS.\n\nQuestion: What if my TPS application is denied?\nAnswer: You can appeal certain denials or request reconsideration. A denial may trigger removal proceedings for some applicants. Seek legal assistance immediately if your TPS application is denied.\n\nQuestion: How much does TPS cost?\nAnswer: Filing fees change periodically. As of 2026, Form I-821 and Form I-765 have separate fees totaling several hundred dollars. Fee waivers are available for those who demonstrate financial hardship."
        }
      ],

      faqs: [
        {
          q: "What is the current TPS status for Syrian nationals in Colton?",
          a: "Syria TPS is currently extended through 2027. Syrian nationals who were present in the U.S. since the designation date and meet all requirements can maintain or apply for TPS. Re-registration periods are announced on the USCIS website. Contact our office for the most current registration deadlines."
        },
        {
          q: "Can Yemen nationals in Colton apply for TPS in 2026?",
          a: "Yes, Yemen is designated for TPS through 2027 due to the ongoing humanitarian crisis. Yemeni nationals in Colton must demonstrate they were present in the U.S. since the required date and meet all eligibility requirements. Both initial registration and re-registration may be available depending on announced periods."
        },
        {
          q: "How long does TPS application processing take for San Bernardino County residents?",
          a: "TPS applications typically take 3-6 months for initial processing. EAD cards may be issued within this timeframe. However, processing times vary based on USCIS workload. Re-registration applicants often receive automatic EAD extensions while their applications are pending."
        },
        {
          q: "Can I work in Colton while my TPS application is pending?",
          a: "If you are re-registering and have an automatic EAD extension, you can continue working with proof of the extension. Initial TPS applicants must wait for their EAD to be approved before working. Carry your receipt notice and any automatic extension documentation at all times."
        },
        {
          q: "What happens if TPS ends for my country while I live in Colton?",
          a: "If TPS designation terminates, you would lose protected status after the termination date. You should explore other immigration options well in advance, such as family petitions, employment sponsorship, asylum, or other relief. Legal challenges to termination have historically delayed implementation."
        },
        {
          q: "Does SoCal Immigration Services help with TPS applications for Colton residents?",
          a: "Yes, we provide comprehensive TPS services for Colton and all of San Bernardino County. Our Arabic-speaking staff assists with initial registrations, re-registrations, EAD applications, advance parole, translations, and document preparation. Call (714) 421-8872 for a consultation."
        }
      ],

      cta: {
        title: "Need TPS Help in Colton?",
        text: "Our Arabic-speaking team specializes in TPS applications for Syrian, Yemeni, Sudanese, and Somali nationals. Get expert document preparation and filing assistance.",
        button: "Schedule TPS Consultation"
      }
    },
    ar: {
      slug: "tps-temporary-protected-status-colton",
      title: "TPS الوضع المحمي المؤقت في كولتون: دليل للمهاجرين العرب",
      subtitle: "دليل شامل لأهلية الوضع المحمي المؤقت والطلبات والتجديدات للمجتمع العربي في مقاطعة سان برناردينو",
      metaTitle: "TPS الوضع المحمي المؤقت كولتون | مساعدة سوريا اليمن السودان الصومال",
      metaDescription: "دليل TPS كامل لسكان كولتون. أهلية سوريا، اليمن، السودان، الصومال، تصاريح العمل، قواعد السفر. فريق يتحدث العربية. اتصل (714) 421-8872.",
      keywords: "TPS كولتون، الوضع المحمي المؤقت سان برناردينو، TPS سوريا كاليفورنيا، TPS اليمن، TPS السودان، TPS الصومال",
      category: "وضع الهجرة",
      location: "كولتون",
      date: "28 يناير 2026",
      lastUpdated: "28 يناير 2026",
      readTime: "18 دقيقة قراءة",
      author: "خدمات حلول الهجرة",
      wordCount: 3500,
      summary: "يوفر الوضع المحمي المؤقت (TPS) تصريح عمل وحماية من الترحيل لمواطني الدول المعينة بما في ذلك سوريا واليمن والسودان والصومال. يمكن لسكان كولتون التقديم خلال فترات التسجيل أو لإعادة التسجيل إذا كانوا يحملون TPS بالفعل.",
      locationIntro: "كولتون، الواقعة في مقاطعة سان برناردينو، هي موطن لمجتمع عربي متنوع يشمل عائلات من سوريا واليمن والسودان والصومال. قد يتأهل هؤلاء المواطنون للحصول على الوضع المحمي المؤقت (TPS)، وهو حماية هجرة حيوية توفر تصريح عمل وأماناً من الترحيل. يشرح هذا الدليل الشامل كل ما يحتاج سكان كولتون معرفته حول أهلية TPS والطلبات والحفاظ على الوضع المحمي.",

      sections: [
        {
          heading: "ما هو الوضع المحمي المؤقت (TPS)؟",
          content: "الوضع المحمي المؤقت هو فائدة هجرة إنسانية تمنحها وزارة الأمن الداخلي (DHS) لمواطني البلدان التي تعاني من نزاع مسلح مستمر أو كوارث بيئية أو ظروف استثنائية أخرى تمنع العودة الآمنة.\n\nيوفر TPS ثلاث حمايات أساسية:\n\n1. الحماية من الترحيل: لا يمكن إبعاد حاملي TPS من الولايات المتحدة طالما بقي وضعهم صالحاً\n\n2. تصريح العمل: يحصل المستفيدون من TPS على تصاريح عمل (وثائق تصريح العمل) تسمح بالعمل القانوني في أي مكان في الولايات المتحدة\n\n3. تصريح السفر: مع الإفراج المسبق، يمكن لحاملي TPS السفر دولياً والعودة إلى الولايات المتحدة\n\nTPS هو وضع مؤقت يجب تجديده خلال فترات التسجيل المحددة. لا يؤدي مباشرة إلى الإقامة الدائمة، لكن يمكن لحاملي TPS متابعة مسارات هجرة أخرى أثناء الحماية. البرنامج موجود منذ 1990 بموجب قانون الهجرة، يوفر حماية حيوية لمئات الآلاف من المواطنين الأجانب في الولايات المتحدة."
        },
        {
          heading: "البلدان المعينة حالياً لـ TPS",
          content: "اعتباراً من يناير 2026، البلدان التالية معينة لـ TPS. عدة منها ذات صلة خاصة بالمجتمع العربي في كولتون:",
          table: {
            headers: ["البلد", "التعيين الحالي", "فترة إعادة التسجيل", "الصلة بالمجتمع العربي"],
            rows: [
              ["سوريا", "ممتد حتى 2027", "راجع USCIS للتواريخ", "بلد عربي رئيسي - حرب أهلية مستمرة"],
              ["اليمن", "ممتد حتى 2027", "راجع USCIS للتواريخ", "بلد عربي رئيسي - أزمة إنسانية"],
              ["السودان", "ممتد حتى 2026", "راجع USCIS للتواريخ", "دولة عربية أفريقية - نزاع مستمر"],
              ["الصومال", "ممتد حتى 2026", "راجع USCIS للتواريخ", "دولة شرق أفريقية بروابط عربية"],
              ["جنوب السودان", "ممتد حتى 2026", "راجع USCIS للتواريخ", "نزاع وأزمة إنسانية"],
              ["لبنان", "راجع الوضع الحالي", "إذا تم التعيين", "تعيين مستقبلي محتمل"],
              ["أفغانستان", "ممتد حتى 2026", "راجع USCIS للتواريخ", "دولة ذات أغلبية مسلمة"],
              ["أوكرانيا", "ممتد حتى 2026", "راجع USCIS للتواريخ", "تعيين حديث"],
              ["فنزويلا", "ممتد حتى 2026", "راجع USCIS للتواريخ", "تعيين أمريكي لاتيني"],
              ["هايتي", "ممتد حتى 2026", "راجع USCIS للتواريخ", "تعيين كاريبي"]
            ]
          }
        },
        {
          heading: "متطلبات أهلية TPS",
          content: "للتأهل للوضع المحمي المؤقت، يجب على المتقدمين استيفاء معايير محددة وضعتها USCIS. فهم هذه المتطلبات ضروري قبل التقديم:",
          list: [
            "الجنسية: يجب أن تكون مواطناً في بلد معين لـ TPS (أو شخص بدون جنسية أقام آخر مرة بشكل اعتيادي في ذلك البلد)",
            "الحضور الجسدي المستمر: يجب أن تكون حاضراً جسدياً بشكل مستمر في الولايات المتحدة منذ التاريخ المحدد لتعيين بلدك",
            "الإقامة المستمرة: يجب أن تكون مقيماً بشكل مستمر في الولايات المتحدة منذ التاريخ المحدد في تعيين TPS",
            "الموعد النهائي للتقديم: يجب التقديم خلال فترة تسجيل أولي مفتوحة أو فترة إعادة تسجيل",
            "القبول: يجب ألا تكون غير مقبول بموجب أسس هجرة معينة (تنازلات متاحة لبعض الأسباب)",
            "الموانع الجنائية: يجب ألا تكون مداناً بجناية أو جنحتين أو أكثر في الولايات المتحدة",
            "مانع الاضطهاد: يجب ألا تكون قد اضطهدت آخرين على أساس العرق أو الدين أو الجنسية أو الرأي السياسي أو عضوية مجموعة اجتماعية"
          ]
        },
        {
          heading: "التسجيل الأولي لـ TPS مقابل إعادة التسجيل",
          content: "فهم الفرق بين التسجيل الأولي وإعادة التسجيل أمر حاسم للحفاظ على وضع TPS:\n\nالتسجيل الأولي لـ TPS:\nالتسجيل الأولي للأفراد الذين لم يحصلوا على TPS من قبل. لتكون مؤهلاً، يجب أن تثبت أنك كنت حاضراً في الولايات المتحدة في تاريخ التعيين لبلدك وحافظت على إقامة وحضور جسدي مستمرين منذ ذلك التاريخ. يتم الإعلان عن فترات التسجيل الأولي عندما يتم تعيين بلد لأول مرة أو إعادة تعيينه لـ TPS.\n\nمتطلبات التسجيل الأولي تشمل:\n• إثبات الجنسية من بلد معين\n• دليل الحضور الجسدي المستمر منذ تاريخ التعيين\n• دليل الإقامة المستمرة منذ التاريخ المطلوب\n• نموذج I-821 مكتمل (طلب TPS)\n• نموذج I-765 مكتمل (طلب تصريح العمل)\n• جميع المستندات الداعمة والرسوم المطلوبة\n\nإعادة التسجيل في TPS:\nإعادة التسجيل للأفراد الذين يحملون بالفعل وضع TPS صالح ويحتاجون للحفاظ على حمايتهم. تعلن DHS عن فترات إعادة التسجيل قبل انتهاء صلاحية التعيينات الحالية. تفويت مواعيد إعادة التسجيل يمكن أن يؤدي إلى فقدان وضع TPS وتصريح العمل.\n\nمتطلبات إعادة التسجيل تشمل:\n• وضع TPS صالح موجود\n• التقديم خلال فترة إعادة التسجيل المعلنة\n• نموذج I-821 مكتمل مميز كإعادة تسجيل\n• نموذج I-765 إذا كنت تجدد تصريح العمل\n• دليل محدث إذا تغيرت ظروفك\n• جميع الرسوم المطلوبة\n\nالتسجيل الأولي المتأخر:\nفي بعض الحالات، قد يتأهل الأفراد للتسجيل الأولي المتأخر إذا استوفوا معايير محددة مثل:\n• كونك طفل لحامل TPS بلغ 21\n• وجود تغيير مؤهل في الظروف\n• كان لديك سابقاً وضع هجرة صالح انتهت صلاحيته منذ ذلك الحين"
        },
        {
          heading: "المستندات المطلوبة لطلب TPS",
          content: "جمع التوثيق المناسب ضروري لنجاح طلب TPS. المستندات التالية مطلوبة أو موصى بها بشدة:",
          list: [
            "نموذج I-821: طلب الوضع المحمي المؤقت - نموذج طلب TPS الرئيسي",
            "نموذج I-765: طلب وثيقة تصريح العمل - مطلوب إذا كنت تريد تصريح عمل",
            "جواز سفر أو وثيقة سفر: جواز سفر حالي أو منتهي من بلد جنسيتك",
            "شهادة ميلاد: شهادة ميلاد رسمية مع ترجمة إنجليزية معتمدة",
            "بطاقة هوية وطنية: إذا متاحة، توفر إثباتاً إضافياً للجنسية",
            "دليل تاريخ الدخول: I-94، أختام جواز السفر، تذاكر الطيران، أو إثبات آخر لوقت دخولك الولايات المتحدة",
            "دليل الإقامة المستمرة: عقود إيجار، فواتير خدمات، كشوف بنكية، سجلات عمل، سجلات مدرسية، سجلات طبية، إقرارات ضريبية",
            "دليل الحضور الجسدي المستمر: مستندات مماثلة تظهر أنك بقيت في الولايات المتحدة",
            "صورتان بحجم جواز السفر: صور حديثة تستوفي مواصفات USCIS",
            "رسوم التقديم: الرسوم الحالية لـ I-821 و I-765 (إعفاءات من الرسوم متاحة للمؤهلين)",
            "إشعارات الموافقة السابقة على TPS: إذا كنت تعيد التسجيل، أرفق مستندات الموافقة السابقة",
            "وثيقة تصريح العمل: نسخة من EAD الحالي إذا كنت تعيد التسجيل"
          ]
        },
        {
          heading: "تصريح العمل مع TPS (وثيقة تصريح العمل)",
          content: "من أهم فوائد TPS هي وثيقة تصريح العمل (EAD)، المعروفة بتصريح العمل. إليك ما يحتاج سكان كولتون معرفته عن تصريح العمل مع TPS:\n\nالحصول على EAD الأولي:\nعند التقدم لـ TPS، يمكنك التقدم في نفس الوقت لـ EAD باستخدام نموذج I-765. يسمح لك EAD بالعمل قانونياً لأي صاحب عمل في الولايات المتحدة. أوقات المعالجة تختلف، لكن USCIS عادة تصدر EADs خلال 3-6 أشهر من التقديم.\n\nتمديدات EAD التلقائية:\nعندما تمدد DHS تعيين TPS وتعلن عن فترة إعادة تسجيل، عادة توفر أيضاً تمديدات تلقائية لـ EADs الموجودة. هذا يعني أن تصريح عملك الحالي يبقى صالحاً أثناء انتظار طلب إعادة التسجيل. يجب أن تحمل إثبات التمديد التلقائي (إشعار السجل الفيدرالي) مع EAD المنتهي.\n\nتفاصيل بطاقة EAD:\nتحتوي EADs المستندة إلى TPS على رمز الفئة A-12 أو C-19، مما يعرفك كحامل TPS. تتضمن البطاقة صورتك واسمك وتاريخ ميلادك وتاريخ الانتهاء. يستخدم أصحاب العمل هذه البطاقة للتحقق من أهليتك للعمل من خلال عملية I-9.\n\nتجديد EAD:\nللحفاظ على تصريح العمل، يجب تقديم نموذج I-765 مع كل إعادة تسجيل TPS. لا تدع EAD تنتهي دون التقدم للتجديد، لأن الفجوات في تصريح العمل يمكن أن تؤثر على توظيفك. قدم إعادة التسجيل وتجديد EAD بمجرد فتح فترة التسجيل.\n\nماذا تفعل إذا انتهت صلاحية EAD:\nإذا انتهت صلاحية EAD قبل معالجة تجديدك، تحقق مما إذا كان تمديد تلقائي ينطبق. اتصل بمكتبنا للإرشاد حول توثيق التمديدات التلقائية لصاحب عملك. نساعد سكان كولتون على فهم حقوقهم والحفاظ على تصريح عمل مستمر."
        },
        {
          heading: "السفر مع TPS (اعتبارات الإفراج المسبق)",
          content: "السفر خارج الولايات المتحدة أثناء حمل TPS يتطلب تخطيطاً دقيقاً. إليك اعتبارات أساسية لسكان كولتون:\n\nمتطلبات الإفراج المسبق:\nقبل السفر دولياً، يجب على حاملي TPS الحصول على الإفراج المسبق (نموذج I-131، طلب وثيقة السفر). السفر بدون إفراج مسبق يمكن أن يؤدي إلى فقدان وضع TPS وربما يؤدي إلى موانع إعادة الدخول.\n\nكيفية التقدم للإفراج المسبق:\nقدم نموذج I-131 مع USCIS، موضحاً أنك تحمل TPS وتحتاج للسفر مؤقتاً. أرفق دليل وضع TPS الخاص بك وسبب السفر وجميع الرسوم المطلوبة. أوقات المعالجة قد تستغرق عدة أشهر، لذا خطط مقدماً.\n\nتحذيرات سفر مهمة:\n• لا تسافر أبداً إلى بلدك: العودة إلى سوريا أو اليمن أو السودان أو الصومال أو بلدان معينة أخرى يمكن أن تلغي وضع TPS. قد تقرر USCIS أنك لم تعد بحاجة للحماية.\n• السفر إلى دول ثالثة: السفر إلى بلدان غير بلدك مسموح عموماً مع الإفراج المسبق، لكن توخَّ الحذر.\n• اعتبارات إعادة الدخول: عند العودة، قدم وثيقة الإفراج المسبق ودليل وضع TPS الصالح وجواز سفر صالح لموظفي CBP.\n• الطلبات المعلقة: السفر أثناء انتظار طلبات الهجرة يمكن أن يعقد قضيتك.\n\nفوائد السفر مع الإفراج المسبق:\nلحاملي TPS الذين دخلوا الولايات المتحدة بدون تفتيش (عبروا الحدود بدون وثائق)، السفر مع الإفراج المسبق والعودة القانونية يمكن أن يخلق سجل دخول قانوني. هذا الدخول القانوني قد يكون مهماً للفوائد الهجرية المستقبلية، بما في ذلك تعديل الوضع إلى إقامة دائمة.\n\nمعالجة وثيقة السفر:\nوثائق الإفراج المسبق عادة صالحة لسنة واحدة أو حتى انتهاء صلاحية وضع TPS، أيهما يأتي أولاً. يجب أن يكون لديك وضع TPS صالح للسفر على الإفراج المسبق. قدم طلباً للإفراج المسبق الجديد قبل كل رحلة دولية إذا انتهت صلاحية وثيقتك السابقة."
        },
        {
          heading: "تجديد TPS وإعادة التعيين",
          content: "فهم تجديد TPS وإعادة التعيين ضروري للحفاظ على وضعك المحمي على المدى الطويل:\n\nتمديدات TPS:\nتراجع DHS بانتظام الأوضاع في البلدان المعينة وتقرر ما إذا كانت ستمدد تعيينات TPS. يتم الإعلان عن التمديدات في السجل الفيدرالي وعلى موقع USCIS. عندما يتم تمديد TPS، يمكن للمستفيدين الحاليين إعادة التسجيل للحفاظ على وضعهم.\n\nإعادة التعيين:\nإعادة التعيين مختلفة عن التمديد. عندما تعيد DHS تعيين بلد لـ TPS، تفتح التسجيل للأفراد الذين وصلوا بعد تاريخ التعيين الأصلي ولكن قبل تاريخ التعيين الجديد. إعادة التعيين يمكن أن تفيد الأشخاص الذين كانوا غير مؤهلين سابقاً لأنهم وصلوا حديثاً جداً.\n\nإنهاء TPS:\nإذا قررت DHS أن الأوضاع في بلد ما تحسنت بشكل كافٍ، قد تنهي تعيين TPS. يتم الإعلان عن الإنهاء مع إشعار مسبق (عادة 60-180 يوماً) للسماح للمستفيدين بالاستعداد. خلال هذا الوقت، قد يتم تقديم طعون قانونية، ويجب على المستفيدين استشارة محامي هجرة حول خياراتهم.\n\nعملية إعادة التسجيل:\nعندما تفتح فترة إعادة التسجيل:\n1. قدم نموذج I-821 مميز كإعادة تسجيل\n2. قدم نموذج I-765 لتجديد EAD\n3. قدم الرسوم المطلوبة أو طلب إعفاء من الرسوم\n4. قدم دليلاً محدثاً إذا تغيرت ظروفك\n5. قدم قبل الموعد النهائي لإعادة التسجيل\n\nعواقب تفويت إعادة التسجيل:\nعدم إعادة التسجيل خلال الفترة المحددة يمكن أن يؤدي إلى فقدان وضع TPS وتصريح العمل. إذا فاتك الموعد النهائي، قد تتمكن من تقديم تسجيل متأخر مع دليل على سبب وجيه للتأخير. اتصل بمكتبنا فوراً إذا فاتك موعد إعادة التسجيل."
        },
        {
          heading: "المسار من TPS إلى البطاقة الخضراء",
          content: "بينما TPS نفسه لا يوفر مساراً مباشراً للإقامة الدائمة، لدى حاملي TPS عدة مسارات محتملة للحصول على بطاقة خضراء:\n\nالهجرة العائلية:\nإذا كان لديك فرد من العائلة مواطن أمريكي أو مقيم دائم يمكنه تقديم عريضة لك، قد تكون الهجرة العائلية خياراً. الأقارب المباشرون للمواطنين الأمريكيين (الزوج/ة، الوالد لمواطن بالغ، الطفل غير المتزوج تحت 21) لديهم المسار الأكثر مباشرة. فئات تفضيل العائلة الأخرى لديها فترات انتظار أطول.\n\nميزة الإفراج المسبق:\nحاملو TPS الذين دخلوا بدون تفتيش وسافروا لاحقاً للخارج مع إفراج مسبق قد يخلقون سجل قبول قانوني عند العودة. هذا الدخول القانوني يمكن أن يمكّن من تعديل الوضع (التقدم لبطاقة خضراء أثناء التواجد في الولايات المتحدة) لمن لديهم عريضة مهاجر موافق عليها. هذه الاستراتيجية تتطلب تخطيطاً دقيقاً وإرشاداً قانونياً.\n\nالهجرة القائمة على العمل:\nإذا كان لديك مهارات أو تعليم أو عروض عمل تؤهل للهجرة القائمة على العمل، قد يتمكن صاحب عملك من رعايتك للحصول على بطاقة خضراء. تشمل الفئات EB-1 (العمال ذوو الأولوية)، EB-2 (المهنيون حاملو الدرجات المتقدمة)، EB-3 (العمال المهرة)، وغيرها.\n\nوضع اللجوء أو اللاجئين:\nبعض حاملي TPS قد يتأهلون أيضاً للجوء إذا استطاعوا إثبات الاضطهاد بناءً على أسباب محمية. الحصول على اللجوء بنجاح يوفر وضعاً أكثر استقراراً ومساراً للإقامة الدائمة بعد سنة واحدة.\n\nبرامج خاصة:\nحسب الظروف، قد تنطبق برامج أخرى مثل تأشيرات U (ضحايا الجريمة)، تأشيرات T (ضحايا الاتجار)، VAWA (الناجون من العنف الأسري)، أو تأشيرات المهاجرين الخاصة.\n\nاعتبارات مهمة:\n• TPS لا يغفر انتهاكات الهجرة\n• الحضور غير القانوني قد يؤثر على أهلية البطاقة الخضراء\n• بعض حاملي TPS يواجهون موانع للتعديل\n• الاستشارة القانونية ضرورية لتخطيط المسار\n\nمكتبنا يساعد سكان كولتون على فهم خياراتهم وتطوير استراتيجيات للانتقال من TPS إلى الإقامة الدائمة عند الإمكان."
        },
        {
          heading: "خدمات TPS في منطقة كولتون",
          content: "تقدم خدمات حلول الهجرة مساعدة شاملة في TPS للسكان في جميع أنحاء كولتون ومقاطعة سان برناردينو. تشمل خدماتنا:\n\nإعداد طلبات TPS:\n• طلبات التسجيل الأولي لـ TPS\n• تقديمات إعادة التسجيل\n• جمع وتنظيم الوثائق\n• إكمال ومراجعة النماذج\n• المساعدة في رسوم التقديم وطلبات الإعفاء من الرسوم\n\nخدمات تصريح العمل:\n• طلبات EAD مع TPS\n• المساعدة في تجديد EAD\n• توثيق التمديد التلقائي لأصحاب العمل\n• استبدال EAD المفقود أو المسروق\n\nخدمات وثائق السفر:\n• طلبات الإفراج المسبق\n• إرشادات تخطيط السفر\n• إعداد وثائق إعادة الدخول\n\nخدمات الوثائق:\n• ترجمات معتمدة من العربية إلى الإنجليزية\n• إرشادات توثيق المستندات\n• جمع الأدلة للحضور والإقامة المستمرة\n• توثيق أوضاع البلاد\n\nالدعم المستمر:\n• مراقبة مواعيد إعادة التسجيل\n• إشعارات تحديث الوضع\n• استفسارات حالة القضية\n• إخطارات تغيير العنوان لـ USCIS\n\nخدمات متخصصة للمجتمع العربي:\nفريقنا الناطق بالعربية يفهم الاحتياجات الفريدة للمواطنين السوريين واليمنيين والسودانيين والصوماليين. نقدم مساعدة حساسة ثقافياً ويمكننا التواصل معك بلغتك الأم. نحن نفهم الأوضاع في بلدانكم ويمكننا المساعدة في جمع التوثيق المناسب.\n\nمنطقة خدمة كولتون:\nبينما مكتبنا في جاردن غروف، نخدم العملاء في جميع أنحاء جنوب كاليفورنيا، بما في ذلك كولتون وسان برناردينو وريالتو وفونتانا وأونتاريو وريفرسايد والمجتمعات المحيطة. نقدم استشارات هاتفية واجتماعات فيديو ويمكننا استلام الوثائق بالبريد للعملاء الذين لا يستطيعون السفر إلى مكتبنا."
        },
        {
          heading: "أسئلة TPS الشائعة من سكان كولتون",
          content: "نتلقى أسئلة متكررة حول TPS من عملائنا في كولتون. إليك إجابات على المخاوف الشائعة:\n\nسؤال: هل يمكنني التقدم لـ TPS إذا دخلت الولايات المتحدة بشكل غير قانوني؟\nجواب: نعم، طريقة الدخول لا تستبعدك من TPS. يجب أن تثبت أنك كنت حاضراً في الولايات المتحدة في التاريخ المطلوب وحافظت على إقامة وحضور جسدي مستمرين.\n\nسؤال: ماذا يحدث إذا غادرت الولايات المتحدة لفترة وجيزة؟\nجواب: المغادرات القصيرة والعرضية والبريئة عموماً لا تكسر الحضور الجسدي المستمر. ومع ذلك، الغيابات الممتدة أو السفر بدون إفراج مسبق يمكن أن تؤثر على وضعك. استشرنا قبل أي سفر دولي.\n\nسؤال: تعيين TPS لبلدي قد ينتهي. ماذا أفعل؟\nجواب: استمر في إعادة التسجيل طالما TPS متاح. استكشف خيارات هجرة أخرى مثل عرائض العائلة أو رعاية العمل أو اللجوء. الطعون القانونية في إنهاء TPS أخرت التنفيذ تاريخياً. لا تفترض أن وضعك سينتهي دون البقاء على اطلاع.\n\nسؤال: هل يمكن لأطفالي الحصول على TPS؟\nجواب: الأطفال المشمولون في طلب TPS الخاص بك يحصلون على وضع TPS مشتق. الأطفال المولودون في الولايات المتحدة هم مواطنون أمريكيون ولا يحتاجون TPS.\n\nسؤال: ماذا لو رُفض طلب TPS الخاص بي؟\nجواب: يمكنك استئناف بعض الرفوض أو طلب إعادة النظر. الرفض قد يؤدي إلى إجراءات إبعاد لبعض المتقدمين. اطلب المساعدة القانونية فوراً إذا رُفض طلب TPS الخاص بك.\n\nسؤال: كم يكلف TPS؟\nجواب: رسوم التقديم تتغير دورياً. اعتباراً من 2026، نموذج I-821 ونموذج I-765 لديهما رسوم منفصلة تبلغ مجتمعة عدة مئات من الدولارات. الإعفاءات من الرسوم متاحة لمن يثبتون صعوبة مالية."
        }
      ],

      faqs: [
        {
          q: "ما هو وضع TPS الحالي للمواطنين السوريين في كولتون؟",
          a: "TPS لسوريا ممتد حالياً حتى 2027. المواطنون السوريون الذين كانوا حاضرين في الولايات المتحدة منذ تاريخ التعيين ويستوفون جميع المتطلبات يمكنهم الحفاظ على TPS أو التقدم له. يتم الإعلان عن فترات إعادة التسجيل على موقع USCIS. اتصل بمكتبنا لأحدث مواعيد التسجيل."
        },
        {
          q: "هل يمكن لمواطني اليمن في كولتون التقدم لـ TPS في 2026؟",
          a: "نعم، اليمن معين لـ TPS حتى 2027 بسبب الأزمة الإنسانية المستمرة. يجب على المواطنين اليمنيين في كولتون إثبات أنهم كانوا حاضرين في الولايات المتحدة منذ التاريخ المطلوب ويستوفون جميع متطلبات الأهلية. كل من التسجيل الأولي وإعادة التسجيل قد يكون متاحاً حسب الفترات المعلنة."
        },
        {
          q: "كم تستغرق معالجة طلب TPS لسكان مقاطعة سان برناردينو؟",
          a: "طلبات TPS عادة تستغرق 3-6 أشهر للمعالجة الأولية. قد يتم إصدار بطاقات EAD خلال هذا الإطار الزمني. ومع ذلك، أوقات المعالجة تختلف بناءً على عبء عمل USCIS. المتقدمون لإعادة التسجيل غالباً يحصلون على تمديدات EAD تلقائية أثناء انتظار طلباتهم."
        },
        {
          q: "هل يمكنني العمل في كولتون أثناء انتظار طلب TPS؟",
          a: "إذا كنت تعيد التسجيل ولديك تمديد EAD تلقائي، يمكنك الاستمرار في العمل مع إثبات التمديد. المتقدمون الأوائل لـ TPS يجب أن ينتظروا الموافقة على EAD قبل العمل. احمل إشعار الاستلام وأي وثائق تمديد تلقائي في جميع الأوقات."
        },
        {
          q: "ماذا يحدث إذا انتهى TPS لبلدي أثناء إقامتي في كولتون؟",
          a: "إذا أُنهي تعيين TPS، ستفقد الوضع المحمي بعد تاريخ الإنهاء. يجب استكشاف خيارات هجرة أخرى مقدماً، مثل عرائض العائلة أو رعاية العمل أو اللجوء أو إعفاءات أخرى. الطعون القانونية في الإنهاء أخرت التنفيذ تاريخياً."
        },
        {
          q: "هل تساعد خدمات حلول الهجرة في طلبات TPS لسكان كولتون؟",
          a: "نعم، نقدم خدمات TPS شاملة لكولتون وجميع مقاطعة سان برناردينو. فريقنا الناطق بالعربية يساعد في التسجيلات الأولية وإعادة التسجيلات وطلبات EAD والإفراج المسبق والترجمات وإعداد الوثائق. اتصل (714) 421-8872 للاستشارة."
        }
      ],

      cta: {
        title: "تحتاج مساعدة TPS في كولتون؟",
        text: "فريقنا الناطق بالعربية متخصص في طلبات TPS للمواطنين السوريين واليمنيين والسودانيين والصوماليين. احصل على مساعدة خبراء في إعداد الوثائق والتقديم.",
        button: "حجز استشارة TPS"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default TPSStatusColton;
