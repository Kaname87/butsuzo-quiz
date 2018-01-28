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
import Header from './Header';
import ProgressBar from './ProgressBar';
import AnswerResult from './AnswerResult';

// import data from './data.json'

// const maxQuestion = 3;

export default class Main extends Component {
  
  render() {
    return (
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#f7f7f7',
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
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
