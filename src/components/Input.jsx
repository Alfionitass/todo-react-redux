import React, {useState} from 'react'

export default function Input(props) {
    const {addTodo} = props;
    const [value, setValue] = useState("");

    return (
        <div className="container">
            <div className="row">
                    <section className="col s4 offset-s4">
                        <form>
                            <div className="input-field">
                                <input placeholder="Input Todo" type="text" onChange={ (e) => setValue({ value : e.target.value }) } />
                                <button className="waves-effect waves-light btn" onClick={() => addTodo(value)}>Add</button>
                            </div>
                        </form>
                    </section>
                </div>
        </div>
    )
}
