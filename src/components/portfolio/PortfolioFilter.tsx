import React from 'react';

interface PortfolioFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function PortfolioFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: PortfolioFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
            activeCategory === category
              ? 'bg-red-600 text-white shadow-lg'
              : 'bg-white text-gray-600 hover:bg-red-50'
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}