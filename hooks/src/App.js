
import './App.css';
import React, {useState} from 'react';

function App() {

  const [num, setNum] = useState(1);

  const inc = () =>{
    setNum(num+1);
  }

  const dec = () => {
    if(num>1){
      setNum(num-1);
    }
  }

  return (
    <div>
      <center>
        <div className="buttons">
          <h2>TEXT</h2>
          <div className="content">{num}</div>
          <div>
            <button className="button1" onClick={inc}>INCREMENT</button>
            <button className="button2" onClick={dec}>DECREMENT</button>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
