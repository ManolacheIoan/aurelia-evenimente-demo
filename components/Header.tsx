"use client";

import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { site, tel } from "@/content/site";
import { asset } from "./ui";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`sticky top-0 z-40 border-b transition-all duration-500 ${scrolled ? "border-line bg-ivory/92 shadow-[0_10px_30px_-20px_rgba(42,20,25,0.35)] backdrop-blur-md" : "border-transparent bg-ivory"}`}>
      <div className={`mx-auto flex max-w-[76rem] items-center justify-between gap-4 px-5 transition-all duration-500 md:px-8 ${scrolled ? "py-2" : "py-3.5"}`}>
        <a href={asset("/")} className="leading-none">
          <span className={`block font-serif font-medium italic text-wine transition-all duration-500 ${scrolled ? "text-[1.65rem]" : "text-[1.95rem]"}`}>Aurelia</span>
          <span className="block text-[0.58rem] uppercase tracking-[0.34em] text-muted">{site.tagline}</span>
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-7 text-[0.9rem]">
            {site.nav.map((n) => (
              <li key={n.href}>
                <a href={asset(n.href)} className="relative inline-block py-3 after:absolute after:inset-x-0 after:bottom-2 after:h-px after:origin-left after:scale-x-0 after:bg-wine after:transition-transform after:duration-300 hover:text-wine hover:after:scale-x-100">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-1.5">
          <a href={tel} className="hidden items-center gap-2 px-3 py-2 text-sm font-medium transition hover:text-wine sm:inline-flex">
            <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />{site.phone.display}
          </a>
          <a href={asset("/#oferta")} className="rounded-full bg-wine px-5 py-2.5 text-sm font-medium text-white transition hover:bg-ink">Cere ofertă</a>
        </div>
      </div>
    </header>
  );
}
