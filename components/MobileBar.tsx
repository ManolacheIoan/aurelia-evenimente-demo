import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { tel, whatsapp } from "@/content/site";
import { asset } from "./ui";

/** Mobil: bară fixă jos. Desktop: buton fix „Sună”. */
export function MobileBar() {
  const item = "flex flex-col items-center justify-center gap-1 py-2.5 text-[0.72rem] font-medium tracking-wide";
  return (
    <>
      <nav aria-label="Acțiuni rapide" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-ink/97 pb-[env(safe-area-inset-bottom)] text-white backdrop-blur md:hidden">
        <a href={tel} className={item}><Phone aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />Sună</a>
        <a href={whatsapp()} target="_blank" rel="noopener" className={`${item} border-x border-white/10`}><MessageCircle aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />WhatsApp</a>
        <a href={asset("/#oferta")} className={`${item} bg-wine`}><CalendarCheck aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />Cere ofertă</a>
      </nav>
      <a href={tel} className="fixed bottom-6 right-6 z-40 hidden items-center gap-2.5 rounded-full bg-wine py-3.5 pl-4 pr-5 font-medium text-white shadow-xl shadow-ink/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink md:inline-flex">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15"><Phone aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} /></span>
        Sună acum
      </a>
    </>
  );
}
