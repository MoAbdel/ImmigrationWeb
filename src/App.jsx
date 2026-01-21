import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Users, Flag, FileText, ScrollText, Heart, Award, Shield } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SupportBubble from './components/SupportBubble';
import ExitIntentModal from './components/ExitIntentModal';

// Pages
import HomePage from './pages/HomePage';
import VisasFamilyPage from './pages/VisasFamilyPage';
import StatusCitizenshipPage from './pages/StatusCitizenshipPage';
import LegalDocumentsPage from './pages/LegalDocumentsPage';
import ProfessionalServicesPage from './pages/ProfessionalServicesPage';

// Blog
import BlogPage from './pages/blog/BlogPage';
import FamilyImmigrationPage from './pages/FamilyImmigrationPage';
import AsylumServicesPage from './pages/AsylumServicesPage';
import CitizenshipPage from './pages/CitizenshipPage';
import DACAServicesPage from './pages/DACAServicesPage';
import GreenCardServicesPage from './pages/GreenCardServicesPage';

// City Pages
import IrvinePage from './pages/cities/IrvinePage';
import AnaheimPage from './pages/cities/AnaheimPage';
import LosAngelesPage from './pages/cities/LosAngelesPage';
import SantaAnaPage from './pages/cities/SantaAnaPage';

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
import DACAReviewalI821DHemet from './pages/blog/posts/DACAReviewalI821DHemet';
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
import UVisaCrimeVictimsSantaAna from './pages/blog/posts/UVisaCrimeVictimsSantaAna';
import TPSTemporaryProtectedStatusLongBeach from './pages/blog/posts/TPSTemporaryProtectedStatusLongBeach';
import B1B2VisaExtensionFullerton from './pages/blog/posts/B1B2VisaExtensionFullerton';
import N600CertificateCitizenshipCostaMesa from './pages/blog/posts/N600CertificateCitizenshipCostaMesa';
import I601WaiverEscondido from './pages/blog/posts/I601WaiverEscondido';
import HumanitarianParoleFontana from './pages/blog/posts/HumanitarianParoleFontana';
import PublicChargeRulePomona from './pages/blog/posts/PublicChargeRulePomona';
import I864AJointSponsorTorrance from './pages/blog/posts/I864AJointSponsorTorrance';
import TNVisaSanBernardino from './pages/blog/posts/TNVisaSanBernardino';
import ExpeditedNaturalizationVista from './pages/blog/posts/ExpeditedNaturalizationVista';
import E2TreatyInvestorAnaheim from './pages/blog/posts/E2TreatyInvestorAnaheim';
import YemeniRefugeeSupportElCajon from './pages/blog/posts/YemeniRefugeeSupportElCajon';
import MarriageFraudDefenseGardenGrove from './pages/blog/posts/MarriageFraudDefenseGardenGrove';
import N648MedicalWaiverSanDiego from './pages/blog/posts/N648MedicalWaiverSanDiego';
import USCISCaseStatusLosAngeles from './pages/blog/posts/USCISCaseStatusLosAngeles';
import I130UnmarriedChildrenRiverside from './pages/blog/posts/I130UnmarriedChildrenRiverside';
import CitizenshipMarriageCorona from './pages/blog/posts/CitizenshipMarriageCorona';
import IraqiSIVElCajon from './pages/blog/posts/IraqiSIVElCajon';
import K3SpouseVisaOntario from './pages/blog/posts/K3SpouseVisaOntario';
import AvoidingImmigrationScamsAnaheim from './pages/blog/posts/AvoidingImmigrationScamsAnaheim';
import EB2NIWWestminster from './pages/blog/posts/EB2NIWWestminster';
import H4EADWorkPermitBuenaPark from './pages/blog/posts/H4EADWorkPermitBuenaPark';
import DeportationDefensePasadena from './pages/blog/posts/DeportationDefensePasadena';
import PalestinianAsylumChulaVista from './pages/blog/posts/PalestinianAsylumChulaVista';
import ChildStatusProtectionActHuntingtonBeach from './pages/blog/posts/ChildStatusProtectionActHuntingtonBeach';
import I290BMotionReopenLakeForest from './pages/blog/posts/I290BMotionReopenLakeForest';
import DeferredInspectionMissionViejo from './pages/blog/posts/DeferredInspectionMissionViejo';
import AdoptionImmigrationWhittier from './pages/blog/posts/AdoptionImmigrationWhittier';
import EmploymentVerificationI9Downey from './pages/blog/posts/EmploymentVerificationI9Downey';
import ArabSeniorResourcesSantaClarita from './pages/blog/posts/ArabSeniorResourcesSantaClarita';
import WidowWidowerImmigrationRiverside from './pages/blog/posts/WidowWidowerImmigrationRiverside';
import NaturalizationFeeWaiverElCajon from './pages/blog/posts/NaturalizationFeeWaiverElCajon';
import EB1AExtraordinaryAbilityLaJolla from './pages/blog/posts/EB1AExtraordinaryAbilityLaJolla';
import LebaneseCommunityResourcesOrangeCounty from './pages/blog/posts/LebaneseCommunityResourcesOrangeCounty';
import EmergencyAdvanceParoleCorona from './pages/blog/posts/EmergencyAdvanceParoleCorona';
import MarriageCertificateAuthenticationTemecula from './pages/blog/posts/MarriageCertificateAuthenticationTemecula';
import AsylumInterviewPreparationSanDiego from './pages/blog/posts/AsylumInterviewPreparationSanDiego';
import ReligiousWorkerR1VisaGlendale from './pages/blog/posts/ReligiousWorkerR1VisaGlendale';
import I751WaiverDivorcedCouplesOntario from './pages/blog/posts/I751WaiverDivorcedCouplesOntario';
import EgyptianCommunityResourcesAnaheim from './pages/blog/posts/EgyptianCommunityResourcesAnaheim';
import O1ArtistVisaGlendale from './pages/blog/posts/O1ArtistVisaGlendale';
import I140PriorityDateSantaAna from './pages/blog/posts/I140PriorityDateSantaAna';
import GrandparentVisitorVisaMurrieta from './pages/blog/posts/GrandparentVisitorVisaMurrieta';
import JordanianCommunityResourcesChinoHills from './pages/blog/posts/JordanianCommunityResourcesChinoHills';
import CATProtectionElCajon from './pages/blog/posts/CATProtectionElCajon';
import EB3UnskilledWorkerOntario from './pages/blog/posts/EB3UnskilledWorkerOntario';
import BirthCertificateCorrectionGardenGrove from './pages/blog/posts/BirthCertificateCorrectionGardenGrove';
import F3MarriedChildrenLongBeach from './pages/blog/posts/F3MarriedChildrenLongBeach';
import DualIntentVisaIrvine from './pages/blog/posts/DualIntentVisaIrvine';
import ArabWomenEntrepreneursOC from './pages/blog/posts/ArabWomenEntrepreneursOC';
import AfghanSIVElCajon from './pages/blog/posts/AfghanSIVElCajon';
import BiometricsAppointmentAnaheim from './pages/blog/posts/BiometricsAppointmentAnaheim';
import ImmigrationCourtHearingLosAngeles from './pages/blog/posts/ImmigrationCourtHearingLosAngeles';
import DiversityVisaLotteryIrvine from './pages/blog/posts/DiversityVisaLotteryIrvine';
import ComboCardEADSanDiego from './pages/blog/posts/ComboCardEADSanDiego';
import USCISExpediteRequestRiverside from './pages/blog/posts/USCISExpediteRequestRiverside';
import I20TransferFullerton from './pages/blog/posts/I20TransferFullerton';
import VisaStampingUSConsulatesGlendale from './pages/blog/posts/VisaStampingUSConsulatesGlendale';
import UnlawfulPresenceWaiverSantaAna from './pages/blog/posts/UnlawfulPresenceWaiverSantaAna';
import ImmigrationBondHearingOrangeCounty from './pages/blog/posts/ImmigrationBondHearingOrangeCounty';
import WithholdingOfRemovalHemet from './pages/blog/posts/WithholdingOfRemovalHemet';
import F1VisaReinstatementClaremont from './pages/blog/posts/F1VisaReinstatementClaremont';
import SSABenefitsImmigrantsNorwalk from './pages/blog/posts/SSABenefitsImmigrantsNorwalk';
import StokesInterviewPrepBrea from './pages/blog/posts/StokesInterviewPrepBrea';
import I130PriorityDateWaitTustin from './pages/blog/posts/I130PriorityDateWaitTustin';
import NaturalizationCriminalRecordRedlands from './pages/blog/posts/NaturalizationCriminalRecordRedlands';
import SB1ReturningResidentMorenoValley from './pages/blog/posts/SB1ReturningResidentMorenoValley';
import I864IncomeRequirementsUpland from './pages/blog/posts/I864IncomeRequirementsUpland';
import SudaneseTpsNationalCity from './pages/blog/posts/SudaneseTpsNationalCity';
import EmploymentGreenCardPriorityLagunaHills from './pages/blog/posts/EmploymentGreenCardPriorityLagunaHills';
import ConsularInterviewPrepSanClemente from './pages/blog/posts/ConsularInterviewPrepSanClemente';
import O1VisaExtraordinaryAbilityPasadena from './pages/blog/posts/O1VisaExtraordinaryAbilityPasadena';
import J1VisaWaiverFullerton from './pages/blog/posts/J1VisaWaiverFullerton';
import TNVisaProfessionalsChulaVista from './pages/blog/posts/TNVisaProfessionalsChulaVista';
import RemovalProceedingsDefenseLongBeach from './pages/blog/posts/RemovalProceedingsDefenseLongBeach';
import I601InadmissibilityWaiverSanBernardino from './pages/blog/posts/I601InadmissibilityWaiverSanBernardino';
import I212PermissionReapplyFontana from './pages/blog/posts/I212PermissionReapplyFontana';
import SpecialImmigrantJuvenileStatusPomona from './pages/blog/posts/SpecialImmigrantJuvenileStatusPomona';
import CATProtectionEscondido from './pages/blog/posts/CATProtectionEscondido';
import PublicChargeRanchoCucamonga from './pages/blog/posts/PublicChargeRanchoCucamonga';
import B1B2VisaExtensionNewportBeach from './pages/blog/posts/B1B2VisaExtensionNewportBeach';
import H4EADMissionViejo from './pages/blog/posts/H4EADMissionViejo';
import DACARenevwalSantaAna from './pages/blog/posts/DACARenevwalSantaAna';
import EB5RegionalCenterBeverlyHills from './pages/blog/posts/EB5RegionalCenterBeverlyHills';
import I140PremiumProcessingLagunaNiguel from './pages/blog/posts/I140PremiumProcessingLagunaNiguel';
import SyrianTPSExtensionVista from './pages/blog/posts/SyrianTPSExtensionVista';
import WidowWidowerGreenCardDowney from './pages/blog/posts/WidowWidowerGreenCardDowney';
import R1ReligiousWorkerVisaGlendale from './pages/blog/posts/R1ReligiousWorkerVisaGlendale';
import K2FianceChildVisaGardenGrove from './pages/blog/posts/K2FianceChildVisaGardenGrove';
import UVisaWorkAuthorizationPomona from './pages/blog/posts/UVisaWorkAuthorizationPomona';
import AdjustmentInterviewTustin from './pages/blog/posts/AdjustmentInterviewTustin';
import I131TravelAuthorizationMurrieta from './pages/blog/posts/I131TravelAuthorizationMurrieta';
import LebaneseAsylumOceanside from './pages/blog/posts/LebaneseAsylumOceanside';
import EB4SpecialImmigrantLaMirada from './pages/blog/posts/EB4SpecialImmigrantLaMirada';
import DeferredActionRequestTorrance from './pages/blog/posts/DeferredActionRequestTorrance';
import EgyptianFamilyPetitionAnaheim from './pages/blog/posts/EgyptianFamilyPetitionAnaheim';
import I765WorkPermitRenewalSantaClarita from './pages/blog/posts/I765WorkPermitRenewalSantaClarita';
import I94ArrivalDepartureArcadia from './pages/blog/posts/I94ArrivalDepartureArcadia';
import F1STEMOPTFountainValley from './pages/blog/posts/F1STEMOPTFountainValley';
import VAWASelfPetitionAlisoViejo from './pages/blog/posts/VAWASelfPetitionAlisoViejo';
import CitizenshipOathCeremonyYorbaLinda from './pages/blog/posts/CitizenshipOathCeremonyYorbaLinda';
import H2BSeasonalWorkerOxnard from './pages/blog/posts/H2BSeasonalWorkerOxnard';
import VisaOverstayHelpHesperia from './pages/blog/posts/VisaOverstayHelpHesperia';
import FamilyRelationshipEvidenceCerritos from './pages/blog/posts/FamilyRelationshipEvidenceCerritos';
import EB1BOutstandingResearcherCalabasas from './pages/blog/posts/EB1BOutstandingResearcherCalabasas';
import N470TravelNaturalizationThousandOaks from './pages/blog/posts/N470TravelNaturalizationThousandOaks';
import ImmigrationHealthInsuranceLakewood from './pages/blog/posts/ImmigrationHealthInsuranceLakewood';
import IraqiAsyleeAdjustmentLancaster from './pages/blog/posts/IraqiAsyleeAdjustmentLancaster';
import YemeniFamilyPetitionSanMarcos from './pages/blog/posts/YemeniFamilyPetitionSanMarcos';
import GreenCardPhotoServiceLakeElsinore from './pages/blog/posts/GreenCardPhotoServiceLakeElsinore';
import I797NoticeActionBellflower from './pages/blog/posts/I797NoticeActionBellflower';
import AsylumClockWorkAuthorizationPerris from './pages/blog/posts/AsylumClockWorkAuthorizationPerris';
import IraqiChaldeanFamilyNationalCity from './pages/blog/posts/IraqiChaldeanFamilyNationalCity';
import MarriageVisaTimelineDiamondBar from './pages/blog/posts/MarriageVisaTimelineDiamondBar';
import F2DependentVisaPlacentia from './pages/blog/posts/F2DependentVisaPlacentia';
import CitizenshipTestAccommodationsAppleValley from './pages/blog/posts/CitizenshipTestAccommodationsAppleValley';
import ImmigrationAttorneyVsPreparerCypress from './pages/blog/posts/ImmigrationAttorneyVsPreparerCypress';
import SyrianRefugeeGreenCardEncinitas from './pages/blog/posts/SyrianRefugeeGreenCardEncinitas';
import ImmigrationConsequencesCrimesGlendora from './pages/blog/posts/ImmigrationConsequencesCrimesGlendora';
import I864PovertyGuidelinesPicoRivera from './pages/blog/posts/I864PovertyGuidelinesPicoRivera';
import GreenCardRegistryBaldwinPark from './pages/blog/posts/GreenCardRegistryBaldwinPark';
import ExpeditedPassportImmigrationPalmdale from './pages/blog/posts/ExpeditedPassportImmigrationPalmdale';
import H1BCapSeasonStrategyAzusa from './pages/blog/posts/H1BCapSeasonStrategyAzusa';
import L2DependentWorkAuthorizationNewportBeach from './pages/blog/posts/L2DependentWorkAuthorizationNewportBeach';
import MilitaryNaturalizationCampPendleton from './pages/blog/posts/MilitaryNaturalizationCampPendleton';
import I485ProcessingDelaysSanBernardino from './pages/blog/posts/I485ProcessingDelaysSanBernardino';
import SyrianSIVElMonte from './pages/blog/posts/SyrianSIVElMonte';
import JointSponsorRequirementsYorbaLinda from './pages/blog/posts/JointSponsorRequirementsYorbaLinda';
import F2DependentVisaClaremont from './pages/blog/posts/F2DependentVisaClaremont';
import HealthcareWorkerVisasWestCovina from './pages/blog/posts/HealthcareWorkerVisasWestCovina';
import NaturalizationAfterMarriageGreenCardMenifee from './pages/blog/posts/NaturalizationAfterMarriageGreenCardMenifee';
import I94ArrivalRecordIssuesBrea from './pages/blog/posts/I94ArrivalRecordIssuesBrea';
import MoroccanCommunityResourcesLakewood from './pages/blog/posts/MoroccanCommunityResourcesLakewood';
import VAWASelfPetitionBeaumont from './pages/blog/posts/VAWASelfPetitionBeaumont';
import RefugeeTravelDocumentRialto from './pages/blog/posts/RefugeeTravelDocumentRialto';
import L1BlanketPetitionChinoHills from './pages/blog/posts/L1BlanketPetitionChinoHills';
import CitizenshipThroughParentsIndio from './pages/blog/posts/CitizenshipThroughParentsIndio';
import K2ChildrenVisaLaQuinta from './pages/blog/posts/K2ChildrenVisaLaQuinta';
import I360ReligiousWorkerColton from './pages/blog/posts/I360ReligiousWorkerColton';
import EgyptianCommunityResourcesHesperia from './pages/blog/posts/EgyptianCommunityResourcesHesperia';
import I864PovertyGuidelines2026Yucaipa from './pages/blog/posts/I864PovertyGuidelines2026Yucaipa';
import AsylumAffirmativeDefensiveMontebello from './pages/blog/posts/AsylumAffirmativeDefensiveMontebello';
import EB2AdvancedDegreeCulverCity from './pages/blog/posts/EB2AdvancedDegreeCulverCity';
import E1TreatyTraderLagunaHills from './pages/blog/posts/E1TreatyTraderLagunaHills';
import VisaBulletinExplainedChino from './pages/blog/posts/VisaBulletinExplainedChino';
import I912FeeWaiverBarstow from './pages/blog/posts/I912FeeWaiverBarstow';
import DV2027LotteryResultsWhittier from './pages/blog/posts/DV2027LotteryResultsWhittier';
import IraqiChaldeanSpringValley from './pages/blog/posts/IraqiChaldeanSpringValley';
import I129FProcessingDelaysSanJuan from './pages/blog/posts/I129FProcessingDelaysSanJuan';
import GreenCardLotteryEligibilityNorco from './pages/blog/posts/GreenCardLotteryEligibilityNorco';
import SponsorIncomeCalculatorUpland from './pages/blog/posts/SponsorIncomeCalculatorUpland';
import USCISAccountSetupAltadena from './pages/blog/posts/USCISAccountSetupAltadena';
import PalestinianRefugeeStatusDaly from './pages/blog/posts/PalestinianRefugeeStatusDaly';
import BirthTourismDefenseRanchoPV from './pages/blog/posts/BirthTourismDefenseRanchoPV';
import YemeniTPSRenewalElCentro from './pages/blog/posts/YemeniTPSRenewalElCentro';
import HumanitarianParoleExtensionFontana from './pages/blog/posts/HumanitarianParoleExtensionFontana';
import I130GrandparentsRedlands from './pages/blog/posts/I130GrandparentsRedlands';
import F2APreferenceCategoryAppleValley from './pages/blog/posts/F2APreferenceCategoryAppleValley';
import K1InterviewTipsMissionViejo from './pages/blog/posts/K1InterviewTipsMissionViejo';
import I751LateFilingTustin from './pages/blog/posts/I751LateFilingTustin';
import WithholdingOfRemovalMorenoValley from './pages/blog/posts/WithholdingOfRemovalMorenoValley';
import ReasonableFearInterviewPerris from './pages/blog/posts/ReasonableFearInterviewPerris';
import N400EarlyFilingSanClemente from './pages/blog/posts/N400EarlyFilingSanClemente';
import CitizenshipAccommodationsArcadia from './pages/blog/posts/CitizenshipAccommodationsArcadia';
import H1BCapGapAlisoViejo from './pages/blog/posts/H1BCapGapAlisoViejo';
import R1ReligiousWorkerRanchoSantaMargarita from './pages/blog/posts/R1ReligiousWorkerRanchoSantaMargarita';
import TPSReRegistrationAzusa from './pages/blog/posts/TPSReRegistrationAzusa';
import I539ChangeStatusPalmDesert from './pages/blog/posts/I539ChangeStatusPalmDesert';
import ImmigrationPOALaHabra from './pages/blog/posts/ImmigrationPOALaHabra';
import CopticChristianResourcesCypress from './pages/blog/posts/CopticChristianResourcesCypress';

import EB2NIWStrategy from './pages/blog/posts/EB2NIWStrategy';
import MarriageGreenCardTimeline from './pages/blog/posts/MarriageGreenCardTimeline';
import H1BAlternatives from './pages/blog/posts/H1BAlternatives';
import InvestmentVisas from './pages/blog/posts/InvestmentVisas';
import DACAUpdates from './pages/blog/posts/DACAUpdates';
import CitizenshipPrep from './pages/blog/posts/CitizenshipPrep';
import K1vsCR1Comparison from './pages/blog/posts/K1vsCR1Comparison';

const App = () => {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      // Navbar
      logo: "SoCal Immigration Services",
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
        subhead: "Immigration, Translation, and Notary Services.",
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
      logo: "سوكال لخدمات الهجرة",
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
        headline: "طريقك إلى الحلم الأمريكي يبدأ هنا",
        subhead: "خدمات الهجرة والترجمة والتوثيق.",
        cta: "احجز استشارة"
      },

      // Services
      servicesTitle: "خدماتنا",
      servicesSubtitle: "حلول هجرة شاملة مصممة خصيصًا لتلبية احتياجاتك",

      categories: [
        {
          title: "التأشيرات والعائلة",
          icon: Users,
          services: [
            "الالتماسات العائلية",
            "تأشيرة خطوبة K1",
            "تأشيرات B1-B2 والتمديدات",
            "تأشيرة عمل H-1B"
          ]
        },
        {
          title: "الوضع والجنسية",
          icon: Flag,
          services: [
            "الجنسية",
            "تعديل الوضع",
            "تجديد/استبدال البطاقة الخضراء",
            "اللجوء / اللاجئين"
          ]
        },
        {
          title: "الوثائق القانونية",
          icon: FileText,
          services: [
            "إفادة الدعم",
            "تصريح العمل",
            "وثيقة السفر",
            "SSI/SSA/الإعاقة"
          ]
        },
        {
          title: "الخدمات المهنية",
          icon: ScrollText,
          services: [
            "الترجمة",
            "كاتب العدل",
            "طلبات الطلاق"
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
          title: "خدمة متعاطفة",
          description: "نتفهم تحديات الهجرة ونقدم دعمًا شخصيًا ومهتمًا لكل عميل."
        },
        {
          icon: Shield,
          title: "معالجة المستندات بخبرة",
          description: "اهتمام دقيق بالتفاصيل في إعداد ومعالجة جميع وثائق الهجرة الخاصة بك."
        }
      ],

      // How It Works
      howItWorksTitle: "عمليتنا البسيطة",
      howItWorksSubtitle: "البدء سهل - أربع خطوات بسيطة فقط",
      howItWorksSteps: [
        { step: "1", title: "استشارة", description: "استشارة أولية مجانية لفهم احتياجاتك" },
        { step: "2", title: "إعداد المستندات", description: "نقوم بإعداد جميع المستندات اللازمة بدقة" },
        { step: "3", title: "مراجعة", description: "مراجعة شاملة لضمان أن كل شيء مثالي" },
        { step: "4", title: "التقديم", description: "نقوم بتقديم طلبك وتتبع تقدمه" }
      ],

      // Testimonials
      testimonialsTitle: "قصص نجاح",
      testimonialsSubtitle: "استمع إلى عملائنا الراضين",
      testimonials: [
        {
          name: "سارة جونسون",
          location: "لوس أنجلوس، كاليفورنيا",
          text: "ساعدني الفريق في طلب الجنسية. كانوا محترفين وصبورين، وجعلوا العملية بأكملها خالية من التوتر. أنا الآن مواطنة أمريكية فخورة!",
          rating: 5
        },
        {
          name: "أحمد العلي",
          location: "مقاطعة أورانج، كاليفورنيا",
          text: "خدمة ممتازة! ساعدوني في لم شمل عائلتي. الفريق يتحدث العربية بطلاقة وكانوا متعاونين جداً في كل خطوة.",
          rating: 5
        },
        {
          name: "ماريا غارسيا",
          location: "سان دييغو، كاليفورنيا",
          text: "كنت بحاجة إلى خدمات ترجمة وتوثيق لتجديد بطاقتي الخضراء. سريعة ودقيقة وبأسعار معقولة. أوصي بشدة!",
          rating: 5
        }
      ],

      // FAQ
      faqTitle: "أسئلة شائعة",
      faqSubtitle: "ابحث عن إجابات للأسئلة المتداولة",
      faqs: [
        {
          question: "كم تستغرق عملية الهجرة؟",
          answer: "تختلف أوقات المعالجة حسب نوع الطلب. يمكن أن تستغرق الالتماسات العائلية من 6 أشهر إلى أكثر من 3 سنوات، بينما تستغرق طلبات الجنسية عادة من 8 إلى 14 شهرًا. نقدم جداول زمنية واقعية خلال استشارتك ونبقيك على اطلاع دائم طوال العملية."
        },
        {
          question: "هل ترجماتكم معتمدة من USCIS؟",
          answer: "نعم! جميع ترجماتنا تتضمن شهادة دقة وتلبي متطلبات USCIS. ترجماتنا المعتمدة مقبولة من قبل USCIS والسفارات والمحاكم والوكالات الرسمية الأخرى. يمكننا أيضًا تقديم ترجمات موثقة عند الحاجة."
        },
        {
          question: "ما هي رسومكم؟",
          answer: "نحن نؤمن بالشفافية في التسعير. تبدأ خدمات الترجمة من 30 دولارًا للصفحة، وخدمات كاتب العدل من 15 دولارًا للتوقيع، وتختلف تكلفة إعداد وثائق الهجرة حسب تعقيد الحالة. اتصل بنا للحصول على عرض أسعار مفصل بناءً على احتياجاتك الخاصة - لا توجد رسوم خفية أبدًا."
        },
        {
          question: "هل تقدمون استشارات قانونية؟",
          answer: "نحن لسنا محامين ولا نقدم استشارات قانونية. نحن متخصصون في خدمات إعداد الوثائق لطلبات الهجرة. للمسائل القانونية المعقدة أو القضايا المتنازع عليها، يمكننا إحالتك إلى محامين هجرة مؤهلين في شبكتنا."
        }
      ],

      // Final CTA
      finalCtaTitle: "هل أنت مستعد لبدء رحلتك؟",
      finalCtaText: "اتخذ الخطوة الأولى نحو تحقيق حلمك الأمريكي اليوم",
      finalCtaButton: "اتصل بنا اليوم",

      // Contact Form
      contactForm: {
        title: "ابدأ اليوم",
        subtitle: "املأ النموذج أدناه وسنعاود الاتصال بك في غضون 24 ساعة",
        nameLabel: "الاسم الكامل *",
        namePlaceholder: "أدخل اسمك الكامل",
        emailLabel: "عنوان البريد الإلكتروني *",
        emailPlaceholder: "your.email@example.com",
        phoneLabel: "رقم الهاتف *",
        phonePlaceholder: "(555) 123-4567",
        serviceLabel: "الخدمة المطلوبة *",
        servicePlaceholder: "اختر خدمة",
        serviceOptions: [
          "الالتماسات العائلية (I-130)",
          "تأشيرة خطوبة K1",
          "الجنسية/التجنيس",
          "تعديل الوضع",
          "تجديد البطاقة الخضراء",
          "تصريح العمل (EAD)",
          "وثيقة السفر (Advance Parole)",
          "خدمات الترجمة",
          "خدمات كاتب العدل",
          "أخرى"
        ],
        messageLabel: "أخبرنا عن حالتك *",
        messagePlaceholder: "يرجى تقديم تفاصيل حول احتياجات الهجرة الخاصة بك...",
        submitButton: "إرسال الطلب",
        successMessage: "شكرًا لك! سنتصل بك في غضون 24 ساعة."
      },

      // Footer
      footer: {
        description: "خدمات إعداد وثائق الهجرة الاحترافية لمساعدة العائلات والأفراد على التنقل في عملية الهجرة الأمريكية بثقة ودقة.",
        services: "متخصصون في الالتماسات العائلية، طلبات التأشيرات، الجنسية، تصاريح العمل، الترجمات، وخدمات كاتب العدل.",
        hours: "الاثنين - الجمعة: 9:00 صباحًا - 6:00 مساءً | السبت: 10:00 صباحًا - 3:00 مساءً",
        contact: "اتصل بنا",
        address: "11088 Trask Ave. Suite 200-K, Garden Grove, CA 92843",
        phone: "(714) 421-8872",
        email: "imgso2005@yahoo.com",
        social: "تابعنا",
        disclaimer: "نحن لسنا محامين. نحن نقدم خدمات إعداد الوثائق."
      }
    }
  };
              return (
              <HelmetProvider>
                  <div className="min-h-screen flex flex-col">
                    <Navbar language={language} setLanguage={setLanguage} content={content} />

                    <main className="flex-grow">
                      <Routes>
                        <Route path="/" element={<HomePage language={language} content={content} />} />
                        <Route path="/services/visas-family" element={<VisasFamilyPage language={language} />} />
                        <Route path="/services/status-citizenship" element={<StatusCitizenshipPage language={language} />} />
                        <Route path="/services/legal-documents" element={<LegalDocumentsPage language={language} />} />
                        <Route path="/services/professional-services" element={<ProfessionalServicesPage language={language} />} />

                        {/* Additional Service Landing Pages */}
                        <Route path="/family-immigration" element={<FamilyImmigrationPage language={language} />} />
                        <Route path="/asylum-services" element={<AsylumServicesPage language={language} />} />
                        <Route path="/citizenship-naturalization" element={<CitizenshipPage language={language} />} />
                        <Route path="/daca-services" element={<DACAServicesPage language={language} />} />
                        <Route path="/green-card-services" element={<GreenCardServicesPage language={language} />} />

                        {/* City Landing Pages */}
                        <Route path="/irvine" element={<IrvinePage language={language} />} />
                        <Route path="/anaheim" element={<AnaheimPage language={language} />} />
                        <Route path="/los-angeles" element={<LosAngelesPage language={language} />} />
                        <Route path="/santa-ana" element={<SantaAnaPage language={language} />} />

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
                        <Route path="/blog/daca-renewal-i821d-hemet" element={<DACAReviewalI821DHemet language={language} />} />
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
                        <Route path="/blog/u-visa-crime-victims-santa-ana" element={<UVisaCrimeVictimsSantaAna language={language} />} />
                        <Route path="/blog/tps-temporary-protected-status-long-beach" element={<TPSTemporaryProtectedStatusLongBeach language={language} />} />
                        <Route path="/blog/b1-b2-visa-extension-fullerton" element={<B1B2VisaExtensionFullerton language={language} />} />
                        <Route path="/blog/n600-certificate-citizenship-costa-mesa" element={<N600CertificateCitizenshipCostaMesa language={language} />} />
                        <Route path="/blog/i-601-waiver-escondido" element={<I601WaiverEscondido language={language} />} />
                        <Route path="/blog/humanitarian-parole-fontana" element={<HumanitarianParoleFontana language={language} />} />
                        <Route path="/blog/public-charge-rule-pomona" element={<PublicChargeRulePomona language={language} />} />
                        <Route path="/blog/i-864a-joint-sponsor-torrance" element={<I864AJointSponsorTorrance language={language} />} />
                        <Route path="/blog/tn-visa-san-bernardino" element={<TNVisaSanBernardino language={language} />} />
                        <Route path="/blog/expedited-naturalization-vista" element={<ExpeditedNaturalizationVista language={language} />} />
                        <Route path="/blog/e2-treaty-investor-visa-anaheim" element={<E2TreatyInvestorAnaheim language={language} />} />
                        <Route path="/blog/yemeni-refugee-support-el-cajon" element={<YemeniRefugeeSupportElCajon language={language} />} />
                        <Route path="/blog/marriage-fraud-investigation-defense-garden-grove" element={<MarriageFraudDefenseGardenGrove language={language} />} />
                        <Route path="/blog/n648-medical-disability-waiver-san-diego" element={<N648MedicalWaiverSanDiego language={language} />} />
                        <Route path="/blog/uscis-case-status-inquiry-los-angeles" element={<USCISCaseStatusLosAngeles language={language} />} />
                        <Route path="/blog/i130-unmarried-adult-children-riverside" element={<I130UnmarriedChildrenRiverside language={language} />} />
                        <Route path="/blog/citizenship-through-marriage-corona" element={<CitizenshipMarriageCorona language={language} />} />
                        <Route path="/blog/iraqi-siv-special-immigrant-visa-el-cajon" element={<IraqiSIVElCajon language={language} />} />
                        <Route path="/blog/k3-spouse-visa-ontario" element={<K3SpouseVisaOntario language={language} />} />
                        <Route path="/blog/avoiding-immigration-scams-anaheim" element={<AvoidingImmigrationScamsAnaheim language={language} />} />
                        <Route path="/blog/eb2-niw-national-interest-waiver-westminster" element={<EB2NIWWestminster language={language} />} />
                        <Route path="/blog/h4-ead-work-permit-buena-park" element={<H4EADWorkPermitBuenaPark language={language} />} />
                        <Route path="/blog/deportation-defense-help-pasadena" element={<DeportationDefensePasadena language={language} />} />
                        <Route path="/blog/palestinian-asylum-support-chula-vista" element={<PalestinianAsylumChulaVista language={language} />} />
                        <Route path="/blog/child-status-protection-act-huntington-beach" element={<ChildStatusProtectionActHuntingtonBeach language={language} />} />
                        <Route path="/blog/i-290b-motion-reopen-reconsider-lake-forest" element={<I290BMotionReopenLakeForest language={language} />} />
                        <Route path="/blog/deferred-inspection-mission-viejo" element={<DeferredInspectionMissionViejo language={language} />} />
                        <Route path="/blog/adoption-immigration-whittier" element={<AdoptionImmigrationWhittier language={language} />} />
                        <Route path="/blog/employment-verification-i9-downey" element={<EmploymentVerificationI9Downey language={language} />} />
                        <Route path="/blog/arab-senior-citizens-immigration-resources-santa-clarita" element={<ArabSeniorResourcesSantaClarita language={language} />} />
                        <Route path="/blog/widow-widower-immigration-benefits-riverside" element={<WidowWidowerImmigrationRiverside language={language} />} />
                        <Route path="/blog/naturalization-fee-waiver-el-cajon" element={<NaturalizationFeeWaiverElCajon language={language} />} />
                        <Route path="/blog/eb1a-extraordinary-ability-visa-la-jolla" element={<EB1AExtraordinaryAbilityLaJolla language={language} />} />
                        <Route path="/blog/lebanese-community-immigration-resources-orange-county" element={<LebaneseCommunityResourcesOrangeCounty language={language} />} />
                        <Route path="/blog/emergency-advance-parole-corona" element={<EmergencyAdvanceParoleCorona language={language} />} />
                        <Route path="/blog/marriage-certificate-authentication-temecula" element={<MarriageCertificateAuthenticationTemecula language={language} />} />
                        <Route path="/blog/asylum-interview-preparation-san-diego" element={<AsylumInterviewPreparationSanDiego language={language} />} />
                        <Route path="/blog/religious-worker-r1-visa-glendale" element={<ReligiousWorkerR1VisaGlendale language={language} />} />
                        <Route path="/blog/i751-waiver-divorced-couples-ontario" element={<I751WaiverDivorcedCouplesOntario language={language} />} />
                        <Route path="/blog/egyptian-community-immigration-resources-anaheim" element={<EgyptianCommunityResourcesAnaheim language={language} />} />
                        <Route path="/blog/o1-extraordinary-artist-visa-glendale" element={<O1ArtistVisaGlendale language={language} />} />
                        <Route path="/blog/i140-priority-date-santa-ana" element={<I140PriorityDateSantaAna language={language} />} />
                        <Route path="/blog/grandparent-visitor-visa-murrieta" element={<GrandparentVisitorVisaMurrieta language={language} />} />
                        <Route path="/blog/jordanian-community-resources-chino-hills" element={<JordanianCommunityResourcesChinoHills language={language} />} />
                        <Route path="/blog/cat-protection-el-cajon" element={<CATProtectionElCajon language={language} />} />
                        <Route path="/blog/eb3-unskilled-worker-ontario" element={<EB3UnskilledWorkerOntario language={language} />} />
                        <Route path="/blog/birth-certificate-correction-garden-grove" element={<BirthCertificateCorrectionGardenGrove language={language} />} />
                        <Route path="/blog/f3-married-children-long-beach" element={<F3MarriedChildrenLongBeach language={language} />} />
                        <Route path="/blog/dual-intent-visa-issues-irvine" element={<DualIntentVisaIrvine language={language} />} />
                        <Route path="/blog/arab-women-entrepreneurs-orange-county" element={<ArabWomenEntrepreneursOC language={language} />} />
                        <Route path="/blog/afghan-siv-application-el-cajon" element={<AfghanSIVElCajon language={language} />} />
                        <Route path="/blog/uscis-biometrics-appointment-anaheim" element={<BiometricsAppointmentAnaheim language={language} />} />
                        <Route path="/blog/immigration-court-hearing-los-angeles" element={<ImmigrationCourtHearingLosAngeles language={language} />} />
                        <Route path="/blog/diversity-visa-lottery-irvine" element={<DiversityVisaLotteryIrvine language={language} />} />
                        <Route path="/blog/combo-card-ead-advance-parole-san-diego" element={<ComboCardEADSanDiego language={language} />} />
                        <Route path="/blog/uscis-expedite-request-riverside" element={<USCISExpediteRequestRiverside language={language} />} />
                        <Route path="/blog/i20-transfer-f1-students-fullerton" element={<I20TransferFullerton language={language} />} />
                        <Route path="/blog/visa-stamping-us-consulates-glendale" element={<VisaStampingUSConsulatesGlendale language={language} />} />
                        <Route path="/blog/unlawful-presence-waiver-i601a-santa-ana" element={<UnlawfulPresenceWaiverSantaAna language={language} />} />
                        <Route path="/blog/immigration-bond-hearing-orange-county" element={<ImmigrationBondHearingOrangeCounty language={language} />} />
                        <Route path="/blog/withholding-of-removal-hemet" element={<WithholdingOfRemovalHemet language={language} />} />
                        <Route path="/blog/f1-visa-reinstatement-claremont" element={<F1VisaReinstatementClaremont language={language} />} />
                        <Route path="/blog/ssa-benefits-immigrants-norwalk" element={<SSABenefitsImmigrantsNorwalk language={language} />} />
                        <Route path="/blog/stokes-interview-preparation-brea" element={<StokesInterviewPrepBrea language={language} />} />
                        <Route path="/blog/i130-priority-date-waiting-tustin" element={<I130PriorityDateWaitTustin language={language} />} />
                        <Route path="/blog/naturalization-criminal-record-redlands" element={<NaturalizationCriminalRecordRedlands language={language} />} />
                        <Route path="/blog/sb1-returning-resident-visa-moreno-valley" element={<SB1ReturningResidentMorenoValley language={language} />} />
                        <Route path="/blog/i864-income-requirements-upland" element={<I864IncomeRequirementsUpland language={language} />} />
                        <Route path="/blog/sudanese-tps-national-city" element={<SudaneseTpsNationalCity language={language} />} />
                        <Route path="/blog/employment-green-card-priority-date-laguna-hills" element={<EmploymentGreenCardPriorityLagunaHills language={language} />} />
                        <Route path="/blog/consular-interview-preparation-san-clemente" element={<ConsularInterviewPrepSanClemente language={language} />} />
                        <Route path="/blog/o1-visa-extraordinary-ability-pasadena" element={<O1VisaExtraordinaryAbilityPasadena language={language} />} />
                        <Route path="/blog/j1-visa-waiver-fullerton" element={<J1VisaWaiverFullerton language={language} />} />
                        <Route path="/blog/tn-visa-professionals-chula-vista" element={<TNVisaProfessionalsChulaVista language={language} />} />
                        <Route path="/blog/removal-proceedings-defense-long-beach" element={<RemovalProceedingsDefenseLongBeach language={language} />} />
                        <Route path="/blog/i-601-inadmissibility-waiver-san-bernardino" element={<I601InadmissibilityWaiverSanBernardino language={language} />} />
                        <Route path="/blog/i-212-permission-reapply-fontana" element={<I212PermissionReapplyFontana language={language} />} />
                        <Route path="/blog/special-immigrant-juvenile-status-pomona" element={<SpecialImmigrantJuvenileStatusPomona language={language} />} />
                        <Route path="/blog/cat-protection-escondido" element={<CATProtectionEscondido language={language} />} />
                        <Route path="/blog/public-charge-rule-rancho-cucamonga" element={<PublicChargeRanchoCucamonga language={language} />} />
                        <Route path="/blog/b1-b2-visitor-visa-extension-newport-beach" element={<B1B2VisaExtensionNewportBeach language={language} />} />
                        <Route path="/blog/h4-ead-mission-viejo" element={<H4EADMissionViejo language={language} />} />
                        <Route path="/blog/daca-renewal-santa-ana" element={<DACARenevwalSantaAna language={language} />} />
                        <Route path="/blog/eb5-regional-center-investment-beverly-hills" element={<EB5RegionalCenterBeverlyHills language={language} />} />
                        <Route path="/blog/i140-premium-processing-laguna-niguel" element={<I140PremiumProcessingLagunaNiguel language={language} />} />
                        <Route path="/blog/syrian-tps-extension-vista" element={<SyrianTPSExtensionVista language={language} />} />
                        <Route path="/blog/widow-widower-green-card-downey" element={<WidowWidowerGreenCardDowney language={language} />} />
                        <Route path="/blog/r1-religious-worker-visa-glendale" element={<R1ReligiousWorkerVisaGlendale language={language} />} />
                        <Route path="/blog/k2-fiance-child-visa-garden-grove" element={<K2FianceChildVisaGardenGrove language={language} />} />
                        <Route path="/blog/u-visa-work-authorization-pomona" element={<UVisaWorkAuthorizationPomona language={language} />} />
                        <Route path="/blog/adjustment-of-status-interview-tustin" element={<AdjustmentInterviewTustin language={language} />} />
                        <Route path="/blog/i131-travel-authorization-murrieta" element={<I131TravelAuthorizationMurrieta language={language} />} />
                        <Route path="/blog/lebanese-asylum-oceanside" element={<LebaneseAsylumOceanside language={language} />} />
                        <Route path="/blog/eb4-special-immigrant-la-mirada" element={<EB4SpecialImmigrantLaMirada language={language} />} />
                        <Route path="/blog/deferred-action-request-torrance" element={<DeferredActionRequestTorrance language={language} />} />
                        <Route path="/blog/egyptian-family-petition-anaheim" element={<EgyptianFamilyPetitionAnaheim language={language} />} />
                        <Route path="/blog/i765-work-permit-renewal-santa-clarita" element={<I765WorkPermitRenewalSantaClarita language={language} />} />
                        <Route path="/blog/i94-arrival-departure-record-arcadia" element={<I94ArrivalDepartureArcadia language={language} />} />
                        <Route path="/blog/f1-stem-opt-extension-fountain-valley" element={<F1STEMOPTFountainValley language={language} />} />
                        <Route path="/blog/vawa-self-petition-aliso-viejo" element={<VAWASelfPetitionAlisoViejo language={language} />} />
                        <Route path="/blog/citizenship-oath-ceremony-yorba-linda" element={<CitizenshipOathCeremonyYorbaLinda language={language} />} />
                        <Route path="/blog/h2b-seasonal-worker-visa-oxnard" element={<H2BSeasonalWorkerOxnard language={language} />} />
                        <Route path="/blog/visa-overstay-help-hesperia" element={<VisaOverstayHelpHesperia language={language} />} />
                        <Route path="/blog/family-relationship-evidence-cerritos" element={<FamilyRelationshipEvidenceCerritos language={language} />} />
                        <Route path="/blog/eb1b-outstanding-researcher-calabasas" element={<EB1BOutstandingResearcherCalabasas language={language} />} />
                        <Route path="/blog/n470-travel-naturalization-thousand-oaks" element={<N470TravelNaturalizationThousandOaks language={language} />} />
                        <Route path="/blog/immigration-health-insurance-lakewood" element={<ImmigrationHealthInsuranceLakewood language={language} />} />
                        <Route path="/blog/iraqi-asylee-adjustment-lancaster" element={<IraqiAsyleeAdjustmentLancaster language={language} />} />
                        <Route path="/blog/yemeni-family-petition-san-marcos" element={<YemeniFamilyPetitionSanMarcos language={language} />} />
                        <Route path="/blog/green-card-photo-service-lake-elsinore" element={<GreenCardPhotoServiceLakeElsinore language={language} />} />
                        <Route path="/blog/i797-notice-of-action-bellflower" element={<I797NoticeActionBellflower language={language} />} />
                        <Route path="/blog/asylum-clock-work-authorization-perris" element={<AsylumClockWorkAuthorizationPerris language={language} />} />
                        <Route path="/blog/iraqi-chaldean-family-reunification-national-city" element={<IraqiChaldeanFamilyNationalCity language={language} />} />
                        <Route path="/blog/marriage-visa-timeline-diamond-bar" element={<MarriageVisaTimelineDiamondBar language={language} />} />
                        <Route path="/blog/f2-dependent-visa-placentia" element={<F2DependentVisaPlacentia language={language} />} />
                        <Route path="/blog/citizenship-test-accommodations-apple-valley" element={<CitizenshipTestAccommodationsAppleValley language={language} />} />
                        <Route path="/blog/immigration-attorney-vs-preparer-cypress" element={<ImmigrationAttorneyVsPreparerCypress language={language} />} />
                        <Route path="/blog/syrian-refugee-green-card-encinitas" element={<SyrianRefugeeGreenCardEncinitas language={language} />} />
                        <Route path="/blog/immigration-consequences-crimes-glendora" element={<ImmigrationConsequencesCrimesGlendora language={language} />} />
                        <Route path="/blog/i864-poverty-guidelines-2026-pico-rivera" element={<I864PovertyGuidelinesPicoRivera language={language} />} />
                        <Route path="/blog/green-card-registry-baldwin-park" element={<GreenCardRegistryBaldwinPark language={language} />} />
                        <Route path="/blog/expedited-passport-immigration-palmdale" element={<ExpeditedPassportImmigrationPalmdale language={language} />} />
                        <Route path="/blog/h1b-cap-season-strategy-azusa" element={<H1BCapSeasonStrategyAzusa language={language} />} />
                        <Route path="/blog/l2-dependent-work-authorization-newport-beach" element={<L2DependentWorkAuthorizationNewportBeach language={language} />} />
                        <Route path="/blog/military-naturalization-camp-pendleton" element={<MilitaryNaturalizationCampPendleton language={language} />} />
                        <Route path="/blog/i485-processing-delays-san-bernardino" element={<I485ProcessingDelaysSanBernardino language={language} />} />
                        <Route path="/blog/syrian-siv-el-monte" element={<SyrianSIVElMonte language={language} />} />
                        <Route path="/blog/joint-sponsor-requirements-yorba-linda" element={<JointSponsorRequirementsYorbaLinda language={language} />} />
                        <Route path="/blog/f2-dependent-visa-claremont" element={<F2DependentVisaClaremont language={language} />} />
                        <Route path="/blog/healthcare-worker-visas-west-covina" element={<HealthcareWorkerVisasWestCovina language={language} />} />
                        <Route path="/blog/naturalization-after-marriage-green-card-menifee" element={<NaturalizationAfterMarriageGreenCardMenifee language={language} />} />
                        <Route path="/blog/i94-arrival-record-issues-brea" element={<I94ArrivalRecordIssuesBrea language={language} />} />
                        <Route path="/blog/moroccan-community-resources-lakewood" element={<MoroccanCommunityResourcesLakewood language={language} />} />
                        <Route path="/blog/vawa-self-petition-beaumont" element={<VAWASelfPetitionBeaumont language={language} />} />
                        <Route path="/blog/refugee-travel-document-rialto" element={<RefugeeTravelDocumentRialto language={language} />} />
                        <Route path="/blog/l1-blanket-petition-chino-hills" element={<L1BlanketPetitionChinoHills language={language} />} />
                        <Route path="/blog/citizenship-through-parents-indio" element={<CitizenshipThroughParentsIndio language={language} />} />
                        <Route path="/blog/k2-children-visa-la-quinta" element={<K2ChildrenVisaLaQuinta language={language} />} />
                        <Route path="/blog/i360-religious-worker-colton" element={<I360ReligiousWorkerColton language={language} />} />
                        <Route path="/blog/egyptian-community-resources-hesperia" element={<EgyptianCommunityResourcesHesperia language={language} />} />
                        <Route path="/blog/i864-poverty-guidelines-2026-yucaipa" element={<I864PovertyGuidelines2026Yucaipa language={language} />} />
                        <Route path="/blog/asylum-affirmative-defensive-montebello" element={<AsylumAffirmativeDefensiveMontebello language={language} />} />
                        <Route path="/blog/eb2-advanced-degree-culver-city" element={<EB2AdvancedDegreeCulverCity language={language} />} />
                        <Route path="/blog/e1-treaty-trader-laguna-hills" element={<E1TreatyTraderLagunaHills language={language} />} />
                        <Route path="/blog/visa-bulletin-explained-chino" element={<VisaBulletinExplainedChino language={language} />} />
                        <Route path="/blog/i912-fee-waiver-barstow" element={<I912FeeWaiverBarstow language={language} />} />
                        <Route path="/blog/dv-2027-lottery-results-whittier" element={<DV2027LotteryResultsWhittier language={language} />} />
                        <Route path="/blog/iraqi-chaldean-community-spring-valley" element={<IraqiChaldeanSpringValley language={language} />} />
                        <Route path="/blog/i-129f-processing-delays-san-juan-capistrano" element={<I129FProcessingDelaysSanJuan language={language} />} />
                        <Route path="/blog/green-card-lottery-eligibility-norco" element={<GreenCardLotteryEligibilityNorco language={language} />} />
                        <Route path="/blog/sponsor-income-calculator-upland" element={<SponsorIncomeCalculatorUpland language={language} />} />
                        <Route path="/blog/uscis-account-setup-altadena" element={<USCISAccountSetupAltadena language={language} />} />
                        <Route path="/blog/palestinian-refugee-status-daly-city" element={<PalestinianRefugeeStatusDaly language={language} />} />
                        <Route path="/blog/birth-tourism-defense-rancho-palos-verdes" element={<BirthTourismDefenseRanchoPV language={language} />} />
                        <Route path="/blog/yemeni-tps-renewal-el-centro" element={<YemeniTPSRenewalElCentro language={language} />} />
                        <Route path="/blog/humanitarian-parole-extension-fontana" element={<HumanitarianParoleExtensionFontana language={language} />} />
                        <Route path="/blog/i130-grandparents-petition-redlands" element={<I130GrandparentsRedlands language={language} />} />
                        <Route path="/blog/f2a-preference-category-apple-valley" element={<F2APreferenceCategoryAppleValley language={language} />} />
                        <Route path="/blog/k1-interview-tips-mission-viejo" element={<K1InterviewTipsMissionViejo language={language} />} />
                        <Route path="/blog/i751-late-filing-tustin" element={<I751LateFilingTustin language={language} />} />
                        <Route path="/blog/withholding-of-removal-moreno-valley" element={<WithholdingOfRemovalMorenoValley language={language} />} />
                        <Route path="/blog/reasonable-fear-interview-perris" element={<ReasonableFearInterviewPerris language={language} />} />
                        <Route path="/blog/n400-early-filing-san-clemente" element={<N400EarlyFilingSanClemente language={language} />} />
                        <Route path="/blog/citizenship-accommodations-arcadia" element={<CitizenshipAccommodationsArcadia language={language} />} />
                        <Route path="/blog/h1b-cap-gap-aliso-viejo" element={<H1BCapGapAlisoViejo language={language} />} />
                        <Route path="/blog/r1-religious-worker-rancho-santa-margarita" element={<R1ReligiousWorkerRanchoSantaMargarita language={language} />} />
                        <Route path="/blog/tps-re-registration-azusa" element={<TPSReRegistrationAzusa language={language} />} />
                        <Route path="/blog/i539-change-status-palm-desert" element={<I539ChangeStatusPalmDesert language={language} />} />
                        <Route path="/blog/immigration-poa-la-habra" element={<ImmigrationPOALaHabra language={language} />} />
                        <Route path="/blog/coptic-christian-resources-cypress" element={<CopticChristianResourcesCypress language={language} />} />
                      </Routes>
                    </main>

                    <Footer language={language} content={content} />
                    <SupportBubble language={language} content={content} />
                    <ExitIntentModal language={language} content={content} />
                  </div>
              </HelmetProvider>
              );
};

              export default App;
