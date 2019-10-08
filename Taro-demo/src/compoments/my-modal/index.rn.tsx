/**
 * @filename index.rn.tsx
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/18
 * @Description: 对Modal进行二次封装, 避免重复代码
 */
import Taro from "@tarojs/taro";
import {PureComponent} from 'react';
import {Modal} from 'react-native';
import {View} from "@tarojs/components";
import {styleAssign} from "../../utils/datatool";
import {bgColor, default as styles, hRatio, wRatio} from "../../utils/style";

export class MyModal extends PureComponent {

  render() {

    return (
      <Modal animationType="fade" transparent={true} visible={true} onRequestClose={() => {
      }}>
        <View style={styleAssign([wRatio(100), hRatio(100), styles.uac, styles.ujc, bgColor('rgba(0,0,0,0.3)')])}
        >
          {this.props.children}
        </View>
      </Modal>
    );
  }
}

export default MyModal;
