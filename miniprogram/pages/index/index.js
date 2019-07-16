//index.js
const Weibo = require('../../api/weibo.js')

Page({
  data:{
   weiboList: []
  },
  onClick(event) {
    wx.showToast({
      title: `点击标签 ${event.detail.index + 1}`,
      icon: 'none'
    })
  },
  onLoad: function(options) {
    // Do some initialize when page load.
    Weibo.weibo().then(data => {
      // console.log(data);
      this.setData({
        weiboList: data.data.weiboList
      })      
    })
    const getData = this.selectComponent("#content").getData()
    
  },
  getDataTest: function() {
    return new Promise((resolve, reject) => {
      wx.request({
        url:"https://api.weibo.com/oauth2/authorize",
        method: "GET",
        data:{
          client_id: "49996752",
          redirect_uri: "https://api.weibo.com/oauth2",
          display: "mobile"
        },
        success:(res)=>{
          console.log('-----',res.data);
          resolve(res)
        },
        fail:(err)=>{
          console.log(err);
        }
      })
    })
  }
 
})