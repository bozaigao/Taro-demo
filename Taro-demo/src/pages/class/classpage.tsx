import Taro, {Component, Config} from '@tarojs/taro'
import {Image, ScrollView, Text, View} from '@tarojs/components'
import CustomSafeAreaView from "../../compoments/safe-area-view";
import {styleAssign} from "../../utils/datatool";
import styles, {bgColor, color, commonStyles, fSize, h, iphoneX, ml, mt, pl, pr, w, wRatio} from "../../utils/style";
import TouchableButton from "../../compoments/touchable-button";
//@ts-ignore
import icoNext from '../../assets/ico_next.png';
import RwztItem from "./renwu-zhitong-item";

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion


interface Props {
}

interface State {
  rewuList: any[];
}

class Classpage extends Component<Props, State> {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页',
    disableScroll: true
  }

  constructor(props) {
    super(props);
    this.state = {
      rewuList: [1, 2, 3, 4, 5, 6],
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    let {rewuList} = this.state;

    return (
      <CustomSafeAreaView>
        <ScrollView style={styleAssign([wRatio(100), h(iphoneX() ? 640 : 560)])}
                    scrollY>
          <View style={styleAssign([styles.uf1])}>
            <TouchableButton
              customStyle={styleAssign([styles.uac, styles.ujb, styles.udr, wRatio(100), h(50), pl(15), pr(15), bgColor(commonStyles.whiteColor), mt(5)])}>
              <Text style={styleAssign([fSize(18), color('#333333')])}>任务直通车</Text>
              <View style={styleAssign([styles.uac, styles.udr])}>
                <Text style={styleAssign([color('#999999'), fSize(14)])}>更多</Text>
                <Image style={styleAssign([w(7), h(12), ml(7)])}
                       src={icoNext}/>
              </View>
            </TouchableButton>
            {rewuList.map((item, index) => {
              return (
                <RwztItem item={item} key={index}/>);
            })}
          </View>
        </ScrollView>
      </CustomSafeAreaView>
    )
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Classpage;
