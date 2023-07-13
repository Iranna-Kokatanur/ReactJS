import { useCallback, useState } from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {
  //usecallback will used when to return memorize function

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(
    (num) => {
      setTodos((t) => [...t, `New Todo ${num}`]);
    },
    [todos]
  );

  return (
    <div className='App'>
      <h1>UseCallBack Hook</h1>
      <div>
        Count : {count}
        <button onClick={increment}>+</button>
      </div>
      <hr />
      <Todos todos={todos} addTodo={addTodo} />
    </div>
  );
}

export default App;
