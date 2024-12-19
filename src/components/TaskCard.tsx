import React from 'react';
import { Clock, Coins, MapPin, Tag } from 'lucide-react';
import { Task } from '../types';

type TaskCardProps = Task;

export function TaskCard({ 
  title, 
  category, 
  subCategory,
  price, 
  location, 
  deadline, 
  description 
}: TaskCardProps) {
  const formattedPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0
  }).format(price);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex flex-col items-end gap-1">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {category}
          </span>
          {subCategory && (
            <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {subCategory}
            </span>
          )}
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
      
      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Coins size={16} />
          <span>{formattedPrice}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={16} />
          <span>{deadline}</span>
        </div>
      </div>
    </div>
  );
}