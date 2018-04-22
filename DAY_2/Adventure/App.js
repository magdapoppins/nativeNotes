/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Button,
  Alert
} from 'react-native';
import { getBatteryLevel } from 'react-native-device-info';
import RNFS from 'react-native-fs';


export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {name: '', battery: '', files: [], file: ''}
  }
  
  componentDidMount(){
    
    const downloadFileOptions = {
    fromUrl: 'https://staltz.com/g.txt',          // URL to download file from
    toFile: RNFS.DocumentDirectoryPath + '/test.txt'        // supported on Android and iOS 
    }

  RNFS.downloadFile(downloadFileOptions).promise.then(res => {
    console.warn(res)
  })
  

  RNFS.readFile(RNFS.DocumentDirectoryPath + '/test.txt') // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
  .then((result) => {
    console.warn('GOT RESULT', result);
    this.state.file = {file: result}
  })

  AsyncStorage.getItem('myName').then(name => {
    this.setState({name: name});
  })

  // setInterval(() => {
  //   getBatteryLevel().then(num => {
  //     this.setState()
  //   })
  // }, 1000)
}

onPress = () => {
  AsyncStorage.setItem('myName', 'Clicker');

  AsyncStorage.multiSet([
    ['myName', 'Magda'],
    ['myAge', '21'],
    ['myFood', 'pizza']
  ])
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Adventure!
        </Text>
        <Button title="Click me." onPress={Alert.alert("Hi!")} />
        <Text style={styles.instructions}>
        {RNFS.DocumentDirectoryPath}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: 'yellow',
    marginBottom: 5,
    fontSize: 20
  },
});
