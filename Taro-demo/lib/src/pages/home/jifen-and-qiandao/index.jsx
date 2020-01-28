"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @filename index.rn.tsx
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/18
 * @Description: 积分和签到
 */
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
//@ts-ignore
const ico_homepage_xinfeng_png_1 = require("../../../assets/ico_homepage_xinfeng.png");
//@ts-ignore
const ico_homepage_qiandao_btn_png_1 = require("../../../assets/ico_homepage_qiandao_btn.png");
const touchable_button_1 = require("../../../compoments/touchable-button");
const datatool_1 = require("../../../utils/datatool");
const style_1 = require("../../../utils/style");
class JiFenAndQianDao extends taro_1.PureComponent {
    render() {
        return (<components_1.View style={datatool_1.styleAssign([style_1.default.udr, style_1.h(57), style_1.wRatio(100), style_1.default.uac, style_1.bgColor(style_1.commonStyles.whiteColor)])}>
        <components_1.View style={datatool_1.styleAssign([style_1.default.udr, style_1.h(57), style_1.wRatio(50), style_1.default.uac, style_1.default.ujc])}>
          <touchable_button_1.default customStyle={datatool_1.styleAssign([style_1.default.uac, style_1.default.ujc, style_1.bgColor(style_1.commonStyles.whiteColor)])} onClick={() => {
            //navigation.navigate('ShangchengPage');
            console.log('ShangchengPage');
        }}>
            <components_1.View style={datatool_1.styleAssign([style_1.default.udr, style_1.default.uac])}>
              <components_1.Image src={ico_homepage_xinfeng_png_1.default} mode={'widthFix'} style={datatool_1.styleAssign([style_1.w(22), style_1.h(22), style_1.mt(process.env.TARO_ENV !== 'rn' ? 2 : 0)])}/>
              <components_1.Text style={datatool_1.styleAssign([style_1.fSize(16), style_1.color('#182222'), style_1.ml(12)])}>积分商城</components_1.Text>
            </components_1.View>
          </touchable_button_1.default>
        </components_1.View>
        <components_1.View style={datatool_1.styleAssign([style_1.h(57), style_1.wRatio(50), style_1.default.uac, style_1.default.ujc])}>
          <touchable_button_1.default customStyle={datatool_1.styleAssign([style_1.default.uac, style_1.default.ujc, style_1.bgColor(style_1.commonStyles.whiteColor)])} onClick={() => {
            // this.getSignInPage();
            // this.modalRef && this.modalRef.show();
            taro_1.default.eventCenter.trigger('showJiFenModal');
            console.log('每日签到');
        }}>
            <components_1.View style={datatool_1.styleAssign([style_1.default.udr, style_1.default.uac])}>
              <components_1.Image src={ico_homepage_qiandao_btn_png_1.default} mode={'widthFix'} style={datatool_1.styleAssign([style_1.w(23), style_1.h(20)])}/>
              <components_1.Text style={datatool_1.styleAssign([style_1.fSize(16), style_1.color('#182222'), style_1.ml(12)])}>每日签到</components_1.Text>
            </components_1.View>
          </touchable_button_1.default>
        </components_1.View>
      </components_1.View>);
    }
}
exports.default = JiFenAndQianDao;
//# sourceMappingURL=index.jsx.map