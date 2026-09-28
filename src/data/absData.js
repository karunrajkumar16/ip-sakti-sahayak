// Biodiversity & Access and Benefit Sharing (ABS) Mock Data

export const ABS_RESOURCES = [
  {
    id: 'abs-01',
    commonName: 'Ashwagandha (Withania somnifera)',
    scientificName: 'Withania somnifera (L.) Dunal',
    stateSourced: 'Madhya Pradesh, Rajasthan, Gujarat',
    conservationStatus: 'Least Concern (Widely Cultivated)',
    nbaCategory: 'Wild / Cultivated Biological Resource',
    absApplicability: 'POTENTIALLY APPLICABLE',
    guideline: 'If sourced directly from wild forests, SBB (State Biodiversity Board) clearance required. If cultivated, Form I filing depends on commercial export volume.',
    benefitSharingRate: '0.1% to 0.5% of FOB export value or purchase price of raw material.',
    nbaFormRequired: 'Form I (Research / Commercial) or Form III (IPR Application)'
  },
  {
    id: 'abs-02',
    commonName: 'Red Sanders (Raktachandana)',
    scientificName: 'Pterocarpus santalinus L.f.',
    stateSourced: 'Andhra Pradesh (Seshachalam Hills)',
    conservationStatus: 'Endangered / CITES Appendix II',
    nbaCategory: 'Restricted / Threatened Biological Resource',
    absApplicability: 'MANDATORY HIGH STRICTNESS',
    guideline: 'Strict NBA prior permission required under Section 3 & Section 4. Special export quota and CITES permit mandatory.',
    benefitSharingRate: '3.0% to 5.0% of auction value or commercial sales proceeds.',
    nbaFormRequired: 'Form I + Form IV (Transfer of Results of Research)'
  },
  {
    id: 'abs-03',
    commonName: 'Sarpagandha (Rauvolfia serpentina)',
    scientificName: 'Rauvolfia serpentina (L.) Benth. ex Kurz',
    stateSourced: 'Western Ghats, Kerala, Karnataka',
    conservationStatus: 'Vulnerable / Threatened in Wild',
    nbaCategory: 'Medicinal Plant Resource',
    absApplicability: 'MANDATORY NBA APPROVAL',
    guideline: 'Prior approval from NBA for foreign entities or Indian entities exporting active reserpine compounds.',
    benefitSharingRate: '0.5% of purchase price paid to Biodiversity Management Committee (BMC).',
    nbaFormRequired: 'Form I + Form III'
  },
  {
    id: 'abs-04',
    commonName: 'Guduchi (Tinospora cordifolia)',
    scientificName: 'Tinospora cordifolia (Willd.) Miers',
    stateSourced: 'Maharashtra, Uttar Pradesh, Odisha',
    conservationStatus: 'Common / Abundant',
    nbaCategory: 'Bio-resource for Commercial Formulation',
    absApplicability: 'APPLICABLE FOR EXPORT & IPR',
    guideline: 'Local Indian manufacturers selling within domestic market are exempt from ABS under 2014 notification; compulsory if seeking patent or international sales.',
    benefitSharingRate: '0.1% of annual turnover exceeding INR 1 Crore.',
    nbaFormRequired: 'Form III (for patent filings)'
  }
];

export const NBA_FORMS_EXPLANATION = [
  {
    form: 'Form I',
    title: 'Application for Access to Biological Resources and Associated Traditional Knowledge',
    applicant: 'Foreign individuals/companies or non-resident Indians (NRIs) / Indian companies with foreign equity.',
    purpose: 'Commercial utilization, Bio-survey, or Bio-utilization of Indian bio-resources.'
  },
  {
    form: 'Form II',
    title: 'Application for Transferring Results of Research relating to Biological Resources',
    applicant: 'Indian researchers transferring bio-research findings to foreign entities.',
    purpose: 'Prevent unauthorized biopiracy and safeguard national interest.'
  },
  {
    form: 'Form III',
    title: 'Application for Applying for Intellectual Property Rights (IPR)',
    applicant: 'Any person (Indian or Foreign) seeking patent/IPR based on Indian biological resources.',
    purpose: 'Mandatory approval prior to grant of patent by IP India or foreign patent office under Sec 6(1).'
  },
  {
    form: 'Form IV',
    title: 'Application for Third-Party Transfer of Accessed Biological Resource',
    applicant: 'Persons who have accessed bio-resource and intend to transfer to third party.',
    purpose: 'Maintain traceability and continuous ABS compliance.'
  }
];
