// src/components/TaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../slices/taskSlice';

function TaskForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ title, description, completed: false }));
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="flex-1 border rounded p-2"
      />
      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="flex-1 border rounded p-2"
      />
      <button type="submit" className="bg-blue-500 text-white rounded px-4">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
