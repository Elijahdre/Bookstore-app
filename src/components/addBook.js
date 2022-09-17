import React from 'react';

function addBook() {
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
