import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const SyrianHumanitarianParoleLaMesa = ({ language }) => {
  const content = {
    en: {
      slug: "syrian-humanitarian-parole-la-mesa",
      title: "Syrian Humanitarian Parole in La Mesa: Protection Options for Syrian Families",
      subtitle: "Understanding Humanitarian Parole, TPS, and Asylum for Syrians in East San Diego County",
      metaTitle: "Syrian Humanitarian Parole La Mesa | Syrian TPS & Asylum San Diego",
      metaDescription: "Humanitarian parole and protection options for Syrians in La Mesa. Learn about Syrian TPS, asylum, and family reunification for Syrian nationals in San Diego County.",
      keywords: [
        "Syrian humanitarian parole La Mesa",
        "Syrian TPS San Diego",
        "Syrian asylum California",
        "Syrian refugee support",
        "Syrian immigration help",
        "humanitarian parole Syria",
        "Syrian family reunification",
        "Arabic immigration services La Mesa",
        "Syrian community resources",
        "East County Syrian support"
      ],
      category: "asylum",
      location: "La Mesa",
      region: "East San Diego County",
      targetDemographic: "Syrian refugees and immigrants",
      date: "January 22, 2026",
      readTime: "13 min read",
      author: "SoCal Immigration Services",
      image: "/images/blog/asylum.jpg",
      locationIntro: "La Mesa and East San Diego County have become home to a growing Syrian community, with many families arriving through refugee resettlement, humanitarian parole, or seeking asylum after fleeing the ongoing conflict. Whether you live near downtown La Mesa, the residential areas along Fletcher Parkway, or the communities near Grossmont Center, this guide provides essential information about protection options available to Syrian nationals. With TPS designation, asylum eligibility, and humanitarian parole programs, Syrians have multiple pathways to safety in the United States.",
      summary: "Syrians in La Mesa may qualify for multiple forms of protection including TPS (Temporary Protected Status), asylum, humanitarian parole, or refugee status. Each program has different requirements and benefits. Understanding all options helps Syrian families choose the best path for their situation and maximize their protection in the United States.",
      sections: [
        {
          heading: "The Syrian Conflict and U.S. Protection",
          content: "Since 2011, the Syrian civil war has displaced millions and created one of the world's worst humanitarian crises. The United States has recognized the severity of conditions in Syria through TPS designation and continues to grant asylum and refugee status to qualifying Syrians. Understanding the basis for protection helps Syrians navigate their immigration options.",
          list: [
            "Over 14 million Syrians displaced since 2011",
            "Syria designated for TPS since 2012 (extended multiple times)",
            "Country conditions support strong asylum claims",
            "All religious and ethnic groups at risk in different regions",
            "Documented persecution by government, ISIS, and other armed groups",
            "Conscription and political persecution remain grounds for asylum",
            "U.S. continues to recognize Syrian refugees through resettlement",
            "Family reunification programs available for Syrian refugees"
          ]
        },
        {
          heading: "Temporary Protected Status (TPS) for Syrians",
          content: "Syria has been designated for TPS since 2012, providing protection and work authorization for Syrians who were in the United States by the designation date. TPS must be renewed during each re-registration period, and Syria's designation has been extended multiple times.",
          table: {
            headers: ["TPS Requirement", "Current Syria Designation", "Documentation"],
            rows: [
              ["Nationality", "Syrian citizen or stateless last residing in Syria", "Passport, ID, birth certificate"],
              ["Continuous presence", "Must have been in U.S. by designation date", "Travel records, financial documents, dated photos"],
              ["Continuous residence", "Must reside continuously in U.S.", "Lease, utilities, employment records"],
              ["Current registration", "Must register during each period", "Check USCIS for current dates"],
              ["Criminal bars", "No disqualifying criminal history", "Court records if applicable"]
            ]
          }
        },
        {
          heading: "Humanitarian Parole for Syrians",
          content: "Humanitarian parole allows individuals outside the United States to enter for urgent humanitarian reasons. For Syrians, this may include family reunification when other visa categories are unavailable, medical emergencies, or other compelling circumstances. Parole is temporary and does not lead directly to permanent status.",
          list: [
            "Granted case-by-case for urgent humanitarian reasons",
            "Requires sponsor in the U.S. (often family member)",
            "Does not provide permanent status - temporary only",
            "Work authorization available during parole period",
            "May allow subsequent adjustment of status in some cases",
            "Significant public benefit can also justify parole",
            "Processing at U.S. consulates or through USCIS",
            "Often used when family immigration wait times are extremely long"
          ]
        },
        {
          heading: "Asylum for Syrian Nationals",
          content: "Syrians who have suffered persecution or have a well-founded fear of persecution based on race, religion, nationality, political opinion, or membership in a particular social group may qualify for asylum. Asylum leads to permanent residency and eventually citizenship.",
          list: [
            "Must file within one year of arrival (exceptions may apply)",
            "Political persecution by Assad government well-documented",
            "Religious minorities (Christians, Druze, etc.) often targeted",
            "Sunni Arabs in government-controlled areas at risk",
            "Military-age men face conscription or punishment for evasion",
            "LGBT Syrians face severe persecution",
            "Women may claim gender-based persecution in certain circumstances",
            "ISIS and opposition group persecution also grounds for asylum"
          ]
        },
        {
          heading: "Syrian Refugee Resettlement",
          content: "Syrians outside the United States may be referred for refugee resettlement through the U.S. Refugee Admissions Program (USRAP). This process involves UNHCR registration, extensive vetting, and resettlement agency coordination. Refugees enter with immediate work authorization and a path to permanent residence.",
          list: [
            "Must be outside both Syria and the United States",
            "Requires UNHCR registration and referral",
            "Extensive background checks and security vetting",
            "Medical examinations and cultural orientation required",
            "Resettlement agencies coordinate arrival and initial support",
            "Refugees receive work authorization upon arrival",
            "Must apply for green card one year after admission",
            "Path to citizenship after five years of permanent residence"
          ]
        },
        {
          heading: "Family Reunification for Syrians",
          content: "Syrian refugees and immigrants with family members still abroad have several options for family reunification. Understanding these options helps families plan for bringing loved ones to safety.",
          list: [
            "Refugees: I-730 for spouse/unmarried children under 21 (within 2 years)",
            "Asylees: I-730 following-to-join (within 2 years)",
            "Permanent residents: I-130 for spouse and unmarried children",
            "U.S. citizens: I-130 for parents, siblings, spouse, children",
            "Humanitarian parole: For urgent cases when other options unavailable",
            "Priority 3 (P-3) refugee processing for family members in some cases",
            "DNA testing often required to prove biological relationships",
            "Consular processing available in nearby countries (Jordan, Turkey, Lebanon)"
          ]
        },
        {
          heading: "Documentation Challenges for Syrians",
          content: "Many Syrians face documentation challenges due to the conflict. Civil registry offices have been destroyed, documents lost in displacement, and obtaining new documents from Syria is often impossible. USCIS recognizes these challenges and has procedures for cases with limited documentation.",
          list: [
            "Syrian passports may be expired or unavailable",
            "Birth certificates from destroyed civil registries",
            "Marriage certificates from mosques or churches may be only record",
            "Secondary evidence accepted when primary documents unavailable",
            "Affidavits from family members can support identity claims",
            "Country conditions evidence explains documentation difficulties",
            "Refugee records from UNHCR or host countries helpful",
            "DNA testing can establish family relationships"
          ]
        },
        {
          heading: "Work Authorization Options",
          content: "Syrians in the U.S. have several paths to work authorization depending on their immigration status. Understanding these options helps families achieve financial independence while pursuing longer-term immigration goals.",
          table: {
            headers: ["Status", "Work Authorization", "How to Obtain"],
            rows: [
              ["TPS", "Automatic with approval", "File I-765 with I-821"],
              ["Pending Asylum", "After 180 days if no decision", "File I-765 category (c)(8)"],
              ["Asylum Approved", "Immediate, indefinite", "I-94 or EAD"],
              ["Refugee", "Automatic for 1 year at entry", "I-94; renew with I-765"],
              ["Humanitarian Parole", "If included in parole grant", "As specified in parole documents"]
            ]
          }
        },
        {
          heading: "Choosing Between TPS and Asylum",
          content: "Syrians who qualify for both TPS and asylum should understand the differences to make informed decisions. Many pursue both simultaneously for maximum protection.",
          table: {
            headers: ["Factor", "TPS", "Asylum"],
            rows: [
              ["Duration", "Temporary, requires renewal", "Permanent once granted"],
              ["Path to green card", "No direct path", "Apply after one year"],
              ["Filing deadline", "During registration period", "Within one year of arrival"],
              ["Family members", "Must apply separately", "Derivatives included"],
              ["Travel", "Advance parole needed", "Refugee travel document"],
              ["If denied", "May be placed in proceedings", "May reapply or appeal"],
              ["Country conditions focus", "General country conditions", "Individual persecution"]
            ]
          }
        },
        {
          heading: "Community Resources for Syrians",
          content: "La Mesa and San Diego County offer various resources specifically serving Syrian and Arab refugees. These organizations provide social services, cultural support, and help navigating American systems.",
          list: [
            "International Rescue Committee San Diego: Refugee resettlement",
            "Catholic Charities: Immigration legal services",
            "Jewish Family Service of San Diego: Refugee employment services",
            "Partnership for the Advancement of New Americans (PANA): Advocacy",
            "Syrian Community Network (regional): Community support",
            "Local mosques: Spiritual and community support",
            "Arabic-speaking healthcare providers: Culturally competent care",
            "San Diego Refugee Communities Coalition: Resources and advocacy"
          ]
        }
      ],
      faqs: [
        {
          q: "Can I apply for both TPS and asylum?",
          a: "Yes, you can and often should apply for both TPS and asylum if you qualify. TPS provides immediate protection and work authorization while your asylum case is processed, which can take years. If asylum is granted, you have permanent status leading to a green card. If asylum is denied but TPS remains in effect, you still have protection. Pursuing both maximizes your options."
        },
        {
          q: "What if I missed the TPS registration deadline?",
          a: "If you missed a previous TPS registration period, you may be able to register during a new initial registration period if Syria is re-designated or the designation is extended with a new registration period. Late registrations are sometimes accepted if you can show good cause for missing the deadline. Consult with an immigration professional to evaluate your options."
        },
        {
          q: "Can I travel to Syria with TPS or asylum?",
          a: "Returning to Syria is extremely risky for your immigration status. For TPS holders, returning to Syria may be viewed as evidence you no longer need protection, potentially resulting in loss of TPS. For asylees, returning to the country of persecution can result in loss of asylum status. Even refugees should avoid returning. Consult an immigration attorney before any travel to Syria or surrounding countries."
        },
        {
          q: "How can I bring my family from Syria?",
          a: "Your options depend on your status. Refugees and asylees can file I-730 petitions for spouses and unmarried children under 21 within two years. Permanent residents and citizens can file I-130 family petitions. For urgent situations, humanitarian parole may be available. Family members in third countries (Jordan, Turkey, Lebanon) may process their visas there rather than in Syria."
        },
        {
          q: "What documentation do I need if my Syrian documents were lost?",
          a: "USCIS understands that many Syrians lost documents due to the conflict. You can provide secondary evidence such as affidavits from family members, school records, church or mosque records, UNHCR documents, or any other evidence supporting your identity and claims. Explain the circumstances of document loss in your application. DNA testing can establish family relationships when documents are unavailable."
        },
        {
          q: "Is my Syrian passport still valid for immigration purposes?",
          a: "Syrian passports, even if expired, can be used as identity evidence. However, for travel purposes, you need a valid passport or approved travel document. TPS holders and asylees can obtain advance parole or refugee travel documents for international travel. You do not need to renew your Syrian passport to maintain immigration status in the U.S."
        },
        {
          q: "What happens when Syria TPS ends?",
          a: "TPS is temporary and can be terminated if country conditions improve. If Syria's TPS designation ends, former TPS holders would need another immigration status to remain in the U.S. This is why many Syrians pursue asylum or other permanent status while maintaining TPS. If you have no other status when TPS ends, you could face removal proceedings."
        },
        {
          q: "Can I become a U.S. citizen if I'm Syrian?",
          a: "Yes. Syrians can become U.S. citizens through naturalization like any other immigrant. The path typically involves: gaining asylum or refugee status, applying for a green card after one year, and applying for citizenship after five years as a permanent resident. TPS alone does not lead to citizenship, but if you gain permanent residence through another means, you can then pursue citizenship."
        }
      ],
      cta: {
        title: "Need Help with Syrian Immigration Cases?",
        text: "Our Arabic-speaking team provides compassionate, expert assistance to Syrian families in La Mesa and throughout San Diego County. Whether you need TPS renewal, asylum representation, or family reunification help, we're here for you.",
        button: "Schedule Your Consultation"
      }
    },
    ar: {
      slug: "syrian-humanitarian-parole-la-mesa",
      title: "الإفراج المشروط الإنساني للسوريين في لا ميسا: خيارات الحماية للعائلات السورية",
      subtitle: "فهم الإفراج المشروط الإنساني وTPS واللجوء للسوريين في شرق مقاطعة سان دييغو",
      metaTitle: "الإفراج المشروط الإنساني السوري لا ميسا | TPS السوري واللجوء سان دييغو",
      metaDescription: "الإفراج المشروط الإنساني وخيارات الحماية للسوريين في لا ميسا. تعرف على TPS السوري واللجوء ولم شمل العائلة للمواطنين السوريين في مقاطعة سان دييغو.",
      keywords: [
        "الإفراج المشروط الإنساني السوري لا ميسا",
        "TPS السوري سان دييغو",
        "اللجوء السوري كاليفورنيا"
      ],
      category: "asylum",
      location: "لا ميسا",
      region: "شرق مقاطعة سان دييغو",
      targetDemographic: "اللاجئون والمهاجرون السوريون",
      date: "٢٢ يناير ٢٠٢٦",
      readTime: "١٣ دقيقة للقراءة",
      author: "خدمات الهجرة في جنوب كاليفورنيا",
      image: "/images/blog/asylum.jpg",
      locationIntro: "أصبحت لا ميسا وشرق مقاطعة سان دييغو موطناً لمجتمع سوري متنامٍ، مع وصول العديد من العائلات من خلال إعادة توطين اللاجئين أو الإفراج المشروط الإنساني أو طلب اللجوء بعد الفرار من النزاع المستمر. يوفر هذا الدليل معلومات أساسية حول خيارات الحماية المتاحة للمواطنين السوريين.",
      summary: "قد يكون السوريون في لا ميسا مؤهلين لأشكال متعددة من الحماية بما في ذلك TPS (الوضع المحمي المؤقت) واللجوء والإفراج المشروط الإنساني أو وضع اللاجئ. كل برنامج له متطلبات وفوائد مختلفة. فهم جميع الخيارات يساعد العائلات السورية على اختيار أفضل مسار لوضعهم.",
      sections: [
        {
          heading: "النزاع السوري والحماية الأمريكية",
          content: "منذ عام 2011، أدت الحرب الأهلية السورية إلى نزوح الملايين وخلقت واحدة من أسوأ الأزمات الإنسانية في العالم. اعترفت الولايات المتحدة بخطورة الأوضاع في سوريا من خلال تعيين TPS وتواصل منح اللجوء ووضع اللاجئ للسوريين المؤهلين.",
          list: [
            "أكثر من 14 مليون سوري نازح منذ 2011",
            "سوريا معينة لـ TPS منذ 2012 (مددت عدة مرات)",
            "ظروف البلد تدعم طلبات اللجوء القوية",
            "جميع المجموعات الدينية والعرقية معرضة للخطر في مناطق مختلفة",
            "الاضطهاد الموثق من قبل الحكومة وداعش والجماعات المسلحة الأخرى"
          ]
        }
      ],
      faqs: [
        {
          q: "هل يمكنني التقدم لكل من TPS واللجوء؟",
          a: "نعم، يمكنك وغالباً يجب أن تتقدم لكل من TPS واللجوء إذا كنت مؤهلاً. يوفر TPS حماية فورية وتصريح عمل بينما تتم معالجة قضية اللجوء الخاصة بك، والتي يمكن أن تستغرق سنوات. إذا مُنح اللجوء، لديك وضع دائم يؤدي إلى البطاقة الخضراء."
        },
        {
          q: "هل يمكنني السفر إلى سوريا مع TPS أو اللجوء؟",
          a: "العودة إلى سوريا محفوفة بالمخاطر للغاية لوضعك الهجري. لحاملي TPS، قد يُنظر إلى العودة إلى سوريا كدليل على أنك لم تعد بحاجة للحماية. للاجئين، يمكن أن تؤدي العودة إلى بلد الاضطهاد إلى فقدان وضع اللجوء. استشر محامي هجرة قبل أي سفر."
        }
      ],
      cta: {
        title: "هل تحتاج مساعدة في قضايا الهجرة السورية؟",
        text: "يقدم فريقنا الناطق بالعربية مساعدة متعاطفة وخبيرة للعائلات السورية في لا ميسا وجميع أنحاء مقاطعة سان دييغو.",
        button: "حدد موعد استشارتك"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default SyrianHumanitarianParoleLaMesa;
