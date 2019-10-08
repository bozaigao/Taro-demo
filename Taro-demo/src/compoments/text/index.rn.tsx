import Taro, {Component} from '@tarojs/taro'
import {Text} from 'react-native';

interface Props {
  customStyle?: any;
  onClick?: any;
  numberOfLines?: number;
}

export default class CustomText extends Component<Props> {

  render() {
    let {customStyle, onClick, numberOfLines, children} = this.props;


    return (
      <Text onPress={onClick}
            style={customStyle}
            numberOfLines={numberOfLines}
      >
        {children}
      </Text>
    )
  }
}
