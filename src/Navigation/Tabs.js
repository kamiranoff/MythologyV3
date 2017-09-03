import { TabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import QuotesScreen from '../screens/QuotesScreen/QuotesScreen';

const Tabs = TabNavigator({
  Home: { screen: HomeScreen },
  Quotes: { screen: QuotesScreen },
});

export default Tabs;
