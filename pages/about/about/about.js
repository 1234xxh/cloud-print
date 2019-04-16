const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    index: null,
    time: false,
    times: 0,
    region: ['湖南省', '衡阳市', '蒸湘区'],
    fieldList: [{
      index: 0,
      name: '数学'
    }, {
      index: 1,
      name: '语文'
    }, {
      index: 2,
      name: '英语'
    }, {
      index: 3,
      name: '化学'
    }, {
      index: 4,
      name: '生物'
    }, {
      index: 5,
      name: '物理'
    }, {
      index: 6,
      name: '地理'
    }, {
      index: 7,
      name: '政治'
    }, {
      index: 8,
      name: '历史'
    }],
    select: [],
    good_1: null,
    good_2: null,
    good_3: null,
    good_4: null,
    good_5: null,
    good_6: null,
    flag: true
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },
  RegionChange: function(e) {
    console.log(e.detail.code)

    this.setData({
      region: e.detail.value
    })
  },
  Certify() {
    this.setData({
      loadModal: true,
      loadCertify: false
    })
    setTimeout(() => {
      this.setData({
        loadModal: false,
        loadCertify: true
      })
    }, 2000)
    setTimeout(() => {
      this.setData({
        loadCertify: false
      })
    }, 3000)
  },
  Dis() {
    var _this = this
    _this.setData({
      time: true,
      times: 60
    })
    var coden = 60 // 定义60秒的倒计时
    var codeV = setInterval(function() {
      _this.setData({ // _this这里的作用域不同了
        times: (--coden)
      })
      if (coden == -1) { // 清除setInterval倒计时，按钮变回原样
        clearInterval(codeV)
        _this.setData({
          time: false
        })
      }
    }, 1000) //  1000是1秒
  },
  showModal(e) {
    console.log("show")
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    console.log("hide")
    this.setData({
      modalName: null,
      good_1: null,
      good_2: null,
      good_3: null,
      good_4: null,
      good_5: null,
      good_6: null,
      flag: true
    })
  },
  checkboxChange: function (options) {
    console.log('checkbox发生change事件，携带value值为：', options.detail);
    this.setData({
      flag: false,
      good_1: options.detail.value[0],
      good_2: options.detail.value[1],
      good_3: options.detail.value[2],
      good_4: options.detail.value[3],
      good_5: options.detail.value[4],
      good_6: options.detail.value[5]
    })
  },
  access(){
    this.setData({
      modalName: null
    })
  }
})