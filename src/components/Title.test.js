import React from 'react';
import renderer from 'react-test-renderer';
import Title from './Title';

it('renders without crashing', () => {
  const rendered = renderer.create(
    <Title />
  ).toJSON();
  expect(rendered).toBeTruthy();
});
