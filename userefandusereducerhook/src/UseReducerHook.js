import React, { useReducer } from 'react';

const reducer = (state, action) => {
  if (action.type === 'INC') {
    return state + 2;
  }
  if (action.type === 'DEC') {
    return state - 2;
  }
  if (action.type === 'MUL') {
    return state * 2;
  }
  return state;
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  /**
   * state = 0
   * in disptch we are sending the attributes, render function can access it and assign it to the state variable
   */
  return (
    <div>
      <h1>Using UseReducerHook</h1>
      <h2>{state}</h2>
      <button onClick={() => dispatch({ type: 'INC' })}>Increment by 2</button>
      <button onClick={() => dispatch({ type: 'DEC' })}>Decrement by 2</button>
      <button onClick={() => dispatch({ type: 'MUL' })}>Multiply by 2</button>
    </div>
  );
};

export default UseReducerHook;
