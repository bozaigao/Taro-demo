import Taro, {Component} from '@tarojs/taro'
import {Text} from "@tarojs/components";

interface Props {
  customStyle?: any;
  onClick?: any;
  numberOfLines?: number;
}

export default class CustomText extends Component<Props> {

  render() {
    let {customStyle, onClick, children} = this.props;


    return (
      <Text onClick={onClick}
            style={customStyle}>
        {children}
      </Text>
    )
  }
}
