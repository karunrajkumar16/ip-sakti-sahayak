// Expert Escalation Service Simulation

let mockEscalationsList = [
  {
    referenceNumber: 'IPSAKTI-2026-000120',
    name: 'Dr. Ramesh Sharma',
    email: 'ramesh.sharma@ayurveda-research.in',
    mobile: '+91 98765 43210',
    category: 'IPR & Patent Eligibility',
    description: 'Seeking opinion on Section 3(p) prior art challenge regarding hydro-alcoholic extract ratio of Guduchi.',
    status: 'Under Review',
    submittedAt: '2026-09-27 14:30',
    assignedTo: 'Patent Examiner (Traditional Knowledge Cell, CGPDTM)'
  },
  {
    referenceNumber: 'IPSAKTI-2026-000121',
    name: 'Ananya Deshmukh',
    email: 'ananya@herbalorganics.com',
    mobile: '+91 91234 56789',
    category: 'Biodiversity & ABS Approval',
    description: 'Form III NBA application query for export of cultivated Ashwagandha root powder to Germany.',
    status: 'Pending Assignment',
    submittedAt: '2026-09-28 09:15',
    assignedTo: 'Unassigned'
  }
];

export const expertService = {
  async submitEscalation(formData) {
    await new Promise(r => setTimeout(r, 600)); // Simulate API call
    const count = mockEscalationsList.length + 124;
    const refNo = `IPSAKTI-2026-${String(count).padStart(6, '0')}`;
    
    const newRecord = {
      referenceNumber: refNo,
      ...formData,
      status: 'Submitted for Review',
      submittedAt: new Date().toLocaleString(),
      assignedTo: 'Patent Office & AYUSH Expert Panel'
    };

    mockEscalationsList.unshift(newRecord);

    return {
      success: true,
      referenceNumber: refNo,
      message: 'Request submitted successfully to the Expert Panel.',
      record: newRecord
    };
  },

  async getAllEscalations() {
    return mockEscalationsList;
  }
};
