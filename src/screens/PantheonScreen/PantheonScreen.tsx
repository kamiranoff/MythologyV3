import React, { Component } from 'react';
import FigureListContainer from './FigureList/FigureListContainer';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <FigureListContainer navigation={this.props.navigation}/>
    );
  }
}

export default HomeScreen;
