// pages/shopCart/shopCart.js
Page({
  data: {
     list:[{
       id:0,
       checked:true,
       img:"../img/dish01.png",
       title:"鸡骨米",
       price:99.00,
       count:2
     },{
       id:1,
       checked:true,
       img:"../img/dish02.png",
       title:"鸡骨米",
       price:99.00,
       count:2
     },{
       id:2,
       checked:true,
       img:"../img/dish03.png",
       title:"鸡骨米",
       price:99.00,
       count:2
     }],
     opationBox:false,
     opationBtn:true
  },

  onLoad: function (options) {

  },

  // 点击编辑
  opationBtn(){
    this.setData({
      opationBtn:false,
      opationBox:true
    })
  },

// 点击完成
  completeBtn(){
    this.setData({
      opationBtn:true,
      opationBox:false
    })
  },

  // 减商品
  cutShop(ev){
    var that = this;
    var idx = ev.currentTarget.dataset.idx;
    var list = that.data.list;
        list[idx].count-=1;
    var _shopCount = that.addAllShopCount(0);
    var shopCount = _shopCount.count;
    var allMoney = _shopCount.allMoney;
    console.log(_shopCount);
    if (list[idx].count<1) {
      wx.showModal({
       title: '提示',
       content: '确定删除商品吗？',
       success: function(res) {
         if (res.confirm) {
           list.splice(idx,1);
           that.setData({
             list:list,
             shopCount:shopCount,
             allMoney:allMoney
           })
         } else if (res.cancel) {
           list[idx].count = 1;
           that.setData({
             list:list,
             shopCount:shopCount,
             allMoney:allMoney
           })
         }
       }
      })
    }else {
      that.setData({
        list:list,
        shopCount:shopCount,
        allMoney:allMoney
      })
    }

  },

  // 加商品
  addShop(ev){
    var that = this;
    var idx = ev.currentTarget.dataset.idx;
    var list = that.data.list;
        list[idx].count+=1;
    var _shopCount = that.addAllShopCount(1);
    console.log(_shopCount);
    var shopCount = _shopCount.count;
    var allMoney = _shopCount.allMoney;
      that.setData({
        list:list,
        shopCount:shopCount,
        allMoney:allMoney
      })
  },

// 计算商品总数
  addAllShopCount(status){
     var that = this;
     var list = that.data.list;
     var count = Number();
     var allMoney = Number();
     var countData = {}
     for (var i = 0; i < list.length; i++) {
        count += list[i].count;
        allMoney += list[i].count*list[i].price
     };
     countData = {
       count:count,
       allMoney:allMoney
     }
       return countData;
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
});
