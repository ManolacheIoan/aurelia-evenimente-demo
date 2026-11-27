"use client";

import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Img } from "@/content/site";
import { asset, Picture, PhotoPlaceholder } from "./ui";

export function Gallery({ items, instagram }: { items: readonly Img[]; instagram?: { url: string; note: string } }) {
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open !== null && !d.open) d.showModal();
    if (open === null && d.open) d.close();
  }, [open]);

  const step = (dir: number) => setOpen((i) => (i === null ? i : (i + dir + items.length) % items.length));
  // Mozaic: prima imagine mare, restul în grilă.
  const span = ["md:col-span-2 md:row-span-2", "", "md:row-span-2", "", "", "col-span-2 md:col-span-1"];

  return (
    <>
      <ul className="grid auto-rows-[11rem] grid-cols-2 gap-2.5 md:auto-rows-[14rem] md:grid-cols-4 md:gap-3">
        {items.map((it, i) => (
          <li key={it.name} data-reveal style={{ "--d": `${(i % 4) * 70}ms` } as React.CSSProperties} className={`${span[i] ?? ""} ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
            <button type="button" className="group relative block h-full w-full overflow-hidden text-left" onClick={(e) => { opener.current = e.currentTarget; setOpen(i); }}>
              <span className="sr-only">Mărește fotografia: {it.alt}</span>
              <Picture img={{ ...it, alt: "" }} sizes="(min-width: 768px) 50vw, 100vw" className="h-full w-full [&>img]:group-hover:scale-[1.05]" />
              <span aria-hidden="true" className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />
            </button>
          </li>
        ))}
        <li data-reveal className="col-span-2 md:col-span-1">
          <PhotoPlaceholder title="Sala Aurelia" className="h-full w-full" />
        </li>
        {instagram && (
          <li data-reveal className="col-span-2 md:col-span-1">
            <a href={instagram.url} target="_blank" rel="noopener" className="group flex h-full flex-col justify-between border border-line bg-cream p-6 transition-colors duration-300 hover:border-wine hover:bg-white">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-wine">Galeria completă</span>
              <span>
                <span className="block font-serif text-3xl leading-tight">Mai multe pe Instagram</span>
                <span className="mt-2 inline-flex flex-wrap items-center gap-1.5 break-all text-sm text-muted md:text-xs lg:text-sm">{instagram.note} <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
              </span>
            </a>
          </li>
        )}
      </ul>

      <dialog
        ref={dialog}
        aria-label="Galerie foto"
        className="m-auto max-h-none max-w-[94vw] bg-transparent p-0 backdrop:bg-ink/95 backdrop:backdrop-blur-sm"
        onClose={() => { setOpen(null); opener.current?.focus(); }}
        onKeyDown={(e) => { if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); }}
        onClick={(e) => { if (e.target === e.currentTarget) setOpen(null); }}
      >
        {open !== null && (
          <figure className="flex flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(`/images/${items[open].name}-1280.webp`)}
              srcSet={`${asset(`/images/${items[open].name}-1280.webp`)} 1280w, ${asset(`/images/${items[open].name}-1920.webp`)} 1920w`}
              sizes="94vw"
              alt={items[open].alt}
              className="max-h-[76vh] w-auto max-w-full object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-white/85" aria-live="polite">
              {open + 1} / {items.length} · {items[open].alt}{items[open].illustrative ? " · foto ilustrativă" : ""}
            </figcaption>
            <div className="mt-4 flex gap-2.5">
              <button type="button" onClick={() => step(-1)} aria-label="Fotografia anterioară" className="grid h-11 w-11 place-items-center rounded-full border border-white/40 text-white transition hover:bg-white/10"><ChevronLeft aria-hidden="true" className="h-5 w-5" /></button>
              <button type="button" onClick={() => step(1)} aria-label="Fotografia următoare" className="grid h-11 w-11 place-items-center rounded-full border border-white/40 text-white transition hover:bg-white/10"><ChevronRight aria-hidden="true" className="h-5 w-5" /></button>
              <button type="button" onClick={() => setOpen(null)} autoFocus className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-ink"><X aria-hidden="true" className="h-4 w-4" />Închide</button>
            </div>
          </figure>
        )}
      </dialog>
    </>
  );
}
