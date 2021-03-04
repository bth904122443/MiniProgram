/*
  发送ajax请求
  
*/
import config from "../utils/config.js";

export default(url,data={},method="GET") => {
  return new Promise((resolve,reject) => { /**/
    wx.request({
      url:config.mobileHost + url,
      data,
      success:(res)=>{
        // console.log("请求成功:",res);
        resolve(res.data); //resolve 用来修改promise的状态为成功状态resolved;
      },
      fail:(err)=>{
        // console.log("请求失败:",err);
        reject(err); //reject修改promise的状态为失败状态 rejected
      }
    })
  })
}