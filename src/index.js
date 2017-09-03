import React, { Component } from 'react';
import { Provider } from 'react-redux';

import MainNavigator from './Navigation/MainNavigator';
import store from './store';

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
