import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Film, Mic, Moon } from "lucide-react";
import { useI18n, type TKey } from "@/lib/i18n";
import { confirmedEvents, eventConcepts } from "@/data/venue";
import { Card, EmptyState, PageHero, Tag } from "@/components/site";

export const Route = createFileRoute("/soirees")({
  head: () => ({
    meta: [
      { title: "Soirées — Le Cavalier 23 (démo privée)" },
      { name: "description", content: "Aucun événement confirmé pour le moment à Le Cavalier 23." },
      { property: "og:title", content: "Soirées — Le Cavalier 23" },
      { property: "og:description", content: "Aucun événement confirmé pour le moment." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: EventsPage,
});

const icons = { karaoke: Mic, werewolf: Moon, cinema: Film } as const;

function EventsPage() {
  const { t, lang } = useI18n();
  return (
    <>
      <PageHero eyebrow={t("eventsPreviewEyebrow")} title={t("eventsTitle")} intro={t("eventsIntro")} />
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        {confirmedEvents.length === 0 ? (
          <EmptyState title={t("noEvents")} sub={t("noEventsSub")} icon={<CalendarDays className="h-5 w-5" />} />
        ) : (
          <ul className="space-y-3">
            {confirmedEvents.map((e) => (
              <li key={e.id}><Card>{lang === "ar" ? e.titleAr : e.titleFr} — {e.date}</Card></li>
            ))}
          </ul>
        )}

        {/* Clearly separated private-demo area */}
        <section aria-labelledby="concepts" className="mt-20 rounded-lg border-2 border-dashed border-brass/50 bg-warning/40 p-6 sm:p-10">
          <Tag>{t("conceptTag")}</Tag>
          <h2 id="concepts" className="mt-4 text-3xl font-medium text-primary">{t("conceptsTitle")}</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{t("conceptsNote")}</p>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {eventConcepts.map((c, i) => {
              const Icon = icons[c];
              return (
                <li key={c} className="group relative overflow-hidden rounded-lg border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1">
                  <span aria-hidden className="absolute end-5 top-4 font-display text-4xl text-primary/10" dir="ltr">0{i + 1}</span>
                  <span className="arch-top flex h-14 w-11 items-center justify-center border border-cobalt/40 text-cobalt">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-xl font-medium">{t(c as TKey)}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t(`${c}Desc` as TKey)}</p>
                  <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.16em] text-warning-foreground">{t("conceptTag")}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
}
