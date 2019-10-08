/**
 * @filename app.weapp.tsx
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/23
 * @Description: 这里单独弄一个入口文件主要是针对微信小程序，为了做到全局静态Modal也能将最底部的TabBar给遮住，实现全屏遮罩
 * 这里采用在单页面渲染其他页面子组件的形式进行展示，采用https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html
 * 方式自定义 tabBar在taro里很难控制tabBar的聚焦状态，所以采用现在的方案。
*/
import '@tarojs/async-await'
import Taro, {Component, Config} from '@tarojs/taro'
import {Provider} from '@tarojs/redux'
import Index from './pages/home/homepage'

import configStore from './store'

import './app.scss'
import {Global} from "../global";

declare let global: Global;
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {
  constructor(props) {
    super(props);
    Taro.getSystemInfo({
      success: res => {
        global = Object.assign(global, res, {debug: true});
        if (res.model && res.model.includes('iPhone X')) {
          global.iphoneX = true;
          console.log('是iphoneX机型')
        } else if (res.platform === 'ios' && res.screenHeight === 812 && res.screenWidth === 375 ||
          res.screenHeight === 896 && res.screenWidth === 414) {
          global.iphoneX = true;
          console.log('是iphoneX机型')
        } else {
          global.iphoneX = false;
          console.log('不是iphoneX机型')
        }
        console.log('设备信息', global);
      }

    }).then(res => console.log(res));
    //生产环境屏蔽所有log信息优化性能
    if (!global.debug) {
      console.info = () => {
      };
      console.log = () => {
      };
      console.warn = () => {
      };
      console.debug = () => {
      };
      console.error = () => {
      };
    }
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      "pages/index",
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      navigationStyle: 'custom'
    }
  }

  componentWillMount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index/>
      </Provider>
    )
  }
}

Taro.render(<App/>, document.getElementById('app'))
