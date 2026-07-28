import Link from "next/link";
import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <Brand />
          <p>Nigeria-first decision intelligence<br />for financial services.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/platform">Platform</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/waitlist">Request access</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
        <p className="copyright">© {new Date().getFullYear()} Stem Systems Ltd.</p>
      </div>
    </footer>
  );
}
