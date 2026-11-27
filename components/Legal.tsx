import { container, Kicker } from "./ui";

export function Legal({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <article className={`${container} max-w-3xl py-16 md:py-24`}>
      <Kicker>Informații legale</Kicker>
      <h1 className="mt-4 text-[2.6rem] leading-tight md:text-[3.4rem]">{title}</h1>
      <p className="mt-4 rounded-md border border-dashed border-gold/60 bg-cream px-4 py-3 text-sm text-muted">
        Text generic, <strong className="text-ink">de verificat</strong> cu un jurist înainte de lansare. Ultima actualizare: {updated}.
      </p>
      <div className="mt-10 space-y-6 text-[1.02rem] leading-relaxed text-muted [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-ink">{children}</div>
    </article>
  );
}
