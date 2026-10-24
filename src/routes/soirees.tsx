import { createFileRoute } from "@tanstack/react-router";
import { useI18n, type TKey } from "@/lib/i18n";
import { confirmedEvents, eventConcepts } from "@/data/venue";
import { Card, EmptyState, PageHeading, Tag } from "@/components/site";

export const Route = createFileRoute("/soirees")({
  head: () => ({
    meta: [
      { title: "Soirées — Le Cavalier 23 (démo privée)" },
      { name: "description", content: "Aucun événement confirmé pour le moment à Le Cavalier 23." },
      { property: "og:title", content: "Soirées — Le Cavalier 23" },
      { property: "og:description", content: "Aucun événement confirmé pour le moment." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const { t, lang } = useI18n();
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <PageHeading>{t("eventsTitle")}</PageHeading>
      {confirmedEvents.length === 0 ? (
        <EmptyState title={t("noEvents")} sub={t("noEventsSub")} />
      ) : (
        <ul className="space-y-3">
          {confirmedEvents.map((e) => (
            <li key={e.id}><Card>{lang === "ar" ? e.titleAr : e.titleFr} — {e.date}</Card></li>
          ))}
        </ul>
      )}

      <section aria-labelledby="concepts" className="mt-12 rounded-2xl border-2 border-dashed border-input p-4 sm:p-6">
        <h2 id="concepts" className="text-xl font-semibold text-primary">{t("conceptsTitle")}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{t("conceptsNote")}</p>
        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
          {eventConcepts.map((c) => (
            <li key={c}>
              <Card className="h-full">
                <Tag>{t("conceptTag")}</Tag>
                <h3 className="mt-3 text-lg font-semibold">{t(c as TKey)}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t(`${c}Desc` as TKey)}</p>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
