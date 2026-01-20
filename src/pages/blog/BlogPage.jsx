import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Search, Filter, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { blogPosts, categories } from '../../data/blogPosts';

const BlogPage = ({ language }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const isRTL = language === 'ar';

  const content = {
    en: {
      title: "Immigration Blog",
      subtitle: "Expert insights and guides for Arab immigrants in Southern California",
      metaTitle: "Immigration Blog | Arab Immigration Services Southern California",
      metaDescription: "Expert immigration guides, news, and resources for Arab families in El Cajon, Anaheim, San Diego, Irvine, and all of Southern California.",
      searchPlaceholder: "Search articles...",
      allCategories: "All Categories",
      allLocations: "All Locations",
      readMore: "Read More",
      minRead: "min read",
      noResults: "No articles found. Try adjusting your search or filters.",
      featuredTitle: "Featured Guides",
      latestTitle: "Latest Articles"
    },
    ar: {
      title: "مدونة الهجرة",
      subtitle: "رؤى ودلائل خبراء للمهاجرين العرب في جنوب كاليفورنيا",
      metaTitle: "مدونة الهجرة | خدمات الهجرة العربية جنوب كاليفورنيا",
      metaDescription: "أدلة الهجرة والأخبار والموارد للعائلات العربية في إل كاجون وأنهايم وسان دييغو وإرفاين وجميع أنحاء جنوب كاليفورنيا.",
      searchPlaceholder: "البحث في المقالات...",
      allCategories: "جميع الفئات",
      allLocations: "جميع المواقع",
      readMore: "اقرأ المزيد",
      minRead: "دقيقة قراءة",
      noResults: "لم يتم العثور على مقالات. حاول تعديل البحث أو الفلاتر.",
      featuredTitle: "الأدلة المميزة",
      latestTitle: "أحدث المقالات"
    }
  };

  const t = content[language];

  // Get unique locations from posts
  const locations = useMemo(() => {
    const locs = [...new Set(blogPosts.map(post => post.location))];
    return locs.sort();
  }, []);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return blogPosts
      .filter(post => {
        const matchesSearch = searchTerm === '' ||
          post.title[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt[language].toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
        const matchesLocation = selectedLocation === 'all' || post.location === selectedLocation;

        return matchesSearch && matchesCategory && matchesLocation;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by most recent first
  }, [searchTerm, selectedCategory, selectedLocation, language]);

  // Schema for blog listing
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": t.title,
    "description": t.subtitle,
    "publisher": {
      "@type": "Organization",
      "name": "SoCal Immigration Services",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Garden Grove",
        "addressRegion": "CA"
      }
    },
    "blogPost": filteredPosts.slice(0, 10).map(post => ({
      "@type": "BlogPosting",
      "headline": post.title[language],
      "description": post.excerpt[language],
      "datePublished": post.date
    }))
  };

  return (
    <>
      <Helmet>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <link rel="canonical" href="https://www.socalimmigrationservices.com/blog/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero */}
        <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.subtitle}</p>
          </div>
        </header>

        {/* Filters */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 appearance-none bg-white"
                >
                  <option value="all">{t.allCategories}</option>
                  {Object.entries(categories).map(([key, cat]) => (
                    <option key={key} value={key}>{cat[language]}</option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 appearance-none bg-white"
                >
                  <option value="all">{t.allLocations}</option>
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results count */}
          <p className="text-gray-600 mb-6">
            {language === 'en'
              ? `Showing ${filteredPosts.length} articles`
              : `عرض ${filteredPosts.length} مقالة`}
          </p>

          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map(post => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  {/* Category & Location Badge */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {categories[post.category][language]}
                      </span>
                      <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <MapPin size={12} />
                        {post.location}
                      </span>
                    </div>

                    <h2 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {post.title[language]}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt[language]}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime} {t.minRead}
                        </span>
                      </div>
                    </div>

                    <Link
                      to={`/blog/${post.slug}/`}
                      className="mt-4 inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold group/link"
                    >
                      {t.readMore}
                      <ArrowRight size={16} className={`group-hover/link:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover/link:-translate-x-1' : ''}`} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl">
              <p className="text-gray-500 text-lg">{t.noResults}</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-16 mt-12">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-serif font-bold mb-4">
              {language === 'en' ? "Need Immigration Help?" : "هل تحتاج مساعدة في الهجرة؟"}
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              {language === 'en'
                ? "Contact us for a free consultation. We serve Arab families throughout Southern California."
                : "اتصل بنا للحصول على استشارة مجانية. نحن نخدم العائلات العربية في جميع أنحاء جنوب كاليفورنيا."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                {language === 'en' ? "Schedule Consultation" : "حجز استشارة"}
              </Link>
              <a
                href="tel:+17144218872"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                (714) 421-8872
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
