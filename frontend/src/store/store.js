// src/store.js
import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/tasks/slices/taskSlice'

const store = configureStore({
    reducer: {
        tasks: taskReducer
    }
})

export default store
