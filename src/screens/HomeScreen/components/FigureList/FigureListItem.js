import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { BACKGROUND } from '../../../../constants/styles';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: BACKGROUND.BACKGROUND_1,
  }
});

const FigureListItem = ({ figure }) => (
  <View style={styles.container}>
    <Text>
      {figure.name}
    </Text>
  </View>
);

export default FigureListItem;
