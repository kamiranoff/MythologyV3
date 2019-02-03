import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import SplashScreenContainer from '../screens/SplashScreen/SplashScreenContainer';
import Tabs from "./Tabs";

console.log(createAppContainer);

const RootStack =  createSwitchNavigator({
  SplashScreen: SplashScreenContainer,
  Tabs,
});

const MainNavigator = createAppContainer(RootStack);
export default MainNavigator;
