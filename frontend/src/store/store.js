// src/store.js
import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/tasks/slices/taskSlice'
import coolTaskReducer from '../features/cooltasks/slices/coolTaskSlice'

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        coolTasks: coolTaskReducer
    }
})

export default store
