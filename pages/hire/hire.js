const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    VerticalNavTop: 0,
    tabList: [{
      name: '红湘校区',
      flag: 1
    },{
        name: '雨母校区',
        flag: 2
      }, {
        name: '本部校外',
        flag: 3
      }, {
        name: '新校区校外',
        flag: 4
      }]
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    console.log(e.detail);
  }
})
