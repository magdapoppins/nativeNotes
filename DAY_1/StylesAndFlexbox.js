import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.yellow}>
          <View style={styles.blip}></View>
          <Text style={styles.user}>Firstname Lastname</Text>
        </View>
        <View style={styles.green}>
          <View style={styles.red}></View>
        </View>
        <View style={styles.yellow}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  yellow: {
    backgroundColor: 'yellow',
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    padding: 30,
    alignItems: 'flex-start'
  },
  user: {
    fontSize: 25,
    color: 'blue',
    paddingTop: 10,
  },
  blip: {
    height: 50,
    margin: 8,
    paddingRight: 10,
    width: 50,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  green: {
    flex:3,
    backgroundColor: 'green',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  red: {
    height: 100,
    width: 100,
    backgroundColor: 'red'
  }
});
