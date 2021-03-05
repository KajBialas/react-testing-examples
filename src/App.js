import React, { useState, useEffect } from 'react';

function TodosList() {
  const [ todos, setTodos ] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json));
  });

  const renderTodos = () => todos.map(todo => <div data-testid="todoListElement" key={todo.id}>{todo.title}</div>);

  return (
    <div data-testid="todosList">
      {renderTodos()}
    </div>
  );
}

export default TodosList;
