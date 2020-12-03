import React, {useState} from 'react'

export default function Input(props) {
    //const {addTodo, children} = props;
    const [value, setValue] = useState("");

    return (
        <div className="container">
            <div className="row">
                    <section className="col s4 offset-s4">
                            <div className="input-field">
                                {/* {children} */}
                                <input type="text" onChange={ (e) => setValue(e.target.value) } />
                                <button className="waves-effect waves-light btn" onClick={() => addTodo(value)}>Add</button>
                            </div>
                    </section>
                </div>
        </div>
    )
}
