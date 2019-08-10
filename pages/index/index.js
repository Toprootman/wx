//index.js
//获取应用实例
const app = getApp()

Page({
  list: function () {
    wx.navigateTo({
      url: './shoplist',
    })
    console.log("执行了")
  },
  jump: function () {
    wx.navigateTo({
      url: './purchase',
    })
    console.log("执行了")
  },
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    bannerUrl: [{
        "url": "/img/banner1.jpg"
      },
      {
        "url": "/img/banner2.jpg"
      },
      {
        "url": "/img/banner3.jpg"
      }
    ],
    recommend: [{
        "url": "/img/recommend1.png",
        "title": "创意网红"
      },
      {
        "url": "/img/recommend2.png",
        "title": "今日达"
      },
      {
        "url": "/img/recommend3.png",
        "title": "热卖"
      },
      {
        "url": "/img/recommend4.png",
        "title": "全部"
      }
    ],
    flavorrecommend: [{
        "url": "/img/kouwei1.jpg"
      },
      {
        "url": "/img/kouwei2.jpg"
      },
      {
        "url": "/img/kouwei3.jpg"
      },
      {
        "url": "/img/kouwei4.jpg"
      },
      {
        "url": "/img/kouwei5.jpg"
      },
      {
        "url": "/img/kouwei6.jpg"
      },
      {
        "url": "/img/kouwei7.jpg"
      },
      {
        "url": "/img/kouwei8.jpg"
      },
      {
        "url": "/img/kouwei9.jpg"
      }
    ],
    shop: [{
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop1.png",
        "evaluate": "3",
        "delivery": "快递配送"
      },
      {
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop2.png", 
        "evaluate": "3",
        "delivery": "快递配送"
      },
      {
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop3.png",
        "evaluate": "3",
        "delivery": "快递配送"
      },
      {
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop4.png",
        "evaluate": "3",
        "delivery": "快递配送"
      },
      {
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop5.png",
        "evaluate": "3",
        "delivery": "快递配送"
      },
      {
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop6.png",
        "evaluate": "3",
        "delivery": "快递配送"
      },
      {
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop7.png",
        "evaluate": "3",
        "delivery": "快递配送"
      },
      {
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop8.png",
        "evaluate": "3",
        "delivery": "快递配送"
      },
    ]
   
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})