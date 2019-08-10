// pages/index/collection.js
Page({
  jump: function () {
    wx.navigateTo({
      url: './purchase',
    })
    console.log("执行了")
  },
  cancel: function (e) {
    var idx = e.target.dataset.index;
    
    this.data.User[0].collection.splice(idx, 1)
    var a = this.data.User[0].collection;
    console.log(this.data.User[0].collection);
    this.setData({collection:a})
    console.log(this.data.User[0])
    

    wx.onShow
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
        "id":"0",
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
      address: [{}],
    }]
    , 

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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("执行了")
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