import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Users, Flag, FileText, ScrollText, Heart, Award, Shield } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import VisasFamilyPage from './pages/VisasFamilyPage';
import StatusCitizenshipPage from './pages/StatusCitizenshipPage';
import LegalDocumentsPage from './pages/LegalDocumentsPage';
import ProfessionalServicesPage from './pages/ProfessionalServicesPage';

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

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar language={language} setLanguage={setLanguage} content={content} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage language={language} content={content} />} />
            <Route path="/services/visas-family" element={<VisasFamilyPage language={language} />} />
            <Route path="/services/status-citizenship" element={<StatusCitizenshipPage language={language} />} />
            <Route path="/services/legal-documents" element={<LegalDocumentsPage language={language} />} />
            <Route path="/services/professional-services" element={<ProfessionalServicesPage language={language} />} />
          </Routes>
        </main>

        <Footer language={language} content={content} />
      </div>
    </Router>
  );
};

export default App;
