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

type Props = {};
export default class App extends Component<Props> {
constructor(props) {
  super(props);
  this.state = {name: '', battery: '', files: []}
}

componentDidMount(){

  RNFS.readDir(RNFS.MainBundlePath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
  .then((result) => {
    console.warn('GOT RESULT', result);
    this.setState({files: result});
    console.warn('FILES IS NOW ', this.state.files)
    // stat the first file
    return Promise.all([RNFS.stat(result[0].path), result[0].path]);
  })
  .then((statResult) => {
    if (statResult[0].isFile()) {
      // if we have a file, read it
      return RNFS.readFile(statResult[1], 'utf8');
    }

    return 'no file';
  })
  .then((contents) => {
    // log the file contents
    console.log(contents);
  })
  .catch((err) => {
    console.log(err.message, err.code);
  });

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
