import { nanoid } from "nanoid"
import { useState } from "react"
import TaskDialog from "./TaskDialog"
import TaskList from "./TaskList"
import Task from "../interfaces/task"
import { toast, Toaster } from "react-hot-toast"

const MainContent = () => {

    const [tasks, setTasks] = useState<Task[] | []>([])
    const [openDialog, setOpenDialog] = useState(false)
    const handleAddTask = (title: string, description: string) => {
        const newTask: Task = {
            id: nanoid(11),
            title,
            description,
            done: false
        }
        setTasks((prevTasks) => [...prevTasks, newTask]);
        handleCloseDialog()
        toast.success('Task added successfully!', {
            position: 'top-center',
        });
    }

    const handleChangeTaskStatus = (id: string, done: boolean) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, done: done } : task
            )
        );
    }

    const handleDeleteTask = (id: string) => {
        setTasks(tasks.filter((task) => task.id !== id));
        toast.success('Task removed successfully!', {
            position: 'top-center',
        });
    }

    const handleOpenDialog = () => {
        setOpenDialog(true)
    }
    const handleCloseDialog = () => {
        setOpenDialog(false)
    }

    return (
        <div className="w-full h-screen bg-neutral">
            <div className="container font-poppins mx-auto py-14 px-4 ">

                <div className="text-center w-full text-4xl font-bold mb-12">
                    To-Do App
                </div>
                <div className="w-full space-y-8 ">
                    <button className="bg-primary hover:bg-black text-white font-bold py-2 px-4 rounded" onClick={handleOpenDialog}>
                        Add Task
                    </button>
                    <TaskDialog onAddTask={handleAddTask} open={openDialog} onClose={handleCloseDialog} />
                    <TaskList tasks={tasks} onChangeTaskStatus={handleChangeTaskStatus} onDeleteTask={handleDeleteTask} />
                </div>
            </div>
            <Toaster />
        </div>

    )
}

export default MainContent