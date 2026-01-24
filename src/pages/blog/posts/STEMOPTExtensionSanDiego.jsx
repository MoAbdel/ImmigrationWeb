import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const STEMOPTExtensionSanDiego = ({ language }) => {
  const content = {
    en: {
      slug: "stem-opt-extension-san-diego",
      title: "STEM OPT Extension in San Diego: 24-Month Work Authorization for STEM Graduates",
      subtitle: "Complete Guide to the STEM OPT Extension for F-1 Students in San Diego County",
      metaTitle: "STEM OPT Extension San Diego | 24-Month STEM Work Authorization F-1",
      metaDescription: "STEM OPT extension guide for F-1 students in San Diego. 24-month work authorization, employer requirements, I-983 training plan. Arabic-speaking help.",
      keywords: [
        "STEM OPT extension San Diego",
        "24-month OPT extension",
        "F-1 STEM work authorization",
        "I-983 training plan",
        "STEM designated degree",
        "OPT extension timeline",
        "E-Verify employer requirement",
        "F-1 student work permit",
        "Arabic immigration help",
        "San Diego County OPT"
      ],
      category: "work",
      location: "San Diego",
      region: "San Diego County",
      targetDemographic: "F-1 students with STEM degrees",
      date: "January 24, 2026",
      readTime: "14 min read",
      author: "SoCal Immigration Services",
      image: "/images/blog/work.jpg",
      locationIntro: "San Diego's thriving biotech, tech, and engineering industries employ many F-1 students on OPT. If you graduated with a STEM degree and are working in San Diego on your initial 12-month OPT, you may qualify for a 24-month STEM OPT extension, giving you up to 36 months of work authorization. This extended time is valuable for gaining experience and pursuing H-1B sponsorship.",
      summary: "The STEM OPT extension provides 24 additional months of work authorization for F-1 students with degrees in science, technology, engineering, or mathematics. Requirements include a qualifying STEM degree, employment with an E-Verify employer, and a completed I-983 training plan. Applications should be filed 90 days before your current OPT expires, and you receive automatic work authorization while pending if filed timely.",
      sections: [
        {
          heading: "What Is the STEM OPT Extension?",
          content: "The STEM OPT extension allows qualifying F-1 students to work for an additional 24 months beyond their initial 12-month post-completion OPT.",
          list: [
            "24 additional months of work authorization (36 months total)",
            "Only available for STEM-designated degree programs",
            "Must work for E-Verify enrolled employer",
            "Requires formal training plan (Form I-983)",
            "Can be used twice if you earn two qualifying STEM degrees",
            "Employer must provide training related to your degree",
            "Maintains F-1 student status during extension",
            "Time counts toward H-1B cap exemption (365 days requirement)"
          ]
        },
        {
          heading: "STEM OPT Eligibility Requirements",
          content: "To qualify for the STEM OPT extension, you must meet all of the following requirements.",
          table: {
            headers: ["Requirement", "Details", "Evidence Needed"],
            rows: [
              ["STEM Degree", "Degree on STEM Designated Degree list (CIP code)", "Transcript, degree with CIP code"],
              ["Currently on OPT", "Valid post-completion OPT from STEM degree", "Current EAD card"],
              ["E-Verify Employer", "Employer enrolled in E-Verify program", "E-Verify company ID number"],
              ["Job Related to Degree", "Employment directly related to STEM field", "I-983 training plan"],
              ["School DSO Recommendation", "DSO recommends extension in SEVIS", "New I-20 with extension"],
              ["Timely Filing", "Apply while current OPT valid or within grace", "Receipt notice"],
              ["Previous STEM Extensions", "Maximum 2 lifetime STEM OPT extensions", "SEVIS records"]
            ]
          }
        },
        {
          heading: "The I-983 Training Plan",
          content: "Form I-983 is a formal training plan signed by you and your employer that describes how your employment will further your STEM training.",
          list: [
            "Describes your role and learning objectives",
            "Explains how employer will provide STEM training",
            "Outlines performance evaluation methods",
            "Lists your STEM degree and field of study",
            "Includes employer's E-Verify number",
            "Must be signed by you and employer representative",
            "Update required if job duties change significantly",
            "Keep copy for your records",
            "Employer attestations include wage and working conditions"
          ]
        },
        {
          heading: "STEM OPT Application Process",
          content: "The application process involves your school's DSO, USCIS, and your employer. Follow these steps carefully.",
          steps: [
            { title: "Complete I-983 with employer", description: "Work with employer to fill out training plan form" },
            { title: "Submit I-983 to DSO", description: "Give completed I-983 to your school's international office" },
            { title: "DSO recommends extension", description: "DSO updates SEVIS and issues new I-20 with extension" },
            { title: "File Form I-765", description: "Apply online or by mail with new I-20, fee, photos" },
            { title: "Receive receipt notice", description: "Auto-extension begins if filed before OPT expires" },
            { title: "Wait for EAD", description: "Processing typically 2-5 months" },
            { title: "Receive new EAD card", description: "24-month EAD valid for STEM OPT extension" }
          ]
        },
        {
          heading: "Timing: When to Apply",
          content: "Timing is critical for STEM OPT extension applications. File at the right time to avoid gaps in work authorization.",
          list: [
            "Can apply up to 90 days before current OPT expires",
            "Must apply before current OPT expires",
            "DSO must recommend extension in SEVIS before you file",
            "New I-20 dated before current OPT expiration required",
            "If filed timely: 180-day auto-extension of work authorization",
            "Auto-extension allows continued work while case pending",
            "Receipt notice is proof of auto-extension",
            "Plan for 3-4 month processing time"
          ]
        },
        {
          heading: "Employer Requirements",
          content: "Not all employers can support STEM OPT. Your employer must meet specific requirements.",
          list: [
            "Must be enrolled in E-Verify (verify at e-verify.gov)",
            "Must sign I-983 training plan",
            "Must agree to report if you leave employment within 5 days",
            "Must provide training opportunities as described in I-983",
            "Must pay prevailing wage for the position",
            "Cannot have unfair labor practices",
            "Self-employment is NOT allowed on STEM OPT",
            "Staffing agencies: May work if the staffing agency is the E-Verify employer"
          ]
        },
        {
          heading: "Unemployment Limits on STEM OPT",
          content: "STEM OPT has stricter unemployment rules than initial OPT. Exceeding limits can terminate your status.",
          table: {
            headers: ["OPT Type", "Max Unemployment", "Notes"],
            rows: [
              ["Initial 12-month OPT", "90 days total", "Can be spread throughout OPT period"],
              ["During STEM Extension", "60 additional days", "Added to any unused initial days"],
              ["Total with STEM OPT", "150 days maximum", "Combined initial + extension unemployment"]
            ]
          }
        },
        {
          heading: "Reporting Requirements",
          content: "While on STEM OPT, both you and your employer have ongoing reporting obligations to maintain your status.",
          list: [
            "Report name/address changes within 10 days to DSO",
            "Report employer changes to DSO before starting new job",
            "Employer reports termination/departure within 5 days",
            "Annual self-evaluation at 12 months into extension",
            "Final evaluation upon completion of STEM OPT",
            "DSO must validate SEVIS record every 6 months",
            "Report any changes to training plan via updated I-983",
            "Keep DSO informed of employment status"
          ]
        },
        {
          heading: "Transitioning from STEM OPT to H-1B",
          content: "Many STEM OPT workers aim to transition to H-1B status. The STEM extension provides additional time for this process.",
          list: [
            "H-1B cap registration in March for October start",
            "36 months of OPT provides 3 chances at H-1B lottery",
            "Cap-gap extension: Auto-extension if H-1B selected while on OPT",
            "Cap-gap extends status and EAD until October 1",
            "Employer must file H-1B petition if selected",
            "365 days on OPT counts toward AC21 cap exemption provisions",
            "Some employers offer H-1B sponsorship - discuss early",
            "Cap-exempt employers: Universities, research institutions"
          ]
        },
        {
          heading: "San Diego STEM Employment Resources",
          content: "San Diego has a strong STEM job market and resources for F-1 students on OPT.",
          list: [
            "Major employers: Qualcomm, Illumina, Sony, Northrop Grumman",
            "Biotech hub in Torrey Pines and Sorrento Valley",
            "UC San Diego career services for STEM students",
            "San Diego State international student office",
            "Tech meetups and networking events",
            "Arabic-speaking immigration services available",
            "SoCal Immigration Services: STEM OPT application help",
            "Career fairs focused on visa sponsorship employers"
          ]
        }
      ],
      faqs: [
        {
          q: "My degree was in a related field but not STEM-designated. Can I get the extension?",
          a: "No. Only degrees with CIP codes on the STEM Designated Degree Program List qualify. If your degree CIP code isn't on the list, you cannot apply for the STEM extension regardless of how STEM-related your job is. Check with your school to confirm your degree's CIP code. If your degree doesn't qualify, consider pursuing another STEM degree in the future."
        },
        {
          q: "Can I change employers on STEM OPT?",
          a: "Yes, but carefully. You must report job changes to your DSO before starting the new job. The new employer must also be E-Verify enrolled, and you'll need a new I-983 training plan with the new employer. Avoid unemployment during transitions - having the new job lined up before leaving the old one is best. Unemployment days still count toward your limit."
        },
        {
          q: "What if my employer isn't enrolled in E-Verify?",
          a: "You cannot work for that employer on STEM OPT. E-Verify enrollment is mandatory. You can either find a different employer that is E-Verify enrolled, or you can encourage your employer to enroll (it's free and relatively quick). Many large companies are already enrolled; smaller companies may need to sign up."
        },
        {
          q: "My STEM OPT was denied. What are my options?",
          a: "If denied, you typically must stop working and may need to leave the U.S. unless you have another valid status. Common denial reasons include late filing, employer not E-Verify enrolled, or incomplete I-983. You can file a motion to reopen if there was an error, but this is complicated. Some students depart and pursue new status (another degree, different visa category). Consult an immigration attorney immediately."
        },
        {
          q: "Can I work part-time on STEM OPT?",
          a: "Yes, but you must work at least 20 hours per week. This is the minimum to count as 'employed' and avoid accumulating unemployment days. Your I-983 should reflect the expected hours. Working multiple part-time jobs totaling 20+ hours is permitted if each employer is E-Verify enrolled and you have I-983s for each."
        },
        {
          q: "I'm still waiting for my STEM OPT EAD. My current OPT just expired. Can I work?",
          a: "Yes, if you filed your STEM OPT application before your current OPT expired. You receive an automatic 180-day extension of your OPT work authorization while your STEM OPT application is pending. Your receipt notice, combined with your expired EAD, serves as proof of work authorization. Show both to your employer."
        }
      ],
      disclaimer: "This article provides general information about STEM OPT extensions in San Diego and does not constitute legal advice. SoCal Immigration Services is a document preparation company, not a law firm. OPT applications have strict deadlines and requirements. For legal advice specific to your situation, please consult with a licensed immigration attorney."
    },
    ar: {
      slug: "stem-opt-extension-san-diego",
      title: "تمديد STEM OPT في سان دييغو: تصريح عمل 24 شهراً لخريجي STEM",
      subtitle: "دليل شامل لتمديد STEM OPT لطلاب F-1 في مقاطعة سان دييغو",
      metaTitle: "تمديد STEM OPT سان دييغو | تصريح عمل STEM 24 شهراً F-1",
      metaDescription: "دليل تمديد STEM OPT لطلاب F-1 في سان دييغو. تصريح عمل 24 شهراً، متطلبات صاحب العمل، خطة التدريب I-983.",
      keywords: [
        "تمديد STEM OPT سان دييغو",
        "تمديد OPT 24 شهراً",
        "تصريح عمل F-1 STEM"
      ],
      category: "work",
      location: "سان دييغو",
      region: "مقاطعة سان دييغو",
      targetDemographic: "طلاب F-1 حاملو درجات STEM",
      date: "24 يناير 2026",
      readTime: "14 دقيقة قراءة",
      author: "خدمات الهجرة في جنوب كاليفورنيا",
      image: "/images/blog/work.jpg",
      locationIntro: "تستخدم صناعات التكنولوجيا الحيوية والتقنية والهندسة المزدهرة في سان دييغو العديد من طلاب F-1 على OPT. إذا تخرجت بدرجة STEM، قد تتأهل لتمديد STEM OPT لمدة 24 شهراً.",
      summary: "يوفر تمديد STEM OPT 24 شهراً إضافياً من تصريح العمل لطلاب F-1 الحاصلين على درجات في العلوم أو التكنولوجيا أو الهندسة أو الرياضيات.",
      sections: [
        {
          heading: "ما هو تمديد STEM OPT؟",
          content: "يسمح تمديد STEM OPT لطلاب F-1 المؤهلين بالعمل لمدة 24 شهراً إضافياً بعد OPT الأولي البالغ 12 شهراً.",
          list: [
            "24 شهراً إضافياً من تصريح العمل (36 شهراً إجمالاً)",
            "متاح فقط لبرامج الدرجات المعينة STEM",
            "يجب العمل لدى صاحب عمل مسجل في E-Verify",
            "يتطلب خطة تدريب رسمية (نموذج I-983)"
          ]
        }
      ],
      faqs: [
        {
          q: "درجتي كانت في مجال ذي صلة ولكن ليست معينة STEM. هل يمكنني الحصول على التمديد؟",
          a: "لا. فقط الدرجات ذات أكواد CIP في قائمة برامج الدرجات المعينة STEM تتأهل. إذا لم يكن كود CIP لدرجتك في القائمة، لا يمكنك التقدم لتمديد STEM."
        }
      ],
      disclaimer: "تقدم هذه المقالة معلومات عامة حول تمديدات STEM OPT في سان دييغو ولا تشكل مشورة قانونية."
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default STEMOPTExtensionSanDiego;
