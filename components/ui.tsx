import { Camera } from "lucide-react";
import { preload } from "react-dom";
import { TBD, type Img } from "@/content/site";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (p: string) => `${base}${p}`;

/** Imagine responsive WebP (640/1280/1920) cu lazy loading. */
export function Picture({ img, sizes, eager = false, className = "", label = true }: { img: Img; sizes: string; eager?: boolean; className?: string; label?: boolean }) {
  const src = (w: number) => asset(`/images/${img.name}-${w}.webp`);
  // Imaginea principală (LCP) e cerută din <head>, înaintea CSS-ului și a scripturilor.
  if (eager) preload(src(1280), { as: "image", fetchPriority: "high", imageSrcSet: `${src(640)} 640w, ${src(960)} 960w, ${src(1280)} 1280w, ${src(1920)} 1920w`, imageSizes: sizes });
  return (
    <span className={`relative block overflow-hidden bg-plum ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src(1280)}
        srcSet={`${src(640)} 640w, ${src(960)} 960w, ${src(1280)} 1280w, ${src(1920)} 1920w`}
        sizes={sizes}
        alt={img.alt}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-soft)]"
      />
      {label && img.illustrative && (
        <span className="absolute right-2 top-2 rounded-full bg-ink/55 px-2 py-0.5 text-[0.62rem] tracking-wide text-white/90 backdrop-blur-sm">Foto ilustrativă</span>
      )}
    </span>
  );
}

/** Placeholder premium pentru o fotografie reală care urmează. */
export function PhotoPlaceholder({ title, className = "" }: { title: string; className?: string }) {
  return (
    <div className={`bg-plum-texture relative flex flex-col items-center justify-center overflow-hidden text-center text-white ${className}`} role="img" aria-label={`${title}. Fotografia reală se adaugă la lansare.`}>
      <span aria-hidden="true" className="absolute inset-3 border border-gold/30" />
      <Camera aria-hidden="true" strokeWidth={1} className="h-10 w-10 text-gold-light/80" />
      <span className="mt-4 px-6 font-serif text-xl leading-tight sm:text-2xl">{title}</span>
      <span className="mt-1.5 px-6 text-xs tracking-wide text-white/75">Foto — se înlocuiește cu poza reală</span>
    </div>
  );
}

/** Text cu „[exemplu]” evidențiat discret. */
export function T({ children }: { children: string }) {
  const parts = children.split(TBD);
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {p}
          {i < parts.length - 1 && (
            <span className="whitespace-nowrap rounded-sm border border-dashed border-current/40 px-1.5 py-px font-sans text-[0.78em] font-normal not-italic tracking-normal">{TBD}</span>
          )}
        </span>
      ))}
    </>
  );
}

export function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] ${light ? "text-gold-light" : "text-wine"}`}>
      <span aria-hidden="true" className="h-px w-7 bg-current" />
      {children}
    </p>
  );
}

export function Heading({ id, kicker, title, lead, light = false, center = false, className = "" }: { id: string; kicker: string; title: React.ReactNode; lead?: string; light?: boolean; center?: boolean; className?: string }) {
  return (
    <div data-reveal className={`max-w-2xl ${center ? "mx-auto flex flex-col items-center text-center" : ""} ${className}`}>
      <Kicker light={light}>{kicker}</Kicker>
      <h2 id={id} className="mt-4 text-[2.4rem] leading-[1.05] md:text-[3.4rem]">{title}</h2>
      {lead && <p className={`mt-4 text-[1.05rem] leading-relaxed md:text-lg ${light ? "text-white/80" : "text-muted"}`}>{lead}</p>}
    </div>
  );
}

const btn = "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[0.95rem] font-medium transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 active:translate-y-0";
export const btnGold = `${btn} bg-gold-light text-ink shadow-lg shadow-black/20 hover:bg-white`;
export const btnGhost = `${btn} border border-white/45 text-white hover:border-white hover:bg-white/10`;
export const btnInk = `${btn} bg-ink text-white hover:bg-wine hover:shadow-lg hover:shadow-wine/25`;
export const btnWine = `${btn} bg-wine text-white hover:bg-ink hover:shadow-lg hover:shadow-ink/25`;
export const btnLine = `${btn} border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white`;

export const container = "mx-auto w-full max-w-[76rem] px-5 md:px-8";
export const section = "py-16 md:py-24";
