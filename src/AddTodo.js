import { useRef } from 'react'

function AddTodo({setTodos, curId, setId}) {

    let inputRef = useRef();

    function handleAddTodo(event) {
        event.preventDefault();
        let text = event.target.elements.addTodo.value;
        let todo ={
            id: curId,
            text,
            done: false
        };
        setTodos(todos => todos.concat(todo));
        setId(curId => curId + 1);
        inputRef.current.value = "";
    }

    return (
        <form onSubmit={handleAddTodo}>
            <input name="addTodo" placeholder="Add todo" ref={inputRef}/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default AddTodo;