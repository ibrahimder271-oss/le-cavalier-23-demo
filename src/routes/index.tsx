import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { venue } from "@/data/venue";
import { btn, EmptyState, Eyebrow, HoursBlock, PhotoPlaceholder, Tag } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Le Cavalier 23 — Snack & restaurant à Annaba (démo privée)" },
      { name: "description", content: "Prototype privé du site de Le Cavalier 23, snack et restaurant à Annaba." },
      { property: "og:title", content: "Le Cavalier 23 — Annaba" },
      { property: "og:description", content: "Prototype privé, contenu à valider." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Home,
});

// Arrow that flips direction in Arabic (RTL).
const Arrow = () => <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden />;

function SectionHead({ eyebrow, title, link, linkTo }: { eyebrow: string; title: string; link?: string; linkTo?: "/menu" | "/soirees" }) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl font-medium text-primary sm:text-5xl">{title}</h2>
      </div>
      {link && linkTo && (
        <Link to={linkTo} className="inline-flex items-center gap-2 text-sm font-medium text-cobalt hover:underline">
          {link} <Arrow />
        </Link>
      )}
    </div>
  );
}

function Home() {
  const { t } = useI18n();
  return (
    <>
      {/* HERO — layered navy band with arched photo frame */}
      <section className="pattern-arches relative overflow-hidden text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-10 lg:grid-cols-12 lg:gap-6 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="rise-in flex flex-col justify-center lg:col-span-6">
            <Eyebrow light>{t("heroKicker")}</Eyebrow>
            <h1 className="mt-6 text-5xl font-medium leading-[1.02] sm:text-7xl">{t("heroTitle")}</h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-primary-foreground/75">{t("heroIntro")}</p>
            <div className="mt-4"><Tag tone="light">{t("toValidate")}</Tag></div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/menu" className={btn.accent}>{t("ctaMenu")} <Arrow /></Link>
              <Link to="/reservation" className={btn.ghostLight}>{t("ctaReserve")}</Link>
            </div>
          </div>
          <div className="relative lg:col-span-6">
            <PhotoPlaceholder label={t("heroPhoto")} className="arch-top aspect-[4/5] w-full shadow-lift sm:aspect-[5/5] lg:aspect-[4/5]" />
            <div className="absolute -bottom-6 start-4 w-[78%] max-w-xs rounded-lg bg-card p-5 text-card-foreground shadow-lift sm:start-[-1.5rem]">
              <HoursBlock />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO — editorial split */}
      <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>{t("introEyebrow")}</Eyebrow>
            <h2 className="mt-5 text-3xl font-medium leading-tight text-primary sm:text-5xl">{t("introTitle")}</h2>
          </div>
          <div className="flex flex-col justify-end gap-4 lg:col-span-5">
            <p className="text-lg leading-relaxed text-muted-foreground">{t("introBody")}</p>
            <div><Tag>{t("toValidate")}</Tag></div>
          </div>
        </div>
      </section>

      {/* MENU PREVIEW — staggered showcase placeholders */}
      <section className="pattern-tiles border-y bg-secondary/60">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHead eyebrow={t("menuPreviewEyebrow")} title={t("menuPreviewTitle")} link={t("ctaMenu")} linkTo="/menu" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {["01", "02", "03", "04"].map((n, i) => (
              <figure key={n} className={i % 2 ? "md:mt-12" : ""}>
                <PhotoPlaceholder label={t("dishSlot")} index={n} className="aspect-[3/4] rounded-lg" />
                <figcaption className="mt-3 text-xs text-muted-foreground">{t("tplPrice")}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-10 max-w-xl text-sm text-muted-foreground">{t("menuPreviewBody")}</p>
        </div>
      </section>

      {/* GALLERY — asymmetric mosaic */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHead eyebrow={t("galleryEyebrow")} title={t("galleryTitle")} />
        <div className="grid auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[180px] md:grid-cols-4">
          <PhotoPlaceholder label={t("photoPending")} index="01" className="col-span-2 row-span-2 rounded-lg" />
          <PhotoPlaceholder label={t("photoPending")} index="02" light className="rounded-lg" />
          <PhotoPlaceholder label={t("photoPending")} index="03" className="row-span-2 rounded-lg" />
          <PhotoPlaceholder label={t("photoPending")} index="04" light className="rounded-lg" />
          <PhotoPlaceholder label={t("photoPending")} index="05" light className="col-span-2 rounded-lg md:col-span-3" />
        </div>
        <p className="mt-5 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <Tag>{t("demoContent")}</Tag> {t("galleryNote")}
        </p>
      </section>

      {/* EVENING ATMOSPHERE — dark, warm brass glow */}
      <section className="photo-placeholder relative overflow-hidden text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div>
            <Eyebrow light>{t("eveningEyebrow")}</Eyebrow>
            <h2 className="mt-5 text-4xl font-medium leading-tight sm:text-5xl">{t("eveningTitle")}</h2>
            <p className="mt-6 max-w-md text-primary-foreground/75">{t("eveningBody")}</p>
          </div>
          <div className="flex items-end lg:justify-end">
            <div className="w-full max-w-sm border border-primary-foreground/20 p-8">
              <HoursBlock dark />
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS PREVIEW */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHead eyebrow={t("eventsPreviewEyebrow")} title={t("eventsTitle")} link={t("seeAll")} linkTo="/soirees" />
        <EmptyState title={t("noEvents")} sub={t("noEventsSub")} />
      </section>

      {/* LOCATION / CONTACT */}
      <section className="mx-auto max-w-6xl px-5 pb-24 lg:px-8">
        <div className="grid overflow-hidden rounded-lg border bg-card shadow-soft md:grid-cols-2">
          <PhotoPlaceholder label={t("mapPending")} light className="min-h-64" />
          <div className="space-y-6 p-8 lg:p-12">
            <Eyebrow>{t("locationEyebrow")}</Eyebrow>
            <h2 className="text-3xl font-medium text-primary">{venue.name} · {venue.city}</h2>
            <p className="flex gap-3 text-sm text-muted-foreground"><MapPin className="h-5 w-5 shrink-0 text-cobalt" aria-hidden />{t("mapPendingSub")}</p>
            <p className="flex gap-3 text-sm text-muted-foreground"><MessageCircle className="h-5 w-5 shrink-0 text-cobalt" aria-hidden />{t("phoneTitle")} : {venue.whatsapp ?? t("phonePending")}</p>
            <Link to="/contact" className={btn.primary}>{t("navContact")} <Arrow /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
