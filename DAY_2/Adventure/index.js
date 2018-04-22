import { AppRegistry } from 'react-native';
import App from './App';
import { StackNavigator } from 'react-navigation';
import MainScreen from './MainScreen';
import OtherScreen from './OtherScreen';

export default StackNavigator(
  {
    Home: {
      screen: MainScreen,
    },
    Details: {
      screen: OtherScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

AppRegistry.registerComponent('Adventure', () => MainScreen);
