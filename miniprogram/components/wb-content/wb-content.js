// components/wbcontent/wb-content.js
const Weibo = require('../../api/weibo')
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    weiboList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getData: function () {
      Weibo.weibo().then(data => {
        console.log(data);
        this.setData({
          weiboList: data.data.weiboList
        })
      })
      
    }
  }
})
