import { StyleSheet } from 'react-native';
import DIMENSIONS from '../../constants/dimensions';
import { FONT } from '../../constants/colors';

export default StyleSheet.create({
  imageContainer: {
    height: DIMENSIONS.WONDOW_HEIGHT - 200,
  },
  image: {
    resizeMode: 'cover',
    height: DIMENSIONS.WONDOW_HEIGHT - 200,
  },
  descriptionContainer: {
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  name: {
    paddingTop: 20,
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: FONT.SIZE.L,
    fontFamily: FONT.FAMILY.FONT_FAMILY_1,
    flex: 1,
    height: 100,
  },
  greekName: {
    fontStyle: 'italic',
    paddingTop: 5,
    paddingBottom: 20,
    textAlign: 'center',
    fontSize: 15,
  },

});
