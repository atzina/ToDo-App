import { useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';


// import './App.css'

const todos = [
  {text: 'cortar cebolla', completed:false},
  {text: 'Tomar el curso de intro a React', completed:false},
  {text: 'Llorar con la llorona', completed:false},
];

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   {<TodoCounter />}
   
   {<TodoSearch />}
   
   {<TodoList>
      {todos.map(todo => (
        <TodoItem key= {todo.text} text = {todo.text}/>
      ))}
    </TodoList >}
    {<CreateTodoButton />}
   
    </>
  );
}

export default App
