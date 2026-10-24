# Le Cavalier 23 Demo

Build the first PRIVATE DEMO prototype for “Le Cavalier 23”, a snack/restaurant and social venue in Annaba, Algeria. The user is a beginner CS student and will later inspect/export the code and continue in VS Code. Make a polished, mobile-first bilingual French/Arabic website with correct LTR/RTL switching. Use a warm, welcoming visual identity inspired by the supplied real venue photos: warm cream/sand, deep navy/blue accents, subtle white architectural patterns, restrained warm evening highlights. Avoid generic luxury-resort visuals, excessive animation, and any suggestion that this is the official website of the entire Club Hippique Aïn-Achir. The public name is provisionally “Le Cavalier 23”; owner permission and final logo/name are still pending.

IMPORTANT CONTENT SAFETY / BUSINESS ACCURACY:
- This is a private demo, not ready for public launch.
- Never invent menu items, descriptions, prices, opening hours beyond the provisional hours below, contact details, reviews, delivery, capacity, or real events.
- For menu, use an empty state such as “Menu en cours de validation par l’établissement / المنيو راهو قيد التأكيد” and a clearly marked demo/admin placeholder structure; do not display fake prices or products.
- Provisional hours from the user: 19:00–00:00; label them “à confirmer par le propriétaire” and do not imply every day is confirmed.
- WhatsApp number is not yet provided. Do not create a working WhatsApp link or invent a number; show “Numéro à confirmer”.
- Location link/iframe will be provided by the user later. Use a clearly marked placeholder and no guessed map pin/address.
- Reservation requests are reportedly accepted, but exact rules and event details are not yet confirmed. Allow a demo request form UI, but clearly state requests are not confirmed until the venue replies.
- Concepts for karaoke, Loups-Garous/Werewolf and outdoor cinema are NOT confirmed events. Keep them in a “concepts à valider — démonstration privée” section that is not presented as an upcoming/bookable public calendar. Do not imply music/film permissions are obtained.
- No backend, database, login, admin panel, payment, real-time availability, or real order submission. Keep data in simple structured local files/state, and clearly label all demo-only functionality.
- Add the disclaimer: “Toute demande est confirmée uniquement après une réponse de Le Cavalier 23.” / “أي طلب يتأكد غير كي يردّ عليكم Le Cavalier 23.”
- Do not use generated images as documentary photos. Prefer image placeholders that can later be replaced with owner-approved current photos. If using existing images in this project context is not possible, use restrained neutral placeholders rather than invented venue photography.

PAGES/SECTIONS:
1) Home: brand heading, concise provisional intro marked “texte à valider par le propriétaire”, hero photo placeholder, clear CTA buttons “Voir le menu / شوف المنيو”, “Les soirées / الأمسيات”, “Demander une réservation / طلب حجز”. Do not feature horse-riding services.
2) Menu: categories are not assumed; show validation state, with accessible structured product-card template that can be populated after real menu and DZD prices arrive. Order request UI can be a disabled/demo-only example until actual menu and owner-approved contact are supplied. Do not assume takeaway or delivery; fulfillment options should only be configurable after confirmation.
3) Events: no public confirmed events yet. Show a clear “Aucun événement confirmé pour le moment” state and separate private-demo concept cards for karaoke, Loups-Garous, and outdoor cinema, each tagged “Concept à valider — non annoncé”.
4) Reservation request: accessible form for name, event (only if approved event exists; currently none, so avoid fake choices), number of people, optional note; do not show confirmed availability. If the form cannot submit to a real backend, clearly explain that this is a prototype and does not send anything.
5) Location/contact: placeholder for exact Google Maps iframe and entrance verification; show provisional hours with confirmation label and no guessed contact number.
6) Footer: brand distinction, bilingual disclaimer, no fake social links.

DESIGN/QUALITY:
- Responsive and optimized for phone first, accessible contrast, visible keyboard focus, semantic headings, labels for all form fields, reduced motion respect, RTL support.
- Clean navigation, simple card layouts, readable menu, no excessive animations.
- Make the French/Arabic language toggle functional for all major labels, with Arabic layout RTL.
- Use DZD formatting only when real prices are entered; never show fabricated prices.
- Keep implementation simple enough for a beginner to understand, with reusable components and structured placeholder data.
- Do not publish/deploy the project. Create only the private editable prototype.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/426fb899-193b-4bf8-a977-49e417d4d9ef).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
