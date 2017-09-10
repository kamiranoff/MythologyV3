import callApi from '../../util/apiCaller';
import getEnvironment from '../../constants/environment';
import {
  REQUEST_RANDOM_QUOTE,
  RECEIVE_RANDOM_QUOTE,
  RECEIVE_RANDOM_QUOTE_FAILURE,
  REQUEST_QUOTES,
  RECEIVE_QUOTES,
  RECEIVE_QUOTES_FAILURE,
  REQUEST_UPDATE_QUOTES_LIKES,
  UPDATE_QUOTE_LIKES_FAILURE,
  UPDATE_QUOTE_LIKES,

} from '../actionConstants';

const ENV = getEnvironment();

const requestRandomQuote = () => ({
  type: REQUEST_RANDOM_QUOTE,
});

const receiveRandomQuote = quote => ({
  type: RECEIVE_RANDOM_QUOTE,
  quote,
});

const receiveRandomQuoteFailed = e => ({
  type: RECEIVE_RANDOM_QUOTE_FAILURE,
  error: e,
});

const requestQuotes = () => ({
  type: REQUEST_QUOTES,
});

const receiveQuotes = quotes => ({
  type: RECEIVE_QUOTES,
  quotes,
});

const receiveQuotesFailed = e => ({
  type: RECEIVE_QUOTES_FAILURE,
  error: e,
});

const updateQuotesLikesFailure = e => ({
  type: UPDATE_QUOTE_LIKES_FAILURE,
  error: e,
});

const requestUpdateQuotesLikes = () => ({
  type: REQUEST_UPDATE_QUOTES_LIKES,
});

const receiveUpdateQuotesLikes = quote => ({
  type: UPDATE_QUOTE_LIKES,
  quote
});

// eslint-disable-next-line import/prefer-default-export
export function fetchRandomQuote() {
  const endPoint = ENV.API.RANDOM_QUOTE;

  return (dispatch) => {
    dispatch(requestRandomQuote());
    return callApi(endPoint)
      .then((response) => {
        if (response.error) {
          dispatch(receiveRandomQuoteFailed(response.error));
        } else {
          dispatch(receiveRandomQuote(response));
        }
      });
  };
}

export function updateQuotesLikes(quoteId, likes) {
  const endpoint = `${ENV.API.QUOTES}/${quoteId}`;
  return (dispatch) => {
    dispatch(requestUpdateQuotesLikes());
    return callApi(endpoint, 'PATCH', undefined, {likes})
      .then((response) => {
        if (response.error) {
          dispatch(updateQuotesLikesFailure(response.error));
        } else {
          dispatch(receiveUpdateQuotesLikes(response));
        }
      });
  };
}

// eslint-disable-next-line import/prefer-default-export
export function fetchQuotes(option, value) {
  let endPoint = ENV.API.QUOTES;
  if (option === 'random') {
    endPoint = `${endPoint}?random=${value}`;
  }
  return (dispatch) => {
    dispatch(requestQuotes());
    return callApi(endPoint)
      .then((response) => {
        if (response.error) {
          dispatch(receiveQuotesFailed(response.error));
        } else {
          dispatch(receiveQuotes(response));
        }
      });
  };
}
