/**
 * @filename index.rn.tsx
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/16
 * @Description: 首页搜索栏
 */
import Taro, {PureComponent} from "@tarojs/taro";
import {Image, Text, View} from "@tarojs/components";
//@ts-ignore
import xinfengIcon from '../../../assets/ico_homepage_xinfeng.png';
//@ts-ignore
import searTopBg from '../../../assets/ico_homepage_search_bg.png';
//@ts-ignore
import searchGrayIcon from '../../../assets/ico_homepage_search_gray.png';
//@ts-ignore
import clockIcon from '../../../assets/ico_homepage_clock.png';
import TouchableButton from "../../../compoments/touchable-button";
import {styleAssign} from "../../../utils/datatool";
import styles, {absR, absT, bgColor, color, commonStyles, fSize, h, ml, radiusA, w, wRatio} from "../../../utils/style";


interface Props {
  leftClick?: any;
  rightClick?: any;
}

class HomeSearchTop extends PureComponent<Props> {
  render() {
    let {leftClick, rightClick} = this.props;

    return (
      <View style={styleAssign([styles.uac, styles.udr, wRatio(100),bgColor(commonStyles.whiteColor)])}>
        {/*信封*/}
        <View
          style={styleAssign([bgColor(commonStyles.whiteColor), wRatio(10), h(50), styles.uac, styles.ujc,])}
          onClick={() => {
            console.log('MessagePage');
            leftClick && leftClick();
            // navigation.navigate('MessagePage')
          }}>
          <View style={styleAssign([styles.uac, styles.ujc, w(25), h(25)])}>
            <Image
              src={xinfengIcon}
              mode='widthFix'
              style={styleAssign([w(20), h(18)])}
            />
            <View style={styleAssign([bgColor('#ec1313'), w(6), h(6), radiusA(3),
              styles.upa, absT(0), absR(0)])}/>
          </View>
        </View>
        {/*搜索框*/}
        <View style={styleAssign([wRatio(80), h(52), styles.uac, styles.ujc])}>
          <TouchableButton
            customStyle={styleAssign([wRatio(100), h(52)])}
            onClick={() => {
              console.log('SearchPage');
              // navigation.navigate('SearchPage')
            }}>
            <Image
              mode='scaleToFill'
              src={searTopBg}
              style={styleAssign([process.env.TARO_ENV === 'weapp' ? styles.uf1 : wRatio(100), h(52)])}
            />
          </TouchableButton>
          <View
            style={styleAssign([h(52), styles.ujc, styles.upa, styles.uac])}>
            <View style={styleAssign([styles.uac, styles.ujc, styles.udr, bgColor(commonStyles.whiteColor)])}>
              <Image src={searchGrayIcon}
                     mode='widthFix'
                     style={styleAssign([w(14), h(14)])}/>
              <Text
                style={styleAssign([color('#c6c6c6'), fSize(15), bgColor(commonStyles.transparent), ml(8)])}>搜索</Text>
            </View>
          </View>
        </View>
        {/*记录 */}
        <View
          style={styleAssign([wRatio(10), h(50), styles.uac, styles.ujc])}
          onClick={() => {
            rightClick && rightClick();
            console.log('LookHistoryPage')
            // navigation.navigate('LookHistoryPage')
          }}>
          <Image
            src={clockIcon}
            mode='aspectFill'
            style={styleAssign([w(20), h(18)])}
          />
        </View>
      </View>
    );
  }
}

export default HomeSearchTop;
