import { createFileRoute } from "@tanstack/react-router";
import { UtensilsCrossed } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { formatDzd, menuItems, type MenuItem } from "@/data/venue";
import { btn, Disclaimer, EmptyState, PageHero, PhotoPlaceholder, Tag } from "@/components/site";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Le Cavalier 23 (démo privée)" },
      { name: "description", content: "Menu de Le Cavalier 23 en cours de validation par l'établissement." },
      { property: "og:title", content: "Menu — Le Cavalier 23" },
      { property: "og:description", content: "Menu en cours de validation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: MenuPage,
});

// Reusable row: used for real items once menuItems is filled in (src/data/venue.ts).
function ProductRow({ item }: { item: MenuItem }) {
  const { lang, t } = useI18n();
  return (
    <div className="flex items-baseline gap-4 border-b border-dashed py-4">
      <div className="min-w-0">
        <h3 className="text-lg font-medium">{lang === "ar" ? item.nameAr : item.nameFr}</h3>
        <p className="text-sm text-muted-foreground">{lang === "ar" ? item.descriptionAr : item.descriptionFr}</p>
      </div>
      <span aria-hidden className="flex-1 border-b border-dotted border-input" />
      <p className="whitespace-nowrap font-medium text-cobalt">
        {item.priceDzd !== undefined ? formatDzd(item.priceDzd, lang) : t("tplPrice")}
      </p>
    </div>
  );
}

function MenuPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t("menuPreviewEyebrow")} title={t("menuTitle")} intro={t("menuIntro")} />
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        {menuItems.length === 0 ? (
          <EmptyState title={t("menuEmpty")} sub={t("menuEmptySub")} icon={<UtensilsCrossed className="h-5 w-5" />} />
        ) : (
          <div className="mx-auto max-w-3xl">{menuItems.map((i) => <ProductRow key={i.id} item={i} />)}</div>
        )}

        <section aria-labelledby="tpl" className="mt-20 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Tag>{t("demoContent")}</Tag>
            <h2 id="tpl" className="mt-4 text-3xl font-medium text-primary">{t("templateTitle")}</h2>
            <p className="mt-3 text-muted-foreground">{t("templateNote")}</p>
          </div>
          <article aria-label={t("templateTitle")} className="overflow-hidden rounded-lg border border-dashed bg-card shadow-soft sm:grid sm:grid-cols-2 lg:col-span-7">
            <PhotoPlaceholder label={t("photoPending")} className="aspect-[4/3] sm:aspect-auto sm:h-full" />
            <div className="space-y-2 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-cobalt">{t("tplCategory")}</p>
              <p className="font-display text-2xl">{t("tplName")}</p>
              <p className="text-sm text-muted-foreground">{t("tplDesc")}</p>
              <p className="pt-3 font-medium text-cobalt">{t("tplPrice")}</p>
            </div>
          </article>
        </section>

        <section className="pattern-arches mt-20 grid gap-6 rounded-lg p-8 text-primary-foreground md:grid-cols-[1fr_auto] md:items-center lg:p-12">
          <div>
            <h2 className="text-2xl font-medium">{t("orderTitle")}</h2>
            <p className="mt-2 max-w-xl text-sm text-primary-foreground/70">{t("orderNote")}</p>
          </div>
          <button type="button" disabled aria-disabled="true" className={`${btn.ghostLight} cursor-not-allowed opacity-50`}>
            {t("orderBtn")}
          </button>
        </section>
        <Disclaimer />
      </div>
    </>
  );
}
