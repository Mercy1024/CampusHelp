export const searchTasks = (tasks, query) => {
  if (!query.trim()) return tasks;
  
  const searchTerm = query.toLowerCase().trim();
  
  return tasks.filter(task => {
    const searchableFields = [
      task.title,
      task.description,
      task.category,
      task.subCategory,
      task.location
    ].map(field => (field || '').toLowerCase());
    
    return searchableFields.some(field => field.includes(searchTerm));
  });
};