import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';

import reducer from './redux/reducers';

const configureStore = () => {
  let store;

  if (__DEV__) {
    const logger = createLogger({
      collapsed: true, // takes a Boolean or optionally a Function that receives `getState` function for accessing current store state and `action` object as parameters. Returns `true` if the log group should be collapsed, `false` otherwise.
      duration: true, // print the duration of each action?
      timestamp: true, // print the timestamp with each action?
      level: 'log', // console's level
      diff: true,// (alpha) show diff between states?
    });
    store = createStore(
      reducer,
      applyMiddleware(thunk, promise, logger),
    );
  } else {
    store = createStore(
      reducer,
      applyMiddleware(thunk, promise),
    );
  }
  return store;
};

export default configureStore;

