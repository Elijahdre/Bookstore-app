// Actions
const ADD_BOOK = 'bookstore-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-app/books/REMOVE_BOOK';

const initialState = [];

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (index) => ({
  type: REMOVE_BOOK,
  payload: index,
});

const reduceBook = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((item) => item.id !== action.payload)];
    default:
      return state;
  }
};

export default reduceBook;
