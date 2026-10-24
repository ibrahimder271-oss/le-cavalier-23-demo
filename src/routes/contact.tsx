import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { venue } from "@/data/venue";
import { Disclaimer, HoursBlock, PageHero, PhotoPlaceholder } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Accès & contact — Le Cavalier 23 (démo privée)" },
      { name: "description", content: "Horaires provisoires et accès de Le Cavalier 23, à confirmer." },
      { property: "og:title", content: "Accès & contact — Le Cavalier 23" },
      { property: "og:description", content: "Horaires provisoires, à confirmer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t("contactEyebrow")} title={t("contactTitle")} intro={t("contactIntro")} />
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {venue.mapEmbedUrl ? (
              <iframe title="Google Maps" src={venue.mapEmbedUrl} className="aspect-[4/3] w-full rounded-lg border shadow-soft" loading="lazy" />
            ) : (
              <PhotoPlaceholder label={t("mapPending")} light className="aspect-[4/3] rounded-lg" />
            )}
            <p className="mt-3 flex gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-cobalt" aria-hidden />
              {t("mapPendingSub")}
            </p>
          </div>
          <div className="space-y-6 lg:col-span-4">
            <div className="pattern-arches rounded-lg p-7 text-primary-foreground shadow-lift">
              <HoursBlock dark />
            </div>
            <div className="rounded-lg border bg-card p-7 shadow-soft">
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cobalt">
                <MessageCircle className="h-4 w-4" aria-hidden />
                {t("phoneTitle")}
              </p>
              <p className="mt-3 font-display text-2xl">{venue.whatsapp ?? t("phonePending")}</p>
            </div>
          </div>
        </div>
        <Disclaimer />
      </div>
    </>
  );
}
