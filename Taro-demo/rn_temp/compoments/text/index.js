import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { Text } from "@tarojs/components-rn";
let CustomText = class CustomText extends Component {
  render() {
    let { customStyle, onClick, children } = this.props;
    return <Text onClick={onClick} style={customStyle}>
        {children}
      </Text>;
  }
};
export { CustomText as default };