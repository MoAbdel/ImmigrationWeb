import React from 'react';
import { CreditCard, RefreshCw, FileText, CheckCircle, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const GreenCardServicesPage = ({ language }) => {
  const content = {
    en: {
      meta: {
        title: "Green Card Services | SoCal Immigration Services",
        description: "Green card document preparation in Southern California. Renewal, replacement, adjustment of status, and conditional green card services. Arabic-speaking staff in Irvine."
      },
      hero: {
        title: "Green Card Services",
        subtitle: "Document preparation for green card applications, renewals, and adjustments",
        cta: "Schedule Free Consultation"
      },
      intro: {
        title: "Your Green Card Document Specialists",
        text: "A green card (Permanent Resident Card) grants you the right to live and work permanently in the United States. At SoCal Immigration Services, we help with document preparation for green card renewals, replacements, adjustment of status applications, and removal of conditions. Our bilingual team ensures your documents are prepared accurately."
      },
      services: [
        {
          title: "Green Card Renewal (I-90)",
          description: "Renew your expiring or expired green card to maintain proof of permanent residence.",
          details: ["Form I-90 preparation", "Photo requirements guidance", "Supporting documentation", "Processing timeline information"],
          timeline: "Processing: 8-12 months"
        },
        {
          title: "Green Card Replacement",
          description: "Replace lost, stolen, or damaged green cards.",
          details: ["Form I-90 preparation", "Police report documentation (if stolen)", "Evidence of permanent residence", "Name/information corrections"],
          timeline: "Processing: 8-12 months"
        },
        {
          title: "Adjustment of Status (I-485)",
          description: "Apply for a green card while in the United States.",
          details: ["Form I-485 preparation", "Form I-864 Affidavit of Support", "Form I-693 medical exam coordination", "Employment authorization (I-765)"],
          timeline: "Processing: 12-24 months"
        },
        {
          title: "Remove Conditions (I-751)",
          description: "Remove conditions on your 2-year conditional green card obtained through marriage.",
          details: ["Form I-751 preparation", "Joint filing or waiver documentation", "Evidence of bona fide marriage", "Supporting documentation compilation"],
          timeline: "File within 90 days before expiration"
        }
      ],
      categories: {
        title: "Green Card Categories We Assist With",
        list: [
          { title: "Family-Based", desc: "Through U.S. citizen or permanent resident relatives" },
          { title: "Employment-Based", desc: "Through job offers or investment" },
          { title: "Diversity Visa", desc: "Lottery winners from eligible countries" },
          { title: "Refugee/Asylee", desc: "After one year in refugee or asylee status" },
          { title: "Special Categories", desc: "VAWA, Special Immigrant Visas, etc." }
        ]
      },
      faqs: [
        {
          q: "When should I renew my green card?",
          a: "Apply for renewal when your green card is expiring within 6 months, or if it has already expired. You can file up to 6 months before expiration."
        },
        {
          q: "What is a conditional green card?",
          a: "A 2-year conditional green card is given to those who obtained permanent residence through marriage less than 2 years old. You must file I-751 to remove conditions."
        },
        {
          q: "Can I travel while my renewal is pending?",
          a: "Generally yes, if you have your expired green card and the I-797 receipt notice. However, extended travel may cause issues. Consult an attorney for specific guidance."
        },
        {
          q: "What if I lose my green card while abroad?",
          a: "You may need a Returning Resident Visa (SB-1) or a Transportation Letter. This is a complex situation - we recommend consulting with an attorney."
        }
      ],
      cta: {
        title: "Need Help With Green Card Documents?",
        text: "Contact us for a free consultation. We're here to help with your green card paperwork.",
        phone: "(714) 421-8872"
      },
      disclaimer: "SoCal Immigration Services is a document preparation service, not a law firm. We do not provide legal advice."
    },
    ar: {
      meta: {
        title: "خدمات البطاقة الخضراء | سوكال لخدمات الهجرة",
        description: "إعداد وثائق البطاقة الخضراء في جنوب كاليفورنيا."
      },
      hero: {
        title: "خدمات البطاقة الخضراء",
        subtitle: "إعداد الوثائق لطلبات وتجديدات وتعديلات البطاقة الخضراء",
        cta: "احجز استشارة مجانية"
      },
      intro: {
        title: "متخصصون في وثائق البطاقة الخضراء",
        text: "البطاقة الخضراء (بطاقة المقيم الدائم) تمنحك الحق في العيش والعمل بشكل دائم في الولايات المتحدة. في سوكال لخدمات الهجرة، نساعد في إعداد الوثائق لتجديد البطاقة الخضراء واستبدالها وطلبات تعديل الوضع وإزالة الشروط."
      },
      services: [
        {
          title: "تجديد البطاقة الخضراء (I-90)",
          description: "جدد بطاقتك الخضراء المنتهية الصلاحية للحفاظ على إثبات الإقامة الدائمة.",
          details: ["إعداد نموذج I-90", "إرشادات متطلبات الصور", "التوثيق الداعم", "معلومات الجدول الزمني للمعالجة"],
          timeline: "المعالجة: 8-12 شهراً"
        },
        {
          title: "استبدال البطاقة الخضراء",
          description: "استبدل البطاقات الخضراء المفقودة أو المسروقة أو التالفة.",
          details: ["إعداد نموذج I-90", "توثيق تقرير الشرطة (إذا مسروقة)", "دليل الإقامة الدائمة", "تصحيحات الاسم/المعلومات"],
          timeline: "المعالجة: 8-12 شهراً"
        },
        {
          title: "تعديل الوضع (I-485)",
          description: "التقدم للحصول على بطاقة خضراء أثناء وجودك في الولايات المتحدة.",
          details: ["إعداد نموذج I-485", "نموذج I-864 إفادة الدعم", "تنسيق الفحص الطبي I-693", "تصريح العمل (I-765)"],
          timeline: "المعالجة: 12-24 شهراً"
        },
        {
          title: "إزالة الشروط (I-751)",
          description: "إزالة الشروط من بطاقتك الخضراء المشروطة لمدة سنتين المكتسبة من خلال الزواج.",
          details: ["إعداد نموذج I-751", "توثيق التقديم المشترك أو الإعفاء", "دليل الزواج الحقيقي", "تجميع التوثيق الداعم"],
          timeline: "قدم خلال 90 يوماً قبل انتهاء الصلاحية"
        }
      ],
      categories: {
        title: "فئات البطاقة الخضراء التي نساعد فيها",
        list: [
          { title: "قائمة على الأسرة", desc: "من خلال أقارب مواطنين أمريكيين أو مقيمين دائمين" },
          { title: "قائمة على التوظيف", desc: "من خلال عروض العمل أو الاستثمار" },
          { title: "تأشيرة التنوع", desc: "الفائزون في اليانصيب من الدول المؤهلة" },
          { title: "لاجئ/لجوء", desc: "بعد سنة واحدة في وضع اللاجئ أو اللجوء" },
          { title: "فئات خاصة", desc: "VAWA، تأشيرات المهاجرين الخاصة، إلخ." }
        ]
      },
      faqs: [
        {
          q: "متى يجب أن أجدد بطاقتي الخضراء؟",
          a: "قدم للتجديد عندما تنتهي صلاحية بطاقتك الخضراء خلال 6 أشهر، أو إذا انتهت صلاحيتها بالفعل."
        },
        {
          q: "ما هي البطاقة الخضراء المشروطة؟",
          a: "بطاقة خضراء مشروطة لمدة سنتين تُعطى لمن حصلوا على إقامة دائمة من خلال زواج عمره أقل من سنتين."
        },
        {
          q: "هل يمكنني السفر أثناء انتظار التجديد؟",
          a: "بشكل عام نعم، إذا كان لديك بطاقتك الخضراء المنتهية الصلاحية وإشعار الاستلام I-797."
        },
        {
          q: "ماذا لو فقدت بطاقتي الخضراء في الخارج؟",
          a: "قد تحتاج إلى تأشيرة العودة للمقيم (SB-1) أو خطاب نقل. هذا وضع معقد - نوصي باستشارة محامٍ."
        }
      ],
      cta: {
        title: "هل تحتاج مساعدة في وثائق البطاقة الخضراء؟",
        text: "اتصل بنا للحصول على استشارة مجانية. نحن هنا للمساعدة في أوراق بطاقتك الخضراء.",
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
        <link rel="canonical" href="https://www.socalimmigrationservices.com/green-card-services" />
      </Helmet>

      <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <CreditCard className="w-16 h-16 text-amber-400 mx-auto mb-6" />
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
                  <div className="space-y-2 mb-4">
                    {service.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="text-amber-600 flex-shrink-0" size={16} />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-amber-700 bg-amber-50 px-3 py-2 rounded-lg">
                    <Clock size={16} />
                    <span>{service.timeline}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 text-center">{t.categories.title}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {t.categories.list.map((cat, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-1">{cat.title}</h3>
                  <p className="text-gray-600 text-sm">{cat.desc}</p>
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

export default GreenCardServicesPage;
