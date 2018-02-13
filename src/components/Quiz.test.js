import React from 'react';
import renderer from 'react-test-renderer';
import Quiz from './Quiz';

it('renders without crashing', () => {
  const tmpFuc = () => {};
  const rendered = renderer.create(<Quiz
    onPressStart={tmpFuc}
    onPressQuit={tmpFuc}
    onPressShowReview={tmpFuc}
    onSelectAnswer={tmpFuc}
  />).toJSON();
  expect(rendered).toBeTruthy();
});
