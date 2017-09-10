import callApi from '../../util/apiCaller';
import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  RECEIVE_BOOKS_FAILURE,
} from '../actionConstants';
import getEnvironment from '../../constants/environment';

const ENV = getEnvironment();

const requestBooks = () => ({
  type: REQUEST_BOOKS,
});

const receiveBooks = books => ({
  type: RECEIVE_BOOKS,
  books,
});

const receiveBooksFailed = e => ({
  type: RECEIVE_BOOKS_FAILURE,
  error: e,
});

// eslint-disable-next-line import/prefer-default-export
export function fetchBooks(filter) {
  let endPoint = ENV.API.BOOKS;
  if (filter) {
    const searchTerm = filter.trim().toUpperCase();
    endPoint = `${endPoint}?search=${searchTerm}`;
  }

  return (dispatch) => {
    dispatch(requestBooks());
    return callApi(endPoint)
      .then((response) => {
        if (response.error) {
          dispatch(receiveBooksFailed(response.error));
        } else {
          dispatch(receiveBooks(response));
        }
      });
  };
}
