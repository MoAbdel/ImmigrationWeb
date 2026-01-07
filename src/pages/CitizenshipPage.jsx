import React from 'react';
import { Flag, Users, FileText, CheckCircle, Phone, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const CitizenshipPage = ({ language }) => {
  const content = {
    en: {
      meta: {
        title: "Citizenship & Naturalization Services | SoCal Immigration Services",
        description: "U.S. citizenship and naturalization document preparation in Southern California. N-400 application help with Arabic-speaking staff. Serving Irvine, Orange County, Los Angeles, and San Diego."
      },
      hero: {
        title: "Citizenship & Naturalization Services",
        subtitle: "Document preparation for your journey to becoming a U.S. citizen",
        cta: "Schedule Free Consultation"
      },
      intro: {
        title: "Your Path to U.S. Citizenship",
        text: "Becoming a U.S. citizen is one of the most important decisions you can make. At SoCal Immigration Services, we help green card holders prepare the documents needed to apply for naturalization. Our bilingual team provides careful attention to detail, ensuring your application is complete and accurate."
      },
      requirements: {
        title: "General Naturalization Requirements",
        list: [
          "Be at least 18 years old",
          "Be a permanent resident (green card holder) for at least 5 years (or 3 years if married to a U.S. citizen)",
          "Have continuous residence in the U.S.",
          "Be physically present in the U.S. for required periods",
          "Be able to read, write, and speak basic English",
          "Have knowledge of U.S. history and government",
          "Be a person of good moral character"
        ]
      },
      services: [
        {
          title: "N-400 Application Preparation",
          description: "Complete preparation of the Application for Naturalization.",
          details: ["Form N-400 completion", "Document checklist", "Supporting evidence organization", "Application review"]
        },
        {
          title: "Civics & English Test Prep",
          description: "Study materials and preparation guidance for the citizenship test.",
          details: ["100 civics questions study guide", "Reading and writing practice", "Interview preparation tips", "Mock interview practice"]
        },
        {
          title: "Interview Preparation",
          description: "Help preparing for your naturalization interview.",
          details: ["Document organization", "What to expect guidance", "Practice questions", "Timeline understanding"]
        },
        {
          title: "N-648 Medical Waiver",
          description: "Document preparation for English/civics test waivers due to medical conditions.",
          details: ["Form N-648 coordination", "Medical documentation guidance", "Disability waiver information", "Exception eligibility review"]
        }
      ],
      benefits: {
        title: "Benefits of U.S. Citizenship",
        list: [
          "Right to vote in federal elections",
          "Ability to petition for more family members",
          "U.S. passport for international travel",
          "Protection from deportation",
          "Access to federal jobs and benefits",
          "Full participation in American democracy"
        ]
      },
      faqs: [
        {
          q: "How long does the naturalization process take?",
          a: "The naturalization process typically takes 8-14 months from application to oath ceremony, though times vary by location and individual circumstances."
        },
        {
          q: "Can I apply if I don't speak English well?",
          a: "There are exemptions for applicants 50+ with 20 years as a permanent resident, or 55+ with 15 years as a permanent resident. Medical disability waivers are also available."
        },
        {
          q: "What is the citizenship test?",
          a: "The test has two parts: an English test (reading, writing, speaking) and a civics test (10 questions about U.S. history and government - you must answer 6 correctly)."
        },
        {
          q: "Do you provide legal advice about citizenship?",
          a: "No, we provide document preparation services only. For legal questions about eligibility or complex situations, we recommend consulting with an immigration attorney."
        }
      ],
      cta: {
        title: "Ready to Become a U.S. Citizen?",
        text: "Contact us for a free consultation. Our team is ready to help you prepare your citizenship application.",
        phone: "(714) 421-8872"
      },
      disclaimer: "SoCal Immigration Services is a document preparation service, not a law firm. We do not provide legal advice."
    },
    ar: {
      meta: {
        title: "خدمات الجنسية والتجنس | سوكال لخدمات الهجرة",
        description: "إعداد وثائق الجنسية الأمريكية والتجنس في جنوب كاليفورنيا."
      },
      hero: {
        title: "خدمات الجنسية والتجنس",
        subtitle: "إعداد الوثائق لرحلتك لتصبح مواطناً أمريكياً",
        cta: "احجز استشارة مجانية"
      },
      intro: {
        title: "طريقك للجنسية الأمريكية",
        text: "الحصول على الجنسية الأمريكية هو أحد أهم القرارات التي يمكنك اتخاذها. في سوكال لخدمات الهجرة، نساعد حاملي البطاقة الخضراء في إعداد الوثائق اللازمة للتقدم للتجنس."
      },
      requirements: {
        title: "متطلبات التجنس العامة",
        list: [
          "أن يكون عمرك 18 سنة على الأقل",
          "أن تكون مقيماً دائماً لمدة 5 سنوات على الأقل (أو 3 سنوات إذا كنت متزوجاً من مواطن أمريكي)",
          "أن تكون لديك إقامة مستمرة في الولايات المتحدة",
          "أن تكون حاضراً فعلياً في الولايات المتحدة للفترات المطلوبة",
          "أن تكون قادراً على قراءة وكتابة والتحدث بالإنجليزية الأساسية",
          "أن تكون لديك معرفة بتاريخ وحكومة الولايات المتحدة",
          "أن تكون شخصاً ذا أخلاق حسنة"
        ]
      },
      services: [
        {
          title: "إعداد طلب N-400",
          description: "إعداد كامل لطلب التجنس.",
          details: ["إكمال نموذج N-400", "قائمة الوثائق", "تنظيم الأدلة الداعمة", "مراجعة الطلب"]
        },
        {
          title: "التحضير لاختبار التربية المدنية والإنجليزية",
          description: "مواد الدراسة وإرشادات التحضير لاختبار المواطنة.",
          details: ["دليل دراسة 100 سؤال مدني", "ممارسة القراءة والكتابة", "نصائح التحضير للمقابلة", "ممارسة المقابلة التجريبية"]
        },
        {
          title: "التحضير للمقابلة",
          description: "المساعدة في التحضير لمقابلة التجنس.",
          details: ["تنظيم الوثائق", "إرشادات ماذا تتوقع", "أسئلة تدريبية", "فهم الجدول الزمني"]
        },
        {
          title: "إعفاء طبي N-648",
          description: "إعداد الوثائق للإعفاءات من اختبار الإنجليزية/التربية المدنية بسبب الحالات الطبية.",
          details: ["تنسيق نموذج N-648", "إرشادات التوثيق الطبي", "معلومات إعفاء الإعاقة", "مراجعة أهلية الاستثناء"]
        }
      ],
      benefits: {
        title: "فوائد الجنسية الأمريكية",
        list: [
          "الحق في التصويت في الانتخابات الفيدرالية",
          "القدرة على تقديم التماس لمزيد من أفراد الأسرة",
          "جواز سفر أمريكي للسفر الدولي",
          "الحماية من الترحيل",
          "الوصول إلى الوظائف والمزايا الفيدرالية",
          "المشاركة الكاملة في الديمقراطية الأمريكية"
        ]
      },
      faqs: [
        {
          q: "كم تستغرق عملية التجنس؟",
          a: "تستغرق عملية التجنس عادةً 8-14 شهراً من الطلب إلى حفل القسم."
        },
        {
          q: "هل يمكنني التقديم إذا كنت لا أتحدث الإنجليزية جيداً؟",
          a: "هناك إعفاءات لمقدمي الطلبات 50+ مع 20 سنة كمقيم دائم، أو 55+ مع 15 سنة."
        },
        {
          q: "ما هو اختبار المواطنة؟",
          a: "الاختبار له جزأين: اختبار الإنجليزية واختبار التربية المدنية (10 أسئلة - يجب الإجابة على 6 بشكل صحيح)."
        },
        {
          q: "هل تقدمون مشورة قانونية حول الجنسية؟",
          a: "لا، نحن نقدم خدمات إعداد الوثائق فقط."
        }
      ],
      cta: {
        title: "مستعد لتصبح مواطناً أمريكياً؟",
        text: "اتصل بنا للحصول على استشارة مجانية. فريقنا جاهز لمساعدتك في إعداد طلب المواطنة.",
        phone: "(714) 421-8872"
      },
      disclaimer: "سوكال لخدمات الهجرة هي خدمة إعداد وثائق وليست مكتب محاماة. نحن لا نقدم مشورة قانونية."
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="canonical" href="https://www.socalimmigrationservices.com/citizenship-naturalization" />
      </Helmet>

      <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <Flag className="w-16 h-16 text-amber-400 mx-auto mb-6" />
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

        {/* Requirements */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">{t.requirements.title}</h2>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <ul className="space-y-3">
                {t.requirements.list.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {t.services.map((service, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
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

        {/* Benefits */}
        <section className="py-16 bg-amber-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 text-center">{t.benefits.title}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {t.benefits.list.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Star className="text-amber-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 text-center">
              {language === 'en' ? 'Frequently Asked Questions' : 'الأسئلة الشائعة'}
            </h2>
            <div className="space-y-6">
              {t.faqs.map((faq, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-6 shadow-sm">
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
        <div className="bg-gray-100 py-4">
          <p className="text-center text-sm text-gray-600 px-4">{t.disclaimer}</p>
        </div>
      </div>
    </>
  );
};

export default CitizenshipPage;
