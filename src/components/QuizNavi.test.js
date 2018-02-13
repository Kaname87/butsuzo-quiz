import React from 'react';
import renderer from 'react-test-renderer';
import {
  Text,
} from 'react-native';
import QuizNavi from './QuizNavi';

it('renders without crashing', () => {
  const component = React.createElement(Text, [], ['Hello world']);
  const rendered = renderer.create(
    <QuizNavi
      children={component}
    />
  ).toJSON();
  expect(rendered).toBeTruthy();
});
