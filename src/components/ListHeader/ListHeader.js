import React, { Component } from 'react';
import { Text, ImageBackground, Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import Animations from '../../animations/Animations';
import { BACKGROUND, FONT, TEXT } from '../../constants/colors';
import DIMENSIONS from '../../constants/dimensions';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: BACKGROUND.BACKGROUND_3,
    padding: 40,
    height: DIMENSIONS.WONDOW_HEIGHT,
    justifyContent: 'center',
    width: DIMENSIONS.WINDOW_WIDTH,
  },
  image: {},
  text: {
    marginTop: 15,
    fontSize: 32,
    fontFamily: FONT.FAMILY.FONT_FAMILY_1,
    color: TEXT.TEXT_6,
    backgroundColor: 'transparent',
  }
});

const springValue = new Animated.Value(0.9);


class ListHeader extends Component {
  render() {
    return (
      <Animated.View
        style={[styles.container, this.props.containerStyle]}

      >
        <ImageBackground
          source={this.props.image} style={styles.container} blurRadius={70}
        >
          <TouchableWithoutFeedback
            onPress={() => Animations.spring(springValue, 0.9, 1, 1)}
          >
            <Animated.Image source={this.props.image}
                            style={[styles.image, this.props.imageStyle, { transform: [{ scale: springValue }] }]} />
          </TouchableWithoutFeedback>
          <Text style={styles.text}>Pantheon</Text>
        </ImageBackground>

      </Animated.View>
    );
  }
}

export default ListHeader;
