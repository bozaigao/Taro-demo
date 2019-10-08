import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View } from "@tarojs/components-rn";
import { styleAssign } from "../../utils/datatool";
import { bgColor, commonStyles, hRatio, iphoneX, pb, pt, wRatio } from "../../utils/style";
import SignAlert from "../../pages/home/sign-alert/index.rn";
import Loading from "../loading/index.rn";
let CustomSafeAreaView = class CustomSafeAreaView extends Component {
  constructor(props) {
    super(props);
    /**
     * @author 何晏波
     * @QQ 1054539528
     * @date 2019/9/23
     * @function: 显示每日签到对话框
     */

    this.showSignAlert = () => {
      console.log('显示每日签到对话框');
      this.setState({ showSignAlert: true });
    };

    this.hideSignAlert = () => {
      this.setState({ showSignAlert: false });
    };

    this.showLoading = () => {
      this.setState({ showLoading: true });
    };

    this.hideLoading = () => {
      this.setState({ showLoading: false });
    };

    this.state = {
      paddingTop: 0,
      paddingBottom: 0,
      showSignAlert: false,
      showLoading: false
    };
  }
  componentWillMount() {
    //这里只要是针对微信小程序设置自定义tabBar后的iphoneX高度适配
    if (iphoneX()) {
      this.setState({ paddingTop: 78, paddingBottom: 94 });
    } else {
      this.setState({ paddingTop: 55, paddingBottom: 64 });
    }
  }
  render() {
    let { customStyle, children, notNeedSafe } = this.props;
    let { paddingTop, paddingBottom, showSignAlert, showLoading } = this.state;
    console.log('距离顶部', paddingTop);
    return <View style={styleAssign([wRatio(100), hRatio(100), bgColor(commonStyles.whiteColor), pt(notNeedSafe ? 0 : paddingTop), pb(paddingBottom), customStyle])}>
        {children}
        {showSignAlert && <SignAlert closeCallback={() => {
        this.hideSignAlert();
      }} />}
        {showLoading && <Loading />}
      </View>;
  }
};
export { CustomSafeAreaView as default };