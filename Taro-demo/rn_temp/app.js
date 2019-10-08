var _class, _temp;

import { Provider as TCRNProvider } from '@tarojs/components-rn';
import TaroRouter from '@tarojs/taro-router-rn';
import assetsIcoTabarMinePressedPng from '././assets/ico_tabar_mine_pressed.png';
import assetsIcoTabarMineNormalPng from '././assets/ico_tabar_mine_normal.png';
import assetsIcoTabarPrefecturePressedPng from '././assets/ico_tabar_prefecture_pressed.png';
import assetsIcoTabarPrefectureNormalPng from '././assets/ico_tabar_prefecture_normal.png';
import assetsIcoTabarClassPressedPng from '././assets/ico_tabar_class_pressed.png';
import assetsIcoTabarClassNormalPng from '././assets/ico_tabar_class_normal.png';
import assetsIcoTabarHomePressedPng from '././assets/ico_tabar_home_pressed.png';
import assetsIcoTabarHomeNormalPng from '././assets/ico_tabar_home_normal.png';
import pagesMineMinepage from './pages/mine/minepage';
import pagesPrefecturePrefecturepage from './pages/prefecture/prefecturepage';
import pagesClassClasspage from './pages/class/classpage';
import pagesHomeHomepage from './pages/home/homepage';
import Taro from '@tarojs/taro-rn';
import React from 'react';
import '@tarojs/async-await';
import { Component } from "@tarojs/taro-rn";
import { Provider } from "@tarojs/taro-redux-rn";

import configStore from "./store/index";
import appStyleSheet from "./app_styles";
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
var _styleSheet = appStyleSheet;
const store = configStore();
let App = (_temp = _class = class App extends Component {
  constructor(props) {
    super(props);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */

    global.debug = true;
    Taro.getSystemInfo({
      success: res => {
        global = Object.assign(global, res, { debug: true });
        if (res.model && res.model.includes('iPhone X')) {
          global.iphoneX = true;
          console.log('是iphoneX机型');
        } else if (res.platform === 'ios' && res.screenHeight === 812 && res.screenWidth === 375 || res.screenHeight === 896 && res.screenWidth === 414) {
          global.iphoneX = true;
          console.log('是iphoneX机型');
        } else {
          global.iphoneX = false;
          console.log('不是iphoneX机型');
        }
        console.log('设备信息', global);
      }
    }).then(res => console.log(res));
    //生产环境屏蔽所有log信息优化性能
    if (!global.debug) {
      console.info = () => {};
      console.log = () => {};
      console.warn = () => {};
      console.debug = () => {};
      console.error = () => {};
    }
    Taro._$app = this;
  }
  componentWillMount() {}
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>
                  
                <TCRNProvider>
                  <RootStack />
                </TCRNProvider>
                </Provider>;
  }

  componentDidMount() {
    this.componentDidShow && this.componentDidShow();
  }

  componentWillUnmount() {
    this.componentDidHide && this.componentDidHide();
  }

}, _class.config = {
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom'
  },
  tabBar: {
    custom: false,
    color: "#9b9b9b",
    selectedColor: "#34b0b0",
    backgroundColor: "white",
    borderStyle: 'white',
    list: [{
      pagePath: "pages/home/homepage",
      iconPath: assetsIcoTabarHomeNormalPng,
      selectedIconPath: assetsIcoTabarHomePressedPng,

      text: "首页"
    }, {
      pagePath: "pages/class/classpage",
      iconPath: assetsIcoTabarClassNormalPng,
      selectedIconPath: assetsIcoTabarClassPressedPng,

      text: "云学术"
    }, {
      pagePath: "pages/prefecture/prefecturepage",
      iconPath: assetsIcoTabarPrefectureNormalPng,
      selectedIconPath: assetsIcoTabarPrefecturePressedPng,

      text: "专区"
    }, {
      pagePath: "pages/mine/minepage",
      iconPath: assetsIcoTabarMineNormalPng,
      selectedIconPath: assetsIcoTabarMinePressedPng,

      text: "我的"
    }]
  }
}, _temp);
const RootStack = TaroRouter.initRouter([['pages/home/homepage', pagesHomeHomepage], ['pages/class/classpage', pagesClassClasspage], ['pages/prefecture/prefecturepage', pagesPrefecturePrefecturepage], ['pages/mine/minepage', pagesMineMinepage]], Taro, App.config);
Taro.initNativeApi(Taro);
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});
export default App;