import './App.css';
import CustomHook from './components/CustomHook';
import { useState, useMemo } from 'react';

function App() {
  const data = CustomHook('Iranna');
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const expensiveCalculation = (num) => {
    console.log('calculating');
    for (let i = 0; i < 1000000000; i++) {}
    return num;
  };

  //First it will memorize the data while the page render first, later depend on the dependency []
  // calculation function will run
  //useMemo will used for memoizing the data
  const calculation = useMemo(() => {
    expensiveCalculation(count);
  }, [count]);

  return (
    <div className='App'>
      {data}
      <hr />
      <h1>UseMemoHook</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Count: {count}</h1>
      <input onChange={(e) => setName(e.target.value)} />
      <h1>Name: {name}</h1>
    </div>
  );
}

export default App;
