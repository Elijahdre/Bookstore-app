import React from 'react';

function book() {
  return (
    <>
      <div className="book-container">
        <h2 className="book-title">The Hunger Games</h2>
        <p className="book-author">Suzanne Collins</p>
        <button type="button" className="remove-btn">Remove</button>
      </div>
    </>
  );
}
export default book;
