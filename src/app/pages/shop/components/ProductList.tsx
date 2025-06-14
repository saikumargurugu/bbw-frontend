"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";

interface ProductImage {
  id: number;
  image_url: string;
}

interface Product {
  id: number;
  name: string;
  price?: number;
  images?: ProductImage[];
  // ...other fields as needed
}

interface ProductListProps {
  products: Product[];
  onAddToCart: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  const [search, setSearch] = useState("");

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchBar value={search} onChange={setSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            images={product.images}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;