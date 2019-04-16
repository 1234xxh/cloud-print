// pages/home/home.js
const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    hasUserInfo: false,
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    cardCur: 0,
    elements: [
      { title: '商家信息', name: 'hire', color: 'green', icon: 'vipcard' },
      { title: '普通打印', name: 'apply', color: 'olive', icon: 'formfill' },
      { title: '案例信息', name: 'list', color: 'pink', icon: 'list' },
      { title: '论文打印', name: 'cooperate', color: 'brown', icon: 'group_fill' },
      { title: '打印商城', name: 'mall', color: 'red', icon: 'appreciate' },
      { title: '其它打印', name: 'online', color: 'orange', icon: 'favor' },
      // { title: '意见反馈', name: 'modal', color: 'grey', icon: 'comment' },
      // { title: '平台信息', name: 'steps', color: 'cyan', icon: 'info' },
    ],
  },

  onLoad: function () {
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
              //用户已经授权过
            }
          })
        }
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    // app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
    })
  },
  // 获取按键的绑定值
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  }
})