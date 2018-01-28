import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  //Button,
 } from 'react-native';
import AnswerOptionsContainer from './AnswerOptionsContainer';
import Quiz from './Quiz';
import Header from './Header';
import ProgressBar from './ProgressBar';
import AnswerResult from './AnswerResult';
import Button from './Button';

// import data from './data.json'

// const maxQuestion = 3;

export default class Main extends Component {
  render() {
    const main = this.props.isStarted ? 
      <View style={styles.container}>
        <ProgressBar />
        <Quiz
          name={this.props.name}
          place={this.props.place}
          number={this.props.number}
        />
        <AnswerOptionsContainer
          answerOptions={this.props.answerOptions}
          onPressButton={this.props.onPressButton}
        />
        <AnswerResult
          showResult={this.props.showResult}
          isCorrect={this.props.isCorrect}
        />
        <Button
          onPress={this.props.onPressQuit}
          title="中止"
          color="black"
          accessibilityLabel="中止"
        />
      </View>
    : <View style={styles.container}>
        <Button
          onPress={this.props.onPressStart}
          title="挑戦"
          color="black"
          accessibilityLabel="挑戦"
        />
      </View>

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
