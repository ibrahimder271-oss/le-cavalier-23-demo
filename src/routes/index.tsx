import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { venue } from "@/data/venue";
import { btn, Card, PhotoPlaceholder, Tag } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Le Cavalier 23 — Snack & restaurant à Annaba (démo privée)" },
      { name: "description", content: "Prototype privé du site de Le Cavalier 23, snack et restaurant à Annaba." },
      { property: "og:title", content: "Le Cavalier 23 — Annaba" },
      { property: "og:description", content: "Prototype privé, contenu à valider." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useI18n();
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <section className="grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{t("heroKicker")}</p>
          <h1 className="mt-2 text-4xl font-semibold text-primary sm:text-5xl">{venue.name}</h1>
          <p className="mt-4 text-lg">{t("heroIntro")}</p>
          <div className="mt-2"><Tag>{t("toValidate")}</Tag></div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/menu" className={btn.primary}>{t("ctaMenu")}</Link>
            <Link to="/soirees" className={btn.outline}>{t("ctaEvents")}</Link>
            <Link to="/reservation" className={btn.accent}>{t("ctaReserve")}</Link>
          </div>
        </div>
        <PhotoPlaceholder label={t("photoPending")} className="aspect-[4/3]" />
      </section>

      <Card className="mt-10">
        <h2 className="text-xl font-semibold text-primary">{t("hoursTitle")}</h2>
        <p className="mt-2 text-2xl font-medium" dir="ltr">
          {venue.hours.open} – {venue.hours.close}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{t("hoursNote")}</p>
      </Card>
    </div>
  );
}
