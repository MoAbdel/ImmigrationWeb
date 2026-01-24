import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const N400DenialAppealPasadena = ({ language }) => {
  const content = {
    en: {
      slug: "n400-denial-appeal-pasadena",
      title: "N-400 Citizenship Denial Appeal in Pasadena: What to Do When Naturalization Is Denied",
      subtitle: "Understanding Your Options After a Naturalization Application Denial in Los Angeles County",
      metaTitle: "N-400 Denial Appeal Pasadena | Citizenship Application Denied Options",
      metaDescription: "What to do when your N-400 citizenship application is denied in Pasadena. Appeal options, N-336 hearing, federal court review. Arabic-speaking help.",
      keywords: [
        "N-400 denial appeal Pasadena",
        "citizenship application denied",
        "naturalization denial hearing",
        "N-336 hearing request",
        "citizenship appeal process",
        "USCIS denial reasons",
        "naturalization re-apply",
        "federal court citizenship",
        "Arabic immigration help",
        "Los Angeles County naturalization"
      ],
      category: "citizenship",
      location: "Pasadena",
      region: "Los Angeles County",
      targetDemographic: "Immigrants whose N-400 was denied",
      date: "January 24, 2026",
      readTime: "14 min read",
      author: "SoCal Immigration Services",
      image: "/images/blog/citizenship.jpg",
      locationIntro: "Receiving a denial of your N-400 citizenship application is devastating, especially after years of preparation and dreaming of becoming a U.S. citizen. If you're in Pasadena or elsewhere in Los Angeles County and your naturalization application was denied, know that this isn't necessarily the end. You have options including administrative appeal, federal court review, or reapplying after addressing the issues that caused the denial.",
      summary: "When USCIS denies your N-400, you can request a hearing with a USCIS officer using Form N-336 within 30 days. If the hearing upholds the denial, you can seek review in federal district court. Alternatively, you may reapply once you've addressed the reason for denial. Understanding why your application was denied is the first step to choosing the right path forward.",
      sections: [
        {
          heading: "Common Reasons for N-400 Denial",
          content: "Understanding why your application was denied helps you determine the best path forward. USCIS must provide written reasons for the denial.",
          table: {
            headers: ["Denial Reason", "What It Means", "Can It Be Fixed?"],
            rows: [
              ["Failed English test", "Could not read, write, or speak basic English", "Yes - retake at hearing or reapply"],
              ["Failed civics test", "Did not pass 6/10 questions twice", "Yes - retake at hearing or reapply"],
              ["Lack of good moral character", "Criminal record, fraud, other conduct issues", "Depends on severity"],
              ["Insufficient continuous residence", "Not 30 months in U.S. during 5-year period", "Wait and reapply"],
              ["Insufficient physical presence", "Not in U.S. 30 months during 5-year period", "Wait and reapply"],
              ["Broke continuous residence", "Trip abroad over 6 months", "May need to wait longer"],
              ["False claim to citizenship", "Very serious - may bar citizenship permanently", "Very difficult"],
              ["Failure to support dependents", "Not paying child support, etc.", "Fix issue and reapply"],
              ["Selective Service violation", "Male didn't register between 18-26", "Depends on circumstances"]
            ]
          }
        },
        {
          heading: "Option 1: Request a Hearing (Form N-336)",
          content: "Your first option is to request a hearing before a USCIS officer who did not participate in your original decision. This is the administrative appeal.",
          list: [
            "Must file N-336 within 30 days of denial",
            "30-day deadline is strict - don't miss it",
            "Filing fee: $760 (fee waiver available)",
            "Hearing is before a different USCIS officer",
            "Can retake English and civics tests at hearing",
            "Can present additional evidence",
            "Can bring attorney or representative",
            "Decision usually given at or shortly after hearing",
            "If denied again, can seek federal court review"
          ]
        },
        {
          heading: "What Happens at the N-336 Hearing",
          content: "The N-336 hearing is an opportunity to address the reasons for denial and present your case to a fresh decision-maker.",
          steps: [
            { title: "Review of denial", description: "Officer reviews why your application was denied" },
            { title: "Retake tests if applicable", description: "If denied for failing tests, you'll retake them" },
            { title: "Present evidence", description: "Submit new documents addressing denial reasons" },
            { title: "Testimony", description: "You may be asked questions about your case" },
            { title: "Officer decision", description: "Officer may approve, deny, or continue the case" },
            { title: "Written decision", description: "You'll receive written notice of outcome" }
          ]
        },
        {
          heading: "Option 2: Federal District Court Review",
          content: "If your N-336 hearing is unsuccessful, you can seek review in federal district court. This is more formal and typically requires an attorney.",
          list: [
            "Must file within 120 days of N-336 decision",
            "File in U.S. District Court where you live or where N-400 was filed",
            "Court reviews whether USCIS correctly applied the law",
            "Can review both legal and factual determinations",
            "Federal filing fees apply (waiver possible for hardship)",
            "Strongly recommend hiring immigration attorney",
            "Court can order USCIS to approve application if wrongly denied",
            "Can also remand back to USCIS for reconsideration",
            "Success depends on strength of legal arguments"
          ]
        },
        {
          heading: "Option 3: Reapply After Addressing Issues",
          content: "Sometimes the best path is to fix the problem and apply again rather than appeal. This is especially true for certain denial reasons.",
          list: [
            "Can reapply immediately for test failures (but appeal is faster)",
            "Must wait for residence/presence issues to resolve",
            "Address good moral character issues if possible",
            "Gather additional evidence before refiling",
            "Pay new filing fee ($760 in 2026)",
            "No limit on number of times you can apply",
            "Consider what went wrong and prepare better",
            "May want professional help for second application"
          ]
        },
        {
          heading: "Denials for Good Moral Character",
          content: "Good moral character denials are often the most complex. Whether you can overcome the denial depends on what triggered it.",
          list: [
            "Criminal convictions: Some are permanent bars, others aren't",
            "Aggravated felonies: Generally permanent bar to citizenship",
            "Fraud or misrepresentation: Depends on severity and materiality",
            "False claim to citizenship: Very serious, but context matters",
            "Failure to pay child support: Can be cured by becoming current",
            "Tax issues: May need to resolve with IRS",
            "Drug offenses: Varies by type and recency",
            "The '5-year period' or '3-year period' matters - older issues may not apply"
          ]
        },
        {
          heading: "Selective Service Issues",
          content: "Male applicants who didn't register for Selective Service between ages 18-26 face special challenges that depend on their circumstances.",
          list: [
            "If under 26: Register now and explain failure to register",
            "If 26-31: Get status information letter from Selective Service",
            "If over 31: Still need to explain failure to register",
            "'Knowing and willful' failure may bar good moral character",
            "Many immigrants didn't know about registration requirement",
            "Provide evidence you didn't knowingly avoid registration",
            "Green card issued after age 26 may help",
            "Affidavits explaining lack of knowledge can support case"
          ]
        },
        {
          heading: "English and Civics Test Failures",
          content: "If your denial was based solely on failing the English or civics tests, the solution is straightforward: prepare better and retake.",
          list: [
            "At N-336 hearing: One more chance to pass each test",
            "Study intensively before hearing date",
            "Take citizenship preparation classes",
            "Use official USCIS study materials (free online)",
            "Practice speaking, reading, and writing English",
            "Memorize all 100 civics questions and answers",
            "Request accommodations if you have qualifying disability",
            "Consider N-648 medical waiver if you have impairment"
          ]
        },
        {
          heading: "Timeline for Appeals and Reapplication",
          content: "Understanding the timeline helps you plan your next steps and avoid missing critical deadlines.",
          table: {
            headers: ["Action", "Deadline", "Processing Time"],
            rows: [
              ["File N-336 hearing request", "30 days from denial", "N/A"],
              ["N-336 hearing scheduled", "N/A", "2-6 months typically"],
              ["N-336 decision issued", "At or after hearing", "Immediate to weeks"],
              ["File federal court petition", "120 days from N-336 decision", "N/A"],
              ["Federal court review", "N/A", "6-18 months"],
              ["Reapply with new N-400", "Anytime (for most denials)", "Standard processing"]
            ]
          }
        },
        {
          heading: "Pasadena and LA County Resources",
          content: "Resources in the Pasadena area can help you navigate the appeal process or prepare for reapplication.",
          list: [
            "USCIS Los Angeles Field Office handles N-336 hearings",
            "Federal court: U.S. District Court, Central District of California",
            "Immigration legal aid organizations for low-income applicants",
            "Citizenship preparation classes in Pasadena",
            "Arabic-speaking immigration attorneys",
            "Community organizations offering N-400 help",
            "Library resources for civics and English study",
            "SoCal Immigration Services: Appeal preparation assistance"
          ]
        }
      ],
      faqs: [
        {
          q: "I missed the 30-day deadline to file N-336. What can I do?",
          a: "Unfortunately, the 30-day deadline for N-336 is jurisdictional and cannot be extended. If you missed it, you cannot request an administrative hearing. Your options are to reapply with a new N-400 (paying the filing fee again) or, in limited circumstances, argue in federal court that USCIS failed to properly notify you. Missing this deadline is serious - always act quickly after a denial."
        },
        {
          q: "Can I become a citizen if I have a criminal record?",
          a: "Many people with criminal records successfully naturalize. It depends on the specific offense, when it occurred, and the sentence. Some crimes are permanent bars (aggravated felonies), others are bars only during the statutory period (3 or 5 years), and many minor offenses don't prevent naturalization at all. A careful analysis of your record against immigration law is essential before applying or appealing."
        },
        {
          q: "I was denied for continuous residence because I took a long trip abroad. What now?",
          a: "Trips over 6 months but under 1 year create a presumption that you broke continuous residence. You may rebut this presumption with evidence (employment in U.S., taxes, family ties, etc.). If you can't overcome the presumption, you may need to wait for a new 5-year (or 3-year if married to U.S. citizen) period of continuous residence. An N-336 hearing lets you present additional evidence."
        },
        {
          q: "Is it worth hiring an attorney for an N-336 hearing?",
          a: "It depends on the complexity of your case. For test failures, you may not need an attorney - just study and retake. For good moral character issues, criminal records, or complex residence questions, an attorney can significantly improve your chances. For federal court review, an attorney is strongly recommended as these are formal legal proceedings."
        },
        {
          q: "If I reapply instead of appealing, can USCIS use the old denial against me?",
          a: "USCIS will review your new application fresh, but they have access to your file and prior denial. If the reason for denial hasn't changed, you'll likely be denied again. However, if circumstances have changed (passed more time, resolved issues, better evidence), a new application can succeed. Reapplication is best when the denial was for fixable issues."
        },
        {
          q: "I made a mistake on my N-400 that USCIS says was fraud. What can I do?",
          a: "This is very serious. If USCIS believes you made willful misrepresentations, it can bar naturalization and potentially affect your green card. At the N-336 hearing, you can explain that any errors were honest mistakes. Bring evidence supporting your intent (original documents, explanations of confusion). If the issue is serious, consult an immigration attorney immediately."
        }
      ],
      disclaimer: "This article provides general information about N-400 citizenship denial appeals in Pasadena and does not constitute legal advice. SoCal Immigration Services is a document preparation company, not a law firm. Denial appeals have strict deadlines and complex legal issues. For legal advice specific to your denial, please consult with a licensed immigration attorney as soon as possible.",
      cta: {
        title: "Need N-400 Appeal Help in Pasadena?",
        text: "Our team assists with N-336 hearing preparation, documentation, and reapplication support.",
        button: "Get Started Today"
      }
    },
    ar: {
      slug: "n400-denial-appeal-pasadena",
      title: "استئناف رفض طلب الجنسية N-400 في باسادينا: ماذا تفعل عند رفض التجنس",
      subtitle: "فهم خياراتك بعد رفض طلب التجنس في مقاطعة لوس أنجلوس",
      metaTitle: "استئناف رفض N-400 باسادينا | خيارات رفض طلب الجنسية",
      metaDescription: "ماذا تفعل عندما يُرفض طلب الجنسية N-400 في باسادينا. خيارات الاستئناف، جلسة N-336، مراجعة المحكمة الفيدرالية.",
      keywords: [
        "استئناف رفض N-400 باسادينا",
        "رفض طلب الجنسية",
        "جلسة رفض التجنس"
      ],
      category: "citizenship",
      location: "باسادينا",
      region: "مقاطعة لوس أنجلوس",
      targetDemographic: "المهاجرون الذين رُفض طلب N-400 الخاص بهم",
      date: "24 يناير 2026",
      readTime: "14 دقيقة قراءة",
      author: "خدمات الهجرة في جنوب كاليفورنيا",
      image: "/images/blog/citizenship.jpg",
      locationIntro: "تلقي رفض طلب الجنسية N-400 أمر محبط، خاصة بعد سنوات من التحضير والحلم بأن تصبح مواطناً أمريكياً. لديك خيارات.",
      summary: "عندما ترفض USCIS طلب N-400، يمكنك طلب جلسة استماع مع موظف USCIS باستخدام النموذج N-336 خلال 30 يوماً. إذا أيدت الجلسة الرفض، يمكنك طلب المراجعة في المحكمة الفيدرالية.",
      sections: [
        {
          heading: "الأسباب الشائعة لرفض N-400",
          content: "فهم سبب رفض طلبك يساعدك على تحديد أفضل طريق للمضي قدماً.",
          list: [
            "الفشل في اختبار اللغة الإنجليزية",
            "الفشل في اختبار التربية المدنية",
            "عدم وجود سلوك أخلاقي جيد",
            "إقامة مستمرة غير كافية",
            "وجود مادي غير كافٍ",
            "ادعاء كاذب بالجنسية"
          ]
        }
      ],
      faqs: [
        {
          q: "فاتني الموعد النهائي البالغ 30 يوماً لتقديم N-336. ماذا يمكنني أن أفعل؟",
          a: "للأسف، الموعد النهائي البالغ 30 يوماً لـ N-336 قضائي ولا يمكن تمديده. إذا فاتك، لا يمكنك طلب جلسة استماع إدارية. خياراتك هي إعادة التقديم بـ N-400 جديد أو المحكمة الفيدرالية في ظروف محدودة."
        }
      ],
      disclaimer: "تقدم هذه المقالة معلومات عامة حول استئناف رفض N-400 في باسادينا ولا تشكل مشورة قانونية.",
      cta: {
        title: "هل تحتاج مساعدة في استئناف N-400 في باسادينا؟",
        text: "فريقنا يساعد في التحضير لجلسة N-336 والتوثيق ودعم إعادة التقديم.",
        button: "ابدأ اليوم"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default N400DenialAppealPasadena;
