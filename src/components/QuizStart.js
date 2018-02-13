import React from 'react';
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