import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo, editTodo, doneEditTodo, completedTodo } from "../redux/actions/todoActions";

const TodoApp = ({ todos, addTodo, removeTodo, editTodo, doneEditTodo, completedTodo }) => {
    // const todos = useSelector(state => state.todos);
    // const dispatch = useDispatch();
    const [value, setValue] = useState("");
    // const submit = (value) => {
    //     const data = {
    //         text: value,
    //         completed: false,
    //         date: new Date(),
    //         id: Math.random(),
    //         isEditing: false
    //     }
    //     (addTodo(data));
    // }
    //console.log("todos", todos)

    return (
        <React.Fragment>
            <nav>
                <div className="nav-wrapper">
                    <h6 className="brand-logo center">Todo List App</h6>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <section className="col s4 offset-s4">
                        <div className="input-field">
                            <input type="text" onChange={(e) => setValue(e.target.value)} />
                            <button className="waves-effect waves-light btn" onClick={() => addTodo(value)}>Add</button>
                        </div>
                    </section>
                    <section className="col s6 offset-s3">
                        <ul className="collection">
                            {todos?.todos.map((todo) => (
                                todo.isEditing ? (
                                    <li className="collection-item">
                                        <div className="row">
                                            <section className="col s4 offset-s4">
                                                <div className="input-field">
                                                    <input type="text" onChange={(e) => setValue(e.target.value)} />
                                                    <button className="waves-effect waves-light btn" onClick={() => editTodo(todo.id)}>cancel</button>
                                                    <button className="waves-effect waves-light btn" onClick={() => doneEditTodo(todo.id, value)}>done</button>
                                                </div>
                                            </section>
                                        </div>
                                    </li>
                                ) : (
                                        <li className="collection-item">
                                            {todo.completed ? <s>{todo.text}</s> : todo.text}
                                            <div className="input-field">
                                                <button className="waves-effect waves-light btn" onClick={() => removeTodo(todo.id)}>Remove</button>
                                                <button className="waves-effect waves-light btn" onClick={() => editTodo(todo.id)}>Edit</button>
                                                <button className="waves-effect waves-light btn" onClick={() => completedTodo(todo.id)}>complete</button>
                                            </div>
                                        </li>
                                    )
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})
//console.log("todos", todos)

const mapDispatchToProps = dispatch => ({
    addTodo: value => dispatch(addTodo({
        text: value,
        completed: false,
        date: new Date(),
        id: Math.random(),
        isEditing: false
    })),
    removeTodo: id => dispatch(removeTodo(id)),
    editTodo: id => dispatch(editTodo(id)),
    doneEditTodo: (id, value) => dispatch(doneEditTodo(id, value)),
    completedTodo: id => dispatch(completedTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);