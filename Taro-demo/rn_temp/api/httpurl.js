//内网测试地址
// let StagingUrl = 'http://o2187v9517.51mypc.cn';
let StagingUrl = 'http://localhost:3721';
//线上发布地址
// let ProductionUrl = 'http://app.pointsj.com';
const BASE_URL = `${StagingUrl}/yaoren-app/`,

//网络请求返回状态码
NetworkState = {
  //返回成功
  SUCCESS: 0,
  //需要登录
  NEDD_LOGIN: -2,
  //登陆失败超过5次
  IMGCODE: 96,
  //识别失败
  IDENTITYFAILCODE: 80,
  //邀请失败错误码
  INVITECODE: 79,
  NO_FOUND: 404,
  //钱包余额不足,
  NSF: 89
},

//用户登录模块
UserLogin = {
  //用户登录
  login: "http://localhost:3721/yaoren-app/login/token",
  //发送短信
  sendCode: "http://localhost:3721/yaoren-app/login/messageCode",
  //发送语音验证码
  voiceCode: "http://localhost:3721/yaoren-app/login/voiceCode",
  //用户退出登录
  logout: "http://localhost:3721/yaoren-app/logout/logout"
},
      Home = {
  //获取banner信息
  getBannerData: "http://localhost:3721/yaoren-app/bannerData"
};
export { BASE_URL, NetworkState, UserLogin, Home };