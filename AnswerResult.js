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
    flex: 1,
    marginTop:20,
    flexDirection:'row',
    justifyContent: 'center',
    height: 10,
    borderBottomWidth:1,
    alignItems:'center',
    borderColor:'rgba(0,0,0,0.1)'
  },
  correct: {
    color: 'limegreen', 
    fontSize: 20,
    fontWeight: 'bold',
  },
  wrong: {
    color: 'red', 
    fontSize: 25,
    fontWeight: 'bold',
  },
});
