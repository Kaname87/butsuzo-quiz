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

const maxQuestion = 3;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      correctNumber: 0,
      showResult: false,
      isCorrect: false,
      quizSet: this.getNewQuizSet(0),
      isFinished: false,
    }

    this._onPressButton = this._onPressButton.bind(this);
  }

  getNewQuizSet(idx) {
    return data.quizSet[idx] || data.quizSet[0];
  }

  _checkAnswer(id) {
    
    return this.state.quizSet.answer === id;
  }

  _onPressButton(id){
    const isCorrect = this._checkAnswer(id);

    this.setState(prevState => {
      if (prevState.number === this.state.number) {
        const newState = {
          number: prevState.number + 1,
          showResult: true,
          isFinished: prevState.number === maxQuestion,
        }

        if (isCorrect) {
          return {
            ...newState,
            correctNumber: prevState.correctNumber + 1,
            isCorrect: true,
          }
        } else {
          return newState;
        }
      }
    })

    // 若干遅くよみとる
    setTimeout(() => {
      this.setState(prevState =>({
        quizSet: this.getNewQuizSet(prevState.number),
        showResult: false,
      }))}, 1000
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.progressBar}>
          <Text>Prpgress Bar</Text>
          <Text>{this.state.number}/{maxQuestion}</Text>
        </View>
        <Quiz 
          name={this.state.quizSet.name}
          place={this.state.quizSet.place}
          number={this.state.number}
        />
        {this.state.showResult &&
          <View style={styles.progressBar}>
            <Text>{this.state.isCorrect ? "Correct" : "Wrong"} </Text>
          </View>
        }
        <AnswerOptionsContainer 
          anserOptions={this.state.quizSet.anserOptions}
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
