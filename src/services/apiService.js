/**
 * API Service
 * Handles all HTTP requests to the Express backend
 * ES Modules syntax for React frontend
 */

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

/**
 * Initiates Stripe checkout session
 * @param {Array} cartItems - Array of items in cart
 * @param {String} branchId - Branch ID for the order
 * @returns {Promise<Object>} Response with sessionUrl
 * @throws {Error} If checkout fails
 */
export const initiateCheckout = async (cartItems, branchId) => {
  try {
    // Validation
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      throw new Error('Cart cannot be empty');
    }

    if (!branchId) {
      throw new Error('Branch ID is required');
    }

    // Make POST request to backend
    const response = await fetch(`${API_BASE_URL}/payment/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cartItems: cartItems,
        branchId: branchId
      })
    });

    // Handle HTTP errors
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Checkout failed');
    }

    // Parse response
    const data = await response.json();

    // Check for API success
    if (!data.success) {
      throw new Error(data.message || 'Failed to create checkout session');
    }

    // Validate sessionUrl exists
    if (!data.sessionUrl) {
      throw new Error('No session URL returned from server');
    }

    // Redirect to Stripe checkout
    window.location.href = data.sessionUrl;

    return data;
  } catch (error) {
    console.error('Checkout error:', error.message);
    throw error;
  }
};

/**
 * Fetches AI-powered menu recommendations
 * @param {Array} currentCartItems - Items currently in cart
 * @param {String} branchId - Branch ID for location-based recommendations
 * @returns {Promise<Array>} Array of recommended items
 * @throws {Error} If fetch fails
 */
export const fetchAIRecommendations = async (currentCartItems = [], branchId) => {
  try {
    // Validation
    if (!branchId) {
      throw new Error('Branch ID is required');
    }

    // Make POST request to backend
    const response = await fetch(`${API_BASE_URL}/menu/recommendations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        currentCartItems: currentCartItems,
        branchId: branchId
      })
    });

    // Handle HTTP errors
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch recommendations');
    }

    // Parse response
    const data = await response.json();

    // Check for API success
    if (!data.success) {
      throw new Error(data.message || 'Recommendations service error');
    }

    // Return items array (or empty array if none)
    return data.items || [];
  } catch (error) {
    console.error('Recommendations fetch error:', error.message);
    throw error;
  }
};

/**
 * Fetches personalized recommendations based on customer history
 * @param {String} customerId - Customer ID
 * @param {String} branchId - Branch ID
 * @returns {Promise<Array>} Array of personalized recommendation items
 * @throws {Error} If fetch fails
 */
export const fetchPersonalizedRecommendations = async (customerId, branchId) => {
  try {
    // Validation
    if (!customerId) {
      throw new Error('Customer ID is required');
    }

    if (!branchId) {
      throw new Error('Branch ID is required');
    }

    // Make GET request to backend
    const response = await fetch(
      `${API_BASE_URL}/menu/personalized-recommendations/${customerId}/${branchId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    // Handle HTTP errors
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch personalized recommendations');
    }

    // Parse response
    const data = await response.json();

    // Check for API success
    if (!data.success) {
      throw new Error(data.message || 'Personalized recommendations service error');
    }

    // Return items array (or empty array if none)
    return data.items || [];
  } catch (error) {
    console.error('Personalized recommendations fetch error:', error.message);
    throw error;
  }
};

/**
 * Retrieves payment session details
 * @param {String} sessionId - Stripe session ID
 * @returns {Promise<Object>} Session details including payment status
 * @throws {Error} If fetch fails
 */
export const getSessionDetails = async (sessionId) => {
  try {
    if (!sessionId) {
      throw new Error('Session ID is required');
    }

    const response = await fetch(`${API_BASE_URL}/payment/session/${sessionId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch session details');
    }

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message || 'Session details service error');
    }

    return data.session || data;
  } catch (error) {
    console.error('Session details fetch error:', error.message);
    throw error;
  }
};

// Export all functions as default object as well
export default {
  initiateCheckout,
  fetchAIRecommendations,
  fetchPersonalizedRecommendations,
  getSessionDetails
};
