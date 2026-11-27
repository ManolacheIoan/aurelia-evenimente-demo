import type { Metadata } from "next";
import { Legal } from "@/components/Legal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Politica de cookies",
  description: `Ce cookie-uri folosește site-ul ${site.name} Tecuci și cum le puteți controla.`,
  alternates: { canonical: "./" },
};

export default function Page() {
  return (
    <Legal title="Politica de cookies" updated="noiembrie 2026">
      <p>Site-ul {site.name} nu folosește cookie-uri proprii de marketing sau de analiză.</p>
      <h2>Conținut de la terți</h2>
      <p>Pe pagina principală este încorporată o hartă Google Maps. Google poate seta cookie-uri atunci când harta se încarcă. Detalii găsiți în politica de confidențialitate Google.</p>
      <p>Linkurile către Instagram, WhatsApp și Google Recenzii deschid site-urile acestora, care au propriile politici de cookies.</p>
      <h2>Cum controlați cookie-urile</h2>
      <p>Puteți șterge sau bloca cookie-urile din setările browserului. Site-ul funcționează și fără ele, cu excepția hărții încorporate.</p>
      <h2>Modificări</h2>
      <p>Dacă vom adăuga instrumente de analiză, vom actualiza această pagină și vom cere acordul înainte de a seta cookie-uri neesențiale.</p>
    </Legal>
  );
}
