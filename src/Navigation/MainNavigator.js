import { StackNavigator } from 'react-navigation';

import Tabs from './Tabs';
import SplashScreenContainer from '../screens/SplashScreen/SplashScreenContainer';

const MainNavigator = StackNavigator({
  SplashScreen: {screen: SplashScreenContainer},
  Home: { screen: Tabs },
}, {
  headerMode:'screen'
});

export default MainNavigator;
