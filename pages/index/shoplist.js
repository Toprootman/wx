// pages/index/index3.js
Page({
  jump: function() {
    wx.navigateTo({
      url: './purchase',
    })
    console.log("执行了")
  },

  /**
   * 页面的初始数据
   */
  data: {
    shop: [{
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop1.jpg",
        "evaluate": "3",
        "delivery": "快递配送"
      }, 
      {
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop2.jpg",
        "evaluate": "3",
        "delivery": "快递配送"
      },
      {
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop3.jpg",
        "evaluate": "3",
        "delivery": "快递配送"
      },
      {
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop4.jpg",
        "evaluate": "3",
        "delivery": "快递配送"
      },
      {
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop5.jpg",
        "evaluate": "3",
        "delivery": "快递配送"
      },
      {
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop6.jpg",
        "evaluate": "3",
        "delivery": "快递配送"
      },
      {
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop7.jpg",
        "evaluate": "3",
        "delivery": "快递配送"
      },
      {
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop8.jpg",
        "evaluate": "3",
        "delivery": "快递配送"
      },
    ],
    


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