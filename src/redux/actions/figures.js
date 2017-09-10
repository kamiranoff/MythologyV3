import callApi from '../../util/apiCaller';
import {
  REQUEST_ALL_GREEKS,
  RECEIVE_ALL_GREEKS,
  RECEIVE_ALL_GREEKS_FAILURE,

} from '../actionConstants';
import getEnvironment from '../../constants/environment';

const ENV = getEnvironment();

const requestAllGreeks = () => ({
  type: REQUEST_ALL_GREEKS,
});

const receiveAllGreeks = greeks => ({
  type: RECEIVE_ALL_GREEKS,
  greeks,
});

const receiveAllGreeksFailed = e => ({
  type: RECEIVE_ALL_GREEKS_FAILURE,
  error: e,
});

// eslint-disable-next-line import/prefer-default-export
export function fetchAllGreeks(filter) {
  let endPoint = ENV.API.GREEKS;
  if (filter) {
    const searchTerm = filter.trim().toUpperCase();
    endPoint = `${endPoint}?search=${searchTerm}`;
  }

  return (dispatch) => {
    dispatch(requestAllGreeks());
    return callApi(endPoint)
      .then((response) => {
        if (response.error) {
          dispatch(receiveAllGreeksFailed(response.error));
        } else {
          dispatch(receiveAllGreeks(response));
        }
      });
  };
}
