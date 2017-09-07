// pages/myCoupon/myCoupon.js
Page({
  data: {
    topNav:[{
      id:0,
      text:"全部",
      active:true
    },{
      id:1,
      text:"未使用",
      active:false
    },{
      id:2,
      text:"已使用",
      active:false
    },{
      id:3,
      text:"已过期",
      active:false
    }],
    list:[{
      price:50,
      use_term:"消费满199元减50元",
      use_date:"2017-09-01至2017-09-05"
    },{
      price:80,
      use_term:"消费满399元减80元",
      use_date:"2017-09-01至2017-09-05"
    },{
      price:20,
      use_term:"消费满99元减20元",
      use_date:"2017-09-01至2017-09-05"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 切换导航
  changeNav(ev){
    var that = this;
    var idx = ev.currentTarget.dataset.idx;
    var topNav = that.data.topNav;
    var list = that.data.list;
        list = list.reverse();
    for (var i = 0; i < topNav.length; i++) {
      topNav[i].active = false;
      topNav[idx].active = true;
    };
    that.setData({
      topNav:topNav,
      list:list
    })
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
