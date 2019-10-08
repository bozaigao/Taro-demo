"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taro_1 = require("@tarojs/taro");
const homepage_1 = require("./home/homepage");
const classpage_1 = require("./class/classpage");
const prefecturepage_1 = require("./prefecture/prefecturepage");
const minepage_1 = require("./mine/minepage");
const custom_tab_bar_1 = require("../custom-tab-bar");
const components_1 = require("@tarojs/components");
const datatool_1 = require("../utils/datatool");
const style_1 = require("../utils/style");
class Index extends taro_1.Component {
    constructor(props) {
        super(props);
        /**
         * 指定config的类型声明为: Taro.Config
         *
         * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
         * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
         * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
         */
        this.config = {
            navigationBarTitleText: '首页',
            disableScroll: true
        };
        this.state = {
            currentIndex: 0
        };
    }
    render() {
        let { currentIndex } = this.state;
        let childShowView;
        if (currentIndex === 0) {
            childShowView = <homepage_1.default />;
        }
        else if (currentIndex === 1) {
            childShowView = <classpage_1.default />;
        }
        else if (currentIndex === 2) {
            childShowView = <prefecturepage_1.default />;
        }
        else if (currentIndex === 3) {
            childShowView = <minepage_1.default />;
        }
        return (<components_1.View style={datatool_1.styleAssign([style_1.wRatio(100), style_1.hRatio(100)])}>
        {childShowView}
        <custom_tab_bar_1.default onPress={(currentIndex) => {
            this.setState({ currentIndex });
        }}/>
      </components_1.View>);
    }
}
// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion
exports.default = Index;
//# sourceMappingURL=index.jsx.map