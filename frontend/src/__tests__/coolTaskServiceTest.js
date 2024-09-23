import { createCoolTask, getCoolTasks } from '../features/cooltasks/services/coolTaskService'

describe('coolTaskService', () => {
    beforeEach(() => {
        global.fetch = jest.fn()
    })

    afterEach(() => {
        jest.resetAllMocks()
    })

    test('get tasks should fetch tasks successfully', async () => {
        const mockTask = [{ id: 1, title: 'Task 1', description: 'Description' }]

        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockTask
        })

        const tasks = await getCoolTasks()
        expect(tasks).toEqual(mockTask)
        expect(global.fetch).toHaveBeenCalledWith('/api/tasks')
    })

    test('get tasks should throw error when fetch fails', async () => {
        global.fetch.mockResolvedValueOnce({ ok: false })
        await expect(getCoolTasks()).rejects.toThrow('Failed to fetch tasks')
    })
    test('create task should post task successfully', async () => {
        const mockTask = [{ id: 1, title: 'Task 1', description: 'Description' }]

        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockTask
        })

        const createdTask = await createCoolTask(mockTask)
        expect(createdTask).toEqual(mockTask)
        expect(global.fetch).toHaveBeenCalledWith('/api/tasks', expect.any(Object))
    })

    test('create task should throw error when task creation fails', async () => {
        global.fetch.mockResolvedValueOnce({ ok: false })

        await expect(createCoolTask({ title: 'Task 1', description: 'Description' })).rejects.toThrow(
            'Failed to create task'
        )
    })
})
