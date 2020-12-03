import { ADD_TODO, DELETE_TODO, EDIT_TODO, DONE_EDIT_TODO, COMPLETED_TODO } from '../constants/action-types';

const initialState = {
    todos: [
        {
            text: 'Todo 1',
            completed: false,
            date: new Date(),
            id: 1,
            isEditing: false,
        },
        {
            text: 'Todo 2',
            completed: false,
            date: new Date(),
            id: 2,
            isEditing: false,
        }
    ]
  };

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            } 
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            }
        case EDIT_TODO: {
            const newTodo = [...state.todos];
            const editedTodo = newTodo.find((todo) => todo.id === action.payload);
            editedTodo.isEditing = !editedTodo.isEditing;
            return {
                ...state,
                todos : newTodo
            }
        }
        case DONE_EDIT_TODO: {
            const newTodo = [...state.todos];
            const editedTodo = newTodo.find((todo) => todo.id === action.payload);
            editedTodo.isEditing = !editedTodo.isEditing;
            editedTodo.text = action.payload1;
            return {
                ...state,
                todos: newTodo
            }
        }
        case COMPLETED_TODO: {
            const newTodo = [...state.todos];
            const completeTodo = newTodo.find((todo) => todo.id === action.payload);
            completeTodo.completed = !completeTodo.completed;
            return {
                ...state,
                todos: newTodo
            }
        }
            
        default:
            return state;
    }
    
};