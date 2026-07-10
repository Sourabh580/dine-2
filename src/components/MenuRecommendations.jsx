import React, { useState, useEffect } from 'react';

const MenuRecommendations = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const restaurantId = 'res-1';

  useEffect(() => {
    // Simulate AI analysis illusion for 2 seconds
    const loadingTimer = setTimeout(() => {
      fetchRecommendations();
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  const fetchRecommendations = async () => {
    try {
      const response = await fetch(`/api/recommendations/${restaurantId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch recommendations');
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Loading State with AI Analysis Illusion
  if (loading) {
    return (
      <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-spin"></div>
            <div className="absolute inset-1 bg-white rounded-full"></div>
          </div>
          <p className="text-lg font-semibold text-gray-800 animate-pulse">
            AI is analyzing top trends for your area...
          </p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="w-full bg-red-50 border border-red-200 p-6 rounded-lg">
        <p className="text-red-700 font-semibold">Error loading recommendations</p>
        <p className="text-red-600 text-sm mt-2">{error}</p>
      </div>
    );
  }

  // No Data State
  if (!data) {
    return null;
  }

  return (
    <div className="w-full space-y-6">
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 p-4 rounded-lg shadow-lg">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">✨</span>
          <p className="text-white font-semibold text-lg">{data.message}</p>
        </div>
      </div>

      {/* Trending Items Section */}
      <div className="w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
          <span className="text-red-500">🔥</span>
          <span>Trending Now</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.trending.map((dish, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Premium Badge */}
              <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                RECOMMENDED
              </div>

              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative p-6 flex flex-col items-center justify-center text-center space-y-3">
                {/* Dish Icon/Emoji */}
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  🍽️
                </div>

                {/* Dish Name */}
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                  {dish}
                </h3>

                {/* Trending Indicator */}
                <div className="flex items-center space-x-1 text-sm text-orange-600 font-semibold">
                  <span>📈</span>
                  <span>Popular Choice</span>
                </div>

                {/* Action Button */}
                <button className="mt-4 px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-110 transition-all duration-300">
                  Order Now
                </button>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuRecommendations;
