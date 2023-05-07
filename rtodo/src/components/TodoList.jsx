/* eslint-disable react/prop-types */
import Todo from './Todo';

export default function TodoList({todos, setTodos}) {
    const markCompleted = (todo) => {
        const todoIndex = todos.indexOf(todo);
        let completedTodo = todos[todoIndex];

        let newTodos = [...todos];
        completedTodo.completed = todo.checked;
        newTodos[todoIndex] = completedTodo;
        setTodos(newTodos);
    };

    const deleteTodo = (todo) => {
        const newTodos = todos.filter((t) => t.id !== todo.id);
        setTodos(newTodos);
    };

    return (
        <div className='todos'>
        {todos.map((todo, index) => {
            return (
            <div className="todo"key={index}>
                <Todo todo={todo} markCompleted={markCompleted} deleteTodo={deleteTodo}/>
            </div>
            );
        })}
    </div>
  )
}
