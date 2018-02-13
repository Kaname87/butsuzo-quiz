import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
} from 'react-native';
import QuizStart from './QuizStart';
import QuizOnGoing from './QuizOnGoing';
import QuizReview from './QuizReview';

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
  },
});

const Quiz = ({
  onPressStart,
  onPressQuit,
  onPressShowReview,
  onSelectAnswer,
  onPressNext,
  isCorrect,
  showReview,
  showResult,
  lastQuestionNumber,
  correctNumber,
  isStarted,
  isFinished,
  name,
  place,
  currentQuestionNumber,
  answerOptions,
}) => {
  let main = null;
  if (showReview) {
    main = (
      <QuizReview
        onPressStart={onPressStart}
        lastQuestionNumber={lastQuestionNumber}
        correctNumber={correctNumber}
      />
    );
  } else if (isStarted) {
    main = (
      <QuizOnGoing
        isFinished={isFinished}
        name={name}
        place={place}
        currentQuestionNumber={currentQuestionNumber}
        lastQuestionNumber={lastQuestionNumber}
        answerOptions={answerOptions}
        onSelectAnswer={onSelectAnswer}
        showResult={showResult}
        isCorrect={isCorrect}
        onPressQuit={onPressQuit}
        onPressShowReview={onPressShowReview}
        onPressNext={onPressNext}
      />
    );
  } else {
    main = (
      <QuizStart
        onPressStart={onPressStart}
      />
    );
  }

  return (
    <View style={styles.container}>
      {main}
    </View>
  );
};

export default Quiz;

Quiz.defaultProps = {
  lastQuestionNumber: 0,
  correctNumber: 0,
  currentQuestionNumber: 0,
  isCorrect: false,
  showReview: false,
  showResult: false,
  name: '',
  place: '',
  answerOptions: [],
};
Quiz.propTypes = {
  onPressStart: PropTypes.func.isRequired,
  onPressQuit: PropTypes.func.isRequired,
  onPressShowReview: PropTypes.func.isRequired,
  onPressNext: PropTypes.func.isRequired,
  onSelectAnswer: PropTypes.func.isRequired,
  lastQuestionNumber: PropTypes.number,
  correctNumber: PropTypes.number,
  currentQuestionNumber: PropTypes.number,
  isCorrect: PropTypes.bool,
  showReview: PropTypes.bool,
  showResult: PropTypes.bool,
  isStarted: PropTypes.bool.isRequired,
  isFinished: PropTypes.bool.isRequired,
  name: PropTypes.string,
  place: PropTypes.string,
  answerOptions: PropTypes.array,
};
