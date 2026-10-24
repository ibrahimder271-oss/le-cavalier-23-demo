import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { formatDzd, menuItems, type MenuItem } from "@/data/venue";
import { btn, Card, Disclaimer, EmptyState, PageHeading, PhotoPlaceholder, Tag } from "@/components/site";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Le Cavalier 23 (démo privée)" },
      { name: "description", content: "Menu de Le Cavalier 23 en cours de validation par l'établissement." },
      { property: "og:title", content: "Menu — Le Cavalier 23" },
      { property: "og:description", content: "Menu en cours de validation." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: MenuPage,
});

// Reusable card: used for real items once menuItems is filled in.
function ProductCard({ item }: { item: MenuItem }) {
  const { lang, t } = useI18n();
  return (
    <Card>
      <h3 className="text-lg font-semibold">{lang === "ar" ? item.nameAr : item.nameFr}</h3>
      <p className="text-sm text-muted-foreground">{lang === "ar" ? item.descriptionAr : item.descriptionFr}</p>
      <p className="mt-2 font-medium">
        {item.priceDzd !== undefined ? formatDzd(item.priceDzd, lang) : t("tplPrice")}
      </p>
    </Card>
  );
}

function MenuPage() {
  const { t } = useI18n();
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <PageHeading>{t("menuTitle")}</PageHeading>

      {menuItems.length === 0 ? (
        <EmptyState title={t("menuEmpty")} sub={t("menuEmptySub")} />
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {menuItems.map((i) => <li key={i.id}><ProductCard item={i} /></li>)}
        </ul>
      )}

      <section aria-labelledby="tpl" className="mt-10">
        <h2 id="tpl" className="text-xl font-semibold text-primary">{t("templateTitle")}</h2>
        <p className="mb-4 mt-1 text-sm text-muted-foreground">{t("templateNote")}</p>
        <article aria-label={t("templateTitle")} className="max-w-sm rounded-2xl border border-dashed bg-card p-4 opacity-80">
          <PhotoPlaceholder label={t("photoPending")} className="aspect-video" />
          <div className="mt-3 space-y-1">
            <Tag>{t("tplCategory")}</Tag>
            <p className="font-semibold">{t("tplName")}</p>
            <p className="text-sm text-muted-foreground">{t("tplDesc")}</p>
            <p className="text-sm font-medium">{t("tplPrice")}</p>
          </div>
        </article>
      </section>

      <Card className="mt-10">
        <h2 className="text-xl font-semibold text-primary">{t("orderTitle")}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{t("orderNote")}</p>
        <button type="button" disabled aria-disabled="true" className={`${btn.primary} mt-4 cursor-not-allowed opacity-50`}>
          {t("orderBtn")}
        </button>
      </Card>
      <Disclaimer />
    </div>
  );
}
