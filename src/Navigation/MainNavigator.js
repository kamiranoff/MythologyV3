import { StackNavigator } from 'react-navigation';

import Tabs from './Tabs';

const MainNavigator = StackNavigator({
  Home: { screen: Tabs },
});

export default MainNavigator;
