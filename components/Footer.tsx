import Link from "next/link";
import { Brand } from "./Brand";

export function Footer() {
  return <footer className="site-footer"><div className="site-shell footer-grid">
    <div className="footer-brand"><Brand /><p>Know which changes matter to your fintech—and what decision they require.</p></div>
    <nav aria-label="Product navigation"><b>Explore</b><Link href="/product">Product</Link><Link href="/solutions">Solutions</Link><Link href="/how-it-works">How It Works</Link><Link href="/pricing">Pricing</Link></nav>
    <nav aria-label="Company navigation"><b>Company</b><Link href="/about">About</Link><Link href="/pilot">Request Pilot</Link><Link href="/privacy">Privacy</Link></nav>
    <p className="copyright">© {new Date().getFullYear()} Stem Systems Ltd.<br />Lagos, Nigeria.</p>
  </div></footer>;
}
