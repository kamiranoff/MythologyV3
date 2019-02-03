import { createBottomTabNavigator } from 'react-navigation';

import PantheonStack from '../screens/PantheonScreen/PantheonStack';
import QuotesScreen from '../screens/QuotesScreen/QuotesScreen';
import BooksScreen from '../screens/BooksScreen/BooksScreen';
import { Image, StyleSheet } from "react-native";
import React from "react";
const home = require('../assets/images/pantheon/pantheon.png');

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const Tabs = createBottomTabNavigator({
  Pantheon: {screen: PantheonStack},
  Quotes: {screen: QuotesScreen},
  Books: {screen: BooksScreen},

}, {
  order: ['Pantheon', 'Quotes', 'Books'],
  initialRouteName: 'Pantheon',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      if (routeName === 'Pantheon') {
        return (<Image
          source={home}
          style={[styles.icon]}
        />);

      }

      // You can return any component that you like here!
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});

export default Tabs;
