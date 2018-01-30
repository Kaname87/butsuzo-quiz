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
      <Text>
        <Text style={styles.questionTextMain}>{place}</Text>
        <Text style={styles.questionTextSub}>の</Text>
        <Text style={styles.questionTextMain}>{name}</Text>
      </Text>
    </View>
  )
 }

export default Question;

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    alignItems: 'center',
  },
  questionNumber: {
    fontSize: 15,
    marginBottom: 5,
  },
  questionTextMain: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  questionTextSub: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
