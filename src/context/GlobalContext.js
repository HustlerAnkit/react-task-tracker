import React, { createContext, useReducer } from 'react';
import TaskReducer from './reducers/TaskReducer';

// Initital State
const initialState = {
    tasks: [],
    showForm: false,
};

// create context
export const GlobalContext = createContext(initialState);

// provider commponent
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    // Actions
    function setShowForm(){
        dispatch({
            type: 'SET_SHOW_FORM',
        })
    }

    function addTask(newTask){
        dispatch({
            type: 'ADD_TASK',
            payload: newTask
        })
    }

    function setTasks(tasks){
        dispatch({
            type: 'SET_TASKS',
            payload: tasks
        })
    }

    function removeTask(id){
        dispatch({
            type: 'REMOVE_TASK',
            payload: id
        })
    }

    function updateTask(id, updatedTask){
        dispatch({
            type: 'UPDATE_TASK',
            payload: { id, updatedTask }
        })
    }
    return (
        <GlobalContext.Provider value={{ 
            tasks: state.tasks,
            showForm: state.showForm,
            setShowForm,
            addTask,
            setTasks,
            removeTask,
            updateTask,
        }}>
            { children }
        </GlobalContext.Provider>
    )
}