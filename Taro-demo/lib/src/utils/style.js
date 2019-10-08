"use strict";
/**
 * @filename style.ts
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/21
 * @Description: 样式工具类
 */
Object.defineProperty(exports, "__esModule", { value: true });
const taro_1 = require("@tarojs/taro");
const datatool_1 = require("./datatool");
function screenWidth() {
    return global.screenWidth;
}
exports.screenWidth = screenWidth;
function screenHeight() {
    return global.screenHeight;
}
exports.screenHeight = screenHeight;
function iphoneX() {
    return global.iphoneX;
}
exports.iphoneX = iphoneX;
function platform() {
    return global.platform;
}
exports.platform = platform;
//盒子
function uf(flexNumber) {
    return { flex: flexNumber };
}
exports.uf = uf;
//高度百分比
function hRatio(height) {
    return { height: height + '%' };
}
exports.hRatio = hRatio;
//高度
function h(height) {
    return { height: datatool_1.scaleSize(height) };
}
exports.h = h;
//最小高度
function minh(minHeight) {
    return { minHeight: datatool_1.scaleSize(minHeight) };
}
exports.minh = minh;
//最大高度
function maxh(maxHeight) {
    return { maxHeight: datatool_1.scaleSize(maxHeight) };
}
exports.maxh = maxh;
//宽度百分比
function wRatio(width) {
    return { width: width + '%' };
}
exports.wRatio = wRatio;
//宽度
function w(width) {
    return { width: datatool_1.scaleSize(width) };
}
exports.w = w;
//最小宽度
function minw(minWidth) {
    return { minWidth: datatool_1.scaleSize(minWidth) };
}
exports.minw = minw;
//最大宽度
function maxw(maxWidth) {
    return { maxWidth: datatool_1.scaleSize(maxWidth) };
}
exports.maxw = maxw;
//内边距
function pt(paddingTop) {
    return { paddingTop: datatool_1.scaleSize(paddingTop) };
}
exports.pt = pt;
function pr(paddingRight) {
    return { paddingRight: datatool_1.scaleSize(paddingRight) };
}
exports.pr = pr;
function pl(paddingLeft) {
    return { paddingLeft: datatool_1.scaleSize(paddingLeft) };
}
exports.pl = pl;
function pb(paddingBottom) {
    return { paddingBottom: datatool_1.scaleSize(paddingBottom) };
}
exports.pb = pb;
function pa(padding) {
    return { padding: datatool_1.scaleSize(padding) };
}
exports.pa = pa;
function padding(paddingArr) {
    /*传递的是一个数组*/
    if (paddingArr.constructor === Array) {
        return {
            paddingTop: datatool_1.scaleSize(paddingArr[0]),
            paddingRight: datatool_1.scaleSize(paddingArr[1]),
            paddingBottom: datatool_1.scaleSize(paddingArr[2]),
            paddingLeft: datatool_1.scaleSize(paddingArr[3])
        };
    }
    taro_1.default.showToast({ title: 'padding方法第一个参数为数组,四个参数的时候分别代表上右下左,也可以传递3,2,1个参数' });
    return {};
}
exports.padding = padding;
//边框
function bt(borderTopWidth) {
    return { borderTopWidth: datatool_1.scaleSize(borderTopWidth) };
}
exports.bt = bt;
function bb(borderBottomWidth) {
    return { borderBottomWidth: datatool_1.scaleSize(borderBottomWidth) };
}
exports.bb = bb;
function bl(borderLeftWidth) {
    return { borderLeftWidth: datatool_1.scaleSize(borderLeftWidth) };
}
exports.bl = bl;
function br(borderRightWidth) {
    return { borderRightWidth: datatool_1.scaleSize(borderRightWidth) };
}
exports.br = br;
function bo(borderWidth) {
    return { borderWidth: datatool_1.scaleSize(borderWidth) };
}
exports.bo = bo;
function border(borderWidthArr) {
    /*传递的是一个数组*/
    if (borderWidthArr.constructor === Array) {
        return {
            borderTopWidth: datatool_1.scaleSize(borderWidthArr[0]),
            borderRightWidth: datatool_1.scaleSize(borderWidthArr[1]),
            borderBottomWidth: datatool_1.scaleSize(borderWidthArr[2]),
            borderLeftWidth: datatool_1.scaleSize(borderWidthArr[3])
        };
    }
    taro_1.default.showToast({ title: 'border方法第一个参数为数组,四个参数的时候分别代表上右下ø左,也可以传递3,2,1个参数' });
    return {};
}
exports.border = border;
//外边距
function mt(marginTop) {
    return { marginTop: datatool_1.scaleSize(marginTop) };
}
exports.mt = mt;
function mb(marginBottom) {
    return { marginBottom: datatool_1.scaleSize(marginBottom) };
}
exports.mb = mb;
function ml(marginLeft) {
    return { marginLeft: datatool_1.scaleSize(marginLeft) };
}
exports.ml = ml;
function mr(marginRight) {
    return { marginRight: datatool_1.scaleSize(marginRight) };
}
exports.mr = mr;
function ma(margin) {
    return { margin: datatool_1.scaleSize(margin) };
}
exports.ma = ma;
function margin(marginArr) {
    /*传递的是一个数组*/
    if (marginArr.constructor === Array) {
        return {
            marginTop: datatool_1.scaleSize(marginArr[0]),
            marginRight: datatool_1.scaleSize(marginArr[1]),
            marginBottom: datatool_1.scaleSize(marginArr[2]),
            marginLeft: datatool_1.scaleSize(marginArr[3])
        };
    }
    taro_1.default.showToast({ title: 'radius方法中第一个数组参数必须为四个元素,默认左上为第一个参数,顺时针旋转' });
    return {};
}
exports.margin = margin;
//圆角
function radiusA(borderRadius) {
    return { borderRadius: datatool_1.scaleSize(borderRadius) };
}
exports.radiusA = radiusA;
function radiusTL(borderTopLeftRadius) {
    return { borderTopLeftRadius: datatool_1.scaleSize(borderTopLeftRadius) };
}
exports.radiusTL = radiusTL;
function radiusTR(borderTopRightRadius) {
    return { borderTopRightRadius: datatool_1.scaleSize(borderTopRightRadius) };
}
exports.radiusTR = radiusTR;
function radiusBL(borderBottomLeftRadius) {
    return { borderBottomLeftRadius: datatool_1.scaleSize(borderBottomLeftRadius) };
}
exports.radiusBL = radiusBL;
function radiusBR(borderBottomRightRadius) {
    return { borderBottomRightRadius: datatool_1.scaleSize(borderBottomRightRadius) };
}
exports.radiusBR = radiusBR;
function borderRadius(borderRadiusArr) {
    /*传递的是一个数组*/
    if (borderRadiusArr.constructor === Array) {
        return {
            borderTopLeftRadius: datatool_1.scaleSize(borderRadiusArr[0]),
            borderTopRightRadius: datatool_1.scaleSize(borderRadiusArr[1]),
            borderBottomRightRadius: datatool_1.scaleSize(borderRadiusArr[2]),
            borderBottomLeftRadius: datatool_1.scaleSize(borderRadiusArr[3])
        };
    }
    taro_1.default.showToast({ title: 'radius方法中第一个数组参数必须为四个元素,默认左上为第一个参数,顺时针旋转' });
    return {};
}
exports.borderRadius = borderRadius;
//位置
function absT(top) {
    return { top: datatool_1.scaleSize(top) };
}
exports.absT = absT;
function absB(bottom) {
    return { bottom: datatool_1.scaleSize(bottom) };
}
exports.absB = absB;
function absL(left) {
    return { left: datatool_1.scaleSize(left) };
}
exports.absL = absL;
function absR(right) {
    return { right: datatool_1.scaleSize(right) };
}
exports.absR = absR;
function abs(absolutePositionArr) {
    /*传递的是一个数组*/
    if (absolutePositionArr.constructor === Array) {
        return {
            top: datatool_1.scaleSize(absolutePositionArr[0]),
            right: datatool_1.scaleSize(absolutePositionArr[1]),
            bottom: datatool_1.scaleSize(absolutePositionArr[2]),
            left: datatool_1.scaleSize(absolutePositionArr[3])
        };
    }
    taro_1.default.showToast({ title: 'abs方法第一个参数为数组,四个参数的时候分别代表上右下左,也可以传递3,2,1个参数' });
    return {};
}
exports.abs = abs;
/*字体大小*/
function fSize(fontSize) {
    return { fontSize: datatool_1.setSpText(fontSize) };
}
exports.fSize = fSize;
/*字体风格*/
function fFamily(fontFamily) {
    return { fontFamily };
}
exports.fFamily = fFamily;
/*字体weight*/
function fWeight(fontWeight) {
    return { fontWeight: fontWeight };
}
exports.fWeight = fWeight;
/*字体颜色*/
function color(color) {
    return { color };
}
exports.color = color;
/*字体行高*/
function lh(lineHeight) {
    return { lineHeight };
}
exports.lh = lh;
/*字体行间距*/
function ls(letterSpacing) {
    return { letterSpacing };
}
exports.ls = ls;
/*背景色*/
function bgColor(backgroundColor) {
    return { backgroundColor };
}
exports.bgColor = bgColor;
/*边框色*/
function bdColor(borderColor) {
    return { borderColor };
}
exports.bdColor = bdColor;
/*透明度*/
function op(opacity) {
    return { opacity };
}
exports.op = op;
/*透明度*/
function bs(borderStyle) {
    return { borderStyle };
}
exports.bs = bs;
/*zIndex*/
function zIndex(index) {
    return { zIndex: index };
}
exports.zIndex = zIndex;
exports.commonStyles = {
    statuBarColor: '#60d7cb',
    //紫色
    violetColor: '#7d90f0',
    //阴影色
    shadowColor: '#76befd',
    //编辑框底色
    textAreaBlueColor: '#e9f2ff',
    buheshiColor: 'rgb(190,202,227)',
    //边框色
    borderColor: '#e9eff4',
    lightBlue: '#7d90f0',
    lightThemeColor: '#ecf5ff',
    // 粗体字
    fontWeight: 'bold',
    colorTheme: 'rgb(90,174,175)',
    blueColor: '#2F8BE7',
    blueColorTwo: '#153971',
    deepBlueColor: '#4E95FF',
    pinkColor: '#f58062',
    orangeColor: '#f76f1f',
    pinkColorTwo: '#ffdad1',
    greenColor: '#50e3c2',
    greenColorTwo: '#4ebe05',
    bgPinkColor: '#ffe2db',
    yellowBgColor: '#e3be56',
    yellowBgColorTwo: '#cdbd91',
    //按钮不可点击的背景色,
    disabledColor: '#ecf0f9',
    disabledColoraTwo: '#d9dee8',
    //输入框placeholder颜色
    holderColor: '#bccae5',
    //底部菜单字体颜色
    tabBottomTextActiveColor: '#488eff',
    tabBottomTextInActiveColor: '#9B9B9B',
    bgGray: '#e5e5e5',
    yellowColor2: '#fad41b',
    //页面默认底色
    pageDefaultBackgroundColor: '#f6f9fc',
    whiteColor: '#FFFFFF',
    blackColor: '#000000',
    //主题字黑色
    textBlackColor: '#2b3642',
    tagColor: '#f0f6ff',
    //主题字灰色
    textGrayColor: '#979aa0',
    textGrayColorTwo: '#acb7c2',
    textGrayColorThree: '#9caec3',
    textGrayColorFour: '#757575',
    textGrayColorFive: '#9eabc1',
    chatTextColor: '#7b7f7e',
    textYellowColor: '#be8924',
    //主题字金色
    textGoldColor: '#ceb18a',
    textGoldColorTwo: '#deac65',
    //主题字浅蓝色
    textWathetBlueColor: '#b7c6e4',
    //主题字橙色
    textOrangeColor: '#f8832b',
    textOrangeColorTwo: '#fdaf72',
    //主题字绿色
    textGreenColor: '#24c8a5',
    yellowColor: '#fac253',
    //分割线颜色
    dividerColor: '#f6f9fc',
    transparent: 'transparent',
    linearGradientStartColor: '#61c8ff',
    linearGradientEndColor: '#4e95ff',
    ratingStarColor: '#E98269',
    chatBgColor: '#E5E5E5',
    //边距30
    left30: 15,
    right30: 15,
    //每个页面的导航条高度
    headHeight: 44,
    lineHeight: 24,
    letterSpacing: 0.8,
    buttonOpacityBg: 'rgba(118, 190, 253, 0.1)',
    redColor: '#ec1313',
    modalOpacity: 0.3,
    activeOpacity: 0.8,
    sysMsgGrayColor: 'rgb(243,245,242)',
    sysMsgBgColor: 'rgb(243,245,242)',
    sessionItemBg: '#02420B',
    lightRedColor: '#ff7754',
    lightBlackColor: '#4a4a4a',
    //iOS端数字字体风格
    iOSNumStyleFontFamily: 'HelveticaNeue-CondensedBlack',
    //android端数字字体风格
    androidNumStyleFontFamily: 'Roboto'
};
//总则u开头表示样式(ui),c开头表示颜色(color)
const styles = {
    uf1: {
        flex: 1
    },
    h100: {
        height: '100%'
    },
    w100: {
        width: '100%'
    },
    uWrap: {
        flexWrap: 'wrap' //自动换行
    },
    uNoWrap: {
        flexWrap: 'nowrap' //截断
    },
    //主轴的排列方向
    udr: {
        //子项横向排列
        flexDirection: 'row'
    },
    udc: {
        //子项竖向排列
        flexDirection: 'column'
    },
    //次轴排序
    uas: {
        //居前
        alignItems: 'flex-start'
    },
    uac: {
        //居中
        alignItems: 'center'
    },
    udf: {
        //窗体绝对布局
        position: 'fixed'
    },
    uae: {
        //居后
        alignItems: 'flex-end'
    },
    //主轴排序
    ujs: {
        //居前
        justifyContent: 'flex-start'
    },
    ujc: {
        //居中
        justifyContent: 'center'
    },
    uje: {
        //居后
        justifyContent: 'flex-end'
    },
    uja: {
        //平均分布
        justifyContent: 'space-around'
    },
    ujb: {
        //两端
        justifyContent: 'space-between'
    },
    //自身次轴对齐 alignSelf enum('auto', 'flex-start', 'flex-end', 'center', 'stretch')
    uSelfAuto: { alignSelf: 'auto' },
    uSelfStart: { alignSelf: 'flex-start' },
    uSelfEnd: { alignSelf: 'flex-end' },
    uSelfCenter: { alignSelf: 'center' },
    uSelfStretch: { alignSelf: 'stretch' },
    upa: {
        //绝对定位
        position: 'absolute'
    },
    upf: {
        //相对于窗口定位
        position: 'fixed'
    },
    upr: {
        position: 'relative'
    },
    //文字水平居中 enum('auto', 'left', 'right', 'center')
    utxc: {
        textAlign: 'center'
    },
    //水平居左
    utxl: {
        textAlign: 'left'
    },
    //水平居右
    utxr: {
        textAlign: 'right'
    },
    //文字垂直居中 textAlignVertical enum('auto', 'top', 'bottom', 'center') 只支持安卓
    utxvc: {
        textAlignVertical: 'center'
    },
    utxvt: {
        textAlignVertical: 'top'
    },
    //文本横线-底部
    utxdu: {
        textDecorationLine: 'underline'
    },
    //文本横线-中间
    utxdt: {
        textDecorationLine: 'line-through'
    },
    //文本横线-中间和底部
    utxdut: {
        textDecorationLine: 'underline line-through'
    },
    //按键阴影
    uvs: {
        shadowColor: exports.commonStyles.colorTheme,
        shadowOpacity: 0.33,
        shadowRadius: 5
    }
};
exports.default = styles;
//# sourceMappingURL=style.js.map