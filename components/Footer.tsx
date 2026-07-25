import Link from "next/link";
import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <Brand />
          <p>Decision intelligence for African<br />financial services.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/platform">Platform</Link>
          <Link href="/about">About</Link>
          <Link href="/waitlist">Join waitlist</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
        <p className="copyright">© {new Date().getFullYear()} Stem Systems Ltd.</p>
      </div>
    </footer>
  );
}
