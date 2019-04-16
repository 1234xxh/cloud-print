const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    timeList: [{
      time: "今天",
      times: "15:32",
      local: "湖南省衡阳市",
      student: "仅此而已",
      parent: "心仪",
      flag: true,
      color: "red"
    }, {
        time: "",
        times: "13:46",
        local: "湖南省长沙市",
        student: "残留の笑颜",
        parent: "蓝天",
        flag: false,
        color: "orange"
      }, {
        time: "",
        times: "9:17",
        local: "湖北省武汉市",
        student: "电工在减肥",
        parent: "心仪古月火韦",
        flag: true,
        color: "olive"
      }, {
        time: "昨天",
        times: "21:11",
        local: "山东省泰安市",
        student: "夨落旳尐孩",
        parent: "高冷低能",
        flag: true,
        color: "blue"
      }, {
        time: "",
        times: "14:32",
        local: "河北省石家庄市",
        student: "龙卷风卷走爱情",
        parent: "巴黎盛开的樱花",
        flag: true,
        color: "cyan"
      }, {
        time: "",
        times: "8:49",
        local: "广东省茂名市",
        student: "猫腻",
        parent: "烟花巷陌",
        flag: false,
        color: "purple"
      }, {
        time: "2019年4月9日",
        times: "19:32",
        local: "四川省自贡市",
        student: "刺心爱人i",
        parent: "龙吟凤",
        flag: true,
        color: "mauve"
      }, {
        time: "",
        times: "12:52",
        local: "北京市",
        student: "限量版女汉子",
        parent: "蝶恋花╮",
        flag: true,
        color: "green"
      }, {
        time: "2019年4月8日",
        times: "9:14",
        local: "内蒙古省呼和浩特市",
        student: "有一种悲伤",
        parent: "珠穆郎马疯@",
        flag: false,
        color: "brown"
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