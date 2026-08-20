import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found-signal" aria-hidden="true"><span /></div>
      <p className="eyebrow">Signal unavailable · 404</p>
      <h1>This signal went quiet.</h1>
      <p>The page may have moved, or the source is no longer active.</p>
      <div>
        <Link className="button button-primary" href="/">Return home</Link>
        <Link className="button button-secondary" href="/product">Explore product</Link>
      </div>
    </section>
  );
}
