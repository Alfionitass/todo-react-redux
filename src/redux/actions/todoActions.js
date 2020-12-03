import { ADD_TODO, DELETE_TODO, EDIT_TODO, DONE_EDIT_TODO, COMPLETED_TODO } from "../constants/action-types";

export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: data
    }
}

export const removeTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const editTodo = (id) => {
    return {
        type: EDIT_TODO,
        payload: id
    }
}

export const doneEditTodo = (id, data) => {
    return {
        type: DONE_EDIT_TODO,
        payload: id,
        payload1: data
    }
}

export const completedTodo = (id) => {
    return {
        type: COMPLETED_TODO,
        payload: id
    }
}