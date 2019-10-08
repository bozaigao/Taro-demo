import React from 'react';
/**
 * @filename index.tsx
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/25
 * @Description: 进度条展示
 */
import { Component } from "@tarojs/taro-rn";
import { Image, Text, View } from "@tarojs/components-rn";
import styles, { absB, absL, absR, absT, bgColor, color, commonStyles, fSize, h, radiusA, w, zIndex } from "../../utils/style";
import { styleAssign } from "../../utils/datatool";
//@ts-ignore
import iconLoadingBg from '../../assets/ico_loading_bg.png';
//@ts-ignore
import gifLoading from '../../assets/loading.gif';
import MyModal from "../my-modal/index.rn";
export let Loading = class Loading extends Component {
  render() {
    return <MyModal>
        <View style={styleAssign([styles.uac, styles.ujc, styles.upa, zIndex(1000), absL(0), absB(0), absR(0), absT(0), bgColor('rgba(0,0,0,0.3)')])}>
          <View style={styleAssign([styles.uac, styles.ujc, w(120), h(120)])}>
            <Image src={iconLoadingBg} style={styleAssign([w(120), h(120), radiusA(5)])} />
            <View style={styleAssign([styles.upa, styles.uac, absL(10), absT(25), bgColor(commonStyles.whiteColor)])}>
              <Image style={styleAssign([w(100), h(40)])} src={gifLoading} />
              <Text style={styleAssign([color(commonStyles.textGrayColor), fSize(14)])}>加载中...</Text>
            </View>
          </View>
        </View>
      </MyModal>;
  }
};
export default Loading;