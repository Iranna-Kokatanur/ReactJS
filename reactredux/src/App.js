import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Inc, Dec } from './states/reducers/index';
//# If you use npm: npm install react-redux
//npm install @reduxjs/toolkit react-redux

function App() {
  const curState = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <h1>React Redux Tutorial</h1>
      <h1>{curState}</h1>
      <div>
        <button onClick={() => dispatch(Inc(10))}>INC</button>
        <button onClick={() => dispatch(Dec(5))}>DEC</button>
      </div>
    </div>
  );
}

export default App;
