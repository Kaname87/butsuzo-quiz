import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
 } from 'react-native';

import Button from './Button';


const QuizFinished = ({
  onPressStart,
  correctNumber,
  lastQuizNumber,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {lastQuizNumber}問中{correctNumber}問正解
        </Text>
      </View>
      <Button
        onPress={onPressStart}
        title="再挑戦"
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
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
  }
});
export default QuizFinished;