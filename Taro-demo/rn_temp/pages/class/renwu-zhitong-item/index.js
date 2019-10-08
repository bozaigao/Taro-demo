import React from 'react';
/**
 * @filename index.tsx
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/10/7
 * @Description: 任务直通组件
 */
import { PureComponent } from "@tarojs/taro-rn";
import { absL, absT, bgColor, color, commonStyles, default as styles, fSize, h, ml, mt, pa, radiusA, screenWidth, w, wRatio } from "../../../utils/style";
import { Image, Text, View } from "@tarojs/components-rn";
import TouchableButton from "../../../compoments/touchable-button/index.rn";
import { styleAssign } from "../../../utils/datatool";
//@ts-ignore
import icoRwzt1 from '../../../assets/ico_rwzt_1.png';
//@ts-ignore
import icoRwzt2 from '../../../assets/ico_rwzt_2.png';
//@ts-ignore
import icoRwzt3 from '../../../assets/ico_rwzt_3.png';
//@ts-ignore
import icoRwzt4 from '../../../assets/ico_rwzt_4.png';
export let RwztItem = class RwztItem extends PureComponent {
  constructor() {
    super(...arguments);

    this.filterBg = () => {
      let { item } = this.props;
      switch (item) {
        case 1:
          return icoRwzt1;
        case 2:
          return icoRwzt2;
        case 3:
          return icoRwzt3;
        case 4:
          return icoRwzt4;
        default:
          return icoRwzt1;
      }
    };

    this.filterBtnColor = () => {
      let { item } = this.props;
      switch (item) {
        case 1:
          return commonStyles.colorTheme;
        case 2:
          return '#29a6fe';
        case 3:
          return '#ff7f1e';
        case 4:
          return '#2f54eb';
        default:
          return commonStyles.colorTheme;
      }
    };
  }
  render() {
    return <TouchableButton onClick={() => {
      // navigation.navigate('TaskDetailUser');
    }}>
        <View style={styleAssign([styles.ujc, styles.uac, styles.udr, wRatio(100), mt(20)])}>
          <View style={styleAssign([{ width: screenWidth() - 30 }, h(161), pa(15)])}>
            <Image style={styleAssign([{ width: screenWidth() - 30 }, h(161), styles.upa, absT(0), absL(0)])} src={this.filterBg()} mode={'scaleToFill'} />
            <View style={styleAssign([styles.uac, styles.udr, styles.ujb])}>
              <View style={styleAssign([styles.uac, styles.udr])}>
                <Image style={styleAssign([w(16), h(16), ml(7)])} src={require('../../../assets/ico_huanzhe.png')} />
                <Text style={styleAssign([fSize(12), color('#333333'), ml(5)])}>患者教育</Text>
              </View>
              <Image style={styleAssign([w(7), h(12), ml(7)])} src={require('../../../assets/ico_next.png')} />
            </View>
            <View style={styleAssign([mt(17)])}>
              <Text style={styleAssign([fSize(18), color('#333333')])}>氨酚伪麻片的推广任务</Text>
              <View style={styleAssign([styles.uac, styles.udr, mt(4)])}>
                <Text style={styleAssign([fSize(18), color('#d93721')])}>+50积分</Text>
                <Text style={styleAssign([fSize(14), color('#999999'), ml(8)])}>积分商城换购好礼</Text>
              </View>
            </View>
            <View style={styleAssign([styles.uac, styles.udr, styles.ujb, mt(10)])}>
              <View style={styleAssign([styles.uac, styles.udr])}>
                <Text style={styleAssign([styles.uac, styles.udr, fSize(14), color('#999999')])}>
                  发布自:<Text style={styleAssign([color('#333333')])}>平台推荐</Text>
                </Text>
              </View>
              <TouchableButton customStyle={styleAssign([w(95), h(29), radiusA(15), styles.uac, styles.ujc, bgColor(this.filterBtnColor())])}>
                <Text style={styleAssign([color(commonStyles.whiteColor), fSize(12)])}>立刻完成</Text>
              </TouchableButton>
            </View>
          </View>
        </View>
      </TouchableButton>;
  }
};
export default RwztItem;