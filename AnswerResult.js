import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
 } from 'react-native';
 
const AnswerResult = ({
  showResult,
  isCorrect,
}) => {
  let resultText = <Text></Text>; // blank 
  if (showResult) {
    resultText = isCorrect ? 
      <Text style={styles.correct}>○</Text> 
    : <Text style={styles.wrong}>×</Text>;
  }

  return (
    <View style={styles.container}>
      {resultText}
    </View>
  )
 }

export default AnswerResult;

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    marginBottom: 25,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
  },
  correct: {
    color: 'limegreen', 
    fontSize: 30,
    fontWeight: 'bold',
  },
  wrong: {
    color: 'red', 
    fontSize: 35,
    fontWeight: 'bold',
  },
});
