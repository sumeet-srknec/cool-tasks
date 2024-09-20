// src/App.js
import React from 'react';
import TaskForm from './features/tasks/components/TaskForm';
import TaskList from './features/tasks/components/TaskList';

function App() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Task Management App</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
