// pages/Order/Order.js
Page({
  data: {
     dishType:[{
       id:0,
       text:"全部",
       active:true
     },{
       id:1,
       text:"套餐",
       active:false
     },{
       id:2,
       text:"主食",
       active:false
     },{
       id:3,
       text:"菜品",
       active:false
     },{
       id:4,
       text:"饮品",
       active:false
     },{
       id:5,
       text:"套餐",
       active:false
     },{
       id:6,
       text:"套餐",
       active:false
     }],
     dishList:[{
      id:0,
      img:"../img/dish01.png",
      title:"意点大拼盘",
      price:99.00,
      sales:2
    },{
     id:1,
     img:"../img/dish02.png",
     title:"茄子豆角",
     price:99.00,
     sales:2
    },{
     id:2,
     img:"../img/dish03.png",
     title:"咸鱼茄子",
     price:99.00,
     sales:2
    },{
     id:3,
     img:"../img/dish04.png",
     title:"精品牛排",
     price:99.00,
     sales:2
    },{
     id:4,
     img:"../img/dish05.png",
     title:"烧鸭饭",
     price:99.00,
     sales:2
    },{
     id:5,
     img:"../img/dish03.png",
     title:"香菇滑鸡",
     price:99.00,
     sales:2
    },{
     id:6,
     img:"../img/dish02.png",
     title:"土豆排骨",
     price:99.00,
     sales:2
   }],
   currentList:{
     id:6,
     img:"../img/dish02.png",
     title:"意点大拼盘",
     price:99.00,
     sales:2,
     count:1
   }
  },

  onLoad: function (options) {

  },

  onReady: function () {

  },

  onShow: function () {
     var that = this;
     var len = that.data.dishType.length;
     var navWidth = 170*len;
     that.setData({
       navWidth:navWidth
     })
  },

  // 导航切换
  changeNav(ev){
    var that = this;
    var idx = ev.currentTarget.dataset.idx;
    var dishType = that.data.dishType;
    var dishList = that.data.dishList;
         dishList = dishList.reverse();
    for(let i=0;i<dishType.length;i++){
       dishType[i].active = false;
       dishType[idx].active = true;
    };
    that.setData({
      dishType:dishType,
      dishList:dishList
    })
  },

  // 加入购物车
  addShopCart(ev){
    var that = this;
    var idx = ev.currentTarget.dataset.idx;
    var dishList = that.data.dishList;
    var currentList = [];
        currentList = dishList[idx]
    currentList.count = 1;
    console.log(currentList)
    that.setData({
      currentList:currentList,
      shopCart:true
    })
  },

  closeCar(){
    this.setData({
      shopCart:false
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
