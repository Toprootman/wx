// pages/index/address.js
Page({
  jump: function () {
    wx.navigateTo({
      url: './addaddress',
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    User: [{
      /*控制用户登录状态*/
      state: false,
      userimg: "",
      order: [{
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
      },
      {
        "id": "1",
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "145",
        "url": "/img/shop1.png",
        "evaluate": "3",
        "delivery": "快递配送"
      }
      ],
      tel: "",
      address: [{
        "name":"张晨曦",
        "tel":"17733007155",
        "province":"河北省",
        "city":"张家口市",
        "county":"怀来县",
        "detailedaddress":"沙城镇南园村"
      },
        {
          "name": "张晨曦",
          "tel": "17733007155",
          "province": "河北省",
          "city": "张家口市",
          "county": "怀来县",
          "detailedaddress": "沙城镇南园村"
        }],
      coupon: [{}],
      feedback: [{}]
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.address = this.selectComponent("#address");
  },

  change: function () {
    this.address.setData({ show: true })

    console.log(this.address.data.show)
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})