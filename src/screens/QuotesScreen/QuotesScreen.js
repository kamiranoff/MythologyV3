import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TEXT, BACKGROUND, FONT } from '../../constants/colors';

const quill = require('../../assets/images/quill/quill.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND.BACKGROUND_1,
  },
  title: {
    fontSize: FONT.SIZE.XXXL,
    margin: 10,
    color: TEXT.TEXT_2,
    textAlign: 'center',
    fontFamily: FONT.FAMILY.FONT_FAMILY_1,
  },
  icon: {
    width: 26,
    height: 26,
  },
});

class QuotesScreen extends Component {
  static navigationOptions = {
    title: 'Quotes',
    tabBarLabel: 'Quotes',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={quill}
        style={[styles.icon]}
      />
    ),
  };


  render() {
    return (
      <View
        style={styles.container}
      >
        <Text style={styles.title}>Quotes</Text>
      </View>
    );
  }
}

export default QuotesScreen;
