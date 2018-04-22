import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Button,
  Alert,
  FlatList,
  Animated,
  TouchableOpacity, 
  Image
} from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class MainScreen extends Component {
  static navigationOptions = {
      title: 'Home',
  }; 

  constructor(props) {
    super(props);
  }
  
  componentDidMount(){

  }

  render() {
    return (
      <View style={styles.container}>
          <Text>Main!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  }
});
