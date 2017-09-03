import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TEXT, BACKGROUND, FONT_SIZE } from '../../constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND.BACKGROUND_1,
  },
  title: {
    fontSize: FONT_SIZE.FONT_SIZE_XXXL,
    margin: 10,
    color: TEXT.TEXT_2,
    textAlign: 'center'
  }
});

class QuotesScreen extends Component {
  static navigationOptions = {
    title: 'Quotes',
  };

  render() {
    return (
      <View
        style={styles.container}
      >
        <Text style={styles.title}>Greek Mythology Encylopedia</Text>
      </View>
    );
  }
}

export default QuotesScreen;
