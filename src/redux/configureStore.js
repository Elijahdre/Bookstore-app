import { configureStore } from 'redux';
import reduceBook from './books/books';
import reduceCategories from './categories/categories';

const rootStore = configureStore({
  reduceBook,
  reduceCategories,
});

export default rootStore;
