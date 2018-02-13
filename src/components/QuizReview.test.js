import React from 'react';
import renderer from 'react-test-renderer';
import QuizReview from './QuizReview';

it('renders without crashing', () => {
  const tmpFuc = () => {};
  const rendered = renderer.create(<QuizReview
    onPressStart={tmpFuc}
    correctNumber={1}
    lastQuestionNumber={3}
  />).toJSON();
  expect(rendered).toBeTruthy();
});
