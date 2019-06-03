
const weibo = (data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ca4964aea0dc52bf3b67ff6/shushiqi/weibo',
      success:(res)=>{
        resolve(res.data)
      },
      fail:(err)=>{
        console.log(err);
      }
    })
  })
}

module.exports = {
  weibo
}
