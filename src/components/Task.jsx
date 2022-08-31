import styles from './styles/Task.module.css';
import { useDispatch } from 'react-redux';

const Task = ({ task }) => {
    const disptach = useDispatch();

    const deleteTask = async (id) => {
        const response = await fetch(`/tasks/${id}`,{
            method: 'delete'
        });
        if(response.status === 200){
            disptach({ type: 'REMOVE_TASK', payload: id})
        }else{
        console.error('Error while deleting...');
        }
    }

    const toggleTask = async (id) => {
        const taskToUpdate = await fetchTask(id);
        const updatedTask = {...taskToUpdate, reminder: !taskToUpdate.reminder};
        const response = await fetch(`/tasks/${id}`, {
            method: 'put',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTask)
        });
        const responseTask = await response.json();
        disptach( { type: 'UPDATE_TASK', payload: { id, responseTask } })
    }

    const fetchTask = async (id) => {
        const response = await fetch(`/tasks/${id}`);
        const task = await response.json();
        return task;
    }

    return ( 
        <div onDoubleClick={ () => toggleTask(task.id) } className={ `${styles.task} ${ task.reminder ? styles.reminder : ''}` }>
            <h3>
                {task.text}
                <i onClick={ () => deleteTask(task.id) } className={`${styles.fas} fas fa-times`}></i>
            </h3>
            <p> { task.day }</p>
        </div>
    )
}

export default Task;