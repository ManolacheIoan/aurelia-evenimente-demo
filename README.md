# Restaurant Aurelia — site demonstrativ

Site demo realizat de **Manotek** pentru un restaurant cu sală de evenimente și cramă, **fictiv**, din Tecuci. Numele, adresa, telefonul, meniurile, prețurile și nota Google sunt exemple, marcate pe site cu „[exemplu]”.

Live: https://manolacheioan.github.io/aurelia-evenimente-demo/

- **Tot conținutul**: `content/site.ts` (sală, meniuri, calendar „Date libere”, galerie, contact).
- **Cerere de ofertă**: Formspree prin `formspreeId`; gol = cererea pleacă pe WhatsApp cu mesaj precompletat.
- **Poze**: ilustrative, de pe Unsplash (vezi `CREDITS.md`).

```bash
npm install
npm run dev
npm run build   # export static în out/
```

Stack: Next.js (App Router, export static), TypeScript, Tailwind CSS, lucide-react. Publicat pe GitHub Pages prin GitHub Actions.
