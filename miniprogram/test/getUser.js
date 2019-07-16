
const getData = () => {
  return new Promise((resolve, reject) => {
    wx.request({
      url:"https://api.weibo.com/oauth2/authorize",
      method: "GET",
      data:{
        client_id: "49996752",
        redirect_uri: "http://www.baidu.com"
      },
      success:(res)=>{
        console.log('-----');
        
        resolve(res.code)
      },
      fail:(err)=>{
        console.log(err);
      }
    })
  })
}
module.exports = {
  getData
}