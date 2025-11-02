import { useState, useEffect } from "react";

import curry1 from "@assets/stock_images/delicious_indian_cur_d756eef4.jpg";
import curry2 from "@assets/stock_images/delicious_indian_cur_d6fb1871.jpg";
import curry3 from "@assets/stock_images/delicious_indian_cur_6e479698.jpg";
import thali1 from "@assets/stock_images/full_indian_meal_tha_1d890b42.jpg";
import thali2 from "@assets/stock_images/full_indian_meal_tha_40b446fe.jpg";
import thali3 from "@assets/stock_images/full_indian_meal_tha_86cb2a20.jpg";
import food1 from "@assets/stock_images/indian_food_restaura_48898fe6.jpg";
import food2 from "@assets/stock_images/indian_food_restaura_87d51fe2.jpg";

const images = [curry1, curry2, curry3, thali1, thali2, thali3, food1, food2];

export function BackgroundSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: currentIndex === index ? 1 : 0,
          }}
        >
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
    </div>
  );
}
