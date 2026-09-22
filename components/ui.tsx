import Link from "next/link";
import type { ReactNode } from "react";
import type { PortfolioImage } from "@/content/profile";
import { ResilientImage } from "./resilient-image";

export function SectionHeading({ label, title, children }: { label: string; title: string; children?: ReactNode }) {
  return <div className="section-heading"><div><p className="eyebrow">{label}</p><h2>{title}</h2></div>{children}</div>;
}

export function PageIntro({ label, title, description }: { label: string; title: string; description: string }) {
  return <section className="page-intro navy"><div className="container"><p className="eyebrow">{label}</p><h1>{title}</h1><p className="lead">{description}</p></div></section>;
}

export function ImageFrame({ image, priority = false }: { image: PortfolioImage; priority?: boolean }) {
  return <div className="image-frame" style={{ aspectRatio: image.aspectRatio }}>
    {image.src ? <ResilientImage key={image.src} image={image} priority={priority} /> : <span className="image-placeholder"><span aria-hidden="true" className="placeholder-mark">＋</span><span>{image.placeholderLabel}</span></span>}
  </div>;
}

export function ContactCta() {
  return <section className="section navy" id="contact" tabIndex={-1}><div className="container cta-layout"><div><p className="eyebrow">Let’s connect</p><h2>Useful technology.<br />Meaningful work.</h2><p className="lead">Interested in digital innovation, applied AI, or a potential collaboration?</p></div><Link className="button button-cream" href="/contact">Get in touch <span aria-hidden="true">↗</span></Link></div></section>;
}
