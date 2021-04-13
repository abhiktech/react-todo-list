import Todo from './Todo'
import DeleteTodo from './DeleteTodo'

function TodoList({todos, setTodos}) {

    function handleToggleTodo(todoId) {
        setTodos(todos => todos.map(todo => {
            if(todo.id === todoId) todo.done = !todo.done;
            return todo;
        }));
    }

    return (
        <ul>
            {todos.map(todo => {
                return <li
                onClick={() => handleToggleTodo(todo.id)}
                style={{
                    textDecoration: todo.done ? 'line-through' : ''
                }}
                key={todo.id}>
                <Todo text={todo.text} />
                <DeleteTodo id={todo.id} setTodos={setTodos}/>
                </li>
            })}
        </ul>
    );
}

export default TodoList;