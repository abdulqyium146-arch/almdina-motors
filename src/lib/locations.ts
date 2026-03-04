export interface Location {
  slug: string;
  name: string;
  region: string;
  /** Distance / direction from the garage */
  distance: string;
  /** Google Maps embed src — coordinates-based */
  mapSrc: string;
  /** Short intro used in hero copy */
  intro: string;
  /** 2–3 sentences of localised body content */
  body: string;
}

export const LOCATIONS: Location[] = [
  {
    slug: "manchester",
    name: "Manchester",
    region: "Greater Manchester",
    distance: "city centre — 3 miles from our Oldham Road garage",
    mapSrc:
      "https://maps.google.com/maps?q=53.5020,-2.1890&z=15&output=embed",
    intro:
      "Al Medina Motors is Manchester's trusted independent car inspection station, conveniently located on Oldham Road, M40.",
    body: "We serve drivers across the whole of Manchester — from Ancoats and Miles Platting to Moston, Collyhurst, and Newton Heath. Whether you're buying a used car from a private seller in Manchester or need a full vehicle health check, our 100-point inspection gives you the complete picture. Same-day appointments are available — call 0161 202 0033.",
  },
  {
    slug: "salford",
    name: "Salford",
    region: "Greater Manchester",
    distance: "approximately 5 miles west of our Manchester garage",
    mapSrc:
      "https://maps.google.com/maps?q=53.4875,-2.2901&z=13&output=embed",
    intro:
      "Trusted pre-purchase car inspection and full vehicle check for Salford drivers — just a short drive from our Oldham Road, Manchester garage.",
    body: "Salford drivers regularly visit Al Medina Motors for honest, independent used-car inspections before buying from local dealers or private sellers. From Ordsall and Eccles to Swinton and Walkden, we're easily accessible via the A57 or A576. Don't buy a used car in Salford without an independent inspection — call us first on 0161 202 0033.",
  },
  {
    slug: "oldham",
    name: "Oldham",
    region: "Greater Manchester",
    distance: "approximately 6 miles north-east of our Manchester garage",
    mapSrc:
      "https://maps.google.com/maps?q=53.5409,-2.1114&z=13&output=embed",
    intro:
      "Independent car inspection for Oldham — our Oldham Road garage is directly on the main route between Manchester city centre and Oldham.",
    body: "Our Manchester garage sits right on Oldham Road — making us the natural first stop for Oldham drivers. Whether you're viewing a used car in Oldham town centre, Royton, Shaw, Chadderton, or Failsworth, bring it to us for an honest 100-point pre-purchase inspection before you commit. Book today on 0161 202 0033.",
  },
  {
    slug: "stockport",
    name: "Stockport",
    region: "Greater Manchester",
    distance: "approximately 8 miles south of our Manchester garage",
    mapSrc:
      "https://maps.google.com/maps?q=53.4083,-2.1494&z=13&output=embed",
    intro:
      "Pre-purchase car inspection and vehicle checks for Stockport drivers — a straightforward drive up the A6 to our Manchester inspection station.",
    body: "Stockport residents travelling to view used cars in Manchester or Greater Manchester regularly book our pre-purchase inspection service. We cover every major system — engine, gearbox, brakes, suspension, bodywork, electrics, and a full OBD diagnostic — so you can negotiate or walk away with confidence. Call 0161 202 0033 to check same-day availability.",
  },
  {
    slug: "rochdale",
    name: "Rochdale",
    region: "Greater Manchester",
    distance: "approximately 11 miles north of our Manchester garage",
    mapSrc:
      "https://maps.google.com/maps?q=53.6154,-2.1583&z=13&output=embed",
    intro:
      "Car inspection for Rochdale — Al Medina Motors is the independent inspection station Rochdale drivers trust before buying a used car.",
    body: "Rochdale drivers heading to Manchester along the A664 or M60 pass close to our Oldham Road garage. We provide honest, unbiased pre-purchase inspections for vehicles found in Rochdale, Heywood, Middleton, and beyond. Our 100-point check covers everything the AA or RAC would — and more. Call 0161 202 0033 to book.",
  },
  {
    slug: "bolton",
    name: "Bolton",
    region: "Greater Manchester",
    distance: "approximately 12 miles north-west of our Manchester garage",
    mapSrc:
      "https://maps.google.com/maps?q=53.5780,-2.4286&z=13&output=embed",
    intro:
      "Independent pre-purchase vehicle inspection for Bolton drivers — serving the whole of Greater Manchester from our Oldham Road station.",
    body: "Bolton drivers regularly make the short drive along the M61 and M60 to have used cars independently inspected at our Manchester garage before purchase. Whether you're buying from a Bolton dealer or a private seller, our unbiased 100-point inspection report gives you total confidence. Same-day inspection available — call 0161 202 0033.",
  },
  {
    slug: "bury",
    name: "Bury",
    region: "Greater Manchester",
    distance: "approximately 8 miles north of our Manchester garage",
    mapSrc:
      "https://maps.google.com/maps?q=53.5933,-2.2981&z=13&output=embed",
    intro:
      "Car inspection for Bury — trusted independent vehicle checks for Bury drivers from our Oldham Road, Manchester station.",
    body: "Bury drivers can reach our Manchester inspection garage in around 20 minutes via the M60 or A56. Our pre-purchase inspections are popular with buyers viewing cars in Bury, Radcliffe, Ramsbottom, and Tottington. We check every mechanical, electrical, and bodywork system — giving you a fully honest picture before you buy. Book on 0161 202 0033.",
  },
  {
    slug: "trafford",
    name: "Trafford",
    region: "Greater Manchester",
    distance: "approximately 6 miles south-west of our Manchester garage",
    mapSrc:
      "https://maps.google.com/maps?q=53.4551,-2.3418&z=13&output=embed",
    intro:
      "Pre-purchase car inspection and vehicle checks for Trafford — Al Medina Motors serves the full Greater Manchester region from Oldham Road.",
    body: "Whether you're buying a car in Stretford, Urmston, Sale, or Altrincham, our independent inspection team is ready to give you a thorough, unbiased assessment before you hand over your money. Trafford drivers trust Al Medina Motors for honest reports, fair pricing, and same-day availability. Call 0161 202 0033.",
  },
  {
    slug: "tameside",
    name: "Tameside",
    region: "Greater Manchester",
    distance: "approximately 7 miles east of our Manchester garage",
    mapSrc:
      "https://maps.google.com/maps?q=53.4800,-2.0800&z=12&output=embed",
    intro:
      "Independent car inspection for Tameside — serving Ashton-under-Lyne, Stalybridge, Hyde, and Droylsden from our Manchester garage.",
    body: "Tameside drivers can reach our Oldham Road garage in under 20 minutes via the A635 or M67. Our full vehicle inspection — covering engine, gearbox, brakes, bodywork, electrics, and diagnostics — is the smartest way to protect yourself before buying a used car anywhere in Tameside. Call 0161 202 0033 to book.",
  },
];

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
