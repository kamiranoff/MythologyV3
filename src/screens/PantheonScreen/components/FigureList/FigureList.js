import React, { Component } from 'react';
import { FlatList, Animated, View } from 'react-native';

const pantheonEmpty = require('../../../../assets/images/pantheon/pantheon-empty.png');

import FigureListItem from './FigureListItem';
import ListHeader from '../../../../components/ListHeader/ListHeader';
import DIMENSIONS from '../../../../constants/dimensions';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class FigureList extends Component {

  constructor() {
    super();
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [DIMENSIONS.WONDOW_HEIGHT - 110, 100],
      extrapolate: 'clamp',
    });
    const imageHeight = this.state.scrollY.interpolate({
      inputRange: [10, 140],
      outputRange: [250, 20],
      extrapolate: 'clamp',
    });
    const imageWidth = this.state.scrollY.interpolate({
      inputRange: [0, 140],
      outputRange: [250, 20],
      extrapolate: 'clamp',
    });
    return (
      <AnimatedFlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
        )}
        data={this.props.greeks}
        renderItem={({ item }) => <FigureListItem figure={item} onPress={() => this.props.onPressItem(item)} />}
        keyExtractor={(item, index) => item._id}
        ListHeaderComponent={() => (
          <ListHeader image={pantheonEmpty} containerStyle={{ height: headerHeight }}
                      imageStyle={{ height: imageHeight, width: imageWidth }} />
        )}
        scrollEventThrottle={16}
        ListFooterComponent={() => (
          <ListHeader image={pantheonEmpty} />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ backgroundColor: '#eee', height: 1 }} />)}
      />
    );
  }
}

export default FigureList;
