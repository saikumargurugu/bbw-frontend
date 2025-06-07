"use strict";

import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import { fetchProducts } from "../services/shopService";

const ShopPage: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  const handleAddToCart = (id: string) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <h1>Shop</h1>
      <ProductList products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default ShopPage;