import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlanjaEspana — De slimste gids voor Nederlanders in Spanje",
  description:
    "Praktisch, helder en onafhankelijk. Alles wat je moet weten over verhuizen naar Spanje, wonen, werken, belasting, zorg en meer — stap voor stap.",
  keywords: [
    "verhuizen naar spanje",
    "emigreren naar spanje",
    "wonen in spanje",
    "werken in spanje",
    "nederlanders in spanje",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
