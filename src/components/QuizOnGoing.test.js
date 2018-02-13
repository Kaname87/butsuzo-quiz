import React from 'react';
import renderer from 'react-test-renderer';
import QuizOnGoing from './QuizOnGoing';


it('renders without crashing', () => {
  const tmpFuc = () => {};
  const rendered = renderer.create(<QuizOnGoing
    answerOptions={[]}
    onPressQuit={tmpFuc}
    onPressShowReview={tmpFuc}
    onSelectAnswer={tmpFuc}
    onPressNext={tmpFuc}
    showResult={false}
    isCorrect={false}
    isFinished={false}
  />).toJSON();
  expect(rendered).toBeTruthy();
});
