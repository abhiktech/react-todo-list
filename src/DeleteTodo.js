function DeleteTodo({id, setTodos}) {
    
    function handleDeleteTodo() {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    return (
        <span 
        onClick={handleDeleteTodo}
        role="button" style={{
            color: 'red',
            fontWeight: 'bold',
            marginLeft: 10
        }}>x</span>
    );
}

export default DeleteTodo;