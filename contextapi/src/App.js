import { createContext, useState } from 'react';
import './App.css';
import CompA from './components/CompA';

const AppState = createContext();

function App() {
  const [data, setData] = useState('Web3Mantra');
  const [secondData, setName] = useState({
    name: 'Iranna',
    sirname: 'Kokatanur',
  });
  return (
    <>
      <AppState.Provider value={{ data, secondData }}>
        <CompA />
      </AppState.Provider>
    </>
  );
}

export default App;

export { AppState };
