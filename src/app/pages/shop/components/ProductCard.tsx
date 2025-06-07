"use strict";
import React from "react";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  onAddToCart: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, onAddToCart }) => {
  return (
      <div>
        <Image src={image} alt={name} width={300} height={300} />
        <h3>{name}</h3>
        <p>${price.toFixed(2)}</p>
        <button onClick={() => onAddToCart(id)}>Add to Cart</button>
      </div>
  );
};

export default ProductCard;