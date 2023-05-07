/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
export default function Todo({todo, markCompleted, deleteTodo}) {
    return (
        <>
            <input type="checkbox" onChange={() => markCompleted(todo)} checked={todo.completed} />
            <span completed={todo?.completed}>{todo.content}</span>
            <button onClick={() => deleteTodo(todo)}><i className='ri-delete-bin-7-line'/></button>
        </>
    )
}
