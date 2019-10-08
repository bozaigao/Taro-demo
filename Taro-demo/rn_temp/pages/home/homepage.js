var _class, _temp;

import Taro from '@tarojs/taro-rn';
import React from 'react';
import { __decorate } from "tslib";
import { Component } from "@tarojs/taro-rn";
import { Image, ScrollView, Text, View } from "@tarojs/components-rn";
import HomeSearchTop from "./home-search-top/index";
//@ts-ignore
import CustomSafeAreaView from "../../compoments/safe-area-view/index.rn";
//@ts-ignore
import JiFenAndQianDao from "./jifen-and-qiandao/index";
import { styleAssign } from "../../utils/datatool";
import { bgColor, color, commonStyles, default as styles, fSize, h, hRatio, iphoneX, ml, mt, pa, w, wRatio } from "../../utils/style";
import { connect } from "@tarojs/taro-redux-rn";
import * as actions from "../../actions/home";
import CustomText from "../../compoments/text/index.rn";
//@ts-ignore
import RNSwiper from 'react-native-swiper-fix-viewpager';
let Homepage = (_temp = _class = class Homepage extends Component {
  constructor(props) {
    super(props);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */

    this.getBannerData = () => {
      this.viewRef.showLoading();
      this.props.dispatchBannerInfo().then(res => {
        this.viewRef.hideLoading();
        this.setState({ bannerList: res.urls });
      }).catch(e => {
        this.viewRef.hideLoading();
        //android模拟器无法访问mock的本地服务所以这里处理下，在真实网络请求中不存在该问题
        this.setState({ bannerList: ["https://gzol.oss-cn-qingdao.aliyuncs.com/20190906161007.png", "https://gzol.oss-cn-qingdao.aliyuncs.com/20190926100637.png", "https://gzol.oss-cn-qingdao.aliyuncs.com/20190926103054.png", "https://gzol.oss-cn-qingdao.aliyuncs.com/20190926115113.png"] });
        console.log('报错啦', e);
      });
    };

    this.getSignInPage = async () => {
      // let res = (await this.props.getSignInPage()).data;
      //
      // if (res.code === api.NetworkState.SUCCESS) {
      //   this.setState({
      //     signInPageDetail: res.data
      //   });
      // }
    };

    this.state = {
      signInPageDetail: { dateIntegrals: [], signInCount: 0 },
      bannerList: []
    };
  }
  componentDidMount() {
    console.log('componentDidMount');
    // 监听一个事件，接受参数
    Taro.eventCenter.on('showJiFenModal', () => {
      console.log('显示对话框');
      this.viewRef && this.viewRef.showSignAlert();
    });
    this.getBannerData();
  }
  componentWillUnmount() {
    Taro.eventCenter.off('showJiFenModal');
    console.log('componentWillUnmount');
  }
  render() {
    let { signInPageDetail, bannerList } = this.state;
    if (typeof signInPageDetail.signInCount === 'undefined') {
      signInPageDetail.signInCount = 0;
    }
    return <CustomSafeAreaView ref={ref => {
      this.viewRef = ref;
    }}>
        
        <HomeSearchTop leftClick={() => {
        Taro.showToast({ title: '开发中' });
      }} rightClick={() => {
        Taro.showToast({ title: '开发中' });
      }} />
        <ScrollView style={styleAssign([wRatio(100), h(iphoneX() ? 600 : 500)])} scrollY>
          <View style={styleAssign([wRatio(100), h(150)])}>
            {
          //这里针对rn端 swiper android底层需要依赖ViewPager,而不是android和iOS通用官方ScrollView，主要是解决
          //android端在ScrollView里面包含Swiper时，由于外层捕捉到并消费用户的左右滑动事件会导致Swiper无法滑动
          //详情请见：https://github.com/bozaigao/react-native-swiper-fix-viewpager
          <View style={styleAssign([wRatio(100), h(150)])}>
                  <RNSwiper loop showsPagination={false}>
                    {bannerList.map((value, index) => {
                return <Image key={index} mode="scaleToFill" src={value} style={styleAssign([wRatio(100), hRatio(100)])} />;
              })}

                  </RNSwiper>
                </View>}
          </View>
          
          <JiFenAndQianDao />
          <View style={styleAssign([wRatio(100), h(10), bgColor('#f8f8f8')])} />
          
          
          <View style={styleAssign([wRatio(100)])}>
            <View style={styleAssign([styles.uac, styles.udr, mt(10)])}>
              <View style={styleAssign([w(5), h(15), bgColor(commonStyles.colorTheme), ml(20)])} />
              <Text style={styleAssign([fSize(16), ml(5)])}>政策解读</Text>
            </View>
            <View style={styleAssign([styles.uac, styles.udr, wRatio(100), h(180)])}>
              <View style={styleAssign([wRatio(50), hRatio(100), pa(20)])}>
                <Image style={styleAssign([wRatio(100), h(80)])} mode={'scaleToFill'} src={'https://gzol.oss-cn-qingdao.aliyuncs.com/20190828104641.png'} />
                <CustomText customStyle={styleAssign([fSize(15), mt(5), {
                overflow: 'hidden'
              }])} numberOfLines={1}>快速室性心律失律失常的</CustomText>
                <View style={styleAssign([styles.uac, styles.udr, wRatio(100), styles.ujb, mt(5)])}>
                  <View style={styleAssign([styles.uac, styles.udr])}>
                    <Image style={styleAssign([h(9), w(9)])} src={require('../../assets/ico_homepage_eye_gray.png')} />
                    <Text style={styleAssign([color(commonStyles.textGrayColor), fSize(12), ml(2)])}>8200浏览</Text>
                  </View>
                  <View style={styleAssign([styles.uac, styles.udr])}>
                    <Image style={styleAssign([h(9), w(9)])} src={require('../../assets/ico_homepage_comment_gray.png')} />
                    <Text style={styleAssign([color(commonStyles.textGrayColor), fSize(12), ml(2)])}>1023条发言</Text>
                  </View>
                </View>
              </View>
              <View style={styleAssign([wRatio(50), hRatio(100), pa(20)])}>
                <Image style={styleAssign([wRatio(100), h(80)])} mode={'scaleToFill'} src={'https://gzol.oss-cn-qingdao.aliyuncs.com/20190828104714.png'} />
                <CustomText customStyle={styleAssign([fSize(15), mt(5), {
                overflow: 'hidden'
              }])} numberOfLines={1}>医药领域专业人才和专业人才和</CustomText>
                <View style={styleAssign([styles.uac, styles.udr, wRatio(100), styles.ujb, mt(5)])}>
                  <View style={styleAssign([styles.uac, styles.udr])}>
                    <Image style={styleAssign([h(9), w(9)])} src={require('../../assets/ico_homepage_eye_gray.png')} />
                    <Text style={styleAssign([color(commonStyles.textGrayColor), fSize(12), ml(2)])}>8200浏览</Text>
                  </View>
                  <View style={styleAssign([styles.uac, styles.udr])}>
                    <Image style={styleAssign([h(9), w(9)])} src={require('../../assets/ico_homepage_comment_gray.png')} />
                    <Text style={styleAssign([color(commonStyles.textGrayColor), fSize(12), ml(2)])}>1023条发言</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          
          <View style={styleAssign([wRatio(100)])}>
            <View style={styleAssign([styles.uac, styles.udr, mt(10)])}>
              <View style={styleAssign([w(5), h(15), bgColor(commonStyles.colorTheme), ml(20)])} />
              <Text style={styleAssign([fSize(16), ml(5)])}>健康生活</Text>
            </View>
            <View style={styleAssign([styles.uac, styles.udr, wRatio(100), h(140)])}>
              <View style={styleAssign([wRatio(50), hRatio(100), pa(20)])}>
                <Image style={styleAssign([wRatio(100), hRatio(100)])} src={'https://gzol.oss-cn-qingdao.aliyuncs.com/20190926141414.png'} />
                <Text style={styleAssign([fSize(15), mt(5)])}>二级页</Text>
              </View>
              <View style={styleAssign([wRatio(50), hRatio(100), pa(20)])}>
                <Image style={styleAssign([wRatio(100), hRatio(100)])} src={'https://gzol.oss-cn-qingdao.aliyuncs.com/20190926141351.png'} />
                <Text style={styleAssign([fSize(15), mt(5)])}>课程</Text>
              </View>
            </View>
          </View>
          
          <View style={styleAssign([wRatio(100)])}>
            <View style={styleAssign([styles.uac, styles.udr, mt(10)])}>
              <View style={styleAssign([w(5), h(15), bgColor(commonStyles.colorTheme), ml(20)])} />
              <Text style={styleAssign([fSize(16), ml(5)])}>大家都在看</Text>
            </View>
            <View style={styleAssign([styles.uac, styles.udr, wRatio(100), h(120)])}>
              <View style={styleAssign([wRatio(50), hRatio(100), pa(20)])}>
                <Image style={styleAssign([wRatio(100), hRatio(100)])} src={'https://gzol.oss-cn-qingdao.aliyuncs.com/20190926142858.png'} />
              </View>
            </View>
          </View>
        </ScrollView>
      </CustomSafeAreaView>;
  }
}, _class.config = {
  navigationBarTitleText: '首页',
  disableScroll: true
}, _temp);
Homepage = __decorate([connect(state => state.home, { ...actions })], Homepage);
// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion
export default Homepage;