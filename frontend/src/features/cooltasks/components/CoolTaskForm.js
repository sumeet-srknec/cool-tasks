import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCoolTask } from '../slices/coolTaskSlice'

function CoolTaskForm() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addCoolTask({ title, description, completed: false }))
        setTitle('')
        setDescription('')
    }

    return (
        <form onSubmit={handleSubmit} className="mb-5 flex gap-2">
            <input
                className="border border-purple-300 text-purple-500 outline-none p-2 rounded"
                type="text"
                placeholder="cool task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <input
                type="text"
                className="border border-purple-300 text-purple-500 outline-none p-2 rounded"
                placeholder="cool task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />

            <button type="submit" className="bg-blue-500 text-white rounded px-4">
                Add Task
            </button>
        </form>
    )
}

export default CoolTaskForm
