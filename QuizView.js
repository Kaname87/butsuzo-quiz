import React from 'react';
import {
  StyleSheet,
  View,
 } from 'react-native';

const QuizView = ({
  children,
}) => {
  return (
    <View style={styles.container}>
      {children}
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
export default QuizView;
