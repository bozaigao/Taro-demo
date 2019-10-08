/**
 * @filename login.ts
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/27
 * @Description: 登录模块
 */
import {createAction} from "../utils/redux";
import {UserLogin} from "../api/httpurl";

const INITIAL_STATE = {
  mobile: '',
  id: '',
  integral: 0, // 积分数量 ,
  name: '',
  role: '',
  hasContract: false,
  amount: 0,
}

export default function login(state = INITIAL_STATE, action) {
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
 * @date 2019/9/27
 * @function: 接口请求登录
 */
export const dispatchLogin = payload => createAction({
  url: UserLogin.login,
  payload,
  type:'login'
});


/**
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/27
 * @function: 手动更新用户信息
 */
export const dispatchUpdateUserInfo = payload => createAction({
  url: UserLogin.login,
  payload
});
