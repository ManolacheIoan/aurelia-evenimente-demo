import type { Metadata } from "next";
import { Legal } from "@/components/Legal";
import { T } from "@/components/ui";
import { site, TBD } from "@/content/site";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description: `Cum folosește ${site.name} din Tecuci datele trimise prin formularul de ofertă, telefon sau WhatsApp.`,
  alternates: { canonical: "./" },
};

export default function Page() {
  return (
    <Legal title="Politica de confidențialitate" updated="noiembrie 2026">
      <p>Această pagină explică ce date personale colectează {site.name} ({site.address.street}, {site.address.city}) prin acest site și cum le folosește.</p>
      <h2>Operatorul datelor</h2>
      <p>Operator: <T>{`${TBD} (denumirea firmei, CUI)`}</T>. Contact: {site.phone.display}, e-mail <T>{TBD}</T>.</p>
      <h2>Ce date colectăm</h2>
      <ul>
        <li>Datele trimise în formularul „Cere ofertă”: nume, telefon, tipul evenimentului, data dorită, numărul de invitați și mesajul.</li>
        <li>Datele pe care ni le dați la telefon sau pe WhatsApp.</li>
      </ul>
      <h2>De ce le folosim</h2>
      <p>Doar ca să vă răspundem la cerere și să pregătim oferta pentru eveniment. Temeiul este demersul făcut la cererea dumneavoastră înainte de un contract (art. 6 alin. (1) lit. b GDPR).</p>
      <h2>Cui le transmitem</h2>
      <p>Formularul poate folosi un serviciu de trimitere a mesajelor (Formspree) sau WhatsApp, în funcție de configurare. Nu vindem și nu închiriem datele.</p>
      <h2>Cât timp le păstrăm</h2>
      <p><T>{`${TBD} (de exemplu: până la finalizarea evenimentului sau maximum 12 luni de la cerere)`}</T>.</p>
      <h2>Drepturile dumneavoastră</h2>
      <p>Aveți dreptul de acces, rectificare, ștergere, restricționare, opoziție și portabilitate, precum și dreptul de a depune plângere la ANSPDCP (www.dataprotection.ro). Pentru orice cerere, contactați-ne la datele de mai sus.</p>
    </Legal>
  );
}
