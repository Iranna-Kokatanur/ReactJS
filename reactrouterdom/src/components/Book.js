import React from 'react';
import { useParams } from 'react-router-dom';

const Book = () => {
  const { id } = useParams();
  return <h1>This is a book page with id: {id}</h1>;
};

export default Book;
