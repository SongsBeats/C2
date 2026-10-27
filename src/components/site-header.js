"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [["Services", "/services/"], ["Industries", "/industries/"], ["About", "/about/"], ["Contact", "/contact/"]];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    const onResize = () => { if (window.innerWidth > 900) setOpen(false); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); };
  }, [open]);

  const active = (href) => pathname.replace(/\/$/, "") === href.replace(/\/$/, "");
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Corevolvix home" onClick={() => setOpen(false)}>
          <Image src="/logo-notagline.png" width={800} height={273} priority alt="Corevolvix — Smart Evolution for a Digital World" />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={href} href={href} aria-current={active(href) ? "page" : undefined}>{label}</Link>)}
        </nav>
        <Link className="header-contact" href="/contact/">Talk to Corevolvix <ArrowUpRight size={17} aria-hidden="true" /></Link>
        <button className="menu-toggle" ref={toggle} type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation" hidden={!open}>
        <div className="container">
          <Link href="/" onClick={() => setOpen(false)}>Home <ArrowUpRight size={18} /></Link>
          {links.map(([label, href]) => <Link key={href} href={href} aria-current={active(href) ? "page" : undefined} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={18} /></Link>)}
          <a href="mailto:info@corevolvix.com">info@corevolvix.com</a>
        </div>
      </nav>
    </header>
  );
}
