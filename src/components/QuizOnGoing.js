import React from 'react';
import PropTypes from 'prop-types';
import AnswerOptionsList from './AnswerOptionsList';
import Question from './Question';
import ProgressBar from './ProgressBar';
import AnswerResult from './AnswerResult';
import Button from './Button';
import QuizView from './QuizView';

const QuizOnGoing = ({
  isCorrect,
  isFinished,
  onPressShowReview,
  onPressQuit,
  onSelectAnswer,
  onPressNext,
  currentQuestionNumber,
  lastQuestionNumber,
  answerOptions,
  showResult,
  name,
  place,
}) => {
  const calcProgress = (isFinished, currentQuestionNumber, lastQuestionNumber) => (
    isFinished ? 100 : ((currentQuestionNumber - 1) / lastQuestionNumber) * 100
  );

  const button = isFinished ?
    (
      <Button
        onPress={onPressShowReview}
        title="結果確認"
        buttonColor="orange"
      />
    ) :
    (
      <Button
        onPress={onPressQuit}
        title="中止"
      />
    );

  return (
    <QuizView>
      <ProgressBar
        progress={calcProgress(
          isFinished,
          currentQuestionNumber,
          lastQuestionNumber
        )}
      />
      <AnswerResult
        isFinished={isFinished}
        showResult={showResult}
        isCorrect={isCorrect}
        onPressNext={onPressNext}
      />
      <Question
        name={name}
        place={place}
      />
      <AnswerOptionsList
        answerOptions={answerOptions}
        onSelectAnswer={onSelectAnswer}
        showResult={showResult}
      />
      {button}
    </QuizView>
  );
};

export default QuizOnGoing;

QuizOnGoing.propTypes = {
  answerOptions: PropTypes.array.isRequired,
  onPressQuit: PropTypes.func.isRequired,
  onPressShowReview: PropTypes.func.isRequired,
  onSelectAnswer: PropTypes.func.isRequired,
  onPressNext: PropTypes.func.isRequired,
  showResult: PropTypes.bool.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  isFinished: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  currentQuestionNumber: PropTypes.number.isRequired,
  lastQuestionNumber: PropTypes.number.isRequired,
};
