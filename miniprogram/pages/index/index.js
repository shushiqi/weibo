//index.js
const Weibo = require('../../api/weibo.js')

Page({
  data:{
   weiboList: []
  },
  onLoad: function(options) {
    // Do some initialize when page load.
    Weibo.weibo().then(data => {
      console.log(data);
      this.setData({
        weiboList: data.data.weiboList
      })      
    })
    
    
  },
 
 
})