import React from 'react';

function Book() {
  return (
    <>
      <div className="books">
        <h2 className="book-title">The Hunger Games</h2>
        <p className="book-author">Suzanne Collins</p>
        <button type="button" className="remove-btn">Remove</button>
      </div>
    </>
  );
}
export default Book;
