"use client";
import React, { useState } from "react";

interface FiltersSidebarProps {
  categories: { name: string; subcategories: string[] }[];
  onFilterChange: (selectedCategories: string[], selectedSubcategories: string[]) => void;
}

export default function FiltersSidebar({ categories, onFilterChange }: FiltersSidebarProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((item) => item !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
    onFilterChange(updatedCategories, selectedSubcategories);
  };

  const handleSubcategoryChange = (subcategory: string) => {
    const updatedSubcategories = selectedSubcategories.includes(subcategory)
      ? selectedSubcategories.filter((item) => item !== subcategory)
      : [...selectedSubcategories, subcategory];
    setSelectedSubcategories(updatedSubcategories);
    onFilterChange(selectedCategories, updatedSubcategories);
  };

  return (
    <div className="sticky top-0 h-screen overflow-y-auto bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      {categories.map((category) => (
        <div key={category.name} className="mb-6">
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
              <li key={subcategory} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={selectedSubcategories.includes(subcategory)}
                  onChange={() => handleSubcategoryChange(subcategory)}
                  className="mr-2 cursor-pointer"
                />
                <label className="cursor-pointer hover:text-blue-500">{subcategory}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}