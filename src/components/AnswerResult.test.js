import React from 'react';
import renderer from 'react-test-renderer';
import AnswerResult from './AnswerResult';

it('renders without crashing', () => {
  const tmpFuc = () => {};
  const rendered = renderer.create(
    <AnswerResult
      showResult={false}
      isCorrect={false}
      isFinished={false}
      onPressNext={tmpFuc}
    />).toJSON();
  expect(rendered).toBeTruthy();
});
