import { createStackNavigator } from 'react-navigation';
import PantheonScreen from './PantheonScreen';
import FigureScreen from '../FIgureScreen/FIgureScreen';

const PantheonStack = createStackNavigator({
  PantheonScreen,
  FigureScreen
});

export default PantheonStack;
