import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
 } from 'react-native';
 import AnswerOptionsContainer from './AnswerOptionsContainer';
 import Quiz from './Quiz';
 import Header from './Header';
 import ProgressBar from './ProgressBar';
 import AnswerResult from './AnswerResult';
 import Button from './Button';

const QuizOnGoing = ({
  name,
  place,
  number,
  answerOptions,
  onPressButton,
  showResult,
  isCorrect,
  onPressQuit,
}) => {
  return (
    <View style={styles.container}>
      <ProgressBar />
      <Quiz
        name={name}
        place={place}
        number={number}
      />
      <AnswerOptionsContainer
        answerOptions={answerOptions}
        onPressButton={onPressButton}
      />
      <AnswerResult
        showResult={showResult}
        isCorrect={isCorrect}
      />
      <Button
        onPress={onPressQuit}
        title="中止"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
  },
});
export default QuizOnGoing;
