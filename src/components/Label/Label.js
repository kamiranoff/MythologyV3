import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import Helpers from '../../util/Helpers';
import styles from './styles';

const Label = ({ category, labelStyle, withBackground }) => {

  const typeViewStyleClass = category.replace(/ |\//g, '_');
  const typeTextStyleClass = `${category.replace(/ |\//g, '_')}_text`;
  return (
    <View
      style={[
        styles.listElementTypeContainer,
        styles[typeViewStyleClass],
        labelStyle,
        withBackground && styles[typeViewStyleClass]]
      }
    >
      <Text
        style={[styles.listElementType, styles[typeTextStyleClass]]}
      >
        {Helpers.capitalizeFirstLetter(category)}
      </Text>
    </View>
  );
};

Label.propTypes = {
  category: PropTypes.string.isRequired,
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};

export { Label };
