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
  onSelectAnswer,
  showResult,
  isCorrect,
  onPressQuit,
  lastQuizNumber,
}) => {
  return (
    <View style={styles.container}>
      <ProgressBar 
        lastQuizNumber={lastQuizNumber}
        number={number}
      />
      <Quiz
        name={name}
        place={place}
        number={number}
      />
      <AnswerOptionsContainer
        answerOptions={answerOptions}
        onSelectAnswer={onSelectAnswer}
        showResult={showResult}
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
