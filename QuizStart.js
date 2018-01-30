import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from './Button';
import QuizView from './QuizView';

const QuizStart = ({
  onPressStart,
}) => (
  <QuizView>
    <Button
      onPress={onPressStart}
      title="挑戦"
      buttonColor="orangered"
    />
  </QuizView>
);
export default QuizStart;
