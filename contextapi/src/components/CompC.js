import React, { useContext } from 'react';
import { AppState } from '../App';

const CompC = () => {
  const AppData = useContext(AppState);
  return (
    <div className='CompC'>
      CompC {AppData.data}
      <h1>Name:{AppData.secondData.name}</h1>
      <h1>sirname:{AppData.secondData.sirname}</h1>
    </div>
  );
};

export default CompC;
