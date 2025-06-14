"use client";
import React from "react";
import Carousel, { Slide } from "@/app/components/ProductCarousel";

interface ProductImage {
  id: number;
  image_url: string;
}

interface ProductCardProps {
  id: number;
  name: string;
  price?: number;
  images?: ProductImage[];
  onAddToCart: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, images = [], onAddToCart }) => {
  const slides: Slide[] = images.map((img) => ({
    id: img.id,
    url: img.image_url,
  }));

  return (
    <div
      className="relative bg-white rounded-lg shadow-md border border-gray-200 p-3 w-full max-w-xs mx-auto flex flex-col"
      style={{ aspectRatio: "1 / 1.5" }}
    >
      {/* Carousel takes 70% height */}
      <div style={{ flex: "0 0 70%" }}>
        <Carousel
          slides={slides}
          className="w-full h-full rounded-md mb-2"
        />
      </div>
      {/* Info and button take 30% height */}
      <div style={{ flex: "0 0 30%" }} className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-base font-semibold text-center">{name}</h3>
          <p className="text-gray-600 text-sm text-center">
            {price !== undefined ? `$${price.toFixed(2)}` : "Price not available"}
          </p>
        </div>
        <button
          onClick={() => onAddToCart(id)}
          className="mt-2 w-full bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;