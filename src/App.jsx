import React, { useState } from 'react';
import {
  Users,
  Flag,
  FileText,
  ScrollText,
  Heart,
  Award,
  Shield,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Music
} from 'lucide-react';

const App = () => {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      // Navbar
      logo: "Immigration Solution & Services",
      nav: {
        home: "Home",
        services: "Services",
        about: "About",
        contact: "Contact"
      },
      langToggle: "العربية",

      // Hero
      hero: {
        headline: "Your Path to the American Dream Starts Here",
        subhead: "Professional Immigration, Translation, and Notary Services.",
        cta: "Book a Consultation"
      },

      // Services
      servicesTitle: "Our Services",
      servicesSubtitle: "Comprehensive immigration solutions tailored to your needs",

      categories: [
        {
          title: "Visas & Family",
          icon: Users,
          services: [
            "Family Petitions",
            "K1 Fiancé Visa",
            "B1-B2 Visas & Extensions",
            "H-1B Work Visa"
          ]
        },
        {
          title: "Status & Citizenship",
          icon: Flag,
          services: [
            "Citizenship",
            "Adjustment of Status",
            "Green Card Replacement/Renewal",
            "Asylum / Refugee"
          ]
        },
        {
          title: "Legal Documents",
          icon: FileText,
          services: [
            "Affidavit of Support",
            "Work Authorization",
            "Travel Document",
            "SSI/SSA/Disability"
          ]
        },
        {
          title: "Professional Services",
          icon: ScrollText,
          services: [
            "Translation",
            "Notary Public",
            "Divorce Filings"
          ]
        }
      ],

      // Why Choose Us
      whyTitle: "Why Choose Us",
      whySubtitle: "Your trusted partner in immigration services",
      whyFeatures: [
        {
          icon: Heart,
          title: "Bilingual Support",
          description: "We serve our community in both English and Arabic, ensuring clear communication every step of the way."
        },
        {
          icon: Award,
          title: "Compassionate Service",
          description: "We understand the challenges of immigration and provide personalized, caring support to each client."
        },
        {
          icon: Shield,
          title: "Expert Document Handling",
          description: "Meticulous attention to detail in preparing and processing all your immigration documents."
        }
      ],

      // Footer
      footer: {
        tagline: "Your trusted immigration partner",
        contact: "Contact Us",
        address: "Lake Forest, CA",
        phone: "(555) 123-4567",
        email: "info@immigrationsolution.com",
        social: "Follow Us",
        disclaimer: "We are not attorneys. We provide document preparation services."
      }
    },
    ar: {
      // Navbar
      logo: "حلول وخدمات الهجرة",
      nav: {
        home: "الرئيسية",
        services: "الخدمات",
        about: "من نحن",
        contact: "اتصل بنا"
      },
      langToggle: "English",

      // Hero
      hero: {
        headline: "طريقك نحو الحلم الأمريكي يبدأ هنا",
        subhead: "خدمات الهجرة والترجمة والتوثيق المهنية",
        cta: "احجز استشارة"
      },

      // Services
      servicesTitle: "خدماتنا",
      servicesSubtitle: "حلول شاملة للهجرة مصممة خصيصًا لتلبية احتياجاتك",

      categories: [
        {
          title: "التأشيرات والعائلة",
          icon: Users,
          services: [
            "التقدم بطلبات الهجرة لأفراد العائلة",
            "K1 فيزا الخطوبة",
            "B1-B2 فيزا السياحة وتمديدها",
            "فيزا العمل"
          ]
        },
        {
          title: "الوضع والجنسية",
          icon: Flag,
          services: [
            "الجنسية",
            "تعديل وضع الإقامة",
            "استبدال وتجديد الجرين كارد",
            "اللجوء السياسي والإنساني"
          ]
        },
        {
          title: "الوثائق القانونية",
          icon: FileText,
          services: [
            "الكفالات",
            "تصاريح العمل",
            "وثائق السفر",
            "خدمات التأمين الاجتماعي"
          ]
        },
        {
          title: "الخدمات المهنية",
          icon: ScrollText,
          services: [
            "الترجمة",
            "تصديق",
            "الطلاق"
          ]
        }
      ],

      // Why Choose Us
      whyTitle: "لماذا تختارنا",
      whySubtitle: "شريكك الموثوق في خدمات الهجرة",
      whyFeatures: [
        {
          icon: Heart,
          title: "دعم ثنائي اللغة",
          description: "نخدم مجتمعنا باللغتين الإنجليزية والعربية، مما يضمن التواصل الواضح في كل خطوة."
        },
        {
          icon: Award,
          title: "خدمة رحيمة",
          description: "نحن نتفهم تحديات الهجرة ونقدم دعمًا شخصيًا ورعاية لكل عميل."
        },
        {
          icon: Shield,
          title: "معالجة الوثائق بخبرة",
          description: "اهتمام دقيق بالتفاصيل في إعداد ومعالجة جميع وثائق الهجرة الخاصة بك."
        }
      ],

      // Footer
      footer: {
        tagline: "شريكك الموثوق في الهجرة",
        contact: "اتصل بنا",
        address: "ليك فورست، كاليفورنيا",
        phone: "(555) 123-4567",
        email: "info@immigrationsolution.com",
        social: "تابعنا",
        disclaimer: "نحن لسنا محامين. نحن نقدم خدمات إعداد الوثائق."
      }
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Navbar */}
      <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl font-serif font-bold text-amber-400">
                {t.logo}
              </h1>
            </div>

            <div className="hidden md:flex space-x-8 rtl:space-x-reverse">
              <a href="#home" className="hover:text-amber-400 transition-colors">{t.nav.home}</a>
              <a href="#services" className="hover:text-amber-400 transition-colors">{t.nav.services}</a>
              <a href="#about" className="hover:text-amber-400 transition-colors">{t.nav.about}</a>
              <a href="#contact" className="hover:text-amber-400 transition-colors">{t.nav.contact}</a>
            </div>

            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              {language === 'en' ? '🇸🇦' : '🇺🇸'} {t.langToggle}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?q=80&w=2000)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            {t.hero.headline}
          </h2>
          <p className="text-xl sm:text-2xl mb-8 text-gray-200">
            {t.hero.subhead}
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
            {t.hero.cta}
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">
              {t.servicesTitle}
            </h2>
            <p className="text-xl text-gray-600">
              {t.servicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.categories.map((category, idx) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 hover:border-amber-400"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-slate-900 rounded-lg mb-4 mx-auto">
                    <IconComponent className="text-amber-400" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 text-center font-serif">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIdx) => (
                      <li
                        key={serviceIdx}
                        className="text-gray-700 flex items-start gap-2"
                      >
                        <span className="text-amber-600 mt-1">•</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              {t.whyTitle}
            </h2>
            <p className="text-xl text-gray-300">
              {t.whySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.whyFeatures.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={idx}
                  className="text-center p-8 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-center w-20 h-20 bg-amber-600 rounded-full mb-6 mx-auto">
                    <IconComponent size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-serif">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-amber-400 mb-4">
                {t.logo}
              </h3>
              <p className="text-gray-400">
                {t.footer.tagline}
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-bold mb-4">{t.footer.contact}</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-amber-400" />
                  <span className="text-gray-400">{t.footer.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-amber-400" />
                  <span className="text-gray-400">{t.footer.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-amber-400" />
                  <span className="text-gray-400">{t.footer.email}</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-bold mb-4">{t.footer.social}</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
                  <Youtube size={24} />
                </a>
                <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
                  <Music size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              {t.footer.disclaimer}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © {new Date().getFullYear()} Immigration Solution & Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
