declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt';
    [key: string]: any;
  }
}

//global全局数据声明
export interface Global {
  //是否为开发环境
  debug:boolean;
  console:any;
  /*****设备相关信息*******/
  iphoneX: boolean;
  SDKVersion: any;
  brand: any;
  fontSizeSetting: number;
  language: any;
  model: any;
  pixelRatio: number;
  platform: string;screenWidth
  screenHeight: number;
  screenWidth: number;
  statusBarHeight: number;
  system: string;
  version: any;
  windowHeight: number;
}

//签到
export interface SignInPage {
  canSignIn?: boolean; // 今天能不能签到 ,
  dateIntegrals: number[]; // 每天签到获得积分数量，长度为7的数组保存7天签到可以获得的积分数量 ,
  integral?: number; // 积分数量 ,
  signInCount?: number; // 连续签到次数
}

//用户基本信息
export interface UserInfo {
  accountInfo?: AccountInfo;
}

export interface AccountInfo {
  mobile?: string;
  id?: string;
  integral?: number; // 积分数量 ,
  name?: string;
  role?: string;
  hasContract?: boolean;
  amount?: number;
}
