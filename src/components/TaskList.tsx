import TaskCard from "./TaskCard"
import Task from "../interfaces/task"


type Props = {
    tasks: Task[]
    onChangeTaskStatus: (id: string, done: boolean) => void
    onDeleteTask: (id: string) => void
}
const TaskList = ({ tasks, onChangeTaskStatus, onDeleteTask }: Props) => {

    return (
        <div className="bg-secondary rounded-lg p-8 space-y-4">
            {tasks.map((task, index) => (
                <TaskCard task={task} onChangeTaskStatus={onChangeTaskStatus} key={index} onDeleteTask={onDeleteTask} />
            ))}
        </div>
    )
}

export default TaskList