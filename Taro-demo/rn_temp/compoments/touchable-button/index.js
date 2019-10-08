import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View } from "@tarojs/components-rn";
let TouchableButton = class TouchableButton extends Component {
  render() {
    let { customStyle, onClick, children } = this.props;
    return <View style={customStyle} onClick={() => {
      if (onClick) {
        onClick();
      }
    }}>
        {children}
      </View>;
  }
};
export { TouchableButton as default };