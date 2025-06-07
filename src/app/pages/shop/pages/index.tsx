"use client";

import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import { Slide } from "@/app/components/Carousel";
import FiltersSidebar from "../components/FilterSidebar";

const mockProducts = [
  { id: "1", name: "Badminton Racket", price: 49.99, 
    images: [
      {
         image: "https://www.shutterstock.com/shutterstock/photos/2100411874/display_1500/stock-vector-badminton-racket-and-shuttlecock-vector-illustration-of-sports-equipment-eps-2100411874.jpg", 
         caption: "Master the Smash" 
        },
      
        {
          image: "https://www.shutterstock.com/shutterstock/photos/2985383/display_1500/stock-photo-two-shuttlecocks-and-tube-isolated-on-a-black-background-2985383.jpg", 
          caption: "Agility in Motion" 
         },
      
      {
         image: "https://www.shutterstock.com/shutterstock/photos/2100411874/display_1500/stock-vector-badminton-racket-and-shuttlecock-vector-illustration-of-sports-equipment-eps-2100411874.jpg", 
         caption: "Master the Smash" 
        },
      
      {
         image: "https://www.shutterstock.com/shutterstock/photos/2463008837/display_1500/stock-photo-old-tennis-racket-cover-isolated-on-white-background-2463008837.jpg", 
         caption: "Team Spirit" 
        },
      ] 
        },
  { id: "2", name: "Shuttlecock Pack", price: 19.99, 
    images:  [
      {
         image: "https://www.shutterstock.com/shutterstock/photos/2100411874/display_1500/stock-vector-badminton-racket-and-shuttlecock-vector-illustration-of-sports-equipment-eps-2100411874.jpg", 
         caption: "Master the Smash" 
        },
      
        {
          image: "https://www.shutterstock.com/shutterstock/photos/2985383/display_1500/stock-photo-two-shuttlecocks-and-tube-isolated-on-a-black-background-2985383.jpg", 
          caption: "Agility in Motion" 
         },
      
      {
         image: "https://www.shutterstock.com/shutterstock/photos/2100411874/display_1500/stock-vector-badminton-racket-and-shuttlecock-vector-illustration-of-sports-equipment-eps-2100411874.jpg", 
         caption: "Master the Smash" 
        },
      
      {
         image: "https://www.shutterstock.com/shutterstock/photos/2463008837/display_1500/stock-photo-old-tennis-racket-cover-isolated-on-white-background-2463008837.jpg", 
         caption: "Team Spirit" 
        },
      ] 
        },
  { id: "3", name: "Sports Shoes", price: 59.99, 
    images:  [
      {
         image: "https://www.shutterstock.com/shutterstock/photos/2100411874/display_1500/stock-vector-badminton-racket-and-shuttlecock-vector-illustration-of-sports-equipment-eps-2100411874.jpg", 
         caption: "Master the Smash" 
        },
      
        {
          image: "https://www.shutterstock.com/shutterstock/photos/2985383/display_1500/stock-photo-two-shuttlecocks-and-tube-isolated-on-a-black-background-2985383.jpg", 
          caption: "Agility in Motion" 
         },
      
      {
         image: "https://www.shutterstock.com/shutterstock/photos/2100411874/display_1500/stock-vector-badminton-racket-and-shuttlecock-vector-illustration-of-sports-equipment-eps-2100411874.jpg", 
         caption: "Master the Smash" 
        },
      
      {
         image: "https://www.shutterstock.com/shutterstock/photos/2463008837/display_1500/stock-photo-old-tennis-racket-cover-isolated-on-white-background-2463008837.jpg", 
         caption: "Team Spirit" 
        },
      ] 
        },
  { id: "4", name: "Badminton Bag", price: 39.99, 
    images:  [
      {
         image: "https://www.shutterstock.com/shutterstock/photos/2100411874/display_1500/stock-vector-badminton-racket-and-shuttlecock-vector-illustration-of-sports-equipment-eps-2100411874.jpg", 
         caption: "Master the Smash" 
        },
      
        {
          image: "https://www.shutterstock.com/shutterstock/photos/2985383/display_1500/stock-photo-two-shuttlecocks-and-tube-isolated-on-a-black-background-2985383.jpg", 
          caption: "Agility in Motion" 
         },
      
      {
         image: "https://www.shutterstock.com/shutterstock/photos/2100411874/display_1500/stock-vector-badminton-racket-and-shuttlecock-vector-illustration-of-sports-equipment-eps-2100411874.jpg", 
         caption: "Master the Smash" 
        },
      
      {
         image: "https://www.shutterstock.com/shutterstock/photos/2463008837/display_1500/stock-photo-old-tennis-racket-cover-isolated-on-white-background-2463008837.jpg", 
         caption: "Team Spirit" 
        },
      ]  
        },
];

const mockCategories = [
  { name: "Sports Equipment", subcategories: ["Badminton", "Tennis", "Football"] },
  { name: "Apparel", subcategories: ["Shoes", "Jerseys", "Accessories"] },
];

const ShopPage: React.FC = () => {
  const [products, setProducts] = useState<{ id: string; name: string; price: number; images: Slide[] }[]>([]);
  const [cart, setCart] = useState<{ id: string; name: string; price: number; images: Slide[]; quantity: number }[]>([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    // Load mock data instead of fetching from API
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  const handleAddToCart = (id: string) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleFilterChange = (category: string, subcategory: string) => {
    const filtered = mockProducts.filter((product) =>
      subcategory ? product.name.includes(subcategory) : product.name.includes(category)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex">
      <FiltersSidebar categories={mockCategories} onFilterChange={handleFilterChange} />
      <div className="flex-1 p-4">
        <h1>Shop</h1>
        <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default ShopPage;