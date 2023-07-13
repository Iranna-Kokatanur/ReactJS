import React from 'react';
import { useNavigate } from 'react-router-dom';

const Component = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>This is my custom page.</h1>
      <button onClick={() => navigate(-1)}>go to Home</button>`
    </>
  );
};

export default Component;
