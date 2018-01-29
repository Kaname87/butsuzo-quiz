import React from 'react';
import {
  StyleSheet,
  Text,
  View,
 } from 'react-native';
import Button from './Button';
import QuizView from './QuizView';

const QuizFinished = ({
  onPressStart,
  correctNumber,
  lastQuizNumber,
}) => {
  return (
    <QuizView>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {lastQuizNumber}問中{correctNumber}問正解
        </Text>
      </View>
      <Button
        onPress={onPressStart}
        title="再挑戦"
      />
    </QuizView>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
  }
});
export default QuizFinished;