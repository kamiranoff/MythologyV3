import { combineReducers } from 'redux';

import figures from './figures';
import books from './books';
import quotes from './quotes';

export default combineReducers({
  figures,
  books,
  quotes,
});
