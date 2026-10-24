import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useI18n } from "@/lib/i18n";
import { venue } from "@/data/venue";

export function SiteHeader() {
  const { t, lang, setLang } = useI18n();
  const links = [
    { to: "/", label: t("navHome") },
    { to: "/menu", label: t("navMenu") },
    { to: "/soirees", label: t("navEvents") },
    { to: "/reservation", label: t("navReserve") },
    { to: "/contact", label: t("navContact") },
  ] as const;
  return (
    <header className="pattern-arches text-primary-foreground">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:m-2 focus:rounded focus:bg-card focus:p-2 focus:text-foreground">
        {t("skip")}
      </a>
      <p className="bg-warning px-4 py-1.5 text-center text-xs font-medium text-warning-foreground">
        {t("demoBanner")}
      </p>
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="font-display text-xl font-semibold tracking-tight">
          {venue.name}
        </Link>
        <button
          type="button"
          onClick={() => setLang(lang === "fr" ? "ar" : "fr")}
          aria-label={t("switchLangLabel")}
          className="rounded-full border border-primary-foreground/40 px-3 py-1 text-sm hover:bg-primary-foreground/10"
        >
          {t("switchLang")}
        </button>
      </div>
      <nav aria-label="Navigation" className="mx-auto max-w-5xl overflow-x-auto px-2 pb-2">
        <ul className="flex gap-1 whitespace-nowrap">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="block rounded-full px-3 py-1.5 text-sm text-primary-foreground/85 hover:bg-primary-foreground/10"
                activeProps={{ className: "bg-primary-foreground/15 text-primary-foreground font-medium" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="pattern-arches mt-16 text-primary-foreground">
      <div className="mx-auto max-w-5xl space-y-3 px-4 py-8 text-sm">
        <p className="font-display text-lg">{venue.name}</p>
        <p className="text-primary-foreground/85">{t("footerBrand")}</p>
        <p lang="fr" dir="ltr" className="text-primary-foreground/85">
          Toute demande est confirmée uniquement après une réponse de Le Cavalier 23.
        </p>
        <p lang="ar" dir="rtl" className="text-primary-foreground/85">
          أي طلب يتأكد غير كي يردّ عليكم Le Cavalier 23.
        </p>
        <p className="text-xs text-primary-foreground/70">{t("footerDemo")}</p>
      </div>
    </footer>
  );
}

export function PageHeading({ children }: { children: ReactNode }) {
  return <h1 className="mb-6 text-3xl font-semibold text-primary sm:text-4xl">{children}</h1>;
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-warning px-2.5 py-0.5 text-xs font-medium text-warning-foreground">
      {children}
    </span>
  );
}

export function PhotoPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`photo-placeholder flex items-center justify-center rounded-2xl border border-dashed border-input text-center text-sm text-muted-foreground ${className}`}
    >
      <span className="px-4">{label}</span>
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border bg-card p-5 text-card-foreground ${className}`}>{children}</div>;
}

export function EmptyState({ title, sub }: { title: string; sub: string }) {
  return (
    <Card className="border-dashed text-center">
      <p className="font-display text-xl text-primary">{title}</p>
      <p className="mt-2 text-sm text-muted-foreground">{sub}</p>
    </Card>
  );
}

export function Disclaimer() {
  const { t } = useI18n();
  return <p className="mt-6 rounded-xl bg-secondary p-4 text-sm text-secondary-foreground">{t("disclaimer")}</p>;
}

export const btn = {
  primary:
    "inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90",
  accent:
    "inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/90",
  outline:
    "inline-flex items-center justify-center rounded-full border border-primary px-5 py-3 text-sm font-medium text-primary hover:bg-primary/5",
};
