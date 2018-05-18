import { createSwitchNavigator } from 'react-navigation';
import SplashScreenContainer from '../screens/SplashScreen/SplashScreenContainer';
import AppNavigator from './AppNavigator';

const MainNavigator =  createSwitchNavigator({
  SplashScreen: SplashScreenContainer,
  App: AppNavigator,
});

export default MainNavigator;
