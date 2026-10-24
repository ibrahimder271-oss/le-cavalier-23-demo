import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Info } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { confirmedEvents } from "@/data/venue";
import { btn, HoursBlock, PageHero } from "@/components/site";

export const Route = createFileRoute("/reservation")({
  head: () => ({
    meta: [
      { title: "Demande de réservation — Le Cavalier 23 (démo privée)" },
      { name: "description", content: "Formulaire prototype de demande de réservation. Rien n'est envoyé." },
      { property: "og:title", content: "Réservation — Le Cavalier 23" },
      { property: "og:description", content: "Prototype : aucune demande n'est envoyée." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ReservationPage,
});

const field =
  "mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-base transition-colors focus:border-cobalt focus:outline-none focus:ring-2 focus:ring-ring/30";
const label = "text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground";

function ReservationPage() {
  const { t, lang } = useI18n();
  const [done, setDone] = useState(false);

  // Prototype: nothing is sent or stored anywhere.
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <>
      <PageHero eyebrow={t("reserveEyebrow")} title={t("reserveTitle")} intro={t("reserveIntro")} />
      <div className="mx-auto -mt-8 grid max-w-6xl gap-10 px-5 pb-20 lg:grid-cols-12 lg:px-8">
        <div className="rounded-lg border bg-card p-6 shadow-lift sm:p-10 lg:col-span-7">
          <p className="mb-8 flex gap-3 rounded-md border border-brass/40 bg-warning p-4 text-sm text-warning-foreground">
            <Info className="h-5 w-5 shrink-0" aria-hidden />
            {t("reserveIntro")}
          </p>
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className={label}>{t("fName")}</label>
              <input id="name" name="name" required autoComplete="name" className={field} />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="event" className={label}>{t("fEvent")}</label>
                {confirmedEvents.length === 0 ? (
                  <p id="event" className="mt-2 rounded-md border border-dashed px-4 py-3 text-sm text-muted-foreground">{t("fEventNone")}</p>
                ) : (
                  <select id="event" name="event" className={field}>
                    {confirmedEvents.map((e) => (
                      <option key={e.id} value={e.id}>{lang === "ar" ? e.titleAr : e.titleFr}</option>
                    ))}
                  </select>
                )}
              </div>
              <div>
                <label htmlFor="people" className={label}>{t("fPeople")}</label>
                <input id="people" name="people" type="number" min={1} required inputMode="numeric" className={field} />
              </div>
            </div>
            <div>
              <label htmlFor="note" className={label}>{t("fNote")}</label>
              <textarea id="note" name="note" rows={4} className={field} />
            </div>
            <button type="submit" className={`${btn.primary} w-full`}>{t("fSubmit")}</button>
            <p role="status" aria-live="polite" className={done ? "rounded-md bg-secondary p-4 text-sm font-medium text-primary" : ""}>
              {done ? t("fDone") : ""}
            </p>
          </form>
        </div>

        <aside className="space-y-8 lg:col-span-5 lg:pt-16">
          <div>
            <h2 className="text-2xl font-medium text-primary">{t("reserveHowTitle")}</h2>
            <ol className="mt-6 space-y-5">
              {(["reserveHow1", "reserveHow2", "reserveHow3"] as const).map((k, i) => (
                <li key={k} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cobalt/40 font-display text-cobalt" dir="ltr">{i + 1}</span>
                  <p className="pt-1.5 text-sm text-muted-foreground">{t(k)}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="border-t pt-8"><HoursBlock /></div>
        </aside>
      </div>
    </>
  );
}
