import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';

import FigureListContainer from './components/FigureList/FigureListContainer';

const home = require('../../assets/images/pantheon/pantheon.png');

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Pantheon',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={home}
        style={[styles.icon]}
      />
    ),
  };

  render() {
    return (
      <FigureListContainer navigation={this.props.navigation} />
    );
  }
}

export default HomeScreen;
