import { useEffect, useRef, useState } from 'react';
import './App.css';
import UseReducerHook from './UseReducerHook';

function App() {
  // const [counter, setCounter] = useState(0);

  const counter = useRef(0);
  const [input, setInput] = useState('');
  const prevState = useRef('');
  const inputField = useRef();

  //setCounter is kind of reloading the page, so useEffect will get call infinite times, so better to use
  // useRef hook

  useEffect(() => {
    // setCounter(counter + 1);
    counter.current = counter.current + 1;
    prevState.current = input;
  }, [input]);

  const clickHandler = () => {
    inputField.current.value = 'Iranna Kokatanur';
  };

  return (
    <div className='App'>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h2>page is reloaded {counter.current} times</h2>
      <h2>previous input was for the input text field : {prevState.current}</h2>

      <input ref={inputField} />
      <button onClick={clickHandler}>Click Me</button>
      <hr />
      <UseReducerHook />
    </div>
  );
}

export default App;
