"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
const safe_area_view_1 = require("../../compoments/safe-area-view");
const style_1 = require("../../utils/style");
const datatool_1 = require("../../utils/datatool");
const touchable_button_1 = require("../../compoments/touchable-button");
class Minepage extends taro_1.Component {
    constructor() {
        super(...arguments);
        /**
         * 指定config的类型声明为: Taro.Config
         *
         * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
         * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
         * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
         */
        this.config = {
            navigationBarTitleText: '首页',
            disableScroll: true
        };
        this.state = {
            centerBarList: [
                {
                    icon: require('../../assets/ico_minepage_jifen.png'),
                    w: 16,
                    h: 15,
                    title: '积分商城'
                },
                {
                    icon: require('../../assets/ico_minepage_class.png'),
                    w: 15,
                    h: 13,
                    title: '听课记录'
                },
                {
                    icon: require('../../assets/ico_minepage_shouchang.png'),
                    w: 16,
                    h: 15,
                    title: '我的收藏'
                }
            ],
            dataList: [
                {
                    iconL: require('../../assets/ico_minepage_xiaoxi.png'),
                    iconLW: 17,
                    iconLH: 17,
                    title: '消息',
                },
                {
                    iconL: require('../../assets/ico_minepage_yijian.png'),
                    iconLW: 17,
                    iconLH: 17,
                    title: '意见反馈'
                },
                {
                    iconL: require('../../assets/ico_kefu_btn.png'),
                    iconLW: 18,
                    iconLH: 14.4,
                    title: '联系方式'
                },
                {
                    iconL: require('../../assets/ico_minepage_shezhi.png'),
                    iconLW: 18,
                    iconLH: 17,
                    title: '设置'
                }
            ]
        };
    }
    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps);
    }
    componentWillUnmount() {
    }
    componentDidShow() {
    }
    componentDidHide() {
    }
    render() {
        let { centerBarList, dataList } = this.state;
        return (<safe_area_view_1.default customStyle={datatool_1.styleAssign([style_1.bgColor(style_1.commonStyles.pageDefaultBackgroundColor)])}>
        <components_1.ScrollView style={datatool_1.styleAssign([style_1.wRatio(100), style_1.h(style_1.iphoneX() ? 600 : 500), style_1.bgColor(style_1.commonStyles.pageDefaultBackgroundColor)])} scrollY>
          
          <components_1.View style={datatool_1.styleAssign([style_1.wRatio(100), style_1.h(120), style_1.bgColor('rgb(127,212,203)'), style_1.default.ujc, style_1.default.uac])}>
            <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr, style_1.w(335), style_1.default.ujb])}>
              <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr])}>
                <components_1.Image style={datatool_1.styleAssign([style_1.w(70), style_1.h(70)])} src={require('../../assets/ico_doctor_default_head.png')}/>
                <components_1.View style={datatool_1.styleAssign([style_1.ml(30)])}>
                  <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr])}>
                    <components_1.Text style={datatool_1.styleAssign([style_1.fSize(24), style_1.color(style_1.commonStyles.whiteColor)])}>何晏波</components_1.Text>
                    <components_1.Text style={datatool_1.styleAssign([style_1.fSize(18), style_1.ml(5), style_1.color(style_1.commonStyles.whiteColor)])}>医生</components_1.Text>
                  </components_1.View>
                  <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.ujc, style_1.padding([2, 3, 2, 3]), style_1.radiusA(12),
            style_1.bgColor('rgb(156,223,216)'), style_1.mt(5)])}>
                    <components_1.Text style={datatool_1.styleAssign([style_1.color(style_1.commonStyles.whiteColor), style_1.fSize(14)])}>累计积分:10分</components_1.Text>
                  </components_1.View>
                </components_1.View>
              </components_1.View>
              <components_1.Image src={require('../../assets/ico_minepage_arrow_right_white.png')} style={datatool_1.styleAssign([style_1.w(8), style_1.h(16), style_1.ml(12)])}/>
            </components_1.View>
          </components_1.View>
          
          <components_1.View style={datatool_1.styleAssign([style_1.wRatio(100), style_1.h(80), style_1.default.udr, style_1.bgColor(style_1.commonStyles.whiteColor)])}>
            {centerBarList.map((value, index) => {
            return <touchable_button_1.default key={index} customStyle={datatool_1.styleAssign([process.env.TARO_ENV === 'weapp' ? style_1.w(style_1.screenWidth() / 3) : style_1.wRatio(33.33), style_1.hRatio(100),
                style_1.default.uac, style_1.default.ujc])}>
                  <components_1.View style={datatool_1.styleAssign([style_1.default.uac])}>
                    <components_1.Image style={datatool_1.styleAssign([style_1.w(value.w), style_1.h(value.h)])} src={value.icon}/>
                    <components_1.Text style={datatool_1.styleAssign([style_1.fSize(12), style_1.mt(10)])}>{value.title}</components_1.Text>
                  </components_1.View>
                </touchable_button_1.default>;
        })}
          </components_1.View>
          
          <touchable_button_1.default customStyle={datatool_1.styleAssign([style_1.wRatio(100), style_1.h(60), style_1.default.ujb, style_1.default.uac, style_1.default.udr, style_1.bgColor(style_1.commonStyles.whiteColor),
            style_1.mt(10), style_1.mb(10)])}>
            <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr, style_1.ml(20)])}>
              <components_1.Image style={datatool_1.styleAssign([style_1.w(18), style_1.h(18)])} src={require('../../assets/ico_minepage_kehu.png')}/>
              <components_1.Text style={datatool_1.styleAssign([style_1.fSize(14), style_1.ml(10)])}>我的客户</components_1.Text>
            </components_1.View>
            <components_1.Image style={datatool_1.styleAssign([style_1.w(6), style_1.h(10), style_1.mr(20)])} src={require('../../assets/ico_minepage_item_arrow.png')}/>
          </touchable_button_1.default>
          
          <components_1.View style={datatool_1.styleAssign([style_1.wRatio(100), style_1.bgColor(style_1.commonStyles.whiteColor)])}>
            {dataList.map((value, index) => {
            return (<touchable_button_1.default key={index} customStyle={datatool_1.styleAssign([style_1.wRatio(100), style_1.default.uac])}>
                  <components_1.View style={datatool_1.styleAssign([style_1.wRatio(100), style_1.h(60), style_1.default.ujb, style_1.default.uac, style_1.default.udr, style_1.bgColor(style_1.commonStyles.whiteColor)])}>
                    <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr, style_1.ml(20)])}>
                      <components_1.Image style={datatool_1.styleAssign([style_1.w(value.iconLW), style_1.h(value.iconLH)])} src={value.iconL}/>
                      <components_1.Text style={datatool_1.styleAssign([style_1.fSize(14), style_1.ml(10)])}>{value.title}</components_1.Text>
                    </components_1.View>
                    <components_1.Image style={datatool_1.styleAssign([style_1.w(6), style_1.h(10), style_1.mr(20)])} src={require('../../assets/ico_minepage_item_arrow.png')}/>
                  </components_1.View>
                  {index !== dataList.length - 1 &&
                <components_1.View style={datatool_1.styleAssign([style_1.w(355), style_1.h(1), style_1.bgColor(style_1.commonStyles.pageDefaultBackgroundColor)])}/>}
                </touchable_button_1.default>);
        })}
          </components_1.View>
        </components_1.ScrollView>
      </safe_area_view_1.default>);
    }
}
// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion
exports.default = Minepage;
//# sourceMappingURL=minepage.jsx.map