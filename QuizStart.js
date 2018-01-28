import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
 } from 'react-native';
import Button from './Button';

const QuizStart = ({
  onPressStart,
}) => {
  return (
    <View style={styles.container}>
        <Button
          onPress={onPressStart}
          title="挑戦"
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
});
export default QuizStart;
