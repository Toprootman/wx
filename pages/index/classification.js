// pages/index/index2.js
Page({
  jump: function () {
    wx.navigateTo({
      url: './purchase',
    })
    console.log("执行了")
  },

  /**
   * 页面的初始数据
   */
  data: {
    sheight:""
    ,
    classificationList: [{
        "name": "人气推荐",
        "id": "0"
      },
      {
        "name": "按口味",
        "id": "1"
      }, {
        "name": "按人群",
        "id": "2"
      }, {
        "name": "按人群",
        "id": "3"
      }
    ],
    shop: [{
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop1.png",
        "evaluate": "3",
        "delivery": "快递配送",
        "id": "0"
      },
      {
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop2.png",
        "evaluate": "3",
        "delivery": "快递配送",
        "id": "0"
      },
      {
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop3.png",
        "evaluate": "3",
        "delivery": "快递配送",
        "id": "0"
      },
      {
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop4.png",
        "evaluate": "3",
        "delivery": "快递配送",
        "id": "0"
      },
      {
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop5.png",
        "evaluate": "3",
        "delivery": "快递配送",
        "id": "0"
      },
      {
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop6.png",
        "evaluate": "3",
        "delivery": "快递配送",
        "id": "0"
      },
      {
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop7.png",
        "evaluate": "3",
        "delivery": "快递配送",
        "id": "0"
      },
      {
        "mainTitle": "【全国配送】黑森林",
        "subTitle": "wink cake",
        "money": "148",
        "url": "/img/shop8.png",
        "evaluate": "3",
        "delivery": "快递配送",
        "id": "0"
      },
      
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var shoplength = this.data.shop.length;
    if (shoplength % 2 == 1) {
      shoplength++;
    }
    this.setData({ "sheight": shoplength / 2 * 320 + 21 });
  },
  //获取当前滑块的index
  bindchange: function(e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function(e) {
    const that = this;
    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
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