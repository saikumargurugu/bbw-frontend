'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface ProductImage {
  id: number;
  image_url: string;
}

interface Product {
  id: number;
  name: string;
  price?: number;
  images?: ProductImage[];
  description?: string;
  brand?: string;
  stock?: number;
}

const mockProduct: Product = {
  id: 1,
  name: 'Yonex Nanoflare 700 Badminton Racket',
  price: 199.99,
  images: [
    {
      id: 1,
      image_url:
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      image_url:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      image_url:
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    },
  ],
  description: `Experience the next level of speed and control with the Yonex Nanoflare 700. 
- Lightweight and powerful
- Enhanced maneuverability
- Perfect for advanced players

**Specifications:**
- Weight: 4U (80-84g)
- Grip Size: G5
- Stringing Advice: 20-28 lbs
- Frame: Graphite`,
  brand: 'Yonex',
  stock: 12,
};

interface ProductDetailPageProps {
  productId: string;
}

export default function ProductDetailPage({ productId }: ProductDetailPageProps) {

  const id = productId;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  // Simulating an API call
  useEffect(() => {
    if (!id) return;
    setProduct(mockProduct);
    setLoading(false);

    // Real API example:
    // fetch(`/api/public/shop/products/${id}/`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setProduct(data);
    //     setLoading(false);
    //   });
  }, [id]);

  // Reset selected image when product changes
  useEffect(() => {
    setSelectedImage(0);
  }, [product]);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (!product) return <div className="p-8 text-center">Product not found.</div>;

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg mt-8">
      {/* Image Gallery */}
      <div className="flex flex-col items-center">
        {product.images && product.images.length > 0 ? (
          <>
            <Image
              src={product.images[selectedImage].image_url}
              alt={product.name}
              width={400}
              height={400}
              className="w-full max-w-md rounded-lg object-cover aspect-square border"
            />

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2 mt-4">
                {product.images.map((img, idx) => (
                  <img
                    key={img.id}
                    src={img.image_url}
                    alt={product.name}
                    className={`w-16 h-16 object-cover rounded border cursor-pointer transition ${
                      idx === selectedImage
                        ? 'ring-2 ring-blue-500'
                        : 'hover:ring-2 hover:ring-blue-400'
                    }`}
                    onClick={() => setSelectedImage(idx)}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="w-full max-w-md aspect-square bg-gray-100 flex items-center justify-center rounded-lg text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          {product.brand && (
            <div className="text-gray-500 mb-2">Brand: {product.brand}</div>
          )}
          <div className="text-2xl font-semibold text-blue-600 mb-4">
            {product.price !== undefined
              ? `$${product.price.toFixed(2)}`
              : 'Price not available'}
          </div>
          <div className="mb-4">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                product.stock && product.stock > 0
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {product.stock && product.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
          {product.description && (
            <div className="text-gray-700 mb-6 whitespace-pre-line">
              {product.description}
            </div>
          )}
        </div>

        <button
          disabled={!product.stock}
          className={`w-full py-3 rounded-lg text-lg font-semibold transition ${
            product.stock && product.stock > 0
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
