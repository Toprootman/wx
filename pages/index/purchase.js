// pages/index/purchase.js
Page({
  jumpplaceorder: function () {
    if (this.data.User[0].state) {
      wx.navigateTo({
        url: './placeorder',
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
    User: [{
      /*控制用户登录状态*/
      state: false,
      userimg: "",
      order: [{
        state: true,
      }],
      collection: [{}],
      tel: "",
      address: [{}],
    }]
    ,
    shop: [{
      "mainTitle": "【全国配送】黑森林",
      "subTitle": "wink cake",
      "money": "148",
      "url": "/img/shop1.png",
      "evaluate": "3",
      "delivery": "快递配送",
      "remarks1": "xxxxx测试",
      "remarks2": "哇大大伟大",
      "specifications": ["0", "1", "2"],
      "people": [{
          "name": "张三",
          "headPortrait": "/img/1.jpg",
          "content": "这个蛋糕好好吃",
          "number": "80"
        },
        {
          "name": "张三",
          "headPortrait": "/img/1.jpg",
          "content": "这个蛋糕好好吃",
          "number": "30"

        },
        {
          "name": "张三",
          "headPortrait": "/img/1.jpg",
          "content": "这个蛋糕好好吃",
          "number": "30"

        }
      ],
      "average": ""
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var sum = 0;
    for (var i = 0; i < this.data.shop[0].people.length; i++) {
      sum = sum + parseInt(this.data.shop[0].people[i].number);
      console.log(sum);
    }
    this.setData({
      "shop[0].average": (sum / parseInt(this.data.shop[0].people.length)).toFixed(2)
    });
    console.log(this.data.shop[0].average)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.zcx = this.selectComponent("#zcx");
  },
 
  orderbtn: function () {
    this.zcx.setData({ show: true })
   
    console.log(this.zcx.data.show)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    
  }
  ,

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
