import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { Label } from '../../components/Label/Label';
import DIMENSIONS from "../../constants/dimensions";
import { FONT } from "../../constants/colors";

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

const FigureScreen = ({navigation}) => {
  const {
    images,
    name,
    greekName,
    romanName,
    description,
    category,
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
        <Label
          category={category}
          labelStyle={styles.label}
        />
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

const styles = StyleSheet.create({
  imageContainer: {
    height: DIMENSIONS.WINDOW_HEIGHT - 200,
  },
  image: {
    resizeMode: 'cover',
    height: DIMENSIONS.WINDOW_HEIGHT - 200,
  },
  descriptionContainer: {
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  name: {
    paddingTop: 20,
    textAlign: 'center',
    fontSize: FONT.SIZE.L,
    fontFamily: FONT.FAMILY.FONT_FAMILY_1,
    flex: 1,
  },
  label: {
    alignItems: 'center',
  },
  greekName: {
    fontStyle: 'italic',
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 15,
  },

});


export default FigureScreen;
