import React from 'react';
import renderer from 'react-test-renderer';
import AnswerResult from './AnswerResult';

it('renders without crashing', () => {
  const rendered = renderer.create(
    <AnswerResult
      showResult={false}
      isCorrect={false}
    />).toJSON();
  expect(rendered).toBeTruthy();
});
