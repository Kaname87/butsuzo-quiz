import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import QuizStart from './QuizStart';
import QuizOnGoing from './QuizOnGoing';
import QuizReview from './QuizReview';

export default class Quiz extends Component {
  render() {
    let main = null;
    if (this.props.showReview) {
      main = (
        <QuizReview
          onPressStart={this.props.onPressStart}
          lastQuestionNumber={this.props.lastQuestionNumber}
          correctNumber={this.props.correctNumber}
        />
      );
    } else if (this.props.isStarted) {
        main = (
          <QuizOnGoing
            isFinished={this.props.isFinished}
            name={this.props.name}
            place={this.props.place}
            currentQuestionNumber={this.props.currentQuestionNumber}
            lastQuestionNumber={this.props.lastQuestionNumber}
            answerOptions={this.props.answerOptions}
            onSelectAnswer={this.props.onSelectAnswer}
            showResult={this.props.showResult}
            isCorrect={this.props.isCorrect}
            onPressQuit={this.props.onPressQuit}
            onPressShowReview={this.props.onPressShowReview}
          />
        );
    } else {
      main = (
        <QuizStart
          onPressStart={this.props.onPressStart}
        />
      );
    }

    return (
      <View style={styles.container}>
        {main}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
  },
});

Quiz.propTypes = {
  onPressStart: PropTypes.func.isRequired,
  onPressQuit: PropTypes.func.isRequired,
  onPressShowReview: PropTypes.func.isRequired,
  onSelectAnswer: PropTypes.func.isRequired,
};
