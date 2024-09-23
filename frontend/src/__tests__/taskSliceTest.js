import { configureStore } from '@reduxjs/toolkit'
import taskReducer, { fetchTasks } from '../features/tasks/slices/taskSlice'
import * as taskService from '../features/tasks/services/taskService'

// Mock the service calls
jest.mock('../features/tasks/services/taskService')

describe('taskSlice', () => {
    let store

    beforeEach(() => {
        store = configureStore({
            reducer: {
                tasks: taskReducer
            }
        })
    })

    // Test initial state
    test('should return the initial state', () => {
        const initialState = {
            tasks: [],
            status: 'idle',
            error: null
        }

        expect(store.getState().tasks).toEqual(initialState)
    })

    // Test pending state
    test('should handle fetchTasks pending', async () => {
        const fetchPromise = store.dispatch(fetchTasks())

        // Check if status is loading before promise resolves
        expect(store.getState().tasks.status).toBe('loading')
        await fetchPromise
    })

    // Test fulfilled state
    test('should handle fetchTasks fulfilled', async () => {
        const mockTasks = [{ id: 1, title: 'Test Task', description: 'Description' }]
        taskService.getTasks.mockResolvedValueOnce(mockTasks)

        const fetchPromise = store.dispatch(fetchTasks())
        await fetchPromise

        expect(store.getState().tasks.status).toBe('succeeded')
        expect(store.getState().tasks.tasks).toEqual(mockTasks)
    })

    // Test rejected state
    test('should handle fetchTasks rejected', async () => {
        taskService.getTasks.mockRejectedValueOnce(new Error('API Error'))

        const fetchPromise = store.dispatch(fetchTasks())
        await fetchPromise

        expect(store.getState().tasks.status).toBe('failed')
        expect(store.getState().tasks.error).toBe('API Error')
    })
})
