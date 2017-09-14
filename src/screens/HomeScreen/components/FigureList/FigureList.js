import React, { Component } from 'react';
import { FlatList, Animated, Dimensions } from 'react-native';

const pantheon = require('../../../../assets/images/pantheon/pantheon.png');

import FigureListItem from './FigureListItem';
import ListHeader from '../../../../components/ListHeader/ListHeader';

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
      outputRange: [Dimensions.get('window').height - 110, 200],
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
        renderItem={({ item }) => <FigureListItem figure={item} />}
        keyExtractor={(item, index) => item._id}
        ListHeaderComponent={() => (
          <ListHeader image={pantheon} containerStyle={{ height: headerHeight }}
                      imageStyle={{ height: imageHeight, width: imageWidth }} />
        )}
        scrollEventThrottle={16}
        ListFooterComponent={() => (
          <ListHeader image={pantheon} />
        )}
      />
    );
  }
}

export default FigureList;
