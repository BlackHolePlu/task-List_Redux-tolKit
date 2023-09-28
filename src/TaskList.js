import {useDispatch, useSelector} from "react-redux";
import {addTask, removeTask} from "./tasksSlice";


function TaskList(){
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const BtnAddTask = () => {
        dispatch(addTask({id: Date.now(), text: `sdfsndf`}))
    };

    const BtnRemoveTask = (taskid) => {
        dispatch(removeTask(taskid))
    }

    return(
        <div>
            <button onClick={BtnAddTask}>Add Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.text}
                        <button onClick={() => BtnRemoveTask(task.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList;