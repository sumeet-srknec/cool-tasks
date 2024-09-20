const API_URL = '/api/tasks'

export const getCoolTasks = async () => {
    const response = await fetch(API_URL)
    return await response.json()
}

export const createCoolTask = async (task) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })

    return await response.json()
}

export const updateCoolTask = async (id, task) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return await response.json()
}

export const deleteCoolTask = async (id) => {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
}
