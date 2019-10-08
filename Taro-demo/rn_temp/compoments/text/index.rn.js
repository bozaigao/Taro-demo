import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { Text } from 'react-native';
let CustomText = class CustomText extends Component {
  render() {
    let { customStyle, onClick, numberOfLines, children } = this.props;
    return <Text onPress={onClick} style={customStyle} numberOfLines={numberOfLines}>
        {children}
      </Text>;
  }
};
export { CustomText as default };