import Taro, {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import {styleAssign} from "../../utils/datatool";
import {bgColor, commonStyles, hRatio, iphoneX, pb, pt, wRatio} from "../../utils/style";
import SignAlert from "../../pages/home/sign-alert";
import Loading from "../loading";

interface Props {
  customStyle?: any;
  children?: any;
  notNeedSafe?: boolean;
}

interface State {
  paddingTop: any;
  paddingBottom: any;
  //是否显示每日签到对话框
  showSignAlert: boolean;
  //是否显示进度条
  showLoading: boolean;
}

export default class CustomSafeAreaView extends Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      paddingTop: 0,
      paddingBottom: 0,
      showSignAlert: false,
      showLoading: false,
    }
  }

  componentWillMount() {
    //这里只要是针对微信小程序设置自定义tabBar后的iphoneX高度适配
    if (iphoneX()) {
      this.setState({paddingTop: 78, paddingBottom: 94});
    } else {
      this.setState({paddingTop: 55,paddingBottom: 64});
    }

  }

  render() {
    let {customStyle, children, notNeedSafe} = this.props;
    let {paddingTop, paddingBottom, showSignAlert, showLoading} = this.state;

    console.log('距离顶部', paddingTop)

    return (
      <View
        style={styleAssign([wRatio(100), hRatio(100), bgColor(commonStyles.whiteColor), pt(notNeedSafe ? 0 : paddingTop), pb(paddingBottom), customStyle])}>
        {
          children
        }
        {
          showSignAlert && <SignAlert closeCallback={() => {
            this.hideSignAlert();
          }}/>
        }
        {
          showLoading && <Loading/>
        }
      </View>
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
