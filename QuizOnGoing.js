import React from 'react';
import {
  Text,
  View,
 } from 'react-native';
 import AnswerOptionsList from './AnswerOptionsList';
 import Question from './Question';
 import Header from './Header';
 import ProgressBar from './ProgressBar';
 import AnswerResult from './AnswerResult';
 import Button from './Button';
 import QuizView from './QuizView';

const QuizOnGoing = ({
  name,
  place,
  currentQuestionNumber,
  answerOptions,
  onSelectAnswer,
  showResult,
  isCorrect,
  onPressQuit,
  onPressShowReview,
  lastQuestionNumber,
  isFinished,
}) => {
  const button = isFinished ?
    <Button
      onPress={onPressShowReview}
      title="結果確認"
      buttonColor="orange"
    />
  : <Button
      onPress={onPressQuit}
      title="中止"
  />

  return (
    <QuizView>
      <Question
        name={name}
        place={place}
        currentQuestionNumber={currentQuestionNumber}
      />
      <AnswerResult
        showResult={showResult}
        isCorrect={isCorrect}
      />
      <AnswerOptionsList
        answerOptions={answerOptions}
        onSelectAnswer={onSelectAnswer}
        showResult={showResult}
      />
      <ProgressBar
        lastQuestionNumber={lastQuestionNumber}
        currentQuestionNumber={currentQuestionNumber}
        isFinished={isFinished}
      />
      {button}
    </QuizView>
  );
}

export default QuizOnGoing;
