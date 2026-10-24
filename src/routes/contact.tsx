import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { venue } from "@/data/venue";
import { Card, Disclaimer, PageHeading, PhotoPlaceholder } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Accès & contact — Le Cavalier 23 (démo privée)" },
      { name: "description", content: "Horaires provisoires et accès de Le Cavalier 23, à confirmer." },
      { property: "og:title", content: "Accès & contact — Le Cavalier 23" },
      { property: "og:description", content: "Horaires provisoires, à confirmer." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <PageHeading>{t("contactTitle")}</PageHeading>
      {venue.mapEmbedUrl ? (
        <iframe title="Google Maps" src={venue.mapEmbedUrl} className="aspect-video w-full rounded-2xl border" loading="lazy" />
      ) : (
        <div>
          <PhotoPlaceholder label={t("mapPending")} className="aspect-video" />
          <p className="mt-2 text-sm text-muted-foreground">{t("mapPendingSub")}</p>
        </div>
      )}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold text-primary">{t("hoursTitle")}</h2>
          <p className="mt-1 text-xl" dir="ltr">{venue.hours.open} – {venue.hours.close}</p>
          <p className="text-sm text-muted-foreground">{t("hoursNote")}</p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold text-primary">{t("phoneTitle")}</h2>
          <p className="mt-1 text-xl">{venue.whatsapp ?? t("phonePending")}</p>
        </Card>
      </div>
      <Disclaimer />
    </div>
  );
}
