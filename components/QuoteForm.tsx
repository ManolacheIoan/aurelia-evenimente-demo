"use client";

import { CircleAlert, CircleCheck, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { site, tel, whatsapp } from "@/content/site";

type Status = { kind: "idle" | "sending" | "sent" | "error"; msg?: string; link?: string };

const field = "mt-1.5 w-full rounded-md border border-line bg-ivory px-3.5 py-3 text-ink transition placeholder:text-muted/60 hover:border-ink/30 focus:border-wine focus:bg-white focus:outline-none focus:ring-2 focus:ring-wine/15 user-invalid:border-red-700";
const label = "block text-sm font-medium text-ink";

function message(d: Record<string, string>) {
  return [
    `Bună ziua! Aș dori o ofertă de la ${site.name}.`,
    `Nume: ${d.nume}`,
    `Telefon: ${d.telefon}`,
    `Eveniment: ${d.tip}`,
    `Data: ${d.data || "-"}`,
    `Invitați: ${d.invitati || "-"}`,
    d.mesaj ? `Mesaj: ${d.mesaj}` : "",
  ].filter(Boolean).join("\n");
}

export function QuoteForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const today = new Date().toISOString().slice(0, 10);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const link = whatsapp(message(data));

    if (!site.formspreeId) {
      window.open(link, "_blank", "noopener");
      setStatus({ kind: "sent", msg: "Am deschis WhatsApp cu cererea completată. Apăsați „Trimite” acolo.", link });
      return;
    }
    setStatus({ kind: "sending" });
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus({ kind: "sent", msg: "Mulțumim! Cererea a ajuns la noi. Vă sunăm în curând." });
    } catch {
      setStatus({ kind: "error", msg: "Cererea nu a putut fi trimisă. Trimiteți-o pe WhatsApp sau sunați-ne.", link });
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
      <div>
        <label htmlFor="nume" className={label}>Nume și prenume <span className="text-wine">*</span></label>
        <input id="nume" name="nume" required minLength={2} autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="telefon" className={label}>Telefon <span className="text-wine">*</span></label>
        <input id="telefon" name="telefon" type="tel" required autoComplete="tel" inputMode="tel" pattern="[\d\s+\(\)\.\-]{9,}" title="Număr de telefon, minim 9 cifre" placeholder="07xx xxx xxx" className={field} />
      </div>
      <div>
        <label htmlFor="tip" className={label}>Tip eveniment <span className="text-wine">*</span></label>
        <select id="tip" name="tip" required className={field} defaultValue="">
          <option value="" disabled>Alegeți</option>
          {site.eventTypes.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="data" className={label}>Data dorită</label>
        <input id="data" name="data" type="date" min={today} className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="invitati" className={label}>Număr estimat de invitați</label>
        <input id="invitati" name="invitati" type="number" min={1} max={2000} inputMode="numeric" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="mesaj" className={label}>Mesaj</label>
        <textarea id="mesaj" name="mesaj" rows={4} placeholder="Ce v-ar ajuta să știm? Meniu, decor, întrebări." className={field} />
      </div>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
        <button type="submit" disabled={status.kind === "sending"} className="inline-flex items-center justify-center gap-2 rounded-full bg-wine px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink disabled:opacity-60">
          {status.kind === "sending" ? <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" /> : <Send aria-hidden="true" className="h-4 w-4" />}
          {status.kind === "sending" ? "Se trimite" : site.formspreeId ? "Trimite cererea" : "Trimite cererea pe WhatsApp"}
        </button>
        <p className="text-sm text-muted">Sau sunați: <a className="font-medium text-wine underline underline-offset-4" href={tel}>{site.phone.display}</a></p>
      </div>
      <div role="status" aria-live="polite" className="sm:col-span-2">
        {status.msg && (
          <p className={`flex gap-2.5 rounded-md border px-4 py-3 text-sm ${status.kind === "error" ? "border-red-200 bg-red-50 text-red-900" : "border-emerald-200 bg-emerald-50 text-emerald-950"}`}>
            {status.kind === "error" ? <CircleAlert aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" /> : <CircleCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />}
            <span>
              {status.msg}
              {status.link && <> <a href={status.link} target="_blank" rel="noopener" className="font-medium underline underline-offset-4">Nu s-a deschis? Apăsați aici.</a></>}
            </span>
          </p>
        )}
      </div>
    </form>
  );
}
