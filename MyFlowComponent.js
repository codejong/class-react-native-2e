// @flow

import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  foo: number,
  bar?: string,
};

type State = {
  count: number,
};

class MyFlowComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  render() {
    // this.props.doesNotExist;
    return (
      <View>
        <Text>{this.props.bar}</Text>
      </View>
    );
  }
}

export default MyFlowComponent;
