// pages/apply/private.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    indexs: '',
    name: '',
    info: '',
    view: '',
    nice: '',
    comments: [],
    time: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.name)
    // console.log(options.nice)
    // console.log(options.info)
    // console.log(options.view)
    // var comment = []
    // for (var i = 0; i < options.comment; i++){
    //   comment.push(options.comment)
    // }
    // console.log(comment)
    this.setData({
      indexs: options.index,
      name: options.name,
      info: options.info,
      view: options.view,
      nice: options.nice,
      comments: options.comment,
      time: options.time
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