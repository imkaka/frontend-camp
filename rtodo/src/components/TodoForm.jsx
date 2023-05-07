/* eslint-disable react/prop-types */
import {useRef, useState} from 'react'

export default function TodoForm({todos, setTodos}) {
    const [content, setContent] = useState("");
    const inputRef = useRef(null);

    const handleChange = (e) => {
        if (e.target.value.trim()) {
            setContent(e.target.value)
        }
    };

    const addTodo = () => {
        if (content.trim()) {
            const newTodo = {
                id: Date.now(),
                content,
                completed: false,
              };
            setTodos([...todos, newTodo])
        }
    };

    return (
        <div className='inputContainer'>
            <form onSubmit={(e) => {
                e.preventDefault();
                addTodo();
                setContent("");
            }}>
                <input onChange={handleChange} value={content} ref={inputRef} />
                <button>Add</button>
            </form>
        </div>
    )
}
