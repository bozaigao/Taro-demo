"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@tarojs/async-await");
const taro_1 = require("@tarojs/taro");
const redux_1 = require("@tarojs/redux");
const homepage_1 = require("./pages/home/homepage");
const store_1 = require("./store");
require("./app.scss");
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const store = store_1.default();
class App extends taro_1.Component {
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
            pages: [
                "pages/home/homepage",
                "pages/class/classpage",
                "pages/prefecture/prefecturepage",
                "pages/mine/minepage",
            ],
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
                        iconPath: "./assets/ico_tabar_home_normal.png",
                        selectedIconPath: "./assets/ico_tabar_home_pressed.png",
                        text: "首页",
                    }, {
                        pagePath: "pages/class/classpage",
                        iconPath: "./assets/ico_tabar_class_normal.png",
                        selectedIconPath: "./assets/ico_tabar_class_pressed.png",
                        text: "云学术",
                    }, {
                        pagePath: "pages/prefecture/prefecturepage",
                        iconPath: "./assets/ico_tabar_prefecture_normal.png",
                        selectedIconPath: "./assets/ico_tabar_prefecture_pressed.png",
                        text: "专区",
                    }, {
                        pagePath: "pages/mine/minepage",
                        iconPath: "./assets/ico_tabar_mine_normal.png",
                        selectedIconPath: "./assets/ico_tabar_mine_pressed.png",
                        text: "我的",
                    }]
            }
        };
        console.log('呵呵', global);
        global.debug = true;
        taro_1.default.getSystemInfo({
            success: res => {
                global = Object.assign(global, res, { debug: true });
                if (res.model && res.model.includes('iPhone X')) {
                    global.iphoneX = true;
                    console.log('是iphoneX机型');
                }
                else if (res.platform === 'ios' && res.screenHeight === 812 && res.screenWidth === 375 ||
                    res.screenHeight === 896 && res.screenWidth === 414) {
                    global.iphoneX = true;
                    console.log('是iphoneX机型');
                }
                else {
                    global.iphoneX = false;
                    console.log('不是iphoneX机型');
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
        return (<redux_1.Provider store={store}>
        <homepage_1.default />
      </redux_1.Provider>);
    }
}
taro_1.default.render(<App />, document.getElementById('app'));
//# sourceMappingURL=app.jsx.map