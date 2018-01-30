import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
 } from 'react-native';
import Header from './Header';
import Quiz from './Quiz';
import data from './data.json'

const lastQuestionNumber = 3;

// 1 Quiz is 1 Question plus 4 Answer Options

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestionNumber: 1,
      correctNumber: 0,
      showResult: false,
      isCorrect: false,
      quizSet: this._getNewQuizSet(0),
      isFinished: false,
      isStarted: false,
      showReview: false,
    }

    this._onSelectAnswer = this._onSelectAnswer.bind(this);
    this._onPressStart = this._onPressStart.bind(this);
    this._onPressQuit = this._onPressQuit.bind(this);
    this._onPressShowReview = this._onPressShowReview.bind(this);
  }

  _getNewQuizSet(idx) {
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
          currentQuestionNumber: 1,
          correctNumber: 0,
          showResult: false,
          isCorrect: false,
          quizSet: this._getNewQuizSet(0),
          isFinished: false,
          showReview: false,
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

  _onPressShowReview() {
    this.setState(prevState => {
      if (!prevState.showReview) {
        return {
          showReview: true,
        };
      }
    });
  }

  _onSelectAnswer(id){
    const isCorrect = this._checkAnswer(id);

    this.setState(prevState => {
      if (
        prevState.currentQuestionNumber === this.state.currentQuestionNumber
        && prevState.currentQuestionNumber <= lastQuestionNumber
      ) {
        const showResult = true;
        let newState = null;
        if (prevState.currentQuestionNumber === lastQuestionNumber) {
          newState = {
            showResult,
            isFinished: true,
          }
        } else {
          newState = {
            showResult,
            currentQuestionNumber: prevState.currentQuestionNumber + 1,
          }
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

    if (this.state.currentQuestionNumber < lastQuestionNumber) {
      // 先に正誤の結果を見せるために、少しintervalを置いて次の問題を取得
      setTimeout(() => {
        this.setState(prevState =>({
          quizSet: this._getNewQuizSet(prevState.currentQuestionNumber - 1),
          showResult: false,
        }))}, 1000
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Quiz
          isStarted={this.state.isStarted}
          isFinished={this.state.isFinished}
          name={this.state.quizSet.name}
          place={this.state.quizSet.place}
          currentQuestionNumber={this.state.currentQuestionNumber}
          isCorrect={this.state.isCorrect}
          correctNumber={this.state.correctNumber}
          lastQuestionNumber={lastQuestionNumber}
          onPressStart={this._onPressStart}
          onPressQuit={this._onPressQuit}
          onPressShowReview={this._onPressShowReview}
          showReview={this.state.showReview}
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
