import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './store';
import MainNavigator from './Navigation/MainNavigator';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App;
