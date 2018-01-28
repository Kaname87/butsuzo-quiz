import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
 } from 'react-native';

import Header from './Header';
import Main from './Main';


import data from './data.json'

const maxQuestion = 3;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 1,
      correctNumber: 0,
      showResult: false,
      isCorrect: false,
      quizSet: this.getNewQuizSet(0),
      isFinished: true,
      isStarted: false,
    }

    this._onSelectAnswer = this._onSelectAnswer.bind(this);
    this._onPressStart = this._onPressStart.bind(this);
    this._onPressQuit = this._onPressQuit.bind(this);
  }

  getNewQuizSet(idx) {
    return data.quizSet[idx] || data.quizSet[0];
  }

  _checkAnswer(id) {
    //Alert.alert(`correct ${this.state.quizSet.answer} Amd select ${id}`);
    return this.state.quizSet.answer === id;
  }

  _onPressStart() {
    this.setState(prevState => {
      if (!prevState.isStarted || prevState.isFinished) {
        return {
          isStarted: true,
          number: 1,
          correctNumber: 0,
          showResult: false,
          isCorrect: false,
          quizSet: this.getNewQuizSet(0),
          isFinished: false,
        };
      }
    });
  }

  _onPressQuit() {
    this.setState(prevState => {
      if (prevState.isStarted) {
        return {
          isStarted: false,
        };
      }
    });
  }

  _onSelectAnswer(id){
    const isCorrect = this._checkAnswer(id);

    this.setState(prevState => {
      if (prevState.number === this.state.number && !prevState.showResult) {
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
          return {
            ...newState,
            isCorrect: false,
          }
        }
      }
    })

    // 若干遅くよみとる TODO: 問題がおわったらよまない
    setTimeout(() => {
      this.setState(prevState =>({
        quizSet: this.getNewQuizSet(prevState.number - 1),
        showResult: false,
      }))}, 1000
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Main
          isStarted={this.state.isStarted}
          isFinished={this.state.isFinished}
          name={this.state.quizSet.name}
          place={this.state.quizSet.place}
          number={this.state.number}
          isCorrect={this.state.isCorrect}
          correctNumber={this.state.correctNumber}
          maxQuestion={maxQuestion}
          onPressStart={this._onPressStart}
          onPressQuit={this._onPressQuit}
          answerOptions={this.state.quizSet.answerOptions}
          onSelectAnswer={this._onSelectAnswer}
          showResult={this.state.showResult}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
});
