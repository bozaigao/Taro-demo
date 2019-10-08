"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taro_1 = require("@tarojs/taro");
const httpurl_1 = require("./httpurl");
const CODE_SUCCESS = '200';
// function getStorage(key) {
//   return Taro.getStorage({key}).then(res => res.data).catch(() => '');
// }
//
// function updateStorage(data = {}) {
//   return Promise.all([
//     Taro.setStorage({key: 'token', data: data['3rdSession'] || ''}),
//     Taro.setStorage({key: 'uid', data: data['uid'] || ''})
//   ]);
// }
/**
 * 简易封装网络请求
 * // NOTE 需要注意 RN 不支持 *StorageSync，此处用 async/await 解决
 * @param {*} options
 */
async function fetch(options) {
    const { url, payload, method = 'GET', showToast = true, autoLogin = true } = options;
    const token = null;
    const header = token ? { 'WX-PIN-SESSION': token, 'X-WX-3RD-Session': token } : {};
    header['Content-type'] = 'application/json';
    header['Accept'] = 'application/json';
    header['Connection'] = 'close';
    return taro_1.default.request({
        url,
        method,
        data: payload,
        header
    }).then(async (res) => {
        console.log('返回的数据', res);
        const { code, data, message } = res.data;
        if (code === httpurl_1.NetworkState.NEDD_LOGIN && autoLogin) {
            console.log(('自动登录'));
            return Promise.reject(data);
            // Taro.navigateTo({
            //   url: '/pages/user-login/user-login'
            // });
        }
        else if (showToast && message) {
            taro_1.default.showToast({
                title: message,
                icon: 'none'
            });
        }
        return data;
    }).catch((err) => {
        let defaultMsg = '';
        if (err.code !== CODE_SUCCESS) {
            defaultMsg = '请求异常';
        }
        return Promise.reject(Object.assign({ message: defaultMsg }, err));
    });
}
exports.default = fetch;
//# sourceMappingURL=request.js.map