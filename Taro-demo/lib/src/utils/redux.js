"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @filename redux.ts
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/27
 * @Description: 适当封装 Redux，简化调用
*/
const request_1 = require("../api/request");
function createAction(options) {
    const { url, payload, method, fetchOptions, cb, type } = options;
    return (dispatch) => {
        return request_1.default(Object.assign({ url, payload, method }, fetchOptions)).then((res) => {
            dispatch({ type, payload: cb ? cb(res) : res });
            return res;
        });
    };
}
exports.createAction = createAction;
//# sourceMappingURL=redux.js.map