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

import data from './data.json'

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      number: 0,
    }
  }
    
  render() {
    return (
      <View style={styles.container}>
        <Quiz 
          name={data.quizSet.name}
          place={data.quizSet.place}
          number={this.state.number}
        />
        <AnswerOptionsContainer 
          anserOptions={data.quizSet.anserOptions}
        />
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
