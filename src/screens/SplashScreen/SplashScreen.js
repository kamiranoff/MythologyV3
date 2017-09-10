import React from 'react';
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';
import { TEXT, BACKGROUND, FONT } from '../../constants/styles';

const logo = require('../../assets/images/logo/logo.png');

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
    fontSize: FONT.SIZE.FONT_SIZE_XXXL,
    margin: 10,
    color: TEXT.TEXT_2,
    textAlign: 'center',
    fontFamily: FONT.FAMILY.FONT_FAMILY_1,
  },
});

const SplashScreen = ({ spring, springValue }) => (
  <View
    style={styles.container}
  >
    <TouchableWithoutFeedback
      onPress={spring}
    >
      <Animated.Image style={[styles.image, { transform: [{ scale: springValue }] }]} source={logo} />
    </TouchableWithoutFeedback>
    <Text style={styles.title}>Greek Mythology Encylopedia</Text>
  </View>
);


export default SplashScreen;
