import React, { memo } from 'react';

const Todos = ({ todos, addTodo }) => {
  console.log('child render');
  return (
    <div>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={() => addTodo(8)}>Add Todo</button>
    </div>
  );
};

//memo is to not to load when the props data change
export default memo(Todos);
