import { useEffect, useContext } from 'react';

import { GlobalContext } from '../context/GlobalContext';

import Task from './Task';

const Tasks = () => {
    const { tasks, setTasks } = useContext(GlobalContext);
    
    const fetchTasks = async () => {
        const response = await fetch('/tasks');
        const allTasks = await response.json();
        setTasks(allTasks);
    }

    useEffect( () => {
        fetchTasks();
    }, []);

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