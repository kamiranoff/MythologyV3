import { Animated } from 'react-native';

class Animations {
  static spring(springValue, setValue, toValue, friction) {
    springValue.setValue(setValue);
    Animated.spring(
      springValue,
      {
        toValue: toValue,
        friction: friction,
      }
    ).start();
  }
}

export default Animations;
