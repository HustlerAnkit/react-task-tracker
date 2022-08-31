const initState = {
    tasks : [],
    showForm: false
};

const TaskReducer = (state = initState, action) => {
    switch(action.type){
        case 'SET_TASKS':
            state = {...state, tasks: action.payload };
            return state;
        case 'ADD_TASK':
            state = { ...state, tasks: [...state.tasks, action.payload ]};
            return state;
        case 'UPDATE_TASK':
            state = {...state, tasks: state.tasks.map( task => task.id === action.payload.id ? action.payload.responseTask : task )};
            return state;
        case 'REMOVE_TASK':
            state = { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
            return state;
        case "TOGGLE_FORM":
            state = { ...state, showForm: !state.showForm };
            return state;
        default: return state;
    }
}

export default TaskReducer;