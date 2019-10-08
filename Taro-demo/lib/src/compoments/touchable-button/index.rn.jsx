"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taro_1 = require("@tarojs/taro");
const react_native_1 = require("react-native");
const react_1 = require("react");
class TouchableButton extends react_1.Component {
    render() {
        let { customStyle, onClick, activeOpacity, children } = this.props;
        return (<react_native_1.TouchableOpacity onPress={onClick} style={customStyle} activeOpacity={activeOpacity}>
        {children}
      </react_native_1.TouchableOpacity>);
    }
}
exports.default = TouchableButton;
//# sourceMappingURL=index.rn.jsx.map