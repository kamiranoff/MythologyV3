import { TabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import QuotesScreen from '../screens/QuotesScreen/QuotesScreen';
import { TEXT } from '../constants/styles';

const Tabs = TabNavigator({
  Home: { screen: HomeScreen },
  Quotes: { screen: QuotesScreen },

}, {
  tabBarOptions: {
    activeTintColor: TEXT.LINK_2,
    showIcon: true
  },
});

export default Tabs;
