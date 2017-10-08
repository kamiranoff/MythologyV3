import React from 'react';
import { Text, StyleSheet, TouchableHighlight, View, Image } from 'react-native';
import { BACKGROUND, FONT, TEXT } from '../../../../constants/colors';
import { Label } from '../../../../components/Label/Label';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: BACKGROUND.BACKGROUND_2,
    justifyContent: 'flex-end',
    height: 80,
  },
  name: {
    fontFamily: FONT.FAMILY.FONT_FAMILY_1,
    fontSize: FONT.SIZE.M,
    color: TEXT.TEXT_2,
  },
  subContainer: {
    flex: 1,
  },
  labelStyle: {
    marginBottom: 10,
  },
  description: {
    fontSize: FONT.SIZE.XS,
  },
});

const FigureListItem = ({ figure, onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    style={styles.container}
    underlayColor={BACKGROUND.BACKGROUND_1}
  >
    <View style={styles.subContainer}>
      <View style={{}}>
        <Text style={styles.name}>
          {figure.name}
        </Text>
        <Label category={figure.category} labelStyle={styles.labelStyle} />
      </View>
      <Text numberOfLines={1} style={styles.description}>
        {figure.shortDescription}
      </Text>
    </View>

  </TouchableHighlight>
);

FigureListItem.defaultProps = {
  figure: {
    images: {
      thumbnail: null
    }
  }
};

export default FigureListItem;
