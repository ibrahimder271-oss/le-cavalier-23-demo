import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n";
import { confirmedEvents } from "@/data/venue";
import { btn, Card, Disclaimer, PageHeading } from "@/components/site";

export const Route = createFileRoute("/reservation")({
  head: () => ({
    meta: [
      { title: "Demande de réservation — Le Cavalier 23 (démo privée)" },
      { name: "description", content: "Formulaire prototype de demande de réservation. Rien n'est envoyé." },
      { property: "og:title", content: "Réservation — Le Cavalier 23" },
      { property: "og:description", content: "Prototype : aucune demande n'est envoyée." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ReservationPage,
});

const field = "mt-1 block w-full rounded-lg border border-input bg-card px-3 py-2.5 text-base";

function ReservationPage() {
  const { t, lang } = useI18n();
  const [done, setDone] = useState(false);

  // Prototype: nothing is sent anywhere.
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-8">
      <PageHeading>{t("reserveTitle")}</PageHeading>
      <p className="mb-6 rounded-xl bg-warning p-4 text-sm text-warning-foreground">{t("reserveIntro")}</p>
      <Card>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium">{t("fName")}</label>
            <input id="name" name="name" required autoComplete="name" className={field} />
          </div>
          <div>
            <label htmlFor="event" className="text-sm font-medium">{t("fEvent")}</label>
            {confirmedEvents.length === 0 ? (
              <p id="event" className="mt-1 text-sm text-muted-foreground">{t("fEventNone")}</p>
            ) : (
              <select id="event" name="event" className={field}>
                {confirmedEvents.map((e) => (
                  <option key={e.id} value={e.id}>{lang === "ar" ? e.titleAr : e.titleFr}</option>
                ))}
              </select>
            )}
          </div>
          <div>
            <label htmlFor="people" className="text-sm font-medium">{t("fPeople")}</label>
            <input id="people" name="people" type="number" min={1} required inputMode="numeric" className={field} />
          </div>
          <div>
            <label htmlFor="note" className="text-sm font-medium">{t("fNote")}</label>
            <textarea id="note" name="note" rows={3} className={field} />
          </div>
          <button type="submit" className={`${btn.accent} w-full`}>{t("fSubmit")}</button>
          <p role="status" aria-live="polite" className="text-sm font-medium text-primary">
            {done ? t("fDone") : ""}
          </p>
        </form>
      </Card>
      <Disclaimer />
    </div>
  );
}
