import { Switch } from '@headlessui/react'
import Task from "../interfaces/task"
import { FaTrash } from 'react-icons/fa'
import IconButton from './IconButton'
import { useState } from "react"
import TaskDialog from './TaskDialog'

type Props = {
    task: Task
    onChangeTaskStatus: (id: string, done: boolean) => void
    onDeleteTask: (id: string) => void
}

const TaskCard = ({ task, onChangeTaskStatus, onDeleteTask }: Props) => {
    const { id, done } = task
    const [openDialog, setOpenDialog] = useState(false)

    const handleOpenDialog = () => {
        setOpenDialog(true)
    }

    const handleCloseDialog = () => {
        setOpenDialog(false)
    }
    return (
        <div className="bg-white w-full rounded p-6  flex justify-between hover:bg-gray-50 cursor-pointer" onClick={handleOpenDialog}>
            <div className='space-x-4 flex items-center'>
                <>
                    <Switch
                        checked={done}
                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                            e.stopPropagation()
                            onChangeTaskStatus(id, !done)
                        }}
                        className={`${done ? 'bg-primary' : 'bg-gray-200'
                            } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                        <span
                            className={`${done ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                    </Switch>
                </>
                <div className={`${done ? 'line-through' : 'no-underline'}`}>
                    {task.title}
                </div>
            </div>
            <div>
                <IconButton icon={<FaTrash size={20} />} onClick={(e) => {
                    e.stopPropagation();
                    onDeleteTask(id)
                }} />
            </div>
            <TaskDialog onClose={handleCloseDialog} open={openDialog} viewMode={true} task={task} />
        </div>
    )
}

export default TaskCard