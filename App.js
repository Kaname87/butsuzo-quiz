import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  // Alert,
  // TouchableOpacity,
 } from 'react-native';
import AnswerOptionsContainer from './AnswerOptionsContainer';
import Quiz from './Quiz';
//import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class App extends Component {
    
  render() {
    
    return (
      <View style={styles.container}>
        <Quiz />
        <AnswerOptionsContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // container: {
  //  flex: 1,
  //  paddingTop: 22
  // },
});
