import { useState } from 'react'
import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

import './App.css'


function App() {
  const [currentTab, setCurrentTab] = useState("all");
  const [todos, setTodos] = useState([{
    id: Date(),
    content: 'Complete React bootcamp assignments',
    completed: false
  }])

  // const [currentTodos, setCurrentTodos] = useState([]);
  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  let visibleTodos;
  switch (currentTab) {
    case "all":
      visibleTodos = todos;
      break;
    case "completed":
      visibleTodos = completedTodos;
      break;
    case "active":
      visibleTodos = activeTodos;
      break;
    default:
      visibleTodos = todos;
      break;
  }

  return (
    <div className="app">
      <Header/>
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab}/>
      <TodoForm todos={todos} setTodos={setTodos}/>
      <TodoList todos={visibleTodos} setTodos={setTodos}/>
    </div>
  )
}

export default App
