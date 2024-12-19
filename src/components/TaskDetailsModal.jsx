import React from 'react';
import PropTypes from 'prop-types';
import { X, Clock, Coins, MapPin, User, Calendar } from 'lucide-react';
import { formatCurrency } from '../utils/formatCurrency';
import { formatDate } from '../utils/formatDate';

export function TaskDetailsModal({ task, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{task.title}</h2>
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
              <User size={16} />
              <span>Posted by John D.</span>
              <span>•</span>
              <span>{formatDate(task.createdAt)}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {task.category}
            </span>
            {task.subCategory && (
              <span className="bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1 rounded-full">
                {task.subCategory}
              </span>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="text-gray-600 whitespace-pre-wrap">{task.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Coins size={20} />
              <div>
                <p className="text-sm font-medium">Budget</p>
                <p className="text-lg font-semibold text-gray-900">
                  {formatCurrency(task.price)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={20} />
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-lg font-semibold text-gray-900">{task.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={20} />
              <div>
                <p className="text-sm font-medium">Posted</p>
                <p className="text-lg font-semibold text-gray-900">
                  {formatDate(task.createdAt)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Clock size={20} />
              <div>
                <p className="text-sm font-medium">Deadline</p>
                <p className="text-lg font-semibold text-gray-900">
                  {formatDate(task.deadline)}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t">
            <button
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Apply for this Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

TaskDetailsModal.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    subCategory: PropTypes.string,
    price: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};