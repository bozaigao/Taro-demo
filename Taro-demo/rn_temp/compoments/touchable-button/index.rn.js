import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Component } from "react";
let TouchableButton = class TouchableButton extends Component {
  render() {
    let { customStyle, onClick, activeOpacity, children } = this.props;
    return <TouchableOpacity onPress={onClick} style={customStyle} activeOpacity={activeOpacity}>
        {children}
      </TouchableOpacity>;
  }
};
export { TouchableButton as default };