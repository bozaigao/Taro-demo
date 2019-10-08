"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @filename index.tsx
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/25
 * @Description: 进度条展示
 */
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
const style_1 = require("../../utils/style");
const datatool_1 = require("../../utils/datatool");
//@ts-ignore
const ico_loading_bg_png_1 = require("../../assets/ico_loading_bg.png");
//@ts-ignore
const loading_gif_1 = require("../../assets/loading.gif");
class Loading extends taro_1.Component {
    render() {
        return (<components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.ujc, style_1.default.udf, style_1.zIndex(1000), style_1.absL(0), style_1.absB(0), style_1.absR(0), style_1.absT(0),
            style_1.bgColor('rgba(0,0,0,0.3)')])}>
        <components_1.View style={datatool_1.styleAssign([
            style_1.default.uac,
            style_1.default.ujc,
            style_1.w(120),
            style_1.h(120)
        ])}>
          <components_1.Image src={ico_loading_bg_png_1.default} style={datatool_1.styleAssign([
            style_1.w(120),
            style_1.h(120),
            style_1.radiusA(5)
        ])}/>
          <components_1.View style={datatool_1.styleAssign([style_1.default.upa, style_1.default.uac, style_1.absL(10), style_1.absT(25), style_1.bgColor(style_1.commonStyles.whiteColor)])}>
            <components_1.Image style={datatool_1.styleAssign([style_1.w(100), style_1.h(40)])} src={loading_gif_1.default}/>
            <components_1.Text style={datatool_1.styleAssign([style_1.color(style_1.commonStyles.textGrayColor), style_1.fSize(14)])}>加载中...</components_1.Text>
          </components_1.View>
        </components_1.View>
      </components_1.View>);
    }
}
exports.Loading = Loading;
exports.default = Loading;
//# sourceMappingURL=index.jsx.map