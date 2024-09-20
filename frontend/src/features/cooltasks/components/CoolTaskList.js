import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoolTasks, removeCoolTask } from '../slices/coolTaskSlice'
import CoolTaskItem from './CoolTaskItem'
import { BiRefresh } from 'react-icons/bi'

function CoolTaskList() {
    const dispatch = useDispatch()
    const tasks = useSelector((state) => state.coolTasks.coolTasks)

    useEffect(() => {
        dispatch(fetchCoolTasks())
    }, [dispatch])

    const handleDelete = (id) => {
        dispatch(removeCoolTask(id))
    }

    return (
        <div className="mt-4">
            <h2 className="text-2xl font-semibold mb-2 flex flex-row gap-2 items-center justify-between">
                <span>Cool Task List</span>{' '}
                <BiRefresh className="hover:bg-purple-500 hover:text-white rounded border active:bg-purple-600" />{' '}
            </h2>
            <ul className="space-y-2">
                {tasks.map((task) => (
                    <CoolTaskItem key={task.id} task={task} onDelete={handleDelete} />
                ))}
            </ul>
        </div>
    )
}

export default CoolTaskList
