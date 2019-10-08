"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const utils_1 = require("./utils");
function TabBarIcon(props) {
    let { focused, selectedIconPath, iconPath, isRedDotShow, isBadgeShow, badgeText = '' } = props;
    const text = badgeText.length > 4 ? '...' : badgeText;
    selectedIconPath = utils_1.isUrl(selectedIconPath) ? { uri: selectedIconPath } : selectedIconPath;
    iconPath = utils_1.isUrl(iconPath) ? { uri: iconPath } : iconPath;
    return (react_1.default.createElement(react_native_1.View, { style: { width: 30, height: 30 ,alignItems:'center'} },
        isBadgeShow &&
            react_1.default.createElement(react_native_1.View, { style: {
                    position: 'absolute',
                    right: -13,
                    top: -2,
                    backgroundColor: '#FA5151',
                    borderRadius: 18,
                    paddingTop: 1.8,
                    paddingBottom: 1.8,
                    paddingLeft: 4.8,
                    paddingRight: 4.8,
                    minWidth: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 100
                } },
                react_1.default.createElement(react_native_1.Text, { style: { color: 'white', fontSize: 12 } }, text)),
        isRedDotShow && react_1.default.createElement(react_native_1.View, { style: {
                position: 'absolute',
                right: -6,
                top: 0,
                backgroundColor: '#FA5151',
                borderRadius: 18,
                paddingTop: 4,
                paddingBottom: 4,
                paddingLeft: 4,
                paddingRight: 4,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 100
            } }),
        react_1.default.createElement(react_native_1.Image, { style: { width: 22, height: 22,marginTop:5 }, source: focused ? selectedIconPath : iconPath })));
}
exports.TabBarIcon = TabBarIcon;
