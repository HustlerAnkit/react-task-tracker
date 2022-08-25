import styles from './styles/Task.module.css';

const Task = ({ task, toggleTask, deleteTask }) => {
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