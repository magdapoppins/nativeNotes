import { AppRegistry } from 'react-native';
import App from './App';
import { StackNavigator } from 'react-navigation';

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

AppRegistry.registerComponent('Adventure', () => App);
