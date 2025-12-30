import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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

// Blog
import BlogPage from './pages/blog/BlogPage';
import FamilyPetitionI130ElCajon from './pages/blog/posts/FamilyPetitionI130ElCajon';
import BringingParentsAnaheim from './pages/blog/posts/BringingParentsAnaheim';
import SiblingImmigrationRiverside from './pages/blog/posts/SiblingImmigrationRiverside';
import AsylumApplicationElCajon from './pages/blog/posts/AsylumApplicationElCajon';
import RefugeeAdjustmentSanDiego from './pages/blog/posts/RefugeeAdjustmentSanDiego';
import K1FianceVisaAnaheim from './pages/blog/posts/K1FianceVisaAnaheim';
import MarriageGreenCardIrvine from './pages/blog/posts/MarriageGreenCardIrvine';
import NaturalizationGardenGrove from './pages/blog/posts/NaturalizationGardenGrove';
import CivicsTestCorona from './pages/blog/posts/CivicsTestCorona';
import H1BVisaIrvine from './pages/blog/posts/H1BVisaIrvine';
import OPTtoH1BSanDiego from './pages/blog/posts/OPTtoH1BSanDiego';
import GreenCardRenewalLosAngeles from './pages/blog/posts/GreenCardRenewalLosAngeles';
import AdjustmentOfStatusRiverside from './pages/blog/posts/AdjustmentOfStatusRiverside';
import AdvanceParoleGardenGrove from './pages/blog/posts/AdvanceParoleGardenGrove';
import RefugeeTravelDocElCajon from './pages/blog/posts/RefugeeTravelDocElCajon';
import USCISTranslationAnaheim from './pages/blog/posts/USCISTranslationAnaheim';
import AffidavitOfSupportSanDiego from './pages/blog/posts/AffidavitOfSupportSanDiego';
import KnowYourRightsLosAngeles from './pages/blog/posts/KnowYourRightsLosAngeles';
import IraqiChaldeanResourcesElCajon from './pages/blog/posts/IraqiChaldeanResourcesElCajon';
import I730RefugeeFamilySanDiego from './pages/blog/posts/I730RefugeeFamilySanDiego';
import VAWASelfPetitionLosAngeles from './pages/blog/posts/VAWASelfPetitionLosAngeles';
import F1StudentVisaIrvine from './pages/blog/posts/F1StudentVisaIrvine';
import L1AIntracompanyIrvine from './pages/blog/posts/L1AIntracompanyIrvine';
import ConsularProcessingAnaheim from './pages/blog/posts/ConsularProcessingAnaheim';
import DACAInformationRiverside from './pages/blog/posts/DACAInformationRiverside';
import EB5InvestmentIrvine from './pages/blog/posts/EB5InvestmentIrvine';
import DivorceImmigrationGardenGrove from './pages/blog/posts/DivorceImmigrationGardenGrove';
import EmergencyPassportElCajon from './pages/blog/posts/EmergencyPassportElCajon';
import MedicalExamI693SanDiego from './pages/blog/posts/MedicalExamI693SanDiego';
import NameChangeImmigrationLosAngeles from './pages/blog/posts/NameChangeImmigrationLosAngeles';
import CredibleFearInterviewGlendale from './pages/blog/posts/CredibleFearInterviewGlendale';
import WorkAuthorizationEADRanchoCucamonga from './pages/blog/posts/WorkAuthorizationEADRanchoCucamonga';
import PERMEmploymentGreenCardOntario from './pages/blog/posts/PERMEmploymentGreenCardOntario';
import CitizenshipRefugeesChulVista from './pages/blog/posts/CitizenshipRefugeesChulVista';
import MilitarySpouseImmigrationOceanside from './pages/blog/posts/MilitarySpouseImmigrationOceanside';
import LargeFamilyImmigrationTemecula from './pages/blog/posts/LargeFamilyImmigrationTemecula';
import ReEntryPermitMurrieta from './pages/blog/posts/ReEntryPermitMurrieta';
import I751RemovingConditionsCorona from './pages/blog/posts/I751RemovingConditionsCorona';
import RefugeeResettlementGlendale from './pages/blog/posts/RefugeeResettlementGlendale';
import GreenCardInterviewPrepRanchoCucamonga from './pages/blog/posts/GreenCardInterviewPrepRanchoCucamonga';

const App = () => {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      // Navbar
      logo: "Immigration Solution Services",
      nav: {
        home: "Home",
        services: "Services",
        about: "About",
        contact: "Contact",
        blog: "Blog"
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

      // How It Works
      howItWorksTitle: "Our Simple Process",
      howItWorksSubtitle: "Getting started is easy - just four simple steps",
      howItWorksSteps: [
        { step: "1", title: "Consultation", description: "Free initial consultation to understand your needs" },
        { step: "2", title: "Document Prep", description: "We prepare all necessary documents accurately" },
        { step: "3", title: "Review", description: "Thorough review to ensure everything is perfect" },
        { step: "4", title: "Filing", description: "We file your application and track its progress" }
      ],

      // Testimonials
      testimonialsTitle: "Success Stories",
      testimonialsSubtitle: "Hear from our satisfied clients",
      testimonials: [
        {
          name: "Sarah Johnson",
          location: "Los Angeles, CA",
          text: "The team helped me with my citizenship application. They were professional, patient, and made the entire process stress-free. I'm now a proud U.S. citizen!",
          rating: 5
        },
        {
          name: "أحمد العلي",
          location: "Orange County, CA",
          text: "خدمة ممتازة! ساعدوني في لم شمل عائلتي. الفريق يتحدث العربية بطلاقة وكانوا متعاونين جداً في كل خطوة.",
          rating: 5
        },
        {
          name: "Maria Garcia",
          location: "San Diego, CA",
          text: "I needed translation and notary services for my green card renewal. Fast, accurate, and affordable. Highly recommend!",
          rating: 5
        }
      ],

      // FAQ
      faqTitle: "Common Questions",
      faqSubtitle: "Find answers to frequently asked questions",
      faqs: [
        {
          question: "How long does the immigration process take?",
          answer: "Processing times vary depending on the type of application. Family-based petitions can take 6 months to 3+ years, while citizenship applications typically take 8-14 months. We provide realistic timelines during your consultation and keep you updated throughout the process."
        },
        {
          question: "Are your translations certified for USCIS?",
          answer: "Yes! All our translations include a certificate of accuracy and meet USCIS requirements. Our certified translations are accepted by USCIS, embassies, courts, and other official agencies. We can also provide notarized translations when required."
        },
        {
          question: "What are your fees?",
          answer: "We believe in transparent pricing. Translation services start at $30 per page, notary services at $15 per signature, and immigration document preparation varies by case complexity. Contact us for a detailed quote based on your specific needs - no hidden fees, ever."
        },
        {
          question: "Do you provide legal advice?",
          answer: "We are not attorneys and do not provide legal advice. We specialize in document preparation services for immigration applications. For complex legal matters or contested cases, we can refer you to qualified immigration attorneys in our network."
        }
      ],

      // Final CTA
      finalCtaTitle: "Ready to Start Your Journey?",
      finalCtaText: "Take the first step toward achieving your American dream today",
      finalCtaButton: "Contact Us Today",

      // Contact Form
      contactForm: {
        title: "Get Started Today",
        subtitle: "Fill out the form below and we'll get back to you within 24 hours",
        nameLabel: "Full Name *",
        namePlaceholder: "Enter your full name",
        emailLabel: "Email Address *",
        emailPlaceholder: "your.email@example.com",
        phoneLabel: "Phone Number *",
        phonePlaceholder: "(555) 123-4567",
        serviceLabel: "Service Needed *",
        servicePlaceholder: "Select a service",
        serviceOptions: [
          "Family Petitions (I-130)",
          "K1 Fiancé Visa",
          "Citizenship/Naturalization",
          "Adjustment of Status",
          "Green Card Renewal",
          "Work Authorization (EAD)",
          "Travel Document (Advance Parole)",
          "Translation Services",
          "Notary Services",
          "Other"
        ],
        messageLabel: "Tell Us About Your Case *",
        messagePlaceholder: "Please provide details about your immigration needs...",
        submitButton: "Submit Request",
        successMessage: "Thank you! We'll contact you within 24 hours."
      },

      // Footer
      footer: {
        description: "Professional immigration document preparation services helping families and individuals navigate the U.S. immigration process with confidence and accuracy.",
        services: "Specializing in family petitions, visa applications, citizenship, work permits, translations, and notary services.",
        hours: "Monday - Friday: 9:00 AM - 6:00 PM | Saturday: 10:00 AM - 3:00 PM",
        contact: "Contact Us",
        address: "11088 Trask Ave. Suite 200-K, Garden Grove, CA 92843",
        phone: "(714) 421-8872",
        email: "imgso2005@yahoo.com",
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
        contact: "اتصل بنا",
        blog: "المدونة"
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

      // How It Works
      howItWorksTitle: "خطوات العمل",
      howItWorksSubtitle: "البدء سهل - أربع خطوات بسيطة فقط",
      howItWorksSteps: [
        { step: "١", title: "استشارة", description: "استشارة أولية مجانية لفهم احتياجاتك" },
        { step: "٢", title: "إعداد الوثائق", description: "نقوم بإعداد جميع الوثائق اللازمة بدقة" },
        { step: "٣", title: "المراجعة", description: "مراجعة شاملة للتأكد من أن كل شيء مثالي" },
        { step: "٤", title: "التقديم", description: "نقدم طلبك ونتابع تقدمه" }
      ],

      // Testimonials
      testimonialsTitle: "قصص النجاح",
      testimonialsSubtitle: "استمع من عملائنا الراضين",
      testimonials: [
        {
          name: "Sarah Johnson",
          location: "لوس أنجلوس، كاليفورنيا",
          text: "The team helped me with my citizenship application. They were professional, patient, and made the entire process stress-free. I'm now a proud U.S. citizen!",
          rating: 5
        },
        {
          name: "أحمد العلي",
          location: "أورانج كاونتي، كاليفورنيا",
          text: "خدمة ممتازة! ساعدوني في لم شمل عائلتي. الفريق يتحدث العربية بطلاقة وكانوا متعاونين جداً في كل خطوة.",
          rating: 5
        },
        {
          name: "Maria Garcia",
          location: "سان دييغو، كاليفورنيا",
          text: "I needed translation and notary services for my green card renewal. Fast, accurate, and affordable. Highly recommend!",
          rating: 5
        }
      ],

      // FAQ
      faqTitle: "أسئلة شائعة",
      faqSubtitle: "اعثر على إجابات للأسئلة المتداولة",
      faqs: [
        {
          question: "كم من الوقت تستغرق عملية الهجرة؟",
          answer: "تختلف أوقات المعالجة حسب نوع الطلب. يمكن أن تستغرق التماسات الهجرة العائلية من 6 أشهر إلى أكثر من 3 سنوات، بينما تستغرق طلبات الجنسية عادةً من 8 إلى 14 شهرًا. نحن نقدم جداول زمنية واقعية خلال استشارتك ونبقيك على اطلاع طوال العملية."
        },
        {
          question: "هل ترجماتكم معتمدة من USCIS؟",
          answer: "نعم! تتضمن جميع ترجماتنا شهادة دقة وتفي بمتطلبات USCIS. ترجماتنا المعتمدة مقبولة من قبل USCIS والسفارات والمحاكم والوكالات الرسمية الأخرى. يمكننا أيضًا تقديم ترجمات موثقة عند الحاجة."
        },
        {
          question: "ما هي رسومكم؟",
          answer: "نحن نؤمن بالتسعير الشفاف. تبدأ خدمات الترجمة من 30 دولارًا للصفحة، وخدمات التوثيق من 15 دولارًا لكل توقيع، ويختلف إعداد وثائق الهجرة حسب تعقيد الحالة. اتصل بنا للحصول على عرض أسعار مفصل بناءً على احتياجاتك المحددة - لا توجد رسوم خفية أبدًا."
        },
        {
          question: "هل تقدمون مشورة قانونية؟",
          answer: "نحن لسنا محامين ولا نقدم المشورة القانونية. نحن متخصصون في خدمات إعداد الوثائق لطلبات الهجرة. للمسائل القانونية المعقدة أو الحالات المتنازع عليها، يمكننا إحالتك إلى محامي هجرة مؤهلين في شبكتنا."
        }
      ],

      // Final CTA
      finalCtaTitle: "هل أنت مستعد لبدء رحلتك؟",
      finalCtaText: "اتخذ الخطوة الأولى نحو تحقيق حلمك الأمريكي اليوم",
      finalCtaButton: "اتصل بنا اليوم",

      // Contact Form
      contactForm: {
        title: "ابدأ اليوم",
        subtitle: "املأ النموذج أدناه وسنتواصل معك خلال 24 ساعة",
        nameLabel: "الاسم الكامل *",
        namePlaceholder: "أدخل اسمك الكامل",
        emailLabel: "البريد الإلكتروني *",
        emailPlaceholder: "your.email@example.com",
        phoneLabel: "رقم الهاتف *",
        phonePlaceholder: "(555) 123-4567",
        serviceLabel: "الخدمة المطلوبة *",
        servicePlaceholder: "اختر خدمة",
        serviceOptions: [
          "التماسات العائلة (I-130)",
          "K1 فيزا الخطوبة",
          "الجنسية/التجنس",
          "تعديل الوضع",
          "تجديد البطاقة الخضراء",
          "تصريح العمل (EAD)",
          "وثيقة السفر (الإفراج المسبق)",
          "خدمات الترجمة",
          "خدمات التوثيق",
          "أخرى"
        ],
        messageLabel: "أخبرنا عن قضيتك *",
        messagePlaceholder: "يرجى تقديم تفاصيل حول احتياجاتك في الهجرة...",
        submitButton: "إرسال الطلب",
        successMessage: "شكراً لك! سنتواصل معك خلال 24 ساعة."
      },

      // Footer
      footer: {
        description: "خدمات إعداد وثائق الهجرة الاحترافية تساعد العائلات والأفراد على التنقل في عملية الهجرة الأمريكية بثقة ودقة.",
        services: "متخصصون في التماسات الأسرة، وطلبات التأشيرات، والمواطنة، وتصاريح العمل، والترجمة، وخدمات التوثيق.",
        hours: "الاثنين - الجمعة: 9:00 صباحًا - 6:00 مساءً | السبت: 10:00 صباحًا - 3:00 مساءً",
        contact: "اتصل بنا",
        address: "11088 شارع تراسك. جناح 200-ك، جاردن جروف، كاليفورنيا 92843",
        phone: "(714) 421-8872",
        email: "imgso2005@yahoo.com",
        social: "تابعنا",
        disclaimer: "نحن لسنا محامين. نحن نقدم خدمات إعداد الوثائق."
      }
    }
  };

  return (
    <HelmetProvider>
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

            {/* Blog Routes */}
            <Route path="/blog" element={<BlogPage language={language} />} />
            <Route path="/blog/family-petition-i130-el-cajon" element={<FamilyPetitionI130ElCajon language={language} />} />
            <Route path="/blog/bringing-parents-anaheim" element={<BringingParentsAnaheim language={language} />} />
            <Route path="/blog/sibling-immigration-riverside" element={<SiblingImmigrationRiverside language={language} />} />
            <Route path="/blog/asylum-application-el-cajon" element={<AsylumApplicationElCajon language={language} />} />
            <Route path="/blog/refugee-adjustment-san-diego" element={<RefugeeAdjustmentSanDiego language={language} />} />
            <Route path="/blog/k1-fiance-visa-anaheim" element={<K1FianceVisaAnaheim language={language} />} />
            <Route path="/blog/marriage-green-card-irvine" element={<MarriageGreenCardIrvine language={language} />} />
            <Route path="/blog/naturalization-garden-grove" element={<NaturalizationGardenGrove language={language} />} />
            <Route path="/blog/civics-test-corona" element={<CivicsTestCorona language={language} />} />
            <Route path="/blog/h1b-visa-irvine" element={<H1BVisaIrvine language={language} />} />
            <Route path="/blog/opt-to-h1b-san-diego" element={<OPTtoH1BSanDiego language={language} />} />
            <Route path="/blog/green-card-renewal-los-angeles" element={<GreenCardRenewalLosAngeles language={language} />} />
            <Route path="/blog/adjustment-of-status-riverside" element={<AdjustmentOfStatusRiverside language={language} />} />
            <Route path="/blog/advance-parole-garden-grove" element={<AdvanceParoleGardenGrove language={language} />} />
            <Route path="/blog/refugee-travel-doc-el-cajon" element={<RefugeeTravelDocElCajon language={language} />} />
            <Route path="/blog/uscis-translation-anaheim" element={<USCISTranslationAnaheim language={language} />} />
            <Route path="/blog/affidavit-of-support-san-diego" element={<AffidavitOfSupportSanDiego language={language} />} />
            <Route path="/blog/know-your-rights-los-angeles" element={<KnowYourRightsLosAngeles language={language} />} />
            <Route path="/blog/iraqi-chaldean-resources-el-cajon" element={<IraqiChaldeanResourcesElCajon language={language} />} />
            <Route path="/blog/i730-refugee-family-san-diego" element={<I730RefugeeFamilySanDiego language={language} />} />
            <Route path="/blog/vawa-self-petition-los-angeles" element={<VAWASelfPetitionLosAngeles language={language} />} />
            <Route path="/blog/f1-student-visa-extension-irvine" element={<F1StudentVisaIrvine language={language} />} />
            <Route path="/blog/l1a-intracompany-transfer-irvine" element={<L1AIntracompanyIrvine language={language} />} />
            <Route path="/blog/consular-processing-vs-adjustment-anaheim" element={<ConsularProcessingAnaheim language={language} />} />
            <Route path="/blog/daca-information-riverside" element={<DACAInformationRiverside language={language} />} />
            <Route path="/blog/eb5-investment-green-card-irvine" element={<EB5InvestmentIrvine language={language} />} />
            <Route path="/blog/divorce-immigration-impact-garden-grove" element={<DivorceImmigrationGardenGrove language={language} />} />
            <Route path="/blog/emergency-passport-services-el-cajon" element={<EmergencyPassportElCajon language={language} />} />
            <Route path="/blog/medical-exam-i693-san-diego" element={<MedicalExamI693SanDiego language={language} />} />
            <Route path="/blog/name-change-immigration-los-angeles" element={<NameChangeImmigrationLosAngeles language={language} />} />
            <Route path="/blog/credible-fear-interview-glendale" element={<CredibleFearInterviewGlendale language={language} />} />
            <Route path="/blog/work-authorization-ead-rancho-cucamonga" element={<WorkAuthorizationEADRanchoCucamonga language={language} />} />
            <Route path="/blog/perm-employment-green-card-ontario" element={<PERMEmploymentGreenCardOntario language={language} />} />
            <Route path="/blog/citizenship-refugees-chula-vista" element={<CitizenshipRefugeesChulVista language={language} />} />
            <Route path="/blog/military-spouse-immigration-oceanside" element={<MilitarySpouseImmigrationOceanside language={language} />} />
            <Route path="/blog/large-family-immigration-temecula" element={<LargeFamilyImmigrationTemecula language={language} />} />
            <Route path="/blog/reentry-permit-murrieta" element={<ReEntryPermitMurrieta language={language} />} />
            <Route path="/blog/i751-removing-conditions-corona" element={<I751RemovingConditionsCorona language={language} />} />
            <Route path="/blog/refugee-resettlement-glendale" element={<RefugeeResettlementGlendale language={language} />} />
            <Route path="/blog/green-card-interview-prep-rancho-cucamonga" element={<GreenCardInterviewPrepRanchoCucamonga language={language} />} />
          </Routes>
          </main>

          <Footer language={language} content={content} />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
