import React from 'react';
import { MapPin, Phone, Clock, CheckCircle, Users, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const IrvinePage = ({ language }) => {
  const content = {
    en: {
      meta: {
        title: "Immigration Services in Irvine, CA | SoCal Immigration Services",
        description: "Professional immigration document preparation services in Irvine, California. Family petitions, citizenship, work visas, and more. Arabic & English speaking staff. Call (714) 421-8872."
      },
      hero: {
        title: "Immigration Services in Irvine",
        subtitle: "Professional document preparation for the Irvine community",
        address: "Serving Irvine from Garden Grove, CA"
      },
      intro: {
        title: "Your Irvine Immigration Document Specialists",
        text: "SoCal Immigration Services provides professional immigration document preparation for families and professionals in Irvine and throughout Orange County. Located in nearby Garden Grove, our bilingual team offers personalized service in both English and Arabic, understanding the unique needs of our diverse community."
      },
      services: {
        title: "Services Available in Irvine",
        list: [
          { title: "Family Immigration", desc: "I-130 petitions, spouse visas, parent petitions", link: "/family-immigration" },
          { title: "Green Card Services", desc: "Renewals, replacements, adjustment of status", link: "/green-card-services" },
          { title: "Citizenship", desc: "N-400 naturalization applications, civics test prep", link: "/citizenship-naturalization" },
          { title: "Work Visas", desc: "H-1B, L-1, employment authorization documents", link: "/services/visas-family" },
          { title: "Document Services", desc: "Translation, notary, document authentication", link: "/services/legal-documents" },
          { title: "Asylum Support", desc: "Asylum application document preparation", link: "/asylum-services" }
        ]
      },
      whyIrvine: {
        title: "Why Choose Us for Irvine",
        points: [
          "Conveniently located in Garden Grove",
          "Arabic and English speaking staff",
          "Serving tech professionals and families",
          "Free parking available",
          "Easy freeway access from Irvine",
          "Flexible appointment scheduling"
        ]
      },
      areas: {
        title: "Serving Irvine & Surrounding Areas",
        list: ["Irvine", "Tustin", "Newport Beach", "Costa Mesa", "Lake Forest", "Mission Viejo", "Laguna Hills", "Santa Ana", "Orange", "All of Orange County"]
      },
      cta: {
        title: "Serving Irvine Residents",
        text: "Schedule a free consultation at our Garden Grove office.",
        phone: "(714) 421-8872",
        hours: "Mon-Fri: 9AM-6PM | Sat: 10AM-3PM"
      }
    },
    ar: {
      meta: {
        title: "خدمات الهجرة في إرفاين، كاليفورنيا | سوكال لخدمات الهجرة",
        description: "خدمات إعداد وثائق الهجرة المهنية في إرفاين، كاليفورنيا."
      },
      hero: {
        title: "خدمات الهجرة في إرفاين",
        subtitle: "إعداد الوثائق المهني لمجتمع إرفاين",
        address: "نخدم إرفاين من جاردن جروف، كاليفورنيا"
      },
      intro: {
        title: "متخصصو وثائق الهجرة في إرفاين",
        text: "يقدم سوكال لخدمات الهجرة إعداد وثائق الهجرة المهني للعائلات والمهنيين في إرفاين وجميع أنحاء مقاطعة أورانج. يقع مكتبنا في جاردن جروف القريبة."
      },
      services: {
        title: "الخدمات المتاحة في إرفاين",
        list: [
          { title: "هجرة العائلة", desc: "التماسات I-130، تأشيرات الزوج، التماسات الوالدين", link: "/family-immigration" },
          { title: "خدمات البطاقة الخضراء", desc: "التجديدات، الاستبدالات، تعديل الوضع", link: "/green-card-services" },
          { title: "الجنسية", desc: "طلبات التجنس N-400، التحضير لاختبار التربية المدنية", link: "/citizenship-naturalization" },
          { title: "تأشيرات العمل", desc: "H-1B، L-1، وثائق تصريح العمل", link: "/services/visas-family" },
          { title: "خدمات الوثائق", desc: "الترجمة، التوثيق، مصادقة الوثائق", link: "/services/legal-documents" },
          { title: "دعم اللجوء", desc: "إعداد وثائق طلب اللجوء", link: "/asylum-services" }
        ]
      },
      whyIrvine: {
        title: "لماذا تختارنا لإرفاين",
        points: [
          "موقع مريح في جاردن جروف",
          "فريق يتحدث العربية والإنجليزية",
          "خدمة المهنيين والعائلات في مجال التكنولوجيا",
          "موقف سيارات مجاني",
          "وصول سهل من إرفاين",
          "جدولة مواعيد مرنة"
        ]
      },
      areas: {
        title: "نخدم إرفاين والمناطق المحيطة",
        list: ["إرفاين", "توستين", "نيوبورت بيتش", "كوستا ميسا", "ليك فورست", "ميشن فيجو", "لاغونا هيلز", "سانتا آنا", "أورانج", "جميع أنحاء مقاطعة أورانج"]
      },
      cta: {
        title: "نخدم سكان إرفاين",
        text: "احجز استشارة مجانية في مكتبنا في جاردن جروف.",
        phone: "(714) 421-8872",
        hours: "الاثنين-الجمعة: 9 صباحاً-6 مساءً | السبت: 10 صباحاً-3 مساءً"
      }
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SoCal Immigration Services - Serving Irvine",
    "description": t.meta.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11088 Trask Ave. Suite 200-K",
      "addressLocality": "Garden Grove",
      "addressRegion": "CA",
      "postalCode": "92843",
      "addressCountry": "US"
    },
    "telephone": "(714) 421-8872",
    "openingHours": ["Mo-Fr 09:00-18:00", "Sa 10:00-15:00"],
    "priceRange": "$$",
    "areaServed": "Irvine, Orange County"
  };

  return (
    <>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="canonical" href="https://www.socalimmigrationservices.com/irvine" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <MapPin className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t.hero.title}</h1>
            <p className="text-xl text-gray-300 mb-4">{t.hero.subtitle}</p>
            <p className="text-amber-400 flex items-center justify-center gap-2">
              <MapPin size={18} />
              {t.hero.address}
            </p>
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

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">{t.whyIrvine.title}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {t.whyIrvine.points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-amber-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{point}</span>
                </div>
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
            <p className="text-gray-300 mb-2">{t.cta.text}</p>
            <p className="text-amber-400 flex items-center justify-center gap-2 mb-6">
              <Clock size={16} />
              {t.cta.hours}
            </p>
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

export default IrvinePage;
