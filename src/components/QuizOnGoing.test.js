import React from 'react';
import QuizOnGoing from './QuizOnGoing';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const tmpFuc = () => {};
  const rendered = renderer.create(<QuizOnGoing
    answerOptions={[]}
    onPressQuit={tmpFuc}
    onPressShowReview={tmpFuc}
    onSelectAnswer={tmpFuc}
    />).toJSON();
  expect(rendered).toBeTruthy();
});
