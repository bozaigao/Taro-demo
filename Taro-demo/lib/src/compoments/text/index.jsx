"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
class CustomText extends taro_1.Component {
    render() {
        let { customStyle, onClick, children } = this.props;
        return (<components_1.Text onClick={onClick} style={customStyle}>
        {children}
      </components_1.Text>);
    }
}
exports.default = CustomText;
//# sourceMappingURL=index.jsx.map