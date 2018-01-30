import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
 } from 'react-native';
import Button from './Button';
import QuizView from './QuizView';

const QuizStart = ({
  onPressStart,
}) => {
  return (
    <QuizView>
      <Button
        onPress={onPressStart}
        title="挑戦"
        buttonColor="orange"
      />
    </QuizView>
  );
}
export default QuizStart;
