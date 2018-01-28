import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
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
      correctNumber: 0,
    }
    
    this._onPressButton = this._onPressButton.bind(this);
  }
  
  _onPressButton(id){
    Alert.alert(`ID is ${id}`);
  }
        
    
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.progressBar}>
          <Text>Prpgress Bar</Text>
        </View>
        <Quiz 
          name={data.quizSet.name}
          place={data.quizSet.place}
          number={this.state.number}
        />
        <View style={styles.progressBar}>
          <Text>Result</Text>
        </View>
        <AnswerOptionsContainer 
          anserOptions={data.quizSet.anserOptions}
          onPressButton={this._onPressButton}
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
  progressBar: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // container: {
  //  flex: 1,
  //  paddingTop: 22
  // },
});
