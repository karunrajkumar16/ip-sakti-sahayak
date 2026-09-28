// Regulatory Guidelines and Classification Data for Ayurveda & Herbal Products

export const REGULATORY_AUTHORITIES = [
  {
    id: 'ayush-auth',
    code: 'AYUSH',
    name: 'Ministry of AYUSH (Pharmacopoeia Commission)',
    jurisdiction: 'India',
    role: 'Grants manufacturing licenses for Classical & Proprietary ASU drugs under Drugs & Cosmetics Rules 1945.',
    rules: ['Rule 158B (Proof of Efficacy & Safety)', 'Schedule T (GMP Compliance)', 'Rule 161 (Labeling Rules)']
  },
  {
    id: 'fssai-auth',
    code: 'FSSAI',
    name: 'Food Safety and Standards Authority of India',
    jurisdiction: 'India',
    role: 'Regulates Ayush Aahar, Health Supplements, and Nutraceuticals containing permitted botanical ingredients.',
    rules: ['FSS (Health Supplements & Nutraceuticals) Regulations 2022', 'FSS (Ayush Aahar) Regulations 2022']
  },
  {
    id: 'nba-auth',
    code: 'NBA',
    name: 'National Biodiversity Authority',
    jurisdiction: 'India',
    role: 'Regulates access to biological resources and associated traditional knowledge for commercial utilization & IPR.',
    rules: ['Biological Diversity Act 2002', 'Biological Diversity Rules 2004', 'ABS Regulations 2014']
  },
  {
    id: 'cdsco-auth',
    code: 'CDSCO',
    name: 'Central Drugs Standard Control Organization',
    jurisdiction: 'India',
    role: 'Oversees Phytopharmaceutical drugs approval and clinical trial permissions under New Drugs Rules.',
    rules: ['Drugs & Cosmetics Act 1940', 'New Drugs and Clinical Trials Rules 2019 (Phytopharmaceuticals)']
  }
];

export const MOCK_CLASSIFICATION_RULES = [
  {
    category: 'Ayurvedic Proprietary Medicine',
    authority: 'AYUSH (State Licensing Authority)',
    governingAct: 'Drugs & Cosmetics Act, 1940 — Section 3(a)(i)',
    criteria: 'Contains ingredients mentioned in authoritative books of Ayurveda listed in First Schedule, formulated in non-classical proportions.',
    requirements: [
      'License in Form 25D under Rule 154',
      'Proof of Safety and Efficacy under Rule 158B (Pilot clinical trial or published textual evidence)',
      'Schedule T GMP Certified Manufacturing Unit',
      'Labeling compliance under Rule 161 (Sanskrit name of ingredients, Batch, Mfg date)'
    ],
    ipConsiderations: 'Combination patent restricted under Section 3(p) unless synergism proven. Trademark registration for brand name available.',
    absConsiderations: 'Form I/III NBA approval required if biological resource sourced within India for foreign entities or export.'
  },
  {
    category: 'Classical Ayurvedic Medicine',
    authority: 'AYUSH (State Licensing Authority)',
    governingAct: 'Drugs & Cosmetics Act, 1940 — Section 3(a)',
    criteria: 'Manufactured strictly in accordance with formulations given in authoritative texts (Charaka Samhita, API, AFI).',
    requirements: [
      'License in Form 25D under Rule 154',
      'Reference to specific text and formulation name on label',
      'Schedule T GMP Compliance',
      'Pharmacopoeial Standards compliance (Ayurvedic Pharmacopoeia of India)'
    ],
    ipConsiderations: 'Non-patentable (Public Domain / TKDL Prior Art). Brand trademark and proprietary delivery system allowed.',
    absConsiderations: 'Indian citizens/entities exempt from ABS for local commercial use; mandatory for export.'
  },
  {
    category: 'Ayush Aahar (Health Supplement / Food)',
    authority: 'FSSAI & Ministry of AYUSH Joint Protocol',
    governingAct: 'Food Safety and Standards (Ayush Aahar) Regulations, 2022',
    criteria: 'Food prepared in accordance with recipes or ingredients specified in authoritative Ayurvedic books, consumed for health maintenance.',
    requirements: [
      'FSSAI Central / State License with Ayush Aahar endorsement',
      'No disease treatment or therapeutic cure claims permitted on label',
      'FSSAI logo with Ayush logo on primary packaging',
      'Compliance with heavy metals, pesticide residues, and microbial limits'
    ],
    ipConsiderations: 'Trademark protection for brand name. Recipe patents excluded under Section 3(p).',
    absConsiderations: 'Normal commercial biological resource utilization ABS rules apply.'
  }
];
