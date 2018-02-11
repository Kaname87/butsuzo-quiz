import React from 'react';
import Quiz from './Quiz';

import renderer from 'react-test-renderer';

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
