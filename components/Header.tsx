"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Brand } from "./Brand";

const links = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [pastThreshold, setPastThreshold] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const onHome = pathname === "/";

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    let frame = 0;

    function updateHeaderState() {
      frame = 0;
      const scrollTop = window.scrollY;
      const hero = document.querySelector<HTMLElement>(".hero");
      const heroEnd = hero ? hero.offsetTop + hero.offsetHeight - 72 : 0;

      setPastThreshold(!onHome || scrollTop > 80);
      setPastHero(!onHome || scrollTop >= heroEnd);
    }

    function onScroll() {
      if (!frame) frame = window.requestAnimationFrame(updateHeaderState);
    }

    updateHeaderState();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [onHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        "site-header",
        !onHome || pastThreshold ? "header-surface" : "header-hero",
        !onHome || pastHero ? "past-hero" : "",
        open ? "menu-open" : ""
      ].join(" ")}
    >
      <div className="site-shell header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          className={`button header-cta ${!onHome || pastHero ? "button-primary" : "button-ghost"}`}
          href="/waitlist"
        >
          Request access <span aria-hidden="true">↗</span>
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <i aria-hidden="true" />
        </button>
      </div>
      <div id="mobile-navigation" className={`mobile-nav ${open ? "open" : ""}`}>
        <nav className="site-shell" aria-label="Mobile navigation">
          <p className="mobile-nav-label">Stem · Navigate</p>
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              <span>0{index + 1}</span>
              {link.label}
              <b aria-hidden="true">↗</b>
            </Link>
          ))}
          <Link className="button button-primary" href="/waitlist">
            Request trial access <span aria-hidden="true">↗</span>
          </Link>
          <p className="mobile-nav-foot">Decision intelligence for Nigerian financial services.</p>
        </nav>
      </div>
    </header>
  );
}
