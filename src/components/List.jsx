import React, { useState } from 'react'

export default function List(props) {
    const {removeTodo, editTodo, doneEditTodo, completedTodo, children } = props;
    const [value, setValue] = useState("");
    const todos = props.todo.map((element) => (
        element.isEditing ? (
            <li className="collection-item">
                <div className="row">
                    <section className="col s4 offset-s4">
                            <div className="input-field">
                                <input type="text" onChange={(e) => setValue(e.target.value)} />
                                <button className="waves-effect waves-light btn" onClick={() => editTodo(element.id)}>cancel</button>
                                <button className="waves-effect waves-light btn" onClick={() => doneEditTodo(element.id, value)}>done</button>
                            </div>
                    </section>
                </div>
            </li>
        ) : (
                <li className="collection-item">
                    {element.completed ? <s>{element.text}</s> : element.text}
                    <div className="input-field">
                        <button className="waves-effect waves-light btn" onClick={() => removeTodo(element.id)}>Remove</button>
                        <button className="waves-effect waves-light btn" onClick={() => editTodo(element.id)}>Edit</button>
                        <button className="waves-effect waves-light btn" onClick={() => completedTodo(element.id)}>complete</button>
                    </div>
                </li>
            )
    ));

    return (
        <div className="row">
            <section className="col s6 offset-s3">
                    <ul className="collection">
                        {children}
                        {todos}
                    </ul>
            </section>
        </div>
    )

    // {
    //     todo.map((element) => (
    //         element.isEditing ? (
    //             <li className="collection-item">
    //                 <section className="col s4 offset-s4">
    //                     <form>
    //                         <div className="input-field">
    //                             <input type="text" onChange={(e) => setValue({ value: e.target.value })} />
    //                             <button className="waves-effect waves-light btn" onClick={() => editTodo(element.id)}>cancel</button>
    //                             <button className="waves-effect waves-light btn" onClick={() => doneEditTodo(element.id, value)}>done</button>
    //                         </div>
    //                     </form>
    //                 </section>
    //             </li>
    //         ) : (
    //                 <li className="collection-item">
    //                     {element.completed ? <s>{element.text}</s> : element.text}
    //                     <div className="input-field">
    //                         <button className="waves-effect waves-light btn" onClick={() => removeTodo(element.id)}>Remove</button>
    //                         <button className="waves-effect waves-light btn" onClick={() => editTodo(element.id)}>Edit</button>
    //                         <button className="waves-effect waves-light btn" onClick={() => completedTodo(element.id)}>complete</button>
    //                     </div>
    //                 </li>
    //             )
    //     ))
    // }

}
