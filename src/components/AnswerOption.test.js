import React from 'react';
import renderer from 'react-test-renderer';
import AnswerOption from './AnswerOption';

it('renders without crashing', () => {
  const tmpFuc = () => {};
  const rendered = renderer.create(
    <AnswerOption
      showResult={false}
      onSelectAnswer={tmpFuc}
      id="1"
      width={200}
      height={100}
      uri="https://tmp"
    />).toJSON();
  expect(rendered).toBeTruthy();
});
