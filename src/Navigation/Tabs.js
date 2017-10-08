import { TabNavigator } from 'react-navigation';

import PantheonScreen from '../screens/PantheonScreen/PantheonScreen';
import QuotesScreen from '../screens/QuotesScreen/QuotesScreen';
import BooksScreen from '../screens/BooksScreen/BooksScreen';
import { TEXT } from '../constants/colors';

const Tabs = TabNavigator({
  Pantheon: { screen: PantheonScreen },
  Quotes: { screen: QuotesScreen },
  Books: { screen: BooksScreen },

}, {
  tabBarOptions: {
    activeTintColor: TEXT.LINK_2,
    showIcon: true
  },
});

export default Tabs;
