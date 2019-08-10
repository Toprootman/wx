page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    region: ["四川省", "广元市", "苍溪县"],
    bannerUrl: [{
        "url": "/img/banner1.jpg"
      },
    ],
    recommend: [{
        "url": "/img/recommend1.png",
        "title": "创意网红"
      }
    ],
    flavorrecommend: [{
        "url": "/img/kouwei1.jpg"
      }
    ],
    User: [{
      
      /*控制用户登录状态*/
      state: false,
      userimg: "",
      order: [{
        name: "【全国配送】黑森林",
        state: "交易成功",
        time: "2018-09-30 14:00-16:00",
        status: "已结束",
        url: "/img/shop1.png",
        money: "132",
        state: true,
      }],
      collection: [{
        "id": "0",
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop1.png",
        "evaluate": "3",
        "delivery": "快递配送"
      }, ],
      tel: "",
      address: [{
        "name": "张晨曦",
        "tel": "17733007155",
        "province": "河北省",
        "city": "张家口市",
        "county": "怀来县",
        "detailedaddress": "沙城镇南园村"
      }],
    }],
  },
  sheight: "",
  classificationList: [{
      "name": "人气推荐",
      "id": "0"
    }
  ],
  shop: [{
    "mainTitle": "【全国配送】黑森林",
    "subTitle": "wink cake",
    "money": "148",
    "url": "/img/shop1.png",
    "evaluate": "3",
    "delivery": "快递配送",
    "id": "0",
    "remarks1": "xxxxx测试",
    "remarks2": "哇大大伟大",
    "specifications": ["0", "1", "2"],
    "people": [{
      "name": "张三",
      "headPortrait": "/img/1.jpg",
      "content": "这个蛋糕好好吃",
      "number": "30"
    }],
    "average": ""
  }],
  list: [{
      "name": "jumpcollection",
      "text": "我的收藏"
    }
  ],
  express: [{
    "text": "待付款",
    "imgUrl": "/icon/express1.png"
  }],
  currtab: 0,
  swipertab: [{
    name: '已完成',
    index: 0
  }, {
    name: '待付款',
    index: 1
  }, {
    name: '已取消',
    index: 2
  }]
})