import React from 'react';
import BlogPostTemplate from '../BlogPostTemplate';

const ImmigrationBondHearingOrangeCounty = ({ language }) => {
  const content = {
    en: {
      slug: "immigration-bond-hearing-orange-county",
      title: "Immigration Bond Hearings in Orange County: What Families Need to Know",
      subtitle: "Understanding the process to secure release from immigration detention",
      metaTitle: "Immigration Bond Hearing Orange County | ICE Detention Release | Bond Eligibility",
      metaDescription: "Guide to immigration bond hearings in Orange County. How to get a loved one released from ICE detention, bond amounts, eligibility. Arabic support. Call (714) 421-8872.",
      keywords: "immigration bond hearing Orange County, ICE detention release, immigration bond eligibility, detained immigrant help, bond redetermination, Adelanto detention",
      category: "Immigration Court",
      location: "Orange County",
      date: "January 7, 2026",
      readTime: "12 min read",
      author: "Immigration Solution Services",
      locationIntro: "When a loved one is detained by Immigration and Customs Enforcement (ICE), families face an urgent and stressful situation. Understanding the immigration bond process can mean the difference between months of separation and a quick reunion while the immigration case proceeds. Immigration Solution Services helps Orange County families navigate the bond hearing process and secure the release of their loved ones.",

      sections: [
        {
          heading: "What is an Immigration Bond?",
          content: "An immigration bond is a payment made to secure the release of someone detained by ICE (Immigration and Customs Enforcement). The bond serves as a guarantee that the person will appear for all future immigration court hearings and comply with final orders.\n\nUnlike criminal bail, immigration bonds are administrative and can be set by either ICE or an immigration judge. The amount can range from $1,500 to $25,000 or more, depending on the circumstances."
        },
        {
          heading: "Types of Immigration Bonds",
          content: "There are two main types of immigration bonds:",
          table: {
            headers: ["Bond Type", "Description"],
            rows: [
              ["Delivery Bond", "Allows release while case proceeds; must appear at all hearings"],
              ["Voluntary Departure Bond", "Allows release to leave the U.S. voluntarily by a specific date"],
              ["ICE Bond", "Set directly by ICE, often at initial detention"],
              ["Immigration Judge Bond", "Set by judge at bond hearing, can be lower than ICE bond"],
              ["No Bond", "Person is ineligible for bond due to certain factors"]
            ]
          }
        },
        {
          heading: "Who is Eligible for Bond?",
          content: "Not everyone in immigration detention is eligible for bond release. Eligibility depends on several factors:",
          list: [
            "Not subject to mandatory detention (certain criminal convictions)",
            "Not an arriving alien (entered through port of entry)",
            "Not subject to expedited removal",
            "Not considered a flight risk or danger to community",
            "Has not been ordered removed previously",
            "Has not committed certain aggravated felonies",
            "Is not subject to administrative final order"
          ]
        },
        {
          heading: "Mandatory Detention Categories",
          content: "Certain individuals are subject to mandatory detention and cannot be released on bond:",
          list: [
            "Aggravated felony convictions (as defined by immigration law)",
            "Certain drug offenses",
            "Firearms offenses",
            "Crimes involving moral turpitude with sentences over 1 year",
            "Multiple criminal convictions",
            "Terrorist activity or national security concerns",
            "Arriving aliens without valid entry documents"
          ]
        },
        {
          heading: "Where Are Detained Immigrants Held?",
          content: "Orange County residents are typically detained at these facilities:\n\n• Adelanto ICE Processing Center: Located in San Bernardino County, the primary facility for Southern California\n\n• James A. Musick Facility: Orange County Sheriff's facility that sometimes houses ICE detainees\n\n• Theo Lacy Facility: Orange County Jail that has an ICE contract\n\n• Other Facilities: Detainees may be transferred to facilities throughout the region\n\nLocating your loved one quickly is essential for the bond process."
        },
        {
          heading: "How to Request a Bond Hearing",
          content: "Follow these steps to request a bond hearing for your loved one:",
          steps: [
            {
              title: "Locate the Detainee",
              description: "Use the ICE Online Detainee Locator or call the detention facility to confirm where your loved one is held."
            },
            {
              title: "Determine Bond Eligibility",
              description: "Review their immigration history and criminal record to assess bond eligibility."
            },
            {
              title: "Request Bond from ICE",
              description: "ICE can set a bond directly. If bond is denied or too high, proceed to immigration court."
            },
            {
              title: "Request Bond Redetermination",
              description: "File a motion for bond redetermination with the immigration court where the case is pending."
            },
            {
              title: "Prepare for Hearing",
              description: "Gather evidence showing the person is not a flight risk or danger to community."
            },
            {
              title: "Attend Bond Hearing",
              description: "Present your case to the immigration judge who will decide bond eligibility and amount."
            }
          ]
        },
        {
          heading: "Evidence for Bond Hearing",
          content: "To win a bond hearing, you must show the person is not a flight risk or danger to the community. Gather this evidence:",
          list: [
            "Length of time in the United States",
            "Family ties (marriage certificate, children's birth certificates)",
            "Employment history and current job offer",
            "Property ownership or lease agreements",
            "Community ties (church membership, volunteer work)",
            "Criminal record (or lack thereof)",
            "Immigration history and compliance",
            "Proof of financial resources to pay bond",
            "Letters of support from family, employers, community members",
            "Evidence of rehabilitation if prior criminal history"
          ]
        },
        {
          heading: "The Bond Hearing Process",
          content: "What happens at the immigration bond hearing:\n\n• Timing: Bond hearings are usually scheduled quickly, within days to weeks of the request\n\n• Location: Hearings may be in person or via video from the detention facility\n\n• Presentation: You or your attorney present evidence of community ties and non-danger\n\n• Government Response: ICE attorney may argue against release or for high bond\n\n• Decision: Judge decides whether to grant bond and sets the amount\n\n• If Denied: You can appeal to the Board of Immigration Appeals (BIA)"
        },
        {
          heading: "Bond Amounts and Payment",
          content: "Understanding bond amounts and how to pay:\n\n• Typical Amounts: Bonds generally range from $1,500 to $25,000, with most between $5,000-$15,000\n\n• Factors Affecting Amount: Criminal history, immigration history, flight risk, community ties\n\n• Payment Options: Cash bond paid directly to ICE, or surety bond through licensed bond company\n\n• Bond Companies: Charge 15-20% non-refundable fee plus collateral\n\n• Cash Bond: Full amount paid, refunded (minus fees) when case concludes and person complies\n\n• ICE Offices: Payment made at local ICE Enforcement and Removal Operations office"
        },
        {
          heading: "After Bond is Posted",
          content: "Once bond is posted, important responsibilities apply:\n\n• Release Processing: Release typically occurs within 8-24 hours of bond payment\n\n• Conditions: Must attend all court hearings and check in with ICE as required\n\n• Address Reporting: Must report any address changes within 10 days\n\n• Travel Restrictions: Cannot leave the U.S. without permission\n\n• Bond Conditions: Must comply with any specific conditions set by the judge\n\n• Consequences: Failure to appear results in bond forfeiture and arrest warrant"
        },
        {
          heading: "Bond Redetermination Requests",
          content: "If circumstances change, you can request bond redetermination:\n\n• Lower Bond: If original bond amount is too high to pay\n\n• Release After Denial: If new evidence shows eligibility\n\n• Changed Circumstances: New family ties, employment, or positive developments\n\n• Time in Detention: Prolonged detention may support release\n\n• DHS Motion: Government can also request bond revocation"
        },
        {
          heading: "Alternatives to Bond",
          content: "If bond is denied or unaffordable, other options may exist:",
          list: [
            "Order of Supervision: Release without bond with reporting requirements",
            "Parole: ICE may parole certain individuals for humanitarian reasons",
            "Habeas Corpus: Legal challenge to unlawful detention",
            "Alternatives to Detention (ATD): GPS monitoring or check-in programs",
            "Prosecutorial Discretion: Request ICE exercise discretion",
            "Stipulated Removal: Agree to leave voluntarily (loses right to fight case)"
          ]
        },
        {
          heading: "Working with Immigration Attorneys",
          content: "Professional help is strongly recommended for bond hearings:\n\n• Legal Assessment: Determine eligibility and strength of bond case\n\n• Evidence Gathering: Know what evidence is most persuasive to judges\n\n• Hearing Representation: Present arguments effectively at the hearing\n\n• Appeals: Handle appeals if bond is denied\n\n• Full Case Strategy: Bond is just one part of the overall immigration case"
        }
      ],

      faqs: [
        {
          q: "How quickly can someone be released after bond is paid?",
          a: "Release typically occurs within 8-24 hours after bond payment is processed. However, processing times can vary by facility. Weekend payments may result in longer waits. It's important to pay bond as early in the day as possible."
        },
        {
          q: "What happens to the bond money after the case is over?",
          a: "If the person attends all hearings and complies with the final order (whether granted relief or deported), the bond is returned minus a small administrative fee. If the person fails to appear, the entire bond is forfeited."
        },
        {
          q: "Can the bond amount be lowered?",
          a: "Yes, you can request a bond redetermination hearing to ask the immigration judge to lower the bond amount. This is common when the original bond set by ICE is too high for the family to afford."
        },
        {
          q: "My family member has a criminal record. Can they still get bond?",
          a: "It depends on the nature and severity of the criminal record. Some crimes trigger mandatory detention with no bond eligibility. Others may allow bond but at higher amounts. An attorney can evaluate whether bond is possible given the specific criminal history."
        },
        {
          q: "What if ICE says my family member is subject to mandatory detention?",
          a: "ICE's determination is not always final. An immigration judge can review whether mandatory detention actually applies. Sometimes ICE incorrectly categorizes individuals as mandatory detention. An attorney can challenge this at a Joseph hearing."
        },
        {
          q: "How do I find out where my family member is being held?",
          a: "Use the ICE Online Detainee Locator System (https://locator.ice.gov) or call the ICE detention reporting line at 1-888-351-4024. You'll need the person's name, date of birth, and country of origin."
        }
      ],

      cta: {
        title: "Get Help with Immigration Bond Hearings",
        text: "Our team helps Orange County families navigate the immigration bond process quickly and effectively. Time is critical when a loved one is detained.",
        button: "Schedule Emergency Consultation"
      }
    },
    ar: {
      slug: "immigration-bond-hearing-orange-county",
      title: "جلسات كفالة الهجرة في مقاطعة أورانج: ما تحتاج العائلات معرفته",
      subtitle: "فهم عملية تأمين الإفراج من احتجاز الهجرة",
      metaTitle: "جلسة كفالة الهجرة مقاطعة أورانج | إفراج احتجاز ICE | أهلية الكفالة",
      metaDescription: "دليل لجلسات كفالة الهجرة في مقاطعة أورانج. كيفية إخراج أحد أحبائك من احتجاز ICE، مبالغ الكفالة، الأهلية. دعم بالعربية. اتصل (714) 421-8872.",
      keywords: "جلسة كفالة الهجرة مقاطعة أورانج، إفراج احتجاز ICE، أهلية كفالة الهجرة، مساعدة المهاجر المحتجز",
      category: "محكمة الهجرة",
      location: "مقاطعة أورانج",
      date: "7 يناير 2026",
      readTime: "12 دقيقة قراءة",
      author: "خدمات حلول الهجرة",
      locationIntro: "عندما يُحتجز أحد أحبائك من قبل إدارة الهجرة والجمارك (ICE)، تواجه العائلات وضعًا عاجلاً ومجهدًا. فهم عملية كفالة الهجرة يمكن أن يعني الفرق بين أشهر من الانفصال ولم الشمل السريع أثناء سير قضية الهجرة. تساعد خدمات حلول الهجرة عائلات مقاطعة أورانج في التنقل في عملية جلسة الكفالة وتأمين إفراج أحبائهم.",

      sections: [
        {
          heading: "ما هي كفالة الهجرة؟",
          content: "كفالة الهجرة هي دفعة تُقدم لتأمين إفراج شخص محتجز من قبل ICE (إدارة الهجرة والجمارك). تعمل الكفالة كضمان بأن الشخص سيحضر جميع جلسات محكمة الهجرة المستقبلية ويمتثل للأوامر النهائية.\n\nعلى عكس الكفالة الجنائية، كفالات الهجرة إدارية ويمكن أن تُحدد إما من قبل ICE أو قاضي هجرة. يمكن أن يتراوح المبلغ من 1,500 دولار إلى 25,000 دولار أو أكثر، حسب الظروف."
        },
        {
          heading: "أنواع كفالات الهجرة",
          content: "هناك نوعان رئيسيان من كفالات الهجرة:",
          table: {
            headers: ["نوع الكفالة", "الوصف"],
            rows: [
              ["كفالة التسليم", "تسمح بالإفراج أثناء سير القضية؛ يجب الحضور لجميع الجلسات"],
              ["كفالة المغادرة الطوعية", "تسمح بالإفراج لمغادرة الولايات المتحدة طوعًا بتاريخ محدد"],
              ["كفالة ICE", "تُحدد مباشرة من قبل ICE، غالبًا عند الاحتجاز الأولي"],
              ["كفالة قاضي الهجرة", "تُحدد من قبل القاضي في جلسة الكفالة، يمكن أن تكون أقل من كفالة ICE"],
              ["لا كفالة", "الشخص غير مؤهل للكفالة بسبب عوامل معينة"]
            ]
          }
        },
        {
          heading: "من هو المؤهل للكفالة؟",
          content: "ليس كل من في احتجاز الهجرة مؤهلاً للإفراج بكفالة. تعتمد الأهلية على عدة عوامل:",
          list: [
            "غير خاضع للاحتجاز الإلزامي (بعض الإدانات الجنائية)",
            "ليس أجنبيًا واصلاً (دخل عبر نقطة دخول)",
            "غير خاضع للترحيل المعجل",
            "لا يُعتبر خطر هروب أو خطر على المجتمع",
            "لم يُأمر بترحيله سابقًا",
            "لم يرتكب بعض الجنايات المشددة",
            "غير خاضع لأمر إداري نهائي"
          ]
        },
        {
          heading: "فئات الاحتجاز الإلزامي",
          content: "بعض الأفراد خاضعون للاحتجاز الإلزامي ولا يمكن إفراجهم بكفالة:",
          list: [
            "إدانات الجناية المشددة (كما يحددها قانون الهجرة)",
            "بعض جرائم المخدرات",
            "جرائم الأسلحة النارية",
            "الجرائم التي تنطوي على فساد أخلاقي مع عقوبات أكثر من سنة",
            "إدانات جنائية متعددة",
            "النشاط الإرهابي أو مخاوف الأمن القومي",
            "الأجانب الواصلون بدون وثائق دخول صالحة"
          ]
        },
        {
          heading: "أين يُحتجز المهاجرون المحتجزون؟",
          content: "يُحتجز سكان مقاطعة أورانج عادةً في هذه المرافق:\n\n• مركز معالجة ICE أديلانتو: يقع في مقاطعة سان برناردينو، المرفق الرئيسي لجنوب كاليفورنيا\n\n• منشأة جيمس أ. موسيك: منشأة شريف مقاطعة أورانج التي تستضيف أحيانًا محتجزي ICE\n\n• منشأة ثيو ليسي: سجن مقاطعة أورانج الذي لديه عقد مع ICE\n\n• مرافق أخرى: قد يُنقل المحتجزون إلى مرافق في جميع أنحاء المنطقة\n\nتحديد مكان أحد أحبائك بسرعة أمر ضروري لعملية الكفالة."
        },
        {
          heading: "كيفية طلب جلسة كفالة",
          content: "اتبع هذه الخطوات لطلب جلسة كفالة لأحد أحبائك:",
          steps: [
            {
              title: "حدد موقع المحتجز",
              description: "استخدم محدد موقع محتجزي ICE عبر الإنترنت أو اتصل بمرفق الاحتجاز للتأكيد من مكان احتجاز أحد أحبائك."
            },
            {
              title: "حدد أهلية الكفالة",
              description: "راجع تاريخ هجرتهم والسجل الجنائي لتقييم أهلية الكفالة."
            },
            {
              title: "اطلب الكفالة من ICE",
              description: "يمكن لـ ICE تحديد كفالة مباشرة. إذا رُفضت الكفالة أو كانت مرتفعة جدًا، انتقل لمحكمة الهجرة."
            },
            {
              title: "اطلب إعادة تحديد الكفالة",
              description: "قدم طلبًا لإعادة تحديد الكفالة مع محكمة الهجرة حيث القضية معلقة."
            },
            {
              title: "استعد للجلسة",
              description: "اجمع أدلة تُظهر أن الشخص ليس خطر هروب أو خطر على المجتمع."
            },
            {
              title: "احضر جلسة الكفالة",
              description: "قدم قضيتك لقاضي الهجرة الذي سيقرر أهلية الكفالة ومبلغها."
            }
          ]
        },
        {
          heading: "أدلة لجلسة الكفالة",
          content: "للفوز في جلسة كفالة، يجب أن تُظهر أن الشخص ليس خطر هروب أو خطر على المجتمع. اجمع هذه الأدلة:",
          list: [
            "طول الوقت في الولايات المتحدة",
            "الروابط العائلية (شهادة زواج، شهادات ميلاد الأطفال)",
            "تاريخ التوظيف وعرض العمل الحالي",
            "ملكية العقارات أو اتفاقيات الإيجار",
            "الروابط المجتمعية (عضوية الكنيسة، العمل التطوعي)",
            "السجل الجنائي (أو عدمه)",
            "تاريخ الهجرة والامتثال",
            "إثبات الموارد المالية لدفع الكفالة",
            "خطابات دعم من العائلة وأصحاب العمل وأعضاء المجتمع",
            "أدلة إعادة التأهيل إذا كان هناك تاريخ جنائي سابق"
          ]
        },
        {
          heading: "عملية جلسة الكفالة",
          content: "ماذا يحدث في جلسة كفالة الهجرة:\n\n• التوقيت: تُجدول جلسات الكفالة عادةً بسرعة، خلال أيام إلى أسابيع من الطلب\n\n• الموقع: قد تكون الجلسات شخصية أو عبر الفيديو من مرفق الاحتجاز\n\n• العرض: أنت أو محاميك تقدم أدلة الروابط المجتمعية وعدم الخطورة\n\n• استجابة الحكومة: قد يجادل محامي ICE ضد الإفراج أو لكفالة مرتفعة\n\n• القرار: يقرر القاضي ما إذا كان سيمنح الكفالة ويحدد المبلغ\n\n• إذا رُفضت: يمكنك الاستئناف لمجلس استئناف الهجرة (BIA)"
        },
        {
          heading: "مبالغ الكفالة والدفع",
          content: "فهم مبالغ الكفالة وكيفية الدفع:\n\n• المبالغ النموذجية: تتراوح الكفالات عمومًا من 1,500 دولار إلى 25,000 دولار، معظمها بين 5,000-15,000 دولار\n\n• العوامل المؤثرة على المبلغ: التاريخ الجنائي، تاريخ الهجرة، خطر الهروب، الروابط المجتمعية\n\n• خيارات الدفع: كفالة نقدية تُدفع مباشرة لـ ICE، أو كفالة ضمان من خلال شركة كفالة مرخصة\n\n• شركات الكفالة: تتقاضى 15-20% رسوم غير قابلة للاسترداد بالإضافة إلى ضمان\n\n• الكفالة النقدية: يُدفع المبلغ بالكامل، ويُسترد (ناقص الرسوم) عند انتهاء القضية وامتثال الشخص\n\n• مكاتب ICE: يُسدد الدفع في مكتب عمليات الإنفاذ والترحيل المحلي لـ ICE"
        },
        {
          heading: "بعد إيداع الكفالة",
          content: "بمجرد إيداع الكفالة، تُطبق مسؤوليات مهمة:\n\n• معالجة الإفراج: يحدث الإفراج عادةً خلال 8-24 ساعة من دفع الكفالة\n\n• الشروط: يجب حضور جميع جلسات المحكمة والتسجيل مع ICE كما هو مطلوب\n\n• الإبلاغ عن العنوان: يجب الإبلاغ عن أي تغييرات في العنوان خلال 10 أيام\n\n• قيود السفر: لا يمكن مغادرة الولايات المتحدة بدون إذن\n\n• شروط الكفالة: يجب الامتثال لأي شروط محددة يحددها القاضي\n\n• العواقب: عدم الحضور يؤدي إلى مصادرة الكفالة وأمر اعتقال"
        },
        {
          heading: "طلبات إعادة تحديد الكفالة",
          content: "إذا تغيرت الظروف، يمكنك طلب إعادة تحديد الكفالة:\n\n• كفالة أقل: إذا كان مبلغ الكفالة الأصلي مرتفعًا جدًا للدفع\n\n• الإفراج بعد الرفض: إذا أظهرت أدلة جديدة الأهلية\n\n• ظروف متغيرة: روابط عائلية جديدة، توظيف، أو تطورات إيجابية\n\n• الوقت في الاحتجاز: الاحتجاز المطول قد يدعم الإفراج\n\n• طلب DHS: يمكن للحكومة أيضًا طلب إلغاء الكفالة"
        },
        {
          heading: "بدائل الكفالة",
          content: "إذا رُفضت الكفالة أو كانت غير قابلة للتحمل، قد توجد خيارات أخرى:",
          list: [
            "أمر الإشراف: الإفراج بدون كفالة مع متطلبات الإبلاغ",
            "الإفراج المشروط: قد يُفرج ICE عن بعض الأفراد لأسباب إنسانية",
            "أمر الإحضار: تحدٍ قانوني للاحتجاز غير القانوني",
            "بدائل الاحتجاز (ATD): مراقبة GPS أو برامج التسجيل",
            "السلطة التقديرية للنيابة: اطلب من ICE ممارسة السلطة التقديرية",
            "الترحيل بالتراضي: وافق على المغادرة طوعًا (تفقد الحق في محاربة القضية)"
          ]
        },
        {
          heading: "العمل مع محامي الهجرة",
          content: "يُوصى بشدة بالمساعدة المهنية لجلسات الكفالة:\n\n• التقييم القانوني: تحديد الأهلية وقوة قضية الكفالة\n\n• جمع الأدلة: معرفة الأدلة الأكثر إقناعًا للقضاة\n\n• تمثيل الجلسة: تقديم الحجج بفعالية في الجلسة\n\n• الاستئنافات: التعامل مع الاستئنافات إذا رُفضت الكفالة\n\n• استراتيجية القضية الكاملة: الكفالة جزء واحد فقط من قضية الهجرة الإجمالية"
        }
      ],

      faqs: [
        {
          q: "ما مدى سرعة إفراج شخص بعد دفع الكفالة؟",
          a: "يحدث الإفراج عادةً خلال 8-24 ساعة بعد معالجة دفع الكفالة. ومع ذلك، يمكن أن تختلف أوقات المعالجة حسب المرفق. المدفوعات في عطلة نهاية الأسبوع قد تؤدي إلى انتظار أطول. من المهم دفع الكفالة في أبكر وقت ممكن من اليوم."
        },
        {
          q: "ماذا يحدث لأموال الكفالة بعد انتهاء القضية؟",
          a: "إذا حضر الشخص جميع الجلسات وامتثل للأمر النهائي (سواء مُنح الإعفاء أو رُحل)، تُعاد الكفالة ناقص رسوم إدارية صغيرة. إذا لم يحضر الشخص، تُصادر الكفالة بالكامل."
        },
        {
          q: "هل يمكن تخفيض مبلغ الكفالة؟",
          a: "نعم، يمكنك طلب جلسة إعادة تحديد الكفالة لمطالبة قاضي الهجرة بتخفيض مبلغ الكفالة. هذا شائع عندما تكون الكفالة الأصلية التي حددها ICE مرتفعة جدًا لتحملها العائلة."
        },
        {
          q: "لدى فرد من عائلتي سجل جنائي. هل يمكنهم الحصول على كفالة؟",
          a: "يعتمد ذلك على طبيعة وشدة السجل الجنائي. بعض الجرائم تفعل الاحتجاز الإلزامي بدون أهلية للكفالة. قد تسمح أخرى بالكفالة لكن بمبالغ أعلى. يمكن للمحامي تقييم ما إذا كانت الكفالة ممكنة بالنظر للتاريخ الجنائي المحدد."
        },
        {
          q: "ماذا لو قال ICE أن فرد عائلتي خاضع للاحتجاز الإلزامي؟",
          a: "تحديد ICE ليس نهائيًا دائمًا. يمكن لقاضي الهجرة مراجعة ما إذا كان الاحتجاز الإلزامي ينطبق فعلاً. أحيانًا يُصنف ICE الأفراد بشكل غير صحيح كاحتجاز إلزامي. يمكن للمحامي الطعن في هذا في جلسة Joseph."
        },
        {
          q: "كيف أعرف أين يُحتجز فرد عائلتي؟",
          a: "استخدم نظام محدد موقع محتجزي ICE عبر الإنترنت (https://locator.ice.gov) أو اتصل بخط الإبلاغ عن الاحتجاز في ICE على 1-888-351-4024. ستحتاج اسم الشخص وتاريخ ميلاده وبلد المنشأ."
        }
      ],

      cta: {
        title: "احصل على مساعدة في جلسات كفالة الهجرة",
        text: "يساعد فريقنا عائلات مقاطعة أورانج في التنقل في عملية كفالة الهجرة بسرعة وفعالية. الوقت حاسم عندما يكون أحد أحبائك محتجزًا.",
        button: "جدول استشارة طوارئ"
      }
    }
  };

  return <BlogPostTemplate content={content} language={language} />;
};

export default ImmigrationBondHearingOrangeCounty;
