import React from 'react';
import CompB from './CompB';

const CompA = () => {
  return (
    <div className='CompA'>
      CompA
      <CompB />
    </div>
  );
};

export default CompA;
