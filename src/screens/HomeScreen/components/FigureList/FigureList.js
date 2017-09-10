import React from 'react';
import { FlatList, Text, View, Image } from 'react-native';

const pantheon = require('../../../../assets/images/pantheon/pantheon.png');

import FigureListItem from './FigureListItem';
import { BACKGROUND, FONT } from '../../../../constants/styles';


const FigureList = ({ greeks }) => (
  <FlatList
    data={greeks}
    renderItem={({ item }) => <FigureListItem figure={item} />}
    keyExtractor={(item, index) => item._id}
    ListHeaderComponent={() => (
      <View style={{ alignItems: 'center', backgroundColor: BACKGROUND.BACKGROUND_3, padding: 40, }}>
        <Image source={pantheon} />
        <Text style={{ marginTop: 15, fontSize: 32, fontFamily: FONT.FAMILY.FONT_FAMILY_1 }}>Pantheon</Text>
      </View>)}
  />
);

export default FigureList;
