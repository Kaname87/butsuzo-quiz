import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  // Alert,
  // TouchableOpacity,
 } from 'react-native';
 
const Quiz = ({
   number,
   name,
   place,
 }) => {
  return (
    <View style={styles.quizContainer}>
      <Text style={styles.quizNumber}>第{number}門</Text>
      <Text style={styles.quizText}>{place}の{name}は？</Text>
    </View> 
  )
 }
// 
export default Quiz;

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
  },
  quizNumber: {
    fontSize:15,
  },
  quizText: {
    fontSize:30,
    fontWeight: 'bold',
  },
});
