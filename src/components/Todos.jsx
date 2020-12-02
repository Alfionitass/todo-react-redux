import React, {useState, useEffect} from 'react';
import Todo from './Todo';
import Header from './Header';

export default function Todos() {
    const [todo, setTodo]= useState(
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
            id: 1,
            isEditing: false,
        }
    );

    useEffect(()=> {
        if(JSON.parse(localStorage.getItem('todolist'))){
            setTodo(JSON.parse(localStorage.getItem('todolist')))
        }
    },[])

    useEffect(() => {
        localStorage.setItem('todolist', JSON.stringify(todo));
      }, [todo])

    const addTodo = (value) => {
        setTodo({
            todo: [
                ...todo,
                {
                    text: value,
                    completed: false,
                    date: new Date(),
                    id: Math.random(),
                    isEditing: false, 
                }
            ]
        })
        console.log("todo", todo);
    }

    const removeTodo = (id) => {
        const newTodo = todo.filter((todo) => todo.id !== id);
        setTodo({
            todo: newTodo,
        })
        console.log("abis apus todo", todo);
    }

    const editTodo = (id) => {
        const newTodo = [...todo];
        const editedTodo = newTodo.find((todo) => todo.id === id);
        editedTodo.isEditing = !editedTodo.isEditing;
        setTodo({
            todo: newTodo,
        })
        //console.log("abis edit todo", todo);
    }

    const doneEditTodo = (id, text) => {
        const newTodo = [...todo];
        const editedTodo = newTodo.find((todo) => todo.id === id);
        editedTodo.isEditing = !editedTodo.isEditing;
        editedTodo.text = text;
        setTodo({
            todo: newTodo,
        })
        console.log("abis edit todo", text);
    }

    const completedTodo = (id) => {
        const newTodo = [...todo];
        const completeTodo = newTodo.find((todo) => todo.id === id);
        completeTodo.completed = !completeTodo.completed;
        setTodo({
            todo: newTodo,
        })
        console.log("completed todo", todo);
    }

    // const setStorage = () => {
    //     localStorage.setItem("todolist", JSON.stringify(todo));
    // }

    // const getStorage = () => {
    //     let localTodo = JSON.parse(localStorage.getItem("todolist"));
    //     if (!localTodo) {
    //         localTodo = [
    //             {
    //                 text: 'Todo 1',
    //                 completed: false,
    //                 date: new Date(),
    //                 id: 1,
    //                 isEditing: false,
    //             },
    //             {
    //                 text: 'Todo 2',
    //                 completed: false,
    //                 date: new Date(),
    //                 id: 2,
    //                 isEditing: false,
    //             }
    //         ]
    //     }
    //     setTodo({
    //         todo : localTodo
    //     })
    // }


    return (
        <div>
            <Header />
            <Todo 
                todo={todo} 
                addTodo={addTodo} 
                removeTodo={removeTodo}
                editTodo={editTodo}
                doneEditTodo={doneEditTodo}
                completedTodo={completedTodo}
            />
        </div>
    )
}
