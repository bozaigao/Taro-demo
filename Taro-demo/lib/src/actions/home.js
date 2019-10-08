"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @filename login.ts
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/27
 * @Description: 登录模块
 */
const redux_1 = require("../utils/redux");
const httpurl_1 = require("../api/httpurl");
const INITIAL_STATE = {};
function home(state = INITIAL_STATE, action) {
    if (action.type) {
        switch (action.type) {
            default:
                return state;
        }
    }
    return state;
}
exports.default = home;
/**
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/10/8
 * @function: 获取banner信息
*/
exports.dispatchBannerInfo = payload => redux_1.createAction({
    url: httpurl_1.Home.getBannerData,
    payload,
    type: 'bannerInfo'
});
//# sourceMappingURL=home.js.map