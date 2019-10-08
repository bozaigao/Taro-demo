"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
const redux_1 = require("@tarojs/redux");
const counter_1 = require("../../actions/counter");
require("./prefecturepage.scss");
let Prefecturepage = class Prefecturepage extends taro_1.Component {
    constructor() {
        super(...arguments);
        /**
         * 指定config的类型声明为: Taro.Config
         *
         * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
         * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
         * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
         */
        this.config = {
            navigationBarTitleText: '首页'
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
        return (<components_1.View className='index'>
        <components_1.View><components_1.Text>ClassPage</components_1.Text></components_1.View>
      </components_1.View>);
    }
};
Prefecturepage = __decorate([
    redux_1.connect(({ counter }) => ({
        counter
    }), (dispatch) => ({
        add() {
            dispatch(counter_1.add());
        },
        dec() {
            dispatch(counter_1.minus());
        },
        asyncAdd() {
            dispatch(counter_1.asyncAdd());
        }
    }))
], Prefecturepage);
// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion
exports.default = Prefecturepage;
//# sourceMappingURL=prefecturepage.jsx.map