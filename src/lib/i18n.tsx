import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "ar";

// Every visible label, in both languages. Add a key to BOTH objects.
const fr = {
  skip: "Aller au contenu",
  navHome: "Accueil",
  navMenu: "Menu",
  navEvents: "Soirées",
  navReserve: "Réservation",
  navContact: "Accès & contact",
  switchLang: "العربية",
  switchLangLabel: "Passer en arabe",
  demoBanner: "Démonstration privée — non publiée, contenu à valider par le propriétaire.",
  toValidate: "Texte à valider par le propriétaire",
  heroKicker: "Snack · Restaurant · Lieu convivial — Annaba",
  heroIntro:
    "Un lieu pour se retrouver en soirée autour d'un repas simple et d'une ambiance chaleureuse.",
  ctaMenu: "Voir le menu",
  ctaEvents: "Les soirées",
  ctaReserve: "Demander une réservation",
  photoPending: "Photo à fournir par l'établissement",
  hoursTitle: "Horaires provisoires",
  hoursNote: "À confirmer par le propriétaire — jours d'ouverture non confirmés.",
  menuTitle: "Menu",
  menuEmpty: "Menu en cours de validation par l'établissement",
  menuEmptySub: "Aucun produit ni prix n'est affiché tant que le menu réel n'est pas reçu.",
  templateTitle: "Modèle de fiche produit (démo / admin)",
  templateNote: "Structure vide montrant comment les produits apparaîtront. Ce n'est pas un vrai produit.",
  tplName: "Nom du produit",
  tplDesc: "Description à fournir",
  tplCategory: "Catégorie à définir",
  tplPrice: "Prix (DZD) à confirmer",
  orderTitle: "Demande de commande",
  orderNote:
    "Indisponible : en attente du menu réel et d'un contact approuvé. Retrait ou livraison non confirmés.",
  orderBtn: "Commander (démo désactivée)",
  eventsTitle: "Soirées",
  noEvents: "Aucun événement confirmé pour le moment",
  noEventsSub: "Les soirées seront annoncées ici uniquement après validation par l'établissement.",
  conceptsTitle: "Concepts à valider — démonstration privée",
  conceptsNote:
    "Idées internes, non annoncées et non réservables. Aucune autorisation (musique, films) n'est acquise.",
  conceptTag: "Concept à valider — non annoncé",
  karaoke: "Soirée karaoké",
  karaokeDesc: "Idée de soirée chant entre amis. Format, dates et droits musicaux à étudier.",
  werewolf: "Loups-Garous",
  werewolfDesc: "Idée de soirée jeu de société en groupe. Format à définir avec l'équipe.",
  cinema: "Cinéma en plein air",
  cinemaDesc: "Idée de projection en extérieur. Faisabilité et droits de diffusion à vérifier.",
  reserveTitle: "Demande de réservation",
  reserveIntro:
    "Prototype : ce formulaire n'envoie rien. Aucune disponibilité n'est affichée ni garantie.",
  fName: "Nom",
  fEvent: "Événement",
  fEventNone: "Aucun événement approuvé pour le moment",
  fPeople: "Nombre de personnes",
  fNote: "Note (facultatif)",
  fSubmit: "Préparer la demande (démo)",
  fDone: "Démo : votre demande n'a PAS été envoyée. L'envoi réel sera activé après validation du contact.",
  contactTitle: "Accès & contact",
  mapPending: "Carte Google Maps à intégrer",
  mapPendingSub: "Emplacement exact et entrée à vérifier — aucune adresse supposée.",
  phoneTitle: "WhatsApp / téléphone",
  phonePending: "Numéro à confirmer",
  disclaimer: "Toute demande est confirmée uniquement après une réponse de Le Cavalier 23.",
  footerBrand:
    "Le Cavalier 23 (nom provisoire) est un snack/restaurant indépendant. Ce site n'est pas le site officiel du Club Hippique Aïn-Achir.",
  footerDemo: "Prototype privé — non destiné à la publication.",
  navOpen: "Ouvrir le menu",
  navClose: "Fermer le menu",
  footerNav: "Navigation",
  footerInfo: "Informations",
  hoursConfirm: "À confirmer par le propriétaire",
  heroTitle: "Le soir, à Annaba, on se retrouve ici.",
  heroPhoto: "Photo principale — à fournir par le propriétaire",
  introEyebrow: "L'esprit du lieu",
  introTitle: "Le blanc et le bleu d'Annaba, la lumière chaude du soir.",
  introBody:
    "Un snack-restaurant simple et convivial, pensé pour les soirées entre amis ou en famille. Le texte définitif sera rédigé avec le propriétaire.",
  menuPreviewEyebrow: "À la carte",
  menuPreviewTitle: "Un aperçu du menu",
  menuPreviewBody: "Les plats, boissons et prix réels (DZD) apparaîtront ici uniquement après validation.",
  dishSlot: "Photo plat / boisson à fournir",
  galleryEyebrow: "Galerie",
  galleryTitle: "Le lieu en images",
  galleryNote: "Emplacements réservés aux photos approuvées par le propriétaire — contenu de démonstration.",
  eveningEyebrow: "La soirée",
  eveningTitle: "Quand la lumière baisse, le lieu s'anime doucement.",
  eveningBody: "Ouvert en soirée, avec des horaires provisoires. Ambiance et programme à définir avec l'établissement.",
  eventsPreviewEyebrow: "Agenda",
  seeAll: "Tout voir",
  locationEyebrow: "Nous trouver",
  demoContent: "Contenu de démonstration",
  menuIntro: "Une carte en préparation — rien n'est affiché tant que le menu réel n'est pas validé.",
  eventsIntro: "Les soirées confirmées seront annoncées ici. Les idées ci-dessous restent internes.",
  reserveEyebrow: "Réserver",
  reserveHowTitle: "Comment ça marche",
  reserveHow1: "Vous préparez votre demande avec ce formulaire.",
  reserveHow2: "Pour l'instant, rien n'est envoyé ni enregistré (démo).",
  reserveHow3: "Une demande n'est confirmée qu'après une réponse de Le Cavalier 23.",
  contactEyebrow: "Accès",
  contactIntro: "Adresse exacte, carte et numéro seront ajoutés après confirmation par l'établissement.",
};

const ar: typeof fr = {
  skip: "روح للمحتوى",
  navHome: "الرئيسية",
  navMenu: "المنيو",
  navEvents: "الأمسيات",
  navReserve: "الحجز",
  navContact: "العنوان والاتصال",
  switchLang: "Français",
  switchLangLabel: "التبديل إلى الفرنسية",
  demoBanner: "نسخة تجريبية خاصة — ماشي منشورة، المحتوى لازم يتأكد من صاحب المحل.",
  toValidate: "نص لازم يتأكد من صاحب المحل",
  heroKicker: "سناك · مطعم · مكان للّمّة — عنابة",
  heroIntro: "مكان تتلاقاو فيه في العشية على ماكلة بسيطة وجو دافي.",
  ctaMenu: "شوف المنيو",
  ctaEvents: "الأمسيات",
  ctaReserve: "طلب حجز",
  photoPending: "صورة يوفرها المحل",
  hoursTitle: "أوقات مؤقتة",
  hoursNote: "لازم يأكدها صاحب المحل — أيام الفتح ماشي مؤكدة.",
  menuTitle: "المنيو",
  menuEmpty: "المنيو راهو قيد التأكيد",
  menuEmptySub: "ما يتعرض حتى منتوج ولا سعر حتى يوصل المنيو الحقيقي.",
  templateTitle: "نموذج بطاقة منتوج (تجريبي / إدارة)",
  templateNote: "هيكل فارغ يبيّن كيفاش تبان المنتوجات. هذا ماشي منتوج حقيقي.",
  tplName: "اسم المنتوج",
  tplDesc: "الوصف يتزاد من بعد",
  tplCategory: "الصنف يتحدد من بعد",
  tplPrice: "السعر (دج) قيد التأكيد",
  orderTitle: "طلب كوموند",
  orderNote: "غير متوفر: نستناو المنيو الحقيقي ورقم مؤكد. الاستلام ولا التوصيل ماشي مؤكدين.",
  orderBtn: "اطلب (تجريبي معطّل)",
  eventsTitle: "الأمسيات",
  noEvents: "ما كان حتى حدث مؤكد للحين",
  noEventsSub: "الأمسيات تتعلن هنا غير بعد ما يأكدها المحل.",
  conceptsTitle: "أفكار قيد التأكيد — نسخة تجريبية خاصة",
  conceptsNote: "أفكار داخلية، ماشي معلنة وما تتحجزش. ما كان حتى ترخيص (موسيقى، أفلام).",
  conceptTag: "فكرة قيد التأكيد — ماشي معلنة",
  karaoke: "سهرة كاريوكي",
  karaokeDesc: "فكرة سهرة غنا مع الصحاب. الشكل والتواريخ وحقوق الموسيقى لازم تتدرس.",
  werewolf: "لعبة الذئاب (Loups-Garous)",
  werewolfDesc: "فكرة سهرة لعب جماعي. الشكل يتحدد مع الفريق.",
  cinema: "سينما في الهواء الطلق",
  cinemaDesc: "فكرة عرض أفلام برا. الإمكانية وحقوق العرض لازم تتأكد.",
  reserveTitle: "طلب حجز",
  reserveIntro: "نموذج تجريبي: هاد الاستمارة ما تبعث والو. ما كان حتى توفر مضمون.",
  fName: "الاسم",
  fEvent: "الحدث",
  fEventNone: "ما كان حتى حدث مؤكد للحين",
  fPeople: "عدد الأشخاص",
  fNote: "ملاحظة (اختياري)",
  fSubmit: "حضّر الطلب (تجريبي)",
  fDone: "تجريبي: الطلب ما تبعثش. الإرسال الحقيقي يتفعّل بعد تأكيد رقم الاتصال.",
  contactTitle: "العنوان والاتصال",
  mapPending: "خريطة Google Maps تتزاد من بعد",
  mapPendingSub: "المكان بالضبط والمدخل لازم يتأكدو — ما كان حتى عنوان مفترض.",
  phoneTitle: "واتساب / هاتف",
  phonePending: "الرقم قيد التأكيد",
  disclaimer: "أي طلب يتأكد غير كي يردّ عليكم Le Cavalier 23.",
  footerBrand:
    "Le Cavalier 23 (اسم مؤقت) سناك/مطعم مستقل. هذا ماشي الموقع الرسمي لنادي الفروسية عين عشير.",
  footerDemo: "نموذج خاص — ماشي للنشر.",
  navOpen: "افتح القائمة",
  navClose: "سكّر القائمة",
  footerNav: "التصفح",
  footerInfo: "معلومات",
  hoursConfirm: "لازم يأكدها صاحب المحل",
  heroTitle: "في العشية، في عنابة، نتلاقاو هنا.",
  heroPhoto: "الصورة الرئيسية — يوفرها صاحب المحل",
  introEyebrow: "روح المكان",
  introTitle: "الأبيض والأزرق تاع عنابة، وضو العشية الدافي.",
  introBody: "سناك-مطعم بسيط ومريح، للسهرات مع الصحاب ولا مع العايلة. النص النهائي يتكتب مع صاحب المحل.",
  menuPreviewEyebrow: "المنيو",
  menuPreviewTitle: "نظرة على المنيو",
  menuPreviewBody: "الماكلة والمشروبات والأسعار الحقيقية (دج) تبان هنا غير بعد التأكيد.",
  dishSlot: "صورة طبق / مشروب يوفرها المحل",
  galleryEyebrow: "الصور",
  galleryTitle: "المكان بالصور",
  galleryNote: "بلايص محجوزة للصور اللي يوافق عليها صاحب المحل — محتوى تجريبي.",
  eveningEyebrow: "السهرة",
  eveningTitle: "كي يطيح الضو، المكان يحيا شوية بشوية.",
  eveningBody: "مفتوح في العشية، بأوقات مؤقتة. الجو والبرنامج يتحددو مع المحل.",
  eventsPreviewEyebrow: "البرنامج",
  seeAll: "شوف الكل",
  locationEyebrow: "وين تلقاونا",
  demoContent: "محتوى تجريبي",
  menuIntro: "المنيو راهو يتحضّر — ما يتعرض والو حتى يتأكد المنيو الحقيقي.",
  eventsIntro: "الأمسيات المؤكدة تتعلن هنا. الأفكار اللي تحت تبقى داخلية.",
  reserveEyebrow: "الحجز",
  reserveHowTitle: "كيفاش تخدم",
  reserveHow1: "تحضّر طلبك بهاد الاستمارة.",
  reserveHow2: "للحين، ما يتبعث ما يتسجل والو (تجريبي).",
  reserveHow3: "الطلب يتأكد غير بعد ما يردّ عليكم Le Cavalier 23.",
  contactEyebrow: "الوصول",
  contactIntro: "العنوان بالضبط والخريطة والرقم يتزادو بعد ما يأكدهم المحل.",
};

export type TKey = keyof typeof fr;
const dict = { fr, ar };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: TKey) => string };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  // Restore saved language after the page loads (avoids server/client mismatch).
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "fr" || saved === "ar") setLang(saved);
  }, []);

  // Keep <html lang/dir> in sync so Arabic renders right-to-left.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = (k: TKey) => dict[lang][k];
  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
