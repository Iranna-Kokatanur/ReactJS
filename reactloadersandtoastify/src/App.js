import logo from './logo.svg';
import './App.css';
import { RotatingLines } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//npm i react-loader-spinner
//npm i react-toastify

//just remove the React.strictmode in index.js for not to load two times for useeffect

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const res = await fetch(
        'https://hub.dummyapis.com/employee?noofRecords=1000&idStarts=1001'
      );
      const finalRes = await res.json();
      setData(finalRes);
      setLoading(false);
      console.log(finalRes);
      toast.success('Successfully fetched the data');
    }
    getData();
  }, []);

  return (
    <div className='App'>
      <ToastContainer />
      {data.map((e, i) => {
        return <p key={i}>{e.email}</p>;
      })}
      <div className='loader'>
        <RotatingLines
          strokeColor='green'
          strokeWidth='5'
          animationDuration='0.75'
          width='96'
          visible={loading}
        />
      </div>
    </div>
  );
}

export default App;
