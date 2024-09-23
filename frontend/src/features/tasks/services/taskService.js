// src/services/taskService.js
const API_URL = '/api/tasks'

export const getTasks = async () => {
    const response = await fetch(API_URL)
    if (response.ok) {
        return await response.json()
    } else {
        throw new Error('Failed to fetch tasks')
    }
}

export const createTask = async (task) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })

    if (response.ok) {
        return await response.json()
    } else {
        throw new Error('Failed to create task')
    }
}

export const updateTask = async (id, task) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    return await response.json()
}

export const deleteTask = async (id) => {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
}
