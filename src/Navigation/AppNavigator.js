import Tabs from './Tabs';
import FigureScreen from '../screens/FIgureScreen/FIgureScreen';
import { createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Tabs:  Tabs,
  FigureScreen: FigureScreen
});

export default AppNavigator;
