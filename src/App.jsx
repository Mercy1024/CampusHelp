import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { TaskCard } from './components/TaskCard';
import { PostTaskModal } from './components/PostTaskModal';
import { saveToLocalStorage, getFromLocalStorage } from './utils/storage';
import { searchTasks } from './utils/search';
import { sampleTasks } from './constants/sampleTasks';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [tasks, setTasks] = useState(() => 
    getFromLocalStorage('campusHelp-tasks', sampleTasks)
  );

  useEffect(() => {
    saveToLocalStorage('campusHelp-tasks', tasks);
  }, [tasks]);

  const searchedTasks = searchTasks(tasks, searchQuery);
  const filteredTasks = selectedCategory === "All"
    ? searchedTasks
    : searchedTasks.filter(task => task.category === selectedCategory);

  const handleAddTask = (newTask) => {
    const task = {
      ...newTask,
      id: Date.now().toString(),
      status: 'open',
      createdAt: new Date().toISOString()
    };
    setTasks(prevTasks => [task, ...prevTasks]);
    setIsPostModalOpen(false);
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Help on Campus
            </h2>
            <p className="text-gray-600">
              Connect with fellow students for academic help, services, and support
            </p>
          </div>
          
          <button
            onClick={() => setIsPostModalOpen(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Post a Task
          </button>
        </div>

        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {filteredTasks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {searchQuery 
                ? "No tasks found matching your search criteria."
                : "No tasks found in this category."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTasks.map((task) => (
              <TaskCard key={task.id} {...task} />
            ))}
          </div>
        )}
      </main>

      <PostTaskModal
        isOpen={isPostModalOpen}
        onClose={() => setIsPostModalOpen(false)}
        onSubmit={handleAddTask}
      />
    </div>
  );
}

export default App;