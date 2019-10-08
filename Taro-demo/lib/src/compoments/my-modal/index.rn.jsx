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
const react_1 = require("react");
const react_native_1 = require("react-native");
const components_1 = require("@tarojs/components");
const datatool_1 = require("../../utils/datatool");
const style_1 = require("../../utils/style");
class MyModal extends react_1.PureComponent {
    render() {
        return (<react_native_1.Modal animationType="fade" transparent={true} visible={true} onRequestClose={() => {
        }}>
        <components_1.View style={datatool_1.styleAssign([style_1.wRatio(100), style_1.hRatio(100), style_1.default.uac, style_1.default.ujc, style_1.bgColor('rgba(0,0,0,0.3)')])}>
          {this.props.children}
        </components_1.View>
      </react_native_1.Modal>);
    }
}
exports.MyModal = MyModal;
exports.default = MyModal;
//# sourceMappingURL=index.rn.jsx.map