import React from 'react';
import MyFlowComponent from './MyFlowComponent';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer
    .create(<MyFlowComponent foo={1} bar={'hello'} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
