// pages/apply/apply.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    applyList: [{
      name: "张三",
      title: "高考时数学130分，对数学有浓厚的兴趣",
      location: "中南大学",
      good: ["高中","数学"],
      num: 2,
      view: 30,
      nice: 10,
      comment: 5,
      time: "2019年4月1日",
      info: "我是一名数理学院1603班的学生，性别男，成绩优异，专业前10，担任班干部，有过家教经验"
    }, {
        name: "李四",
        title: "大学英语6级610分，有兴趣辅导英语",
        location: "南华大学",
        good: ["高中", "初中", "英语"],
        num: 3,
        view: 35,
        nice: 12,
        comment: 3,
        time: "2019年3月11日",
        info: "我是一名语言文学学院1703班的学生，性别女，成绩优异，专业前3，在团学会担任职务"
      }, {
        name: "王五",
        title: "理科生，物理专业",
        location: "湖南大学",
        good: ["高中", "初中", "物理"],
        num: 3,
        view: 70,
        nice: 40,
        comment: 5,
        time: "2019年2月28日",
        info: "我是一名应用物理专业1615班的学生，性别男，成绩优异，拿过国家励志奖学金，乐观活泼"
      }, {
        name: "张伟",
        title: "对政治与历史与地理都有独到的见解",
        location: "衡阳师范学院",
        view: 50,
        nice: 33,
        comment: 3,
        time: "2019年2月18日",
        good: ["高中", "初中", "政治", "地理"],
        num: 4,
        info: "我是一名设计学院1507班的学生，性别女，成绩在专业前茅，担任团支书，是一名中共党员"
      }, {
        name: "王芳",
        title: "物理化学很nice",
        location: "湖南师范大学",
        good: ["高中", "物理"],
        num: 2,
        view: 39,
        nice: 13,
        comment: 2,
        time: "2019年4月8日",
        info: "我是一名数理学院1702班的学生，性别女，成绩优异，专业前三，担任班干部，有过家教经验"
      }, {
        name: "李娜",
        title: "汉语言文学院，可以辅导语文",
        location: "南华大学",
        view: 66,
        nice: 45,
        comment: 9,
        time: "2019年3月8日",
        good: ["高中", "初中", "语文"],
        num: 3,
        info: "我是一名汉语言文学院1603班的学生，性别女，活泼开朗，担任班长，拿过两年国家奖学金"
      }, {
        name: "张秀英",
        title: "药学院，生物很nice",
        location: "国防科技大学",
        good: ["高中", "生物"],
        num: 2,
        view: 102,
        nice: 78,
        comment: 7,
        time: "2019年4月9日",
        info: "我是一名药学院1603班的学生，性别女，担任团学会主席，乐于助人，成绩优秀"
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