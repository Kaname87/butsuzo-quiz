import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  correct: {
    color: 'limegreen',
    fontSize: 40,
    fontWeight: 'bold',
  },
  wrong: {
    color: 'red',
    fontSize: 45,
    fontWeight: 'bold',
  },
});

const AnswerResult = ({
  showResult,
  isCorrect,
}) => {
  let resultText = <Text />; // blank
  if (showResult) {
    resultText = isCorrect ?
      <Text style={styles.correct}>○</Text> :
      <Text style={styles.wrong}>×</Text>;
  }

  return (
    <View style={styles.container}>
      {resultText}
    </View>
  );
};

export default AnswerResult;
