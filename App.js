import React, { Component } from 'react';
import { StyleSheet, Text, View,
  // Alert,
  // TouchableOpacity,
 } from 'react-native';
import AnswerOptionsContainer from './AnswerOptionsContainer';
//import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class App extends Component {
    
  render() {
    
    return (
      <AnswerOptionsContainer />
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
