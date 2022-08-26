import { useContext } from 'react';

import { GlobalContext } from '../context/GlobalContext';

import styles from './styles/Task.module.css';

const Task = ({ task }) => {
    const { updateTask, removeTask } = useContext(GlobalContext);

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
        updateTask(id, responseTask);
    }
    
    const deleteTask = async (id) => {
        const response = await fetch(`/tasks/${id}`,{
            method: 'delete'
        });
        if(response.status === 200){
            removeTask(id);
        }else{
            console.error('Error while deleting...');
        }
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