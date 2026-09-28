// Jurisdictions & Treaties Metadata

export const JURISDICTIONS = [
  {
    id: 'in',
    code: 'IND',
    name: 'India (Domestic Regime)',
    flag: '🇮🇳',
    framework: 'Patents Act 1970, Biological Diversity Act 2002, Drugs & Cosmetics Act 1940, TKDL Protection',
    authority: 'IP India / AYUSH / NBA / FSSAI',
    notes: 'Strict Section 3(p) exclusion for Traditional Knowledge. Mandatory NBA Section 6 patent filing clearance.'
  },
  {
    id: 'wipo',
    code: 'WIPO',
    name: 'International (WIPO / PCT Framework)',
    flag: '🌐',
    framework: 'Patent Cooperation Treaty (PCT), WIPO Treaty on IP, Genetic Resources & TK (2024)',
    authority: 'World Intellectual Property Organization, Geneva',
    notes: 'Mandatory disclosure of origin for genetic resources and associated traditional knowledge in patent applications.'
  },
  {
    id: 'us',
    code: 'USA',
    name: 'United States of America (USPTO / US FDA)',
    flag: '🇺🇸',
    framework: '35 U.S.C. Patents, DSHEA 1994 (Dietary Supplements), 21 CFR Part 111',
    authority: 'USPTO / US Food and Drug Administration',
    notes: 'TKDL used as non-patentable prior art in USPTO search system to prevent biopiracy.'
  },
  {
    id: 'eu',
    code: 'EUR',
    name: 'European Union (EPO / EMA)',
    flag: '🇪🇺',
    framework: 'European Patent Convention (EPC), EU Regulation 511/2014 (Nagoya ABS), THMPD Directive',
    authority: 'European Patent Office / European Medicines Agency',
    notes: 'Compliance with EU Nagoya ABS compliance verification upon entering EU commercial market.'
  }
];
