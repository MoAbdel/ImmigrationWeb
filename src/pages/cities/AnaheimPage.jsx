import React from 'react';
import { MapPin, Phone, Clock, CheckCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AnaheimPage = ({ language }) => {
  const content = {
    en: {
      meta: {
        title: "Immigration Services in Anaheim & Little Arabia | SoCal Immigration Services",
        description: "Arabic-speaking immigration document preparation in Anaheim and Little Arabia. Family petitions, citizenship, green cards. Serving the Arab community. Call (714) 421-8872."
      },
      hero: {
        title: "Immigration Services in Anaheim",
        subtitle: "Proudly serving Little Arabia and the Arab-American community",
        cta: "Schedule Free Consultation"
      },
      intro: {
        title: "Serving the Little Arabia Community",
        text: "Anaheim's Little Arabia district is home to one of the largest Arab-American communities in Southern California. SoCal Immigration Services is proud to serve this vibrant community with professional immigration document preparation services. Our Arabic-speaking staff understands your culture and can assist you in your preferred language."
      },
      services: {
        title: "Services for the Anaheim Community",
        list: [
          { title: "Family Immigration", desc: "Reunite with family through I-130 petitions", link: "/family-immigration/" },
          { title: "K-1 Fiancé Visas", desc: "Bring your fiancé to the United States", link: "/services/visas-family/" },
          { title: "Citizenship", desc: "Become a U.S. citizen through naturalization", link: "/citizenship-naturalization/" },
          { title: "Green Card Services", desc: "Renewals, replacements, and adjustments", link: "/green-card-services/" },
          { title: "Arabic Translation", desc: "USCIS-certified document translation", link: "/services/legal-documents/" },
          { title: "Asylum Support", desc: "Document preparation for asylum seekers", link: "/asylum-services/" }
        ]
      },
      community: {
        title: "Part of Your Community",
        text: "We understand the challenges faced by Arab immigrants in navigating the U.S. immigration system. Whether you're from Egypt, Lebanon, Syria, Palestine, Iraq, or any other Arab country, our team is here to help. We speak Arabic fluently and can explain complex immigration processes in your language."
      },
      areas: {
        title: "Serving Anaheim & Surrounding Areas",
        list: ["Anaheim", "Little Arabia", "Garden Grove", "Fullerton", "Orange", "Buena Park", "Stanton", "Cypress", "La Palma", "All of North Orange County"]
      },
      cta: {
        title: "Serving the Arab-American Community",
        text: "نتحدث العربية - We speak Arabic. Contact us for a free consultation.",
        phone: "(714) 421-8872"
      }
    },
    ar: {
      meta: {
        title: "خدمات الهجرة في أنهايم والحي العربي | سوكال لخدمات الهجرة",
        description: "إعداد وثائق الهجرة باللغة العربية في أنهايم والحي العربي الصغير."
      },
      hero: {
        title: "خدمات الهجرة في أنهايم",
        subtitle: "نخدم بفخر الحي العربي الصغير والمجتمع العربي الأمريكي",
        cta: "احجز استشارة مجانية"
      },
      intro: {
        title: "نخدم مجتمع الحي العربي الصغير",
        text: "منطقة الحي العربي الصغير في أنهايم هي موطن لواحد من أكبر المجتمعات العربية الأمريكية في جنوب كاليفورنيا. يفتخر سوكال لخدمات الهجرة بخدمة هذا المجتمع النابض بالحياة."
      },
      services: {
        title: "خدمات لمجتمع أنهايم",
        list: [
          { title: "هجرة العائلة", desc: "لم شمل العائلة من خلال التماسات I-130", link: "/family-immigration/" },
          { title: "تأشيرات K-1 للخطيب", desc: "أحضر خطيبك/خطيبتك إلى الولايات المتحدة", link: "/services/visas-family/" },
          { title: "الجنسية", desc: "كن مواطناً أمريكياً من خلال التجنس", link: "/citizenship-naturalization/" },
          { title: "خدمات البطاقة الخضراء", desc: "التجديدات والاستبدالات والتعديلات", link: "/green-card-services/" },
          { title: "الترجمة العربية", desc: "ترجمة معتمدة من USCIS", link: "/services/legal-documents/" },
          { title: "دعم اللجوء", desc: "إعداد الوثائق لطالبي اللجوء", link: "/asylum-services/" }
        ]
      },
      community: {
        title: "جزء من مجتمعك",
        text: "نحن نفهم التحديات التي يواجهها المهاجرون العرب في التنقل في نظام الهجرة الأمريكي. سواء كنت من مصر أو لبنان أو سوريا أو فلسطين أو العراق أو أي دولة عربية أخرى، فريقنا هنا للمساعدة."
      },
      areas: {
        title: "نخدم أنهايم والمناطق المحيطة",
        list: ["أنهايم", "الحي العربي الصغير", "جاردن جروف", "فوليرتون", "أورانج", "بوينا بارك", "ستانتون", "سايبرس", "لا بالما", "جميع أنحاء شمال مقاطعة أورانج"]
      },
      cta: {
        title: "نخدم المجتمع العربي الأمريكي",
        text: "We speak Arabic - نتحدث العربية. اتصل بنا للحصول على استشارة مجانية.",
        phone: "(714) 421-8872"
      }
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SoCal Immigration Services - Anaheim",
    "description": t.meta.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Anaheim",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "telephone": "(714) 421-8872",
    "areaServed": "Little Arabia, Anaheim, Orange County"
  };

  return (
    <>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="canonical" href="https://www.socalimmigrationservices.com/anaheim/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <MapPin className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t.hero.title}</h1>
            <p className="text-xl text-gray-300 mb-8">{t.hero.subtitle}</p>
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

        {/* Community */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">{t.community.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t.community.text}</p>
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

export default AnaheimPage;
