import Task from './Task';

const Tasks = ({ tasks, toggleTask, deleteTask }) => {
    return(
        <div>
            {
                tasks.length ?
                tasks.map(task => (
                    <Task key={task.id} task={task} toggleTask={ toggleTask } deleteTask={ deleteTask } />
                ))
                : 
                'No Tasks to show...'
            }
        </div>
    )
}

export default Tasks;