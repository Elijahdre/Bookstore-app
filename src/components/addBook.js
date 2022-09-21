import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function addBook() {
  const bookList = useSelector((state) => state);
  const dispatch = useDispatch();
  const [state, setState] = 


  return (
    <div className="form-inputs">
      <h1>ADD A NEW BOOK</h1>
      <form className="inputs">
        <input type="text" id="title" placeholder="Book-Title" />
        <input type="text" id="author" placeholder="Book-Author" />
      </form>
    </div>
  );
}
export default addBook;
