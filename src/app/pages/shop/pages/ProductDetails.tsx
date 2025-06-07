"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Next.js routing
import { fetchProductDetails } from "../services/shopService";
import Image from "next/image";

const ProductDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Get the product ID from the URL
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const loadProductDetails = async () => {
        const data = await fetchProductDetails(id as string);
        setProduct(data);
      };
      loadProductDetails();
    }
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div>
      <Image src={product.image} alt={product.name} width={500} height={500} />
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;