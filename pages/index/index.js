//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
     imgUrls: [
      '../img/banner01.jpg',
      '../img/banner02.jpg',
      '../img/banner03.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    navList:[{
      id:0,
      text:"招牌菜推荐",
      active:true
    },{
      id: 1,
      text: "评价最高菜品",
      active: false
    }],
    dishList: [{
      img: "../img/banner01.jpg",
      title: "精品牛排"
    }, {
      img: "../img/banner02.jpg",
      title: "至尊披萨"
    }, {
      img: "../img/banner03.jpg",
      title: "番茄汉堡组合"
    }],
    cards:[{
      img:"../img/cards1.png"
    },{
      img:"../img/cards2.png"
    },{
      img:"../img/cards3.png"
    }]
  },

// 导航切换
  changeNav(ev){
    var _index = ev.currentTarget.dataset.idx;
    var that = this;
    var _navList = that.data.navList;
    var dishList = that.data.dishList;
        dishList = dishList.reverse();
    for (let i = 0; i < _navList.length;i++){
      _navList[i].active = false;
      _navList[_index].active = true;
    };
    that.setData({
      navList:_navList,
      dishList:dishList
    })
  },

  toCards(){
    wx.navigateTo({
      url: '../coupon/coupon'
    })
  },

  // 去店铺详情
  toShopMap(){
    var that = this;
    var shopAddressControl = that.data.shopAddressControl;
    if (shopAddressControl) {
      wx.navigateTo({
        url: '../shopDetail/shopDetail'
      })
    }else {
      console.log("不能导航");
    }

  },

  onShow(){
    var that = this;
     app.getUserInfo();
     wx.request({
       url:"https://cook.playonwechat.com/static/control.json",
       success(res){
         console.log(res);
         var shopAddressControl = res.data.data.control;
         that.setData({
           shopAddressControl:shopAddressControl
         })
       }
     })
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
  }
})
