const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://onenightbackend-3-0.onrender.com/api";

// API request helper
const apiRequest = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<any> => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ error: "Request failed" }));
    throw new Error(error.error || error.message || "Request failed");
  }

  return response.json();
};

// Events API
export const eventsAPI = {
  // Public endpoint - no authentication required
  getAllPublicEvents: () =>
    apiRequest("/events/public", {
      method: "GET",
    }),
};