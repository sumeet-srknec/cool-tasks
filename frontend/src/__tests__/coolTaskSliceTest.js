import { configureStore } from '@reduxjs/toolkit'
import coolTaskReducer, { fetchCoolTasks } from '../features/cooltasks/slices/coolTaskSlice'
import * as coolTaskService from '../features/cooltasks/services/coolTaskService'

jest.mock('../features/cooltasks/services/coolTaskService')

describe('coolTaskSlice', () => {
    let store

    beforeEach(() => {
        store = configureStore({
            reducer: {
                tasks: coolTaskReducer
            }
        })
    })

    test('should return the initial state', () => {
        const initialState = {
            coolTasks: [],
            status: 'idle',
            error: null
        }

        expect(store.getState().tasks).toEqual(initialState)
    })

    test('should handle fetch task pending', async () => {
        const fetchPromise = store.dispatch(fetchCoolTasks())

        expect(store.getState().tasks.status).toBe('loading')
        await fetchPromise
    })

    test('should handle fetchTasks fulfilled', async () => {
        const mockTasks = [{ id: 1, title: 'my test task', description: 'my test task description' }]
        coolTaskService.getCoolTasks.mockResolvedValueOnce(mockTasks)

        const fetchPromise = store.dispatch(fetchCoolTasks())
        await fetchPromise

        expect(store.getState().tasks.status).toBe('succeeded')
        expect(store.getState().tasks.coolTasks).toEqual(mockTasks)
    })

    test('should handle fetchTasks rejected', async () => {
        coolTaskService.getCoolTasks.mockRejectedValueOnce(new Error('API Error'))

        const fetchPromise = store.dispatch(fetchCoolTasks())
        await fetchPromise

        expect(store.getState().tasks.status).toBe('failed')
        expect(store.getState().tasks.error).toBe('API Error')
    })
})
