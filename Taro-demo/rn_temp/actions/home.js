/**
 * @filename login.ts
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/27
 * @Description: 登录模块
 */
import { createAction } from "../utils/redux";
import { Home } from "../api/httpurl";
const INITIAL_STATE = {};
export default function home(state = INITIAL_STATE, action) {
  if (action.type) {
    switch (action.type) {
      default:
        return state;
    }
  }
  return state;
}
/**
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/10/8
 * @function: 获取banner信息
*/
export const dispatchBannerInfo = payload => createAction({
  url: Home.getBannerData,
  payload,
  type: 'bannerInfo'
});