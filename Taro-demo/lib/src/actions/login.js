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
const INITIAL_STATE = {
    mobile: '',
    id: '',
    integral: 0,
    name: '',
    role: '',
    hasContract: false,
    amount: 0,
};
function login(state = INITIAL_STATE, action) {
    if (action.type) {
        switch (action.type) {
            default:
                return state;
        }
    }
    return state;
}
exports.default = login;
/**
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/27
 * @function: 接口请求登录
 */
exports.dispatchLogin = payload => redux_1.createAction({
    url: httpurl_1.UserLogin.login,
    payload,
    type: 'login'
});
/**
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/27
 * @function: 手动更新用户信息
 */
exports.dispatchUpdateUserInfo = payload => redux_1.createAction({
    url: httpurl_1.UserLogin.login,
    payload
});
//# sourceMappingURL=login.js.map