import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreen from './MainScreen';
import OtherScreen from './OtherScreen';

const App = StackNavigator(
  {
    Home: {
      screen: MainScreen,
    },
    Other: {
      screen: OtherScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

AppRegistry.registerComponent('Adventure', () => App);
