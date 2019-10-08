import Taro from '@tarojs/taro'
import {SafeAreaView} from 'react-native';
import {Component} from "react";
import {styleAssign} from "../../utils/datatool";
import {bgColor, commonStyles, hRatio, wRatio} from "../../utils/style";
import {View} from "@tarojs/components";
import SignAlert from "../../pages/home/sign-alert";
import Loading from "../loading";

interface Props {
  style?: any;
  onClick?: any;
  children?: any;
  notNeedSafe?: boolean;
}

interface State {
  //是否显示每日签到对话框
  showSignAlert: boolean;
  //是否显示进度条
  showLoading: boolean;
}

export default class CustomSafeAreaView extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      showSignAlert: false,
      showLoading: false,
    }
  }

  render() {
    let {style, children, notNeedSafe} = this.props;
    let {showSignAlert, showLoading} = this.state;

    if (notNeedSafe) {
      return (
        <View
          style={styleAssign([wRatio(100), hRatio(100), bgColor(commonStyles.whiteColor), style])}
        >
          {children}
          {
            showSignAlert && <SignAlert closeCallback={() => {
              this.hideSignAlert();
            }}/>
          }
        </View>
      )
    }
    return (
      <SafeAreaView
        style={styleAssign([wRatio(100), hRatio(100), bgColor(commonStyles.whiteColor), style])}
      >
        {children}
        {
          showSignAlert && <SignAlert closeCallback={() => {
            this.hideSignAlert();
          }}/>
        }
        {
          showLoading && <Loading/>
        }
      </SafeAreaView>
    )
  }


  /**
   * @author 何晏波
   * @QQ 1054539528
   * @date 2019/9/23
   * @function: 显示每日签到对话框
   */
  showSignAlert = () => {
    console.log('显示每日签到对话框');
    this.setState({showSignAlert: true});
  }


  /**
   * @author 何晏波
   * @QQ 1054539528
   * @date 2019/9/23
   * @function: 隐藏每日签到对话框
   */
  hideSignAlert = () => {
    this.setState({showSignAlert: false});
  }


  /**
   * @author 何晏波
   * @QQ 1054539528
   * @date 2019/9/25
   * @function: 显示进度条
   */
  showLoading = () => {
    this.setState({showLoading: true});
  }


  /**
   * @author 何晏波
   * @QQ 1054539528
   * @date 2019/9/25
   * @function: 隐藏进度条
   */
  hideLoading = () => {
    this.setState({showLoading: false});
  }
}
