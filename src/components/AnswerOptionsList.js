import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
} from 'react-native';
import AnswerOption from './AnswerOption';

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

const optionHeight = 170;
const optionWidth = 170;

const makeAnswerOption = (option, onSelectAnswer, showResult) => {
  return (
    <AnswerOption
      key={option.id}
      onSelectAnswer={onSelectAnswer}
      showResult={showResult}
      width={optionHeight}
      height={optionWidth}
      id={option.id}
      uri={option.uri}
    />
  );
};

const AnswerOptionsList = ({
  onSelectAnswer,
  showResult,
  answerOptions,
}) => {
  const options = answerOptions.map(option => {
    return makeAnswerOption(option, onSelectAnswer, showResult);
  });

  return (
    <View style={styles.container}>
      {options}
    </View>
  );
};

export default AnswerOptionsList;

AnswerOptionsList.propTypes = {
  onSelectAnswer: PropTypes.func.isRequired,
  showResult: PropTypes.bool.isRequired,
  answerOptions: PropTypes.array.isRequired,
};
