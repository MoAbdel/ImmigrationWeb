import React from 'react';
import { Flag, Shield, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const StatusCitizenshipPage = ({ language }) => {
  const content = {
    en: {
      hero: {
        title: "Status & Citizenship Services",
        subtitle: "Achieve permanent residency and become a U.S. citizen",
        cta: "Schedule Consultation"
      },
      intro: {
        title: "Your Path to Permanent Residency and Citizenship",
        text: "Whether you're adjusting your status, renewing your green card, applying for citizenship, or seeking asylum, we provide comprehensive support through every step of your journey to becoming a permanent resident or U.S. citizen."
      },
      services: [
        {
          title: "Citizenship (Naturalization)",
          icon: Flag,
          description: "Become a U.S. citizen and enjoy all the rights and privileges of citizenship.",
          details: [
            "Form N-400 Application for Naturalization",
            "Citizenship eligibility assessment",
            "Naturalization test preparation",
            "Interview preparation and practice",
            "Supporting documentation compilation",
            "Certificate of Citizenship applications"
          ],
          processing: "Processing time: 8-14 months on average",
          who: "Lawful permanent residents who have met residency requirements (typically 5 years, or 3 years if married to a U.S. citizen)"
        },
        {
          title: "Adjustment of Status",
          icon: Shield,
          description: "Transition from temporary status to lawful permanent resident without leaving the U.S.",
          details: [
            "Form I-485 Application to Register Permanent Residence",
            "Employment-based adjustment of status",
            "Family-based adjustment of status",
            "Medical examination coordination",
            "Biometrics appointment support",
            "Interview preparation"
          ],
          processing: "Processing time: 10-24 months depending on category",
          who: "Foreign nationals in the U.S. who are eligible to apply for a green card through family, employment, asylum, or other categories"
        },
        {
          title: "Green Card Replacement/Renewal",
          icon: Shield,
          description: "Replace lost, stolen, damaged green cards or renew expiring permanent resident cards.",
          details: [
            "Form I-90 Application to Replace Permanent Resident Card",
            "Lost or stolen card replacement",
            "Damaged card replacement",
            "Green card renewal (10-year cards)",
            "Conditional green card removal (I-751)",
            "Name change updates"
          ],
          processing: "Processing time: 6-10 months",
          who: "Lawful permanent residents with lost, stolen, damaged, or expiring green cards"
        },
        {
          title: "Asylum / Refugee Status",
          icon: Shield,
          description: "Seek protection in the United States due to persecution or fear of persecution.",
          details: [
            "Form I-589 Application for Asylum",
            "Affirmative asylum applications",
            "Defensive asylum applications",
            "Refugee admission processing",
            "Asylum interview preparation",
            "Supporting evidence compilation",
            "Expert witness coordination",
            "Green card application after asylum approval"
          ],
          processing: "Processing time varies greatly: 6 months to several years",
          who: "Foreign nationals who have suffered persecution or have a well-founded fear of persecution based on race, religion, nationality, membership in a particular social group, or political opinion"
        }
      ],
      process: {
        title: "Our Process",
        steps: [
          {
            number: "01",
            title: "Eligibility Review",
            description: "We thoroughly assess your eligibility and determine the best path forward."
          },
          {
            number: "02",
            title: "Document Collection",
            description: "We help you gather all necessary evidence and supporting documents."
          },
          {
            number: "03",
            title: "Application Preparation",
            description: "We prepare and file your application with meticulous attention to detail."
          },
          {
            number: "04",
            title: "Ongoing Support",
            description: "We guide you through interviews, RFEs, and all steps until approval."
          }
        ]
      },
      cta: {
        title: "Ready to Take the Next Step?",
        text: "Let us help you achieve your dream of permanent residency or U.S. citizenship.",
        button: "Book Your Consultation"
      }
    },
    ar: {
      hero: {
        title: "خدمات الوضع والجنسية",
        subtitle: "احصل على الإقامة الدائمة وأصبح مواطنًا أمريكيًا",
        cta: "حدد موعد استشارة"
      },
      intro: {
        title: "طريقك إلى الإقامة الدائمة والجنسية",
        text: "سواء كنت تقوم بتعديل وضعك، أو تجديد البطاقة الخضراء، أو التقدم بطلب للحصول على الجنسية، أو طلب اللجوء، فإننا نقدم دعمًا شاملاً خلال كل خطوة من رحلتك لتصبح مقيمًا دائمًا أو مواطنًا أمريكيًا."
      },
      services: [
        {
          title: "الجنسية (التجنس)",
          icon: Flag,
          description: "أصبح مواطنًا أمريكيًا واستمتع بجميع حقوق وامتيازات المواطنة.",
          details: [
            "نموذج N-400 طلب التجنس",
            "تقييم الأهلية للحصول على الجنسية",
            "الإعداد لاختبار الجنسية",
            "الإعداد والممارسة للمقابلة",
            "تجميع الوثائق الداعمة",
            "طلبات شهادة الجنسية"
          ],
          processing: "وقت المعالجة: 8-14 شهرًا في المتوسط",
          who: "المقيمون الدائمون القانونيون الذين استوفوا متطلبات الإقامة (عادةً 5 سنوات، أو 3 سنوات إذا كانوا متزوجين من مواطن أمريكي)"
        },
        {
          title: "تعديل وضع الإقامة",
          icon: Shield,
          description: "الانتقال من الوضع المؤقت إلى المقيم الدائم القانوني دون مغادرة الولايات المتحدة.",
          details: [
            "نموذج I-485 طلب تسجيل الإقامة الدائمة",
            "تعديل الوضع القائم على العمل",
            "تعديل الوضع القائم على الأسرة",
            "تنسيق الفحص الطبي",
            "دعم موعد البيومترية",
            "الإعداد للمقابلة"
          ],
          processing: "وقت المعالجة: 10-24 شهرًا حسب الفئة",
          who: "المواطنون الأجانب في الولايات المتحدة المؤهلون للتقدم بطلب للحصول على البطاقة الخضراء من خلال العائلة أو العمل أو اللجوء أو فئات أخرى"
        },
        {
          title: "استبدال وتجديد الجرين كارد",
          icon: Shield,
          description: "استبدال البطاقات الخضراء المفقودة أو المسروقة أو التالفة أو تجديد بطاقات المقيم الدائم منتهية الصلاحية.",
          details: [
            "نموذج I-90 طلب استبدال بطاقة المقيم الدائم",
            "استبدال البطاقة المفقودة أو المسروقة",
            "استبدال البطاقة التالفة",
            "تجديد البطاقة الخضراء (بطاقات 10 سنوات)",
            "إزالة البطاقة الخضراء المشروطة (I-751)",
            "تحديثات تغيير الاسم"
          ],
          processing: "وقت المعالجة: 6-10 أشهر",
          who: "المقيمون الدائمون القانونيون الذين لديهم بطاقات خضراء مفقودة أو مسروقة أو تالفة أو منتهية الصلاحية"
        },
        {
          title: "اللجوء السياسي والإنساني",
          icon: Shield,
          description: "اطلب الحماية في الولايات المتحدة بسبب الاضطهاد أو الخوف من الاضطهاد.",
          details: [
            "نموذج I-589 طلب اللجوء",
            "طلبات اللجوء الإيجابية",
            "طلبات اللجوء الدفاعية",
            "معالجة قبول اللاجئين",
            "الإعداد لمقابلة اللجوء",
            "تجميع الأدلة الداعمة",
            "تنسيق الشهود الخبراء",
            "طلب البطاقة الخضراء بعد الموافقة على اللجوء"
          ],
          processing: "وقت المعالجة يختلف بشكل كبير: من 6 أشهر إلى عدة سنوات",
          who: "المواطنون الأجانب الذين عانوا من الاضطهاد أو لديهم خوف مبرر من الاضطهاد على أساس العرق أو الدين أو الجنسية أو العضوية في مجموعة اجتماعية معينة أو الرأي السياسي"
        }
      ],
      process: {
        title: "عمليتنا",
        steps: [
          {
            number: "01",
            title: "مراجعة الأهلية",
            description: "نقوم بتقييم أهليتك بشكل شامل ونحدد أفضل طريق للمضي قدمًا."
          },
          {
            number: "02",
            title: "جمع الوثائق",
            description: "نساعدك في جمع جميع الأدلة والوثائق الداعمة اللازمة."
          },
          {
            number: "03",
            title: "إعداد الطلب",
            description: "نقوم بإعداد وتقديم طلبك مع اهتمام دقيق بالتفاصيل."
          },
          {
            number: "04",
            title: "الدعم المستمر",
            description: "نرشدك خلال المقابلات وطلبات الأدلة الإضافية وجميع الخطوات حتى الموافقة."
          }
        ]
      },
      cta: {
        title: "هل أنت مستعد لاتخاذ الخطوة التالية؟",
        text: "دعنا نساعدك في تحقيق حلمك بالإقامة الدائمة أو الجنسية الأمريكية.",
        button: "احجز استشارتك"
      }
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <>
      <Helmet>
        <title>{language === 'en' ? 'Status & Citizenship Services | SoCal Immigration' : 'خدمات الوضع والمواطنة | خدمات الهجرة في جنوب كاليفورنيا'}</title>
        <meta name="description" content={language === 'en' ? 'Citizenship and immigration status services in Southern California. Naturalization, adjustment of status, green card services. Arabic support. Call (714) 421-8872.' : 'خدمات المواطنة ووضع الهجرة في جنوب كاليفورنيا. التجنس، تعديل الوضع، خدمات البطاقة الخضراء.'} />
        <link rel="canonical" href="https://www.socalimmigrationservices.com/services/status-citizenship/" />
      </Helmet>
      <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section
          className="relative h-[400px] flex items-center justify-center text-white"
          style={{
            backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Flag className="mx-auto mb-6 text-amber-400" size={64} />
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            {t.hero.title}
          </h1>
          <p className="text-xl text-gray-200 mb-6">
            {t.hero.subtitle}
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
            {t.hero.cta}
          </button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 text-center">
            {t.intro.title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {t.intro.text}
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {t.services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center">
                        <IconComponent className="text-amber-400" size={32} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 mb-4 text-lg">
                        {service.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-bold text-slate-900 mb-2">{language === 'en' ? 'What We Handle:' : 'ما نتولاه:'}</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.details.map((detail, detailIdx) => (
                            <li key={detailIdx} className="flex items-start gap-2">
                              <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 p-4 bg-amber-50 rounded-lg">
                        <div>
                          <p className="font-semibold text-slate-900">{language === 'en' ? 'Processing Time:' : 'وقت المعالجة:'}</p>
                          <p className="text-gray-700">{service.processing}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{language === 'en' ? 'Who Qualifies:' : 'من يتأهل:'}</p>
                          <p className="text-gray-700">{service.who}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">
            {t.process.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.process.steps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-amber-400 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            {t.cta.title}
          </h2>
          <p className="text-xl mb-8">
            {t.cta.text}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              <Phone size={20} />
              {t.cta.button}
            </button>
            <Link to="/" className="bg-slate-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-all transform hover:scale-105 flex items-center justify-center">
              {language === 'en' ? 'Back to Home' : 'العودة إلى الصفحة الرئيسية'}
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default StatusCitizenshipPage;
