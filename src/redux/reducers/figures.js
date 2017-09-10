import {
  REQUEST_ALL_GREEKS,
  RECEIVE_ALL_GREEKS,
  RECEIVE_ALL_GREEKS_FAILURE,
} from '../actionConstants';

const initialState = {
  greeks: [],
  loading: true,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {

    case REQUEST_ALL_GREEKS:
      return {
        ...state,
        loading: true,
      };

    case RECEIVE_ALL_GREEKS:
      return {
        ...state,
        greeks: action.greeks,
        loading: false,
      };

    case RECEIVE_ALL_GREEKS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
