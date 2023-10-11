import { Dialog, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'
import Task from '../interfaces/task'
import { AiOutlineClose } from 'react-icons/ai'
import IconButton from './IconButton'

type Props = {
    onAddTask?: (title: string, description: string) => void
    open: boolean
    onClose: () => void
    task?: Task
    viewMode?: boolean
}

const TaskDialog = ({ onAddTask, open, onClose, task, viewMode = false }: Props) => {
    const [title, setTitle] = useState(`${task?.title || ''}`)
    const [description, setDescription] = useState(`${task?.description || ''}`)



    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.currentTarget.value)
    }

    return (
        <>

            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl space-y-8 bg-white p-6 
                                text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 flex items-center justify-between"
                                    >
                                        <div> Add Task</div>

                                        <div> <IconButton icon={<AiOutlineClose size={20} />} onClick={() => onClose()} /></div>


                                    </Dialog.Title>
                                    <div className="mt-2 space-y-4">
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                                    rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
                                    dark:border-gray-600 dark:placeholder-gray-400
                                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Title" value={title} onChange={handleTitleChange} disabled={viewMode} required />

                                        <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300
                                     focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Description..." value={description} onChange={handleDescriptionChange} disabled={viewMode} required></textarea>

                                        {task && (
                                            <div>
                                                <span> Status:</span>
                                                <span className={`${task.done ? 'text-lime-500' : 'text-amber-300'}`}> {task.done ? 'Completed' : 'Pending'}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-4">
                                        {onAddTask && (
                                            <button className="bg-primary hover:bg-black
                                            text-white font-bold py-2 px-4 rounded" onClick={() => {
                                                    setTitle('')
                                                    setDescription('')
                                                    onAddTask(title, description)
                                                }}>
                                                Add
                                            </button>
                                        )}




                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default TaskDialog