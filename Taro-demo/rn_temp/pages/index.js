var _class, _temp;

import React from 'react';
import { Component } from "@tarojs/taro-rn";
import Homepage from "./home/homepage";
import Classpage from "./class/classpage";
import Prefecturepage from "./prefecture/prefecturepage";
import Minepage from "./mine/minepage";
import CustomTabBar from "../custom-tab-bar/index";
import { View } from "@tarojs/components-rn";
import { styleAssign } from "../utils/datatool";
import { hRatio, wRatio } from "../utils/style";
let Index = (_temp = _class = class Index extends Component {
  constructor(props) {
    super(props);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */

    this.state = {
      currentIndex: 0
    };
  }
  render() {
    let { currentIndex } = this.state;
    let childShowView;
    if (currentIndex === 0) {
      childShowView = <Homepage />;
    } else if (currentIndex === 1) {
      childShowView = <Classpage />;
    } else if (currentIndex === 2) {
      childShowView = <Prefecturepage />;
    } else if (currentIndex === 3) {
      childShowView = <Minepage />;
    }
    return <View style={styleAssign([wRatio(100), hRatio(100)])}>
        {childShowView}
        <CustomTabBar onPress={currentIndex => {
        this.setState({ currentIndex });
      }} />
      </View>;
  }
}, _class.config = {
  navigationBarTitleText: '首页',
  disableScroll: true
}, _temp);
// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Index;