/**
 * Tot conținutul site-ului. Editați aici; restul codului doar îl afișează.
 * Firma e FICTIVĂ (site demonstrativ Manotek). Valorile marcate „[exemplu]” sunt exemple.
 */

export const TBD = "[exemplu]";

export type Availability = "Liber" | "Puține locuri" | "Ocupat";

export type Img = { name: string; alt: string; ratio: string; illustrative?: boolean };

/** Fotografii din public/images (variante -640/-1280/-1920.webp). Surse în CREDITS.md. */
export const images = {
  hero: { name: "sala-coloane", alt: "Sală de bal albă cu coloane și candelabru auriu", ratio: "2/3", illustrative: true },
  hall: { name: "mese-lungi", alt: "Mese lungi aranjate pentru eveniment, sub ferestre în arc", ratio: "2/3", illustrative: true },
  wedding: { name: "masa-nunta", alt: "Masă de nuntă cu flori albe, lumânări și pahare de cristal", ratio: "3/2", illustrative: true },
  cake: { name: "tort", alt: "Tort în trei etaje decorat cu flori", ratio: "2/3", illustrative: true },
  toast: { name: "sampanie", alt: "Două pahare de șampanie între decorațiuni aurii", ratio: "2/3", illustrative: true },
  cellar: { name: "crama", alt: "Butoaie de vin într-o cramă boltită, în lumină caldă", ratio: "2/3", illustrative: true },
  dish: { name: "preparat", alt: "Preparat din pește cu legume, servit pe farfurie închisă la culoare", ratio: "3/2", illustrative: true },
  candles: { name: "lumanari", alt: "Lumânări aprinse pe o masă festivă", ratio: "3/2", illustrative: true },
} satisfies Record<string, Img>;

export const site = {
  name: "Restaurant Aurelia",
  altName: "Sala Aurelia",
  tagline: "Restaurant & Cramă",
  demoBanner: "Site demonstrativ realizat de Manotek — firmă fictivă. Datele și prețurile sunt exemple.",
  // Domeniul final (link canonic, sitemap, schema.org). Până la lansare rămâne adresa demo.
  url: "https://manolacheioan.github.io/aurelia-evenimente-demo",
  indexable: true,
  description:
    "Restaurant Aurelia, Tecuci (firmă fictivă, site demonstrativ): sală de evenimente cu restaurant și cramă, pentru nunți, botezuri, aniversări și evenimente corporate.",

  phone: { display: "07XX XXX XXX", tel: "+40700000000", whatsapp: "40700000000" },
  address: { street: "Str. Exemplu nr. 30", city: "Tecuci", county: "Galați", country: "RO" },
  hours: `Luni–Duminică, 10:00–23:00 ${TBD}`,
  email: "contact@exemplu.ro",

  google: {
    rating: "4,8",
    ratingValue: 4.8,
    reviewsLabel: "120 de recenzii [exemplu]",
    reviewCount: 120,
    reviewsUrl: "https://www.google.com/maps/search/?api=1&query=restaurant+evenimente+Tecuci",
    mapsEmbed: "https://www.google.com/maps?q=45.8486,27.4339&z=15&output=embed",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=45.8486,27.4339",
  },
  // url gol = linkul nu se afișează (nu trimitem vizitatorul într-o pagină goală).
  social: [
    { label: "Instagram", note: "@restaurantaurelia", url: "https://www.instagram.com/" },
    { label: "Facebook", note: "Restaurant Aurelia", url: "https://www.facebook.com/" },
  ],

  // Formspree: ID-ul formularului (ex. „xyzabcd”). Gol = cererea pleacă pe WhatsApp.
  formspreeId: "",

  nav: [
    { href: "/#sala", label: "Sala" },
    { href: "/#evenimente", label: "Evenimente" },
    { href: "/#meniuri", label: "Meniuri" },
    { href: "/#galerie", label: "Galerie" },
    { href: "/#date-libere", label: "Date libere" },
    { href: "/#contact", label: "Contact" },
  ],

  hero: {
    eyebrow: "Restaurant & Cramă · Tecuci",
    lead: "Sală de evenimente, bucătărie și cramă sub același acoperiș. Voi vă bucurați de invitați, noi ne ocupăm de rest.",
  },

  trust: [
    { value: "4,8", label: "nota pe Google [exemplu]" },
    { value: "350", label: "invitați în sală [exemplu]" },
    { value: "1 cramă", label: "proprie, pentru vinul evenimentului" },
    { value: "1 echipă", label: "pentru sală, meniu și vin" },
  ],

  hall: {
    intro:
      "Sala Aurelia e inima restaurantului: coloane albe, candelabre de cristal și ring de dans în mijloc. Sala, meniul și vinul le stabiliți cu o singură echipă.",
    facts: [
      { label: "Capacitate", value: `350 invitați ${TBD}` },
      { label: "Suprafață", value: `600 m² ${TBD}` },
      { label: "Parcare", value: `Proprie, 60 de locuri ${TBD}` },
    ],
    amenities: [
      "Candelabre de cristal și coloane albe",
      "Ring de dans în centrul sălii",
      "Aer condiționat",
      "Terasă pentru cocktail de primire",
      "Cramă proprie",
      "Sonorizare și lumini de scenă",
      "Acces fără trepte pentru persoane cu dizabilități",
    ],
  },

  events: [
    { title: "Nunți", text: "Sala, meniul, decorul și primul dans, puse la punct cu echipa noastră.", image: "wedding" },
    { title: "Botezuri", text: "Petreceri de familie, cu meniu gândit și pentru cei mici.", image: "cake" },
    { title: "Aniversări", text: "Zile de naștere, majorate, cununii civile și alte sărbători.", image: "toast" },
    { title: "Corporate", text: "Cine de firmă, petreceri de final de an, întâlniri cu partenerii.", image: "hall" },
  ],

  steps: [
    { title: "Verificați data", text: "Vedeți lunile libere pe site sau sunați-ne." },
    { title: "Veniți să vedeți sala", text: "Discutăm meniul, decorul și numărul de invitați." },
    { title: "Rezervați", text: `Stabilim oferta și blocăm data pentru voi. Avans: 20% ${TBD}.` },
  ],

  menus: {
    note: "Fiecare meniu se adaptează evenimentului. Prețurile se confirmă în ofertă.",
    items: [
      { name: "Clasic", price: `220 lei / persoană ${TBD}`, courses: ["Aperitiv rece", "Antreu cald", "Fel principal: friptură la alegere", "Desert de casă"], featured: false },
      { name: "Festiv", price: `290 lei / persoană ${TBD}`, courses: ["Platou de aperitive", "Antreu din pește", "Fel principal: duo de friptură", "Sarmale cu mămăliguță", "Tort"], featured: true },
      { name: "Copii", price: `110 lei / persoană ${TBD}`, courses: ["Aperitiv", "Șnițel cu cartofi", "Desert"], featured: false },
    ],
  },

  cellar: {
    title: "Crama Aurelia",
    text: "Aurelia e restaurant și cramă. Vinul pentru eveniment îl alegeți aici, cu sfatul nostru, fără să căutați în altă parte.",
    details: ["Vinuri albe, roșii și rose din podgoriile Moldovei", "Degustare înainte de eveniment, la cerere"],
  },

  gallery: ["wedding", "hero", "hall", "cake", "toast", "cellar"] as const,

  // Calendar „Date libere”: schimbați doar statusul fiecărei luni.
  availability: [
    { month: "Decembrie", year: "2026", status: "Ocupat" },
    { month: "Ianuarie", year: "2027", status: "Liber" },
    { month: "Februarie", year: "2027", status: "Liber" },
    { month: "Martie", year: "2027", status: "Liber" },
    { month: "Aprilie", year: "2027", status: "Puține locuri" },
    { month: "Mai", year: "2027", status: "Puține locuri" },
    { month: "Iunie", year: "2027", status: "Ocupat" },
    { month: "Iulie", year: "2027", status: "Puține locuri" },
    { month: "August", year: "2027", status: "Ocupat" },
    { month: "Septembrie", year: "2027", status: "Puține locuri" },
    { month: "Octombrie", year: "2027", status: "Liber" },
    { month: "Noiembrie", year: "2027", status: "Liber" },
  ] satisfies { month: string; year: string; status: Availability }[],
  availabilityNote: `Statusurile sunt orientative ${TBD}. Pentru o zi anume, sunați-ne.`,

  eventTypes: ["Nuntă", "Botez", "Aniversare", "Eveniment corporate", "Altul"],
} as const;

export const tel = `tel:${site.phone.tel}`;
export const whatsapp = (text = `Bună ziua! Aș dori informații despre o rezervare la ${site.name}.`) =>
  `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(text)}`;
