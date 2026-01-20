import React from 'react';
import { MapPin, Phone, Clock, CheckCircle, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const LosAngelesPage = ({ language }) => {
  const content = {
    en: {
      meta: {
        title: "Immigration Services in Los Angeles | SoCal Immigration Services",
        description: "Professional immigration document preparation serving Los Angeles County. Family petitions, green cards, citizenship, asylum support. Arabic & English speaking staff. Call (714) 421-8872."
      },
      hero: {
        title: "Immigration Services for Los Angeles",
        subtitle: "Serving LA County families with professional document preparation"
      },
      intro: {
        title: "Immigration Document Services for Los Angeles",
        text: "Los Angeles County is home to millions of immigrants from around the world. SoCal Immigration Services provides professional document preparation services to help LA County residents with their immigration needs. From our Garden Grove office, we serve families throughout Los Angeles County with personalized attention and bilingual support."
      },
      services: {
        title: "Services for Los Angeles Residents",
        list: [
          { title: "Family Immigration", desc: "I-130 petitions, spouse visas, family reunification", link: "/family-immigration/" },
          { title: "Green Card Services", desc: "Applications, renewals, and replacements", link: "/green-card-services/" },
          { title: "Citizenship", desc: "N-400 naturalization applications", link: "/citizenship-naturalization/" },
          { title: "Asylum Support", desc: "Document preparation for asylum seekers", link: "/asylum-services/" },
          { title: "DACA Services", desc: "Renewal and application document preparation", link: "/daca-services/" },
          { title: "Translation Services", desc: "Arabic to English certified translations", link: "/services/legal-documents/" }
        ]
      },
      areas: {
        title: "Serving All of Los Angeles County",
        list: ["Downtown Los Angeles", "Glendale", "Pasadena", "Long Beach", "Torrance", "Pomona", "West Covina", "Whittier", "Downey", "Inglewood", "Santa Clarita", "All of LA County"]
      },
      cta: {
        title: "Immigration Help for Los Angeles",
        text: "Contact us for a free consultation. We serve all of Los Angeles County.",
        phone: "(714) 421-8872"
      }
    },
    ar: {
      meta: {
        title: "خدمات الهجرة في لوس أنجلوس | سوكال لخدمات الهجرة",
        description: "إعداد وثائق الهجرة المهني لخدمة مقاطعة لوس أنجلوس."
      },
      hero: {
        title: "خدمات الهجرة للوس أنجلوس",
        subtitle: "نخدم عائلات مقاطعة لوس أنجلوس بإعداد وثائق احترافي"
      },
      intro: {
        title: "خدمات وثائق الهجرة للوس أنجلوس",
        text: "مقاطعة لوس أنجلوس هي موطن لملايين المهاجرين من جميع أنحاء العالم. يقدم سوكال لخدمات الهجرة خدمات إعداد وثائق مهنية لمساعدة سكان مقاطعة لوس أنجلوس في احتياجاتهم للهجرة."
      },
      services: {
        title: "خدمات لسكان لوس أنجلوس",
        list: [
          { title: "هجرة العائلة", desc: "التماسات I-130، تأشيرات الزوج، لم شمل العائلة", link: "/family-immigration/" },
          { title: "خدمات البطاقة الخضراء", desc: "الطلبات والتجديدات والاستبدالات", link: "/green-card-services/" },
          { title: "الجنسية", desc: "طلبات التجنس N-400", link: "/citizenship-naturalization/" },
          { title: "دعم اللجوء", desc: "إعداد الوثائق لطالبي اللجوء", link: "/asylum-services/" },
          { title: "خدمات داكا", desc: "إعداد وثائق التجديد والطلبات", link: "/daca-services/" },
          { title: "خدمات الترجمة", desc: "ترجمات معتمدة من العربية إلى الإنجليزية", link: "/services/legal-documents/" }
        ]
      },
      areas: {
        title: "نخدم جميع أنحاء مقاطعة لوس أنجلوس",
        list: ["وسط لوس أنجلوس", "غليندال", "باسادينا", "لونغ بيتش", "تورانس", "بومونا", "ويست كوفينا", "ويتيير", "داوني", "إنغلوود", "سانتا كلاريتا", "جميع أنحاء مقاطعة لوس أنجلوس"]
      },
      cta: {
        title: "مساعدة الهجرة للوس أنجلوس",
        text: "اتصل بنا للحصول على استشارة مجانية. نحن نخدم جميع أنحاء مقاطعة لوس أنجلوس.",
        phone: "(714) 421-8872"
      }
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Immigration Document Services - Los Angeles",
    "provider": {
      "@type": "Organization",
      "name": "SoCal Immigration Services"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Los Angeles County"
    },
    "description": t.meta.description
  };

  return (
    <>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="canonical" href="https://www.socalimmigrationservices.com/los-angeles/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <Building className="w-16 h-16 text-amber-400 mx-auto mb-6" />
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

export default LosAngelesPage;
