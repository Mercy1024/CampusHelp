import React from 'react';
import PropTypes from 'prop-types';
import { Search } from 'lucide-react';

export function SearchBar({ searchQuery, onSearchChange }) {
  const handleChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="relative max-w-2xl w-full">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search for tasks, categories, or keywords..."
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full 
                 text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 
                 focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
}

SearchBar.propTypes = {
  searchQuery: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired
};