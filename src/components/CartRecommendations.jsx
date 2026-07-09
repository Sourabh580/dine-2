import React, { useState, useEffect } from 'react';
import './CartRecommendations.css';

/**
 * CartRecommendations Component
 * Displays cart summary with AI-powered menu recommendations
 */
const CartRecommendations = ({ 
  cartItems = [], 
  branchId, 
  onCheckout, 
  onAddToCart 
}) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch recommendations whenever cart changes
  useEffect(() => {
    if (branchId) {
      fetchRecommendations();
    }
  }, [cartItems, branchId]);

  const fetchRecommendations = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/menu/recommendations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentCartItems: cartItems,
          branchId: branchId
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch recommendations');
      }

      const data = await response.json();
      setRecommendations(data.items || []);
    } catch (err) {
      console.error('Error fetching recommendations:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Calculate cart totals
  const cartTotal = cartItems.reduce((sum, item) => {
    return sum + (item.price * (item.quantity || 1));
  }, 0);

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      setError('Cart is empty. Please add items before checkout.');
      return;
    }

    try {
      const response = await fetch('/api/payment/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cartItems: cartItems,
          branchId: branchId
        })
      });

      if (!response.ok) {
        throw new Error('Checkout failed');
      }

      const data = await response.json();
      
      if (data.success && data.sessionUrl) {
        window.location.href = data.sessionUrl;
      } else {
        setError('Failed to create checkout session');
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setError(err.message);
    }
  };

  return (
    <div className="cart-recommendations-container">
      {/* Cart Summary Section */}
      <div className="cart-summary-section">
        <h2 className="section-title">
          🛒 Your Order {cartItems.length > 0 && `(${cartItems.length} items)`}
        </h2>

        {cartItems.length > 0 ? (
          <>
            <div className="cart-items-list">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-quantity">x{item.quantity || 1}</span>
                  <span className="item-price">
                    ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="cart-total">
              Total: ₹{cartTotal.toFixed(2)}
            </div>

            <button 
              className="checkout-button"
              onClick={handleCheckout}
            >
              💳 Proceed to Payment
            </button>
          </>
        ) : (
          <div style={{ 
            padding: '24px', 
            textAlign: 'center', 
            opacity: 0.8 
          }}>
            Your cart is empty. Start adding items!
          </div>
        )}
      </div>

      {/* Recommendations Section */}
      {cartItems.length > 0 && (
        <div className="recommendations-section">
          <h3 className="section-title">
            ⭐ {recommendations[0]?.reason || 'Recommended For You'}
          </h3>

          {loading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              Loading recommendations...
            </div>
          ) : error ? (
            <div className="error-state">
              <p>⚠️ {error}</p>
            </div>
          ) : recommendations.length > 0 ? (
            <div className="recommendations-grid">
              {recommendations.map((item, index) => (
                <div key={index} className="recommendation-card">
                  <div className="card-header">
                    <span className="item-name">{item.name}</span>
                    <span className="item-category">{item.category}</span>
                  </div>

                  <div className="card-body">
                    <p className="item-price">₹{item.price}</p>
                  </div>

                  <button
                    className="add-to-cart-button"
                    onClick={() => onAddToCart(item)}
                  >
                    + Add to Cart
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ 
              padding: '24px', 
              textAlign: 'center', 
              color: '#666' 
            }}>
              No recommendations available at the moment
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartRecommendations;
