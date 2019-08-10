// pages/index/my.js
Page({
  jumpcollection: function () {
    if (this.data.User[0].state){
      wx.navigateTo({
        url: './collection',
      })
    }else{
      wx.navigateTo({
        url: './register',
      })
    }
  },
  jumpcoupon: function () {
    if (this.data.User[0].state) {
      wx.navigateTo({
        url: './coupon',
      })
    } else {
      wx.navigateTo({
        url: './register',
      })
    }
  },
  jumpaddress: function () {
    if (this.data.User[0].state) {
      wx.navigateTo({
        url: './address',
      })
    } else {
      wx.navigateTo({
        url: './register',
      })
    }
  },
  jumporder: function() {
    if (this.data.User[0].state) {
      wx.navigateTo({
        url: './order',
      })
    } else {
      wx.navigateTo({
        url: './register',
      })
    }
  },
  

  /**
   * 页面的初始数据
   */
  data: {
    User:[{
      /*控制用户登录状态*/
      state:true,
      userimg:"",
      order:[{
        state: true,
      }],
      collection:[{}],
      tel:"",
      address:[{}],
  }]
    ,
    list: [{
      "name":"jumpcollection",
        "text": "我的收藏"
      },
      {
        "name": "jumpcoupon",
        "text": "优惠券"
      },
      {
        "name":"jumpaddress",
        "text": "地址管理"
      },
      {
        "name": "jumpfeedback",
        "text": "意见反馈"
      }
    ],
    express:[
      {
        "text":"待付款",
        "imgUrl":"/icon/express1.png"
      }, {
        "text": "待发货",
        "imgUrl": "/icon/express2.png"
      }, {
        "text": "待收货",
        "imgUrl": "/icon/express3.png"
      }, {
        "text": "待评价",
        "imgUrl": "/icon/express4.png"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})