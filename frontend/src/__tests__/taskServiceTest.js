import { getTasks, createTask } from '../features/tasks/services/taskService'

describe('taskService', () => {
    beforeEach(() => {
        global.fetch = jest.fn()
    })

    afterEach(() => {
        jest.resetAllMocks()
    })

    // Test the getTasks service
    test('getTasks should fetch tasks successfully', async () => {
        const mockTasks = [{ id: 1, title: 'Task 1', description: 'Description' }]
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockTasks
        })

        const tasks = await getTasks()
        expect(tasks).toEqual(mockTasks)
        expect(global.fetch).toHaveBeenCalledWith('/api/tasks')
    })

    // Test getTasks error handling
    test('getTasks should throw error when fetch fails', async () => {
        global.fetch.mockResolvedValueOnce({ ok: false })

        await expect(getTasks()).rejects.toThrow('Failed to fetch tasks')
    })

    // Test the createTask service
    test('createTask should post task successfully', async () => {
        const newTask = { id: 1, title: 'Task 1', description: 'Description' }
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => newTask
        })

        const createdTask = await createTask(newTask)
        expect(createdTask).toEqual(newTask)
        expect(global.fetch).toHaveBeenCalledWith('/api/tasks', expect.any(Object))
    })

    // Test createTask error handling
    test('createTask should throw error when task creation fails', async () => {
        global.fetch.mockResolvedValueOnce({ ok: false })

        await expect(createTask({ title: 'Task 1', description: 'Description' })).rejects.toThrow(
            'Failed to create task'
        )
    })
})
