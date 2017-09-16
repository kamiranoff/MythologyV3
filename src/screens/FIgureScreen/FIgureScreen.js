import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';
import styles from './styles';

const renderImage = (images) => {
  const imageFromApi = images.regular;
  if (imageFromApi) {
    return (
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: imageFromApi,
          }}
        />
      </View>
    );
  }
  return null;
};

const FigureScreen = ({ navigation }) => {

  const {
    images,
    name,
    greekName,
    romanName,
    description,
  } = navigation.state.params.item;
  return (
    <ScrollView>
      {renderImage(images)}
      <View style={styles.descriptionContainer}>
        <Text
          adjustsFontSizeToFit
          allowFontScaling
          style={styles.name}
        >{name}
        </Text>
        <Text style={styles.greekName}>
          {greekName}{romanName ? ` - ${romanName}` : null}
        </Text>
        <HTMLView
          value={description}
          stylesheet={htmlStyle}
        />
      </View>
    </ScrollView>
  );
};

const htmlStyle = StyleSheet.create({
  h1: {
    fontSize: 20,
  },
  h3: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  p: {
    margin: 0,
    padding: 0,
  },
  div: {
    lineHeight: 30,
  },
  blockquote: {
    marginLeft: 10,
    fontStyle: 'italic',
  },
});

export default FigureScreen;
