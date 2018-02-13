import React from 'react';
import renderer from 'react-test-renderer';
import QuizStart from './QuizStart';

it('renders without crashing', () => {
  const tmpFuc = () => {};
  const rendered = renderer.create(<QuizStart
    onPressStart={tmpFuc}
  />).toJSON();
  expect(rendered).toBeTruthy();
});
