import React, { useState, useEffect } from 'react';

function TodosList() {
  const [ todos, setTodos ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {setLoading(false); setTodos(json);  });
  }, []);

  const renderTodos = () => todos.map(todo => <div data-testid="todoListElement" key={todo.id}>{todo.title}</div>);

  return (
    <div data-testid="todosList">
      {loading ? <div data-testid="todosLoader">Loader...</div> : renderTodos()}
    </div>
  );
}

export default TodosList;
