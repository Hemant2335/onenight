'use client';

import React, { useState, useEffect } from 'react';
import { adminAPI } from '@/lib/api';

interface CarouselImage {
  id: string;
  image_url: string;
  alt_text?: string;
  order_index: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface BannerContent {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  button_text?: string;
  button_link?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface FeedHighlight {
  id: string;
  heading: string;
  link?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Carousel state
  const [carouselImages, setCarouselImages] = useState<CarouselImage[]>([]);
  const [showCarouselForm, setShowCarouselForm] = useState(false);
  const [carouselForm, setCarouselForm] = useState({
    image_url: '',
    alt_text: '',
    order_index: '',
    is_active: true
  });
  const [editingCarousel, setEditingCarousel] = useState<CarouselImage | null>(null);

  // Banner state
  const [bannerContent, setBannerContent] = useState<BannerContent | null>(null);
  const [showBannerForm, setShowBannerForm] = useState(false);
  const [bannerForm, setBannerForm] = useState({
    title: '',
    subtitle: '',
    description: '',
    button_text: '',
    button_link: ''
  });

  // Feed Highlights state
  const [feedHighlights, setFeedHighlights] = useState<FeedHighlight[]>([]);
  const [showFeedHighlightForm, setShowFeedHighlightForm] = useState(false);
  const [feedHighlightForm, setFeedHighlightForm] = useState({
    heading: '',
    link: '',
    is_active: true
  });
  const [editingFeedHighlight, setEditingFeedHighlight] = useState<FeedHighlight | null>(null);

  // Check if already authenticated
  useEffect(() => {
    const authStatus = localStorage.getItem('admin_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [carouselResponse, bannerResponse, feedHighlightsResponse] = await Promise.all([
        adminAPI.getAllCarouselImages(),
        adminAPI.getBannerContent(),
        adminAPI.getAllFeedHighlights()
      ]);

      if (carouselResponse.success) {
        setCarouselImages(carouselResponse.images || []);
      }

      if (bannerResponse.success) {
        setBannerContent(bannerResponse.banner);
        if (bannerResponse.banner) {
          setBannerForm({
            title: bannerResponse.banner.title || '',
            subtitle: bannerResponse.banner.subtitle || '',
            description: bannerResponse.banner.description || '',
            button_text: bannerResponse.banner.button_text || '',
            button_link: bannerResponse.banner.button_link || ''
          });
        }
      }

      if (feedHighlightsResponse.success) {
        setFeedHighlights(feedHighlightsResponse.highlights || []);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Simple test password
      setIsAuthenticated(true);
      localStorage.setItem('admin_authenticated', 'true');
      fetchData();
    } else {
      setError('Invalid password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_authenticated');
  };

  const handleCreateCarouselImage = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError('');
      setSuccess('');
      const response = await adminAPI.createCarouselImage({
        image_url: carouselForm.image_url,
        alt_text: carouselForm.alt_text || undefined,
        order_index: carouselForm.order_index ? parseInt(carouselForm.order_index) : undefined,
        is_active: carouselForm.is_active
      });

      if (response.success) {
        setSuccess('Carousel image created successfully!');
        setCarouselForm({ image_url: '', alt_text: '', order_index: '', is_active: true });
        setShowCarouselForm(false);
        fetchData();
      }
    } catch (err: any) {
      setError(err.message || 'Failed to create carousel image');
    }
  };

  const handleUpdateCarouselImage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCarousel) return;

    try {
      setError('');
      setSuccess('');
      const response = await adminAPI.updateCarouselImage(editingCarousel.id, {
        image_url: carouselForm.image_url || undefined,
        alt_text: carouselForm.alt_text || undefined,
        order_index: carouselForm.order_index ? parseInt(carouselForm.order_index) : undefined,
        is_active: carouselForm.is_active
      });

      if (response.success) {
        setSuccess('Carousel image updated successfully!');
        setCarouselForm({ image_url: '', alt_text: '', order_index: '', is_active: true });
        setEditingCarousel(null);
        setShowCarouselForm(false);
        fetchData();
      }
    } catch (err: any) {
      setError(err.message || 'Failed to update carousel image');
    }
  };

  const handleDeleteCarouselImage = async (imageId: string) => {
    if (!confirm('Are you sure you want to delete this carousel image?')) return;

    try {
      setError('');
      setSuccess('');
      const response = await adminAPI.deleteCarouselImage(imageId);
      if (response.success) {
        setSuccess('Carousel image deleted successfully!');
        fetchData();
      }
    } catch (err: any) {
      setError(err.message || 'Failed to delete carousel image');
    }
  };

  const handleCreateOrUpdateBanner = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError('');
      setSuccess('');
      const response = await adminAPI.createOrUpdateBannerContent({
        title: bannerForm.title,
        subtitle: bannerForm.subtitle || undefined,
        description: bannerForm.description || undefined,
        button_text: bannerForm.button_text || undefined,
        button_link: bannerForm.button_link || undefined,
        is_active: true
      });

      if (response.success) {
        setSuccess('Banner content updated successfully!');
        setShowBannerForm(false);
        fetchData();
      }
    } catch (err: any) {
      setError(err.message || 'Failed to update banner content');
    }
  };

  const handleCreateFeedHighlight = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError('');
      setSuccess('');
      const response = await adminAPI.createFeedHighlight({
        heading: feedHighlightForm.heading,
        link: feedHighlightForm.link || undefined,
        is_active: feedHighlightForm.is_active
      });

      if (response.success) {
        setSuccess('Feed highlight created successfully!');
        setFeedHighlightForm({ heading: '', link: '', is_active: true });
        setShowFeedHighlightForm(false);
        fetchData();
      }
    } catch (err: any) {
      setError(err.message || 'Failed to create feed highlight');
    }
  };

  const handleUpdateFeedHighlight = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingFeedHighlight) return;

    try {
      setError('');
      setSuccess('');
      const response = await adminAPI.updateFeedHighlight(editingFeedHighlight.id, {
        heading: feedHighlightForm.heading || undefined,
        link: feedHighlightForm.link || undefined,
        is_active: feedHighlightForm.is_active
      });

      if (response.success) {
        setSuccess('Feed highlight updated successfully!');
        setFeedHighlightForm({ heading: '', link: '', is_active: true });
        setEditingFeedHighlight(null);
        setShowFeedHighlightForm(false);
        fetchData();
      }
    } catch (err: any) {
      setError(err.message || 'Failed to update feed highlight');
    }
  };

  const handleDeleteFeedHighlight = async (highlightId: string) => {
    if (!confirm('Are you sure you want to delete this feed highlight?')) return;

    try {
      setError('');
      setSuccess('');
      const response = await adminAPI.deleteFeedHighlight(highlightId);
      if (response.success) {
        setSuccess('Feed highlight deleted successfully!');
        fetchData();
      }
    } catch (err: any) {
      setError(err.message || 'Failed to delete feed highlight');
    }
  };

  const openEditCarousel = (image: CarouselImage) => {
    setEditingCarousel(image);
    setCarouselForm({
      image_url: image.image_url,
      alt_text: image.alt_text || '',
      order_index: image.order_index.toString(),
      is_active: image.is_active
    });
    setShowCarouselForm(true);
  };

  const openEditFeedHighlight = (highlight: FeedHighlight) => {
    setEditingFeedHighlight(highlight);
    setFeedHighlightForm({
      heading: highlight.heading,
      link: highlight.link || '',
      is_active: highlight.is_active
    });
    setShowFeedHighlightForm(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                required
              />
            </div>
            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </form>
          <p className="text-gray-400 text-xs mt-4 text-center">
            Test password: admin123
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Messages */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}
        {success && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <p className="text-green-400 text-sm">{success}</p>
          </div>
        )}

        {/* Actions */}
        <div className="mb-8 flex flex-wrap gap-4">
          <button
            onClick={() => {
              setShowCarouselForm(true);
              setEditingCarousel(null);
              setCarouselForm({ image_url: '', alt_text: '', order_index: '', is_active: true });
            }}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            + Add Carousel Image
          </button>
          <button
            onClick={() => setShowBannerForm(true)}
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Update Banner Content
          </button>
          <button
            onClick={() => {
              setShowFeedHighlightForm(true);
              setEditingFeedHighlight(null);
              setFeedHighlightForm({ heading: '', link: '', is_active: true });
            }}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            + Add Feed Highlight
          </button>
        </div>

        {/* Carousel Images Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Carousel Images</h2>
          {carouselImages.length === 0 ? (
            <div className="text-center py-12 bg-gray-800 border border-gray-700 rounded-lg">
              <p className="text-gray-400">No carousel images yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {carouselImages.map((image) => (
                <div key={image.id} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                  <img
                    src={image.image_url}
                    alt={image.alt_text || 'Carousel image'}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <div className="text-white text-sm mb-2">
                    <p><strong>Order:</strong> {image.order_index}</p>
                    <p><strong>Active:</strong> {image.is_active ? 'Yes' : 'No'}</p>
                    {image.alt_text && <p><strong>Alt:</strong> {image.alt_text}</p>}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openEditCarousel(image)}
                      className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteCarouselImage(image.id)}
                      className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Banner Content Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Banner Content</h2>
          {bannerContent ? (
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{bannerContent.title}</h3>
              {bannerContent.subtitle && <p className="text-gray-300 mb-2">{bannerContent.subtitle}</p>}
              {bannerContent.description && <p className="text-gray-400 mb-2">{bannerContent.description}</p>}
              {bannerContent.button_text && (
                <p className="text-gray-300">
                  <strong>Button:</strong> {bannerContent.button_text}
                  {bannerContent.button_link && ` → ${bannerContent.button_link}`}
                </p>
              )}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-800 border border-gray-700 rounded-lg">
              <p className="text-gray-400">No banner content set.</p>
            </div>
          )}
        </div>

        {/* Feed Highlights Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Feed Highlights</h2>
          {feedHighlights.length === 0 ? (
            <div className="text-center py-12 bg-gray-800 border border-gray-700 rounded-lg">
              <p className="text-gray-400">No feed highlights yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {feedHighlights.map((highlight) => (
                <div key={highlight.id} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{highlight.heading}</h3>
                  <div className="text-white text-sm mb-2">
                    <p><strong>Active:</strong> {highlight.is_active ? 'Yes' : 'No'}</p>
                    {highlight.link && <p><strong>Link:</strong> {highlight.link}</p>}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openEditFeedHighlight(highlight)}
                      className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteFeedHighlight(highlight.id)}
                      className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Carousel Form Modal */}
        {showCarouselForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
              <h3 className="text-xl font-bold text-white mb-4">
                {editingCarousel ? 'Edit Carousel Image' : 'Add Carousel Image'}
              </h3>
              <form onSubmit={editingCarousel ? handleUpdateCarouselImage : handleCreateCarouselImage}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Image URL *
                    </label>
                    <input
                      type="url"
                      value={carouselForm.image_url}
                      onChange={(e) => setCarouselForm({ ...carouselForm, image_url: e.target.value })}
                      placeholder="https://example.com/image.jpg"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Alt Text
                    </label>
                    <input
                      type="text"
                      value={carouselForm.alt_text}
                      onChange={(e) => setCarouselForm({ ...carouselForm, alt_text: e.target.value })}
                      placeholder="Alt text for accessibility"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Order Index
                    </label>
                    <input
                      type="number"
                      value={carouselForm.order_index}
                      onChange={(e) => setCarouselForm({ ...carouselForm, order_index: e.target.value })}
                      placeholder="0"
                      min="0"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="is_active"
                      checked={carouselForm.is_active}
                      onChange={(e) => setCarouselForm({ ...carouselForm, is_active: e.target.checked })}
                      className="mr-2"
                    />
                    <label htmlFor="is_active" className="text-gray-300 text-sm">
                      Active
                    </label>
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                  >
                    {editingCarousel ? 'Update' : 'Create'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowCarouselForm(false);
                      setEditingCarousel(null);
                      setCarouselForm({ image_url: '', alt_text: '', order_index: '', is_active: true });
                    }}
                    className="px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Banner Form Modal */}
        {showBannerForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
              <h3 className="text-xl font-bold text-white mb-4">Update Banner Content</h3>
              <form onSubmit={handleCreateOrUpdateBanner}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      value={bannerForm.title}
                      onChange={(e) => setBannerForm({ ...bannerForm, title: e.target.value })}
                      placeholder="Banner title"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Subtitle
                    </label>
                    <input
                      type="text"
                      value={bannerForm.subtitle}
                      onChange={(e) => setBannerForm({ ...bannerForm, subtitle: e.target.value })}
                      placeholder="Banner subtitle"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Description
                    </label>
                    <textarea
                      value={bannerForm.description}
                      onChange={(e) => setBannerForm({ ...bannerForm, description: e.target.value })}
                      placeholder="Banner description"
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Button Text
                    </label>
                    <input
                      type="text"
                      value={bannerForm.button_text}
                      onChange={(e) => setBannerForm({ ...bannerForm, button_text: e.target.value })}
                      placeholder="Button text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Button Link
                    </label>
                    <input
                      type="url"
                      value={bannerForm.button_link}
                      onChange={(e) => setBannerForm({ ...bannerForm, button_link: e.target.value })}
                      placeholder="https://example.com"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
                  >
                    Update Banner
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowBannerForm(false)}
                    className="px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Feed Highlight Form Modal */}
        {showFeedHighlightForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
              <h3 className="text-xl font-bold text-white mb-4">
                {editingFeedHighlight ? 'Edit Feed Highlight' : 'Add Feed Highlight'}
              </h3>
              <form onSubmit={editingFeedHighlight ? handleUpdateFeedHighlight : handleCreateFeedHighlight}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Heading *
                    </label>
                    <input
                      type="text"
                      value={feedHighlightForm.heading}
                      onChange={(e) => setFeedHighlightForm({ ...feedHighlightForm, heading: e.target.value })}
                      placeholder="Feed highlight heading"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Link
                    </label>
                    <input
                      type="url"
                      value={feedHighlightForm.link}
                      onChange={(e) => setFeedHighlightForm({ ...feedHighlightForm, link: e.target.value })}
                      placeholder="https://example.com"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="feed_highlight_active"
                      checked={feedHighlightForm.is_active}
                      onChange={(e) => setFeedHighlightForm({ ...feedHighlightForm, is_active: e.target.checked })}
                      className="mr-2"
                    />
                    <label htmlFor="feed_highlight_active" className="text-gray-300 text-sm">
                      Active
                    </label>
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700"
                  >
                    {editingFeedHighlight ? 'Update' : 'Create'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowFeedHighlightForm(false);
                      setEditingFeedHighlight(null);
                      setFeedHighlightForm({ heading: '', link: '', is_active: true });
                    }}
                    className="px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;