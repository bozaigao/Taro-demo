import React from 'react';
/**
 * @filename index.rn.tsx
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/18
 * @Description: 对Modal进行二次封装, 避免重复代码
 */
import { Component } from "@tarojs/taro-rn";
import TouchableButton from "../touchable-button/index.rn";
import { View } from "@tarojs/components-rn";
import styles, { absB, absL, absR, absT, bgColor, hRatio, wRatio, zIndex } from "../../utils/style";
import { styleAssign } from "../../utils/datatool";
export let MyModal = class MyModal extends Component {
  render() {
    return <View style={styleAssign([styles.udf, zIndex(1000), absT(0), absL(0), absR(0), absB(0)])}>
        <TouchableButton activeOpacity={1} onClick={() => {}} customStyle={styleAssign([styles.uac, styles.upa, absT(0), absL(0), bgColor('rgba(0,0,0,0.3)'), wRatio(100), hRatio(100), zIndex(1)])}>
          <View style={styleAssign([wRatio(100), hRatio(100), styles.uac, styles.ujc])}>
            {this.props.children}
          </View>
        </TouchableButton>
      </View>;
  }
};
export default MyModal;