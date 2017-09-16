import React from 'react';
import { Text, StyleSheet, TouchableHighlight, View } from 'react-native';
import { BACKGROUND, FONT, TEXT } from '../../../../constants/colors';
import { Label } from '../../../../components/Label/Label';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: BACKGROUND.BACKGROUND_2,
    justifyContent: 'flex-end',
    height: 60,
  },
  text: {
    fontFamily: FONT.FAMILY.FONT_FAMILY_1,
    fontSize: FONT.SIZE.FONT_SIZE_S,
    color: TEXT.TEXT_2,
    flex: 2,
  }
});

const FigureListItem = ({ figure, onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    style={styles.container}
    underlayColor={BACKGROUND.BACKGROUND_1}
  >
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>
      <Text style={styles.text}>
        {figure.name}
      </Text>
      <Label category={figure.category} labelStyle={{ alignSelf: 'flex-start', justifyContent: 'flex-end', }} />
    </View>

  </TouchableHighlight>
);

export default FigureListItem;
