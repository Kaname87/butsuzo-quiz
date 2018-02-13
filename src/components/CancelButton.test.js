import React from 'react';
import renderer from 'react-test-renderer';
import CancelButton from './CancelButton';

it('renders without crashing', () => {
  const tmpFuc = () => {};
  const rendered = renderer.create(
    <CancelButton
      onPress={tmpFuc}
    />
  ).toJSON();
  expect(rendered).toBeTruthy();
});
