"use strict";
import React from "react";
import Cart from "../components/Cart";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cart, setCart] = React.useState<CartItem[]>([]);

  const handleRemoveFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <Cart items={cart} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
};

export default CartPage;