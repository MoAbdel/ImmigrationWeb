import React from 'react';
import { FileText, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const LegalDocumentsPage = ({ language }) => {
  const content = {
    en: {
      hero: {
        title: "Legal Documents Services",
        subtitle: "Expert preparation of critical immigration and legal documents",
        cta: "Schedule Consultation"
      },
      intro: {
        title: "Professional Document Preparation Services",
        text: "Proper documentation is crucial for successful immigration cases. We provide meticulous preparation and filing of all essential legal documents, from affidavits of support to work authorization and travel documents."
      },
      services: [
        {
          title: "Affidavit of Support",
          icon: FileText,
          description: "Demonstrate financial ability to support family members immigrating to the United States.",
          details: [
            "Form I-864 Affidavit of Support preparation",
            "Income documentation and analysis",
            "Tax return compilation and verification",
            "Joint sponsor coordination (if needed)",
            "Asset documentation for alternative support",
            "Household size calculation",
            "Federal poverty guideline compliance"
          ],
          processing: "Required for most family-based immigration petitions",
          who: "U.S. citizens and lawful permanent residents sponsoring family members for immigration",
          importance: "The affidavit of support is a legally binding contract showing you can financially support your sponsored immigrant at 125% of the federal poverty line."
        },
        {
          title: "Work Authorization (EAD)",
          icon: FileText,
          description: "Obtain permission to work in the United States while your immigration case is pending.",
          details: [
            "Form I-765 Application for Employment Authorization",
            "EAD renewals and extensions",
            "Category-specific eligibility verification",
            "Supporting evidence compilation",
            "Biometrics scheduling assistance",
            "EAD replacement for lost/stolen cards"
          ],
          processing: "Processing time: 3-6 months on average",
          who: "Asylum applicants, adjustment of status applicants, H-4 and L-2 spouses, DACA recipients, and others in eligible categories",
          importance: "Employment authorization allows you to work legally in the U.S. while your permanent status application is being processed."
        },
        {
          title: "Travel Document (Advance Parole)",
          icon: FileText,
          description: "Obtain authorization to travel outside the U.S. and return while your application is pending.",
          details: [
            "Form I-131 Application for Travel Document",
            "Advance Parole applications",
            "Refugee travel document applications",
            "Re-entry permit applications",
            "Emergency travel situations",
            "Supporting justification letters"
          ],
          processing: "Processing time: 4-8 months on average",
          who: "Individuals with pending adjustment of status, asylum applicants, DACA recipients, and refugees",
          importance: "Leaving the U.S. without advance parole can abandon your pending application. This document allows safe international travel."
        },
        {
          title: "SSI/SSA/Disability Services",
          icon: FileText,
          description: "Assistance with Social Security benefits and disability applications.",
          details: [
            "Social Security card applications",
            "SSI (Supplemental Security Income) applications",
            "SSDI (Social Security Disability Insurance) support",
            "Disability benefit documentation",
            "Medical evidence compilation",
            "Appeal assistance for denied claims",
            "Representative payee applications"
          ],
          processing: "Processing varies by benefit type: 2-6 months",
          who: "U.S. citizens, permanent residents, and qualified immigrants eligible for Social Security benefits",
          importance: "Social Security benefits provide critical financial support for eligible individuals who are disabled, retired, or have limited income."
        }
      ],
      whyImportant: {
        title: "Why Professional Document Preparation Matters",
        reasons: [
          {
            title: "Accuracy is Critical",
            description: "Even minor errors in forms can lead to delays, rejections, or denials. Our experts ensure every detail is correct."
          },
          {
            title: "Compliance & Regulations",
            description: "Immigration regulations change frequently. We stay current with all requirements to ensure your documents meet standards."
          },
          {
            title: "Time & Money Savings",
            description: "Avoid costly mistakes and resubmissions. Get it right the first time with professional preparation."
          },
          {
            title: "Peace of Mind",
            description: "Know that your documents are prepared by experienced professionals who understand the system."
          }
        ]
      },
      process: {
        title: "Our Document Preparation Process",
        steps: [
          {
            number: "01",
            title: "Consultation",
            description: "We discuss your specific document needs and review eligibility."
          },
          {
            number: "02",
            title: "Information Gathering",
            description: "We collect all necessary information and supporting documents from you."
          },
          {
            number: "03",
            title: "Expert Preparation",
            description: "We prepare your documents with meticulous attention to accuracy and completeness."
          },
          {
            number: "04",
            title: "Review & Filing",
            description: "We review everything with you and file with the appropriate agency."
          }
        ]
      },
      cta: {
        title: "Get Professional Document Preparation",
        text: "Don't risk errors or delays. Let our experts handle your critical immigration documents.",
        button: "Start Your Application"
      }
    },
    ar: {
      hero: {
        title: "خدمات الوثائق القانونية",
        subtitle: "إعداد خبير للوثائق الحاسمة للهجرة والقانونية",
        cta: "حدد موعد استشارة"
      },
      intro: {
        title: "خدمات إعداد الوثائق المهنية",
        text: "التوثيق السليم أمر بالغ الأهمية لنجاح قضايا الهجرة. نحن نقدم إعدادًا وتقديمًا دقيقًا لجميع الوثائق القانونية الأساسية، من إفادات الدعم إلى تصاريح العمل ووثائق السفر."
      },
      services: [
        {
          title: "الكفالات (إفادة الدعم)",
          icon: FileText,
          description: "إثبات القدرة المالية لدعم أفراد الأسرة المهاجرين إلى الولايات المتحدة.",
          details: [
            "إعداد نموذج I-864 إفادة الدعم",
            "توثيق وتحليل الدخل",
            "تجميع والتحقق من الإقرارات الضريبية",
            "تنسيق الكفيل المشترك (إذا لزم الأمر)",
            "توثيق الأصول للدعم البديل",
            "حساب حجم الأسرة",
            "الامتثال لمبادئ خط الفقر الفيدرالي"
          ],
          processing: "مطلوب لمعظم التماسات الهجرة العائلية",
          who: "المواطنون الأمريكيون والمقيمون الدائمون القانونيون الذين يكفلون أفراد الأسرة للهجرة",
          importance: "إفادة الدعم هي عقد ملزم قانونًا يوضح أنك تستطيع دعم المهاجر الذي تكفله ماليًا بنسبة 125٪ من خط الفقر الفيدرالي."
        },
        {
          title: "تصاريح العمل (EAD)",
          icon: FileText,
          description: "الحصول على إذن للعمل في الولايات المتحدة أثناء معالجة قضية الهجرة الخاصة بك.",
          details: [
            "نموذج I-765 طلب تصريح العمل",
            "تجديدات وتمديدات EAD",
            "التحقق من الأهلية الخاصة بالفئة",
            "تجميع الأدلة الداعمة",
            "المساعدة في جدولة البيومترية",
            "استبدال EAD للبطاقات المفقودة/المسروقة"
          ],
          processing: "وقت المعالجة: 3-6 أشهر في المتوسط",
          who: "المتقدمون للجوء، المتقدمون لتعديل الوضع، أزواج H-4 و L-2، المستفيدون من DACA، وغيرهم في الفئات المؤهلة",
          importance: "يسمح لك تصريح العمل بالعمل بشكل قانوني في الولايات المتحدة أثناء معالجة طلب الحالة الدائمة الخاص بك."
        },
        {
          title: "وثائق السفر (الإفراج المسبق)",
          icon: FileText,
          description: "الحصول على إذن للسفر خارج الولايات المتحدة والعودة أثناء معالجة طلبك.",
          details: [
            "نموذج I-131 طلب وثيقة السفر",
            "طلبات الإفراج المسبق",
            "طلبات وثائق سفر اللاجئين",
            "طلبات تصريح إعادة الدخول",
            "حالات السفر الطارئة",
            "خطابات التبرير الداعمة"
          ],
          processing: "وقت المعالجة: 4-8 أشهر في المتوسط",
          who: "الأفراد الذين لديهم تعديل وضع معلق، المتقدمون للجوء، المستفيدون من DACA، واللاجئون",
          importance: "مغادرة الولايات المتحدة بدون إفراج مسبق يمكن أن يتخلى عن طلبك المعلق. تسمح هذه الوثيقة بالسفر الدولي الآمن."
        },
        {
          title: "خدمات التأمين الاجتماعي",
          icon: FileText,
          description: "المساعدة في مزايا الضمان الاجتماعي وطلبات الإعاقة.",
          details: [
            "طلبات بطاقة الضمان الاجتماعي",
            "طلبات SSI (دخل الضمان الإضافي)",
            "دعم SSDI (التأمين ضد العجز للضمان الاجتماعي)",
            "توثيق مزايا الإعاقة",
            "تجميع الأدلة الطبية",
            "المساعدة في الاستئناف للمطالبات المرفوضة",
            "طلبات المدفوع لأمره الممثل"
          ],
          processing: "المعالجة تختلف حسب نوع الميزة: 2-6 أشهر",
          who: "المواطنون الأمريكيون، المقيمون الدائمون، والمهاجرون المؤهلون المؤهلون للحصول على مزايا الضمان الاجتماعي",
          importance: "توفر مزايا الضمان الاجتماعي دعمًا ماليًا حاسمًا للأفراد المؤهلين المعوقين أو المتقاعدين أو ذوي الدخل المحدود."
        }
      ],
      whyImportant: {
        title: "لماذا يهم إعداد الوثائق المهنية",
        reasons: [
          {
            title: "الدقة أمر بالغ الأهمية",
            description: "حتى الأخطاء الطفيفة في النماذج يمكن أن تؤدي إلى تأخيرات أو رفض أو إنكار. يضمن خبراؤنا صحة كل التفاصيل."
          },
          {
            title: "الامتثال واللوائح",
            description: "تتغير لوائح الهجرة بشكل متكرر. نحن نبقى على اطلاع دائم بجميع المتطلبات لضمان استيفاء وثائقك للمعايير."
          },
          {
            title: "توفير الوقت والمال",
            description: "تجنب الأخطاء المكلفة وإعادة التقديم. احصل على النتيجة الصحيحة من المرة الأولى مع الإعداد المهني."
          },
          {
            title: "راحة البال",
            description: "اعلم أن وثائقك يتم إعدادها من قبل محترفين ذوي خبرة يفهمون النظام."
          }
        ]
      },
      process: {
        title: "عملية إعداد الوثائق لدينا",
        steps: [
          {
            number: "01",
            title: "استشارة",
            description: "نناقش احتياجات الوثائق المحددة الخاصة بك ونراجع الأهلية."
          },
          {
            number: "02",
            title: "جمع المعلومات",
            description: "نجمع جميع المعلومات والوثائق الداعمة اللازمة منك."
          },
          {
            number: "03",
            title: "الإعداد الخبير",
            description: "نعد وثائقك مع اهتمام دقيق بالدقة والاكتمال."
          },
          {
            number: "04",
            title: "المراجعة والتقديم",
            description: "نراجع كل شيء معك ونقدم إلى الوكالة المناسبة."
          }
        ]
      },
      cta: {
        title: "احصل على إعداد الوثائق المهنية",
        text: "لا تخاطر بالأخطاء أو التأخيرات. دع خبراءنا يتعاملون مع وثائق الهجرة الحاسمة الخاصة بك.",
        button: "ابدأ طلبك"
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
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FileText className="mx-auto mb-6 text-amber-400" size={64} />
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

                      <div className="p-4 bg-amber-50 rounded-lg space-y-2">
                        <div>
                          <p className="font-semibold text-slate-900">{language === 'en' ? 'Timeline:' : 'الجدول الزمني:'}</p>
                          <p className="text-gray-700">{service.processing}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{language === 'en' ? 'Who Needs This:' : 'من يحتاج هذا:'}</p>
                          <p className="text-gray-700">{service.who}</p>
                        </div>
                        {service.importance && (
                          <div>
                            <p className="font-semibold text-slate-900">{language === 'en' ? 'Why It Matters:' : 'لماذا يهم:'}</p>
                            <p className="text-gray-700">{service.importance}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Important Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">
            {t.whyImportant.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.whyImportant.reasons.map((reason, idx) => (
              <div key={idx} className="bg-slate-50 rounded-lg p-6 border-l-4 border-amber-600">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            ))}
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

export default LegalDocumentsPage;
