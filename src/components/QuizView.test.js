import React from 'react';
import renderer from 'react-test-renderer';
import {
  Text,
} from 'react-native';
import QuizView from './QuizView';

it('renders without crashing', () => {
  const component = React.createElement(Text, [], ['Hello world']);
  const rendered = renderer.create(
    <QuizView
      children={component}
    />
  ).toJSON();
  expect(rendered).toBeTruthy();
});
