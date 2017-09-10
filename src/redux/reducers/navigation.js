import MainNavigator from '../../Navigation/MainNavigator';

const navReducer = (state, action) => {
  const newState = MainNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export default navReducer;
