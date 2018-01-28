import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  // Alert,
  // TouchableOpacity,
 } from 'react-native';
 
const Quiz = ({
   number=0,
   name='阿弥陀仏',
   place='阿弥陀仏',
 }) => {
  return (
    <View style={styles.quizContainer}>
      <Text style={styles.quizNumber}>第{number}門</Text>
      <Text style={styles.quizText}>{name}は？</Text>
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
