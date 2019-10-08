"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @filename index.rn.tsx
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/18
 * @Description: 对Modal进行二次封装, 避免重复代码
 */
const taro_1 = require("@tarojs/taro");
const touchable_button_1 = require("../touchable-button");
const components_1 = require("@tarojs/components");
const style_1 = require("../../utils/style");
const datatool_1 = require("../../utils/datatool");
class MyModal extends taro_1.Component {
    render() {
        return (<components_1.View style={datatool_1.styleAssign([style_1.default.udf, style_1.zIndex(1000), style_1.absT(0), style_1.absL(0), style_1.absR(0), style_1.absB(0)])}>
        <touchable_button_1.default activeOpacity={1} onClick={() => {
        }} customStyle={datatool_1.styleAssign([style_1.default.uac, style_1.default.upa, style_1.absT(0), style_1.absL(0), style_1.bgColor('rgba(0,0,0,0.3)'),
            style_1.wRatio(100), style_1.hRatio(100), style_1.zIndex(1)])}>
          <components_1.View style={datatool_1.styleAssign([style_1.wRatio(100), style_1.hRatio(100), style_1.default.uac, style_1.default.ujc])}>
            {this.props.children}
          </components_1.View>
        </touchable_button_1.default>
      </components_1.View>);
    }
}
exports.MyModal = MyModal;
exports.default = MyModal;
//# sourceMappingURL=index.jsx.map