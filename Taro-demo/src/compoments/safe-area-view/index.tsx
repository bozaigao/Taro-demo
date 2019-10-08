import Taro, {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import {styleAssign} from "../../utils/datatool";
import {bgColor, commonStyles, hRatio, wRatio} from "../../utils/style";
import SignAlert from "../../pages/home/sign-alert";
import Loading from "../loading";

interface Props {
  customStyle?: any;
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
    super(props);
    this.state = {
      showSignAlert: false,
      showLoading: false
    }
  }

  render() {
    let {customStyle, children} = this.props;
    let {showSignAlert, showLoading} = this.state;


    return (
      <View
        style={styleAssign([wRatio(100), hRatio(100), bgColor(commonStyles.whiteColor), customStyle])}>
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
    console.log('隐藏每日签到对话框');
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
