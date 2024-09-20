// src/components/TaskItem.js
import React from 'react'

function CoolTaskItem({ task, onDelete }) {
    return (
        <li
            className={`flex justify-between p-2 border rounded shadow ${task.completed ? 'bg-green-100' : 'bg-white'}`}
        >
            <span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}>
                {task.title}: {task.description}
            </span>
            <button onClick={() => onDelete(task.id)} className="ml-4 text-red-600 hover:text-red-800">
                Delete
            </button>
        </li>
    )
}

export default CoolTaskItem
