import React from 'react';
import renderer from 'react-test-renderer';
import Question from './Question';

it('renders without crashing', () => {
  const rendered = renderer.create(<Question
    name="test name"
    place="test place"
  />).toJSON();
  expect(rendered).toBeTruthy();
});
