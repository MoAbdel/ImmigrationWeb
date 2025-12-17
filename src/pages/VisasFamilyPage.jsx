import React from 'react';
import { Users, Heart, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const VisasFamilyPage = ({ language }) => {
  const content = {
    en: {
      hero: {
        title: "Visas & Family Services",
        subtitle: "Reunite with your loved ones and build your future in America",
        cta: "Schedule Consultation"
      },
      intro: {
        title: "Family-Based Immigration Solutions",
        text: "We understand that family is everything. Our visa and family immigration services help you bring your loved ones together in the United States. Whether you're petitioning for a family member, applying for a fiancé visa, or seeking work authorization, we're here to guide you through every step."
      },
      services: [
        {
          title: "Family Petitions",
          icon: Heart,
          description: "Help family members immigrate to the United States through family-based petitions.",
          details: [
            "Immediate Relative Petitions (spouse, children, parents)",
            "Family Preference Categories (siblings, married children)",
            "Form I-130 Petition for Alien Relative",
            "Affidavit of Support (Form I-864)",
            "Evidence gathering and document preparation",
            "Interview preparation and support"
          ],
          processing: "Processing time varies: 6 months to 3+ years depending on category",
          who: "U.S. citizens and lawful permanent residents petitioning for qualifying family members"
        },
        {
          title: "K1 Fiancé Visa",
          icon: Heart,
          description: "Bring your fiancé to the United States to get married and build your life together.",
          details: [
            "Form I-129F Petition for Alien Fiancé(e)",
            "Embassy interview preparation",
            "Medical examination coordination",
            "Evidence of genuine relationship",
            "Supporting documentation compilation",
            "Follow-up adjustment of status after marriage"
          ],
          processing: "Average processing: 6-12 months",
          who: "U.S. citizens engaged to foreign nationals who plan to marry within 90 days of entry"
        },
        {
          title: "B1-B2 Visas & Extensions",
          icon: Users,
          description: "Temporary visitor visas for business and tourism purposes, including extensions.",
          details: [
            "B-1 Business Visitor Visa applications",
            "B-2 Tourist Visa applications",
            "Form I-539 Extension of Stay",
            "Change of Status applications",
            "Supporting letter preparation",
            "Travel itinerary documentation"
          ],
          processing: "Extension processing: 4-8 months",
          who: "Foreign nationals visiting the U.S. for business, tourism, or medical treatment"
        },
        {
          title: "H-1B Work Visa",
          icon: Users,
          description: "Professional work visas for specialty occupations requiring specialized knowledge.",
          details: [
            "H-1B petition preparation and filing",
            "Labor Condition Application (LCA) support",
            "Employer compliance documentation",
            "H-1B extensions and renewals",
            "H-1B transfer to new employer",
            "H-4 dependent visa applications"
          ],
          processing: "Standard processing: 3-6 months; Premium processing: 15 days",
          who: "Foreign professionals in specialty occupations with job offers from U.S. employers"
        }
      ],
      process: {
        title: "Our Process",
        steps: [
          {
            number: "01",
            title: "Free Consultation",
            description: "We assess your case and determine the best immigration strategy for your situation."
          },
          {
            number: "02",
            title: "Document Preparation",
            description: "We meticulously prepare all required forms and supporting documentation."
          },
          {
            number: "03",
            title: "Application Filing",
            description: "We file your application with USCIS and track its progress throughout the process."
          },
          {
            number: "04",
            title: "Interview Support",
            description: "We prepare you for interviews and provide guidance until your case is approved."
          }
        ]
      },
      cta: {
        title: "Ready to Start Your Journey?",
        text: "Contact us today for a consultation and take the first step toward reuniting with your family.",
        button: "Book Your Consultation"
      }
    },
    ar: {
      hero: {
        title: "خدمات التأشيرات والعائلة",
        subtitle: "لم شمل أحبائك وبناء مستقبلك في أمريكا",
        cta: "حدد موعد استشارة"
      },
      intro: {
        title: "حلول الهجرة العائلية",
        text: "نحن نتفهم أن العائلة هي كل شيء. تساعدك خدمات التأشيرات والهجرة العائلية لدينا على جمع أحبائك معًا في الولايات المتحدة. سواء كنت تقدم التماسًا لأحد أفراد الأسرة، أو تتقدم بطلب للحصول على تأشيرة خطيب، أو تسعى للحصول على تصريح عمل، فنحن هنا لإرشادك في كل خطوة."
      },
      services: [
        {
          title: "التقدم بطلبات الهجرة لأفراد العائلة",
          icon: Heart,
          description: "مساعدة أفراد العائلة على الهجرة إلى الولايات المتحدة من خلال التماسات الهجرة العائلية.",
          details: [
            "التماسات الأقارب المباشرين (الزوج/الزوجة، الأطفال، الوالدين)",
            "فئات تفضيل العائلة (الأشقاء، الأطفال المتزوجون)",
            "نموذج I-130 التماس للقريب الأجنبي",
            "إفادة الدعم (نموذج I-864)",
            "جمع الأدلة وإعداد الوثائق",
            "الإعداد للمقابلة والدعم"
          ],
          processing: "وقت المعالجة يختلف: من 6 أشهر إلى 3+ سنوات حسب الفئة",
          who: "المواطنون الأمريكيون والمقيمون الدائمون القانونيون الذين يقدمون التماسات لأفراد الأسرة المؤهلين"
        },
        {
          title: "K1 فيزا الخطوبة",
          icon: Heart,
          description: "إحضار خطيبك إلى الولايات المتحدة للزواج وبناء حياتكما معًا.",
          details: [
            "نموذج I-129F التماس للخطيب الأجنبي",
            "الإعداد لمقابلة السفارة",
            "تنسيق الفحص الطبي",
            "إثبات العلاقة الحقيقية",
            "تجميع الوثائق الداعمة",
            "متابعة تعديل الوضع بعد الزواج"
          ],
          processing: "متوسط المعالجة: 6-12 شهرًا",
          who: "المواطنون الأمريكيون المخطوبون لمواطنين أجانب الذين يخططون للزواج في غضون 90 يومًا من الدخول"
        },
        {
          title: "B1-B2 فيزا السياحة وتمديدها",
          icon: Users,
          description: "تأشيرات الزوار المؤقتة لأغراض العمل والسياحة، بما في ذلك التمديدات.",
          details: [
            "طلبات تأشيرة زائر الأعمال B-1",
            "طلبات التأشيرة السياحية B-2",
            "نموذج I-539 تمديد الإقامة",
            "طلبات تغيير الوضع",
            "إعداد خطاب الدعم",
            "توثيق خط سير الرحلة"
          ],
          processing: "معالجة التمديد: 4-8 أشهر",
          who: "المواطنون الأجانب الذين يزورون الولايات المتحدة للأعمال أو السياحة أو العلاج الطبي"
        },
        {
          title: "فيزا العمل H-1B",
          icon: Users,
          description: "تأشيرات العمل المهنية للمهن المتخصصة التي تتطلب معرفة متخصصة.",
          details: [
            "إعداد وتقديم التماس H-1B",
            "دعم طلب شرط العمل (LCA)",
            "وثائق امتثال صاحب العمل",
            "تمديدات وتجديدات H-1B",
            "نقل H-1B إلى صاحب عمل جديد",
            "طلبات تأشيرة H-4 المعالين"
          ],
          processing: "المعالجة القياسية: 3-6 أشهر؛ المعالجة المتميزة: 15 يومًا",
          who: "المهنيون الأجانب في المهن المتخصصة مع عروض عمل من أصحاب العمل الأمريكيين"
        }
      ],
      process: {
        title: "عمليتنا",
        steps: [
          {
            number: "01",
            title: "استشارة مجانية",
            description: "نقوم بتقييم حالتك وتحديد أفضل استراتيجية للهجرة لموقفك."
          },
          {
            number: "02",
            title: "إعداد الوثائق",
            description: "نقوم بإعداد جميع النماذج المطلوبة والوثائق الداعمة بدقة."
          },
          {
            number: "03",
            title: "تقديم الطلب",
            description: "نقدم طلبك إلى USCIS ونتتبع تقدمه طوال العملية."
          },
          {
            number: "04",
            title: "دعم المقابلة",
            description: "نعدك للمقابلات ونقدم التوجيه حتى تتم الموافقة على حالتك."
          }
        ]
      },
      cta: {
        title: "هل أنت مستعد لبدء رحلتك؟",
        text: "اتصل بنا اليوم للحصول على استشارة واتخاذ الخطوة الأولى نحو لم شمل عائلتك.",
        button: "احجز استشارتك"
      }
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2000)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Users className="mx-auto mb-6 text-amber-400" size={64} />
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
  );
};

export default VisasFamilyPage;
