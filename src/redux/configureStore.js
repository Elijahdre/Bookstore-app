import { combineReducers, configureStore } from 'redux';
import reduceBook from './books/books';
import reduceCategories from './categories/categories';

const rootStore = combineReducers({
  reduceBook,
  reduceCategories,
});

const store = configureStore({
  rootStore,
});

export default store;
