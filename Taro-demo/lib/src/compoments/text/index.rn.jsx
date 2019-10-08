"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taro_1 = require("@tarojs/taro");
const react_native_1 = require("react-native");
class CustomText extends taro_1.Component {
    render() {
        let { customStyle, onClick, numberOfLines, children } = this.props;
        return (<react_native_1.Text onPress={onClick} style={customStyle} numberOfLines={numberOfLines}>
        {children}
      </react_native_1.Text>);
    }
}
exports.default = CustomText;
//# sourceMappingURL=index.rn.jsx.map