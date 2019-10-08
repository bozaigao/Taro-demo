import React from 'react';
import { PureComponent } from 'react';
import { Modal } from 'react-native';
import { View } from "@tarojs/components-rn";
import { styleAssign } from "../../utils/datatool";
import { bgColor, default as styles, hRatio, wRatio } from "../../utils/style";
export let MyModal = class MyModal extends PureComponent {
  render() {
    return <Modal animationType="fade" transparent={true} visible={true} onRequestClose={() => {}}>
        <View style={styleAssign([wRatio(100), hRatio(100), styles.uac, styles.ujc, bgColor('rgba(0,0,0,0.3)')])}>
          {this.props.children}
        </View>
      </Modal>;
  }
};
export default MyModal;