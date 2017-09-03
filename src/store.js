import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: true, // takes a Boolean or optionally a Function that receives `getState` function for accessing current store state and `action` object as parameters. Returns `true` if the log group should be collapsed, `false` otherwise.
  duration: true, // print the duration of each action?
  timestamp: true, // print the timestamp with each action?
  level: 'log', // console's level
  diff: true,// (alpha) show diff between states?
});

const store = createStore(
  applyMiddleware(logger)
);

export default store;

