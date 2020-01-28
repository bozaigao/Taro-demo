"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @filename index.rn.tsx
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/16
 * @Description: 首页搜索栏
 */
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
//@ts-ignore
const ico_homepage_xinfeng_png_1 = require("../../../assets/ico_homepage_xinfeng.png");
//@ts-ignore
const ico_homepage_search_bg_png_1 = require("../../../assets/ico_homepage_search_bg.png");
//@ts-ignore
const ico_homepage_search_gray_png_1 = require("../../../assets/ico_homepage_search_gray.png");
//@ts-ignore
const ico_homepage_clock_png_1 = require("../../../assets/ico_homepage_clock.png");
const touchable_button_1 = require("../../../compoments/touchable-button");
const datatool_1 = require("../../../utils/datatool");
const style_1 = require("../../../utils/style");
class HomeSearchTop extends taro_1.PureComponent {
    render() {
        let { leftClick, rightClick } = this.props;
        return (<components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr, style_1.wRatio(100), style_1.bgColor(style_1.commonStyles.whiteColor)])}>
        
        <components_1.View style={datatool_1.styleAssign([style_1.bgColor(style_1.commonStyles.whiteColor), style_1.wRatio(10), style_1.h(50), style_1.default.uac, style_1.default.ujc,])} onClick={() => {
            console.log('MessagePage');
            leftClick && leftClick();
            // navigation.navigate('MessagePage')
        }}>
          <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.ujc, style_1.w(25), style_1.h(25)])}>
            <components_1.Image src={ico_homepage_xinfeng_png_1.default} mode='widthFix' style={datatool_1.styleAssign([style_1.w(20), style_1.h(18)])}/>
            <components_1.View style={datatool_1.styleAssign([style_1.bgColor('#ec1313'), style_1.w(6), style_1.h(6), style_1.radiusA(3),
            style_1.default.upa, style_1.absT(0), style_1.absR(0)])}/>
          </components_1.View>
        </components_1.View>
        
        <components_1.View style={datatool_1.styleAssign([style_1.wRatio(80), style_1.h(52), style_1.default.uac, style_1.default.ujc])}>
          <touchable_button_1.default customStyle={datatool_1.styleAssign([style_1.wRatio(100), style_1.h(52)])} onClick={() => {
            console.log('SearchPage');
            // navigation.navigate('SearchPage')
        }}>
            <components_1.Image mode='scaleToFill' src={ico_homepage_search_bg_png_1.default} style={datatool_1.styleAssign([process.env.TARO_ENV === 'weapp' ? style_1.default.uf1 : style_1.wRatio(100), style_1.h(52)])}/>
          </touchable_button_1.default>
          <components_1.View style={datatool_1.styleAssign([style_1.h(52), style_1.default.ujc, style_1.default.upa, style_1.default.uac])}>
            <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.ujc, style_1.default.udr, style_1.bgColor(style_1.commonStyles.whiteColor)])}>
              <components_1.Image src={ico_homepage_search_gray_png_1.default} mode='widthFix' style={datatool_1.styleAssign([style_1.w(14), style_1.h(14)])}/>
              <components_1.Text style={datatool_1.styleAssign([style_1.color('#c6c6c6'), style_1.fSize(15), style_1.bgColor(style_1.commonStyles.transparent), style_1.ml(8)])}>搜索</components_1.Text>
            </components_1.View>
          </components_1.View>
        </components_1.View>
        
        <components_1.View style={datatool_1.styleAssign([style_1.wRatio(10), style_1.h(50), style_1.default.uac, style_1.default.ujc])} onClick={() => {
            rightClick && rightClick();
            console.log('LookHistoryPage');
            // navigation.navigate('LookHistoryPage')
        }}>
          <components_1.Image src={ico_homepage_clock_png_1.default} mode='aspectFill' style={datatool_1.styleAssign([style_1.w(20), style_1.h(18)])}/>
        </components_1.View>
      </components_1.View>);
    }
}
exports.default = HomeSearchTop;
//# sourceMappingURL=index.jsx.map