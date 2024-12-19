import React from 'react';
import { 
  Heart, BookOpen, Dumbbell, Briefcase, 
  Laptop, Palette, Calendar, Home, ShoppingBag, 
  MoreHorizontal 
} from 'lucide-react';
import { categories } from '../types';

const categoryIcons = {
  "Health and Wellness": Dumbbell,
  "Academic": BookOpen,
  "Personal Services": Home,
  "Technology": Laptop,
  "Creative": Palette,
  "Events": Calendar,
};

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onSelectCategory("All")}
        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors
          ${selectedCategory === "All" 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
      >
        <span>All Categories</span>
      </button>

      {categories.map(({ name }) => {
        const Icon = categoryIcons[name] || MoreHorizontal;
        return (
          <button
            key={name}
            onClick={() => onSelectCategory(name)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors
              ${selectedCategory === name 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            <Icon size={18} />
            <span>{name}</span>
          </button>
        );
      })}
    </div>
  );
}