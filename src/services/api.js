// Central API Abstraction Layer for IP-SAKTI Sahayak
// Clean service abstraction so mock APIs can later be replaced with FastAPI endpoints without modifying UI components.

const USE_MOCK = true;
const FASTAPI_BASE_URL = 'http://localhost:8000/api';

export const apiClient = {
  async post(endpoint, body) {
    if (USE_MOCK) {
      // Simulate network latency (400-700ms) for realistic government portal feel
      await new Promise(res => setTimeout(res, 500));
      return { status: 200, ok: true };
    }
    const response = await fetch(`${FASTAPI_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    return response.json();
  },

  async get(endpoint) {
    if (USE_MOCK) {
      await new Promise(res => setTimeout(res, 300));
      return { status: 200, ok: true };
    }
    const response = await fetch(`${FASTAPI_BASE_URL}${endpoint}`);
    return response.json();
  }
};
