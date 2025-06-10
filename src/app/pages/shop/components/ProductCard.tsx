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
  // Convert ProductImage[] to Slide[] for Carousel
  const slides: Slide[] = images.map((img) => ({
    id: img.id,
    url: img.image_url,
  }));

  return (
    <div className="flex flex-col justify-between bg-white rounded-lg shadow-md border border-gray-200 p-3 w-full max-w-xs mx-auto h-full min-h-[320px]">
      <div>
        <Carousel slides={slides} className="w-full h-32 rounded-md mb-2" />
        <h3 className="text-base font-semibold text-center">{name}</h3>
        <p className="text-gray-600 text-sm text-center">
          {price !== undefined ? `$${price.toFixed(2)}` : "Price not available"}
        </p>
      </div>
      <button
        onClick={() => onAddToCart(id)}
        className="mt-3 w-full bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 text-sm"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;