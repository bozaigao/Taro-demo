"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
const safe_area_view_1 = require("../../compoments/safe-area-view");
const style_1 = require("../../utils/style");
const datatool_1 = require("../../utils/datatool");
//@ts-ignore
const redux_1 = require("@tarojs/redux");
const actions = require("../../actions/home");
const text_1 = require("../../compoments/text");
//@ts-ignore
const react_native_swiper_fix_viewpager_1 = require("react-native-swiper-fix-viewpager");
let Prefecturepage = class Prefecturepage extends taro_1.Component {
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
        /**
         * @author 何晏波
         * @QQ 1054539528
         * @date 2019/10/8
         * @function: 获取banner数据
         */
        this.getBannerData = () => {
            this.viewRef.showLoading();
            this.props.dispatchBannerInfo().then((res) => {
                this.viewRef.hideLoading();
                this.setState({ bannerList: res.urls });
            }).catch(e => {
                this.viewRef.hideLoading();
                //android模拟器无法访问mock的本地服务所以这里处理下，在真实网络请求中不存在该问题
                this.setState({ bannerList: ["https://gzol.oss-cn-qingdao.aliyuncs.com/20190906161007.png",
                        "https://gzol.oss-cn-qingdao.aliyuncs.com/20190926100637.png",
                        "https://gzol.oss-cn-qingdao.aliyuncs.com/20190926103054.png",
                        "https://gzol.oss-cn-qingdao.aliyuncs.com/20190926115113.png"
                    ] });
                console.log('报错啦', e);
            });
        };
        this.state = {
            bannerList: []
        };
    }
    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps);
    }
    componentWillUnmount() {
    }
    componentDidMount() {
        this.getBannerData();
    }
    componentDidHide() {
    }
    render() {
        let { bannerList } = this.state;
        return (<safe_area_view_1.default ref={(ref) => {
            this.viewRef = ref;
        }}>
        
        
        <components_1.ScrollView style={datatool_1.styleAssign([style_1.wRatio(100), style_1.h(style_1.iphoneX() ? 600 : 500)])} scrollY>
          {
        //这里针对rn端 swiper android底层需要依赖ViewPager,而不是android和iOS通用官方ScrollView，主要是解决
        //android端在ScrollView里面包含Swiper时，由于外层捕捉到并消费用户的左右滑动事件会导致Swiper无法滑动
        //详情请见：https://github.com/bozaigao/react-native-swiper-fix-viewpager
        process.env.TARO_ENV === 'rn' ?
            <components_1.View style={datatool_1.styleAssign([style_1.wRatio(100), style_1.h(150)])}>
                <react_native_swiper_fix_viewpager_1.default loop showsPagination={false}>
                  {bannerList.map((value, index) => {
                return <components_1.Image key={index} mode='scaleToFill' src={value} style={datatool_1.styleAssign([style_1.wRatio(100), style_1.hRatio(100)])}/>;
            })}

                </react_native_swiper_fix_viewpager_1.default>
              </components_1.View> :
            <components_1.View style={datatool_1.styleAssign([style_1.wRatio(100), style_1.h(150)])}>
                <components_1.Swiper style={datatool_1.styleAssign([style_1.wRatio(100), style_1.h(150)])} autoplay>
                  {bannerList.map((value, index) => {
                return <components_1.SwiperItem>
                        <components_1.Image key={index} mode='scaleToFill' src={value} style={datatool_1.styleAssign([style_1.wRatio(100), style_1.hRatio(100)])}/>
                      </components_1.SwiperItem>;
            })}
                </components_1.Swiper>
              </components_1.View>}

          <components_1.View style={datatool_1.styleAssign([style_1.wRatio(100)])}>
            <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr, style_1.mt(10)])}>
              <components_1.View style={datatool_1.styleAssign([style_1.w(5), style_1.h(15), style_1.bgColor(style_1.commonStyles.colorTheme), style_1.ml(20)])}/>
              <components_1.Text style={datatool_1.styleAssign([style_1.fSize(16), style_1.ml(5)])}>政策解读</components_1.Text>
            </components_1.View>
            <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr, style_1.wRatio(100), style_1.h(180)])}>
              <components_1.View style={datatool_1.styleAssign([style_1.wRatio(50), style_1.hRatio(100), style_1.pa(20)])}>
                <components_1.Image style={datatool_1.styleAssign([style_1.wRatio(100), style_1.h(80)])} src={'https://gzol.oss-cn-qingdao.aliyuncs.com/20190828104641.png'}/>
                <text_1.default customStyle={datatool_1.styleAssign([style_1.fSize(15), style_1.mt(5), {
                overflow: 'hidden',
            }])} numberOfLines={1}>快速室性心律失律失常的</text_1.default>
                <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr, style_1.wRatio(100), style_1.default.ujb, style_1.mt(5)])}>
                  <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr])}>
                    <components_1.Image style={datatool_1.styleAssign([style_1.h(9), style_1.w(9)])} src={require('../../assets/ico_homepage_eye_gray.png')}/>
                    <components_1.Text style={datatool_1.styleAssign([style_1.color(style_1.commonStyles.textGrayColor), style_1.fSize(12), style_1.ml(2)])}>8200浏览</components_1.Text>
                  </components_1.View>
                  <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr])}>
                    <components_1.Image style={datatool_1.styleAssign([style_1.h(9), style_1.w(9)])} src={require('../../assets/ico_homepage_comment_gray.png')}/>
                    <components_1.Text style={datatool_1.styleAssign([style_1.color(style_1.commonStyles.textGrayColor), style_1.fSize(12), style_1.ml(2)])}>1023条发言</components_1.Text>
                  </components_1.View>
                </components_1.View>
              </components_1.View>
              <components_1.View style={datatool_1.styleAssign([style_1.wRatio(50), style_1.hRatio(100), style_1.pa(20)])}>
                <components_1.Image style={datatool_1.styleAssign([style_1.wRatio(100), style_1.h(80)])} src={'https://gzol.oss-cn-qingdao.aliyuncs.com/20190828104714.png'}/>
                <text_1.default customStyle={datatool_1.styleAssign([style_1.fSize(15), style_1.mt(5), {
                overflow: 'hidden'
            }])} numberOfLines={1}>医药领域专业人才和专业人才和</text_1.default>
                <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr, style_1.wRatio(100), style_1.default.ujb, style_1.mt(5)])}>
                  <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr])}>
                    <components_1.Image style={datatool_1.styleAssign([style_1.h(9), style_1.w(9)])} src={require('../../assets/ico_homepage_eye_gray.png')}/>
                    <components_1.Text style={datatool_1.styleAssign([style_1.color(style_1.commonStyles.textGrayColor), style_1.fSize(12), style_1.ml(2)])}>8200浏览</components_1.Text>
                  </components_1.View>
                  <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr])}>
                    <components_1.Image style={datatool_1.styleAssign([style_1.h(9), style_1.w(9)])} src={require('../../assets/ico_homepage_comment_gray.png')}/>
                    <components_1.Text style={datatool_1.styleAssign([style_1.color(style_1.commonStyles.textGrayColor), style_1.fSize(12), style_1.ml(2)])}>1023条发言</components_1.Text>
                  </components_1.View>
                </components_1.View>
              </components_1.View>
            </components_1.View>
          </components_1.View>
          
          <components_1.View style={datatool_1.styleAssign([style_1.wRatio(100)])}>
            <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr, style_1.mt(10)])}>
              <components_1.View style={datatool_1.styleAssign([style_1.w(5), style_1.h(15), style_1.bgColor(style_1.commonStyles.colorTheme), style_1.ml(20)])}/>
              <components_1.Text style={datatool_1.styleAssign([style_1.fSize(16), style_1.ml(5)])}>健康生活</components_1.Text>
            </components_1.View>
            <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr, style_1.wRatio(100), style_1.h(140)])}>
              <components_1.View style={datatool_1.styleAssign([style_1.wRatio(50), style_1.hRatio(100), style_1.pa(20)])}>
                <components_1.Image style={datatool_1.styleAssign([style_1.wRatio(100), style_1.hRatio(100)])} src={'https://gzol.oss-cn-qingdao.aliyuncs.com/20190926141414.png'}/>
                <components_1.Text style={datatool_1.styleAssign([style_1.fSize(15), style_1.mt(5)])}>二级页</components_1.Text>
              </components_1.View>
              <components_1.View style={datatool_1.styleAssign([style_1.wRatio(50), style_1.hRatio(100), style_1.pa(20)])}>
                <components_1.Image style={datatool_1.styleAssign([style_1.wRatio(100), style_1.hRatio(100)])} src={'https://gzol.oss-cn-qingdao.aliyuncs.com/20190926141351.png'}/>
                <components_1.Text style={datatool_1.styleAssign([style_1.fSize(15), style_1.mt(5)])}>课程</components_1.Text>
              </components_1.View>
            </components_1.View>
          </components_1.View>
          
          <components_1.View style={datatool_1.styleAssign([style_1.wRatio(100)])}>
            <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr, style_1.mt(10)])}>
              <components_1.View style={datatool_1.styleAssign([style_1.w(5), style_1.h(15), style_1.bgColor(style_1.commonStyles.colorTheme), style_1.ml(20)])}/>
              <components_1.Text style={datatool_1.styleAssign([style_1.fSize(16), style_1.ml(5)])}>大家都在看</components_1.Text>
            </components_1.View>
            <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr, style_1.wRatio(100), style_1.h(120)])}>
              <components_1.View style={datatool_1.styleAssign([style_1.wRatio(50), style_1.hRatio(100), style_1.pa(20)])}>
                <components_1.Image style={datatool_1.styleAssign([style_1.wRatio(100), style_1.hRatio(100)])} src={'https://gzol.oss-cn-qingdao.aliyuncs.com/20190926142858.png'}/>
              </components_1.View>
            </components_1.View>
          </components_1.View>
        </components_1.ScrollView>
      </safe_area_view_1.default>);
    }
};
Prefecturepage = __decorate([
    redux_1.connect(state => state.home, Object.assign({}, actions))
], Prefecturepage);
// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion
exports.default = Prefecturepage;
//# sourceMappingURL=prefecturepage.jsx.map