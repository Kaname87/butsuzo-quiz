import React from 'react';
import renderer from 'react-test-renderer';
import AnswerOptionsList from './AnswerOptionsList';

it('renders without crashing', () => {
  const tmpFuc = () => {};
  const rendered = renderer.create(
    <AnswerOptionsList
      showResult={false}
      onSelectAnswer={tmpFuc}
      answerOptions={[]}
    />).toJSON();
  expect(rendered).toBeTruthy();
});
