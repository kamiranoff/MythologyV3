import { TabNavigator } from 'react-navigation';

import PantheonScreen from '../screens/PantheonScreen/PantheonScreen';
import QuotesScreen from '../screens/QuotesScreen/QuotesScreen';
import { TEXT } from '../constants/colors';

const Tabs = TabNavigator({
  Pantheon: { screen: PantheonScreen },
  Quotes: { screen: QuotesScreen },

}, {
  tabBarOptions: {
    activeTintColor: TEXT.LINK_2,
    showIcon: true
  },
});

export default Tabs;
