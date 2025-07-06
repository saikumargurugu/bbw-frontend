"use client";
import React from "react";
import { useRouter } from "next/navigation";
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

export const imagesStatic = [
  { id: 1, image_url: 'https://images.unsplash.com/photo-1564227050211-b6061acd4158?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', },
  { id: 1, image_url: 'https://images.unsplash.com/photo-1722003180803-577efd6d2ecc?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', },
  { id: 1, image_url: 'https://media.istockphoto.com/id/1251499195/photo/racket.jpg?s=1024x1024&w=is&k=20&c=-BaIJJtGlkkFEIySmnXKW99XeAod6KxCfkfi_PdK6-o=', },
  { id: 1, image_url: 'https://media.istockphoto.com/id/1253552496/photo/racket.jpg?s=1024x1024&w=is&k=20&c=PlduZwGSHzMVZx2PRxbdNx0yySjd0kPlTMvRLcGDk9c=' },
];


const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, images = [], onAddToCart }) => {
  const router = useRouter();

  const slides: Slide[] = (images.length > 0 ? images : imagesStatic).map((img, idx) => ({
    id: img.id,
    url: img.image_url,
    image: img.image_url,
    caption: "",
  }));

  // Handler for redirecting to detail page
  const handleCardClick = () => {
    router.push(`/shop/products/details/${id}`);
  };

  return (
    <div
      className="relative bg-white rounded-lg shadow-md border border-gray-200 p-3 w-full max-w-xs mx-auto flex flex-col cursor-pointer"
      style={{ aspectRatio: "1 / 1.5" }}
      onClick={handleCardClick}
    >
      <div style={{ flex: "0 0 70%" }}>
        <Carousel
          slides={slides}
          className="w-full h-full rounded-md mb-2"
        />
      </div>
      <div style={{ flex: "0 0 30%" }} className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-base font-semibold text-center">{name}</h3>
          <p className="text-gray-600 text-sm text-center">
            {price !== undefined ? `$${typeof price === "string" ? Number(price).toFixed(2) : price.toFixed(2)}` : "Price not available"}
          </p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click
            onAddToCart(id);
          }}
          className="mt-2 w-full bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;