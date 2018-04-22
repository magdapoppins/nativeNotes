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

export default class OtherScreen extends React.Component {
    static navigationOptions = {
      title: 'Other',
    };
  
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
        </View>
      );
    }
  }