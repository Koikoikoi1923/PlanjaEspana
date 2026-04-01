import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ───── Icon components (simple inline SVGs) ───── */

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073c0 1.078-.882 1.968-1.967 1.968H5.717c-1.085 0-1.967-.89-1.967-1.968v-4.073m16.5 0A2.18 2.18 0 0018.75 12H5.25a2.18 2.18 0 00-1.5 2.15m16.5 0v-2.825A2.25 2.25 0 0018 7.075h-1.5V5.325A2.325 2.325 0 0014.175 3H9.825A2.325 2.325 0 007.5 5.325v1.75H6a2.25 2.25 0 00-2.25 2.25v2.825" />
    </svg>
  );
}

function CalculatorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6h.006v.008h-.006v-.008zm0 2.25h.006v.008h-.006v-.008zm0 2.25h.006v.008h-.006v-.008zm2.49-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm-2.49-7.5h1.125c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v2.25c0 .621.504 1.125 1.125 1.125h8.25z" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h.862c.227 0 .45.036.659.104l2.37.79a3.375 3.375 0 003.327-.197l.329-.219a3.375 3.375 0 014.155.165l.178.137c.478.367 1.07.566 1.681.566h1.289m-12.6 0h12.6m0 0h2.25a1.125 1.125 0 001.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375h-.532a2.25 2.25 0 01-1.594-.66l-.89-.89a2.25 2.25 0 00-1.591-.659H9.375" />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

/* ───── Data ───── */

const categories = [
  {
    icon: SunIcon,
    title: "Verhuizen naar Spanje",
    description: "Van droom naar plan: alles over emigreren, inschrijven, en je eerste stappen in Spanje.",
    href: "/verhuizen-naar-spanje",
  },
  {
    icon: HomeIcon,
    title: "Wonen in Spanje",
    description: "Huis kopen of huren, regio's vergelijken, en het dagelijks leven als Nederlander.",
    href: "/wonen-in-spanje",
  },
  {
    icon: BriefcaseIcon,
    title: "Werken & ondernemen",
    description: "Autónomo worden, een SL oprichten, of remote werken vanuit Spanje.",
    href: "/werken-in-spanje",
  },
  {
    icon: CalculatorIcon,
    title: "Belasting & regels",
    description: "Beckham-wet, belastingverdrag, modelo's en wat je écht moet weten over fiscale zaken.",
    href: "/belasting-en-regels",
  },
  {
    icon: HeartIcon,
    title: "Zorg & verzekeringen",
    description: "Seguridad Social, aanvullende verzekeringen, en toegang tot Spaanse gezondheidszorg.",
    href: "/zorg-en-verzekeringen",
  },
  {
    icon: TruckIcon,
    title: "Auto & rijbewijs",
    description: "Auto importeren, Spaans kenteken, rijbewijs omwisselen — stap voor stap uitgelegd.",
    href: "/auto-en-rijbewijs",
  },
];

const guides = [
  {
    tag: "Populair",
    title: "Checklist: Emigreren naar Spanje in 2026",
    description: "Alle stappen op een rij — van uitschrijven in Nederland tot je eerste maanden in Spanje.",
    href: "/checklist-emigreren",
  },
  {
    tag: "Gids",
    title: "De Beckham-wet uitgelegd voor Nederlanders",
    description: "Wat is het, wie komt in aanmerking, en hoe vraag je het aan? Helder en actueel overzicht.",
    href: "/belasting-en-regels/beckham-wet",
  },
  {
    tag: "Vergelijking",
    title: "Wonen in Spanje: welke regio past bij jou?",
    description: "Costa Blanca, Barcelona, Andalusië of de Balearen? Vergelijk klimaat, kosten en leefstijl.",
    href: "/regios",
  },
];

/* ───── Page ───── */

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden">
          {/* Subtle warm gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-terracotta-light via-background to-surface" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Verhuizen naar Spanje?{" "}
                <span className="text-terracotta">Hier begint je plan.</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted leading-relaxed max-w-xl">
                Praktisch, helder en onafhankelijk. Alles wat je moet weten over emigreren, wonen en werken in Spanje — stap voor stap.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/start-hier"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-terracotta rounded-xl hover:bg-terracotta-dark transition-colors"
                >
                  Start hier
                  <ArrowRightIcon className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/checklist-emigreren"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-foreground bg-white border border-border rounded-xl hover:bg-surface transition-colors"
                >
                  Bekijk de checklist
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust bar ── */}
        <section className="border-y border-border bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted">
              <span className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-terracotta" />
                Actueel in 2026
              </span>
              <span className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-terracotta" />
                Door Nederlanders
              </span>
              <span className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-terracotta" />
                Onafhankelijk platform
              </span>
              <span className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-terracotta" />
                Gratis toegankelijk
              </span>
            </div>
          </div>
        </section>

        {/* ── Categories grid ── */}
        <section className="py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                Alles wat je moet regelen, overzichtelijk op één plek
              </h2>
              <p className="mt-4 text-muted text-lg">
                Van eerste oriëntatie tot de praktische details — kies een onderwerp en begin.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group p-6 bg-white border border-border rounded-2xl hover:shadow-md hover:border-terracotta/30 transition-all"
                >
                  <cat.icon className="w-8 h-8 text-terracotta mb-4" />
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-terracotta transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {cat.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Start Hier (3-step flow) ── */}
        <section className="py-20 sm:py-24 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                Nieuw hier? Begin met drie stappen.
              </h2>
              <p className="mt-4 text-muted text-lg">
                Of je nu droomt, plant of al bezig bent — wij helpen je op weg.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Oriënteer je",
                  description:
                    "Lees over regio's, kosten en het leven in Spanje. Ontdek wat bij je past.",
                },
                {
                  step: "2",
                  title: "Bereid je voor",
                  description:
                    "Gebruik onze checklists en gidsen om alles stap voor stap te regelen.",
                },
                {
                  step: "3",
                  title: "Regel het",
                  description:
                    "NIE aanvragen, inschrijven, verzekering regelen — wij wijzen je de weg.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="relative p-8 bg-white rounded-2xl border border-border"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-terracotta text-white font-bold text-sm mb-5">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/start-hier"
                className="inline-flex items-center px-6 py-3.5 text-base font-semibold text-white bg-terracotta rounded-xl hover:bg-terracotta-dark transition-colors"
              >
                Begin met stap 1
                <ArrowRightIcon className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Featured guides ── */}
        <section className="py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                  Meest gelezen gidsen
                </h2>
                <p className="mt-3 text-muted text-lg">
                  Praktische informatie die duizenden Nederlanders al hielp.
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center text-sm font-semibold text-terracotta hover:text-terracotta-dark transition-colors"
              >
                Alle artikelen
                <ArrowRightIcon className="ml-1 w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {guides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group flex flex-col p-6 bg-white border border-border rounded-2xl hover:shadow-md hover:border-terracotta/30 transition-all"
                >
                  <span className="inline-block self-start px-2.5 py-1 text-xs font-semibold text-terracotta bg-terracotta-light rounded-full mb-4">
                    {guide.tag}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-terracotta transition-colors leading-snug">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                    {guide.description}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-terracotta flex items-center">
                    Lees meer
                    <ArrowRightIcon className="ml-1 w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
            <div className="sm:hidden text-center mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-sm font-semibold text-terracotta hover:text-terracotta-dark transition-colors"
              >
                Alle artikelen
                <ArrowRightIcon className="ml-1 w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Newsletter ── */}
        <section className="py-20 sm:py-24 bg-foreground">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <EnvelopeIcon className="w-10 h-10 text-terracotta mx-auto mb-5" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Elke week Spanje-tips in je inbox
              </h2>
              <p className="mt-4 text-white/60 text-lg leading-relaxed">
                Ontvang praktische tips, nieuwe gidsen en updates over wonen en werken in Spanje. Geen spam, geen verkooppraatjes — gewoon nuttige informatie.
              </p>
              <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Je e-mailadres"
                  className="flex-1 px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 font-semibold text-white bg-terracotta rounded-xl hover:bg-terracotta-dark transition-colors whitespace-nowrap"
                >
                  Aanmelden
                </button>
              </form>
              <p className="mt-4 text-xs text-white/30">
                Gratis. Afmelden kan altijd. We respecteren je privacy.
              </p>
            </div>
          </div>
        </section>

        {/* ── Trust / About section ── */}
        <section className="py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                Waarom PlanjaEspaña?
              </h2>
              <p className="mt-6 text-muted text-lg leading-relaxed">
                We weten hoe overweldigend het kan zijn om naar Spanje te verhuizen. Tientallen overheidssites, tegenstrijdige informatie in Facebookgroepen, en adviseurs die meteen willen verkopen.
              </p>
              <p className="mt-4 text-muted text-lg leading-relaxed">
                PlanjaEspaña is anders. Wij bieden gestructureerde, actuele en onafhankelijke informatie — geschreven door Nederlanders die het proces zelf hebben doorlopen. Geen ruis, geen verborgen agenda. Gewoon heldere antwoorden op je vragen.
              </p>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { stat: "100%", label: "Onafhankelijk" },
                  { stat: "2026", label: "Actueel bijgewerkt" },
                  { stat: "Gratis", label: "Altijd toegankelijk" },
                ].map((item) => (
                  <div key={item.label} className="p-5 rounded-2xl bg-surface">
                    <div className="text-2xl font-bold text-terracotta">
                      {item.stat}
                    </div>
                    <div className="mt-1 text-sm text-muted">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  href="/over-ons"
                  className="inline-flex items-center text-sm font-semibold text-terracotta hover:text-terracotta-dark transition-colors"
                >
                  Meer over ons
                  <ArrowRightIcon className="ml-1 w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
