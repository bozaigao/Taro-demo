"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @filename index.tsxhor 何晏波
 * @QQ 1054539528
 * @date 2019/9/15
 * @Description: 首页搜索栏
 */
// import {Navigation} from 'react-navigation';
const components_1 = require("@tarojs/components");
const taro_1 = require("@tarojs/taro");
class HomeSearchTop extends taro_1.PureComponent {
    render() {
        return (<components_1.View className='home__search'>
        
        <components_1.View className='home__search-xinfeng'>
          <components_1.Button onClick={() => {
            console.log('点击我了哈哈');
            // navigation.navigate('MessagePage')
        }}>
            <components_1.Image src={'../../../../assets/ico_homepage_xinfeng.png'} className='home__search-xinfeng-image'/>
          </components_1.Button>
          <components_1.View className='home__search-xinfeng-view'/>
        </components_1.View>
        
        <components_1.View>
          <components_1.Button onClick={() => {
            // navigation.navigate('SearchPage')
        }}>
            <components_1.Image src={'../../../../assets/ico_homepage_search_bg.png'} className='home__search-bg-image'>
              <components_1.View className='home__search-bg-image-view'>
                <components_1.Image src={'../../../../assets/ico_homepage_search_gray.png'} className='home__search-bg-image-view-image'/>
                <components_1.Text className='home__search-bg-image-view-text'>搜索</components_1.Text>
              </components_1.View>
            </components_1.Image>
          </components_1.Button>
        </components_1.View>
        
        <components_1.View>
          <components_1.Button onClick={() => {
            console.log('记录');
            // navigation.navigate('LookHistoryPage')
        }}>
            <components_1.Image src={'../../../../assets/ico_homepage_clock.png'} className='home__search-record'/>
          </components_1.Button>
        </components_1.View>
      </components_1.View>);
    }
}
exports.default = HomeSearchTop;
//# sourceMappingURL=index.jsx.map