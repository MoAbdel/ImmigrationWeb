import React from 'react';
import { MapPin, Phone, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SantaAnaPage = ({ language }) => {
  const content = {
    en: {
      meta: {
        title: "Immigration Services in Santa Ana, CA | SoCal Immigration Services",
        description: "Professional immigration document preparation in Santa Ana, California. Family petitions, citizenship, green cards. Spanish & Arabic speaking staff. Call (714) 421-8872."
      },
      hero: {
        title: "Immigration Services in Santa Ana",
        subtitle: "Serving the diverse Santa Ana community"
      },
      intro: {
        title: "Immigration Document Services for Santa Ana",
        text: "Santa Ana, the county seat of Orange County, is one of the most diverse cities in California. SoCal Immigration Services is proud to serve the Santa Ana community with professional immigration document preparation. Our multilingual staff can assist you in English, Arabic, and Spanish."
      },
      services: {
        title: "Services for Santa Ana Residents",
        list: [
          { title: "Family Immigration", desc: "I-130 petitions, spouse visas, parent petitions", link: "/family-immigration" },
          { title: "Green Card Services", desc: "Renewals, replacements, adjustment of status", link: "/green-card-services" },
          { title: "Citizenship", desc: "N-400 naturalization applications", link: "/citizenship-naturalization" },
          { title: "DACA Services", desc: "Renewal and application document preparation", link: "/daca-services" },
          { title: "Asylum Support", desc: "Document preparation for asylum seekers", link: "/asylum-services" },
          { title: "Translation Services", desc: "Certified document translations", link: "/services/legal-documents" }
        ]
      },
      areas: {
        title: "Serving Santa Ana & Central Orange County",
        list: ["Santa Ana", "Tustin", "Orange", "Garden Grove", "Fountain Valley", "Westminster", "Costa Mesa", "Irvine", "All of Central Orange County"]
      },
      cta: {
        title: "Immigration Help for Santa Ana",
        text: "Contact us for a free consultation. We serve all of Santa Ana and surrounding areas.",
        phone: "(714) 421-8872"
      }
    },
    ar: {
      meta: {
        title: "خدمات الهجرة في سانتا آنا، كاليفورنيا | سوكال لخدمات الهجرة",
        description: "إعداد وثائق الهجرة المهنية في سانتا آنا، كاليفورنيا."
      },
      hero: {
        title: "خدمات الهجرة في سانتا آنا",
        subtitle: "نخدم مجتمع سانتا آنا المتنوع"
      },
      intro: {
        title: "خدمات وثائق الهجرة لسانتا آنا",
        text: "سانتا آنا، عاصمة مقاطعة أورانج، هي واحدة من أكثر المدن تنوعاً في كاليفورنيا. يفتخر سوكال لخدمات الهجرة بخدمة مجتمع سانتا آنا بإعداد وثائق الهجرة المهنية."
      },
      services: {
        title: "خدمات لسكان سانتا آنا",
        list: [
          { title: "هجرة العائلة", desc: "التماسات I-130، تأشيرات الزوج، التماسات الوالدين", link: "/family-immigration" },
          { title: "خدمات البطاقة الخضراء", desc: "التجديدات والاستبدالات وتعديل الوضع", link: "/green-card-services" },
          { title: "الجنسية", desc: "طلبات التجنس N-400", link: "/citizenship-naturalization" },
          { title: "خدمات داكا", desc: "إعداد وثائق التجديد والطلبات", link: "/daca-services" },
          { title: "دعم اللجوء", desc: "إعداد الوثائق لطالبي اللجوء", link: "/asylum-services" },
          { title: "خدمات الترجمة", desc: "ترجمات معتمدة للوثائق", link: "/services/legal-documents" }
        ]
      },
      areas: {
        title: "نخدم سانتا آنا ووسط مقاطعة أورانج",
        list: ["سانتا آنا", "توستين", "أورانج", "جاردن جروف", "فاونتين فالي", "وستمنستر", "كوستا ميسا", "إرفاين", "جميع أنحاء وسط مقاطعة أورانج"]
      },
      cta: {
        title: "مساعدة الهجرة لسانتا آنا",
        text: "اتصل بنا للحصول على استشارة مجانية. نحن نخدم جميع أنحاء سانتا آنا والمناطق المحيطة.",
        phone: "(714) 421-8872"
      }
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Immigration Document Services - Santa Ana",
    "provider": {
      "@type": "Organization",
      "name": "SoCal Immigration Services"
    },
    "areaServed": {
      "@type": "City",
      "name": "Santa Ana"
    },
    "description": t.meta.description
  };

  return (
    <>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="canonical" href="https://www.socalimmigrationservices.com/santa-ana/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <MapPin className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t.hero.title}</h1>
            <p className="text-xl text-gray-300">{t.hero.subtitle}</p>
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
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 text-center">{t.services.title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {t.services.list.map((service, idx) => (
                <Link key={idx} to={service.link} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-16 bg-amber-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 text-center">{t.areas.title}</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {t.areas.list.map((area, idx) => (
                <span key={idx} className="bg-white text-slate-700 px-4 py-2 rounded-full shadow-sm">
                  {area}
                </span>
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
      </div>
    </>
  );
};

export default SantaAnaPage;
