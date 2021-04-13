import { useState } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

function App() {

let [todos, setTodos] = useState([
  /*{id: 1, text: 'Work on EECS 281', done: false},
  {id: 2, text: 'Play football', done: false},
  {id: 3, text: 'Spend time with family', done: true}*/
]);

let [curId, setId] = useState(0);

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <TodoList todos={todos} setTodos={setTodos}/>
      <AddTodo setTodos={setTodos} curId={curId} setId={setId}/>
    </div>
  );
}

export default App;
