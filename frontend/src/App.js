// src/App.js
import React from 'react'
import TaskForm from './features/tasks/components/TaskForm'
import TaskList from './features/tasks/components/TaskList'
import CoolTaskForm from './features/cooltasks/components/CoolTaskForm'
import CoolTaskList from './features/cooltasks/components/CoolTaskList'

function App() {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Task Management App</h1>
            <TaskForm />
            <TaskList />
            <p>This is a sample code to highlight options needed to refresh item list</p>
            <h1 className="text-3xl rounded-lg font-bold mt-4 border-t-4 mb-4 text-center">Cool Task Management App</h1>
            <CoolTaskForm />
            <CoolTaskList />
        </div>
    )
}

export default App
