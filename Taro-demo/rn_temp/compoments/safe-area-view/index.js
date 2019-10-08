import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View } from "@tarojs/components-rn";
import { styleAssign } from "../../utils/datatool";
import { bgColor, commonStyles, hRatio, wRatio } from "../../utils/style";
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
      console.log('隐藏每日签到对话框');
      this.setState({ showSignAlert: false });
    };

    this.showLoading = () => {
      this.setState({ showLoading: true });
    };

    this.hideLoading = () => {
      this.setState({ showLoading: false });
    };

    this.state = {
      showSignAlert: false,
      showLoading: false
    };
  }
  render() {
    let { customStyle, children } = this.props;
    let { showSignAlert, showLoading } = this.state;
    return <View style={styleAssign([wRatio(100), hRatio(100), bgColor(commonStyles.whiteColor), customStyle])}>
        {children}
        {showSignAlert && <SignAlert closeCallback={() => {
        this.hideSignAlert();
      }} />}
        {showLoading && <Loading />}
      </View>;
  }
};
export { CustomSafeAreaView as default };