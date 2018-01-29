import React from 'react';
import {
  Text,
  View,
 } from 'react-native';
 import AnswerOptionsList from './AnswerOptionsList';
 import Quiz from './Quiz';
 import Header from './Header';
 import ProgressBar from './ProgressBar';
 import AnswerResult from './AnswerResult';
 import Button from './Button';
 import QuizView from './QuizView';

const QuizOnGoing = ({
  name,
  place,
  number,
  answerOptions,
  onSelectAnswer,
  showResult,
  isCorrect,
  onPressQuit,
  onPressShowReview,
  lastQuizNumber,
  isFinished,
}) => {
  const button = isFinished ?
    <Button
      onPress={onPressShowReview}
      title="結果確認"
    />
  : <Button
      onPress={onPressQuit}
      title="中止"
  />

  return (
    <QuizView>
      <ProgressBar 
        lastQuizNumber={lastQuizNumber}
        number={number}
        isFinished={isFinished}
      />
      <Quiz
        name={name}
        place={place}
        number={number}
      />
      <AnswerOptionsList
        answerOptions={answerOptions}
        onSelectAnswer={onSelectAnswer}
        showResult={showResult}
      />
      <AnswerResult
        showResult={showResult}
        isCorrect={isCorrect}
      />
      {button}
    </QuizView>
  );
}

export default QuizOnGoing;
