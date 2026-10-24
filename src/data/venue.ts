// All venue facts live here. Replace `null` values once the owner confirms them.
export const venue = {
  name: "Le Cavalier 23", // provisional name — owner permission pending
  city: "Annaba",
  hours: { open: "19:00", close: "00:00", confirmed: false },
  whatsapp: null as string | null, // e.g. "+213..." — NOT provided yet, do not invent
  mapEmbedUrl: null as string | null, // Google Maps iframe src — provided later by the user
};

// Menu items: EMPTY until the venue sends the real menu with DZD prices.
export type MenuItem = {
  id: string;
  category: string;
  nameFr: string;
  nameAr: string;
  descriptionFr?: string;
  descriptionAr?: string;
  priceDzd?: number; // leave undefined if price not confirmed
};
export const menuItems: MenuItem[] = [];

// Confirmed public events: EMPTY. Only add events approved by the owner.
export type ConfirmedEvent = { id: string; titleFr: string; titleAr: string; date: string };
export const confirmedEvents: ConfirmedEvent[] = [];

// Private-demo concepts — NOT announced, NOT bookable.
export const eventConcepts = ["karaoke", "werewolf", "cinema"] as const;

export function formatDzd(amount: number, lang: "fr" | "ar") {
  return new Intl.NumberFormat(lang === "ar" ? "ar-DZ" : "fr-DZ", {
    style: "currency",
    currency: "DZD",
    maximumFractionDigits: 0,
  }).format(amount);
}
