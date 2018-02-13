import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

it('renders without crashing', () => {
  const tmpFuc = () => {};
  const rendered = renderer.create(<Button
    title="title"
    onPress={tmpFuc}
  />).toJSON();
  expect(rendered).toBeTruthy();
});
