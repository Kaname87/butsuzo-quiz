import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from './Button';
import QuizView from './QuizView';

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
  },
  textBold: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const QuizReview = ({
  onPressStart,
  correctNumber,
  lastQuestionNumber,
}) => (
  <QuizView>
    <View style={styles.textContainer}>
      <Text style={styles.text}>
        <Text style={styles.textBold}>{lastQuestionNumber}</Text>
        <Text>問中</Text>
        <Text style={styles.textBold}>{correctNumber}</Text>
        <Text>問正解</Text>
      </Text>
    </View>
    <Button
      onPress={onPressStart}
      title="再挑戦"
      buttonColor="royalblue"
    />
  </QuizView>
);

export default QuizReview;

QuizReview.propTypes = {
  onPressStart: PropTypes.func.isRequired,
  correctNumber: PropTypes.number.isRequired,
  lastQuestionNumber: PropTypes.number.isRequired,
};
