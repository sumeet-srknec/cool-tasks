import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createCoolTask, deleteCoolTask, getCoolTasks, updateCoolTask } from '../services/coolTaskService'

const initialState = {
    coolTasks: [],
    status: 'idle',
    error: null
}

export const fetchCoolTasks = createAsyncThunk('coolTasks/fetchCoolTasks', async () => {
    const response = await getCoolTasks()
    return response
})

export const addCoolTask = createAsyncThunk('coolTasks/addCoolTask', async (task) => {
    const response = await createCoolTask(task)
    return response
})

export const editCoolTask = createAsyncThunk('coolTasks/editCoolTask', async ({ id, task }) => {
    const response = await updateCoolTask(id, task)
    return response
})

export const removeCoolTask = createAsyncThunk('coolTasks/removeCoolTask', async (id) => {
    await deleteCoolTask(id)
    return id
})

const coolTaskSlice = createSlice({
    name: 'coolTasks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoolTasks.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCoolTasks.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.coolTasks = action.payload
            })
            .addCase(fetchCoolTasks.rejected, (state, action) => {
                state.status = 'failed'
                state.error = 'API Error'
            })
            .addCase(addCoolTask.fulfilled, (state, action) => {
                state.coolTasks.push(action.payload)
            })
            .addCase(editCoolTask.fulfilled, (state, action) => {
                const index = state.coolTasks.findIndex((task) => task.id === action.payload)

                if (index !== -1) {
                    state.coolTasks[index] = action.payload
                }
            })
            .addCase(removeCoolTask.fulfilled, (state, action) => {
                state.coolTasks = state.coolTasks.filter((task) => task.id !== action.payload)
            })
    }
})

export const selectAllCoolTasks = (state) => state.coolTasks.coolTasks
export default coolTaskSlice.reducer
