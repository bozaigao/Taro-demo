const delay = require('mocker-api/utils/delay'); // 延时 模拟请求异步问题


const data = {
  'GET /yaoren-app/login/token': {
    data: {
      userId: 1,
      userName: '何晏波',
      userSex: 6
    },
    statusCode: '200'
  },
  'GET /yaoren-app/bannerData': {
    data: {
      urls:["https://gzol.oss-cn-qingdao.aliyuncs.com/20190906161007.png",
        "https://gzol.oss-cn-qingdao.aliyuncs.com/20190926100637.png",
        "https://gzol.oss-cn-qingdao.aliyuncs.com/20190926103054.png",
        "https://gzol.oss-cn-qingdao.aliyuncs.com/20190926115113.png"
      ]
    },
    statusCode: '200'
  }
}

//使用delay方法可以延迟返回数据
module.exports = delay(data, 0);
