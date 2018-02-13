import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import QuizView from './QuizView';
import Title from './Title';

const QuizStart = ({
  onPressStart,
}) => (
  <QuizView>
    <Title />
    <Button
      onPress={onPressStart}
      title="挑戦"
      buttonColor="royalblue"
    />
  </QuizView>
);
export default QuizStart;

QuizStart.propTypes = {
  onPressStart: PropTypes.func.isRequired,
};
