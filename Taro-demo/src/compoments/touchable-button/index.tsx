import Taro from "@tarojs/taro";
import {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";

interface Props {
  customStyle?: any;
  onClick?: any;
  children?: any;
  activeOpacity?: number;
}

export default class TouchableButton extends Component<Props> {

  render() {
    let {customStyle, onClick, children} = this.props;

    return (
      <View style={customStyle} onClick={() => {
        if (onClick) {
          onClick();
        }
      }}>
        {
          children
        }
      </View>
    )
  }
}
