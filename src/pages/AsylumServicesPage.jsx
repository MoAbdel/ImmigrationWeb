import React from 'react';
import { Shield, Users, FileText, CheckCircle, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AsylumServicesPage = ({ language }) => {
  const content = {
    en: {
      meta: {
        title: "Asylum Document Preparation | SoCal Immigration Services",
        description: "Asylum application document preparation in Southern California. Helping refugees and asylum seekers with I-589 applications. Arabic-speaking staff serving Irvine, El Cajon, San Diego, and Los Angeles."
      },
      hero: {
        title: "Asylum & Refugee Document Services",
        subtitle: "Compassionate document preparation for those seeking protection in the United States",
        cta: "Schedule Free Consultation"
      },
      intro: {
        title: "Supporting Asylum Seekers & Refugees",
        text: "SoCal Immigration Services provides document preparation assistance for asylum seekers and refugees. Our team understands the challenges faced by those fleeing persecution and works with compassion to help prepare the necessary documentation. We serve the Iraqi, Syrian, Yemeni, and other Middle Eastern communities throughout Southern California."
      },
      services: [
        {
          title: "Asylum Application (I-589)",
          description: "Document preparation for affirmative and defensive asylum applications.",
          details: ["Form I-589 preparation", "Personal declaration drafting assistance", "Country conditions documentation", "Supporting evidence organization"]
        },
        {
          title: "Refugee Adjustment (I-485)",
          description: "Help refugees adjust status to permanent residence after one year in the U.S.",
          details: ["Form I-485 preparation", "Form I-693 medical exam coordination", "Employment authorization", "Travel document applications"]
        },
        {
          title: "Family Reunification (I-730)",
          description: "Help refugees and asylees reunite with immediate family members abroad.",
          details: ["Form I-730 preparation", "Derivative family member petitions", "Document translation", "Evidence compilation"]
        },
        {
          title: "Work Authorization (I-765)",
          description: "Employment authorization for asylum applicants pending case decisions.",
          details: ["Form I-765 preparation", "EAD renewal applications", "Category documentation", "Status tracking"]
        }
      ],
      communities: {
        title: "Communities We Serve",
        list: ["Iraqi & Chaldean refugees", "Syrian asylum seekers", "Yemeni families", "Palestinian refugees", "Egyptian communities", "Lebanese families", "All Middle Eastern communities"]
      },
      faqs: [
        {
          q: "What is the deadline to apply for asylum?",
          a: "Generally, you must apply for asylum within one year of arriving in the United States. There are limited exceptions. We recommend seeking legal advice for your specific situation."
        },
        {
          q: "Can asylum seekers work while their case is pending?",
          a: "Asylum applicants may apply for work authorization after their application has been pending for a certain period. We can help prepare the employment authorization application."
        },
        {
          q: "Do you provide legal representation for asylum cases?",
          a: "No, we are a document preparation service. Asylum cases are complex legal matters, and we strongly recommend working with a licensed immigration attorney. We can refer you to qualified attorneys."
        }
      ],
      cta: {
        title: "Need Help With Asylum Documents?",
        text: "Contact us for a free consultation. Our Arabic-speaking team is here to help.",
        phone: "(714) 421-8872"
      },
      disclaimer: "IMPORTANT: Asylum cases are complex legal matters. SoCal Immigration Services provides document preparation only - we are not attorneys and do not provide legal advice. We strongly recommend consulting with a licensed immigration attorney for asylum cases."
    },
    ar: {
      meta: {
        title: "إعداد وثائق اللجوء | سوكال لخدمات الهجرة",
        description: "إعداد وثائق طلب اللجوء في جنوب كاليفورنيا. مساعدة اللاجئين وطالبي اللجوء."
      },
      hero: {
        title: "خدمات وثائق اللجوء واللاجئين",
        subtitle: "إعداد الوثائق بتعاطف لمن يبحثون عن الحماية في الولايات المتحدة",
        cta: "احجز استشارة مجانية"
      },
      intro: {
        title: "دعم طالبي اللجوء واللاجئين",
        text: "يقدم سوكال لخدمات الهجرة مساعدة في إعداد الوثائق لطالبي اللجوء واللاجئين. يفهم فريقنا التحديات التي يواجهها الفارون من الاضطهاد ويعمل بتعاطف للمساعدة في إعداد الوثائق اللازمة."
      },
      services: [
        {
          title: "طلب اللجوء (I-589)",
          description: "إعداد الوثائق لطلبات اللجوء الإيجابية والدفاعية.",
          details: ["إعداد نموذج I-589", "مساعدة صياغة الإفادة الشخصية", "توثيق ظروف البلد", "تنظيم الأدلة الداعمة"]
        },
        {
          title: "تعديل وضع اللاجئ (I-485)",
          description: "مساعدة اللاجئين في تعديل وضعهم إلى إقامة دائمة.",
          details: ["إعداد نموذج I-485", "تنسيق الفحص الطبي I-693", "تصريح العمل", "طلبات وثيقة السفر"]
        },
        {
          title: "لم شمل الأسرة (I-730)",
          description: "مساعدة اللاجئين واللاجئين السياسيين في لم شمل أفراد الأسرة المباشرين.",
          details: ["إعداد نموذج I-730", "التماسات أفراد الأسرة المشتقين", "ترجمة الوثائق", "تجميع الأدلة"]
        },
        {
          title: "تصريح العمل (I-765)",
          description: "تصريح العمل لطالبي اللجوء في انتظار قرارات القضايا.",
          details: ["إعداد نموذج I-765", "طلبات تجديد EAD", "توثيق الفئة", "تتبع الحالة"]
        }
      ],
      communities: {
        title: "المجتمعات التي نخدمها",
        list: ["اللاجئون العراقيون والكلدانيون", "طالبو اللجوء السوريون", "العائلات اليمنية", "اللاجئون الفلسطينيون", "المجتمعات المصرية", "العائلات اللبنانية", "جميع مجتمعات الشرق الأوسط"]
      },
      faqs: [
        {
          q: "ما هو الموعد النهائي لتقديم طلب اللجوء؟",
          a: "بشكل عام، يجب تقديم طلب اللجوء خلال سنة واحدة من وصولك إلى الولايات المتحدة. هناك استثناءات محدودة."
        },
        {
          q: "هل يمكن لطالبي اللجوء العمل أثناء انتظار قضيتهم؟",
          a: "يمكن لطالبي اللجوء التقدم للحصول على تصريح عمل بعد أن يكون طلبهم معلقاً لفترة معينة."
        },
        {
          q: "هل تقدمون تمثيلاً قانونياً لقضايا اللجوء؟",
          a: "لا، نحن خدمة إعداد وثائق. نوصي بشدة بالعمل مع محامي هجرة مرخص."
        }
      ],
      cta: {
        title: "هل تحتاج مساعدة في وثائق اللجوء؟",
        text: "اتصل بنا للحصول على استشارة مجانية. فريقنا الناطق بالعربية هنا للمساعدة.",
        phone: "(714) 421-8872"
      },
      disclaimer: "مهم: قضايا اللجوء هي مسائل قانونية معقدة. سوكال لخدمات الهجرة يقدم إعداد الوثائق فقط - نحن لسنا محامين ولا نقدم مشورة قانونية. نوصي بشدة باستشارة محامي هجرة مرخص."
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="canonical" href="https://www.socalimmigrationservices.com/asylum-services/" />
      </Helmet>

      <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <Shield className="w-16 h-16 text-amber-400 mx-auto mb-6" />
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

        {/* Communities */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 text-center">{t.communities.title}</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {t.communities.list.map((community, idx) => (
                <span key={idx} className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-medium">
                  {community}
                </span>
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
        <div className="bg-red-50 border-t-4 border-red-500 py-6">
          <p className="text-center text-sm text-red-800 px-4 max-w-4xl mx-auto">{t.disclaimer}</p>
        </div>
      </div>
    </>
  );
};

export default AsylumServicesPage;
