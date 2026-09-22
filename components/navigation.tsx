"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { profile } from "@/content/profile";
import { assetPath } from "@/lib/paths";

const links = [ ["Work", "/work"], ["Experience", "/experience"], ["About", "/about"], ["Education", "/education"], ["Contact", "/contact"] ];

export function CvAction() {
  return profile.cv
    ? <a className="button button-outline cv-action" href={assetPath(profile.cv)} download>Download CV <span aria-hidden="true">↓</span></a>
    : <span className="button button-outline cv-action" role="link" aria-disabled="true" title="The downloadable CV is not available yet">CV unavailable</span>;
}

export function Navigation() {
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  function close() { dialog.current?.close(); }
  const items = links.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href || pathname.startsWith(`${href}/`) ? "page" : undefined} onClick={close}>{label}</Link>);
  return <>
    <nav className="desktop-nav" aria-label="Main navigation">{items}<CvAction /></nav>
    <button className="menu-toggle button button-outline" ref={trigger} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => { dialog.current?.showModal(); setOpen(true); }}>Menu <span aria-hidden="true">☰</span></button>
    <dialog id="mobile-navigation" ref={dialog} aria-labelledby="menu-title" onClose={() => { setOpen(false); trigger.current?.focus(); }} onClick={event => { if (event.target === event.currentTarget) close(); }}>
      <div className="menu-panel">
        <div className="flex items-center justify-between gap-4"><h2 id="menu-title">Navigation</h2><button className="button button-outline" onClick={close}>Close <span aria-hidden="true">×</span></button></div>
        <nav aria-label="Mobile navigation">{items}<CvAction /></nav>
      </div>
    </dialog>
    <noscript><nav className="fallback-nav" aria-label="Main navigation without JavaScript">{links.map(([label, href]) => <a key={href} href={assetPath(href)}>{label}</a>)}<CvAction /></nav><style>{`.menu-toggle{display:none}.site-header .container{flex-wrap:wrap}`}</style></noscript>
  </>;
}
