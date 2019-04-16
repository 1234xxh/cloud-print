// pages/list/list.js
const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    lists: [{
      info: "在红星社区的里做了一个月的家教，体验挺棒的，阿姨态度超好，小朋友也挺乖的",
      level: "五星",
      levels: 5,
      time: "1小时前",
      view: "56",
      nice: "34",
      comment: "12",
      parentComment: "给这位同学一个赞，我儿子有点皮，没想到他这么耐心！"
    }, {
        info: "做了三个月的长期家教，有点累啊",
        level: "三星",
        levels: 3,
        time: "6小时前",
        view: "34",
        nice: "22",
        comment: "5",
        parentComment: "这位同学认真负责，挺有耐心的，还可以，只是经验稍显年轻！"
      }, {
        info: "我和数学有个约定，在这2个月中，虽然忙碌，但是也收获了成长",
        level: "四星",
        time: "一天前",
        levels: 4,
        view: "42",
        nice: "40",
        comment: "6",
        parentComment: "很不错，做事认真负责，教学方式生动，我女儿现在对于数学的学习不会感到枯燥了，最起码抵触心理没了。"
      }, {
        info: "推荐一家态度超好的做家教的家庭，叔叔阿姨态度超棒，他家孩子今年初二，虽然成绩不是很好，但是很认学",
        level: "五星",
        levels: 5,
        time: "2019年4月9日",
        view: "23",
        nice: "12",
        comment: "3",
        parentComment: "我儿子的数学成绩通过这三个月的辅导提升20+分，谢谢这位同学这三个月的细心辅导了"
      }, {
        info: "唉，感觉自己能力有点差，要提升一下了",
        level: "三星",
        levels: 3,
        time: "2019年4月6日",
        view: "77",
        nice: "47",
        comment: "9",
        parentComment: "认真负责，挺仔细，道德修养蛮好的，对于此次的家教辅导感觉还不错！"
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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