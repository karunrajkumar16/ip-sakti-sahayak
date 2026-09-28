// Mock AI Assistant Chat Conversations with Source Citations & Confidence Levels

export const SAMPLE_QUESTIONS = [
  "Can this Ayurvedic formulation be patented under Indian Patent Law?",
  "Is Turmeric (Curcuma longa) traditional formulation for wound healing documented in TKDL?",
  "What are the mandatory NBA Access and Benefit Sharing (ABS) approvals required for exporting Ashwagandha extract?",
  "How to classify a polyherbal syrup containing Pippali and Guduchi under AYUSH vs FSSAI Ayush Aahar?",
  "Can I register a Geographical Indication (GI) for a regional Ayurvedic herbal preparation?"
];

export const INITIAL_MOCK_CONVERSATIONS = [
  {
    id: 'conv-1',
    userMessage: {
      text: 'Can this Ayurvedic formulation containing Ashwagandha, Guduchi, and Pippali for anti-stress enhancement be patented in India?',
      timestamp: '10:14 AM',
      language: 'English',
      jurisdiction: 'India'
    },
    botResponse: {
      text: `Based on official provisions of the Indian Patents Act, 1970 and established examination guidelines of the Indian Patent Office (IP India), an Ayurvedic formulation combining known herbs like Ashwagandha (Withania somnifera), Guduchi (Tinospora cordifolia), and Pippali (Piper longum) faces specific statutory patentability hurdles:

1. **Section 3(p) Exclusion:** The Indian Patents Act specifically excludes "an invention which in effect, is traditional knowledge or which is an aggregation or duplication of known properties of traditionally known component or components." If the therapeutic properties for stress relief are already documented in classical Ayurvedic texts (e.g., Charaka Samhita or Bhavaprakasha), a patent cannot be granted.
2. **Section 3(e) Synergistic Effect Requirement:** A mere combination or admixture of known herbal components is not patentable unless a clear, unexpected **synergistic effect** (demonstrated via scientific clinical data or bio-assay proving the combination produces a effect greater than the sum of individual herbs) is proven.
3. **Novel Extraction/Fractionation:** If you have developed a specific non-obvious bio-guided extraction process or isolated a novel active chemical fraction not previously known in traditional literature, the *process* or *novel fraction* may be patentable, provided it satisfies Novelty (Sec 2(1)(j)) and Inventive Step (Sec 2(1)(ja)).
4. **Mandatory National Biodiversity Authority (NBA) Approval:** Under Section 6 of the Biological Diversity Act 2002, prior approval from the NBA is mandatory before applying for a patent based on biological resources obtained from India.`,
      confidence: 'HIGH', // HIGH | MEDIUM | LOW
      confidenceReason: 'Supported by exact statutory provisions of Section 3(p) & 3(e) of Patents Act 1970 and IP India Guidelines on Traditional Knowledge Patents (2012).',
      sources: [
        {
          id: 'src-101',
          sourceName: 'IP India',
          documentTitle: 'Guidelines for Examination of Patent Applications Relating to Traditional Knowledge and Biological Material',
          authority: 'Office of CGPDTM, DPIIT',
          type: 'Official Examination Guidelines',
          section: 'Section 3(p) & Section 3(e) Evaluation Criteria',
          indexedDate: '2024-03-15',
          citationUrl: 'https://ipindia.gov.in/guidelines-patents.htm',
          snippet: 'An invention which is an aggregation or duplication of known properties of traditionally known components shall be rejected under Section 3(p). Synergism must be demonstrated with empirical data.'
        },
        {
          id: 'src-102',
          sourceName: 'India Code',
          documentTitle: 'The Patents Act, 1970 (Act No. 39 of 1970)',
          authority: 'Ministry of Law and Justice, Govt of India',
          type: 'Statute / Central Act',
          section: 'Section 3(p), Section 3(e), Section 6(1)',
          indexedDate: '2026-01-10',
          citationUrl: 'https://www.indiacode.nic.in/handle/123456789/1392',
          snippet: 'Section 3(p): An invention which in effect is traditional knowledge or which is an aggregation or duplication of known properties of traditionally known components is not an invention.'
        },
        {
          id: 'src-103',
          sourceName: 'TKDL',
          documentTitle: 'Traditional Knowledge Digital Library — Ayurvedic Formulations Index',
          authority: 'CSIR & Ministry of AYUSH',
          type: 'Prior Art Database Entry',
          section: 'Ref: AK02/1458 (Rasayana / Balya formulations)',
          indexedDate: '2026-02-20',
          citationUrl: 'https://www.tkdl.res.in/tkdl/langdefault/ayurveda/Ayu_Formulation.asp',
          snippet: 'Combinations of Ashwagandha and Guduchi are extensively documented in Astanga Hridaya (Uttaratantra Ch. 39) for immunomodulatory (Vyadhiksamatva) and adaptogenic properties.'
        }
      ],
      relevantProvisions: [
        'Patents Act 1970 - Section 3(p)',
        'Patents Act 1970 - Section 3(e)',
        'Biological Diversity Act 2002 - Section 6(1)'
      ],
      recommendations: [
        'Conduct a prior-art search against the TKDL database for the specific ratio of herbs.',
        'Obtain clinical or in-vitro assay evidence demonstrating synergistic enhancement.',
        'File Form III with the National Biodiversity Authority (NBA) prior to patent filing.'
      ],
      timestamp: '10:14 AM'
    }
  },

  {
    id: 'conv-2',
    userMessage: {
      text: 'What are the exact regulatory approvals needed to export an Ayurvedic proprietary medicine extract to Europe or USA?',
      timestamp: '11:30 AM',
      language: 'English',
      jurisdiction: 'International'
    },
    botResponse: {
      text: `Exporting Ayurvedic formulations or botanical extracts involves dual-tier compliance: domestic Indian export & biodiversity regulations, and importing country health authority standards (US FDA / EMA / WIPO):

1. **Domestic AYUSH Manufacturing & Export License:**
   - License issued by the State Licensing Authority under Rule 158B of Drugs & Cosmetics Rules 1945.
   - Certificate of Pharmaceutical Product (COPP) or Free Sale Certificate (FSC) issued by CDSCO / State AYUSH Authority.
   - Good Manufacturing Practices (GMP) certification (Schedule T compliance).

2. **National Biodiversity Authority (NBA) ABS Clearance:**
   - Under Section 3 & 6 of the Biological Diversity Act 2002, foreign entities or Indian entities exporting biological resources for commercial utilization or R&D must obtain **Form I / Form III clearance** from NBA Chennai.
   - Access & Benefit Sharing (ABS) agreement execution detailing benefit sharing royalty (0.1% to 0.5% of FOB sales).

3. **Destination Market Compliance:**
   - **USA (US FDA):** Categorized under Dietary Supplement Health and Education Act (DSHEA 1994). Requires New Dietary Ingredient (NDI) notification or GRAS status. Must comply with 21 CFR Part 111 (cGMPS).
   - **European Union (EMA/EFSA):** Registered under Traditional Herbal Medicinal Products Directive (THMPD 2004/24/EC) requiring 30 years of documented safe medicinal use (15 years within EU).`,
      confidence: 'HIGH',
      confidenceReason: 'Cross-referenced with Ministry of AYUSH export protocols, Biological Diversity Rules 2014, and US FDA DSHEA guidelines.',
      sources: [
        {
          id: 'src-201',
          sourceName: 'AYUSH',
          documentTitle: 'Guidelines for Export of Ayurvedic, Siddha and Unani (ASU) Drugs',
          authority: 'Ministry of AYUSH & Pharmexcil',
          type: 'Regulatory Notification',
          section: 'Rule 158B, Schedule T GMP',
          indexedDate: '2025-11-12',
          citationUrl: 'https://ayush.gov.in/export-guidelines',
          snippet: 'Mandatory requirement of Free Sale Certificate (FSC), Heavy Metals testing report, and Pesticide residue clearance prior to export shipment clearance.'
        },
        {
          id: 'src-202',
          sourceName: 'NBA',
          documentTitle: 'Guidelines on Access to Biological Resources and Associated Knowledge and Benefit Sharing Regulations',
          authority: 'National Biodiversity Authority, MoEFCC',
          type: 'Statutory Regulation',
          section: 'Regulation 2, Regulation 4 (Commercial Utilization ABS)',
          indexedDate: '2026-01-05',
          citationUrl: 'https://nbaindia.org/abs-guidelines',
          snippet: 'Export of biological resources for commercial utilization outside India attracts ABS levy under Regulation 4.'
        }
      ],
      relevantProvisions: [
        'Drugs & Cosmetics Rules 1945 - Rule 158B',
        'Biological Diversity Act 2002 - Section 3 & Section 6',
        'US FDA 21 CFR Part 111'
      ],
      recommendations: [
        'Apply for NBA Form I approval at least 90 days before commercial export contracts.',
        'Ensure heavy metal (Lead, Mercury, Cadmium, Arsenic) testing reports comply with Pharmacopoeial standards.'
      ],
      timestamp: '11:30 AM'
    }
  },

  {
    id: 'conv-3',
    userMessage: {
      text: 'Can I register a proprietary nano-formulation of Haridra (Turmeric) for targeted inflammation relief?',
      timestamp: '02:15 PM',
      language: 'English',
      jurisdiction: 'India'
    },
    botResponse: {
      text: `Your query regarding a nano-carrier or nano-formulation of Haridra (Curcuma longa) involves complex regulatory and novel patent considerations.

While raw Haridra for inflammation is documented prior art in TKDL, a specific **engineered nano-emulsion, liposomal delivery vehicle, or lipid nanoparticle encapsulation** that enhances bioavailability and alters pharmacokinetic parameters may qualify for patent protection, provided:
1. It is proven not to be an obvious extension to a skilled nanomedicine researcher.
2. The nanoparticle delivery vector shows unexpected therapeutic efficacy beyond standard Curcumin.

However, because this is an advanced interdisciplinary technology involving nanotechnology and proprietary drug delivery systems:
- Evidence confidence is **MODERATE to LOW** due to evolving CDSCO & AYUSH Nano-Medicine regulatory guidelines (2023 Guidelines on Safety Evaluation of Nano-materials in Cosmetics and Drugs).`,
      confidence: 'MEDIUM',
      confidenceReason: 'Requires specific assessment of patent examination precedents for nano-phytomedicines and safety guidelines for nano-materials.',
      sources: [
        {
          id: 'src-301',
          sourceName: 'IP India',
          documentTitle: 'Manual of Patent Office Practice and Procedure',
          authority: 'Office of CGPDTM',
          type: 'Manual',
          section: 'Chapter 8 - Examination of Chemical and Pharmaceutical Inventions',
          indexedDate: '2024-08-10',
          citationUrl: 'https://ipindia.gov.in/manual-patents',
          snippet: 'Nanoparticle formulations of natural products require evidence of technical advancement over macro-formulations and non-obviousness.'
        },
        {
          id: 'src-302',
          sourceName: 'AYUSH',
          documentTitle: 'Guidelines for Safety Evaluation of Ayurvedic Nano-materials & Phytoseuticals',
          authority: 'Pharmacopoeia Commission for Indian Medicine & Homoeopathy (PCIM&H)',
          type: 'Safety Standard',
          section: 'Section 4 - Nanoparticle Bio-distribution & Toxicity Requirements',
          indexedDate: '2025-05-19',
          citationUrl: 'https://pcimh.gov.in/nano-guidelines',
          snippet: 'Pre-clinical toxicity testing is compulsory for all nano-phytomedicines prior to clinical trial permission.'
        }
      ],
      relevantProvisions: [
        'Patents Act 1970 - Section 2(1)(ja)',
        'Drugs & Cosmetics Act 1940 - Schedule Y / New Drug Provisions'
      ],
      recommendations: [
        'Perform a specialized patent search on WIPO PATENTSCOPE for nano-curcumin patents.',
        'Escalate query to an IPR Patent Agent or AYUSH Regulatory Consultant for complete prior art analysis.'
      ],
      timestamp: '02:15 PM'
    }
  }
];
