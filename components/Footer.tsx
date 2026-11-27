import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { site, tel, whatsapp } from "@/content/site";
import { asset, T } from "./ui";

export function Footer() {
  const social = site.social.filter((s) => s.url);
  return (
    <footer className="bg-plum-texture pb-28 pt-16 text-sm text-white/75 md:pb-10">
      <div className="mx-auto grid max-w-[76rem] gap-10 px-5 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:px-8">
        <div>
          <span className="block font-serif text-4xl font-medium italic text-gold-light">Aurelia</span>
          <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.34em]">{site.tagline} · Tecuci</span>
          <p className="mt-5 max-w-xs leading-relaxed">Sală de evenimente cu restaurant și cramă proprie, pentru nunți, botezuri, aniversări și evenimente corporate.</p>
        </div>
        <nav aria-label="Subsol">
          <h2 className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold-light">Pagina</h2>
          <ul className="mt-4 space-y-1">
            {site.nav.map((n) => <li key={n.href}><a href={asset(n.href)} className="inline-block py-1 transition hover:text-white">{n.label}</a></li>)}
            <li><a href={asset("/#oferta")} className="inline-block py-1 transition hover:text-white">Cere ofertă</a></li>
          </ul>
        </nav>
        <div>
          <h2 className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold-light">Contact</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-2.5"><MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" strokeWidth={1.6} /><a href={site.google.directionsUrl} target="_blank" rel="noopener" className="hover:text-white">{site.address.street}, {site.address.city}</a></li>
            <li className="flex gap-2.5"><Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" strokeWidth={1.6} /><a href={tel} className="hover:text-white">{site.phone.display}</a></li>
            <li className="flex gap-2.5"><Clock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" strokeWidth={1.6} /><span>Program: <T>{site.hours}</T></span></li>
          </ul>
        </div>
        <div>
          <h2 className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold-light">Urmăriți-ne</h2>
          <ul className="mt-4 space-y-1">
            {social.map((s) => (
              <li key={s.label}><a href={s.url} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 py-1 hover:text-white">{s.label} <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" /></a></li>
            ))}
            <li><a href={whatsapp()} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 py-1 hover:text-white">WhatsApp <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" /></a></li>
            <li><a href={site.google.reviewsUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 py-1 hover:text-white">Recenzii Google <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" /></a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[76rem] flex-col gap-3 border-t border-white/10 px-5 pt-6 text-xs text-white/70 md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} {site.name}. Toate drepturile rezervate.</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-1">
          <li><Link href="/confidentialitate/" className="inline-block py-1 hover:text-white">Confidențialitate</Link></li>
          <li><Link href="/cookies/" className="inline-block py-1 hover:text-white">Cookies</Link></li>
        </ul>
        <p>{site.demoBanner}</p>
      </div>
    </footer>
  );
}
