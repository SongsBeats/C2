import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services, navigation } from "../lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="Corevolvix home"><Image src="/logo-notagline.png" alt="Corevolvix" width={800} height={273} /></Link>
          <p>Business transformation through process, technology, AI and architecture.</p>
          <a className="text-link" href="mailto:info@corevolvix.com">info@corevolvix.com <ArrowUpRight size={17} /></a>
        </div>
        <div className="footer-links"><h2>Explore</h2><Link href="/">Home</Link>{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
        <div className="footer-links"><h2>Capabilities</h2>{services.map((service) => <Link key={service.slug} href={`/services/#${service.slug}`}>{service.title}</Link>)}</div>
      </div>
      <div className="container footer-bottom"><p>© {new Date().getFullYear()} Corevolvix. All rights reserved.</p><p>Smart Evolution for a Digital World</p></div>
    </footer>
  );
}
