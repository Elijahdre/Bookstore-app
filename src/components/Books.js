import React from 'react';
import Book from './Book';
import AddBook from './addBook';

function Books(props) {
  const { bookList } = props;
  return (
    <div className="book-list">
      {bookList.map((book) => (
        <Book key={book.item_id} title={book.title} author={book.author} id={book.item_id} />
      ))}

      <AddBook />

    </div>
  );
}

Books.defaultProps = {
  books: [],
};

export default Books;
