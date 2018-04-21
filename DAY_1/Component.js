import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class CountDown extends Component {
  constructor(props){
    super(props);
    this.state = { count: props.count };
  }  
  
  componentDidMount(){
    this.interval = setInterval(() => {
      this.setState(
        prevState =>
          prevState.count > 0 ? { count: prevState.count - 1 } : prevState,
      );
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  render() {
    return (
      <View>
        <Text style={styles.counter}>{this.state.count}</Text>
      </View>
    );
  }
}

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = { toggled: false };
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.info}>Anxiety App</Text>
        <CountDown count={50} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  info: {
    margin: 24,
    textAlign: 'center',
    color: 'pink',
  },
  counter: {
    fontsize: 30,
    alignSelf: 'center',
    color: 'red'
  }
});