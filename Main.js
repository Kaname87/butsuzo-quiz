import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
 } from 'react-native';

import QuizStart from './QuizStart';
import QuizOnGoing from './QuizOnGoing';
import QuizFinished from './QuizFinished';

export default class Main extends Component {
  render() {
    let main = null;
    if (this.props.isFinished) {
      main = (
        <QuizFinished
          onPressStart={this.props.onPressStart}
          maxQuestion={this.props.maxQuestion}
          correctNumber={this.props.correctNumber}
        />
      );
    } else if (this.props.isStarted) {
        main = (
          <QuizOnGoing
            name={this.props.name}
            place={this.props.place}
            number={this.props.number}
            maxQuestion={this.props.maxQuestion}
            answerOptions={this.props.answerOptions}
            onSelectAnswer={this.props.onSelectAnswer}
            showResult={this.props.showResult}
            isCorrect={this.props.isCorrect}
            onPressQuit={this.props.onPressQuit}
          />
        );
    } else {
      main = (
        <QuizStart 
          onPressStart={this.props.onPressStart}
        />
      );
    }

    return (
      <View style={styles.container}>
        {main}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
  },
});
