"use client";
import React, { useState } from "react";

interface Subcategory {
  id: number;
  name: string;
  discount?: string;
}

interface Category {
  id: number;
  name: string;
  discount?: string;
  subcategories: Subcategory[];
}

interface Brand {
  id: number;
  name: string;
  discount?: string;
}

interface FiltersSidebarProps {
  categories: Category[];
  brands: Brand[];
  onFilterChange: (
    selectedCategories: string[],
    selectedSubcategories: string[],
    selectedBrands: string[]
  ) => void;
}

export default function FiltersSidebar({ categories, brands, onFilterChange }: FiltersSidebarProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const handleCategoryChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((item) => item !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
    onFilterChange(updatedCategories, selectedSubcategories, selectedBrands);
  };

  const handleSubcategoryChange = (subcategory: string) => {
    const updatedSubcategories = selectedSubcategories.includes(subcategory)
      ? selectedSubcategories.filter((item) => item !== subcategory)
      : [...selectedSubcategories, subcategory];
    setSelectedSubcategories(updatedSubcategories);
    onFilterChange(selectedCategories, updatedSubcategories, selectedBrands);
  };

  const handleBrandChange = (brand: string) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((item) => item !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(updatedBrands);
    onFilterChange(selectedCategories, selectedSubcategories, updatedBrands);
  };

  return (
    <>
      {/* Burger Icon */}
      <button
        className="fixed top-4 left-4 z-40 bg-white rounded-full p-2 shadow-md md:hidden"
        onClick={() => setOpen(true)}
        aria-label="Open filters"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h20M4 16h20" />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-72 bg-gray-100 p-4 rounded-r-lg shadow-lg z-50
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0 md:w-64 md:rounded-lg md:shadow-md md:block
        `}
        style={{ maxWidth: 320 }}
      >
        {/* Close button for mobile */}
        <div className="flex justify-between items-center mb-4 md:hidden">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={() => setOpen(false)}
            aria-label="Close filters"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l16 16M6 22L22 6" />
            </svg>
          </button>
        </div>
        {/* Always show title on desktop */}
        <h2 className="hidden md:block text-lg font-semibold mb-4">Filters</h2>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Brands</h3>
          <ul>
            {brands.length&&brands?.map((brand) => (
              <li key={brand.id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand.name)}
                  onChange={() => handleBrandChange(brand.name)}
                  className="mr-2 cursor-pointer"
                />
                <label className="cursor-pointer hover:text-blue-500">{brand.name}</label>
              </li>
            ))}
          </ul>
        </div>
        {categories.length>0&&categories.map((category) => (
          <div key={category.id} className="mb-6">
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.name)}
                onChange={() => handleCategoryChange(category.name)}
                className="mr-2 cursor-pointer"
              />
              <label className="text-md font-medium cursor-pointer hover:text-blue-500">
                {category.name}
              </label>
            </div>
            <ul className="ml-4">
              {category.subcategories.map((subcategory) => (
                <li key={subcategory.id} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedSubcategories.includes(subcategory.name)}
                    onChange={() => handleSubcategoryChange(subcategory.name)}
                    className="mr-2 cursor-pointer"
                  />
                  <label className="cursor-pointer hover:text-blue-500">{subcategory.name}</label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}