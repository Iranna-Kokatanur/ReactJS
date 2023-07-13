import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [state, setState] = useState(1);
  const [data, setData] = useState([]);

  //use effect will get called on render, rerender and any dependency change
  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );

      const res = await get.json();
      setData(res);
      console.log(res);
    }

    getData();

    document.title = `(${state} Employees)`;
  }, [state]);

  return (
    <div className='App'>
      <button onClick={() => setState(state + 1)}>Click me {state}</button>
      {data.map((element, index) => {
        return (
          <div className='json' key={index}>
            <div>{element.firstName}</div>
            <div>{element.lastName}</div>
            <div>{element.email}</div>
            <div>{element.contactNumber}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
