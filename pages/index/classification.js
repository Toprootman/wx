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
        "name": "新鲜水果",
        "id": "0"
      },
      {
        "name": "海鲜水产",
        "id": "1"
      }, {
        "name": "肉禽蛋品",
        "id": "2"
      }, {
        "name": "新鲜蔬菜",
        "id": "3"
      }
      , {
        "name": "冷冻饮品",
        "id": "4"
      }
    ],
    shop: [{
      "mainTitle": "寻鲜缘季 云南昭通冰糖心丑苹果 京东新鲜水果 顺丰速运包邮 小果5斤装20个左右",
        "subTitle": "wink cake",
        "money": "24.8",
        "url": "/img/sg1.jpg",
        "evaluate": "3",
        "delivery": "快递配送",
        "id": "1"
      },
      {
        "mainTitle": "正宗北京平谷大桃12个 国庆礼盒装 京津冀包邮 脆甜桃子现摘现发 新鲜水果 京东生鲜 北京水蜜桃 单果5两 礼盒装 精选优果个大色艳甜度高放软多汁",
        "subTitle": "wink cake",
        "money": "69.90",
        "url": "/img/sg2.jpg",
        "evaluate": "3",
        "delivery": "快递配送",
        "id": "0"
      },
      {
        "mainTitle": "中国红 软籽石榴 8粒礼盒装精选大果 单果400g以上 国庆水果礼盒 【中国红】【国庆礼】【礼盒佳品】【大果软籽石榴】",
        "subTitle": "wink cake",
        "money": "45.50",
        "url": "/img/sg3.jpg",
        "evaluate": "3",
        "delivery": "快递配送",
        "id": "0"
      },
      {
        "mainTitle": "【领券立减5元】百宝源 夏季草莓 酸草莓 红颜草莓2盒 300g左右/盒 水果礼盒 坏果包赔",
        "subTitle": "wink cake",
        "money": "59.00",
        "url": "/img/sg4.jpg",
        "evaluate": "3",
        "delivery": "快递配送",
        "id": "0"
      },
      {
        "mainTitle": "西州蜜瓜25号哈密瓜 2粒装 单果1.5kg以上 新鲜水果 【夏日家庭实惠装，冰箱冷藏后口感更佳！】果肉脆嫩细滑，果香浓郁沁心，入口别致脆甜，产地直采，美味与甜蜜双重享受！",
        "subTitle": "wink cake",
        "money": "39.90",
        "url": "/img/sg5.jpg",
        "evaluate": "3",
        "delivery": "快递配送",
        "id": "0"
      },
      {
        "mainTitle": "泰国进口 金枕头榴莲 2.5-3kg 1个装 新鲜水果 【自营产地直采，肉厚核小香甜软糯】收货后建议24h内食用，未熟的需催熟后食用（方法见页面），一次吃不完可取肉冷藏或冷冻爆款火龙果直降请戳~",
        "subTitle": "wink cake",
        "money": "179",
        "url": "/img/sg6.jpg",
        "evaluate": "3",
        "delivery": "快递配送",
        "id": "0"
      },
      {
        "mainTitle": "越南红心火龙果 原箱装 大果 总重6kg以上（9-12个）单果约430-600g 送礼推荐 新鲜水果 【时令大果超高性价比】自营原包直采，由于产地果园批次不同，包装随机发放，人工选果大小可能存在差异，口感品质稳定如一",
        "subTitle": "wink cake",
        "money": "129",
        "url": "/img/sg7.jpg",
        "evaluate": "3",
        "delivery": "快递配送",
        "id": "0"
      },
      {
        "mainTitle": "精选美国进口车厘子 大樱桃精选大果 果径28-32mm 京东或顺丰空运发货 2.5kg礼盒装 ",
        "subTitle": "wink cake",
        "money": "249",
        "url": "/img/sg8.jpg",
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