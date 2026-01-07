import React from 'react';
import { GraduationCap, Clock, FileText, CheckCircle, Phone, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const DACAServicesPage = ({ language }) => {
  const content = {
    en: {
      meta: {
        title: "DACA Document Preparation Services | SoCal Immigration Services",
        description: "DACA renewal and initial application document preparation in Southern California. Help for Dreamers with I-821D applications. Arabic-speaking staff in Irvine, serving all of SoCal."
      },
      hero: {
        title: "DACA Document Preparation Services",
        subtitle: "Helping Dreamers with DACA applications and renewals",
        cta: "Schedule Free Consultation"
      },
      intro: {
        title: "Supporting DACA Recipients",
        text: "Deferred Action for Childhood Arrivals (DACA) provides temporary relief from deportation and work authorization for eligible individuals who came to the United States as children. At SoCal Immigration Services, we help DACA recipients and first-time applicants prepare their applications accurately and completely."
      },
      important: {
        title: "Important DACA Information",
        notice: "DACA policies change frequently. We strongly recommend consulting with an immigration attorney about your specific situation. We provide document preparation services only.",
        points: [
          "DACA does not provide a path to permanent residence or citizenship",
          "DACA must be renewed every two years",
          "New DACA applications may be affected by ongoing litigation",
          "Travel outside the U.S. requires Advance Parole"
        ]
      },
      services: [
        {
          title: "DACA Renewal (I-821D)",
          description: "Document preparation for renewing your DACA status before expiration.",
          details: ["Form I-821D preparation", "Form I-765 work permit renewal", "Supporting documentation", "Timeline guidance"]
        },
        {
          title: "DACA Initial Application",
          description: "Document preparation for first-time DACA applicants (subject to court rulings).",
          details: ["Eligibility assessment checklist", "Form I-821D preparation", "Evidence of continuous presence", "Education/military records compilation"]
        },
        {
          title: "Work Authorization (I-765)",
          description: "Employment Authorization Document renewal with DACA applications.",
          details: ["Form I-765 preparation", "Photo requirements", "Category documentation", "Processing timeline information"]
        },
        {
          title: "Advance Parole (I-131)",
          description: "Travel document for DACA recipients needing to travel abroad (limited circumstances).",
          details: ["Form I-131 preparation", "Supporting documentation", "Humanitarian/educational/employment justification", "Risk information"]
        }
      ],
      eligibility: {
        title: "DACA Eligibility Requirements",
        list: [
          "Were under age 31 on June 15, 2012",
          "Came to the U.S. before age 16",
          "Have continuously resided in the U.S. since June 15, 2007",
          "Were present in the U.S. on June 15, 2012",
          "Had no lawful status on June 15, 2012",
          "Are currently in school, graduated, or honorably discharged from military",
          "Have not been convicted of a felony or significant misdemeanor"
        ]
      },
      faqs: [
        {
          q: "When should I renew my DACA?",
          a: "USCIS recommends submitting your renewal application 120-150 days before your current DACA expires. Don't wait until it expires."
        },
        {
          q: "Can new applicants apply for DACA?",
          a: "DACA for new applicants is subject to ongoing litigation. Check with an immigration attorney for the latest status."
        },
        {
          q: "Can I travel with DACA?",
          a: "Travel outside the U.S. requires Advance Parole, which is only granted in limited circumstances. Leaving without Advance Parole may prevent you from returning."
        },
        {
          q: "What happens if my DACA expires?",
          a: "You will lose work authorization and deferred action protection. It's critical to renew on time."
        }
      ],
      cta: {
        title: "Need Help With DACA Documents?",
        text: "Contact us for a free consultation about DACA document preparation.",
        phone: "(714) 421-8872"
      },
      disclaimer: "IMPORTANT: DACA is subject to ongoing litigation and policy changes. SoCal Immigration Services provides document preparation only - we are not attorneys. We strongly recommend consulting with a licensed immigration attorney about your DACA case."
    },
    ar: {
      meta: {
        title: "خدمات إعداد وثائق داكا | سوكال لخدمات الهجرة",
        description: "إعداد وثائق تجديد داكا والطلبات الأولية في جنوب كاليفورنيا."
      },
      hero: {
        title: "خدمات إعداد وثائق داكا",
        subtitle: "مساعدة الحالمين في طلبات وتجديدات داكا",
        cta: "احجز استشارة مجانية"
      },
      intro: {
        title: "دعم حاملي داكا",
        text: "يوفر برنامج العمل المؤجل للقادمين في مرحلة الطفولة (داكا) راحة مؤقتة من الترحيل وتصريح عمل للأفراد المؤهلين الذين جاءوا إلى الولايات المتحدة كأطفال."
      },
      important: {
        title: "معلومات داكا المهمة",
        notice: "تتغير سياسات داكا بشكل متكرر. نوصي بشدة باستشارة محامي هجرة حول وضعك المحدد.",
        points: [
          "داكا لا يوفر مساراً للإقامة الدائمة أو الجنسية",
          "يجب تجديد داكا كل سنتين",
          "قد تتأثر طلبات داكا الجديدة بالتقاضي الجاري",
          "السفر خارج الولايات المتحدة يتطلب إفراج مسبق"
        ]
      },
      services: [
        {
          title: "تجديد داكا (I-821D)",
          description: "إعداد الوثائق لتجديد حالة داكا قبل انتهاء الصلاحية.",
          details: ["إعداد نموذج I-821D", "تجديد تصريح العمل I-765", "التوثيق الداعم", "إرشادات الجدول الزمني"]
        },
        {
          title: "طلب داكا الأولي",
          description: "إعداد الوثائق لطالبي داكا لأول مرة (خاضع لقرارات المحكمة).",
          details: ["قائمة تقييم الأهلية", "إعداد نموذج I-821D", "دليل الحضور المستمر", "تجميع سجلات التعليم/العسكرية"]
        },
        {
          title: "تصريح العمل (I-765)",
          description: "تجديد وثيقة تصريح العمل مع طلبات داكا.",
          details: ["إعداد نموذج I-765", "متطلبات الصور", "توثيق الفئة", "معلومات الجدول الزمني للمعالجة"]
        },
        {
          title: "الإفراج المسبق (I-131)",
          description: "وثيقة سفر لحاملي داكا الذين يحتاجون للسفر للخارج.",
          details: ["إعداد نموذج I-131", "التوثيق الداعم", "تبرير إنساني/تعليمي/توظيف", "معلومات المخاطر"]
        }
      ],
      eligibility: {
        title: "متطلبات أهلية داكا",
        list: [
          "كنت تحت سن 31 في 15 يونيو 2012",
          "جئت إلى الولايات المتحدة قبل سن 16",
          "أقمت باستمرار في الولايات المتحدة منذ 15 يونيو 2007",
          "كنت حاضراً في الولايات المتحدة في 15 يونيو 2012",
          "لم يكن لديك وضع قانوني في 15 يونيو 2012",
          "أنت حالياً في المدرسة أو تخرجت أو تسرحت بشرف من الجيش",
          "لم تُدان بجناية أو جنحة كبيرة"
        ]
      },
      faqs: [
        {
          q: "متى يجب أن أجدد داكا؟",
          a: "توصي USCIS بتقديم طلب التجديد قبل 120-150 يوماً من انتهاء داكا الحالي."
        },
        {
          q: "هل يمكن للمتقدمين الجدد التقدم لداكا؟",
          a: "داكا للمتقدمين الجدد خاضع للتقاضي الجاري. تحقق مع محامي هجرة للحصول على أحدث الحالة."
        },
        {
          q: "هل يمكنني السفر مع داكا؟",
          a: "السفر خارج الولايات المتحدة يتطلب إفراج مسبق، والذي يُمنح فقط في ظروف محدودة."
        },
        {
          q: "ماذا يحدث إذا انتهت صلاحية داكا؟",
          a: "ستفقد تصريح العمل وحماية العمل المؤجل. من الضروري التجديد في الوقت المحدد."
        }
      ],
      cta: {
        title: "هل تحتاج مساعدة في وثائق داكا؟",
        text: "اتصل بنا للحصول على استشارة مجانية حول إعداد وثائق داكا.",
        phone: "(714) 421-8872"
      },
      disclaimer: "مهم: داكا خاضع للتقاضي الجاري وتغييرات السياسة. سوكال لخدمات الهجرة يقدم إعداد الوثائق فقط - نحن لسنا محامين. نوصي بشدة باستشارة محامي هجرة مرخص."
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="canonical" href="https://www.socalimmigrationservices.com/daca-services" />
      </Helmet>

      <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <GraduationCap className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t.hero.title}</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{t.hero.subtitle}</p>
            <a
              href="tel:+17144218872"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              <Phone size={20} />
              {t.hero.cta}
            </a>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">{t.intro.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t.intro.text}</p>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-8 bg-amber-50 border-y border-amber-200">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-start gap-4">
              <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-slate-900 mb-2">{t.important.title}</h3>
                <p className="text-gray-700 mb-4">{t.important.notice}</p>
                <ul className="space-y-1">
                  {t.important.points.map((point, idx) => (
                    <li key={idx} className="text-gray-700 flex items-center gap-2">
                      <span className="text-amber-600">•</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {t.services.map((service, idx) => (
                <div key={idx} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="text-amber-600 flex-shrink-0" size={16} />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">{t.eligibility.title}</h2>
            <div className="bg-gray-50 rounded-xl p-8">
              <ul className="space-y-3">
                {t.eligibility.list.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 text-center">
              {language === 'en' ? 'Frequently Asked Questions' : 'الأسئلة الشائعة'}
            </h2>
            <div className="space-y-6">
              {t.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">{t.cta.title}</h2>
            <p className="text-gray-300 mb-6">{t.cta.text}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                {language === 'en' ? 'Contact Us' : 'اتصل بنا'}
              </Link>
              <a
                href="tel:+17144218872"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                <Phone size={18} />
                {t.cta.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-red-50 border-t-4 border-red-500 py-6">
          <p className="text-center text-sm text-red-800 px-4 max-w-4xl mx-auto">{t.disclaimer}</p>
        </div>
      </div>
    </>
  );
};

export default DACAServicesPage;
