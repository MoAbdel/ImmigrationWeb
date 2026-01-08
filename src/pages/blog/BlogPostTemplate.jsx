import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowLeft, User, MapPin, Phone, ChevronRight, CheckCircle, List, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BlogPostTemplate = ({ content, language }) => {
  const t = content[language];
  const isRTL = language === 'ar';
  const [activeSection, setActiveSection] = useState('');
  const [showToc, setShowToc] = useState(true);

  // Generate section IDs for Table of Contents
  const sectionIds = t.sections?.map((section, idx) => ({
    id: `section-${idx}`,
    title: section.heading
  })).filter(s => s.title) || [];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionIds.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  // Current date for "Last Updated"
  const lastUpdated = t.lastUpdated || t.date;

  // Convert date strings to ISO 8601 format for schema
  const parseDate = (dateStr) => {
    if (!dateStr) return new Date().toISOString().split('T')[0];
    // Handle "January 8, 2026" format
    const parsed = new Date(dateStr);
    if (!isNaN(parsed.getTime())) {
      return parsed.toISOString().split('T')[0];
    }
    // Handle Arabic dates or fallback
    return new Date().toISOString().split('T')[0];
  };

  const isoDatePublished = parseDate(t.date);
  const isoDateModified = parseDate(lastUpdated);

  // Article Schema with enhanced markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.metaDescription,
    "image": t.image ? `https://www.socalimmigrationservices.com${t.image}` : "https://www.socalimmigrationservices.com/logo.png",
    "author": {
      "@type": "Organization",
      "name": "SoCal Immigration Services",
      "url": "https://www.socalimmigrationservices.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "11088 Trask Ave. Suite 200-K",
        "addressLocality": "Garden Grove",
        "addressRegion": "CA",
        "postalCode": "92843",
        "addressCountry": "US"
      },
      "telephone": "+1-714-421-8872"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SoCal Immigration Services",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.socalimmigrationservices.com/logo.png",
        "width": 200,
        "height": 60
      }
    },
    "datePublished": isoDatePublished,
    "dateModified": isoDateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.socalimmigrationservices.com/blog/${t.slug}`
    },
    "articleSection": t.category,
    "wordCount": t.wordCount || 2000,
    "inLanguage": language === 'ar' ? 'ar' : 'en'
  };

  // Service Schema for AEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Immigration Document Preparation - ${t.category}`,
    "description": t.metaDescription,
    "provider": {
      "@type": "Organization",
      "name": "SoCal Immigration Services",
      "telephone": "+1-714-421-8872",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "11088 Trask Ave. Suite 200-K",
        "addressLocality": "Garden Grove",
        "addressRegion": "CA",
        "postalCode": "92843"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": t.location
      },
      {
        "@type": "State",
        "name": "California"
      }
    ],
    "serviceType": "Immigration Document Preparation",
    "availableLanguage": ["English", "Arabic", "Spanish"]
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

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.socalimmigrationservices.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.socalimmigrationservices.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": t.title,
        "item": `https://www.socalimmigrationservices.com/blog/${t.slug}`
      }
    ]
  };

  // Reviewer info
  const reviewer = {
    name: language === 'en' ? 'Maria Santos' : 'ماريا سانتوس',
    title: language === 'en' ? 'Senior Immigration Consultant' : 'مستشارة هجرة أولى',
    credential: language === 'en' ? 'DOJ Accredited Representative' : 'ممثل معتمد من وزارة العدل',
    experience: language === 'en' ? '15+ years experience' : 'أكثر من 15 عاماً من الخبرة'
  };

  return (
    <>
      <Helmet>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="keywords" content={t.keywords} />
        <link rel="canonical" href={`https://www.socalimmigrationservices.com/blog/${t.slug}`} />

        {/* Open Graph */}
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content={language === 'ar' ? 'ar_SA' : 'en_US'} />
        <meta property="og:url" content={`https://www.socalimmigrationservices.com/blog/${t.slug}`} />
        <meta property="article:published_time" content={isoDatePublished} />
        <meta property="article:modified_time" content={isoDateModified} />
        <meta property="article:section" content={t.category} />

        <meta property="og:image" content={t.image ? `https://www.socalimmigrationservices.com${t.image}` : "https://www.socalimmigrationservices.com/logo.png"} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.title} />
        <meta name="twitter:description" content={t.metaDescription} />
        <meta name="twitter:image" content={t.image ? `https://www.socalimmigrationservices.com${t.image}` : "https://www.socalimmigrationservices.com/logo.png"} />

        {/* Schema Markup - Article, Service, FAQ, Breadcrumb */}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>

      <article className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
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

            {/* Last Updated - Prominent Display */}
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {t.category}
              </span>
              <span className="flex items-center gap-1 text-gray-300">
                <MapPin size={14} />
                {t.location}
              </span>
              <span className="flex items-center gap-1.5 bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                <RefreshCw size={12} />
                {language === 'en' ? `Updated: ${lastUpdated}` : `تحديث: ${lastUpdated}`}
              </span>
              <span className="flex items-center gap-1 text-gray-300">
                <Clock size={14} />
                {t.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
              {t.title}
            </h1>
            <p className="text-xl text-gray-300">{t.subtitle}</p>

            {/* Author & Reviewer */}
            <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-gray-700">
              <div className="flex items-center gap-2 text-gray-300">
                <User size={16} />
                <span>{t.author}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle size={16} className="text-green-400" />
                <span className="text-green-400 font-medium">
                  {language === 'en' ? 'Reviewed by' : 'مراجعة من قبل'}: {reviewer.name}, {reviewer.credential}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content with Sticky ToC */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sticky Table of Contents - Left Side */}
            <aside className={`lg:w-64 flex-shrink-0 ${isRTL ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="lg:sticky lg:top-24">
                {/* Mobile ToC Toggle */}
                <button
                  onClick={() => setShowToc(!showToc)}
                  className="lg:hidden w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-sm mb-4"
                >
                  <span className="flex items-center gap-2 font-semibold text-slate-900">
                    <List size={18} />
                    {language === 'en' ? 'Table of Contents' : 'جدول المحتويات'}
                  </span>
                  <ChevronRight size={18} className={`transform transition-transform ${showToc ? 'rotate-90' : ''}`} />
                </button>

                {/* ToC Content */}
                <nav className={`bg-white rounded-lg shadow-sm p-5 ${showToc ? 'block' : 'hidden lg:block'}`}>
                  <h2 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                    <List size={16} />
                    {language === 'en' ? 'Contents' : 'المحتويات'}
                  </h2>
                  <ul className="space-y-2 text-sm">
                    {sectionIds.map((section, idx) => (
                      <li key={idx}>
                        <a
                          href={`#${section.id}`}
                          className={`block py-1.5 px-3 rounded transition-all ${
                            activeSection === section.id
                              ? 'bg-amber-100 text-amber-700 font-medium border-l-2 border-amber-600'
                              : 'text-gray-600 hover:text-amber-600 hover:bg-gray-50'
                          }`}
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                    {t.faqs && (
                      <li>
                        <a
                          href="#faqs"
                          className={`block py-1.5 px-3 rounded transition-all ${
                            activeSection === 'faqs'
                              ? 'bg-amber-100 text-amber-700 font-medium border-l-2 border-amber-600'
                              : 'text-gray-600 hover:text-amber-600 hover:bg-gray-50'
                          }`}
                        >
                          {language === 'en' ? 'FAQs' : 'الأسئلة الشائعة'}
                        </a>
                      </li>
                    )}
                  </ul>

                  {/* Quick Contact in ToC */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-2">
                      {language === 'en' ? 'Need help?' : 'تحتاج مساعدة؟'}
                    </p>
                    <a
                      href="tel:+17144218872"
                      className="flex items-center gap-2 text-amber-600 font-semibold text-sm hover:text-amber-700"
                    >
                      <Phone size={14} />
                      (714) 421-8872
                    </a>
                  </div>
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className={`flex-1 min-w-0 ${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>

              {/* Zero-Click Summary - AI Answer Optimization */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 mb-8 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="bg-amber-600 text-white p-2 rounded-lg flex-shrink-0">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h2 className="font-bold text-slate-900 mb-2 text-lg">
                      {language === 'en' ? 'Quick Answer' : 'إجابة سريعة'}
                    </h2>
                    <p className="text-slate-800 font-medium leading-relaxed">
                      {t.summary || t.locationIntro}
                    </p>
                  </div>
                </div>
              </div>

              {/* Reviewed By Box */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 mb-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <User size={24} className="text-slate-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    {language === 'en' ? 'Reviewed for accuracy by' : 'تمت مراجعة الدقة من قبل'}
                  </p>
                  <p className="font-semibold text-slate-900">{reviewer.name}</p>
                  <p className="text-sm text-amber-600">{reviewer.credential} • {reviewer.experience}</p>
                </div>
              </div>

              {/* Location-specific intro box */}
              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg mb-8">
                <p className="text-slate-800 font-medium">
                  {t.locationIntro}
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                {t.sections.map((section, idx) => (
                  <section key={idx} id={`section-${idx}`} className="mb-10 scroll-mt-24">
                    {section.heading && (
                      <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4 pb-2 border-b border-gray-200">
                        {section.heading}
                      </h2>
                    )}
                    {section.content && (
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
                    )}

                    {/* Masterpiece Widget Injection */}
                    {section.component && (
                      <div className="my-6">
                        {section.component}
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
                        <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                          <thead>
                            <tr className="bg-slate-800 text-white">
                              {section.table.headers.map((header, i) => (
                                <th key={i} className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, i) => (
                              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                {row.map((cell, j) => (
                                  <td key={j} className="border border-gray-300 px-4 py-3">
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
                <section id="faqs" className="mt-12 bg-white rounded-xl p-8 shadow-sm scroll-mt-24">
                  <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-lg text-sm font-medium">FAQ</span>
                    {language === 'en' ? 'Frequently Asked Questions' : 'الأسئلة الشائعة'}
                  </h2>
                  <div className="space-y-6">
                    {t.faqs.map((faq, idx) => (
                      <div key={idx} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-start gap-2">
                          <span className="text-amber-600 font-bold">Q:</span>
                          {faq.q}
                        </h3>
                        <p className="text-gray-700 pl-6">
                          <span className="text-green-600 font-bold">A:</span> {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Disclaimer */}
              <div className="mt-8 p-4 bg-gray-100 rounded-lg text-sm text-gray-600">
                <strong>{language === 'en' ? 'Disclaimer' : 'إخلاء المسؤولية'}:</strong>{' '}
                {language === 'en'
                  ? `This article provides general information about immigration services in ${t.location} and does not constitute legal advice. SoCal Immigration Services is a document preparation company, not a law firm. For legal advice specific to your situation, please consult with a licensed immigration attorney.`
                  : `يقدم هذا المقال معلومات عامة حول خدمات الهجرة في ${t.location} ولا يشكل مشورة قانونية. شركة خدمات حلول الهجرة هي شركة إعداد وثائق وليست مكتب محاماة. للحصول على مشورة قانونية خاصة بوضعك، يرجى استشارة محامي هجرة مرخص.`}
              </div>

              {/* Article Footer - Last Updated Reminder */}
              <div className="mt-6 flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                <span className="flex items-center gap-2">
                  <Calendar size={14} />
                  {language === 'en' ? `Published: ${t.date}` : `نشر: ${t.date}`}
                </span>
                <span className="flex items-center gap-2 text-green-600 font-medium">
                  <RefreshCw size={14} />
                  {language === 'en' ? `Last Updated: ${lastUpdated}` : `آخر تحديث: ${lastUpdated}`}
                </span>
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
            </main>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPostTemplate;
