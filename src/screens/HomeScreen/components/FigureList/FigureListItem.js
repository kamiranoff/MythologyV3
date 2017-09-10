import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 15,
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
