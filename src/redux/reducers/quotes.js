import {
  REQUEST_RANDOM_QUOTE,
  RECEIVE_RANDOM_QUOTE,
  RECEIVE_RANDOM_QUOTE_FAILURE,
  REQUEST_QUOTES,
  RECEIVE_QUOTES,
  RECEIVE_QUOTES_FAILURE,
  REQUEST_UPDATE_QUOTES_LIKES,
  UPDATE_QUOTE_LIKES_FAILURE,
  UPDATE_QUOTE_LIKES
} from '../actionConstants';

const initialState = {
  quotes: [{
    quote: 'Loading...',
    note: 'First lines, Book 1.',
    book: 'The Iliad',
    author: 'Homer',
    likes: 100,
    _id: '0',
  }],
  quote: {
    quote: 'Loading...',
    note: 'First lines, Book 1.',
    book: 'The Iliad',
    author: 'Homer',
    likes: 100,

  },
  loading: true,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {

    case REQUEST_RANDOM_QUOTE:
      return {
        ...state,
        loading: true,
      };

    case RECEIVE_RANDOM_QUOTE:
      return {
        ...state,
        quote: action.quote,
      };

    case RECEIVE_RANDOM_QUOTE_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case REQUEST_QUOTES:
      return {
        ...state,
        loading: true,
      };

    case RECEIVE_QUOTES:
      return {
        ...state,
        quotes: action.quotes,
        loading: false,
      };

    case RECEIVE_QUOTES_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case REQUEST_UPDATE_QUOTES_LIKES:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case UPDATE_QUOTE_LIKES_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case UPDATE_QUOTE_LIKES: {
      const newLikesCount = action.quote.likes;
      const quotes = state.quotes.map(quote => {
        if (quote._id === action.quote._id) {
          quote.likes = newLikesCount;
        }
        return quote;
      });

      return {
        ...state,
        quotes,
      };
    }

    default:
      return state;
  }
};
