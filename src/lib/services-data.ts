export interface ServiceBenefit {
  title: string;
  desc: string;
}

export interface ServiceTestimonial {
  text: string;
  name: string;
  loc: string;
  stars: number;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDesc: string;
  /** Used in meta description */
  metaDesc: string;
  heroHeading: string;
  heroPara: string;
  body: string[];
  benefits: ServiceBenefit[];
  testimonials: ServiceTestimonial[];
  faqs: ServiceFaq[];
  /** Schema @type for the service */
  schemaName: string;
  schemaDesc: string;
}

export const SERVICES: Service[] = [
  {
    slug: "pre-purchase-car-inspection",
    name: "Pre Purchase Car Inspection",
    shortDesc: "Full 100-point report before you buy",
    metaDesc:
      "Independent pre-purchase car inspection in Manchester. 100+ checkpoint report, no ties to the seller. BMW, Audi, VW specialists. Call 0161 202 0033.",
    heroHeading: "Pre Purchase Car Inspection in Manchester",
    heroPara:
      "Our pre-purchase car inspection is the smartest investment you can make before buying a used car in Manchester or Greater Manchester. A qualified mechanic examines over 100 checkpoints and delivers a fully honest, written report — giving you the leverage to negotiate or walk away.",
    body: [
      "Thinking of buying a used car in Manchester? Don't hand over your money until you've had it professionally inspected. Al Medina Motors' pre-purchase car inspection covers every major system: engine health, gearbox condition, brakes, suspension, steering, tyres, bodywork, electrics, and a full OBD diagnostic scan.",
      "Unlike a dealership check, our independent inspection has no financial interest in the sale. We verify the VIN and chassis number, check for outstanding finance, category damage flags, and known manufacturer defects — giving you a comprehensive picture alongside any HPI report you've already ordered.",
      "Our technicians specialise in BMW, Audi, Volkswagen, Mercedes-Benz, Porsche, Volvo, Škoda, Nissan, Kia, and all other makes. We use brand-specific diagnostic equipment to surface marque-specific issues that a generic inspection would miss.",
    ],
    benefits: [
      {
        title: "100+ Checkpoint Report",
        desc: "Every mechanical, electrical, and bodywork system examined and reported in writing.",
      },
      {
        title: "Fully Independent",
        desc: "No ties to dealers or private sellers. Our assessment is 100% in your interest.",
      },
      {
        title: "Brand-Specific Diagnostics",
        desc: "Specialist equipment for BMW, Audi, VW, Mercedes, and all other makes.",
      },
      {
        title: "VIN & Finance Check",
        desc: "We verify chassis identity and flag outstanding finance or category markers.",
      },
      {
        title: "Same Day Available",
        desc: "Urgent purchase? Same-day pre-purchase inspection available subject to slots.",
      },
      {
        title: "Negotiate With Confidence",
        desc: "Use our detailed report to renegotiate the price or avoid a costly mistake.",
      },
    ],
    testimonials: [
      {
        text: "Booked a pre-purchase inspection before buying an Audi A4. They found hidden faults the seller hadn't mentioned — saved me a fortune. Honest, thorough service.",
        name: "Tariq M.",
        loc: "Manchester",
        stars: 5,
      },
      {
        text: "Used them to check a BMW 3 Series. The report was incredibly detailed — found a timing chain issue. Walked away from the deal and found a much better car.",
        name: "Daniel O.",
        loc: "Oldham",
        stars: 5,
      },
      {
        text: "Brilliant service. Checked a Mercedes C-Class for me — pointed out several things I'd never have spotted. Well worth the money.",
        name: "Nadia S.",
        loc: "Salford",
        stars: 5,
      },
    ],
    faqs: [
      {
        q: "What does a pre-purchase car inspection include?",
        a: "Our inspection covers 100+ checkpoints: bodywork, engine, gearbox, brakes, suspension, steering, tyres, electrics, emissions, VIN verification, and a full OBD diagnostic scan.",
      },
      {
        q: "Can you inspect a car at the seller's location?",
        a: "Currently our inspections take place at our 313/317 Oldham Road garage. We recommend asking the seller to bring the car to us, or arranging to collect it for inspection.",
      },
      {
        q: "How long does a pre-purchase inspection take?",
        a: "A full pre-purchase inspection typically takes 1–2 hours. We aim to have a written report ready for you on the day.",
      },
      {
        q: "Do you inspect all makes and models?",
        a: "Yes — we inspect all makes and models, with specialist expertise in BMW, Audi, Volkswagen, Mercedes-Benz, Porsche, Volvo, Škoda, Nissan, and Kia.",
      },
    ],
    schemaName: "Pre Purchase Car Inspection",
    schemaDesc:
      "Comprehensive independent pre-purchase vehicle inspection covering 100+ checkpoints. Ideal for checking a used car before buying in Manchester or Greater Manchester.",
  },
  {
    slug: "full-vehicle-check",
    name: "Full Vehicle Check",
    shortDesc: "100-point mechanical, electrical & bodywork inspection",
    metaDesc:
      "Full 100-point vehicle check in Manchester. Engine, gearbox, brakes, suspension, bodywork, electrics & OBD diagnostics. Call Al Medina Motors: 0161 202 0033.",
    heroHeading: "Full Vehicle Check in Manchester",
    heroPara:
      "Our 100-point full vehicle check covers every major system of your car — giving you a comprehensive, honest assessment of its condition. Ideal before buying, before a long journey, or as an annual health check.",
    body: [
      "Al Medina Motors' full vehicle check is a thorough multi-point inspection covering engine, transmission, cooling system, brakes, suspension, steering, tyres, bodywork, electrics, lights, and all safety equipment. We also carry out a full OBD diagnostic scan to surface hidden fault codes and sensor failures.",
      "As part of our vehicle check, we inspect the car's VIN and chassis number, cross-reference vehicle identity, and provide a written report detailing the condition of every system inspected. This gives you a complete picture — whether you're buying, selling, or simply want peace of mind.",
      "Our technicians are experienced with all vehicle types and use professional-grade equipment for every inspection. From a routine annual health check to a comprehensive pre-sale inspection, our full vehicle check is the most thorough independent assessment available in Manchester.",
    ],
    benefits: [
      {
        title: "100+ Checkpoints",
        desc: "Engine, gearbox, cooling, brakes, suspension, steering, tyres, bodywork, electrics, and more.",
      },
      {
        title: "Full OBD Diagnostic",
        desc: "Professional scan tool to surface fault codes and sensor failures not visible to the naked eye.",
      },
      {
        title: "Written Report",
        desc: "Clear, detailed written report you can use to negotiate, plan repairs, or sell with confidence.",
      },
      {
        title: "All Makes & Models",
        desc: "Every make and model covered, with specialist expertise in German and Japanese marques.",
      },
      {
        title: "Safety Equipment Check",
        desc: "Brakes, tyres, lights, airbags, and all safety-critical systems inspected.",
      },
      {
        title: "Same Day Available",
        desc: "Call us on 0161 202 0033 to check same-day availability.",
      },
    ],
    testimonials: [
      {
        text: "Got a full vehicle check on my Golf before selling it. The report gave the buyer total confidence and we agreed a fair price quickly. Great service.",
        name: "James R.",
        loc: "Salford",
        stars: 5,
      },
      {
        text: "Annual health check — found a brake issue I wasn't aware of. Potentially avoided a serious problem. Highly recommend.",
        name: "Mohammed A.",
        loc: "Rochdale",
        stars: 5,
      },
      {
        text: "Thorough and professional. The OBD diagnostic flagged several faults my dashboard hadn't shown. Very impressed.",
        name: "Claire B.",
        loc: "Stockport",
        stars: 5,
      },
    ],
    faqs: [
      {
        q: "What's included in a full vehicle check?",
        a: "Engine, gearbox, cooling, brakes, suspension, steering, tyres, bodywork, electrics, lights, safety equipment, VIN verification, and a full OBD diagnostic scan.",
      },
      {
        q: "How is a full vehicle check different from an MOT?",
        a: "An MOT is a legal minimum safety test. Our full vehicle check is far more comprehensive — covering condition, wear, and hidden faults that an MOT won't flag.",
      },
      {
        q: "How long does a full vehicle check take?",
        a: "Typically 1.5–2 hours for a thorough inspection. We'll provide a written report on the day.",
      },
      {
        q: "Can I get a full vehicle check before selling my car?",
        a: "Absolutely. A pre-sale inspection report builds buyer confidence and can help you achieve a better price.",
      },
    ],
    schemaName: "Full Vehicle Inspection",
    schemaDesc:
      "100-point multi-point car inspection covering engine, transmission, brakes, suspension, steering, bodywork, electrics, and full diagnostic scan in Manchester.",
  },
  {
    slug: "car-emissions-testing",
    name: "Car Emissions Testing",
    shortDesc: "Petrol, diesel & hybrid emissions inspection",
    metaDesc:
      "Car emissions testing in Manchester. Petrol, diesel & hybrid vehicles. DPF, catalytic converter & emissions fault code diagnostics. Call 0161 202 0033.",
    heroHeading: "Car Emissions Testing in Manchester",
    heroPara:
      "Our car emissions testing service covers all petrol, diesel, and hybrid vehicles. We identify emissions-related fault codes, DPF issues, catalytic converter problems, and sensor failures — keeping your vehicle road-legal and running efficiently.",
    body: [
      "Emissions-related failures are one of the most common reasons for MOT failures in Manchester. Our professional emissions testing service uses advanced diagnostic equipment to identify the root cause of emissions faults — not just the symptoms. We check for DPF blockages, catalytic converter failures, lambda sensor issues, EGR valve problems, and all associated fault codes.",
      "Our emissions inspection covers petrol, diesel, and hybrid vehicles of all makes and models. Whether your engine management light is on, you've failed an MOT emissions test, or you simply want to ensure your vehicle is running cleanly ahead of Manchester's Clean Air Zone requirements, we'll give you an accurate diagnosis and clear advice.",
      "Every emissions test is carried out using professional-grade OBD diagnostic equipment, ensuring accurate fault code readings across all vehicle systems. We'll provide a plain-English explanation of any issues found and the recommended course of action.",
    ],
    benefits: [
      {
        title: "All Fuel Types",
        desc: "Petrol, diesel, and hybrid vehicles covered — all makes and models.",
      },
      {
        title: "DPF & CAT Diagnosis",
        desc: "Pinpoint DPF blockages, catalytic converter failures, and related faults.",
      },
      {
        title: "OBD Fault Code Scan",
        desc: "Professional diagnostic scan to read and interpret all emissions-related fault codes.",
      },
      {
        title: "MOT Preparation",
        desc: "Identify and address emissions faults before your MOT to avoid a costly failure.",
      },
      {
        title: "Clean Air Zone Ready",
        desc: "Ensure your vehicle complies with Greater Manchester's Clean Air Zone standards.",
      },
      {
        title: "Clear Advice",
        desc: "Plain-English explanation of faults found and the most cost-effective fix.",
      },
    ],
    testimonials: [
      {
        text: "Failed an MOT on emissions. Al Medina Motors diagnosed a DPF issue quickly and explained my options clearly. Passed first time after the fix.",
        name: "David P.",
        loc: "Manchester",
        stars: 5,
      },
      {
        text: "Engine management light came on before a long trip. They found a lambda sensor fault within minutes. Sorted same day.",
        name: "Amina K.",
        loc: "Oldham",
        stars: 5,
      },
      {
        text: "Very professional. Checked my diesel Golf's DPF status and gave me clear advice on regen vs replacement. Honest and knowledgeable.",
        name: "Steve H.",
        loc: "Bolton",
        stars: 5,
      },
    ],
    faqs: [
      {
        q: "What emissions faults do you diagnose?",
        a: "We diagnose DPF blockages, catalytic converter failures, lambda/oxygen sensor faults, EGR valve issues, AdBlue system faults, and all emissions-related OBD fault codes.",
      },
      {
        q: "Do you test hybrid vehicles?",
        a: "Yes — we test petrol, diesel, and hybrid vehicles of all makes and models.",
      },
      {
        q: "Can you help me pass an MOT emissions test?",
        a: "Yes. We'll identify the root cause of any emissions failure and advise on the most cost-effective fix to get you through your MOT.",
      },
      {
        q: "Do I need an emissions test for Manchester's Clean Air Zone?",
        a: "Greater Manchester's Clean Air Zone primarily targets commercial vehicles, but we can advise on your specific vehicle's compliance status.",
      },
    ],
    schemaName: "Car Emissions Testing",
    schemaDesc:
      "Vehicle emission inspection and car diagnostic check for petrol, diesel, and hybrid vehicles in Manchester.",
  },
  {
    slug: "diagnostic-check",
    name: "Diagnostic Check",
    shortDesc: "Professional OBD diagnostic scan — all makes & models",
    metaDesc:
      "Car diagnostic check in Manchester. Professional OBD scan for all makes and models. Engine management, fault codes, sensor failures. Call 0161 202 0033.",
    heroHeading: "Car Diagnostic Check in Manchester",
    heroPara:
      "Our professional car diagnostic check uses advanced OBD scanning equipment to read fault codes across all vehicle systems — engine management, transmission, ABS, airbags, and more. Get to the root cause fast.",
    body: [
      "When your engine management light comes on — or when something simply doesn't feel right — a professional car diagnostic check is the fastest way to get answers. Al Medina Motors uses professional-grade OBD2 diagnostic tools to read fault codes across all vehicle systems, including engine, transmission, ABS, airbag, traction control, climate, and more.",
      "Unlike a basic code reader, our diagnostic equipment provides live data readings and freeze-frame data — enabling our technicians to identify intermittent faults and sensor failures that a simple plug-in reader would miss. We cover all makes and models, with specialist software for BMW, Audi, Volkswagen, Mercedes-Benz, Porsche, Volvo, and many more.",
      "After the diagnostic scan, we provide a clear, plain-English summary of every fault code found and what it means for your vehicle — along with honest advice on what needs fixing urgently and what can wait.",
    ],
    benefits: [
      {
        title: "Full System Scan",
        desc: "Engine, transmission, ABS, airbags, traction control, climate, and all other modules.",
      },
      {
        title: "Live Data & Freeze-Frame",
        desc: "Advanced equipment captures live sensor data to catch intermittent faults.",
      },
      {
        title: "Brand-Specific Software",
        desc: "Specialist diagnostic software for BMW, Audi, VW, Mercedes, Porsche, and more.",
      },
      {
        title: "Plain-English Report",
        desc: "We explain every fault code in plain English — no jargon, just honest advice.",
      },
      {
        title: "All Makes & Models",
        desc: "Every make covered, from German prestige to Japanese reliability.",
      },
      {
        title: "Fast Turnaround",
        desc: "Diagnostic scan typically completed within 30–60 minutes.",
      },
    ],
    testimonials: [
      {
        text: "Engine light came on the morning of a long drive. They fitted me in same day, found the fault in 20 minutes, and explained it clearly. Brilliant.",
        name: "Rachel T.",
        loc: "Manchester",
        stars: 5,
      },
      {
        text: "Had a mysterious misfire no one could diagnose. Al Medina found a faulty coil pack within minutes using their equipment. Very impressed.",
        name: "Hassan F.",
        loc: "Bury",
        stars: 5,
      },
      {
        text: "Great diagnostic service. Found three stored fault codes the car hadn't flagged on the dash. Really thorough.",
        name: "Laura M.",
        loc: "Trafford",
        stars: 5,
      },
    ],
    faqs: [
      {
        q: "What does a car diagnostic check cover?",
        a: "Our diagnostic scan covers all electronic modules — engine, transmission, ABS, airbags, traction control, steering, climate, and more. We read live data and stored fault codes.",
      },
      {
        q: "Why is my engine management light on?",
        a: "The engine management light can indicate hundreds of different faults. A professional diagnostic scan is the only reliable way to identify the root cause.",
      },
      {
        q: "Can you diagnose intermittent faults?",
        a: "Yes — our equipment captures live sensor data and freeze-frame information, making it much more effective at identifying intermittent faults than a basic code reader.",
      },
      {
        q: "How long does a diagnostic check take?",
        a: "A full system diagnostic scan typically takes 30–60 minutes. We'll talk you through the results on the day.",
      },
    ],
    schemaName: "Car Diagnostic Check",
    schemaDesc:
      "Professional OBD diagnostic check covering fault codes, sensor failures, engine management, and emissions systems for all makes and models in Manchester.",
  },
  {
    slug: "used-car-inspection",
    name: "Used Car Inspection",
    shortDesc: "Unbiased inspection before buying from any seller",
    metaDesc:
      "Used car inspection in Manchester before buying. Independent 100-point check from private sellers or dealers. No ties to the sale. Call 0161 202 0033.",
    heroHeading: "Used Car Inspection in Manchester",
    heroPara:
      "Buying a used car is one of the biggest financial decisions most people make. Our independent used car inspection gives you a completely unbiased 100-point assessment — so you know exactly what you're buying before you hand over a penny.",
    body: [
      "Whether you're buying from a private seller, a franchise dealer, or an independent car lot in Manchester or Greater Manchester, our used car inspection gives you the honest, independent assessment you need. We have no ties to any seller — our only interest is giving you the full picture.",
      "Our used car inspection covers everything you'd expect from an AA car check or RAC inspection — and more. We examine the bodywork for accident damage, corrosion, and mismatched paint; check all mechanical systems for wear and faults; carry out a full OBD diagnostic scan; and verify the VIN and chassis number for identity fraud or cloning.",
      "You'll receive a clear written report detailing the condition of every system inspected, along with honest advice on any issues found. Use it to negotiate a better price, ask the seller to make repairs, or walk away from a poor deal — all with complete confidence.",
    ],
    benefits: [
      {
        title: "Truly Independent",
        desc: "No financial relationship with the seller. 100% unbiased assessment.",
      },
      {
        title: "Bodywork & Paint Check",
        desc: "Spot hidden accident damage, corrosion, filler, and mismatched paint panels.",
      },
      {
        title: "Mechanical Deep-Dive",
        desc: "Engine, gearbox, brakes, suspension, steering, and all safety systems.",
      },
      {
        title: "VIN & Identity Check",
        desc: "Verify the car is what it says it is — check for cloning or identity fraud.",
      },
      {
        title: "OBD Diagnostic Scan",
        desc: "Surface hidden fault codes and electronic issues invisible to the naked eye.",
      },
      {
        title: "Negotiation Ammunition",
        desc: "Use our written report to negotiate a fairer price or safer deal.",
      },
    ],
    testimonials: [
      {
        text: "Used them to check a VW Golf before buying from a private seller. Found previous accident damage that hadn't been declared. Saved me from a nightmare.",
        name: "Sarah K.",
        loc: "Oldham",
        stars: 5,
      },
      {
        text: "Bought a used Kia after getting it inspected here. Peace of mind was worth every penny. The report was detailed and easy to understand.",
        name: "Priya N.",
        loc: "Stockport",
        stars: 5,
      },
      {
        text: "Had a Nissan Qashqai inspected before buying from a small dealer. Found a gearbox issue. Negotiated £800 off. Brilliant service.",
        name: "Chris W.",
        loc: "Rochdale",
        stars: 5,
      },
    ],
    faqs: [
      {
        q: "Do you inspect cars bought from private sellers?",
        a: "Yes — our used car inspection is ideal for private-sale purchases. Ask the seller to bring the car to our Manchester garage for an independent assessment.",
      },
      {
        q: "How is your inspection different from an HPI check?",
        a: "An HPI check is a paper-based history check. Our physical inspection examines the actual condition of the car — finding real-world faults, hidden damage, and mechanical wear that no online check can reveal.",
      },
      {
        q: "Can I use the report to negotiate the price?",
        a: "Absolutely. Many customers use our written inspection report to negotiate a lower price or ask the seller to fix identified issues before completing the purchase.",
      },
      {
        q: "What if the seller won't bring the car for inspection?",
        a: "A seller unwilling to allow an independent inspection is a major red flag. We'd always recommend walking away from any seller who refuses a pre-purchase check.",
      },
    ],
    schemaName: "Used Car Inspection",
    schemaDesc:
      "Independent 100-point used car inspection in Manchester before buying from any private seller or dealer. Unbiased report covering all mechanical, electrical, and bodywork systems.",
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
