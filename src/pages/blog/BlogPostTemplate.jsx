import React from 'react';
import { Calendar, Clock, ArrowLeft, User, MapPin, Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BlogPostTemplate = ({ content, language }) => {
  const t = content[language];
  const isRTL = language === 'ar';

  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.metaDescription,
    "author": {
      "@type": "Organization",
      "name": "Immigration Solution Services",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "11088 Trask Ave. Suite 200-K",
        "addressLocality": "Garden Grove",
        "addressRegion": "CA",
        "postalCode": "92843"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Immigration Solution Services",
      "logo": {
        "@type": "ImageObject",
        "url": "https://socalimmigrationservices.com/logo.png"
      }
    },
    "datePublished": t.date,
    "dateModified": t.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://socalimmigrationservices.com/blog/${t.slug}`
    },
    "about": {
      "@type": "Service",
      "serviceType": "Immigration Document Preparation",
      "areaServed": t.location
    }
  };

  // FAQ Schema if FAQs exist
  const faqSchema = t.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  return (
    <>
      <Helmet>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="keywords" content={t.keywords} />
        <link rel="canonical" href={`https://socalimmigrationservices.com/blog/${t.slug}`} />

        {/* Open Graph */}
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content={language === 'ar' ? 'ar_SA' : 'en_US'} />

        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>

      <article className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link to="/" className="hover:text-amber-400">{language === 'en' ? 'Home' : 'الرئيسية'}</Link>
              <ChevronRight size={14} />
              <Link to="/blog" className="hover:text-amber-400">{language === 'en' ? 'Blog' : 'المدونة'}</Link>
              <ChevronRight size={14} />
              <span className="text-amber-400">{t.category}</span>
            </nav>

            <Link to="/blog" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-6 transition-colors">
              <ArrowLeft size={20} className={isRTL ? 'rotate-180' : ''} />
              {language === 'en' ? 'Back to Blog' : 'العودة إلى المدونة'}
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
              <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {t.category}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {t.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {t.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {t.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
              {t.title}
            </h1>
            <p className="text-xl text-gray-300">{t.subtitle}</p>

            <div className="flex items-center gap-2 mt-6 text-gray-300">
              <User size={16} />
              <span>{t.author}</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Location-specific intro box */}
          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg mb-8">
            <p className="text-slate-800 font-medium">
              {t.locationIntro}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            {t.sections.map((section, idx) => (
              <section key={idx} className="mb-8">
                {section.heading && (
                  <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                    {section.heading}
                  </h2>
                )}
                {section.content && (
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                )}
                {section.list && (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1 flex-shrink-0">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.steps && (
                  <ol className="mt-4 space-y-4">
                    {section.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                          {i + 1}
                        </span>
                        <div>
                          <strong className="text-slate-900">{step.title}</strong>
                          <p className="text-gray-700 mt-1">{step.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                )}
                {section.table && (
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-slate-100">
                          {section.table.headers.map((header, i) => (
                            <th key={i} className="border border-gray-300 px-4 py-2 text-left font-semibold">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            {row.map((cell, j) => (
                              <td key={j} className="border border-gray-300 px-4 py-2">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* FAQ Section for AEO */}
          {t.faqs && (
            <section className="mt-12 bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                {language === 'en' ? 'Frequently Asked Questions' : 'الأسئلة الشائعة'}
              </h2>
              <div className="space-y-6">
                {t.faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-gray-200 pb-4 last:border-0">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-gray-100 rounded-lg text-sm text-gray-600">
            <strong>{language === 'en' ? 'Disclaimer' : 'إخلاء المسؤولية'}:</strong>{' '}
            {language === 'en'
              ? `This article provides general information about immigration services in ${t.location} and does not constitute legal advice. Immigration Solution Services is a document preparation company, not a law firm. For legal advice specific to your situation, please consult with a licensed immigration attorney.`
              : `يقدم هذا المقال معلومات عامة حول خدمات الهجرة في ${t.location} ولا يشكل مشورة قانونية. شركة خدمات حلول الهجرة هي شركة إعداد وثائق وليست مكتب محاماة. للحصول على مشورة قانونية خاصة بوضعك، يرجى استشارة محامي هجرة مرخص.`}
          </div>

          {/* CTA Box */}
          <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-serif font-bold mb-3">{t.cta.title}</h3>
            <p className="text-gray-300 mb-4">{t.cta.text}</p>
            <div className="flex items-center justify-center gap-2 text-amber-400 mb-6">
              <MapPin size={18} />
              <span>{language === 'en' ? `Serving ${t.location} and all of Southern California` : `نخدم ${t.location} وجميع أنحاء جنوب كاليفورنيا`}</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                {t.cta.button}
              </Link>
              <a
                href="tel:+17144218872"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                <Phone size={18} />
                (714) 421-8872
              </a>
            </div>
          </div>

          {/* Related Posts */}
          {t.relatedPosts && (
            <section className="mt-12">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                {language === 'en' ? 'Related Articles' : 'مقالات ذات صلة'}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {t.relatedPosts.map((post, idx) => (
                  <Link
                    key={idx}
                    to={`/blog/${post.slug}`}
                    className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-xs text-amber-600 font-semibold">{post.category}</span>
                    <h3 className="text-lg font-semibold text-slate-900 mt-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  );
};

export default BlogPostTemplate;
