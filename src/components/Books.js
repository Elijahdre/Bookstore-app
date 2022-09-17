/* eslint-disable react/prop-types */
/* eslint-disable  react/destructuring-assignment */
import React from 'react';

function Books(props) {
  return (
    <div className="book-container">
      <h2 className="book-title">{props.title}</h2>
      <p className="book-author">{props.author}</p>
      <button type="button" className="remove-btn">Remove</button>
    </div>
  );
}
export default Books;
