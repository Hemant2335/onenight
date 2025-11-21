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

// Admin API
export const adminAPI = {
  // Carousel Images
  getAllCarouselImages: () =>
    apiRequest("/admin/carousel-images", {
      method: "GET",
    }),
  createCarouselImage: (data: { image_url: string; alt_text?: string; order_index?: number; is_active?: boolean }) =>
    apiRequest("/admin/carousel-images", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  updateCarouselImage: (imageId: string, data: { image_url?: string; alt_text?: string; order_index?: number; is_active?: boolean }) =>
    apiRequest(`/admin/carousel-images/${imageId}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  deleteCarouselImage: (imageId: string) =>
    apiRequest(`/admin/carousel-images/${imageId}`, {
      method: "DELETE",
    }),

  // Banner Content
  getBannerContent: () =>
    apiRequest("/admin/banner-content", {
      method: "GET",
    }),
  createOrUpdateBannerContent: (data: { title: string; subtitle?: string; description?: string; button_text?: string; button_link?: string; is_active?: boolean }) =>
    apiRequest("/admin/banner-content", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  updateBannerContent: (bannerId: string, data: { title?: string; subtitle?: string; description?: string; button_text?: string; button_link?: string; is_active?: boolean }) =>
    apiRequest(`/admin/banner-content/${bannerId}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  deleteBannerContent: (bannerId: string) =>
    apiRequest(`/admin/banner-content/${bannerId}`, {
      method: "DELETE",
    }),

  // Feed Highlights
  getAllFeedHighlights: () =>
    apiRequest("/admin/feed-highlights", {
      method: "GET",
    }),
  createFeedHighlight: (data: { heading: string; link?: string; is_active?: boolean }) =>
    apiRequest("/admin/feed-highlights", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  updateFeedHighlight: (highlightId: string, data: { heading?: string; link?: string; is_active?: boolean }) =>
    apiRequest(`/admin/feed-highlights/${highlightId}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  deleteFeedHighlight: (highlightId: string) =>
    apiRequest(`/admin/feed-highlights/${highlightId}`, {
      method: "DELETE",
    }),
};

// Public API for frontend
export const publicAPI = {
  getCarouselImages: () =>
    apiRequest("/admin/public/carousel-images", {
      method: "GET",
    }),
  getBannerContent: () =>
    apiRequest("/admin/public/banner-content", {
      method: "GET",
    }),
  getFeedHighlights: () =>
    apiRequest("/admin/public/feed-highlights", {
      method: "GET",
    }),
};