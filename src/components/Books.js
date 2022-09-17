/* eslint-disable react/prop-types */

import React from 'react';

function Books({ title, author }) {
  return (
    <div className="book-container">
      <h2 className="book-title">{title}</h2>
      <p className="book-author">{author}</p>
      <button type="button" className="remove-btn">Remove</button>
    </div>
  );
}
export default Books;
