/**
 * @filename redux.ts
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/27
 * @Description: 适当封装 Redux，简化调用
*/
import fetch from "../api/request";
export function createAction(options) {
  const { url, payload, method, fetchOptions, cb, type } = options;
  return dispatch => {
    return fetch({ url, payload, method, ...fetchOptions }).then(res => {
      dispatch({ type, payload: cb ? cb(res) : res });
      return res;
    });
  };
}