'use client';

import { useState } from 'react';
import type { NavItem } from './types';

const navItems: NavItem[] = [
  { label: 'How It Works', href: '#solution' },
  { label: 'Features', href: '#features' },
  { label: 'Services', href: '#services' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Book Demo', href: '#demo' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="#top" className="text-sm font-semibold tracking-wide text-white sm:text-base">
          Restoration Rapid Response
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.slice(0, -1).map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted transition hover:text-white">
              {item.label}
            </a>
          ))}
          <a
            href="#demo"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Book a Demo
          </a>
        </nav>
        <button
          className="rounded-md border border-white/20 p-2 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t border-white/10 bg-panel p-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 text-sm text-muted transition hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
