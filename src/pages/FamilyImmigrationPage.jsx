import React from 'react';
import { Heart, Users, FileText, CheckCircle, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const FamilyImmigrationPage = ({ language }) => {
  const content = {
    en: {
      meta: {
        title: "Family Immigration Services | SoCal Immigration Services",
        description: "Family-based immigration document preparation in Southern California. Help reuniting families through I-130 petitions, spouse visas, and parent petitions. Serving Irvine, Orange County, and Los Angeles."
      },
      hero: {
        title: "Family-Based Immigration Services",
        subtitle: "Reunite with your loved ones through family petition document preparation",
        cta: "Schedule Free Consultation"
      },
      intro: {
        title: "Bringing Families Together",
        text: "Family is the foundation of the American immigration system. At SoCal Immigration Services, we help U.S. citizens and permanent residents prepare the documents needed to bring their family members to the United States. Our bilingual team understands the emotional importance of family reunification and is committed to helping you navigate this process with care and attention to detail."
      },
      services: [
        {
          title: "Immediate Relative Petitions",
          description: "For spouses, unmarried children under 21, and parents of U.S. citizens - no waiting for visa availability.",
          forms: ["I-130 Petition for Alien Relative", "I-485 Adjustment of Status", "I-864 Affidavit of Support"]
        },
        {
          title: "Family Preference Categories",
          description: "For siblings, married children, and adult unmarried children of U.S. citizens and permanent residents.",
          forms: ["I-130 Family Petition", "Supporting Evidence Package", "Priority Date Tracking"]
        },
        {
          title: "Spouse & Marriage Visas",
          description: "Help your spouse immigrate through marriage-based green card petitions.",
          forms: ["I-130 Spouse Petition", "I-751 Remove Conditions", "K-3 Spouse Visa"]
        },
        {
          title: "Parent Petitions",
          description: "U.S. citizens can petition for their parents to become permanent residents.",
          forms: ["I-130 for Parents", "I-864 Financial Support", "Medical Exam Coordination"]
        }
      ],
      process: {
        title: "Our Family Petition Process",
        steps: [
          { title: "Free Consultation", desc: "We review your family situation and eligibility" },
          { title: "Document Checklist", desc: "We provide a detailed list of required documents" },
          { title: "Form Preparation", desc: "We carefully prepare all USCIS forms" },
          { title: "Package Review", desc: "You review the complete application package" },
          { title: "Filing & Tracking", desc: "We submit to USCIS and monitor your case" }
        ]
      },
      faqs: [
        {
          q: "Who can I petition for as a U.S. citizen?",
          a: "U.S. citizens can petition for spouses, children (married and unmarried), parents, and siblings. Processing times vary by category."
        },
        {
          q: "Who can I petition for as a green card holder?",
          a: "Permanent residents can petition for spouses and unmarried children only. You cannot petition for parents or siblings until you become a U.S. citizen."
        },
        {
          q: "How long does family immigration take?",
          a: "Immediate relatives of U.S. citizens typically wait 12-24 months. Other categories can take 2-20+ years depending on the relationship and country of origin."
        },
        {
          q: "Do you provide legal advice?",
          a: "No, we are a document preparation service, not a law firm. For legal advice, we can refer you to qualified immigration attorneys in our network."
        }
      ],
      cta: {
        title: "Ready to Start Your Family Petition?",
        text: "Contact us today for a free consultation. Our Arabic and English speaking team is ready to help.",
        phone: "(714) 421-8872"
      },
      disclaimer: "SoCal Immigration Services is a document preparation service, not a law firm. We do not provide legal advice."
    },
    ar: {
      meta: {
        title: "خدمات هجرة الأسرة | سوكال لخدمات الهجرة",
        description: "إعداد وثائق الهجرة العائلية في جنوب كاليفورنيا. مساعدة في لم شمل العائلات."
      },
      hero: {
        title: "خدمات هجرة الأسرة",
        subtitle: "لم شمل العائلة من خلال إعداد وثائق الهجرة",
        cta: "احجز استشارة مجانية"
      },
      intro: {
        title: "جمع شمل العائلات",
        text: "العائلة هي أساس نظام الهجرة الأمريكي. في سوكال لخدمات الهجرة، نساعد المواطنين الأمريكيين والمقيمين الدائمين في إعداد الوثائق اللازمة لجلب أفراد عائلاتهم إلى الولايات المتحدة."
      },
      services: [
        {
          title: "التماسات الأقارب المباشرين",
          description: "للأزواج والأطفال غير المتزوجين تحت 21 سنة ووالدي المواطنين الأمريكيين.",
          forms: ["I-130 التماس قريب أجنبي", "I-485 تعديل الوضع", "I-864 إفادة الدعم"]
        },
        {
          title: "فئات تفضيل العائلة",
          description: "للأخوة والأطفال المتزوجين والأطفال البالغين غير المتزوجين.",
          forms: ["I-130 التماس العائلة", "حزمة الأدلة الداعمة", "تتبع تاريخ الأولوية"]
        },
        {
          title: "تأشيرات الزواج والزوج",
          description: "مساعدة زوجك/زوجتك على الهجرة من خلال التماسات البطاقة الخضراء.",
          forms: ["I-130 التماس الزوج", "I-751 إزالة الشروط", "K-3 تأشيرة الزوج"]
        },
        {
          title: "التماسات الوالدين",
          description: "يمكن للمواطنين الأمريكيين تقديم التماس لوالديهم ليصبحوا مقيمين دائمين.",
          forms: ["I-130 للوالدين", "I-864 الدعم المالي", "تنسيق الفحص الطبي"]
        }
      ],
      process: {
        title: "عملية التماس العائلة لدينا",
        steps: [
          { title: "استشارة مجانية", desc: "نراجع وضع عائلتك وأهليتك" },
          { title: "قائمة الوثائق", desc: "نقدم قائمة مفصلة بالوثائق المطلوبة" },
          { title: "إعداد النماذج", desc: "نقوم بإعداد جميع نماذج USCIS بعناية" },
          { title: "مراجعة الحزمة", desc: "تراجع حزمة الطلب الكاملة" },
          { title: "التقديم والتتبع", desc: "نقدم إلى USCIS ونتابع قضيتك" }
        ]
      },
      faqs: [
        {
          q: "لمن يمكنني تقديم التماس كمواطن أمريكي؟",
          a: "يمكن للمواطنين الأمريكيين تقديم التماس للأزواج والأطفال والوالدين والأخوة."
        },
        {
          q: "لمن يمكنني تقديم التماس كحامل بطاقة خضراء؟",
          a: "يمكن للمقيمين الدائمين تقديم التماس للأزواج والأطفال غير المتزوجين فقط."
        },
        {
          q: "كم تستغرق هجرة الأسرة؟",
          a: "الأقارب المباشرون للمواطنين الأمريكيين عادة ينتظرون 12-24 شهراً."
        },
        {
          q: "هل تقدمون مشورة قانونية؟",
          a: "لا، نحن خدمة إعداد وثائق وليس مكتب محاماة."
        }
      ],
      cta: {
        title: "مستعد لبدء التماس عائلتك؟",
        text: "اتصل بنا اليوم للحصول على استشارة مجانية. فريقنا الناطق بالعربية والإنجليزية جاهز للمساعدة.",
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
        <link rel="canonical" href="https://www.socalimmigrationservices.com/family-immigration" />
      </Helmet>

      <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <Heart className="w-16 h-16 text-amber-400 mx-auto mb-6" />
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

        {/* Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {t.services.map((service, idx) => (
                <div key={idx} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.forms.map((form, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="text-amber-600 flex-shrink-0" size={16} />
                        <span>{form}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">{t.process.title}</h2>
            <div className="grid md:grid-cols-5 gap-6">
              {t.process.steps.map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              ))}
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
        <div className="bg-gray-100 py-4">
          <p className="text-center text-sm text-gray-600 px-4">{t.disclaimer}</p>
        </div>
      </div>
    </>
  );
};

export default FamilyImmigrationPage;
