"use client";
import React from "react";
import Carousel, { Slide } from "@/app/components/ProductCarousel";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  images: Slide[];
  onAddToCart: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, images, onAddToCart }) => {
  return (
    <div className="w-64 p-4 bg-white rounded-lg shadow-md">
      {/* Carousel with smaller height */}
      <Carousel slides={images} className="w-full h-40 rounded-md" />
      <h3 className="mt-2 text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">${price.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart(id)}
        className="mt-2 w-full bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
      
    </div>
  );
};

export default ProductCard;