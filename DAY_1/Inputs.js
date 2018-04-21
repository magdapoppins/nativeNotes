import React, { Component } from 'react';
import { Text, View, StyleSheet, Switch, TextInput } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {text: '', flag: false}
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
        style={styles.input}
        value={this.state.text}
        onChangeText={
          text => this.setState(  
          ({text: text.toUpperCase() }))
        } 
        placeholder={"Enter stuff here."} />
        <Switch value={this.state.flag} onValueChange={
          val => this.setState(prev => ({text: prev.text, flag: val}))
        } tintColor={'pink'}/>
        <Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});
