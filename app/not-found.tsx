import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">404 / Page not found</p>
        <h1 className="max-w-3xl">This page isn’t here.</h1>
        <p className="lead mt-6">
          The address may have changed. You can return home or browse the
          selected work.
        </p>
        <div className="hero-actions">
          <Link href="/" className="button button-primary">
            Return home
          </Link>
          <Link href="/work" className="button button-outline">
            View selected work
          </Link>
        </div>
      </div>
    </section>
  );
}
