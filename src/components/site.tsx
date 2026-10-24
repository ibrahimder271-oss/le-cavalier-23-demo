import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Camera, Clock, Languages, Menu as MenuIcon, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { venue } from "@/data/venue";

/* ---------- Buttons (one shared style set) ---------- */
const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
export const btn = {
  primary: `${base} bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift`,
  accent: `${base} bg-accent text-accent-foreground shadow-soft hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-lift`,
  outline: `${base} border border-primary/25 text-primary hover:border-primary hover:bg-primary/5`,
  ghostLight: `${base} border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10`,
};

function useNavLinks() {
  const { t } = useI18n();
  return [
    { to: "/", label: t("navHome") },
    { to: "/menu", label: t("navMenu") },
    { to: "/soirees", label: t("navEvents") },
    { to: "/reservation", label: t("navReserve") },
    { to: "/contact", label: t("navContact") },
  ] as const;
}

function LangToggle({ className = "" }: { className?: string }) {
  const { t, lang, setLang } = useI18n();
  return (
    <button
      type="button"
      onClick={() => setLang(lang === "fr" ? "ar" : "fr")}
      aria-label={t("switchLangLabel")}
      className={`inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/30 px-3.5 py-1.5 text-sm transition-colors hover:bg-primary-foreground/10 ${className}`}
    >
      <Languages className="h-4 w-4" aria-hidden />
      {t("switchLang")}
    </button>
  );
}

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span
        aria-hidden
        className="arch-top flex h-10 w-8 items-end justify-center border border-accent/70 pb-1 font-display text-xs text-accent"
      >
        23
      </span>
      <span className="font-display text-xl font-semibold leading-none tracking-tight">{venue.name}</span>
    </Link>
  );
}

export function SiteHeader() {
  const { t } = useI18n();
  const links = useNavLinks();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-primary text-primary-foreground shadow-soft">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:m-2 focus:rounded focus:bg-card focus:p-2 focus:text-foreground"
      >
        {t("skip")}
      </a>
      <p className="bg-accent px-4 py-1 text-center text-[11px] font-medium tracking-wide text-accent-foreground">
        {t("demoBanner")}
      </p>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
        <Logo />
        <nav aria-label="Navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="relative block px-3 py-2 text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                  activeProps={{
                    className:
                      "!text-primary-foreground after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:bg-accent",
                  }}
                  activeOptions={{ exact: true }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <LangToggle />
          <Link to="/reservation" className={`${btn.accent} hidden !px-4 !py-2 md:inline-flex`}>
            {t("ctaReserve")}
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t("navOpen")}
            aria-expanded={open}
            className="rounded-full p-2 hover:bg-primary-foreground/10 lg:hidden"
          >
            <MenuIcon className="h-6 w-6" aria-hidden />
          </button>
        </div>
      </div>

      {open && (
        <div className="pattern-arches fixed inset-0 z-50 flex flex-col lg:hidden" role="dialog" aria-modal="true">
          <div className="flex items-center justify-between px-5 py-4">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t("navClose")}
              className="rounded-full p-2 hover:bg-primary-foreground/10"
            >
              <X className="h-6 w-6" aria-hidden />
            </button>
          </div>
          <nav aria-label="Navigation mobile" className="flex-1 px-6 pt-6">
            <ul className="space-y-1">
              {links.map((l, i) => (
                <li key={l.to} className="rise-in" style={{ animationDelay: `${i * 50}ms` }}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-primary-foreground/10 py-4 font-display text-3xl"
                    activeProps={{ className: "text-accent" }}
                    activeOptions={{ exact: true }}
                  >
                    <span className="font-sans text-xs text-primary-foreground/50" dir="ltr">
                      0{i + 1}
                    </span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-6">
            <Link to="/reservation" onClick={() => setOpen(false)} className={`${btn.accent} w-full`}>
              {t("ctaReserve")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const { t } = useI18n();
  const links = useNavLinks();
  return (
    <footer className="pattern-arches text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/75">{t("footerBrand")}</p>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accent">{t("footerNav")}</p>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/80 hover:text-primary-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accent">{t("footerInfo")}</p>
          <p className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent" aria-hidden />
            <span dir="ltr">
              {venue.hours.open} – {venue.hours.close}
            </span>
          </p>
          <p className="text-xs text-primary-foreground/60">{t("hoursNote")}</p>
          <p className="text-primary-foreground/80">
            {t("phoneTitle")} : {venue.whatsapp ?? t("phonePending")}
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-primary-foreground/60 md:flex-row md:justify-between lg:px-8">
          <p>{t("disclaimer")}</p>
          <p>{t("footerDemo")}</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Layout building blocks ---------- */
export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] ${light ? "text-accent" : "text-cobalt"}`}>
      <span aria-hidden className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

/** Full-width page intro band used at the top of inner pages. */
export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="pattern-arches text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 pb-14 pt-12 lg:px-8 lg:pb-20 lg:pt-16">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className="rise-in mt-4 max-w-3xl text-4xl font-medium leading-[1.05] sm:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/75">{intro}</p>}
      </div>
    </section>
  );
}

export function PageHeading({ children }: { children: ReactNode }) {
  return <h1 className="mb-6 text-3xl font-medium text-primary sm:text-4xl">{children}</h1>;
}

export function Tag({ children, tone = "warning" }: { children: ReactNode; tone?: "warning" | "light" }) {
  const cls =
    tone === "light"
      ? "border border-primary-foreground/30 text-primary-foreground/85"
      : "border border-brass/40 bg-warning text-warning-foreground";
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide ${cls}`}>
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brass" />
      {children}
    </span>
  );
}

/** Placeholder frame for photos the owner will supply. Never replaced by generated "documentary" photos. */
export function PhotoPlaceholder({
  label,
  className = "",
  light = false,
  index,
}: {
  label: string;
  className?: string;
  light?: boolean;
  index?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex items-end overflow-hidden ${light ? "photo-placeholder-light text-muted-foreground" : "photo-placeholder text-primary-foreground/80"} ${className}`}
    >
      <span aria-hidden className={`absolute inset-3 border ${light ? "border-primary/10" : "border-primary-foreground/15"}`} />
      {index && (
        <span aria-hidden className="absolute end-5 top-4 font-display text-sm opacity-60" dir="ltr">
          {index}
        </span>
      )}
      <span className="relative m-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em]">
        <Camera className="h-3.5 w-3.5" aria-hidden />
        {label}
      </span>
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-lg border bg-card p-6 text-card-foreground shadow-soft ${className}`}>{children}</div>;
}

export function EmptyState({ title, sub, icon }: { title: string; sub: string; icon?: ReactNode }) {
  return (
    <div className="pattern-tiles relative overflow-hidden rounded-lg border border-dashed border-input bg-card px-6 py-14 text-center">
      <div aria-hidden className="arch-top mx-auto mb-5 flex h-16 w-12 items-center justify-center border border-cobalt/40 text-cobalt">
        {icon ?? <span className="font-display text-lg">…</span>}
      </div>
      <p className="font-display text-2xl text-primary">{title}</p>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">{sub}</p>
    </div>
  );
}

export function Disclaimer() {
  const { t } = useI18n();
  return (
    <p className="mt-10 border-s-2 border-accent bg-secondary px-5 py-4 text-sm text-secondary-foreground">
      {t("disclaimer")}
    </p>
  );
}

/** Hours block with the mandatory "à confirmer" label. */
export function HoursBlock({ dark = false }: { dark?: boolean }) {
  const { t } = useI18n();
  return (
    <div>
      <p className={`text-xs uppercase tracking-[0.2em] ${dark ? "text-accent" : "text-cobalt"}`}>{t("hoursTitle")}</p>
      <p className="mt-2 font-display text-5xl font-medium" dir="ltr">
        {venue.hours.open}
        <span className="mx-2 opacity-40">–</span>
        {venue.hours.close}
      </p>
      <div className="mt-3">
        <Tag tone={dark ? "light" : "warning"}>{t("hoursConfirm")}</Tag>
      </div>
      <p className={`mt-2 text-sm ${dark ? "text-primary-foreground/65" : "text-muted-foreground"}`}>{t("hoursNote")}</p>
    </div>
  );
}
