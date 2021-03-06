// tabBarComponent/tabBar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#ffffff",
        "color": "#979795",
        "selectedColor": "#1c1c1b",
        "list": [
          {
            "pagePath": "pages/home/home",
            "iconPath": "../images/tabbar/basics.png",
            "selectedIconPath": "../images/tabbar/basics_cur.png",
            "text": "主页"
          },
          {
            "pagePath": "pages/home/home",
            "iconPath": "../images/tabbar/basics.png",
            "selectedIconPath": "../images/tabbar/basics_cur.png",
            "text": "主页"
          },
          {
            "pagePath": "pages/home/home",
            "iconPath": "../images/tabbar/basics.png",
            "selectedIconPath": "../images/tabbar/basics_cur.png",
            "text": "主页"
          }
        ]
      }
    }
  },

  /**
   * 组件的初始数据
   */

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
