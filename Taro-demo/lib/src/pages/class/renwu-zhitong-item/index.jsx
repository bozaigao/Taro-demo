"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @filename index.tsx
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/10/7
 * @Description: 任务直通组件
 */
const taro_1 = require("@tarojs/taro");
const style_1 = require("../../../utils/style");
const components_1 = require("@tarojs/components");
const touchable_button_1 = require("../../../compoments/touchable-button");
const datatool_1 = require("../../../utils/datatool");
//@ts-ignore
const ico_rwzt_1_png_1 = require("../../../assets/ico_rwzt_1.png");
//@ts-ignore
const ico_rwzt_2_png_1 = require("../../../assets/ico_rwzt_2.png");
//@ts-ignore
const ico_rwzt_3_png_1 = require("../../../assets/ico_rwzt_3.png");
//@ts-ignore
const ico_rwzt_4_png_1 = require("../../../assets/ico_rwzt_4.png");
class RwztItem extends taro_1.PureComponent {
    constructor() {
        super(...arguments);
        this.filterBg = () => {
            let { item } = this.props;
            switch (item) {
                case 1:
                    return ico_rwzt_1_png_1.default;
                case 2:
                    return ico_rwzt_2_png_1.default;
                case 3:
                    return ico_rwzt_3_png_1.default;
                case 4:
                    return ico_rwzt_4_png_1.default;
                default:
                    return ico_rwzt_1_png_1.default;
            }
        };
        this.filterBtnColor = () => {
            let { item } = this.props;
            switch (item) {
                case 1:
                    return style_1.commonStyles.colorTheme;
                case 2:
                    return '#29a6fe';
                case 3:
                    return '#ff7f1e';
                case 4:
                    return '#2f54eb';
                default:
                    return style_1.commonStyles.colorTheme;
            }
        };
    }
    render() {
        return (<touchable_button_1.default onClick={() => {
            // navigation.navigate('TaskDetailUser');
        }}>
        <components_1.View style={datatool_1.styleAssign([style_1.default.ujc, style_1.default.uac, style_1.default.udr, style_1.wRatio(100), style_1.mt(20)])}>
          <components_1.View style={datatool_1.styleAssign([process.env.TARO_ENV === 'rn' ? { width: style_1.screenWidth() - 30 } : style_1.wRatio(95), style_1.h(161), style_1.pa(15)])}>
            <components_1.Image style={datatool_1.styleAssign([process.env.TARO_ENV === 'rn' ? { width: style_1.screenWidth() - 30 } : style_1.wRatio(100), style_1.h(161), style_1.default.upa, style_1.absT(0), style_1.absL(0)])} src={this.filterBg()} mode={'scaleToFill'}/>
            <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr, style_1.default.ujb])}>
              <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr])}>
                <components_1.Image style={datatool_1.styleAssign([style_1.w(16), style_1.h(16), style_1.ml(7)])} src={require('../../../assets/ico_huanzhe.png')}/>
                <components_1.Text style={datatool_1.styleAssign([style_1.fSize(12), style_1.color('#333333'), style_1.ml(5)])}>患者教育</components_1.Text>
              </components_1.View>
              <components_1.Image style={datatool_1.styleAssign([style_1.w(7), style_1.h(12), style_1.ml(7)])} src={require('../../../assets/ico_next.png')}/>
            </components_1.View>
            <components_1.View style={datatool_1.styleAssign([style_1.mt(17)])}>
              <components_1.Text style={datatool_1.styleAssign([style_1.fSize(18), style_1.color('#333333')])}>氨酚伪麻片的推广任务</components_1.Text>
              <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr, style_1.mt(4)])}>
                <components_1.Text style={datatool_1.styleAssign([style_1.fSize(18), style_1.color('#d93721')])}>+50积分</components_1.Text>
                <components_1.Text style={datatool_1.styleAssign([style_1.fSize(14), style_1.color('#999999'), style_1.ml(8)])}>积分商城换购好礼</components_1.Text>
              </components_1.View>
            </components_1.View>
            <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr, style_1.default.ujb, style_1.mt(process.env.TARO_ENV === 'rn' ? 10 : 0)])}>
              <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr])}>
                <components_1.Text style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr, style_1.fSize(14), style_1.color('#999999')])}>
                  发布自:<components_1.Text style={datatool_1.styleAssign([style_1.color('#333333')])}>平台推荐</components_1.Text>
                </components_1.Text>
              </components_1.View>
              <touchable_button_1.default customStyle={datatool_1.styleAssign([style_1.w(95), style_1.h(29), style_1.radiusA(15), style_1.default.uac, style_1.default.ujc, style_1.bgColor(this.filterBtnColor())])}>
                <components_1.Text style={datatool_1.styleAssign([style_1.color(style_1.commonStyles.whiteColor), style_1.fSize(12)])}>立刻完成</components_1.Text>
              </touchable_button_1.default>
            </components_1.View>
          </components_1.View>
        </components_1.View>
      </touchable_button_1.default>);
    }
}
exports.RwztItem = RwztItem;
exports.default = RwztItem;
//# sourceMappingURL=index.jsx.map