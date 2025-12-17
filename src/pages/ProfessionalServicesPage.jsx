import React from 'react';
import { ScrollText, Languages, Stamp, FileCheck, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfessionalServicesPage = ({ language }) => {
  const content = {
    en: {
      hero: {
        title: "Professional Services",
        subtitle: "Translation, notary, and legal document services you can trust",
        cta: "Schedule Consultation"
      },
      intro: {
        title: "Comprehensive Professional Services",
        text: "Beyond immigration, we offer essential professional services including certified translation, notary public services, and divorce filing assistance. All services are provided with the same care and attention to detail you expect from immigration professionals."
      },
      services: [
        {
          title: "Translation Services",
          icon: Languages,
          description: "Accurate, certified translation services for all your legal and official documents.",
          details: [
            "English to Arabic and Arabic to English translation",
            "Certified translations for USCIS submissions",
            "Birth certificates, marriage certificates, divorce decrees",
            "Academic transcripts and diplomas",
            "Medical records and reports",
            "Legal documents and contracts",
            "Business documents",
            "Court-certified translations when required"
          ],
          turnaround: "Standard: 3-5 business days; Rush service available",
          who: "Anyone needing official translation of foreign language documents for immigration, legal, academic, or business purposes",
          certification: "All translations include a certificate of accuracy and can be notarized if required by USCIS or other agencies."
        },
        {
          title: "Notary Public Services",
          icon: Stamp,
          description: "Professional notary services for all your document authentication needs.",
          details: [
            "Affidavits and sworn statements",
            "Power of attorney documents",
            "Immigration document notarization",
            "Contract and agreement notarization",
            "Copy certification",
            "Acknowledgments and jurats",
            "Bilingual notary services (English/Arabic)",
            "Mobile notary services available"
          ],
          turnaround: "Same-day service available; walk-ins welcome",
          who: "Anyone requiring official notarization of documents for legal, financial, or immigration purposes",
          certification: "Our commissioned notary public is authorized by the state to perform all notarial acts in accordance with state law."
        },
        {
          title: "Divorce Filing Services",
          icon: FileCheck,
          description: "Compassionate assistance with divorce document preparation and filing.",
          details: [
            "Uncontested divorce petition preparation",
            "Form completion and filing assistance",
            "Marital settlement agreement preparation",
            "Child custody and support documentation",
            "Property division documents",
            "Court filing and service assistance",
            "Bilingual support throughout the process",
            "Guidance on court procedures"
          ],
          turnaround: "Initial consultation within 2 business days; filing timeline varies by case complexity",
          who: "Individuals seeking uncontested divorce in California",
          certification: "We provide document preparation services only. We are not attorneys and cannot provide legal advice. For contested divorces or complex legal matters, we can refer you to qualified family law attorneys."
        }
      ],
      whyChoose: {
        title: "Why Choose Our Professional Services",
        reasons: [
          {
            icon: Languages,
            title: "Bilingual Expertise",
            description: "Fluent in English and Arabic, we ensure nothing is lost in translation and provide clear communication."
          },
          {
            icon: CheckCircle,
            title: "Certified & Authorized",
            description: "Our translations are USCIS-compliant and our notary is state-commissioned for your peace of mind."
          },
          {
            icon: ScrollText,
            title: "Immigration Experience",
            description: "We understand how these services fit into your immigration journey and ensure compliance."
          },
          {
            icon: FileCheck,
            title: "Attention to Detail",
            description: "Every document is carefully reviewed for accuracy and completeness before delivery."
          }
        ]
      },
      pricing: {
        title: "Transparent Pricing",
        note: "We believe in honest, upfront pricing with no hidden fees. Contact us for a detailed quote based on your specific needs.",
        categories: [
          {
            service: "Translation",
            starting: "$30 per page",
            details: "Certified translation with certificate of accuracy"
          },
          {
            service: "Notary Services",
            starting: "$15 per signature",
            details: "Additional documents at reduced rate"
          },
          {
            service: "Divorce Filing",
            starting: "$300",
            details: "Uncontested divorce document preparation"
          }
        ]
      },
      process: {
        title: "How It Works",
        steps: [
          {
            number: "01",
            title: "Contact Us",
            description: "Reach out by phone, email, or visit our office to discuss your needs."
          },
          {
            number: "02",
            title: "Get a Quote",
            description: "We provide transparent pricing based on your specific requirements."
          },
          {
            number: "03",
            title: "Submit Documents",
            description: "Provide the documents that need translation, notarization, or filing."
          },
          {
            number: "04",
            title: "Receive Services",
            description: "Get your completed, certified documents ready for submission."
          }
        ]
      },
      cta: {
        title: "Need Professional Services Today?",
        text: "From translation to notarization, we're here to help with all your document needs.",
        button: "Get Started Now"
      }
    },
    ar: {
      hero: {
        title: "الخدمات المهنية",
        subtitle: "خدمات الترجمة والتوثيق والوثائق القانونية التي يمكنك الوثوق بها",
        cta: "حدد موعد استشارة"
      },
      intro: {
        title: "الخدمات المهنية الشاملة",
        text: "بالإضافة إلى الهجرة، نقدم خدمات مهنية أساسية بما في ذلك الترجمة المعتمدة، وخدمات التوثيق العام، والمساعدة في تقديم الطلاق. يتم تقديم جميع الخدمات بنفس الرعاية والاهتمام بالتفاصيل التي تتوقعها من متخصصي الهجرة."
      },
      services: [
        {
          title: "خدمات الترجمة",
          icon: Languages,
          description: "خدمات ترجمة دقيقة ومعتمدة لجميع المستندات القانونية والرسمية.",
          details: [
            "الترجمة من الإنجليزية إلى العربية ومن العربية إلى الإنجليزية",
            "ترجمات معتمدة لتقديمها إلى USCIS",
            "شهادات الميلاد وشهادات الزواج ومراسيم الطلاق",
            "النصوص الأكاديمية والدبلومات",
            "السجلات والتقارير الطبية",
            "الوثائق والعقود القانونية",
            "وثائق الأعمال",
            "الترجمات المعتمدة من المحكمة عند الحاجة"
          ],
          turnaround: "قياسي: 3-5 أيام عمل؛ خدمة سريعة متاحة",
          who: "أي شخص يحتاج إلى ترجمة رسمية للوثائق بلغة أجنبية للهجرة أو الأغراض القانونية أو الأكاديمية أو التجارية",
          certification: "تتضمن جميع الترجمات شهادة دقة ويمكن توثيقها إذا كانت مطلوبة من قبل USCIS أو وكالات أخرى."
        },
        {
          title: "خدمات التوثيق العام",
          icon: Stamp,
          description: "خدمات التوثيق المهنية لجميع احتياجات مصادقة المستندات الخاصة بك.",
          details: [
            "الإفادات والبيانات المحلفة",
            "وثائق التوكيل",
            "توثيق وثائق الهجرة",
            "توثيق العقود والاتفاقيات",
            "تصديق النسخ",
            "الإقرارات والأيمان",
            "خدمات التوثيق ثنائية اللغة (الإنجليزية/العربية)",
            "خدمات التوثيق المتنقلة متاحة"
          ],
          turnaround: "خدمة في نفس اليوم متاحة؛ الزيارات الفجائية مرحب بها",
          who: "أي شخص يحتاج إلى توثيق رسمي للمستندات للأغراض القانونية أو المالية أو الهجرة",
          certification: "موثقنا العام المعتمد مخول من قبل الولاية لأداء جميع الإجراءات التوثيقية وفقًا لقانون الولاية."
        },
        {
          title: "خدمات تقديم الطلاق",
          icon: FileCheck,
          description: "المساعدة الرحيمة في إعداد وثائق الطلاق وتقديمها.",
          details: [
            "إعداد التماس الطلاق غير المتنازع عليه",
            "إكمال النموذج والمساعدة في التقديم",
            "إعداد اتفاقية التسوية الزوجية",
            "وثائق حضانة الأطفال والنفقة",
            "وثائق تقسيم الممتلكات",
            "المساعدة في تقديم المحكمة والخدمة",
            "الدعم ثنائي اللغة طوال العملية",
            "التوجيه بشأن إجراءات المحكمة"
          ],
          turnaround: "الاستشارة الأولية في غضون يومي عمل؛ الجدول الزمني للتقديم يختلف حسب تعقيد الحالة",
          who: "الأفراد الذين يسعون للحصول على طلاق غير متنازع عليه في كاليفورنيا",
          certification: "نحن نقدم خدمات إعداد الوثائق فقط. نحن لسنا محامين ولا يمكننا تقديم المشورة القانونية. بالنسبة للطلاق المتنازع عليه أو المسائل القانونية المعقدة، يمكننا إحالتك إلى محامي قانون الأسرة المؤهلين."
        }
      ],
      whyChoose: {
        title: "لماذا تختار خدماتنا المهنية",
        reasons: [
          {
            icon: Languages,
            title: "خبرة ثنائية اللغة",
            description: "نتحدث بطلاقة الإنجليزية والعربية، ونضمن عدم فقدان أي شيء في الترجمة ونوفر تواصلًا واضحًا."
          },
          {
            icon: CheckCircle,
            title: "معتمد ومخول",
            description: "ترجماتنا متوافقة مع USCIS وموثقنا معتمد من الولاية لراحة بالك."
          },
          {
            icon: ScrollText,
            title: "خبرة الهجرة",
            description: "نحن نفهم كيف تتناسب هذه الخدمات مع رحلة الهجرة الخاصة بك ونضمن الامتثال."
          },
          {
            icon: FileCheck,
            title: "الاهتمام بالتفاصيل",
            description: "يتم مراجعة كل وثيقة بعناية من حيث الدقة والاكتمال قبل التسليم."
          }
        ]
      },
      pricing: {
        title: "تسعير شفاف",
        note: "نحن نؤمن بالتسعير الصادق والمقدم بدون رسوم خفية. اتصل بنا للحصول على عرض أسعار مفصل بناءً على احتياجاتك المحددة.",
        categories: [
          {
            service: "الترجمة",
            starting: "$30 لكل صفحة",
            details: "ترجمة معتمدة مع شهادة دقة"
          },
          {
            service: "خدمات التوثيق",
            starting: "$15 لكل توقيع",
            details: "وثائق إضافية بسعر مخفض"
          },
          {
            service: "تقديم الطلاق",
            starting: "$300",
            details: "إعداد وثائق الطلاق غير المتنازع عليه"
          }
        ]
      },
      process: {
        title: "كيف يعمل",
        steps: [
          {
            number: "01",
            title: "اتصل بنا",
            description: "تواصل عبر الهاتف أو البريد الإلكتروني أو قم بزيارة مكتبنا لمناقشة احتياجاتك."
          },
          {
            number: "02",
            title: "احصل على عرض أسعار",
            description: "نحن نقدم أسعارًا شفافة بناءً على متطلباتك المحددة."
          },
          {
            number: "03",
            title: "إرسال الوثائق",
            description: "قدم الوثائق التي تحتاج إلى ترجمة أو توثيق أو تقديم."
          },
          {
            number: "04",
            title: "استلام الخدمات",
            description: "احصل على مستنداتك المكتملة والمعتمدة جاهزة للتقديم."
          }
        ]
      },
      cta: {
        title: "هل تحتاج خدمات مهنية اليوم؟",
        text: "من الترجمة إلى التوثيق، نحن هنا للمساعدة في جميع احتياجات المستندات الخاصة بك.",
        button: "ابدأ الآن"
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
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollText className="mx-auto mb-6 text-amber-400" size={64} />
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
                        <h4 className="font-bold text-slate-900 mb-2">{language === 'en' ? 'Our Services Include:' : 'خدماتنا تشمل:'}</h4>
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
                          <p className="font-semibold text-slate-900">{language === 'en' ? 'Turnaround Time:' : 'وقت التسليم:'}</p>
                          <p className="text-gray-700">{service.turnaround}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{language === 'en' ? 'Who Needs This:' : 'من يحتاج هذا:'}</p>
                          <p className="text-gray-700">{service.who}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{language === 'en' ? 'Certification:' : 'الشهادة:'}</p>
                          <p className="text-gray-700">{service.certification}</p>
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

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">
            {t.whyChoose.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.whyChoose.reasons.map((reason, idx) => {
              const IconComponent = reason.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-700">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold mb-6 text-center">
            {t.pricing.title}
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            {t.pricing.note}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.pricing.categories.map((category, idx) => (
              <div key={idx} className="bg-slate-800 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-amber-400 mb-3">{category.service}</h3>
                <p className="text-3xl font-bold mb-3">{category.starting}</p>
                <p className="text-gray-300 text-sm">{category.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">
            {t.process.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.process.steps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-amber-600 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
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

export default ProfessionalServicesPage;
