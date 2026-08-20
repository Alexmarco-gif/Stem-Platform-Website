"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Brand } from "./Brand";

const links = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/solutions", label: "Solutions" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`site-header header-surface ${open ? "menu-open" : ""}`}>
      <div className="site-shell header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => {
            const active = pathname === link.href;
            return <Link key={link.href} href={link.href} className={active ? "active" : ""} aria-current={active ? "page" : undefined}>{link.label}</Link>;
          })}
        </nav>
        <Link className="button button-primary header-cta" href="/pilot">Request Pilot <span aria-hidden="true">→</span></Link>
        <button className="menu-button" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}>
          <span>{open ? "Close" : "Menu"}</span><i aria-hidden="true" />
        </button>
      </div>
      <div id="mobile-navigation" className={`mobile-nav ${open ? "open" : ""}`}>
        <nav className="site-shell" aria-label="Mobile navigation">
          <p className="mobile-nav-label">Stem · Navigate</p>
          {links.map((link, index) => <Link key={link.href} href={link.href}><span>{String(index + 1).padStart(2, "0")}</span>{link.label}<b aria-hidden="true">→</b></Link>)}
          <Link className="button button-primary" href="/pilot">Request 21-Day Pilot <span aria-hidden="true">→</span></Link>
          <p className="mobile-nav-foot">Decision intelligence for Nigerian fintechs.</p>
        </nav>
      </div>
    </header>
  );
}
