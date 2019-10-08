import React from 'react';
/**
 * @filename index.tsx
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/25
 * @Description: 我的页面列表模块
 */
import styles, { bb, bdColor, bgColor, color, commonStyles, fSize, h, ml, mr, pl, pr, w, wRatio } from "../../../utils/Style";
import { PureComponent } from "@tarojs/taro-rn";
import { Image, Text, View } from "@tarojs/components-rn";
import TouchableButton from "../../../compoments/touchable-button/index.rn";
import { styleAssign } from "../../../utils/datatool";
export let MinePageListItem = class MinePageListItem extends PureComponent {
  render() {
    let { iconL, iconLW, iconLH, title, rightComponent, noline, noNextIcon, onItemPress } = this.props;
    return <TouchableButton customStyle={[h(50), styles.uac, pl(15), pr(15), bgColor(commonStyles.whiteColor)]} onClick={() => {
      onItemPress();
    }}>
        <View style={styleAssign([styles.udr, styles.ujb, styles.uac, wRatio(100), h(50), bb(0.5), bdColor(noline ? commonStyles.transparent : '#e9eff4')])}>
          <View style={styleAssign([styles.udr, styles.uac])}>
            {iconL ? <Image src={iconL} style={styleAssign([w(iconLW), h(iconLH), mr(11)])} /> : null}
            <Text style={styleAssign([fSize(14), color(commonStyles.textBlackColor)])}>{title}</Text>
          </View>
          <View style={styleAssign([styles.udr, styles.uac])}>
            {rightComponent ? rightComponent : null}
            {noNextIcon ? null : <Image src={'../../../assets/ico_minepage_item_arrow.png'} style={styleAssign([w(6), h(10), ml(8)])} />}
          </View>
        </View>
      </TouchableButton>;
  }
};
export default MinePageListItem;