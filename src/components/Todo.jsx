import React from 'react';
import Input from './Input';
import List from './List';

export default function Todo(props) {
    const {todo, addTodo, removeTodo, editTodo, doneEditTodo, completedTodo, children} = props;
    return (
        <div>
            {children}
            <Input 
                addTodo = {addTodo}
            />
            <List 
                todo={todo}
                removeTodo={removeTodo}
                editTodo={editTodo}
                doneEditTodo={doneEditTodo}
                completedTodo={completedTodo}
            />
        </div>
    )
}
