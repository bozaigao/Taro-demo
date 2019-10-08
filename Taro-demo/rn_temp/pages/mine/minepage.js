var _class, _temp;

import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { Image, ScrollView, Text, View } from "@tarojs/components-rn";
import CustomSafeAreaView from "../../compoments/safe-area-view/index.rn";
import { bgColor, color, commonStyles, default as styles, fSize, h, hRatio, iphoneX, mb, ml, mr, mt, padding, radiusA, w, wRatio } from "../../utils/style";
import { styleAssign } from "../../utils/datatool";
import TouchableButton from "../../compoments/touchable-button/index.rn";
let Minepage = (_temp = _class = class Minepage extends Component {
  constructor() {
    super(...arguments);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */

    this.state = {
      centerBarList: [{
        icon: require('../../assets/ico_minepage_jifen.png'),
        w: 16,
        h: 15,
        title: '积分商城'
      }, {
        icon: require('../../assets/ico_minepage_class.png'),
        w: 15,
        h: 13,
        title: '听课记录'
      }, {
        icon: require('../../assets/ico_minepage_shouchang.png'),
        w: 16,
        h: 15,
        title: '我的收藏'
      }],
      dataList: [{
        iconL: require('../../assets/ico_minepage_xiaoxi.png'),
        iconLW: 17,
        iconLH: 17,
        title: '消息'
      }, {
        iconL: require('../../assets/ico_minepage_yijian.png'),
        iconLW: 17,
        iconLH: 17,
        title: '意见反馈'
      }, {
        iconL: require('../../assets/ico_kefu_btn.png'),
        iconLW: 18,
        iconLH: 14.4,
        title: '联系方式'
      }, {
        iconL: require('../../assets/ico_minepage_shezhi.png'),
        iconLW: 18,
        iconLH: 17,
        title: '设置'
      }]
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  render() {
    let { centerBarList, dataList } = this.state;
    return <CustomSafeAreaView customStyle={styleAssign([bgColor(commonStyles.pageDefaultBackgroundColor)])}>
        <ScrollView style={styleAssign([wRatio(100), h(iphoneX() ? 600 : 500), bgColor(commonStyles.pageDefaultBackgroundColor)])} scrollY>
          
          <View style={styleAssign([wRatio(100), h(120), bgColor('rgb(127,212,203)'), styles.ujc, styles.uac])}>
            <View style={styleAssign([styles.uac, styles.udr, w(335), styles.ujb])}>
              <View style={styleAssign([styles.uac, styles.udr])}>
                <Image style={styleAssign([w(70), h(70)])} src={require('../../assets/ico_doctor_default_head.png')} />
                <View style={styleAssign([ml(30)])}>
                  <View style={styleAssign([styles.uac, styles.udr])}>
                    <Text style={styleAssign([fSize(24), color(commonStyles.whiteColor)])}>何晏波</Text>
                    <Text style={styleAssign([fSize(18), ml(5), color(commonStyles.whiteColor)])}>医生</Text>
                  </View>
                  <View style={styleAssign([styles.uac, styles.ujc, padding([2, 3, 2, 3]), radiusA(12), bgColor('rgb(156,223,216)'), mt(5)])}>
                    <Text style={styleAssign([color(commonStyles.whiteColor), fSize(14)])}>累计积分:10分</Text>
                  </View>
                </View>
              </View>
              <Image src={require('../../assets/ico_minepage_arrow_right_white.png')} style={styleAssign([w(8), h(16), ml(12)])} />
            </View>
          </View>
          
          <View style={styleAssign([wRatio(100), h(80), styles.udr, bgColor(commonStyles.whiteColor)])}>
            {centerBarList.map((value, index) => {
            return <TouchableButton key={index} customStyle={styleAssign([wRatio(33.33), hRatio(100), styles.uac, styles.ujc])}>
                  <View style={styleAssign([styles.uac])}>
                    <Image style={styleAssign([w(value.w), h(value.h)])} src={value.icon} />
                    <Text style={styleAssign([fSize(12), mt(10)])}>{value.title}</Text>
                  </View>
                </TouchableButton>;
          })}
          </View>
          
          <TouchableButton customStyle={styleAssign([wRatio(100), h(60), styles.ujb, styles.uac, styles.udr, bgColor(commonStyles.whiteColor), mt(10), mb(10)])}>
            <View style={styleAssign([styles.uac, styles.udr, ml(20)])}>
              <Image style={styleAssign([w(18), h(18)])} src={require('../../assets/ico_minepage_kehu.png')} />
              <Text style={styleAssign([fSize(14), ml(10)])}>我的客户</Text>
            </View>
            <Image style={styleAssign([w(6), h(10), mr(20)])} src={require('../../assets/ico_minepage_item_arrow.png')} />
          </TouchableButton>
          
          <View style={styleAssign([wRatio(100), bgColor(commonStyles.whiteColor)])}>
            {dataList.map((value, index) => {
            return <TouchableButton key={index} customStyle={styleAssign([wRatio(100), styles.uac])}>
                  <View style={styleAssign([wRatio(100), h(60), styles.ujb, styles.uac, styles.udr, bgColor(commonStyles.whiteColor)])}>
                    <View style={styleAssign([styles.uac, styles.udr, ml(20)])}>
                      <Image style={styleAssign([w(value.iconLW), h(value.iconLH)])} src={value.iconL} />
                      <Text style={styleAssign([fSize(14), ml(10)])}>{value.title}</Text>
                    </View>
                    <Image style={styleAssign([w(6), h(10), mr(20)])} src={require('../../assets/ico_minepage_item_arrow.png')} />
                  </View>
                  {index !== dataList.length - 1 && <View style={styleAssign([w(355), h(1), bgColor(commonStyles.pageDefaultBackgroundColor)])} />}
                </TouchableButton>;
          })}
          </View>
        </ScrollView>
      </CustomSafeAreaView>;
  }
}, _class.config = {
  navigationBarTitleText: '首页',
  disableScroll: true
}, _temp);
// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Minepage;