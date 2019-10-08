"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taro_1 = require("@tarojs/taro");
let defaultPixel = 2; //iphone6的像素密度
/**
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/18
 * @function: 尺寸适配
 */
function scaleSize(size) {
    return taro_1.pxTransform(size * defaultPixel);
}
exports.scaleSize = scaleSize;
/**
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/21
 * @function: 字体大小适配
 */
function setSpText(size) {
    return taro_1.pxTransform(Math.round(size * defaultPixel + 0.5));
}
exports.setSpText = setSpText;
/**
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/21
 * @function: 将样式数组进行合并
 */
function styleAssign(styles) {
    styles.unshift({ display: 'flex' });
    styles.unshift({ flexDirection: 'column' });
    styles.unshift({ position: 'relative' });
    //@ts-ignore
    return Object.assign(...styles);
}
exports.styleAssign = styleAssign;
/**
 * @author 何晏波
 * @QQ 1054539528
 * @date 2018/10/22
 * @function: 定时器任务
 */
function debounce(fn, wait) {
    let timer;
    return function () {
        let that = this;
        let args = arguments;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(function () {
            fn.apply(that, args);
        }, wait);
    };
}
exports.debounce = debounce;
//# sourceMappingURL=datatool.js.map