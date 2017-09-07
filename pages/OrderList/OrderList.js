// pages/OrderList/OrderList.js
Page({
  data: {
     topNav:[{
       id:0,
       text:"全部",
       active:true
     },{
       id:1,
       text:"待付款",
       active:false
     },{
       id:2,
       text:"待发货",
       active:false
     },{
       id:3,
       text:"待收货",
       active:false
     },{
       id:4,
       text:"待评价",
       active:false
     }],
     list:[{
       id:0,
       time:"2017-09-04 18:34:25",
       statusText:"待付款",
       shop:[{
         img:"../img/dish01.png",
         title:"意点大拼盘",
         price:99.00,
         count:2
       },{
         img:"../img/dish02.png",
         title:"意点大拼盘",
         price:99.00,
         count:2
       }]
     },{
       id:1,
       time:"2017-09-04 18:34:25",
       statusText:"已付款",
       shop:[{
         id:1,
         img:"../img/dish03.png",
         title:"意点大拼盘",
         price:99.00,
         count:2
       },{
         id:2,
         img:"../img/dish04.png",
         title:"意点大拼盘意点大拼盘意点大拼盘意点大拼盘",
         price:99.00,
         count:2
       }]
     },{
       id:2,
       time:"2017-09-04 18:34:25",
       statusText:"未付款",
       shop:[{
         id:3,
         img:"../img/dish05.png",
         title:"意点大拼盘",
         price:99.00,
         count:2
       },{
         id:4,
         img:"../img/dish04.png",
         title:"意点大拼盘",
         price:99.00,
         count:2
       }]
     }]
  },

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

  onReady: function () {

  },

  onShow: function () {

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
