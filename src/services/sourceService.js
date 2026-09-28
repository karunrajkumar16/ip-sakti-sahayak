// Government Sources & Documents Management Service

import { GOVERNMENT_SOURCES } from '../data/sources';
import { MOCK_GOVERNMENT_DOCUMENTS } from '../data/documents';

export const sourceService = {
  async getAllSources() {
    return GOVERNMENT_SOURCES;
  },

  async getSourceById(id) {
    return GOVERNMENT_SOURCES.find(s => s.id === id) || null;
  },

  async searchDocuments({ query, category, authority }) {
    await new Promise(r => setTimeout(r, 300));
    let docs = [...MOCK_GOVERNMENT_DOCUMENTS];

    if (query) {
      const q = query.toLowerCase();
      docs = docs.filter(d => 
        d.title.toLowerCase().includes(q) || 
        d.summary.toLowerCase().includes(q) ||
        d.authority.toLowerCase().includes(q)
      );
    }
    if (category && category !== 'ALL') {
      docs = docs.filter(d => d.category === category);
    }
    if (authority && authority !== 'ALL') {
      docs = docs.filter(d => d.authority.includes(authority));
    }
    return docs;
  }
};
