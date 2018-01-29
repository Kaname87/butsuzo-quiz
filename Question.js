import React from 'react';
import {
  StyleSheet,
  Text,
  View,
 } from 'react-native';
 
const Question = ({
   currentQuestionNumber,
   name,
   place,
 }) => {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionNumber}>第{currentQuestionNumber}門</Text>
      <Text style={styles.questionText}>{place}の{name}はどれ？</Text>
    </View> 
  )
 }

export default Question;

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    marginBottom: 10,
  },
  questionNumber: {
    fontSize: 15,
  },
  questionText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
