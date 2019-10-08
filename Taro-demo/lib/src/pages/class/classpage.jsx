"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
const safe_area_view_1 = require("../../compoments/safe-area-view");
const datatool_1 = require("../../utils/datatool");
const style_1 = require("../../utils/style");
const touchable_button_1 = require("../../compoments/touchable-button");
//@ts-ignore
const ico_next_png_1 = require("../../assets/ico_next.png");
const renwu_zhitong_item_1 = require("./renwu-zhitong-item");
class Classpage extends taro_1.Component {
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
            rewuList: [1, 2, 3, 4, 5, 6],
        };
    }
    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps);
    }
    componentWillUnmount() {
    }
    componentDidShow() {
    }
    componentDidHide() {
    }
    render() {
        let { rewuList } = this.state;
        return (<safe_area_view_1.default>
        <components_1.ScrollView style={datatool_1.styleAssign([style_1.wRatio(100), style_1.h(style_1.iphoneX() ? 640 : 560)])} scrollY>
          <components_1.View style={datatool_1.styleAssign([style_1.default.uf1])}>
            <touchable_button_1.default customStyle={datatool_1.styleAssign([style_1.default.uac, style_1.default.ujb, style_1.default.udr, style_1.wRatio(100), style_1.h(50), style_1.pl(15), style_1.pr(15), style_1.bgColor(style_1.commonStyles.whiteColor), style_1.mt(5)])}>
              <components_1.Text style={datatool_1.styleAssign([style_1.fSize(18), style_1.color('#333333')])}>任务直通车</components_1.Text>
              <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr])}>
                <components_1.Text style={datatool_1.styleAssign([style_1.color('#999999'), style_1.fSize(14)])}>更多</components_1.Text>
                <components_1.Image style={datatool_1.styleAssign([style_1.w(7), style_1.h(12), style_1.ml(7)])} src={ico_next_png_1.default}/>
              </components_1.View>
            </touchable_button_1.default>
            {rewuList.map((item, index) => {
            return (<renwu_zhitong_item_1.default item={item} key={index}/>);
        })}
          </components_1.View>
        </components_1.ScrollView>
      </safe_area_view_1.default>);
    }
}
// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion
exports.default = Classpage;
//# sourceMappingURL=classpage.jsx.map