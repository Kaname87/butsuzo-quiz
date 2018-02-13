import React from 'react';
import renderer from 'react-test-renderer';
import ProgressBar from './ProgressBar';

it('renders without crashing', () => {
  const rendered = renderer.create(
    <ProgressBar
      progress={50}
    />
  ).toJSON();
  expect(rendered).toBeTruthy();
});
