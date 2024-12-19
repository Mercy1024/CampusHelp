import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Clock, Coins, MapPin, User, ChevronRight } from 'lucide-react';
import { formatCurrency } from '../utils/formatCurrency';
import { formatTimeAgo } from '../utils/formatDate';
import { TaskDetailsModal } from './TaskDetailsModal';

export function TaskCard(task) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
        onClick={() => setIsDetailsOpen(true)}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
          <div className="flex flex-col items-end gap-1">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {task.category}
            </span>
            {task.subCategory && (
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {task.subCategory}
              </span>
            )}
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{task.description}</p>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Coins size={16} />
              <span>{formatCurrency(task.price)}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>{task.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{task.deadline}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <User size={16} />
              <span>Posted by John D.</span>
              <span>•</span>
              <span>{formatTimeAgo(task.createdAt)}</span>
            </div>
            <ChevronRight className="text-gray-400" size={20} />
          </div>
        </div>
      </div>

      <TaskDetailsModal
        task={task}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
      />
    </>
  );
}

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  subCategory: PropTypes.string,
  price: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};