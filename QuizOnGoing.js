import React, { Component } from 'react';
import AnswerOptionsList from './AnswerOptionsList';
import Question from './Question';
import Header from './Header';
import ProgressBar from './ProgressBar';
import AnswerResult from './AnswerResult';
import Button from './Button';
import QuizView from './QuizView';

export default class QuizOnGoing extends Component {

  _calcProgress(isFinished,  currentQuestionNumber, lastQuestionNumber) {
    return isFinished ? 100 : ((currentQuestionNumber -1) / lastQuestionNumber) * 100;
  }

  render() {
    const button = this.props.isFinished ?
      <Button
        onPress={this.props.onPressShowReview}
        title="結果確認"
        buttonColor="orange"
      />
    : <Button
        onPress={this.props.onPressQuit}
        title="中止"
    />

    return (
      <QuizView>
        <Question
          name={this.props.name}
          place={this.props.place}
          currentQuestionNumber={this.props.currentQuestionNumber}
        />
        <AnswerResult
          showResult={this.props.showResult}
          isCorrect={this.props.isCorrect}
        />
        <AnswerOptionsList
          answerOptions={this.props.answerOptions}
          onSelectAnswer={this.props.onSelectAnswer}
          showResult={this.props.showResult}
        />
        <ProgressBar
          progress={this._calcProgress(
            this.props.isFinished,
            this.props.currentQuestionNumber,
            this.props.lastQuestionNumber
          )}
        />
        {button}
      </QuizView>
    );
  }
};

// export default QuizOnGoing;
