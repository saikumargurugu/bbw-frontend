"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { Slide } from "@/app/components/Carousel";

interface Product {
  id: string;
  name: string;
  price: number;
  images: Slide[];
}

interface ProductListProps {
  products: Product[];
  onAddToCart: (id: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;