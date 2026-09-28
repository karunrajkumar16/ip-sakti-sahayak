// RAG (Retrieval-Augmented Generation) & Knowledge Search Service Simulation
// Simulates LangChain orchestration with Qdrant vector database and LLM response generation with citation validation.

import { INITIAL_MOCK_CONVERSATIONS } from '../data/mockChat';
import { GOVERNMENT_SOURCES } from '../data/sources';

export const ragService = {
  async queryAssistant({ question, language = 'English', jurisdiction = 'India' }) {
    await new Promise((res) => setTimeout(res, 800)); // Simulate RAG retrieval phase

    const lowerQ = question.toLowerCase();

    // Matching logic to return rich source-grounded answers
    let matchedConv = INITIAL_MOCK_CONVERSATIONS.find((c) =>
      lowerQ.includes('patent') || lowerQ.includes('formulation') || lowerQ.includes('ashwagandha')
    );

    if (lowerQ.includes('export') || lowerQ.includes('europe') || lowerQ.includes('usa')) {
      matchedConv = INITIAL_MOCK_CONVERSATIONS[1];
    } else if (lowerQ.includes('nano') || lowerQ.includes('turmeric') || lowerQ.includes('curcumin')) {
      matchedConv = INITIAL_MOCK_CONVERSATIONS[2];
    }

    if (!matchedConv) {
      // Dynamic fallback for any general query
      const isLowConfidence = lowerQ.includes('unknown') || lowerQ.includes('secret') || lowerQ.includes('custom');

      return {
        id: `conv-${Date.now()}`,
        userMessage: {
          text: question,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          language,
          jurisdiction
        },
        botResponse: {
          text: `Regarding your query "${question}":

Based on current retrieval from India Code, IP India examination manuals, and TKDL database:

1. **Patents & Prior Art:** Traditional knowledge documented in classical texts or publicly available database records is precluded from patenting under Section 3(p) of the Patents Act, 1970.
2. **Synergistic Formulations:** If the formulation is a novel combination, applicant must present experimental comparative trial data proving a significant synergistic index under Section 3(e).
3. **Biodiversity Approvals:** Prior Informed Consent (PIC) and Form III approval from the National Biodiversity Authority (NBA) is mandatory prior to submitting patent applications derived from Indian biological materials.`,
          confidence: isLowConfidence ? 'LOW' : 'HIGH',
          confidenceReason: isLowConfidence
            ? 'Low confidence — insufficient direct prior art citations retrieved from TKDL index for this specific query phrase.'
            : 'High confidence — verified against statutory provisions of Patents Act 1970 and Biological Diversity Act 2002.',
          sources: [
            GOVERNMENT_SOURCES[0],
            GOVERNMENT_SOURCES[1],
            GOVERNMENT_SOURCES[2]
          ].map((s, idx) => ({
            id: `src-gen-${idx}`,
            sourceName: s.code,
            documentTitle: s.title,
            authority: s.authority,
            type: 'Official Portal Index',
            section: 'General Statutory Provisions',
            indexedDate: s.lastIndexed,
            citationUrl: s.website,
            snippet: s.purpose
          })),
          relevantProvisions: [
            'Patents Act 1970 - Section 3(p)',
            'Biological Diversity Act 2002 - Section 6'
          ],
          recommendations: [
            'Consult the official TKDL prior-art search repository.',
            'Ensure biological material origin disclosure is included.'
          ],
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      };
    }

    return {
      ...matchedConv,
      id: `conv-${Date.now()}`,
      userMessage: {
        ...matchedConv.userMessage,
        text: question,
        language,
        jurisdiction
      }
    };
  }
};
