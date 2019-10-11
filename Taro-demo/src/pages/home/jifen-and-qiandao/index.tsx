/**
 * @filename index.rn.tsx
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/18
 * @Description: 积分和签到
 */
import Taro, {PureComponent} from "@tarojs/taro";
import {Image, Text, View} from "@tarojs/components";
//@ts-ignore
import iconJiFen from '../../../assets/ico_homepage_xinfeng.png';
//@ts-ignore
import iconQianDao from '../../../assets/ico_homepage_qiandao_btn.png';
import TouchableButton from "../../../compoments/touchable-button";
import {styleAssign} from "../../../utils/datatool";
import styles, {bgColor, color, commonStyles, fSize, h, ml, mt, w, wRatio} from "../../../utils/style";


interface Props {
  // navigation: Navigation;
}

interface State {
}

class JiFenAndQianDao extends PureComponent<Props, State> {

  render() {
    return (
      <View style={styleAssign([styles.udr, h(57), wRatio(100), styles.uac,bgColor(commonStyles.whiteColor)])}>
        <View style={styleAssign([styles.udr, h(57), wRatio(50), styles.uac, styles.ujc])}>
          <TouchableButton
            customStyle={styleAssign([styles.uac, styles.ujc, bgColor(commonStyles.whiteColor)])}
            onClick={() => {
              //navigation.navigate('ShangchengPage');
              console.log('ShangchengPage')
            }}
          >
            <View style={styleAssign([styles.udr, styles.uac])}>
              <Image src={iconJiFen}
                     mode={'widthFix'}
                     style={styleAssign([w(22), h(22), mt(process.env.TARO_ENV !== 'rn' ? 2 : 0)])}
              />
              <Text style={styleAssign([fSize(16), color('#182222'), ml(12)])}>积分商城</Text>
            </View>
          </TouchableButton>
        </View>
        <View style={styleAssign([h(57), wRatio(50), styles.uac, styles.ujc])}>
          <TouchableButton
            customStyle={styleAssign([styles.uac, styles.ujc, bgColor(commonStyles.whiteColor)])}
            onClick={() => {
              // this.getSignInPage();
              // this.modalRef && this.modalRef.show();
              Taro.eventCenter.trigger('showJiFenModal');
              console.log('每日签到')
            }}
          >
            <View style={styleAssign([styles.udr, styles.uac])}>
              <Image src={iconQianDao}
                     mode={'widthFix'}
                     style={styleAssign([w(23), h(20)])}/>
              <Text style={styleAssign([fSize(16), color('#182222'), ml(12)])}>每日签到</Text>
            </View>
          </TouchableButton>
        </View>
      </View>
    );
  }
}

export default JiFenAndQianDao;
