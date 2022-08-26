import { useContext, useState } from 'react';

import { GlobalContext } from '../context/GlobalContext';

import styles from './styles/AddTask.module.css';

const AddTask = () => {

    const { addTask } = useContext(GlobalContext);

    const [ form, setForm ] = useState({
        text: '',
        day: '',
        reminder: false
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!form.text || !form.day){
            alert('please fill all the fields');
            return;
        }

        createTask(form);

        setForm({
            text: '',
            day: '',
            reminder: false
        })
    }

    const createTask = async (task) => {
        const response = await fetch('/tasks', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task)
        });
        const newTask = await response.json();
        addTask(newTask);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.add_form}>
            <div className={styles.form_control}>
                <label>Task</label>
                <input 
                    onChange={ (e) => setForm( {...form, text: e.target.value }) } type="text" 
                    name="text" 
                    value={ form.text }
                    placeholder="Add Task" 
                />
            </div>
            <div className={styles.form_control}>
                <label>Day & Time</label>
                <input
                    onChange={ (e) => setForm( {...form, day: e.target.value }) }
                    type="text"
                    name="day"
                    value={ form.day }
                    placeholder="Add Day & Time"
                />
            </div>
            <div className={`${styles.form_control} ${styles.form_control_check}`}>
                <label>Set Reminder</label>
                <input 
                    onChange={ (e) => setForm( {...form, reminder: e.target.value }) }
                    type="checkbox" 
                    name="reminder"
                    checked={ form.reminder } 
                />
            </div>
            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    )
}

export default AddTask