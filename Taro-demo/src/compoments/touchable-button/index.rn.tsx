import Taro from '@tarojs/taro'
import {TouchableOpacity} from 'react-native';
import {Component} from "react";

interface Props {
  customStyle?: any;
  onClick?: any;
  children?: any;
  className?: string;
  activeOpacity?: number;
}

export default class TouchableButton extends Component<Props> {

  render() {
    let {customStyle, onClick, activeOpacity, children} = this.props;


    return (
      <TouchableOpacity onPress={onClick}
                        style={customStyle}
                        activeOpacity={activeOpacity}>
        {children}
      </TouchableOpacity>
    )
  }
}
