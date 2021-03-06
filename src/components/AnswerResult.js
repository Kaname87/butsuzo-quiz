import React from 'react';
import PropTypes from 'prop-types';
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
    marginRight: 5,
  },
  wrong: {
    color: 'red',
    fontSize: 45,
    fontWeight: 'bold',
    marginRight: 5,
  },
});

const AnswerResult = ({
  showResult,
  isCorrect,
}) => {
  if (!showResult) {
    return (
      <View style={styles.container}>
        <Text />
      </View>
    );
  }

  let resultText = null;

  if (isCorrect) {
    resultText = <Text style={styles.correct}>○</Text>;
  } else {
    resultText = <Text style={styles.wrong}>×</Text>;
  }

  return (
    <View style={styles.container}>
      {resultText}
    </View>
  );
};

export default AnswerResult;

AnswerResult.propTypes = {
  showResult: PropTypes.bool.isRequired,
  isCorrect: PropTypes.bool.isRequired,
};
