"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taro_1 = require("@tarojs/taro");
const taro_2 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
class TouchableButton extends taro_2.Component {
    render() {
        let { customStyle, onClick, children } = this.props;
        return (<components_1.View style={customStyle} onClick={() => {
            if (onClick) {
                onClick();
            }
        }}>
        {children}
      </components_1.View>);
    }
}
exports.default = TouchableButton;
//# sourceMappingURL=index.jsx.map