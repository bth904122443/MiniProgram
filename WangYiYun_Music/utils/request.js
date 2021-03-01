/*
  发送ajax请求
  
*/
export default(url,data={},method="GET") => {
  wx.request({
    url,
    data,
    success:(res)=>{
      console.log("请求成功:",res);
    },
    fail:(err)=>{
      console.log("请求失败:",err);
    }
  })
}