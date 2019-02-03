import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import SplashScreenContainer from '../screens/SplashScreen/SplashScreenContainer';
import AppNavigator from './AppNavigator';

console.log(createAppContainer);

const RootStack =  createSwitchNavigator({
  SplashScreen: SplashScreenContainer,
  App: AppNavigator,
});

const MainNavigator = createAppContainer(RootStack);
export default MainNavigator;
