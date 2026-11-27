import Link from "next/link";
import { btnInk, container, Kicker } from "@/components/ui";

export default function NotFound() {
  return (
    <section className={`${container} flex min-h-[60vh] flex-col items-start justify-center py-20`}>
      <Kicker>Eroare 404</Kicker>
      <h1 className="mt-4 text-[2.6rem] leading-tight md:text-[3.4rem]">Pagina nu există</h1>
      <p className="mt-4 max-w-md text-muted">Linkul poate fi greșit sau pagina a fost mutată.</p>
      <Link href="/" className={`mt-8 ${btnInk}`}>Înapoi la pagina principală</Link>
    </section>
  );
}
