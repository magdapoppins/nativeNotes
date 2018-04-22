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
  Alert,
  FlatList,
  Animated,
  TouchableOpacity, 
  Image
} from 'react-native';
import { getBatteryLevel } from 'react-native-device-info';
import RNFS from 'react-native-fs';
import {StackNavigator} from 'react-navigation';


export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    const value = new Animated.Value(20)
    this.state = {name: '', battery: '', files: [], value: value}
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
    let splitted = result.split('\n');
    this.state.files = splitted
    console.warn('file is now ', this.state.files)
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
    const rand = Math.round(Math.random()*400)
    const anim = Animated.timing(this.state.value, {
      toValue: rand
    })
    anim.start()
}
stopThis = () => { 
  Animated.timing(this.state.value, {
    toValue: 20
  }).start()
}

  render() {
    return (
      <View style={styles.container}>
        {/* <Image source={require('./assets/mandel.jpg')}/>  */}
        <Text style={styles.welcome}>
          Welcome to Adventure!
        </Text>
        <TouchableOpacity onPressIn={this.onPress} onPressOut={this.stopThis} >
          <Animated.View 
          style={[styles.square, {
            width: this.state.value, 
            height: this.state.value,
          }]}/>
        </TouchableOpacity>
        <FlatList 
          data={this.state.files} 
          renderItem={({ item }) => <Text>{item}</Text>} 
        />
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
  square: {
    height: 80,
    width: 80, 
    backgroundColor: 'green',
    borderRadius: 6
  }
});
