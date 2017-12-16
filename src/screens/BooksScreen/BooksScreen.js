import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TEXT, BACKGROUND, FONT } from '../../constants/colors';

const book = require('../../assets/images/book/book.png');

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

class BooksScreen extends Component {
  static navigationOptions = {
    title: 'Books',
    tabBarLabel: 'Books',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={book}
        style={[styles.icon]}
      />
    ),
  };

  render() {
    return (
      <View
        style={styles.container}
      >
        <Text style={styles.title}>Books</Text>
      </View>
    );
  }
}

export default BooksScreen;
