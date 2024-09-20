// src/features/tasks/taskSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTasks, createTask, updateTask, deleteTask } from '../services/taskService';

const initialState = {
  tasks: [],
  status: 'idle',
  error: null,
};

// Async thunk for fetching tasks
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await getTasks();
  return response;
});

// Async thunk for adding a new task
export const addTask = createAsyncThunk('tasks/addTask', async (task) => {
  const response = await createTask(task);
  return response;
});

// Async thunk for updating a task
export const editTask = createAsyncThunk('tasks/editTask', async ({ id, task }) => {
  const response = await updateTask(id, task);
  return response;
});

// Async thunk for deleting a task
export const removeTask = createAsyncThunk('tasks/removeTask', async (id) => {
  await deleteTask(id);
  return id;
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(editTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      });
  },
});

export const selectAllTasks = (state) => state.tasks.tasks;

export default taskSlice.reducer;
