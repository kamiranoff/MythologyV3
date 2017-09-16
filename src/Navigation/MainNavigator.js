import { StackNavigator } from 'react-navigation';

import Tabs from './Tabs';
import SplashScreenContainer from '../screens/SplashScreen/SplashScreenContainer';
import FigureScreen from '../screens/FIgureScreen/FIgureScreen';

const MainNavigator = StackNavigator({
  SplashScreen: { screen: SplashScreenContainer },
  Tabs: { screen: Tabs },
  FigureScreen: { screen: FigureScreen }
}, {
  headerMode: 'screen'
});

export default MainNavigator;
