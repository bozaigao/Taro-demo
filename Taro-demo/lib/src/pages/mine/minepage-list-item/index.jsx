"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @filename index.tsx
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/25
 * @Description: 我的页面列表模块
 */
const Style_1 = require("../../../utils/Style");
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
const touchable_button_1 = require("../../../compoments/touchable-button");
const datatool_1 = require("../../../utils/datatool");
class MinePageListItem extends taro_1.PureComponent {
    render() {
        let { iconL, iconLW, iconLH, title, rightComponent, noline, noNextIcon, onItemPress } = this.props;
        return (<touchable_button_1.default customStyle={[Style_1.h(50), Style_1.default.uac, Style_1.pl(15), Style_1.pr(15), Style_1.bgColor(Style_1.commonStyles.whiteColor)]} onClick={() => {
            onItemPress();
        }}>
        <components_1.View style={datatool_1.styleAssign([Style_1.default.udr, Style_1.default.ujb, Style_1.default.uac, Style_1.wRatio(100), Style_1.h(50), Style_1.bb(0.5), Style_1.bdColor(noline ? Style_1.commonStyles.transparent : '#e9eff4')])}>
          <components_1.View style={datatool_1.styleAssign([Style_1.default.udr, Style_1.default.uac])}>
            {iconL ? <components_1.Image src={iconL} style={datatool_1.styleAssign([Style_1.w(iconLW), Style_1.h(iconLH), Style_1.mr(11)])}/> : null}
            <components_1.Text style={datatool_1.styleAssign([Style_1.fSize(14), Style_1.color(Style_1.commonStyles.textBlackColor)])}>{title}</components_1.Text>
          </components_1.View>
          <components_1.View style={datatool_1.styleAssign([Style_1.default.udr, Style_1.default.uac])}>
            {rightComponent ? rightComponent : null}
            {noNextIcon ? null : <components_1.Image src={'../../../assets/ico_minepage_item_arrow.png'} style={datatool_1.styleAssign([Style_1.w(6), Style_1.h(10), Style_1.ml(8)])}/>}
          </components_1.View>
        </components_1.View>
      </touchable_button_1.default>);
    }
}
exports.MinePageListItem = MinePageListItem;
exports.default = MinePageListItem;
//# sourceMappingURL=index.jsx.map