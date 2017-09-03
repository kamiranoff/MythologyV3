import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';
import { TEXT, BACKGROUND, FONT_SIZE } from '../../constants/styles';

const helmet = require('../../assets/images/helmet/helmet.png');
const logo = require('../../assets/images/logo/logo.png');
const logov2 = require('../../assets/images/logo/logov2.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND.BACKGROUND_1,
  },
  image: {
    alignSelf: 'center',
  },
  title: {
    fontSize: FONT_SIZE.FONT_SIZE_XXXL,
    margin: 10,
    color: TEXT.TEXT_2,
    textAlign: 'center'
  }
});

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Mythology',
  };


  constructor(props) {
    super(props);
    this.springValue = new Animated.Value(1);
  }

  spring = () => {
    this.springValue.setValue(0.8);
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1
      }
    ).start();
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <TouchableWithoutFeedback
          onPress={this.spring}
        >
          <Animated.Image style={[styles.image, { transform: [{ scale: this.springValue }] }]} source={logo} />
        </TouchableWithoutFeedback>
        <Text style={styles.title}>Greek Mythology Encylopedia</Text>
      </View>
    );
  }
}

export default HomeScreen;
