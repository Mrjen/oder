// pages/Mine/Mine.js
Page({
  data: {
    list:[{
      id:1,
      icon:"../img/mine_order.png",
      text:"我的订单",
      url:"../OrderList/OrderList"
    },{
      id:2,
      icon:"../img/mine_car.png",
      text:"我的购物车",
      url:"../shopCart/shopCart"
    },{
      id:3,
      icon:"../img/mine_clock.png",
      text:"系统通知",
      url:"../Notice/Notice"
    },{
      id:4,
      icon:"../img/mine_card.png",
      text:"会员卡",
      url:"../myOrder/myOrder"
    },{
      id:5,
      icon:"../img/mine_coupon.png",
      text:"优惠券",
      url:"../myCoupon/myCoupon"
    }]
  },

  onLoad: function (options) {

  },

  onReady: function () {

  },

  onShow: function () {
    var avatarUrl = wx.getStorageSync("avatarUrl");
    var nickName = wx.getStorageSync("nickName");
    console.log(avatarUrl);
    this.setData({
      avatarUrl:avatarUrl,
      nickName:nickName
    })
  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})
