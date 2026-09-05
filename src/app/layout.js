import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { Motion } from "../components/motion";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://corevolvix.com"),
  title: {
    default: "Corevolvix | Business, Technology & AI Consulting",
    template: "%s | Corevolvix",
  },
  description: "Corevolvix helps organisations improve processes, modernise technology, apply AI responsibly and build scalable enterprise architecture.",
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
  openGraph: { title: "Corevolvix", description: "Smart Evolution for a Digital World", type: "website", locale: "en_GB" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <Motion />
      </body>
    </html>
  );
}
