import Link from "next/link";

const categories = [
  { label: "Verhuizen naar Spanje", href: "/verhuizen-naar-spanje" },
  { label: "Wonen in Spanje", href: "/wonen-in-spanje" },
  { label: "Werken in Spanje", href: "/werken-in-spanje" },
  { label: "Belasting & regels", href: "/belasting-en-regels" },
  { label: "Zorg & verzekeringen", href: "/zorg-en-verzekeringen" },
  { label: "Auto & rijbewijs", href: "/auto-en-rijbewijs" },
];

const resources = [
  { label: "Checklist emigreren", href: "/checklist-emigreren" },
  { label: "Regio's vergelijken", href: "/regios" },
  { label: "Blog", href: "/blog" },
  { label: "Start hier", href: "/start-hier" },
];

const about = [
  { label: "Over PlanjaEspaña", href: "/over-ons" },
  { label: "Nieuwsbrief", href: "/nieuwsbrief" },
  { label: "Privacy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold text-white tracking-tight">
              Planja<span className="text-terracotta">España</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed">
              De slimste gids voor Nederlanders die naar Spanje willen verhuizen of er al wonen. Praktisch, helder, onafhankelijk.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Onderwerpen</h4>
            <ul className="space-y-2.5">
              {categories.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Handige links</h4>
            <ul className="space-y-2.5">
              {resources.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Over</h4>
            <ul className="space-y-2.5">
              {about.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-sm text-white/40">
          © {new Date().getFullYear()} PlanjaEspaña. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}
