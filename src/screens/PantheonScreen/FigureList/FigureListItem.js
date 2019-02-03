import React from 'react';
import { Text, StyleSheet, TouchableHighlight, View } from 'react-native';
import { BACKGROUND, FONT, TEXT } from '../../../constants/colors';
import { Label } from '../../../components/Label/Label';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: BACKGROUND.BACKGROUND_2,
    justifyContent: 'flex-end',
    height: 80,
  },
  names: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    fontFamily: FONT.FAMILY.FONT_FAMILY_1,
    fontSize: FONT.SIZE.M,
    color: TEXT.TEXT_2,
    marginRight: 10,
  },
  subContainer: {
    flex: 1,
  },
  labelStyle: {
    marginBottom: 10,
  },
  romanName: {
    fontSize: FONT.SIZE.XS,
    fontStyle: 'italic'
  },
});

const FigureListItem = ({figure, onPress}) => (
  <TouchableHighlight
    onPress={() => onPress(figure)}
    style={styles.container}
    underlayColor={BACKGROUND.BACKGROUND_1}
  >
    <View style={styles.subContainer}>
      <View style={styles.names}>
        <Text style={styles.name}>
          {figure.name}
        </Text>
        <Text numberOfLines={1} style={styles.romanName}>
          {figure.romanName}
        </Text>
      </View>
      <Label category={figure.category} labelStyle={styles.labelStyle}/>

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
