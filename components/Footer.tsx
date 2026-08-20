import Link from "next/link";
import { Brand } from "./Brand";

const explore = [
  ["Home", "/"], ["Product", "/product"], ["Solutions", "/solutions"],
  ["How It Works", "/how-it-works"], ["Pricing", "/pricing"]
];
const company = [["About", "/about"], ["Request Pilot", "/pilot"], ["Privacy", "/privacy"]];

export function Footer() {
  return <footer className="site-footer">
    <div className="site-shell footer-grid">
      <div className="footer-brand"><Brand /><p>Know which changes matter to your fintech—and what decision they require.</p></div>
      <nav aria-label="Explore"><b>Explore</b>{explore.map(([label,href]) => <Link href={href} key={href}>{label}</Link>)}</nav>
      <nav aria-label="Company"><b>Company</b>{company.map(([label,href]) => <Link href={href} key={href}>{label}</Link>)}</nav>
      <div className="footer-meta"><p className="footer-position">Nigeria-first fintech<br/>decision intelligence.</p><p className="copyright">© {new Date().getFullYear()} Stem Systems Ltd.<br />Lagos, Nigeria.</p></div>
    </div>
  </footer>;
}
