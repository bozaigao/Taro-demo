"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @filename index.tsx
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/23
 * @Description: 每日签到对话框
 */
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
const datatool_1 = require("../../../utils/datatool");
const style_1 = require("../../../utils/style");
const touchable_button_1 = require("../../../compoments/touchable-button");
const my_modal_1 = require("../../../compoments/my-modal");
//@ts-ignore
const ico_qiandao_bg_png_1 = require("../../../assets/ico_qiandao_bg.png");
//@ts-ignore
const ico_qiandao_tag_png_1 = require("../../../assets/ico_qiandao_tag.png");
//@ts-ignore
const ico_qiandao_yiqian_gou_png_1 = require("../../../assets/ico_qiandao_yiqian_gou.png");
//@ts-ignore
const ico_modal_close_btn_png_1 = require("../../../assets/ico_modal_close_btn.png");
class SignAlert extends taro_1.Component {
    constructor(props) {
        super(props);
        /**
         * @author 何晏波
         * @QQ 1054539528
         * @date 2019/9/18
         * @function: 签到
         */
        this.singIn = async () => {
            // let res = (await this.props.singIn()).data;
            //
            // if (res.code === api.NetworkState.SUCCESS) {
            //   Toast.message('签到成功');
            //   this.getSignInPage();
            // }
        };
        console.log('每日签到对话框');
        this.state = {
            signInPageDetail: { dateIntegrals: [], signInCount: 0 }
        };
    }
    render() {
        let { signInPageDetail } = this.state;
        let { closeCallback } = this.props;
        if (typeof signInPageDetail.signInCount === 'undefined') {
            signInPageDetail.signInCount = 0;
        }
        return (<my_modal_1.default>
        <components_1.View style={datatool_1.styleAssign([style_1.w(291)])}>
          <components_1.View style={datatool_1.styleAssign([style_1.bgColor(style_1.commonStyles.whiteColor), style_1.radiusA(4), { overflow: 'hidden' }])}>
            <components_1.View style={datatool_1.styleAssign([style_1.w(291), style_1.h(150)])}>
              <components_1.View style={datatool_1.styleAssign([style_1.w(291), style_1.h(150)])}>
                <components_1.Image style={datatool_1.styleAssign([style_1.default.upa, style_1.absT(0), style_1.absL(0), style_1.wRatio(100), style_1.hRatio(100)])} src={ico_qiandao_bg_png_1.default}/>
                <components_1.View style={datatool_1.styleAssign([style_1.default.uf1, style_1.default.uac, style_1.pt(35)])}>
                  <components_1.View style={datatool_1.styleAssign([style_1.default.udr, style_1.default.uac])}>
                    <components_1.Text style={datatool_1.styleAssign([style_1.fSize(14), style_1.color('#ff8317')])}>+</components_1.Text>
                    <components_1.Text style={datatool_1.styleAssign([style_1.fSize(22), style_1.color('#ff8317'), style_1.bgColor(style_1.commonStyles.transparent)])}>
                      {signInPageDetail.dateIntegrals && signInPageDetail.dateIntegrals.length > 0 ?
            signInPageDetail.dateIntegrals[signInPageDetail.signInCount - 1 < 0 ? 0 : signInPageDetail.signInCount - 1] : 0}
                    </components_1.Text>
                  </components_1.View>
                  <components_1.Text style={datatool_1.styleAssign([style_1.fSize(20), style_1.color(style_1.commonStyles.whiteColor), style_1.bgColor(style_1.commonStyles.transparent), style_1.mt(20),
            style_1.fWeight('bold')])}>
                    {signInPageDetail.canSignIn ? '未签到' : '签到成功'}
                  </components_1.Text>
                  <components_1.Text style={datatool_1.styleAssign([style_1.fSize(14), style_1.mt(2), style_1.color(style_1.commonStyles.whiteColor),
            style_1.bgColor(style_1.commonStyles.transparent)])}>
                    我的积分：{signInPageDetail.integral}
                  </components_1.Text>
                </components_1.View>
              </components_1.View>
            </components_1.View>
            <components_1.View style={datatool_1.styleAssign([style_1.default.uWrap, style_1.pl(13), style_1.pt(16), style_1.default.udr])}>
              {signInPageDetail.dateIntegrals.map((item, index) => {
            return (<components_1.View style={datatool_1.styleAssign([style_1.ml(6), style_1.mt(6), style_1.default.uac, style_1.mb(13)])} key={index}>
                    <touchable_button_1.default activeOpacity={signInPageDetail.canSignIn && signInPageDetail.signInCount === index ? 0.8 : 1} onClick={() => {
                signInPageDetail.canSignIn && signInPageDetail.signInCount === index && this.singIn();
            }} customStyle={datatool_1.styleAssign([style_1.w(50), style_1.h(60), style_1.bgColor('#f1f1f1'), style_1.default.uac, style_1.default.ujc, style_1.radiusA(2)])}>
                      <components_1.Text style={datatool_1.styleAssign([style_1.fSize(14), style_1.color('#ff8317')])}>+{item}</components_1.Text>
                      <components_1.Image src={ico_qiandao_tag_png_1.default} style={datatool_1.styleAssign([style_1.mt(2), style_1.w(30), style_1.h(26)])}/>
                      {
            //@ts-ignore
            index < signInPageDetail.signInCount ? null : (<components_1.View style={datatool_1.styleAssign([style_1.default.upa, style_1.absT(0), style_1.absL(0), style_1.w(50), style_1.h(60), style_1.bgColor('rgba(196,194,194,0.5)')])}/>)}
                    </touchable_button_1.default>
                    {
            //@ts-ignore
            index < signInPageDetail.signInCount ? (<components_1.Image src={ico_qiandao_yiqian_gou_png_1.default} style={datatool_1.styleAssign([style_1.w(20), style_1.h(13), style_1.mt(6)])}/>) : (<components_1.Text style={datatool_1.styleAssign([style_1.fSize(12), style_1.color('#a2a4a8'), style_1.mt(5)])}>第{index + 1}天</components_1.Text>)}
                  </components_1.View>);
        })}
            </components_1.View>
            <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.mt(10), style_1.mb(20)])}>
              <touchable_button_1.default customStyle={datatool_1.styleAssign([style_1.default.uac, style_1.default.ujc, style_1.bgColor('#ff5f00'), style_1.w(201), style_1.h(45)])} onClick={() => {
            closeCallback && closeCallback();
            // navigation.navigate('ShangchengPage');
        }}>
                <components_1.Text style={datatool_1.styleAssign([style_1.fSize(18), style_1.bgColor(style_1.commonStyles.transparent), style_1.color(style_1.commonStyles.whiteColor)])}>去积分商城看看</components_1.Text>
              </touchable_button_1.default>
            </components_1.View>
          </components_1.View>
          <touchable_button_1.default onClick={() => {
            closeCallback && closeCallback();
        }} customStyle={datatool_1.styleAssign([style_1.default.uac, style_1.mt(37), style_1.bgColor(style_1.commonStyles.transparent)])}>
            <components_1.Image src={ico_modal_close_btn_png_1.default} style={datatool_1.styleAssign([style_1.w(38), style_1.h(38)])}/>
          </touchable_button_1.default>
        </components_1.View>
      </my_modal_1.default>);
    }
}
exports.default = SignAlert;
//# sourceMappingURL=index.jsx.map