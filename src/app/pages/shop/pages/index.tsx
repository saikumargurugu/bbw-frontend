"use client";

import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import FiltersSidebar from "../components/FilterSidebar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/app/redux-store/store";
import { fetchBrands, fetchCategories, fetchProducts } from "@/app/bbw_apis/redux-store/actions/productActions";
import { RootState } from "@/app/interface";

const ShopPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  // Access products, brands, categories from Redux store
  const products = useSelector((state: RootState) => state.api.models.products || { results: [] as Array<{ id: number; category?: { name: string; subcategories?: Array<{ name: string }> }; brand?: { name: string } }> });
  const brands = useSelector((state: RootState) => state.api.models.brands || []);
  const categories = useSelector((state: RootState) => state.api.models.categories || []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await fetchProducts(dispatch);
        await fetchBrands(dispatch);
        await fetchCategories(dispatch);
      } catch (error) {
        // Optionally, show an error message here
        console.error("Failed to fetch shop data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const filtered = products.results && products.results.length > 0 && products.results.filter((product: { id: number; category?: { name: string; subcategories?: Array<{ name: string }> }; brand?: { name: string } }) => {
      const inCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category?.name ?? "");

      const inSubcategory =
        selectedSubcategories.length === 0 ||
        (product.category?.subcategories || []).some((sub) =>
          selectedSubcategories.includes(sub.name)
        );
      const inBrand =
        selectedBrands.length === 0 ||
        selectedBrands.includes(product.brand?.name ?? "");

      return inCategory && inSubcategory && inBrand;
    });
    setFilteredProducts(filtered);
  }, [products, selectedCategories, selectedSubcategories, selectedBrands]);

  const handleAddToCart = (id: number) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const product = products.find((p:any) => p.id === id);
    if (product) {
      // Add product to cart logic
    }
  };
  const handleFilterChange = (
    categories: string[],
    subcategories: string[],
    brands: string[]
  ) => {
    setSelectedCategories(categories);
    setSelectedSubcategories(subcategories);
    setSelectedBrands(brands);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-lg">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex">
      <FiltersSidebar
        categories={categories}
        brands={brands}
        onFilterChange={handleFilterChange}
      />
      <div className="flex-1 p-4">
        <h1>Shop</h1>
        {filteredProducts && filteredProducts.length > 0 ? (
          <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
        ) : (
          <div>No products found.</div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;