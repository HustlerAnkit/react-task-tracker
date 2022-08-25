import { useState, useEffect } from 'react';

import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';

const Home = ({ showForm }) => {
  const [tasks, setTasks] = useState([]);
  
  const toggleTask = async (id) => {
    const taskToUpdate = await fetchTask(id);
    const updatedTask = {...taskToUpdate, reminder: !taskToUpdate.reminder};
    // console.log(taskToUpdate);return;

    const response = await fetch(`http://localhost:5050/tasks/${id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask)
      });

      const responseTask = await response.json();

    setTasks( prev => (
      prev.map( task => task.id == id ? responseTask : task )
    ));
  }

  const deleteTask = async (id) => {
    const response = await fetch(`http://localhost:5050/tasks/${id}`,{
      method: 'delete'
    });
    if(response.status === 200){
      setTasks( tasks => tasks.filter( task => task.id !== id));
    }else{
      console.error('Error while deleting...');
    }
  }

  const addTask = async (task) => {
        // task.id = Math.floor(Math.random() * 10000);
        // setTasks( tasks => [...tasks, task]);

        const response = await fetch('http://localhost:5050/tasks', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task)
        });
        const newTask = await response.json();
        setTasks(tasks => [...tasks, newTask]);
    }

    const fetchTask = async (id) => {
        const response = await fetch(`http://localhost:5050/tasks/${id}`);
        const task = await response.json();
        return task;
    }

    const fetchTasks = async () => {
    const response = await fetch('http://localhost:5050/tasks');
    const allTasks = await response.json();
    setTasks(allTasks);
    }

    useEffect( () => {
    fetchTasks();
    }, []);

  return (
    <>
        { showForm && <AddTask addTask={addTask}/> }
        <Tasks tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </>
  )
}

export default Home