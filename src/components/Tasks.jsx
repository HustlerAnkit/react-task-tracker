import { useEffect } from 'react'
import Task from './Task';
import { useDispatch, useSelector } from 'react-redux';

const Tasks = () => {
    const disptach = useDispatch();
    const tasks = useSelector( store => store.tasks);

    const fetchTasks = async () => {
        const response = await fetch('/tasks');
        const allTasks = await response.json();
        disptach({ type: 'SET_TASKS', payload: allTasks });
    }

    useEffect(() => {
        fetchTasks();
    }, [])
    
    return(
        <div>
            {
                tasks.length ?
                tasks.map(task => (
                    <Task key={task.id} task={task} />
                ))
                : 
                'No Tasks to show...'
            }
        </div>
    )
}

export default Tasks;