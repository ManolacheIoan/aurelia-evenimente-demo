import { ArrowRight, CalendarCheck, Check, Clock, MapPin, MessageCircle, Navigation, Phone, Star, Wine } from "lucide-react";
import { Gallery } from "@/components/Gallery";
import { QuoteForm } from "@/components/QuoteForm";
import { btnGhost, btnGold, btnInk, btnLine, container, Heading, Kicker, Picture, PhotoPlaceholder, section, T } from "@/components/ui";
import { images, site, tel, whatsapp, type Availability } from "@/content/site";

const status: Record<Availability, { box: string; dot: string }> = {
  Liber: { box: "border-emerald-800/20 bg-white", dot: "bg-emerald-600" },
  "Puține locuri": { box: "border-gold/50 bg-[#fbf4e6]", dot: "bg-amber-500" },
  Ocupat: { box: "border-line bg-cream/60 text-muted", dot: "bg-stone-400" },
};

const delay = (i: number) => ({ "--d": `${i * 90}ms` }) as React.CSSProperties;

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section aria-labelledby="hero-t" className="relative isolate overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 -z-10 md:left-auto md:w-[48%]">
          <Picture img={images.hero} eager sizes="(min-width: 768px) 48vw, 100vw" className="h-full w-full" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/70 to-ink/95 md:bg-gradient-to-r md:from-ink md:via-ink/20 md:to-transparent" />
        </div>
        <div className={`${container} grid min-h-[min(88svh,52rem)] items-center py-16 md:grid-cols-[1.08fr_0.92fr] md:py-24`}>
          <div className="max-w-xl">
            <Kicker light>{site.hero.eyebrow}</Kicker>
            <h1 id="hero-t" className="mt-6 text-[3rem] leading-[0.98] sm:text-[3.6rem] md:text-[4.6rem] lg:text-[5.2rem]">
              Nunți, botezuri și evenimente <em className="font-medium text-gold-light">în Tecuci</em>
            </h1>
            <p className="mt-6 max-w-md text-[1.08rem] leading-relaxed text-white/85 md:text-lg">{site.hero.lead}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={tel} className={btnGold}><Phone aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />Sună acum</a>
              <a href="#date-libere" className={btnGhost}><CalendarCheck aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />Verifică data liberă</a>
            </div>
            <a href={site.google.reviewsUrl} target="_blank" rel="noopener" className="mt-9 inline-flex items-center gap-3 text-sm text-white/85 transition hover:text-white">
              <span className="flex gap-0.5 text-gold-light" aria-hidden="true">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />)}</span>
              <span><strong className="font-semibold text-white">{site.google.rating}</strong> pe Google · {site.google.reviewsLabel}</span>
            </a>
          </div>
        </div>
      </section>

      {/* BANDĂ DE ÎNCREDERE — doar date reale */}
      <section aria-label="Pe scurt" className="border-b border-line bg-cream">
        <dl className={`${container} grid grid-cols-2 md:grid-cols-4`}>
          {site.trust.map((t, i) => (
            <div key={t.label} data-reveal style={delay(i)} className={`py-7 md:py-9 ${i % 2 ? "border-l border-line pl-5" : ""} ${i > 1 ? "border-t border-line md:border-t-0" : ""} ${i > 0 ? "md:border-l md:pl-8" : ""}`}>
              <dt className="sr-only">{t.label}</dt>
              <dd>
                <span className="block font-serif text-[2.4rem] leading-none text-wine md:text-5xl">{t.value}</span>
                <span className="mt-2 block text-sm text-muted">{t.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* SALA */}
      <section id="sala" aria-labelledby="sala-t" className={`bg-ivory ${section}`}>
        <div className={`${container} grid gap-12 md:grid-cols-[1fr_1.05fr] md:items-center md:gap-16`}>
          <div className="relative grid grid-cols-[1.4fr_1fr] gap-3" data-reveal>
            <PhotoPlaceholder title="Sala Aurelia" className="aspect-[3/4]" />
            <div className="flex flex-col gap-3 pt-12">
              <Picture img={images.hall} sizes="(min-width: 768px) 20vw, 40vw" className="aspect-[3/4]" />
              <Picture img={images.wedding} sizes="(min-width: 768px) 20vw, 40vw" className="aspect-square" />
            </div>
          </div>
          <div>
            <Heading id="sala-t" kicker="Sala Aurelia" title="O sală care se ține minte" lead={site.hall.intro} />
            <dl data-reveal className="mt-8 grid grid-cols-3 divide-x divide-line border-y border-line">
              {site.hall.facts.map((f) => (
                <div key={f.label} className="px-3 py-5 first:pl-0">
                  <dt className="text-[0.66rem] uppercase tracking-[0.22em] text-muted">{f.label}</dt>
                  <dd className="mt-2 font-serif text-base leading-snug sm:text-lg"><T>{f.value}</T></dd>
                </div>
              ))}
            </dl>
            <ul data-reveal className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {site.hall.amenities.map((a) => (
                <li key={a} className="flex gap-3 text-[0.96rem] leading-snug">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.2} />
                  <span><T>{a}</T></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EVENIMENTE */}
      <section id="evenimente" aria-labelledby="ev-t" className={`bg-cream ${section}`}>
        <div className={container}>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Heading id="ev-t" kicker="Ce sărbătorim împreună" title="Evenimente" lead="Fiecare eveniment are ritmul lui. Noi ne ocupăm de sală, meniu și servire." />
            <a href="#oferta" data-reveal className={`${btnLine} self-start md:self-auto`}>Cere o ofertă<ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {site.events.map((e, i) => (
              <li key={e.title} data-reveal style={delay(i)}>
                <a href="#oferta" className="group block h-full overflow-hidden bg-ivory shadow-[0_1px_0_rgba(42,20,25,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_50px_-30px_rgba(42,20,25,0.45)]">
                  <Picture img={images[e.image]} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="aspect-[4/3] sm:aspect-[4/5] [&>img]:group-hover:scale-[1.06]" />
                  <div className="p-6">
                    <span className="font-serif text-sm italic text-wine">0{i + 1}</span>
                    <h3 className="mt-1 text-[2rem] leading-tight">{e.title}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{e.text}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-wine">
                      Cere ofertă<span className="sr-only"> pentru {e.title.toLowerCase()}</span>
                      <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-16 grid gap-10 border-t border-line pt-12 md:grid-cols-[0.8fr_2fr]">
            <div data-reveal>
              <Kicker>Simplu și clar</Kicker>
              <h3 className="mt-4 text-[2.1rem] leading-tight md:text-[2.6rem]">Rezervarea, în trei pași</h3>
            </div>
            <ol className="grid gap-8 sm:grid-cols-3">
              {site.steps.map((s, i) => (
                <li key={s.title} data-reveal style={delay(i)} className="relative">
                  <span className="font-serif text-6xl italic leading-none text-gold/80">{i + 1}</span>
                  <h4 className="mt-3 text-2xl">{s.title}</h4>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted"><T>{s.text}</T></p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* MENIURI */}
      <section id="meniuri" aria-labelledby="men-t" className={`bg-plum-texture text-white ${section}`}>
        <div className={container}>
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
            <Heading id="men-t" light kicker="Din bucătăria Aurelia" title="Meniuri pentru evenimente" lead={site.menus.note} />
            <div data-reveal className="hidden md:block"><Picture img={images.dish} sizes="40vw" className="aspect-[16/9]" /></div>
          </div>
          <div className="mt-14 grid items-stretch gap-5 md:grid-cols-3">
            {site.menus.items.map((m, i) => (
              <article key={m.name} data-reveal style={delay(i)} className={`relative flex flex-col p-8 transition-transform duration-500 hover:-translate-y-1 ${m.featured ? "bg-ivory text-ink shadow-2xl shadow-black/40 md:-my-5 md:py-12" : "border border-white/15 bg-white/[0.03]"}`}>
                {m.featured && <span className="absolute -top-3 left-8 rounded-full bg-wine px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-white">Recomandat</span>}
                <p className={`text-[0.7rem] uppercase tracking-[0.25em] ${m.featured ? "text-wine" : "text-gold-light"}`}>Meniul</p>
                <h3 className="mt-1 text-[2.6rem] leading-none">{m.name}</h3>
                <p className={`mt-3 text-sm ${m.featured ? "text-muted" : "text-white/75"}`}><T>{m.price}</T></p>
                <ul className={`mt-6 flex-1 space-y-3 border-t pt-6 text-[0.94rem] ${m.featured ? "border-line" : "border-white/15"}`}>
                  {m.courses.map((c) => <li key={c}><T>{c}</T></li>)}
                </ul>
                <a href="#oferta" className={`mt-8 ${m.featured ? btnInk : btnGhost}`}>Cere meniul {m.name}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CRAMA */}
      <section aria-labelledby="crama-t" className="bg-ivory">
        <div className="grid md:grid-cols-2">
          <Picture img={images.cellar} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[4/3] md:aspect-auto md:min-h-[34rem]" />
          <div className="flex items-center px-5 py-16 md:px-16 md:py-20">
            <div className="max-w-md">
              <Kicker>Restaurant &amp; Cramă</Kicker>
              <h2 id="crama-t" data-reveal className="mt-4 text-[2.4rem] leading-[1.05] md:text-[3.2rem]">{site.cellar.title}</h2>
              <p data-reveal className="mt-4 text-[1.05rem] leading-relaxed text-muted">{site.cellar.text}</p>
              <ul data-reveal className="mt-7 space-y-3">
                {site.cellar.details.map((d) => (
                  <li key={d} className="flex gap-3 text-[0.96rem]"><Wine aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-wine" strokeWidth={1.7} /><span><T>{d}</T></span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section id="galerie" aria-labelledby="gal-t" className={`border-t border-line bg-ivory ${section}`}>
        <div className={container}>
          <Heading id="gal-t" kicker="Atmosferă" title="Galerie" lead="Câteva imagini de atmosferă. Fotografiile reale ale sălii se adaugă la lansare." className="mb-10" />
          <Gallery items={site.gallery.map((k) => images[k])} instagram={site.social.find((s) => s.label === "Instagram")} />
        </div>
      </section>

      {/* DATE LIBERE */}
      <section id="date-libere" aria-labelledby="dl-t" className={`bg-cream ${section}`}>
        <div className={container}>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Heading id="dl-t" kicker="Calendar" title="Date libere" lead="Weekendurile căutate se rezervă din timp. Verificați luna care vă interesează." />
            <ul data-reveal className="flex flex-wrap gap-5 text-sm" aria-label="Legendă">
              {(Object.keys(status) as Availability[]).map((s) => (
                <li key={s} className="flex items-center gap-2"><span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${status[s].dot}`} />{s}</li>
              ))}
            </ul>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
            {site.availability.map((a, i) => (
              <li key={a.month + a.year} data-reveal style={delay(i % 6)} className={`rounded-sm border px-4 py-4 transition-transform duration-300 hover:-translate-y-0.5 ${status[a.status].box}`}>
                <span className="block text-[0.66rem] tracking-[0.22em] text-muted">{a.year}</span>
                <span className="block font-serif text-[1.6rem] leading-tight">{a.month}</span>
                <span className="mt-2 flex items-center gap-2 text-sm font-medium"><span aria-hidden="true" className={`h-2 w-2 rounded-full ${status[a.status].dot}`} />{a.status}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm text-muted"><T>{site.availabilityNote}</T></p>
            <a href="#oferta" className={btnInk}>Rezervă data voastră<ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
          </div>
        </div>
      </section>

      {/* OFERTĂ */}
      <section id="oferta" aria-labelledby="of-t" className={`bg-ivory ${section}`}>
        <div className={`${container} grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16`}>
          <div>
            <Heading id="of-t" kicker="Fără obligații" title="Cereți o ofertă" lead="Spuneți-ne data, tipul evenimentului și câți invitați aveți. Vă răspundem cu o ofertă făcută pentru voi." />
            <ul data-reveal className="mt-8 space-y-3.5 text-[0.97rem]">
              {["Oferta e gratuită și nu vă obligă la nimic", "Vorbiți direct cu restaurantul, fără intermediari", "Puteți veni să vedeți sala înainte să decideți"].map((x) => (
                <li key={x} className="flex gap-3"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-wine" strokeWidth={2.2} />{x}</li>
              ))}
            </ul>
            <div data-reveal className="mt-10 border-l-2 border-gold pl-6">
              <span className="text-sm text-muted">Preferați telefonul?</span>
              <a href={tel} className="mt-1 block font-serif text-[2.2rem] leading-tight transition hover:text-wine">{site.phone.display}</a>
              <a href={whatsapp()} target="_blank" rel="noopener" className="mt-1 inline-flex items-center gap-2 py-1 text-sm font-medium text-wine"><MessageCircle aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />Scrieți-ne pe WhatsApp</a>
            </div>
          </div>
          <div data-reveal className="rounded-sm border border-line bg-white p-6 shadow-[0_40px_80px_-40px_rgba(42,20,25,0.3)] md:p-10">
            <h3 className="mb-6 text-2xl">Detaliile evenimentului</h3>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* RECENZII */}
      <section aria-labelledby="rec-t" className="relative isolate overflow-hidden py-20 text-center text-white md:py-28">
        <div className="absolute inset-0 -z-10">
          <Picture img={images.candles} label={false} sizes="100vw" className="h-full w-full" />
          <div aria-hidden="true" className="absolute inset-0 bg-ink/80" />
        </div>
        <div className={`${container} flex flex-col items-center`}>
          <span className="flex gap-1 text-gold-light" aria-hidden="true">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-5 w-5 fill-current" strokeWidth={0} />)}</span>
          <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold-light">Ce spun invitații</p>
          <h2 id="rec-t" data-reveal className="mt-3 text-[3rem] leading-none md:text-[4.5rem]"><span className="text-gold-light">{site.google.rating}</span> din 5 pe Google</h2>
          <p data-reveal className="mt-5 text-lg text-white/85">Din {site.google.reviewsLabel} lăsate de oaspeți.</p>
          <div data-reveal className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={site.google.reviewsUrl} target="_blank" rel="noopener" className={btnGold}>Vezi recenziile pe Google</a>
            <a href={tel} className={btnGhost}><Phone aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />Sună acum</a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" aria-labelledby="ct-t" className={`bg-cream ${section}`}>
        <div className={`${container} grid gap-12 md:grid-cols-2 md:gap-16`}>
          <div>
            <Heading id="ct-t" kicker="Vă așteptăm" title="Contact" />
            <address data-reveal className="mt-8 not-italic">
              <ul className="divide-y divide-line border-y border-line">
                <li className="flex gap-4 py-5">
                  <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-wine" strokeWidth={1.6} />
                  <div>
                    <span className="block font-serif text-2xl">{site.address.street}, {site.address.city}</span>
                    <a className="mt-1 inline-flex items-center gap-1.5 py-1 text-sm font-medium text-wine" href={site.google.directionsUrl} target="_blank" rel="noopener"><Navigation aria-hidden="true" className="h-3.5 w-3.5" />Indicații rutiere</a>
                  </div>
                </li>
                <li className="flex gap-4 py-5">
                  <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-wine" strokeWidth={1.6} />
                  <a href={tel} className="font-serif text-2xl transition hover:text-wine">{site.phone.display}</a>
                </li>
                <li className="flex gap-4 py-5">
                  <Clock aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-wine" strokeWidth={1.6} />
                  <span>Program: <T>{site.hours}</T></span>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {site.social.filter((s) => s.url).map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener" className="rounded-full border border-ink/25 px-4 py-2.5 text-sm transition hover:border-ink hover:bg-ink hover:text-white">{s.label} · {s.note}</a>
                ))}
                <a href={whatsapp()} target="_blank" rel="noopener" className="rounded-full border border-ink/25 px-4 py-2.5 text-sm transition hover:border-ink hover:bg-ink hover:text-white">WhatsApp</a>
              </div>
            </address>
          </div>
          <iframe data-reveal title={`Hartă: ${site.name}, ${site.address.street}, ${site.address.city}`} src={site.google.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full rounded-sm border border-line md:h-full md:min-h-[28rem]" />
        </div>
      </section>
    </>
  );
}
