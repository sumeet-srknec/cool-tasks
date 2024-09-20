// src/components/TaskList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, removeTask } from '../slices/taskSlice';
import TaskItem from './TaskItem';

function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold mb-2">Task List</h2>
      <ul className="space-y-2">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
