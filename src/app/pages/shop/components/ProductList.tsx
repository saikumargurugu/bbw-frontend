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
  page: number;
  setPage: (page: number) => void;
  count: number;
  pageSize?: number;
  gridClassName?: string; // Added gridClassName property
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onAddToCart,
  page,
  setPage,
  count,
  pageSize = 12,
  gridClassName,
}) => {
  const [search, setSearch] = useState("");

  // Only filter for display, not for pagination
  const displayProducts = search
    ? products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    : products;

  const totalPages = Math.ceil(count / pageSize);
  console.log("Total Pages:", totalPages, "Count:", count, "Page Size:", pageSize);
  
  return (
    <div>
      <SearchBar value={search} onChange={setSearch} />
      <div className={gridClassName || "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"}>
        {displayProducts.map((product) => (
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
      {totalPages > 1 && !search && (
        <div className="flex justify-center my-4 gap-2">
          <button
            className="px-3 py-1 rounded bg-black text-white hover:bg-gray-800 transition"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            style={{ opacity: page === 1 ? 0.5 : 1 }}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`px-3 py-1 rounded mx-1 ${
                page === i + 1
                  ? "bg-black text-white"
                  : "bg-white text-black border border-black hover:bg-gray-200"
              } transition`}
              onClick={() => setPage(i + 1)}
              style={{ minWidth: 36 }}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="px-3 py-1 rounded bg-black text-white hover:bg-gray-800 transition"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            style={{ opacity: page === totalPages ? 0.5 : 1 }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;