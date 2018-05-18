import React, { Component } from 'react';
import { FlatList, Animated, View } from 'react-native';

const pantheonEmpty = require('../../../../assets/images/pantheon/pantheon-empty.png');

import FigureListItem from './FigureListItem';
import ListHeader from '../../../../components/ListHeader/ListHeader';
import DIMENSIONS from '../../../../constants/dimensions';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class FigureList extends Component {

  renderHeader = (imagewidth, imageHeight, headerHeight) => {
    return (
      <ListHeader
        image={pantheonEmpty}
        containerStyle={{ height: headerHeight }}
        imageStyle={{ width: imagewidth, height: imageHeight }} />
    );
  }

  renderItem = ({ item }) => (
    <FigureListItem
      figure={item}
      onPress={this.handleItemPressed}
    />
  );

  constructor() {
    super();
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  handleItemPressed = (item) => (
    this.props.onPressItem(item));


  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [DIMENSIONS.WINDOW_HEIGHT - 110, 100],
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
        renderItem={this.renderItem}
        keyExtractor={item => item._id}
        ListHeaderComponent={this.renderHeader(imageWidth, imageHeight, headerHeight)}
        scrollEventThrottle={16}
        ItemSeparatorComponent={() => (
          <View style={{ backgroundColor: '#eee', height: 1 }} />)}
      />
    );
  }
}

export default FigureList;
